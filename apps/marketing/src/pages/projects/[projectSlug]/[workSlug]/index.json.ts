import type { Database } from '@/database.types'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { supabase } from '@/supabase'

const supabaseClient: SupabaseClient = supabase
type Work = Database['public']['Tables']['work']['Row']
type Technology = Database['public']['Tables']['work_technology']['Row']
type Template = Database['public']['Tables']['work_showcase_templates']['Row']
type TemplateFiles =
  Database['public']['Tables']['showcase_templates_files']['Row']
/**
 *
 * @param root0 The API context.
 * @param root0.params The parameters object.
 * @returns The response object.
 */
export async function GET({ params }: APIContext) {
  const { projectSlug, workSlug } = params

  if (typeof workSlug !== 'string') {
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

  const workData = await fetchWorkData(supabaseClient, workSlug)

  if (!workData || workData.length === 0) {
    console.error('Data is empty or undefined')
    return new Response(JSON.stringify({ error: 'No data found.' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  const workId = workData[0]?.id

  const technologyData = await fetchTechnologyData(supabaseClient, workId)
  const templateData = await fetchTemplateData(supabaseClient, workId)

  // Extract all templateIds from templateData
  const templateIds =
    templateData?.map((template) => template.showcase_templates_id) ?? []

  // Fetch template files using the extracted templateIds
  const templateFiles = await fetchTemplateFiles(supabaseClient, templateIds)

  return new Response(
    JSON.stringify({
      projectSlug,
      workSlug,
      technologyData,
      templateFiles,
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
 * @param workSlug The work slug.
 * @returns A promise that resolves to an array of work data or null.
 */
async function fetchWorkData(
  supabase: SupabaseClient,
  workSlug: string,
): Promise<Work[] | null> {
  const response = await supabase
    .from('work')
    .select(
      `
	  *,project(logo(filename_disk),name,slug),primary_image(filename_disk)
	  )
	`,
    )
    .neq('status', 'draft')
    .eq('slug', workSlug)

  if (response.error === null && response.data !== null) {
    return response.data as unknown as Work[]
  }
  console.error(response.error)
  return null
}

/**
 *
 * @param supabase The Supabase client.
 * @param workSlug The work slug.
 * @param workId
 * @returns A promise that resolves to an array of work data or null.
 */
async function fetchTechnologyData(
  supabase: SupabaseClient,
  workId: string | undefined,
): Promise<Technology[] | null> {
  const response = await supabase
    .from('work_technology')
    .select(
      `
	  *,work_id,technology_id(name,logo(filename_disk))
	  )
	`,
    )
    .eq('work_id', workId)

  if (response.error === null && response.data !== null) {
    return response.data as unknown as Technology[]
  }
  console.error(response.error)
  return null
}

/**
 *
 * @param supabase The Supabase client.
 * @param workId The work ID.
 * @returns A promise that resolves to an array of work data or null.
 */
async function fetchTemplateData(
  supabase: SupabaseClient,
  workId: string | undefined,
): Promise<Template[] | null> {
  const response = await supabase
    .from('work_showcase_templates')
    .select(
      `
	  *
	  )
	`,
    )
    .eq('work_id', workId)

  if (response.error === null && response.data !== null) {
    return response.data as unknown as Template[]
  }
  console.error(response.error)
  return null
}

/**
 *
 * @param supabase The Supabase client.
 * @param templateIds The array of template IDs.
 * @returns A promise that resolves to an array of template files or null.
 */
async function fetchTemplateFiles(
  supabase: SupabaseClient,
  templateIds: (string | null | undefined)[],
): Promise<TemplateFiles[] | null> {
  // Filter out null or undefined IDs
  const validTemplateIds = templateIds.filter((id): id is string => !!id)

  if (validTemplateIds.length === 0) {
    console.error('No valid templateIds provided')
    return null
  }

  const response = await supabase
    .from('showcase_templates_files')
    .select(
      `
	  template:showcase_templates_id(title,type),directus_files_id(filename_disk)
	  )
	`,
    )
    .in('showcase_templates_id', validTemplateIds)

  if (response.error === null && response.data !== null) {
    return response.data as unknown as TemplateFiles[]
  }
  console.error(response.error)
  return null
}
