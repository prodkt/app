'use client'

import * as React from 'react'

import { Cisco } from '../../brands/clients/cisco'
import { CocaCola } from '../../brands/clients/coke'
import { Hm } from '../../brands/clients/hm'
import { Hp } from '../../brands/clients/hp'
import { Samsung } from '../../brands/clients/samsung'
import { Toyota } from '../../brands/clients/toyota'

const LogoCloud = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return (
    <div
      ref={ref}
      className='relative -top-px z-[6] flex flex-row items-center justify-center -space-x-px backdrop-blur'
      {...props}
    >
      <div className='absolute -left-1 -top-1 bottom-auto mb-auto mt-0 size-2 rounded-none bg-[var(--gray4)] bg-clip-content' />
      <div className='absolute -right-1 -top-1 bottom-auto mb-auto mt-0 size-2 rounded-none bg-[var(--gray4)] bg-clip-content' />
      <div className='absolute -bottom-1 -left-1 top-auto my-0 size-2 rounded-none bg-[var(--gray4)] bg-clip-content' />
      <div className='absolute -bottom-1 -right-1 top-auto my-0 size-2 rounded-none bg-[var(--gray4)] bg-clip-content' />
      <div className='mx-auto hidden h-24 w-40 items-center justify-center text-balance border p-4'>
        <p className='bg-gradient-to-br from-ghost to-[var(--ghost-a6)] bg-clip-text font-mono text-xs font-semibold uppercase tracking-widest text-transparent'>
          Experienced with big brand
        </p>
      </div>
      <div className='mx-auto flex h-24 w-fit min-w-32 items-center justify-center border border-[var(--grayA2)] p-4 text-xs transition-all duration-700 hover:min-w-48'>
        <Cisco className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
      </div>
      <div className='mx-auto flex h-24 w-fit min-w-32 items-center justify-center border border-[var(--grayA2)] p-4 text-xs transition-all duration-700 hover:min-w-48'>
        <CocaCola className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
      </div>
      <div className='mx-auto flex h-24 w-fit min-w-32 items-center justify-center border border-[var(--grayA2)] p-4 text-xs transition-all duration-700 hover:min-w-48'>
        <Hp className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
      </div>
      <div className='mx-auto flex h-24 w-fit min-w-32 items-center justify-center border border-[var(--grayA2)] p-4 text-xs transition-all duration-700 hover:min-w-48'>
        <Samsung className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
      </div>
      <div className='mx-auto flex h-24 w-fit min-w-32 items-center justify-center border border-[var(--grayA2)] p-4 text-xs transition-all duration-700 hover:min-w-48'>
        <Toyota className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
      </div>
      <div className='mx-auto flex h-24 w-fit min-w-32 items-center justify-center border border-[var(--grayA2)] p-4 text-xs transition-all duration-700 hover:min-w-48'>
        <Hm className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
      </div>
    </div>
  )
})

LogoCloud.displayName = 'LogoCloud'

export { LogoCloud }
