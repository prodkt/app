import type { SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { getSecret } from 'astro:env/server'

import { supabase } from '@/supabase'

/**
 *
 * @param root0 The API context.
 * @param root0.params The parameters object.
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
  const { slug } = context.params
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

  const { supabase: SupabaseClient } = supabaseResult
  try {
    const blogData = await fetchBlogData(SupabaseClient, slug)
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
): Promise<unknown[] | null> {
  const SUPABASE_DEV_MODE = getSecret('SUPABASE_DEV_MODE')
  const isDevMode = SUPABASE_DEV_MODE === 'true'

  // Start building the query
  let query = supabase
    .from('articles')
    .select(
      `
      *,slug,author(title,last_name,first_name,avatar(filename_disk)),image(filename_disk)
      `,
    )
    .eq('slug', slug)

  // Conditionally apply the filter based on isDevMode
  if (!isDevMode) {
    console.log('Excluding drafts from query.')
    query = query.neq('status', 'draft')
  }

  const response = await query

  if (response.error === null) {
    return response.data
  }

  console.error(response.error)
  return null
}
