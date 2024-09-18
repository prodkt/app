/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

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

const data = {
  slug: 'olio-logo-concepts',
  FlowTitle: 'Olio Page Builder Logo Concepts',
  FlowNodes: [
    {
      id: '8e23d496-8b97-4c47-b08d-41b654eeeda5',
      user_updated: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_updated: '2024-08-06T13:05:26.102+00:00',
      title: 'Flat Logo',
      icon: null,
      posx: 0,
      posy: 0,
      subline: null,
      type: 'borderlessImageNode',
      image: {
        filename_disk: '78bb55f3-baa4-492f-9855-a07a92fc11bd.png',
      },
      draggable: false,
      selectable: false,
      deletable: true,
      connectable: true,
    },
    {
      id: '6abd2a0e-6181-4358-b367-3b0c0049ab93',
      user_updated: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_updated: '2024-08-06T13:12:43.119+00:00',
      title: 'dashStroke Logo',
      icon: null,
      posx: 700,
      posy: 0,
      subline: null,
      type: 'borderlessImageNode',
      image: {
        filename_disk: '54d694b2-7559-49d3-ac98-c936129590eb.png',
      },
      draggable: false,
      selectable: false,
      deletable: true,
      connectable: true,
    },
    {
      id: 'cce0b09e-b004-447b-ab55-86bd429d8a12',
      user_updated: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_updated: '2024-08-06T13:12:44.084+00:00',
      title: 'Wireframe Logo',
      icon: null,
      posx: 1400,
      posy: 0,
      subline: null,
      type: 'borderlessImageNode',
      image: {
        filename_disk: '2ad3ed50-c6e8-46f0-bf1e-633ea26d7c9a.png',
      },
      draggable: false,
      selectable: false,
      deletable: true,
      connectable: true,
    },
    {
      id: '65c128e3-ed71-4e68-a980-d67743f1493b',
      user_updated: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_updated: '2024-08-06T13:12:44.55+00:00',
      title: '3D Bubble',
      icon: null,
      posx: 0,
      posy: 500,
      subline: null,
      type: 'borderlessImageNode',
      image: {
        filename_disk: 'b958a7c4-5662-4854-a9fa-2d1b713bcd4d.png',
      },
      draggable: false,
      selectable: false,
      deletable: true,
      connectable: true,
    },
    {
      id: 'ec961633-5d93-4fab-b0c7-fae18d984966',
      user_updated: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_updated: '2024-08-06T13:12:46.103+00:00',
      title: '3D Deep',
      icon: null,
      posx: 700,
      posy: 500,
      subline: null,
      type: 'borderlessImageNode',
      image: {
        filename_disk: '4d8b6736-ceef-4019-9430-3501e916c130.png',
      },
      draggable: false,
      selectable: false,
      deletable: true,
      connectable: true,
    },
  ],
  FlowEdges: [],
  status: 200,
}
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
  const [nodes, onNodesChange] = useNodesState(data)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Edge | Connection) => {
      setEdges((els) => addEdge(params, els))
    },
    [setEdges],
  )

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
        <title>test</title>
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
      <div className='absolute top-0 w-full mt-4'>
        {/* <ProjectDropdown isFlow projectTitle={flowTitle} /> */}
      </div>
      <Background color='var(--grayA6)' variant={BackgroundVariant.Dots} />
    </ReactFlow>
  )
}

export { Flow }
