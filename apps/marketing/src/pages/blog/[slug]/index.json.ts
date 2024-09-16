import type { Database } from '@/database.types'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { supabase } from '@/supabase'

const supabaseClient: SupabaseClient = supabase
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
/**
 *
 * @param root0 The API context.
 * @param root0.params The parameters object.
 * @returns The response object.
 */
export async function GET({ params }: APIContext) {
  const { slug } = params
  if (typeof slug !== 'string') {
    return new Response(
      JSON.stringify({ error: 'Slug is required and must be a string.' }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }

  try {
    const blogData = await fetchBlogData(supabaseClient, slug)
    if (!blogData || blogData.length === 0) {
      console.error('Data is empty or undefined')
      return new Response(JSON.stringify({ error: 'No data found.' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    // const blogSlug = blogData[0]?.slug

    return new Response(
      JSON.stringify({
        slug,
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
    console.error('Error fetching flow data:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}

/**
 *
 * @param supabase The Supabase client.
 * @param slug The slug parameter.
 * @returns The flow data.
 */
async function fetchBlogData(
  supabase: SupabaseClient,
  slug: string,
): Promise<ArticlesWithRelations[] | null> {
  const response = await supabase
    .from('articles')
    .select(
      `
	  *,slug,author(title,last_name,first_name,avatar(filename_disk)),image(filename_disk)
	  )
	`,
    )
    .neq('status', 'draft')
    .eq('slug', slug)

  if (response.error === null && response.data !== null) {
    return response.data as unknown as ArticlesWithRelations[]
  }
  console.error(response.error)
  return null
}
