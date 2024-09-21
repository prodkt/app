import type { Database } from '@/database.types'
import type { PostgrestResponse, SupabaseClient } from '@supabase/supabase-js'

import { getSecret } from 'astro:env/server'

import { supabase } from '@/supabase'

type Articles = Database['public']['Tables']['articles']['Row']
type Authors = Database['public']['Tables']['authors']['Row']
type Files = Database['public']['Tables']['directus_files']['Row']

interface ArticlesWithRelations {
  id: Articles['id']
  status: Articles['status']
  sort: Articles['sort']
  date_created: Articles['date_created']
  date_updated: Articles['date_updated']
  title: Articles['title']
  excerpt: Articles['excerpt']
  slug: Articles['slug']
  author?:
    | (Pick<Authors, 'title' | 'last_name' | 'first_name'> & {
        avatar: Pick<Files, 'filename_disk'> | null
      })
    | null
  image: Pick<Files, 'filename_disk'> | null
}
const supabaseClient: SupabaseClient<Database> = supabase

/**
 * Fetch flow data from the database.
 * @param supabase The Supabase client.
 * @returns A promise that resolves to an array of Nodes or null.
 */
async function fetchBlogData(
  supabase: SupabaseClient<Database>,
): Promise<ArticlesWithRelations[] | null> {
  const SUPABASE_DEV_MODE = getSecret('SUPABASE_DEV_MODE')
  const isDevMode = SUPABASE_DEV_MODE === 'true'

  console.log('isDevMode:', isDevMode)

  // Start building the query
  let query = supabase
    .from('articles')
    .select(
      'id,status,sort,date_created,date_updated,author(title,last_name,first_name,avatar(filename_disk)),title,excerpt,slug,image(filename_disk)',
    )
    .order('date_created', { ascending: false })

  // Conditionally apply the filter based on isDevMode
  if (!isDevMode) {
    console.log('Excluding drafts from query.')
    query = query.neq('status', 'draft')
  }

  const response: PostgrestResponse<ArticlesWithRelations> = await query

  // Log the response to see what is returned
  console.log('Response received:', response)

  // Check for errors
  if (response.error) {
    console.error('Error fetching articles:', response.error)
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
    const blogData = await fetchBlogData(supabaseClient)
    if (!blogData || blogData.length === 0) {
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
        blogData,
        status: 200,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Error fetching blog data:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
