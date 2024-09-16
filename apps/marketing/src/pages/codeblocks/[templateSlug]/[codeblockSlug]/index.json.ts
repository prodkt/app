/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */
/* eslint-disable jsdoc/check-param-names */

import type { Database } from '@/database.types'
import type { APIContext } from 'astro'

import { type SupabaseClient } from '@supabase/supabase-js'

import { supabase } from '@/supabase'

const supabaseClient: SupabaseClient = supabase

type CodeblockTypes = Database['public']['Tables']['codeblocks']['Row']

/**
 *
 * @param root0
 * @param root0.params
 * @param root0.request
 */
export async function GET({ params }: APIContext) {
  const { slug, templateSlug, codeblockSlug } = params

  try {
    const codeblockData = await fetchCodeblockBySlug(
      supabaseClient,
      codeblockSlug,
    )

    if (!codeblockData) {
      console.error('No codeblock found for the specified slug.')
      return new Response(
        JSON.stringify({ error: 'No codeblock found for the specified slug.' }),
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    }

    const templateData = await fetchBuildTemplate(supabaseClient, templateSlug)

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
): Promise<CodeblockTypes | null> {
  const { data, error } = await supabase
    .from('codeblocks')
    .select('*,category(*),card_image(*)')
    .eq('slug', slug)
    .neq('status', 'draft')
    .single()

  if (error ?? !data) {
    console.error('Error fetching codeblock data:', error)
    return null
  }

  return data
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
): Promise<CodeblockTypes | null> {
  const { data, error } = await supabase
    .from('themes')
    .select(
      '*,build_template!inner(package_json,astro_config,env,layouts,logos(logo(filename_disk),logo_onDark(filename_disk))),logos(logo_onDark(filename_disk),logo(filename_disk))',
    )
    .eq('slug', templateSlug)
    .neq('status', 'draft')
    .single()

  if (error ?? !data) {
    console.error('Error fetching codeblock data:', error)
    return null
  }

  return data
}
