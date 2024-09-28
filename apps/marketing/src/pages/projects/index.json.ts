import type { Database } from '@/database.types'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { getSecret } from 'astro:env/server'

import { supabase } from '@/supabase'

type Project = Database['public']['Tables']['projects']['Row']

/**
 * Fetch flow data from the database.
 * @param supabase The Supabase client.
 * @returns A promise that resolves to an array of Nodes or null.
 */
async function fetchProjectData(
  supabase: SupabaseClient<Database>,
): Promise<Project[] | null> {
  const SUPABASE_DEV_MODE = getSecret('SUPABASE_DEV_MODE')
  const isDevMode = SUPABASE_DEV_MODE === 'true'

  // console.log('isDevMode:', isDevMode)

  // Start building the query
  let query = supabase
    .from('projects')
    .select(
      '*,primary_image(filename_disk),slug,workspace(*),brand_color_primary,icon:logos!inner(logomark_backgroundFill!inner(filename_disk))',
    )

  // Conditionally apply the filter based on isDevMode
  if (!isDevMode) {
    // console.log('Excluding drafts from query.')
    query = query.neq('status', 'draft')
  }

  const response = await query

  // Log the response to see what is returned
  // console.log('Response received:', response)

  // Check for errors
  if (response.error) {
    console.error('Error fetching articles:', response.error)
    return null
  }

  return response.data
}

/**
 * Handle GET request.
 * @param context
 * @returns The response object.
 */
export async function GET(context: APIContext) {
  const supabaseResult = await supabase(context)
  if (!supabaseResult?.supabase) {
    console.error('Failed to initialize Supabase client')
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  const { supabase: SupabaseClient } = supabaseResult
  try {
    const projectData = await fetchProjectData(
      SupabaseClient as SupabaseClient<Database>,
    )
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
