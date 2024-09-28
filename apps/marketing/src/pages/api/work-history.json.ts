/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */

import type { Database } from '@/database.types'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { supabase } from '@/supabase'

type Resumes = Database['public']['Tables']['resumes']['Row']
/**
 *
 * @param supabase
 */
async function fetchWorkHistoryData(
  supabase: SupabaseClient<Database>,
): Promise<Resumes[] | null> {
  const response = await supabase
    .from('resumes')
    .select('*, status,title,label,image,email,phone,url,summary,work,skills')
    .eq('title', 'Bryan Funk')
    .eq('status', 'published')

  if (response.error) {
    console.error(response.error)
    return null
  }

  return response.data as Resumes[]
}

/**
 * Handle GET request.
 * @param root0
 * @param root0.params
 * @param context
 * @returns The response object.
 */
export async function GET(context: APIContext) {
  const supabaseResult = await supabase(context)

  const { supabase: SupabaseClient } = supabaseResult
  try {
    const WorkHistory = await fetchWorkHistoryData(
      SupabaseClient as SupabaseClient<Database>,
    )
    if (!WorkHistory || WorkHistory.length === 0) {
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
        WorkHistory,
        status: 200,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Error fetching changelog data:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
