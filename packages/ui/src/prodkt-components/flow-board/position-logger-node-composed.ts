import type { BuiltInNode, Node } from '@xyflow/react'
import type { PositionLoggerNode as PositionLoggerNodeType } from './position-logger-node'

import PositionLoggerNode from './position-logger-node'

export const initialNodes = [
  {
    id: '1',
    type: 'position-logger',
    position: { x: 100, y: 100 },
    data: { label: 'Node 1' },
  },
  {
    id: 'b',
    type: 'position-logger',
    position: { x: -100, y: 100 },
    data: { label: 'drag me!' },
  },
  { id: 'c', position: { x: 100, y: 100 }, data: { label: 'your ideas' } },
  {
    id: 'd',
    type: 'output',
    position: { x: 0, y: 200 },
    data: { label: 'with Prodkt.cloud' },
  },
] satisfies Node[]

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
}

// Append the types of you custom edges to the BuiltInNode type
export type CustomNodeType = BuiltInNode | PositionLoggerNodeType
