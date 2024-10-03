/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */

import type { Database } from '@/database.types'

import { SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { cva } from 'class-variance-authority'
import { GripVertical } from 'lucide-react'

import {
  Add,
  Backlog,
  Cancelled,
  Done,
  InProgress,
  MilestoneFilled,
  MilestoneOutline,
  MilestoneProgress,
  Todo,
} from '@/icons/projects'
import { Button } from '@/primitives/button'
import { Card, CardContent, CardHeader } from '@/primitives/card'
import { ScrollArea } from '@/primitives/scroll-area'

import { TaskCard } from './TaskCard'

export type Issues = Database['public']['Tables']['issues']['Row']
export type Status = Database['public']['Tables']['status']['Row']
export interface Column {
  id: string
  color: string
  label: string
  value: string
  tasks: Issue[]
}

export type Task = Issues

export type Issue = Database['public']['Tables']['issues']['Row']

// Define BoardColumnProps type to match expected props
interface BoardColumnProps {
  column: {
    id: string
    label: string
    color: string
    value: string
  }
  tasks: Task[]
  isOverlay?: boolean
}

// Function to render the appropriate icon based on status
const RenderIcon = (label: string) => {
  switch (label) {
    case 'Backlog':
      return <Backlog className={'size-4'} color={'gray'} />
    case 'Todo':
      return <Todo className={'size-4'} color={'green'} />
    case 'In Progress':
      return <InProgress className={'size-4'} color={'indigo'} />
    case 'Cancelled':
      return <Cancelled className={'size-4'} color={'gray'} />
    case 'Done':
      return <Done className={'size-4'} color={'green'} />
    case 'Add':
      return <Add className={'size-4'} color={'indigo'} />
    case 'Milestone':
      return <MilestoneOutline className={'size-4'} color={'gray'} />
    case 'Milestone Complete':
      return <MilestoneFilled className={'size-4'} color={'green'} />
    case 'Milestone In Progress':
      return <MilestoneProgress className={'size-4'} color={'indigo'} />
    default:
      return null // Fallback for unknown statuses
  }
}

/**
 *
 * @param root0
 * @param root0.column
 * @param root0.tasks
 * @param root0.isOverlay
 */
export function BoardColumn({
  column,
  tasks,
  isOverlay,
}: Readonly<BoardColumnProps>) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    },
    attributes: {
      roleDescription: 'Column',
    },
  })

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  }

  const variants = cva(
    'mb-auto flex h-[600px] w-1/3 basis-1/3 snap-center flex-col overflow-visible rounded-none border-[var(--grayA3)] bg-gradient-to-b from-[var(--gray5)] to-[var(--gray3)] dark:from-[var(--gray1)] dark:to-[var(--gray1)]',
    {
      variants: {
        dragging: {
          default: 'border-2 border-transparent',
          over: 'overflow-hidden rounded-none bg-[var(--gray1)] opacity-50 ring-0 blur-sm',
          overlay:
            'from-[var(--ghost-aa10)] to-[var(--gray1)] ring-0 ring-[var(--grayA5)] backdrop-blur',
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
      <CardHeader className='group col-span-1 flex flex-row items-center justify-between border-b-0 py-4 pl-4 pr-6 text-left'>
        <Button
          variant={'ghost'}
          {...attributes}
          {...listeners}
          className='relative -ml-2 h-auto cursor-grab p-1 group-hover:bg-[var(--grayA1)] group-hover:text-[var(--grayA12)]'
        >
          <GripVertical
            size={16}
            className='size-8 stroke-[var(--grayA2)] p-1 transition-colors duration-300 group-hover:stroke-[var(--grayA8)]'
          />
        </Button>
        <span className='ml-auto flex flex-row items-center justify-center gap-2 bg-gradient-to-b from-[var(--grayA9)] to-[var(--grayA8)] bg-clip-text px-1 text-2xl font-medium tracking-tighter text-transparent dark:from-[var(--grayA12)] dark:to-[var(--grayA11)]'>
          {RenderIcon(column.label)} {column.label}{' '}
          {/* Updated to show label */}
        </span>
      </CardHeader>
      <ScrollArea>
        <CardContent className='flex grow flex-col gap-2 p-2'>
          <SortableContext items={tasks.map((task) => task.id)}>
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </SortableContext>
        </CardContent>
      </ScrollArea>
    </Card>
  )
}

export interface TaskDragData {
  type: 'Task'
  task: Task
}

export interface ColumnDragData {
  type: 'Column'
  column: Column
}

// interface ExtendedActive {
//   id: UniqueIdentifier;
//   data: DataRef;
//   rect: MutableRefObject<{
//     initial: ClientRect | null;
//     translated: ClientRect | null;
//   }>;
// }

// interface ExtendedOver {
//   id: UniqueIdentifier;
//   rect: ClientRect;
//   disabled: boolean;
//   data: DataRef;
// }

// interface Announcements {
//   onDragStart: (params: { active: Active }) => string | undefined;
//   onDragOver: (params: { active: Active; over: Over }) => string | undefined;
//   onDragEnd: (params: { active: Active; over: Over }) => string | undefined;
//   onDragCancel: (params: { active: Active }) => string | undefined;
// }

/**
 *
 * @param root0
 * @param root0.initialColumns
 * @param root0.initialTasks
 */
// export function KanbanProvider({ initialColumns, initialTasks }: { initialColumns: Column[], initialTasks: Task[] }) {
//   const [columns, setColumns] = useState<Column[]>(initialColumns);
//   const pickedUpTaskColumn = useRef<Column['id'] | null>();
//   const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

//   const [tasks, setTasks] = useState<Task[]>(initialTasks);

//   const [activeColumn, setActiveColumn] = useState<Column | null>(null);
//   const [activeTask, setActiveTask] = useState<Task | null>(null);

//   const sensors = useSensors(
//     useSensor(MouseSensor),
//     useSensor(TouchSensor),
//     useSensor(KeyboardSensor, {
//       coordinateGetter: coordinateGetter,
//     })
//   );

//   function isColumnDragData(data: ColumnDragData) {
//     return data.type
//   }

//   function isTaskDragData(data: ColumnDragData) {
//     return data.type
//   }

//   /**
//    *
//    * @param taskId
//    * @param columnId
//    * @param current
//    */
//   function getDraggingTaskData(columnId: Column['id'], current: string | null) {
//     const tasksInColumn = tasks.filter((task) => task.id === columnId);
//     const taskPosition = tasksInColumn.findIndex((task) => task.status === columnId);
//     const column = columns.find((col) => col.id === columnId);
//     return {
//       tasksInColumn,
//       taskPosition,
//       column,
//       current
//     };
//   }

//   const announcements: Announcements = {
//     onDragStart({ active }: { active: Active }) {
//       if (!hasDraggableData(active)) return;

//       if (active.data.current?.type === "Column") {
//         const startColumn = columns.find((col) => col.id === active.id);
//         const startColumnIdx = startColumn ? columns.findIndex((col) => col.id === startColumn.id) : null;

//         return startColumn
//           ? `Picked up Column "${startColumn.id}" at position ${startColumnIdx ? startColumnIdx + 1 : 'unknown'} of ${columns.length}.`
//           : 'Could not find the column to pick up.';
//       } else if (active.data.current?.type === "Task") {
//         const taskId = active.id; // Task ID as a string
//         pickedUpTaskColumn.current = active.data.current.task[0]?.id;

//         const { tasksInColumn, taskPosition, column } = getDraggingTaskData(
//           taskId as string,  // Task ID as a string
//           pickedUpTaskColumn.current as string | null
//         );

//         return `Picked up Task "${active.data.current.task.content}" at position ${taskPosition ? taskPosition + 1 : 'unknown'} of ${tasksInColumn.length || 'unknown'} in column "${column?.id}".`;
//       }
//     },

//     onDragOver({ active, over }: { active: Active; over: Over }) {
//       if (!hasDraggableData(active) || !hasDraggableData(over)) return;

//       const { tasksInColumn, taskPosition, column } = getDraggingTaskData(
//         over.id as string,
//         over.data.current?.task[0]?.id as string | null
//       );

//       if (over.data.current?.task.id !== pickedUpTaskColumn.current) {
//         return `Task ${active.data.current?.task.title} was moved over column ${column?.title ?? 'unknown'} in position ${taskPosition ? taskPosition + 1 : 'unknown'} of ${tasksInColumn.length}`;
//       }
//       return `Task was moved over position ${taskPosition ? taskPosition + 1 : 'unknown'} of ${tasksInColumn.length} in column ${column?.title ?? 'unknown'}`;
//     }
//   }
//   onDragEnd({ active, over }: { active: Active; over: Over }) {
//     if (!hasDraggableData(active) || !hasDraggableData(over)) {
//       pickedUpTaskColumn.current = null;
//       return;
//     }

//     if (
//       isColumnDragData(active.data.current) &&
//       isColumnDragData(over.data.current)
//     ) {
//       const overColumnPosition = columnsId.findIndex((id) => id === over.id);

//       return `Column ${active.data.current.column.title ?? 'unknown'} was dropped into position ${overColumnPosition !== undefined ? overColumnPosition + 1 : 'unknown'} of ${columnsId.length}`;
//     } else if (
//       isTaskDragData(active.data.current) &&
//       isTaskDragData(over.data.current)
//     ) {
//       const { tasksInColumn, taskPosition, column } = getDraggingTaskData(
//         over.id as string,
//         over.data.current.task.id
//       );

//       if (over.data.current.task.columnId !== pickedUpTaskColumn.current) {
//         return `Task was dropped into column ${column?.title ?? 'unknown'} in position ${taskPosition !== undefined ? taskPosition + 1 : 'unknown'} of ${tasksInColumn.length ?? 'unknown'}`;
//       }

//       return `Task was dropped into position ${taskPosition !== undefined ? taskPosition + 1 : 'unknown'} of ${tasksInColumn.length ?? 'unknown'} in column ${column?.title ?? 'unknown'}`;
//     }

//     pickedUpTaskColumn.current = null;
//   },

//   onDragCancel({ active }: { active: Active }) {
//     pickedUpTaskColumn.current = null;

//     if (!hasDraggableData(active)) return;

//     return `Dragging ${active.data.current?.type ?? 'unknown'} cancelled.`;
//   },

// };

// return (
//   <DndContext
//     accessibility={{
//       announcements,
//     }}
//     sensors={sensors}
//     onDragStart={onDragStart}
//     onDragEnd={onDragEnd}
//     onDragOver={onDragOver}
//   >
//     <BoardContainer>
//       <SortableContext items={columnsId}>
//         {columns.map((col) => (
//           <BoardColumn
//             key={col.id}
//             column={col}
//             tasks={tasks.filter((task) => task.id === col.id)}
//           />
//         ))}
//       </SortableContext>
//     </BoardContainer>

//     {"document" in window &&
//       createPortal(
//         <DragOverlay>
//           {activeColumn && (
//             <BoardColumn
//               isOverlay
//               column={activeColumn}
//               tasks={tasks.filter(
//                 (task) => task.columnId === activeColumn.columnsId
//               )}
//             />
//           )}
//           {activeTask && <TaskCard task={activeTask} isOverlay />}
//         </DragOverlay>,
//         document.body
//       )}
//   </DndContext>
// );

// /**
//  *
//  * @param event
//  */
// function onDragStart(event: DragStartEvent) {
//   if (!hasDraggableData(event.active)) return;
//   const data = event.active.data.current;
//   if (data?.type === "Column") {
//     setActiveColumn(data.column);
//     return;
//   }

//   if (data?.type === "Task") {
//     setActiveTask(data.task);
//     return;
//   }
// }

// /**
//  *
//  * @param event
//  */
// function onDragEnd(event: DragEndEvent) {
//   setActiveColumn(null);
//   setActiveTask(null);

//   const { active, over } = event;
//   if (!over) return;

//   const activeId = active.id;
//   const overId = over.id;

//   if (!hasDraggableData(active)) return;

//   const activeData = active.data.current;

//   if (activeId === overId) return;

//   const isActiveAColumn = activeData?.type === "Column";
//   if (!isActiveAColumn) return;

//   setColumns((columns = []) => {
//     const activeColumnIndex = columns.findIndex((col) => col.id === activeId);
//     const overColumnIndex = columns.findIndex((col) => col.id === overId);

//     // Ensure valid indexes
//     if (activeColumnIndex === -1 || overColumnIndex === -1) return columns;

//     return arrayMove(columns, activeColumnIndex, overColumnIndex);
//   });
// }

// function onDragOver(event: DragOverEvent) {
//   const { active, over } = event;
//   if (!over) return;

//   const activeId = active.id;
//   const overId = over.id;

//   if (activeId === overId) return;

//   if (!hasDraggableData(active) || !hasDraggableData(over)) return;

//   const activeData = active.data.current;
//   const overData = over.data.current;

//   const isActiveATask = activeData?.type === "Task";
//   const isOverATask = overData?.type === "Task";

//   if (!isActiveATask) return;

//   // Dropping a Task over another Task
//   if (isOverATask) {
//     setTasks((tasks = []) => {
//       const activeIndex = tasks.findIndex((t) => t.id === activeId);
//       const overIndex = tasks.findIndex((t) => t.id === overId);

//       // Ensure valid indexes
//       if (activeIndex === -1 || overIndex === -1) return tasks;

//       const activeTask = tasks[activeIndex];
//       const overTask = tasks[overIndex];
//       if (
//         activeTask &&
//         overTask &&
//         activeTask.columnId !== overTask.columnId
//       ) {
//         activeTask.columnId = overTask.columnId;
//         return arrayMove(tasks, activeIndex, overIndex - 1);
//       }

//       return arrayMove(tasks, activeIndex, overIndex);
//     });
//   }

//   const isOverAColumn = overData?.type === "Column";

//   // Dropping a Task over a column
//   if (isOverAColumn) {
//     setTasks((tasks = []) => {
//       const activeIndex = tasks.findIndex((t) => t.id === activeId);
//       if (activeIndex === -1) return tasks; // Ensure valid index

//       const activeTask = tasks[activeIndex];
//       if (activeTask) {
//         activeTask.columnId = overId as Task['columnId'];
//         return arrayMove(tasks, activeIndex, activeIndex);
//       }
//       return tasks;
//     });
//   }
// }
