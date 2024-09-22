/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */
/* eslint-disable jsdoc/require-jsdoc */

import type { Database } from '@/database.types'
import type { SupabaseClient } from '@supabase/supabase-js'

import { getSecret } from 'astro:env/server'

import { supabase } from '@/supabase'

// Function to fetch codeblock data
/**
 *
 * @param supabase
 */
async function fetchCodeblockData(supabase: SupabaseClient<Database>) {
  const SUPABASE_DEV_MODE = getSecret('SUPABASE_DEV_MODE')
  const isDevMode = SUPABASE_DEV_MODE === 'true'

  // Build the query
  let query = supabase
    .from('codeblocks')
    .select('id, title, slug, category(*), card_image(filename_disk)')
    .order('date_created', { ascending: false })

  // Conditionally apply the filter based on isDevMode
  if (!isDevMode) {
    query = query.neq('status', 'draft')
  }

  const response = await query

  if (response.error) {
    console.error('Error fetching codeblocks:', response.error)
    return null
  }

  return response.data
}

async function fetchThemeData(supabase: SupabaseClient<Database>) {
  const SUPABASE_DEV_MODE = getSecret('SUPABASE_DEV_MODE')
  const isDevMode = SUPABASE_DEV_MODE === 'true'

  // console.log('isDevMode:', isDevMode)

  // Build the query
  let query = supabase
    .from('themes')
    .select(
      '*,logos!inner(logo_onDark!inner(filename_disk),logo!inner(filename_disk))',
    )

  // Conditionally apply the filter based on isDevMode
  if (!isDevMode) {
    query = query.neq('status', 'draft')
  }

  const response = await query

  if (response.error) {
    console.error('Error fetching themes:', response.error)
    return null
  }

  return response.data
}

async function fetchCodeblockThemeData(supabase: SupabaseClient<Database>) {
  // console.log('isDevMode:', isDevMode)

  // Build the query
  const query = supabase
    .from('codeblocks_themes')
    .select('codeblocks_id, themes_id')

  const response = await query

  if (response.error) {
    console.error('Error fetching themes:', response.error)
    return null
  }

  return response.data
}

// type Files = Database['public']['Tables']['codeblocks']['Row']
type Codeblocks = Database['public']['Tables']['codeblocks']['Row']
type CodeblockThemes = Database['public']['Tables']['codeblocks_themes']['Row']
type Themes = Database['public']['Tables']['themes']['Row']

interface GroupData {
  id: Codeblocks['id'] | null
  codeblockData: Codeblocks[] | null
  themeData: Themes | null
  codeblockThemeData: CodeblockThemes[] | null
}
export async function GET() {
  try {
    const codeblockData = await fetchCodeblockData(supabase)
    const themeData = await fetchThemeData(supabase)
    const codeblockThemeData = await fetchCodeblockThemeData(supabase)

    if (!codeblockData || !themeData || !codeblockThemeData) {
      return new Response(
        JSON.stringify({
          error: 'No groupedData found.',
          codeblockData,
          themeData,
          codeblockThemeData,
        }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }
    // console.log('Mapping codeblocks to themes...')
    // Manually map codeblocks to themes
    const groupedData = codeblockData.map((codeblock) => {
      const matchingThemes = codeblockThemeData
        .filter((ct) => ct.codeblocks_id === codeblock.id)
        .map((ct) =>
          themeData.find(
            (theme: GroupData['themeData']) => theme?.id === ct.themes_id,
          ),
        )

      return {
        ...codeblock,
        themes: matchingThemes.filter(Boolean), // Filter out undefined if no match
      }
    })
    // console.log(JSON.stringify(groupedData, null, 3))

    return new Response(
      JSON.stringify({
        groupedData,
        status: 200,
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Error fetching data:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
