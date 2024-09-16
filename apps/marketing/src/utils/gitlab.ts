// lib/gitlab.ts

/**
 *
 * @param namespace
 * @param path
 * @param gitlabProjectId
 */
export async function getGitLabRepo(
  gitlabProjectId?: string | null | undefined,
) {
  const gitlabId = `gitlabProjectId = ${gitlabProjectId}`

  try {
    const response = await fetch(
      `https://gitlab.com/api/v4/projects/${gitlabId}`,
    )
    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching data from GitLab', error)
    return null
  }
}
