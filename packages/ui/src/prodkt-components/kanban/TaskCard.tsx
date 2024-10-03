/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */

import type { Database } from '@/database.types'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { cva } from 'class-variance-authority'
import { GripVertical } from 'lucide-react'

import { MobileMilestones } from '@/icons/navigation'
import { Badge } from '@/primitives/badge'
import { Button } from '@/primitives/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/primitives/card'
import { IssuePriority } from '@/prodkt-components/issue-priority'
import { IssueEstimate } from '@/prodkt-components/issue-priority/issue-estimate'
import { IssueLabel } from '@/prodkt-components/issue-priority/issue-label'

import { Assignee } from './Assignee'

type Issue = Database['public']['Tables']['issues']['Row']

export type Task = Issue

interface TaskCardProps {
  task: Task
  isOverlay?: boolean
}

export type TaskType = 'Task'

export interface TaskDragData {
  type: TaskType
  task: Task
}

/**
 *
 * @param root0
 * @param root0.task
 * @param root0.isOverlay
 */
export function TaskCard({ task, isOverlay }: Readonly<TaskCardProps>) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: 'Task',
      task,
    } satisfies TaskDragData,
    attributes: {
      roleDescription: 'Task',
    },
  })

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  }

  const variants = cva(
    'group rounded-xl border-[--grayA2] bg-[var(--grayA4)] opacity-100 outline-[--grayA2] ring-[var(--grayA2)] transition-colors duration-300 ease-in-out dark:bg-[var(--grayA2)]',
    {
      variants: {
        dragging: {
          over: 'z-0 border-[--grayA2] bg-[var(--grayA9)] opacity-80 shadow-inner outline-[--grayA2] ring-0 ring-[var(--grayA2)] blur transition-colors duration-300 ease-in-out',
          overlay:
            'z-[5] border-[var(--grayA5)] bg-[var(--grayA9)] opacity-100 outline-[--grayA2] ring-0 ring-[var(--grayA2)] backdrop-blur transition-colors  duration-1000 ease-in-out',
        },
      },
    },
  )

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={variants({
        dragging: isOverlay ? 'overlay' : isDragging ? 'over' : undefined,
      })}
    >
      <CardHeader className='relative flex flex-row justify-between overflow-hidden rounded-xl border-0 p-3'>
        <Button
          variant={'ghost'}
          {...attributes}
          {...listeners}
          className='-ml-2 h-auto cursor-grab p-1 group-hover:bg-[var(--grayA1)]'
        >
          <span className='sr-only'>Move task</span>
          <GripVertical
            size={16}
            className='size-8 stroke-[var(--grayA2)] p-1 transition-colors duration-300 group-hover:stroke-[var(--grayA8)]'
          />

          <div className='pointer-events-none absolute left-0 top-0 z-0 size-full w-1/4 select-none rounded-xl bg-gradient-to-b from-[var(--ghost-aa4)] via-transparent to-transparent blur-lg' />
        </Button>
        <div className='flex flex-row items-center justify-center gap-1'>
          <Assignee />
          <div
            aria-label='Milestone'
            className='ml-auto flex h-6 select-none flex-row items-center justify-center gap-1 rounded-full border border-[var(--grayA1)] bg-[var(--gray3)] px-1 py-0.5 pr-2 text-xs shadow-inner'
          >
            <MobileMilestones className='size-4' /> Beta
          </div>
          <Badge
            variant={'outline'}
            className='ml-auto h-6 rounded-2xl border-[var(--grayA2)] bg-[var(--grayA1)] font-mono font-normal uppercase shadow-inner'
          >
            <span className='ml-auto bg-gradient-to-b from-[var(--grayA8)] to-[var(--grayA4)] bg-clip-text text-transparent'>
              ISSUE
              {'-'}
              {task.public_issue_id}
            </span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className='whitespace-pre-wrap px-5 pb-6 pt-0 text-left'>
        {task.title}
      </CardContent>
      <CardFooter className='flex-wrap gap-1'>
        <IssuePriority
          disableShortcut
          defaultPriority={task.priority ?? 'no-priority'}
        />
        <IssueLabel disableShortcut defaultLabel={task.label ?? 'no-label'} />
        <IssueEstimate
          disableShortcut
          defaultEstimate={task.estimate ?? 'no-estimate'}
        />
      </CardFooter>
    </Card>
  )
}
