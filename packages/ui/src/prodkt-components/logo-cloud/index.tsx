'use client'

import * as React from 'react'

const LogoCloud = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className='relative -top-px z-[6] flex w-fit flex-row items-center justify-center -space-x-px backdrop-blur'
      {...props}
    >
      <div className='absolute -left-1 -top-1 bottom-auto mb-auto mt-0 size-2 rounded-none bg-[var(--gray8)] dark:bg-[var(--gray4)] bg-clip-content' />
      <div className='absolute -right-1 -top-1 bottom-auto mb-auto mt-0 size-2 rounded-none bg-[var(--gray8)] dark:bg-[var(--gray4)] bg-clip-content' />
      <div className='absolute -bottom-1 -left-1 top-auto my-0 size-2 rounded-none bg-[var(--gray8)] dark:bg-[var(--gray4)] bg-clip-content' />
      <div className='absolute -bottom-1 -right-1 top-auto my-0 size-2 rounded-none bg-[var(--gray8)] dark:bg-[var(--gray4)] bg-clip-content' />
      {children}
    </div>
  )
})

const CloudLogo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className='mx-auto flex h-24 w-fit min-w-32 items-center justify-center border border-[var(--gray6)] dark:border-[var(--grayA2)] p-4 text-xs transition-all duration-700 hover:min-w-48'
      {...props}
    >
      {children}
    </div>
  )
})

CloudLogo.displayName = 'CloudLogo'
LogoCloud.displayName = 'LogoCloud'

export { LogoCloud, CloudLogo }
