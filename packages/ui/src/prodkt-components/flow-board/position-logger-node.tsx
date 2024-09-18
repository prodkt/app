/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @eslint-community/eslint-comments/no-duplicate-disable */
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
// @ts-nocheck
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */

import type { Node, NodeProps } from '@xyflow/react'

import { Handle, Position } from '@xyflow/react'

export interface PositionLoggerNodeData
  extends Record<string, unknown>,
    NodeProps {
  data: {
    label?: string
    position: {
      x: number
      y: number
    }
  }
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
}: NodeProps<PositionLoggerNodeData>) {
  const x = `${Math.round(positionAbsoluteX).toString()}px`
  const y = `${Math.round(positionAbsoluteY).toString()}px`

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
