/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable jsdoc/require-jsdoc */

import type { Database } from '@/database.types'
import type { PostgrestResponse, SupabaseClient } from '@supabase/supabase-js'

import { supabase } from '@/supabase'

type CodeblockThemes = Database['public']['Tables']['codeblocks_themes']['Row']

async function fetchCodeblockData(
  supabase: SupabaseClient<Database>,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
): Promise<any[] | null> {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const response: PostgrestResponse<any> = await supabase
    .from('codeblocks')
    .select('id, title, slug, category(*), card_image(filename_disk)')
    .neq('status', 'draft')

  if (response.error) {
    console.error('Error fetching codeblocks:', response.error)
    return null
  }

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (response.data) {
    // console.log('Fetched Codeblock data:', response.data) // Log the data
    return response.data
  }

  return null
}

async function fetchThemeData(
  supabase: SupabaseClient<Database>,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
): Promise<any[] | null> {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const response: PostgrestResponse<any> = await supabase
    .from('themes')
    .select('id, title, slug, build_template, logo(filename_disk), status')
    .neq('status', 'draft')

  if (response.error) {
    console.error('Error fetching themes:', response.error)
    return null
  }

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (response.data) {
    // console.log('Fetched Theme data:', response.data) // Log the data
    return response.data
  }

  return null
}

async function fetchCodeblockThemeData(
  supabase: SupabaseClient<Database>,
): Promise<CodeblockThemes[] | null> {
  const response: PostgrestResponse<CodeblockThemes> = await supabase
    .from('codeblocks_themes')
    .select('codeblocks_id, themes_id')

  if (response.error) {
    console.error('Error fetching codeblocks_themes:', response.error)
    return null
  }

  return response.data
}

export async function GET() {
  try {
    const codeblockData = await fetchCodeblockData(supabase)
    const themeData = await fetchThemeData(supabase)
    const codeblockThemeData = await fetchCodeblockThemeData(supabase)

    if (!codeblockData || !themeData || !codeblockThemeData) {
      return new Response(JSON.stringify({ error: 'No data found.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    console.log('Mapping codeblocks to themes...')

    // Manually map codeblocks to themes
    const groupedData = codeblockData.map((codeblock) => {
      const matchingThemes = codeblockThemeData
        .filter((ct) => {
          const isMatch = ct.codeblocks_id === codeblock.id
          if (isMatch) {
            console.log(
              `Found match for codeblock ID ${codeblock.id} with theme ID ${ct.themes_id}`,
            )
          }
          return isMatch
        })
        .map((ct) => {
          const theme = themeData.find((theme) => theme.id === ct.themes_id)
          if (theme) {
            console.log(`Theme found for theme ID ${ct.themes_id}:`, theme)
          } else {
            console.warn(`No theme found for theme ID ${ct.themes_id}`)
          }
          return theme
        })

      return {
        ...codeblock,
        themes: matchingThemes.filter(Boolean), // Filter out undefined if no match
      }
    })

    // console.log('Final grouped data:', groupedData)

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