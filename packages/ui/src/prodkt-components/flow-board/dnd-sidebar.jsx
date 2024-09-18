// @ts-nocheck

import React from 'react'

import { useDnD } from './dnd-context'

export default () => {
  const [_, setType] = useDnD()

  const onDragStart = (event, nodeType) => {
    setType(nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <aside className='z-[18]'>
      <div className='description'>
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className='dndnode input'
        onDragStart={(event) => onDragStart(event, 'input')}
        draggable
      >
        Input Node
      </div>
      <div
        className='dndnode'
        onDragStart={(event) => onDragStart(event, 'default')}
        draggable
      >
        Default Node
      </div>
      <div
        className='dndnode output'
        onDragStart={(event) => onDragStart(event, 'output')}
        draggable
      >
        Output Node
      </div>
    </aside>
  )
}
