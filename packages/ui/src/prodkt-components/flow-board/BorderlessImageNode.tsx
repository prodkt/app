/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { memo } from 'react'

import type { NodeProps } from '@xyflow/react'

import { Handle, Position } from '@xyflow/react'

const ImageFlowNode: React.FC<NodeProps> & {
  displayName?: string
} = ({ data }: NodeProps) => {
  return (
    <>
      <Handle type='target' position={Position.Left} />
      <Handle type='source' position={Position.Right} />
      {/* biome-ignore lint/complexity/useLiteralKeys: <explanation> */}
      {data['image'] ? (
        <img
          /* biome-ignore lint/complexity/useLiteralKeys: <explanation> */
          src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${String(data['image'])}`}
          /* biome-ignore lint/complexity/useLiteralKeys: <explanation> */ /* @ts-expect-error */
          alt={data['title'] ?? 'Flow Image'}
          className='prodktFlow_imageNode h-full max-h-[500px] w-auto max-w-fit origin-center overflow-hidden rounded-3xl border border-transparent bg-transparent object-contain object-center p-0 ring-1 ring-transparent'
        />
      ) : null}
    </>
  )
}

export default memo(ImageFlowNode)
