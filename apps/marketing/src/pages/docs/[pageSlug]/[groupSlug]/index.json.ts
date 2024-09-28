import type { Database } from '@/database.types'
import type { PostgrestResponse, SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { supabase } from '@/supabase'

type Documentation = Database['public']['Tables']['documentation']['Row']

/**
 *
 * @param supabase
 * @param groupSlug
 */
async function fetchData(
  supabase: SupabaseClient<Database>,
  groupSlug: string | undefined,
): Promise<Documentation[] | null> {
  const response: PostgrestResponse<Documentation> = await supabase
    .from('documentation')
    .select('*, block, group!inner (group_slug,page!inner (title,slug)),group')
    .eq('group.group_slug', groupSlug ?? '')
  // .limit(1)
  // .single()

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
 * @param groupSlug
 * @param params
 * @param groupId
 * @returns A promise that resolves to an array of Nodes or null.
 */

/**
 * Handle GET request.
 * @param root0
 * @param root0.params
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
  const { groupSlug } = context.params
  try {
    const groupData = await fetchData(
      SupabaseClient as SupabaseClient<Database>,
      groupSlug,
    )
    if (!groupData || groupData.length === 0) {
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
        params: context.params,
        groupData,
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
