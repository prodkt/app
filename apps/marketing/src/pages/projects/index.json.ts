import type { Database } from '@/database.types'
import type { PostgrestResponse, SupabaseClient } from '@supabase/supabase-js'

import { supabase } from '@/supabase'

type Project = Database['public']['Tables']['projects']['Row']

const supabaseClient: SupabaseClient<Database> = supabase

/**
 * Fetch flow data from the database.
 * @param supabase The Supabase client.
 * @returns A promise that resolves to an array of Nodes or null.
 */
async function fetchProjectData(
  supabase: SupabaseClient<Database>,
): Promise<Project[] | null> {
  const response: PostgrestResponse<Project> = await supabase
    .from('projects')
    .select(
      '*,primary_image(filename_disk),slug,workspace(*),brand_color_primary',
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
    const projectData = await fetchProjectData(supabaseClient)
    if (!projectData || projectData.length === 0) {
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
        projectData,
        status: 200,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Error fetching project data:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
