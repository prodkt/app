/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */
/* eslint-disable jsdoc/check-param-names */

import type { SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { getSecret } from 'astro:env/server'

import { supabase } from '@/supabase'

/**
 *
 * @param root0
 * @param root0.params
 * @param root0.request
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
  const { slug, templateSlug, codeblockSlug } = context.params

  try {
    const codeblockData = await fetchCodeblockBySlug(
      SupabaseClient,
      codeblockSlug,
    )

    if (!codeblockData) {
      console.error('No codeblock found for the specified slug.')
      return new Response(
        JSON.stringify({
          error: 'No codeblock found for the specified slug.',
          codeblockSlug,
        }),
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    }

    const templateData = await fetchBuildTemplate(SupabaseClient, templateSlug)

    if (!templateData) {
      console.error('No build template found for theme.')
      return new Response(
        JSON.stringify({ error: 'No theme found for the specified theme.' }),
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    }

    const NamedExport = codeblockData.named_export

    return new Response(
      JSON.stringify({
        slug,
        codeblockSlug,
        templateSlug,
        NamedExport,
        templateData,
        codeblockData,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Error fetching codeblock data:', error)
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
 * @param slug
 */
async function fetchCodeblockBySlug(
  supabase: SupabaseClient,
  slug: string | undefined,
) {
  const SUPABASE_DEV_MODE = getSecret('SUPABASE_DEV_MODE')
  const isDevMode = SUPABASE_DEV_MODE === 'true'

  let query = supabase
    .from('codeblocks')
    .select('*,category(*),card_image(*),isStory,storybook_id')
    .eq('slug', slug)

  // Conditionally apply the filter based on isDevMode
  if (!isDevMode) {
    query = query.neq('status', 'draft')
  }

  const response = await query.single()

  if (response.error) {
    console.error('Error fetching themes:', response.error)
    return null
  }

  return response.data
}
/**
 *
 * @param supabase
 * @param themeSlug
 * @param templateSlug
 */
async function fetchBuildTemplate(
  supabase: SupabaseClient,
  templateSlug: string | undefined,
) {
  const SUPABASE_DEV_MODE = getSecret('SUPABASE_DEV_MODE')
  const isDevMode = SUPABASE_DEV_MODE === 'true'

  // Build the query
  let query = supabase
    .from('themes')
    .select(
      '*, build_template!inner(package_json,astro_config,env,layouts, logos!inner(logo!inner(filename_disk), logo_onDark!inner(filename_disk))),logos!inner(logo_onDark!inner(filename_disk),logo!inner(filename_disk))',
    )
    .eq('slug', templateSlug)

  // Conditionally apply the filter based on isDevMode
  if (!isDevMode) {
    query = query.neq('status', 'draft')
  }

  const response = await query.single()

  if (response.error) {
    console.error('Error fetching themes:', response.error)
    return null
  }

  return response.data
}
