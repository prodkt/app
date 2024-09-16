import { useId } from 'react'

import { cn } from '@/utils/cn'

interface DotPatternProps {
  width?: any
  height?: any
  x?: any
  y?: any
  cx?: any
  cy?: any
  cr?: any
  className?: string
  [key: string]: any
}
/**
 * DotPattern component props.
 * @param root0 - The root object containing the component props.
 * @param root0.width - The width of the dot pattern.
 * @param root0.height - The height of the dot pattern.
 * @param root0.x - The x-coordinate of the dot pattern.
 * @param root0.y - The y-coordinate of the dot pattern.
 * @param root0.cx - The x-coordinate of the circle in the dot pattern.
 * @param root0.cy - The y-coordinate of the circle in the dot pattern.
 * @param root0.cr - The radius of the circle in the dot pattern.
 * @param root0.className - The class name for the dot pattern.
 * @returns The rendered DotPattern component.
 */
export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: Readonly<DotPatternProps>) {
  const id = useId()

  return (
    <svg
      aria-hidden='true'
      className={cn(
        'pointer-events-none absolute inset-0 z-0 size-full fill-[var(--gray-a3)]',
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits='userSpaceOnUse'
          patternContentUnits='userSpaceOnUse'
          x={x}
          y={y}
        >
          <circle id='pattern-circle' cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width='100%' height='100%' strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  )
}

export default DotPattern
