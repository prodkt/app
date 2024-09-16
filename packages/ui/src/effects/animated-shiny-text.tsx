import type { CSSProperties, FC, ReactNode } from 'react'

import { cn } from '@/utils/cn'

interface AnimatedShinyTextProps {
  children: ReactNode
  className?: string
  shimmerWidth?: number
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <p
      style={
        {
          '--shimmer-width': `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        'mx-auto h-full text-[var(--ghost-a8)]',

        // Shimmer effect
        'animate-shimmer bg-clip-text bg-no-repeat [background-position:0_20] [background-size:var(--shimmer-width)_200%] [transition:background-position_10s_cubic-bezier(.6,.6,0,1)_infinite]',

        // Shimmer gradient
        'bg-gradient-to-r from-transparent via-[var(--ghost-aa12)] via-50% to-transparent  dark:via-white/80',

        className,
      )}
    >
      {children}
    </p>
  )
}

export default AnimatedShinyText
