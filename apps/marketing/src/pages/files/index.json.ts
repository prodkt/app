import type { Database } from '@/database.types'
import type { PostgrestResponse, SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { supabase } from '@/supabase'

type FileTypes = Database['public']['Tables']['file']['Row']
type FolderTypes = Database['public']['Tables']['folder']['Row']
type ProjectTypes = Database['public']['Tables']['projects']['Row']
type SrcFiles = Database['public']['Tables']['directus_files']['Row']

interface FilesWithRelations {
  id: FileTypes['id']
  title: FileTypes['title']
  is_external: FileTypes['is_external']
  src_external: FileTypes['src_external']
  src?: {
    filename_disk: SrcFiles[]
    filename_download: SrcFiles[]
  }
  folder?: Pick<FolderTypes, 'title'> & {
    parent: Pick<FolderTypes, 'title'> | null
    project: Pick<ProjectTypes, 'logos'> & {
      logos: {
        logo: Pick<SrcFiles, 'filename_disk'> | null
        logo_onDark: Pick<SrcFiles, 'filename_disk'> | null
      }
    }
  }
}

/**
 * Fetch flow data from the database.
 * @param supabase The Supabase client.
 * @returns A promise that resolves to an array of Nodes or null.
 */
async function fetchFileData(
  supabase: SupabaseClient<Database>,
): Promise<FilesWithRelations[] | null> {
  const response: PostgrestResponse<any> = await supabase
    .from('file')
    .select(
      `type,id,title,is_external,src_external,src(filename_disk,filename_download),folder(title,image(filename_disk),parent(title),project(title,primary_image(filename_disk),logos(logo(filename_disk),logo_onDark(filename_disk))))`,
    )
    .order('date_created', { ascending: false })

  // Type guard to check if response.error exists
  if (response.error) {
    console.error(response.error)
    return null
  }

  return response.data
}

/**
 * Handle GET request.
 * @param context
 * @returns The response object.
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
  try {
    const fileData = await fetchFileData(
      SupabaseClient as SupabaseClient<Database>,
    )
    if (!fileData || fileData.length === 0) {
      console.error('Data is empty or undefined')
      return new Response(JSON.stringify({ error: 'No data found.' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    return new Response(
      JSON.stringify({
        fileData,
        status: 200,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Error fetching file data:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
