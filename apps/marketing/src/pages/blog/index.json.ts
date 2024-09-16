import type { Database } from '@/database.types'
import type { PostgrestResponse, SupabaseClient } from '@supabase/supabase-js'

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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const response: PostgrestResponse<ArticlesWithRelations> = await supabase
    .from('articles')
    .select(
      'id,status,sort,date_created,date_updated,author(title,last_name,first_name,avatar(filename_disk)),title,excerpt,slug,image(filename_disk)',
    )
    .neq('status', 'draft')
    .order('date_created', { ascending: false })

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
