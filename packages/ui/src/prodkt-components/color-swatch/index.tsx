'use client'

import * as React from 'react'

import type { VariantProps } from 'class-variance-authority'

import { cva } from 'class-variance-authority'

import { cn } from '@/utils/cn'

import { Badge } from '../../primitives/badge'

const cardVariants = cva(
  'group content-center items-center justify-center justify-items-center gap-1 border p-1',
  {
    variants: {
      variant: {
        default: 'inline-flex flex-row',
        vertical: 'inline-flex flex-col',
      },
      size: {
        default: '',
      },
      radius: {
        default: 'rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      radius: 'default',
    },
  },
)

const swatchVariants = cva('rounded-lg', {
  variants: {
    swatch: {
      primary: 'size-12',
    },
    radius: {
      default: 'rounded-xl',
    },
  },
  defaultVariants: {
    swatch: 'primary',
    radius: 'default',
  },
})

const tagVariants = cva(
  'border-[var(--ghost-a2)] bg-[var(--ghost-a2)] text-[var(--ghost-1)] group-hover:bg-[var(--ghost-a3)]',
  {
    variants: {
      tag: {
        default: 'px-4',
      },
      size: {
        default: 'h-12',
      },
      radius: {
        default: 'rounded-xl',
      },
    },
    defaultVariants: {
      tag: 'default',
      size: 'default',
      radius: 'default',
    },
  },
)

const ColorSwatch = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof cardVariants> &
    VariantProps<typeof swatchVariants> &
    VariantProps<typeof tagVariants> & { showValue?: boolean }
>(
  (
    {
      className,
      variant,
      radius,
      tag,
      showValue,
      size,
      swatch,
      color = '--violet9',
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, size, radius }), className)}
        {...props}
      >
        <div
          className={cn(swatchVariants({ swatch, radius }))}
          style={{ backgroundColor: `var(${color})` }}
        />
        {showValue === true ? (
          <Badge className={cn(tagVariants({ tag, size, radius }))}>
            {color}
          </Badge>
        ) : null}
        {/* <div style={{ backgroundColor: `var(${color})` }}>{color}</div> */}
      </div>
    )
  },
)

ColorSwatch.displayName = 'ColorSwatch'

export { ColorSwatch }
