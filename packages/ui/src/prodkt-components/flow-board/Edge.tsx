import type { Database } from '@/database.types'
import type { EdgeProps } from '@xyflow/react'

import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from '@xyflow/react'

export type FlowEdgeTypes =
  Database['public']['Tables']['flow_edges']['Row'] & {
    style: string | number | string[]
    markerEnd: string
  }

/**
 *
 * @param root0
 * @param root0.id
 * @param root0.sourceX
 * @param root0.sourceY
 * @param root0.targetX
 * @param root0.targetY
 * @param root0.sourcePosition
 * @param root0.targetPosition
 * @param root0.markerEnd
 */
export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
}: EdgeProps<EdgeProps>) {
  const { setEdges } = useReactFlow()
  const xEqual = sourceX === targetX
  const yEqual = sourceY === targetY

  const [edgePath, labelX, labelY] = getBezierPath({
    // we need this little hack in order to display the gradient for a straight line
    sourceX: xEqual ? sourceX + 0.0001 : sourceX,
    sourceY: yEqual ? sourceY + 0.0001 : sourceY,
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
        markerEnd={markerEnd ? markerEnd : ''}
        style={{}}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX.toString()}px,${labelY.toString()}px)`,
            // transform: `translate(-50%, -50%) translate(${labelX.toString()}px,${labelY.toString()}px)`,
            fontSize: 12,
            // everything inside EdgeLabelRenderer has no pointer events by default
            // if you have an interactive element, set pointer-events: all
            pointerEvents: 'all',
          }}
          className='nodrag nopan'
        >
          <button className='' type='button' onClick={onEdgeClick}>
            ×
          </button>
        </div>
      </EdgeLabelRenderer>
      <path
        id={id}
        style={{}}
        className='react-flow__edge-path'
        d={edgePath}
        markerEnd={markerEnd}
      />
    </>
  )
}
