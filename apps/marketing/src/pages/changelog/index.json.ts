import type { Database } from '@/database.types'
import type { PostgrestResponse, SupabaseClient } from '@supabase/supabase-js'

import { supabase } from '@/supabase'

type Changelog = Database['public']['Tables']['changelogs']['Row']

const supabaseClient: SupabaseClient<Database> = supabase

/**
 * Fetch flow data from the database.
 * @param supabase The Supabase client.
 * @returns A promise that resolves to an array of Nodes or null.
 */
async function fetchChangelogData(
  supabase: SupabaseClient<Database>,
): Promise<Changelog[] | null> {
  const response: PostgrestResponse<Changelog> = await supabase
    .from('changelogs')
    .select(
      '*,id,title,content,project_id,publish_date,published,summary,author_id(*),slug,image(filename_disk),improvements',
    )
    .neq('published', false)

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
    const changelogData = await fetchChangelogData(supabaseClient)
    if (!changelogData || changelogData.length === 0) {
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
        changelogData,
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