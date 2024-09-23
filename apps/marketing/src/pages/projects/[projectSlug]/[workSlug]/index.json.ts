/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-param-description */
/* eslint-disable jsdoc/check-param-names */

import type { Database } from '@/database.types'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { getSecret } from 'astro:env/server'

import { supabase } from '@/supabase'

const supabaseClient: SupabaseClient = supabase
type Work = Database['public']['Tables']['work']['Row']
type Technology = Database['public']['Tables']['work_technology']['Row']
type Template = Database['public']['Tables']['work_showcase_templates']['Row']
// type TemplateFiles =
//   Database['public']['Tables']['showcase_templates_files']['Row']
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
  const SUPABASE_DEV_MODE = getSecret('SUPABASE_DEV_MODE')
  const isDevMode = SUPABASE_DEV_MODE === 'true'

  // Start building the query
  let query = supabase
    .from('work')
    .select(
      `
    *,project(logo(filename_disk),name,slug),primary_image(filename_disk)
    `,
    )
    .eq('slug', workSlug)

  // Conditionally apply the filter based on isDevMode
  if (!isDevMode) {
    // console.log('Excluding drafts from query.')
    query = query.neq('status', 'draft')
  }

  const response = await query

  if (response.error === null) {
    return response.data
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
  const SUPABASE_DEV_MODE = getSecret('SUPABASE_DEV_MODE')
  const isDevMode = SUPABASE_DEV_MODE === 'true'

  // Start building the query
  let query = supabase
    .from('work_technology')
    .select(
      `
    *,work_id,technology_id(name,logo(filename_disk))
    `,
    )
    .eq('work_id', workId)

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
  const SUPABASE_DEV_MODE = getSecret('SUPABASE_DEV_MODE')
  const isDevMode = SUPABASE_DEV_MODE === 'true'

  // Start building the query
  let query = supabase
    .from('work_showcase_templates')
    .select(
      `
    *
    `,
    )
    .eq('work_id', workId)

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

/**
 *
 * @param supabase The Supabase client.
 * @param templateIds The array of template IDs.
 * @returns A promise that resolves to an array of template files or null.
 */
async function fetchTemplateFiles(
  supabase: SupabaseClient,
  templateIds: (string | null | undefined)[],
): Promise<unknown> {
  const validTemplateIds = templateIds.filter((id): id is string => !!id)
  const SUPABASE_DEV_MODE = getSecret('SUPABASE_DEV_MODE')
  const isDevMode = SUPABASE_DEV_MODE === 'true'

  // Start building the query
  let query = supabase
    .from('showcase_templates_files')
    .select(
      `
    template:showcase_templates_id(title,type),directus_files_id(filename_disk)
    `,
    )
    .in('showcase_templates_id', validTemplateIds)

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
