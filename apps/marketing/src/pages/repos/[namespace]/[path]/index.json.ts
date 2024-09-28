import type { Database } from '@/database.types'
import type { PostgrestResponse, SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { supabase } from '@/supabase'

type Repos = Database['public']['Tables']['repos']['Row']

/**
 *
 * @param root0
 * @param root0.params
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
  const { namespace, path } = context.params

  try {
    // Fetch all repos from Supabase
    const repoData = await fetchRepoData(
      SupabaseClient as SupabaseClient<Database>,
    )
    if (!repoData || repoData.length === 0) {
      console.error('Data is empty or undefined')
      return new Response(JSON.stringify({ error: 'No data found.' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    // Fetch the GitLab repo using the namespace and path from the URL
    const gitLabRepo = await getGitLabRepo(namespace, path)

    if (!gitLabRepo) {
      return new Response(null, {
        status: 404,
        statusText: 'GitLab project not found',
      })
    }

    // Return the matched repo along with the GitLab data
    return new Response(
      JSON.stringify({
        params: context.params,
        repo: { gitLabRepo, repoData },
        status: 200,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Error fetching data:', error)
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
 * @param supabase
 */
async function fetchRepoData(
  supabase: SupabaseClient<Database>,
): Promise<Repos[] | null> {
  const response: PostgrestResponse<Repos> = await supabase
    .from('repos')
    .select('*,gitlab_project_id,image(filename_disk)')
    .neq('status', 'draft')

  if (response.error) {
    console.error(response.error)
    return null
  }

  return response.data
}

/**
 *
 * @param namespace
 * @param path
 */
async function getGitLabRepo(
  namespace: string | undefined,
  path: string | undefined,
) {
  try {
    const projectPath = `${namespace}/${path}`

    const response = await fetch(
      `https://gitlab.com/api/v4/projects/${encodeURIComponent(projectPath)}`,
    )
    const data = await response.json()

    // Log the full GitLab repo data for debugging
    // console.log('GitLab Repo Data:', data)

    return data
  } catch (error) {
    console.error('Error fetching data from GitLab', error)
    return null
  }
}
