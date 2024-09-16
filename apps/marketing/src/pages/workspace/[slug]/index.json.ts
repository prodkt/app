/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param-description */

import type { Database } from '@/database.types'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { supabase } from '@/supabase'

const supabaseClient: SupabaseClient = supabase
type Workspace = Database['public']['Tables']['workspaces']['Row']
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

  const workspaceData = await fetchWorkspaceData(supabaseClient, slug)
  if (!workspaceData || workspaceData.length === 0) {
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
      params,
      workspaceData,
      // roadmapData,
      status: 200,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}

/**
 *
 * @param supabase The Supabase client.
 * @param slug The slug parameter.
 * @param workspaceSlug
 * @returns The flow data.
 */
async function fetchWorkspaceData(
  supabase: SupabaseClient,
  slug: string,
): Promise<Workspace[] | null> {
  const response = await supabase
    .from('workspaces')
    .select(
      `
	  title,slug,logos(logomark_backgroundFill(filename_disk))
	  )
	`,
    )
    .neq('status', 'draft')
    .eq('slug', slug)

  if (response.error === null) {
    return response.data as unknown as Workspace[]
  }
  console.error(response.error)
  return null
}