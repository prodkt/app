import type { Database } from '@/database.types'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

import { supabase } from '@/supabase'

const supabaseClient: SupabaseClient = supabase

type Nodes = Database['public']['Tables']['flows']['Row']
// type Nodes = Database['public']['Tables']['flow_nodes']['Row']

/**
 *
 * @param root0 The API context.
 * @param root0.params The parameters object.
 * @returns The response object.
 */
export async function GET({ params }: APIContext) {
  const { slug } = params

  if (typeof slug !== 'string') {
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

  try {
    const flowData = await fetchFlowData(supabaseClient, slug)
    if (!flowData || flowData.length === 0) {
      console.error('Data is empty or undefined')
      return new Response(JSON.stringify({ error: 'No data found.' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    const flowItem = flowData[0]
    const FlowID = flowItem?.id
    const FlowTitle = flowItem?.title

    const { data: FilterFlowNodes, error: flowNodesRelationshipError } =
      await supabase
        .from('flows_flow_nodes')
        .select('flows_id,flow_nodes_id')
        .eq('flows_id', FlowID ?? '')

    if (flowNodesRelationshipError) {
      throw new Error(
        `Error fetching flow to node relationships: ${String(flowNodesRelationshipError.message)}`,
      )
    }

    const { data: FilterFlowEdges, error: flowEdgesRelationshipError } =
      await supabase
        .from('flows_flow_edges')
        .select('flows_id,flow_edges_id')
        .eq('flows_id', FlowID ?? '')

    if (flowEdgesRelationshipError) {
      throw new Error(
        `Error fetching flow to node relationships: ${String(flowEdgesRelationshipError.message)}`,
      )
    }

    const flowNodesMatch = FilterFlowNodes.map((node) => node.flow_nodes_id)
    const flowEdgesMatch = FilterFlowEdges.map((node) => node.flow_edges_id)

    const { data: FlowNodes, error: nodesError } = await supabase
      .from('flow_nodes')
      .select('*,image(filename_disk)')
      .in('id', flowNodesMatch)

    if (nodesError) {
      throw new Error(`Error fetching nodes: ${String(nodesError.message)}`)
    }

    const { data: FlowEdges, error: edgesError } = await supabase
      .from('flow_edges')
      .select('*,source(*),target(*)')
      .in('id', flowEdgesMatch)

    if (edgesError) {
      throw new Error(`Error fetching edges: ${String(edgesError.message)}`)
    }

    return new Response(
      JSON.stringify({
        slug,
        FlowTitle,
        FlowNodes,
        FlowEdges,
        status: 200,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Error fetching flow data:', error)
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
 * @param supabase The Supabase client.
 * @param slug The slug parameter.
 * @returns The flow data.
 */
async function fetchFlowData(
  supabase: SupabaseClient,
  slug: string,
): Promise<Nodes[] | null> {
  const response = await supabase
    .from('flows')
    .select(
      `
	  *
	  )
	`,
    )
    .neq('status', 'draft')
    .eq('slug', slug)

  if (response.error === null && response.data !== null) {
    return response.data as unknown as Nodes[]
  }
  console.error(response.error)
  return null
}
