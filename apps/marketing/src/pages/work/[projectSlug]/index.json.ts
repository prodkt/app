import type { Database } from '@/database.types'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { supabase } from '@/supabase'

type Work = Database['public']['Tables']['work']['Row']
type Project = Database['public']['Tables']['projects']['Row']
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
  const { supabase: SupabaseClient } = supabaseResult
  const { projectSlug } = context.params

  if (typeof projectSlug !== 'string') {
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

  const projectData = await fetchProjectData(SupabaseClient, projectSlug)
  if (!projectData || projectData.length === 0) {
    console.error('Data is empty or undefined')
    return new Response(JSON.stringify({ error: 'No data found.' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  const projectId = projectData[0]?.id

  const workData = await fetchWorkData(
    SupabaseClient as SupabaseClient<Database>,
    projectId,
  )

  if (!workData || workData.length === 0) {
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
      projectSlug,
      projectData,
      workData,
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
 * @param projectSlug
 * @returns The flow data.
 */
async function fetchProjectData(
  supabase: SupabaseClient,
  projectSlug: string,
): Promise<Project[] | null> {
  const response = await supabase
    .from('projects')
    .select(
      `
	  *
	  )
	`,
    )
    .neq('status', 'draft')
    .eq('slug', projectSlug)

  if (response.error === null && response.data !== null) {
    return response.data as unknown as Project[]
  }
  console.error(response.error)
  return null
}

/**
 *
 * @param supabase The Supabase client.
 * @param projectId The project ID.
 * @returns The flow data.
 */
async function fetchWorkData(
  supabase: SupabaseClient,
  projectId: string | undefined,
): Promise<Work[] | null> {
  const response = await supabase
    .from('work')
    .select(
      `
	  *,project(id,slug)
	  )
	`,
    )
    .neq('status', 'draft')
    .eq('project', projectId)

  if (response.error === null && response.data !== null) {
    return response.data as unknown as Work[]
  }
  console.error(response.error)
  return null
}
