/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */

import type { ColumnDragData, TaskDragData } from '@/prodkt-components/kanban'
import type { Active, DataRef, Over } from '@dnd-kit/core'

type DraggableData = ColumnDragData | TaskDragData

/**
 *
 * @param entry
 */
export function hasDraggableData<T extends Active | Over>(
  entry: T | null | undefined,
): entry is T & {
  data: DataRef<DraggableData>
} {
  if (!entry) {
    return false
  }

  const data = entry.data.current
  /* biome-ignore lint/complexity/useLiteralKeys: */
  if (data?.['type'] === 'Column' || data?.['type'] === 'Task') {
    return true
  }

  return false
}
