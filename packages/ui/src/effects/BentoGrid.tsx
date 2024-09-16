import type { ReactNode } from 'react'

import { ArrowRightIcon } from '@radix-ui/react-icons'

import { cn } from '@/utils/cn'

import { Button } from '../primitives/button'

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={cn('grid w-full grid-cols-1 gap-4', className)}>
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  // iconClassName,
  background,
  // description,
  href,
  cta,
}: {
  name?: string
  className: string
  // iconClassName?: string
  background?: ReactNode
  // description?: string
  href?: string
  cta?: string
}) => (
  <div
    key={name}
    className={cn(
      'group relative grid w-full min-w-full rounded-2xl',
      // light styles
      '',
      // dark styles
      'transform-gpu',
      className,
    )}
  >
    <div className='w-full min-w-full rounded-2xl'>{background}</div>

    <div
      className={cn(
        'pointer-events-none absolute bottom-0 z-[16] hidden w-full translate-y-10 transform-gpu flex-row items-center overflow-hidden rounded-2xl p-12 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
      )}
    >
      <Button
        variant='default'
        asChild
        size='sm'
        className='pointer-events-auto'
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className='ml-2 size-4' />
        </a>
      </Button>
    </div>
    <div className='pointer-events-none absolute inset-0 transform-gpu overflow-hidden rounded-2xl transition-all duration-300 before:rounded-tr-2xl group-hover:rounded-tl-2xl group-hover:bg-[var(--neutral-a4)]' />
  </div>
)

export { BentoCard, BentoGrid }
