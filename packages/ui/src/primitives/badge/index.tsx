import type { VariantProps } from 'class-variance-authority'
import type * as React from 'react'

import { cva } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const badgeVariants = cva(
  'inline-flex items-center text-nowrap rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-accent text-accent-foreground shadow hover:bg-accent-9',
        technical:
          'border-transparent bg-accent-1 font-mono font-normal uppercase tracking-widest text-accent-hover shadow',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary-9',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive-9',
        outline:
          'my-auto h-[28px] rounded-full border-[var(--grayA3)] font-normal leading-none text-[var(--grayA9)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * A badge is a small status descriptor for UI elements.
 * @param props The badge props.
 * @param props.className The className to apply to the badge.
 * @param props.variant The variant of the badge.
 * @returns The badge component.
 */
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
