import React, { useCallback } from 'react'

import {
  Background,
  Controls,
  MarkerType,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from '@xyflow/react'

// import '@xyflow/react/dist/style.css'

import FloatingConnectionLine from './FloatingConnectionLine'
import FloatingEdge from './FloatingEdge'
import { createNodesAndEdges } from './utils'

import './flow-board.css'
import './floating-edges.css'

const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges()

const edgeTypes = {
  floating: FloatingEdge,
}

const NodeAsHandleFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const onConnect = useCallback(
    (params) => {
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: 'floating',
            markerEnd: { type: MarkerType.Arrow },
          },
          eds,
        ),
      )
    },
    [setEdges],
  )

  return (
    <div className='min-w-full min-h-full floatingedges'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        edgeTypes={edgeTypes}
        connectionLineComponent={FloatingConnectionLine}
      >
        <MiniMap zoomable pannable nodeClassName='prodkt-node' />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  )
}

export default NodeAsHandleFlow
