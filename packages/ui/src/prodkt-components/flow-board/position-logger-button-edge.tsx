/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @eslint-community/eslint-comments/no-duplicate-disable */
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @eslint-community/eslint-comments/no-duplicate-disable */
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */

// @ts-nocheck

import type { Edge, EdgeProps } from '@xyflow/react'

import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from '@xyflow/react'

const buttonStyle = {
  width: 20,
  height: 20,
  background: '#eee',
  border: '1px solid #fff',
  cursor: 'pointer',
  borderRadius: '50%',
  fontSize: '12px',
  lineHeight: 1,
}

export interface ButtonEdgeData {
  label?: string // Example field, adjust based on your data
  [key: string]: unknown // Allows for additional dynamic properties
}

export type ButtonEdge = Edge<ButtonEdgeData>

export default function ButtonEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
  markerEnd,
  data, // Make sure data is handled safely
}: EdgeProps<ButtonEdge>) {
  const { setEdges } = useReactFlow()
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  })

  const onEdgeClick = () => {
    setEdges((edges) => edges.filter((edge) => edge.id !== id))
  }

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd ?? ''} // Ensure markerEnd is always a string
        style={style ?? {}}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${String(labelX)}px, ${String(labelY)}px)`,
            fontSize: 12,
            pointerEvents: 'all',
          }}
          className='nodrag nopan'
        >
          {/* Example of using data safely */}
          {data?.label && (
            <span style={{ backgroundColor: '#fff', padding: '2px 5px' }}>
              {data.label}
            </span>
          )}
          <button style={buttonStyle} type='button' onClick={onEdgeClick}>
            ×
          </button>
        </div>
      </EdgeLabelRenderer>
    </>
  )
}
