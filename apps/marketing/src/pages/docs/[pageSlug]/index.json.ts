import type { Database } from '@/database.types'
import type { PostgrestResponse, SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { supabase } from '@/supabase'

type Documentation = Database['public']['Tables']['documentation']['Row']

/**
 * Fetch flow data from the database.
 * @param supabase The Supabase client.
 * @param pageSlug
 * @param slug
 * @param pageSlugs
 * @returns A promise that resolves to an array of Nodes or null.
 */
async function fetchData(
  supabase: SupabaseClient<Database>,
  pageSlug: string | undefined,
): Promise<Documentation[] | null> {
  const response: PostgrestResponse<Documentation> = await supabase
    .from('documentation')
    .select(
      '*, group!inner (page!inner (slug, sort, title,image(filename_disk),excerpt), sort, id)',
    )
    .eq('group.page.slug', pageSlug ? pageSlug : '')
    .order('sort', { referencedTable: 'group', ascending: false })

  // Type guard to check if response.error exists
  if (response.error) {
    console.error(response.error)
    return null
  }

  return response.data
}

/**
 * Fetch flow data from the database.
 * @param supabase The Supabase client.
 * @param pageSlug
 * @param slug
 * @param pageSlugs
 * @param groupSlug
 * @returns A promise that resolves to an array of Nodes or null.
 */
/**
 * Handle GET request.
 * @param root0
 * @param root0.params
 * @returns The response object.
 */

/**
 *
 * @param root0
 * @param root0.params
 * @param root0.request
 * @param context
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
  const { pageSlug } = context.params
  try {
    const docData = await fetchData(
      SupabaseClient as SupabaseClient<Database>,
      pageSlug,
    )
    if (!docData || docData.length === 0) {
      console.error('Data is empty or undefined')
      return new Response(
        JSON.stringify({
          error: 'No data found.',
          path: new URL(context.request.url).pathname,
        }),
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    }
    return new Response(
      JSON.stringify({
        params: context.params,
        docData,
        fetchData,
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
