/* eslint-disable jsdoc/require-param-description */

import type { Database } from '@/database.types'
import type { QueryData, SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { supabase } from '@/supabase'

// import { type WorkShowcaseProps } from '@/types.d'

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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const ProjectId = workData[0]?.project?.id

  // const tokenData = await fetchTokenData(supabaseClient)
  // if (!tokenData || tokenData.length === 0) {
  //   console.error('Design Tokens are empty or undefined')
  //   return new Response(JSON.stringify({ error: 'No design tokens found.' }), {
  //     status: 404,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  // }

  const technologyData = await fetchTechnologyData(supabaseClient, workId)
  const templateData = await fetchTemplateData(supabaseClient, workId)

  // Extract all templateIds from templateData
  const templateIds =
    templateData?.map((template) => template.showcase_templates_id) ?? []

  // Fetch template files using the extracted templateIds
  const templateFiles = await fetchTemplateFiles(supabaseClient, templateIds)

  const { data: FilteredTokens, error: tokensError } = await supabase
    .from('projects_design_tokens')
    .select('projects_id,design_tokens_id!inner(*,id,title,palettes_json)')
    .eq('projects_id', ProjectId)

  // type ProjectDesignTokenTypes = QueryData<typeof FilteredTokens>['design_tokens_id'];
  // type DesignTokenTypes = QueryData<typeof FilteredTokens>['palettes_json'];
  if (tokensError) {
    throw new Error(
      `Error fetching projects_design_tokens: ${tokensError.message}`,
    )
  }

  console.log(FilteredTokens)

  const ProjectDesignTokens = FilteredTokens.map(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (palette) => palette.design_tokens_id.palettes_json,
  )
  return new Response(
    JSON.stringify({
      projectSlug,
      workSlug,
      technologyData,
      templateFiles,
      workData,
      ProjectDesignTokens,
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
	  *,content_block,project(*,id,logos(logo(filename_disk),logo_onDark(filename_disk)),logo_3d(filename_disk),logo_wireframe(filename_disk),logo_creative(filename_disk),base_type,base_type_sample(filename_disk),code_type,code_type_sample(filename_disk),logo_type,logo_type_sample(filename_disk),expressive_type,expressive_type_sample(filename_disk))
	  )
	`,
    )
    .neq('status', 'draft')
    .eq('slug', workSlug)
  type WorkTypes = QueryData<typeof response>
  if (response.error === null) {
    return response.data as unknown as WorkTypes[]
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
  type TechnologyTypes = QueryData<typeof response>

  if (response.error === null) {
    return response.data as TechnologyTypes[]
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
  type TemplateTypes = QueryData<typeof response>

  if (response.error === null) {
    return response.data as unknown as TemplateTypes[]
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
  type TemplateFileTypes = QueryData<typeof response>

  if (response.error === null) {
    return response.data as unknown as TemplateFileTypes[]
  }
  console.error(response.error)
  return null
}

/* START DESIGN TOKENS */
/**
 *
 * @param supabase
 */
// async function fetchTokenData(supabase: SupabaseClient) {
//   const response = await supabase.from('design_tokens').select(`
//     *, title, palettes_json
//   `)
//   type TokenTypes = QueryData<typeof response>

//   if (response.error === null) {
//     return response.data as unknown as TokenTypes
//   } else {
//     console.error(response.error)
//     return null
//   }
// }

/**
 *
 * @param supabase
 */
// async function useTokenData(supabase: SupabaseClient) {
//   const tokenData = await fetchTokenData(supabase)
//   if (tokenData) {
//     console.log(tokenData)
//   } else {
//     console.log('Failed to fetch token data')
//   }
// }
