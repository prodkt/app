import React from 'react'

import './footer.css'

import type { VariantProps } from 'class-variance-authority'

import { cva } from 'class-variance-authority'

import { cn } from '@/utils/cn'

import { FooterMenu } from '../footer-menu'

const footerVariants = cva(
  'relative w-full max-w-full content-center items-center justify-center justify-items-center gap-0 overflow-x-clip border-t border-[var(--gray12)] bg-[var(--grayA12)] p-0 after:absolute after:inset-0 after:z-0 after:size-full after:bg-[var(--grayA12)] dark:border-[var(--grayA3)] dark:bg-[var(--grayA2)] dark:after:bg-[var(--grayA2)]',
  {
    variants: {
      variant: {
        default: 'flex flex-row',
      },
      size: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof footerVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    className={cn(footerVariants({ variant }), className)}
    {...props}
    ref={ref}
  >
    <div className='flex w-full flex-row items-center justify-start gap-x-px bg-gradient-to-b from-[var(--gray5)] to-transparent'>
      <FooterMenu />
    </div>
  </div>
))

Footer.displayName = 'Footer'

export { Footer }
