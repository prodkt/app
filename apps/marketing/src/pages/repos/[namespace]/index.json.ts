import type { Database } from '@/database.types'
import type { PostgrestResponse, SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { supabase } from '@/supabase'

type Repos = Database['public']['Tables']['repos']['Row']

const supabaseClient: SupabaseClient<Database> = supabase

/**
 *
 * @param root0
 * @param root0.params
 */
export async function GET({ params }: APIContext) {
  // const { namespace } = params

  try {
    const repoData = await fetchRepoData(supabaseClient)
    if (!repoData || repoData.length === 0) {
      console.error('Data is empty or undefined')
      return new Response(JSON.stringify({ error: 'No data found.' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    // Fetch all gitLabRepos based on the gitlab_project_ids from repoData
    const gitLabRepos = await Promise.all(
      repoData.map((repo) => getGitLabRepo(repo.gitlab_project_id)),
    )

    // Combine each repoData with its corresponding gitLabRepo
    const repos = repoData.map((repo, index) => {
      const gitLabRepo = gitLabRepos[index]
      return {
        ...repo,
        gitLabRepo,
      }
    })

    return new Response(
      JSON.stringify({
        params,
        repos,
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
 * @param gitlabProjectId
 */
async function getGitLabRepo(gitlabProjectId: string | null | undefined) {
  try {
    const response = await fetch(
      `https://gitlab.com/api/v4/projects/${gitlabProjectId}`,
    )
    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching data from GitLab', error)
    return null
  }
}
