import type { Database } from '@/database.types'
import type { PostgrestResponse, SupabaseClient } from '@supabase/supabase-js'

import { supabase } from '@/supabase'

type Work = Database['public']['Tables']['work']['Row']

const supabaseClient: SupabaseClient = supabase

/**
 * Fetch flow data from the database.
 * @param supabase The Supabase client.
 * @param supabaseClient
 * @returns A promise that resolves to an array of Nodes or null.
 */
async function fetchWorkData(supabase: SupabaseClient): Promise<Work[] | null> {
  const response: PostgrestResponse<Work> = await supabase
    .from('work')
    .select(
      `
      *,primary_image(filename_disk),project(slug)
    `,
    )
    .neq('status', 'draft')

  // Type guard to check if response.error exists
  if (response.error) {
    console.error(response.error)
    return null
  }

  return response.data
}

/**
 * Handle GET request.
 * @returns The response object.
 */
export async function GET() {
  try {
    const workData = await fetchWorkData(supabaseClient)
    if (!workData || workData.length === 0) {
      console.error('Data is empty or undefined')
      return new Response(JSON.stringify({ error: 'No data found.' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    return new Response(
      JSON.stringify({
        workData,
        status: 200,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Error fetching work data:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
