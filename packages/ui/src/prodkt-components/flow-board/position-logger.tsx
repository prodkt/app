/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */

import { useCallback } from 'react'

import type { OnConnect } from '@xyflow/react'

import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from '@xyflow/react'

import './flow-board.css'
import './floating-edges.css'

import type { CustomEdgeType } from './position-logger-edge-composed'
import type { CustomNodeType } from './position-logger-node-composed'

import { edgeTypes, initialEdges } from './position-logger-edge-composed'
import { initialNodes, nodeTypes } from './position-logger-node-composed'

/**
 *
 */
export default function PositionLogger() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const [nodes, , onNodesChange] = useNodesState<CustomNodeType>(initialNodes)
  const [edges, setEdges, onEdgesChange] =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    useEdgesState<CustomEdgeType>(initialEdges)
  const onConnect: OnConnect = useCallback(
    (connection) => {
      setEdges((edges) => addEdge(connection, edges))
    },
    [setEdges],
  )

  return (
    <ReactFlow<CustomNodeType, CustomEdgeType>
      nodes={nodes}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <MiniMap />
      <Controls />
    </ReactFlow>
  )
}
