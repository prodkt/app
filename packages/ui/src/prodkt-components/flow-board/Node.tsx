// import type { Database } from '@/database.types'

import { memo } from 'react'

import type { NodeProps, XYPosition } from '@xyflow/react'
import type { CSSProperties } from 'react'

import { Handle, NodeResizer, Position } from '@xyflow/react'

// export type FlowNodeTypes = Database['public']['Tables']['flow_nodes']['Row']
interface DataType {
  data: FlowNodeTypes & Record<string, unknown>
  subline: string
  icon: string | null
  title: string | null
  image: string
}
export interface FlowNodeTypes {
  string: Record<string, unknown>
  data: DataType
  position: XYPosition
  connectable: boolean
  date_updated: string | null
  deletable: boolean
  draggable: boolean
  icon: string | null
  id: string
  image: string | null
  posx: number | null
  posy: number | null
  selectable: boolean
  subline: string[]
  title: string | null
  type: string
  user_updated: string | null
  style?: CSSProperties
  className?: string
  resizing?: boolean
  focusable?: boolean
}

const BaseNode: React.FC<NodeProps<FlowNodeTypes>> & {
  displayName?: string
} = ({ data }: NodeProps<FlowNodeTypes>, { icon: Icon }) => {
  return (
    <>
      <Handle type='target' position={Position.Left} />
      <Handle type='source' position={Position.Right} />
      <NodeResizer minWidth={100} minHeight={30} />
      <div className='gradient wrapper'>
        <div className='inner'>
          <div className='body'>
            {data.icon && data.icon.length > 0 ? (
              <Icon name={data.icon} />
            ) : null}
            <div>
              <div className='title'>{data.title}</div>
              {data.subline && <div className='subline'>{data.subline}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(BaseNode)
