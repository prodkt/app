import { memo } from 'react'

import type { NodeProps } from '@xyflow/react'
import type { FlowNodeTypes } from './Node'

import { Handle, Position } from '@xyflow/react'

const ImageFlowNode: React.FC<NodeProps<FlowNodeTypes>> & {
  displayName?: string
} = ({ data }: NodeProps<FlowNodeTypes>) => {
  return (
    <>
      <Handle type='target' position={Position.Left} />
      <Handle type='source' position={Position.Right} />
      <img
        src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${data.image}`}
        alt={data.title ?? 'Flow Image'}
        className='prodktFlow_imageNode h-full max-h-[500px] w-auto max-w-fit origin-center overflow-hidden rounded-3xl border border-transparent bg-transparent object-contain object-center p-0 ring-1 ring-transparent'
      />
    </>
  )
}

export default memo(ImageFlowNode)
