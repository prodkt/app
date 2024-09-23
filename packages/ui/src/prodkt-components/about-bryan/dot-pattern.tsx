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
 *
 * @param root0
 * @param root0.width
 * @param root0.height
 * @param root0.x
 * @param root0.y
 * @param root0.cx
 * @param root0.cy
 * @param root0.cr
 * @param root0.className
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
        'pointer-events-none absolute inset-0 z-0 size-full fill-[var(--grayA3)]',
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
