import { useCallback } from 'react'

import type { Connection, Edge, Node } from '@xyflow/react'
import type { FlowEdgeTypes } from './Edge'
import type { FlowNodeTypes } from './Node'

import {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from '@xyflow/react'

import ImageFlowNode from './BorderlessImageNode'
import FlowEdge from './Edge'
import FlowImageNode from './ImageNode'
import turboNode from './Node'

import './flow-board.css'
import './floating-edges.css'

const defaultViewport = { x: 0, y: 0, zoom: 0.25 }

const nodeTypes = {
  turbo: turboNode,
  image: FlowImageNode,
  borderlessImage: ImageFlowNode,
}

const edgeTypes = {
  turbo: FlowEdge,
  image: FlowEdge,
}

const defaultEdgeOptions = {
  type: 'turbo',
  markerEnd: 'edge-circle',
}

const Flow = ({
  data,
  initialEdges,
}: { data: Node<FlowNodeTypes>[] | Record<string, unknown> | string[] } & {
  initialEdges: Edge<FlowEdgeTypes>[]
} & {
  flowTitle?: string
}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(data)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((params: Edge | Connection) => {
    setEdges((els) => addEdge(params, els))
  }, [])

  return (
    <ReactFlow
      className=''
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      defaultEdgeOptions={defaultEdgeOptions}
      defaultViewport={defaultViewport}
      // nodes={nodes}
      // edges={edges}
      // onNodesChange={onNodesChange}
      // onEdgesChange={onEdgesChange}
      // elementsSelectable={isSelectable}
      // nodesConnectable={isConnectable}
      // nodesDraggable={isDraggable}
      // zoomOnScroll={zoomOnScroll}
      // panOnScroll={panOnScroll}
      // panOnScrollMode={panOnScrollMode}
      // zoomOnDoubleClick={zoomOnDoubleClick}
      // onConnect={onConnect}
      // onNodeClick={captureElementClick ? onNodeClick : undefined}
      // onNodeDragStart={onNodeDragStart}
      // onNodeDragStop={onNodeDragStop}
      // panOnDrag={panOnDrag}
      // onPaneClick={captureZoomClick ? onPaneClick : undefined}
      // onPaneScroll={captureZoomScroll ? onPaneScroll : undefined}
      // onPaneContextMenu={captureZoomClick ? onPaneContextMenu : undefined}
      // fitView
    >
      <Controls showFitView={true} showZoom={true} showInteractive={true} />
      <MiniMap
        zoomable
        pannable
        nodeBorderRadius={12}
        nodeStrokeWidth={1}
        nodeStrokeColor={''}
        nodeColor={''}
        maskColor={''}
        maskStrokeWidth={0}
        maskStrokeColor={''}
      />
      <svg>
        <defs>
          <linearGradient id='edge-gradient'>
            <stop offset='0%' stopColor='var(--grayA2)' />
            <stop offset='100%' stopColor='var(--accentA9)' />
          </linearGradient>

          <marker
            id='edge-circle'
            viewBox='-5 -5 10 10'
            refX='0'
            refY='0'
            markerUnits='strokeWidth'
            markerWidth='10'
            markerHeight='10'
            orient='auto'
          >
            <circle
              stroke='var(--accent-9)'
              strokeWidth='0'
              strokeOpacity='1'
              r='3'
              cx='0'
              cy='0'
            />
          </marker>
        </defs>
      </svg>
      <div className='absolute top-0 mt-4 w-full'>
        {/* <ProjectDropdown isFlow projectTitle={flowTitle} /> */}
      </div>
      <Background color='var(--grayA6)' variant={BackgroundVariant.Dots} />
    </ReactFlow>
  )
}

export { Flow }
