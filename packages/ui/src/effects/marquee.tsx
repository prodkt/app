import { cn } from '@/utils/cn'

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  repeat?: number
  [key: string]: any
}

/**
 * Props for the Marquee component.
 * @param root0 - The root0 parameter.
 * @param root0.reverse - Whether the Marquee should animate in reverse.
 * @param root0.pauseOnHover - Whether the Marquee should pause on hover.
 * @param root0.children - The content of the Marquee component.
 * @param root0.vertical - Whether the Marquee should scroll vertically.
 * @param root0.repeat - The number of times the Marquee should repeat.
 * @param root0.className - The class name for the Marquee component.
 * @returns - The rendered Marquee component.
 */
export default function Marquee({
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  className,
  ...props
}: Readonly<MarqueeProps>) {
  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 justify-center [gap:var(--gap)]', {
              'animate-marquee flex-row': !vertical,
              'animate-marquee-vertical flex-col': vertical,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
              '[animation-direction:reverse]': reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
