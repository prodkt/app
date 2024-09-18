import type { Node, NodeProps } from '@xyflow/react'

import { Handle, Position } from '@xyflow/react'

export interface PositionLoggerNodeData {
  label?: string
}

export type PositionLoggerNode = Node<PositionLoggerNodeData>

/**
 *
 * @param root0
 * @param root0.positionAbsoluteX
 * @param root0.positionAbsoluteY
 * @param root0.data
 */
export default function PositionLoggerNode({
  positionAbsoluteX,
  positionAbsoluteY,
  data,
}: NodeProps<PositionLoggerNode>) {
  const x = `${Math.round(positionAbsoluteX)}px`
  const y = `${Math.round(positionAbsoluteY)}px`

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className='react-flow__node-default'>
      {data.label && <div>{data.label}</div>}

      <div>
        {x} {y}
      </div>

      <Handle type='source' position={Position.Bottom} />
    </div>
  )
}
