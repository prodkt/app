import type { Database, Json } from '@/database.types'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { supabase } from '@/supabase'

interface Page {
  slug: string
  title: string
  status: string
}

interface Group {
  title: string
  page: Page
  group_slug: string
  sort: number | null
  // other fields...
}

interface Documentation {
  anchor_slug: string | null
  block: Json | null
  date_created: string | null
  date_updated: string | null
  group: Group[]
  id: string
  sort: number | null
  status: string
  title: string
  user_created: string | null
  user_updated: string | null
}

/**
 *
 * @param supabase
 */
async function fetchDocumentationData(
  supabase: SupabaseClient<Database>,
): Promise<Documentation[] | null> {
  const response = await supabase
    .from('documentation')
    .select(
      `
      *,
      group (
        title,
        page (
          slug,
          title,
          status
        ),
        group_slug,
        sort
      )
    `,
    )
    .neq('status', 'draft')

  if (response.error) {
    console.error(response.error)
    return null
  }

  return response.data as unknown as Documentation[]
}

/**
 *
 * @param supabase
 */
async function fetchDocumentationPages(
  supabase: SupabaseClient<Database>,
): Promise<Database['public']['Tables']['documentation_page']['Row'] | null> {
  const response = await supabase
    .from('documentation_page')
    .select(
      `
      *,slug,
          title,
          status,
          image!inner(filename_disk),excerpt,
          order_id,
          sort
    `,
    )
    .neq('status', 'draft')

  if (response.error) {
    console.error(response.error)
    return null
  }

  return response.data as unknown as Database['public']['Tables']['documentation_page']['Row']
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
    const documentationData = await fetchDocumentationData(
      SupabaseClient as SupabaseClient<Database>,
    )
    if (!documentationData || documentationData.length === 0) {
      console.error('Data is empty or undefined')
      return new Response(JSON.stringify({ error: 'No data found.' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    const documentationPages = await fetchDocumentationPages(
      SupabaseClient as SupabaseClient<Database>,
    )
    if (!documentationPages) {
      console.error('Data is empty or undefined')
      return new Response(JSON.stringify({ error: 'No data found.' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    const groupSlugs = documentationData.map(
      (group) => group.group[0]?.group_slug,
    )
    const pageSlugs = documentationData.map((page) => page.group[0]?.page?.slug)
    return new Response(
      JSON.stringify({
        pageSlugs,
        groupSlugs,
        documentationPages,
        documentationData,
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
