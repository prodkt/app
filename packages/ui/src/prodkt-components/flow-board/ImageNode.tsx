import { memo } from 'react'

import type { NodeProps } from 'reactflow'
// Import the type for node props
import type { FlowNodeTypes } from './Node'

import { Handle, Position } from 'reactflow'

// Define the functional component
const FlowImageNode = ({ data }: NodeProps<FlowNodeTypes>) => {
  return (
    <>
      <Handle type='target' position={Position.Left} />
      <Handle type='source' position={Position.Right} />
      <img
        src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${String(data.image)}`}
        alt={data.title ?? 'Flow Image'}
        className='prodktFlow_imageNode h-full w-auto max-w-fit origin-center overflow-hidden rounded-3xl border border-transparent bg-[var(--gray-1)] object-contain object-center p-0 shadow-2xl ring-1 ring-[var(--gray-a3)]'
      />
    </>
  )
}

// Set the display name for debugging purposes
FlowImageNode.displayName = 'FlowImageNode'

// Export the memoized version of the component
export default memo(FlowImageNode)
