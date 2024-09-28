import type { Database } from '@/database.types'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { supabase } from '@/supabase'

type Project = Database['public']['Tables']['projects']['Row']
type ProjectIssues = Database['public']['Tables']['issues']['Row']
/**
 *
 * @param root0 The API context.
 * @param root0.params The parameters object.
 * @param context
 * @returns The response object.
 */
export async function GET(context: APIContext) {
  const supabaseResult = await supabase(context)

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

  const projectListing = await fetchAllProjects(SupabaseClient)
  const issueData = await fetchIssueData(SupabaseClient, projectId)

  return new Response(
    JSON.stringify({
      context,
      projectSlug,
      projectData,
      issueData,
      projectListing,
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
	  *,logo(filename_disk)
	  )
	`,
    )
    .neq('status', 'draft')
    .eq('slug', projectSlug)

  if (response.error === null) {
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
async function fetchIssueData(
  supabase: SupabaseClient,
  projectId: string | undefined,
): Promise<ProjectIssues[] | null> {
  const response = await supabase
    .from('issues')
    .select(
      `
	  *,project,status(*,id,value,color,label)
	  )
	`,
    )
    .eq('project', projectId)

  if (response.error === null) {
    return response.data as unknown as ProjectIssues[]
  }
  console.error(response.error)
  return null
}

/**
 *
 * @param supabase The Supabase client.
 * @param slug The slug parameter.
 * @param projectSlug
 * @returns The flow data.
 */
async function fetchAllProjects(
  supabase: SupabaseClient,
): Promise<Project[] | null> {
  const response = await supabase
    .from('projects')
    .select(
      `
	  id,title,slug,logos(logomark_backgroundFill(filename_disk))
	  )
	`,
    )
    .neq('status', 'draft')

  if (response.error === null) {
    return response.data as unknown as Project[]
  }
  console.error(response.error)
  return null
}
