/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import type {
  DroppableContainer,
  KeyboardCoordinateGetter,
} from '@dnd-kit/core'

import { closestCorners, getFirstCollision, KeyboardCode } from '@dnd-kit/core'

const directions: string[] = [
  KeyboardCode.Down,
  KeyboardCode.Right,
  KeyboardCode.Up,
  KeyboardCode.Left,
]

export const coordinateGetter: KeyboardCoordinateGetter = (
  event,
  { context: { active, droppableRects, droppableContainers, collisionRect } },
) => {
  if (directions.includes(event.code)) {
    event.preventDefault()

    if (!active || !collisionRect) {
      return
    }

    const filteredContainers: DroppableContainer[] = []

    for (const entry of droppableContainers.getEnabled()) {
      if (!entry || entry.disabled) {
        continue
      }

      const rect = droppableRects.get(entry.id)

      if (!rect) {
        continue
      }

      const data = entry.data.current

      if (data) {
        const { type, children } = data

        if (type === 'Column' && children?.length > 0) {
          /* biome-ignore lint/complexity/useLiteralKeys: */
          if (active.data.current?.['type'] !== 'Column') {
            continue
          }
        }
      }

      switch (event.code as KeyboardCode) {
        case KeyboardCode.Down:
          /* biome-ignore lint/complexity/useLiteralKeys: */
          if (active.data.current?.['type'] === 'Column') {
            continue
          }
          if (collisionRect.top < rect.top) {
            filteredContainers.push(entry)
          }
          break

        case KeyboardCode.Up:
          /* biome-ignore lint/complexity/useLiteralKeys: */
          if (active.data.current?.['type'] === 'Column') {
            continue
          }
          if (collisionRect.top > rect.top) {
            filteredContainers.push(entry)
          }
          break

        case KeyboardCode.Left:
          if (collisionRect.left >= rect.left + rect.width) {
            filteredContainers.push(entry)
          }
          break

        case KeyboardCode.Right:
          if (collisionRect.left + collisionRect.width <= rect.left) {
            filteredContainers.push(entry)
          }
          break

        default:
          break
      }
    }

    const collisions = closestCorners({
      active,
      collisionRect: collisionRect,
      droppableRects,
      droppableContainers: filteredContainers,
      pointerCoordinates: null,
    })
    const closestId = getFirstCollision(collisions, 'id')

    if (closestId != null) {
      const newDroppable = droppableContainers.get(closestId)
      const newNode = newDroppable?.node.current
      const newRect = newDroppable?.rect.current

      if (newNode && newRect) {
        return {
          x: newRect.left,
          y: newRect.top,
        }
      }
    }
  }

  return undefined
}
