import { memo } from 'react'

import type { NodeProps } from '@xyflow/react'

import { Handle, Position } from '@xyflow/react'

import { type FlowNodeTypes } from './Node'

const FlowImageNode: React.FC<NodeProps<FlowNodeTypes>> & {} = ({
  data,
}: NodeProps<FlowNodeTypes>) => {
  return (
    <>
      <Handle type='target' position={Position.Left} />
      <Handle type='source' position={Position.Right} />
      <img
        src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${data.image}`}
        alt={data.title ?? 'Flow Image'}
        className='prodktFlow_imageNode h-full w-auto max-w-fit origin-center overflow-hidden rounded-3xl border border-transparent object-contain object-center p-0 shadow-2xl ring-1 ring-[var(--grayA3)]'
      />
    </>
  )
}

export default memo(FlowImageNode)
