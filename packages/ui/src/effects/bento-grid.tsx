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
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-3 gap-4',
        className,
      )}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  iconClassName,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string
  className: string
  iconClassName?: string
  background: ReactNode
  Icon?: any
  description: string
  href: string
  cta: string
}) => (
  <div
    key={name}
    className={cn(
      'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl',
      // light styles
      'bg-[var(--gray-a1)] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
      // dark styles
      'transform-gpu bg-[var(--ghost-aa6)] [border:1px_solid_rgba(0,0,0,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]',
      className,
    )}
  >
    <div className='overflow-hidden rounded-2xl'>{background}</div>
    <div className='pointer-events-none z-[16] flex transform-gpu flex-col gap-2 overflow-hidden p-12 transition-all duration-300 group-hover:-translate-y-10'>
      <Icon
        className={cn(
          'size-12 origin-left transform-gpu fill-[var(--accent-a3)] text-[var(--accent-a9)] transition-all duration-300 ease-in-out group-hover:scale-75',
          iconClassName,
        )}
      />
      <h3 className='text-balance text-3xl font-medium text-[var(--neutral-a11)]'>
        {name}
      </h3>
      <p className='max-w-lg text-balance text-neutral-400'>{description}</p>
    </div>

    <div
      className={cn(
        'pointer-events-none absolute bottom-0 z-[16] flex w-full translate-y-10 transform-gpu flex-row items-center overflow-hidden rounded-2xl p-12 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
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
    <div className='before:ease absolute inset-x-0 bottom-0 top-auto z-0 mt-auto size-[275px] origin-bottom-left overflow-hidden rounded-tr-full transition-transform before:absolute before:bottom-0 before:left-0 before:top-auto before:mt-auto before:size-[275px] before:-translate-x-40 before:translate-y-40 before:overflow-hidden before:rounded-bl-2xl before:rounded-tr-full before:bg-[var(--accent-a4)] before:blur-3xl before:transition-transform before:duration-500 group-hover:before:-translate-x-16 group-hover:before:translate-y-16'></div>
    <div className='!before:rounded-tr-2xl !before:rounded-bl-2xl absolute bottom-0 left-0 right-auto top-auto z-10 mr-auto mt-auto size-[800px] origin-bottom-left overflow-hidden rounded-2xl before:overflow-hidden'>
      <div className='!before:rounded-tr-2xl before:gradientMask-topRight-4 absolute bottom-0 left-0 right-auto top-auto z-0 mr-auto mt-auto size-[400px] origin-bottom-left overflow-hidden !rounded-2xl rounded-bl-2xl rounded-tr-full before:absolute before:size-[400px] before:overflow-hidden before:rounded-2xl before:bg-[var(--ghost-aa3)] before:backdrop-blur-md'></div>
    </div>
  </div>
)

export { BentoCard, BentoGrid }
