import { memo } from 'react'

import type { Database } from '@/database.types'
import type { NodeProps } from 'reactflow'

import { Handle, NodeResizer, Position } from 'reactflow'

// Define the type for the node props
export type FlowNodeTypes = Database['public']['Tables']['flow_nodes']['Row']

// Define the functional component
const FlowNodeComponent = ({
  data,
  icon: Icon,
}: NodeProps<FlowNodeTypes> & {
  icon: React.ComponentType<{ name: string }>
}) => {
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

// Set the display name for debugging purposes
FlowNodeComponent.displayName = 'FlowNodeComponent'

// Export the memoized version of the component
export default memo(FlowNodeComponent)
