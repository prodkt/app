'use client'

import * as React from 'react'

import { Download, ExternalLink } from 'lucide-react'

import { Cisco } from '@/brands/clients/cisco'
import { CocaCola } from '@/brands/clients/coke'
import { Hm } from '@/brands/clients/hm'
import { Hp } from '@/brands/clients/hp'
import { Samsung } from '@/brands/clients/samsung'
import { Toyota } from '@/brands/clients/toyota'
import { Button } from '@/primitives/button'
import { CloudLogo, LogoCloud } from '@/prodkt-components/logo-cloud'

import { AnimatedCursor } from '../animated-cursor'
import { HeroBackground } from './background'
import { Chip } from './chip'
import { GradientGlow } from './gradient-glow'
import { PathLineComposed } from './path-line'
import { Sparks } from './sparks'

import './hero-header.css'

const HeroHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return (
    <div
      ref={ref}
      className='relative flex h-full min-h-screen flex-col items-center justify-start space-y-16 overflow-hidden pb-20 pt-12 md:pt-28'
      {...props}
    >
      <div className='relative z-[1] flex h-fit flex-col items-center justify-center space-y-8'>
        <div className='relative flex w-full flex-row items-center justify-center gap-0 border border-[var(--grayA5)] p-0 sm:w-auto'>
          <div className='bg-ghost-aa7 absolute -left-1 -top-1 bottom-auto mb-auto mt-0 size-2 rounded-none border border-[var(--grayA5)]' />
          <div className='bg-ghost-aa7 absolute -right-1 -top-1 bottom-auto mb-auto mt-0 size-2 rounded-none border border-[var(--grayA5)]' />
          <div className='bg-ghost-aa7 absolute -bottom-1 -left-1 top-auto my-0 size-2 rounded-none border border-[var(--grayA5)]' />
          <div className='bg-ghost-aa7 absolute -bottom-1 -right-1 top-auto my-0 size-2 rounded-none border border-[var(--grayA5)]' />
          <div className='flex flex-col items-center justify-center gap-1 space-y-0 py-2 pl-3 pr-2 sm:flex-row'>
            <p className=' text-pretty text-center text-sm text-[var(--grayA10)]'>
              I'm on the search for my next challenge.
            </p>
            <div className='flex flex-row place-content-stretch place-items-stretch content-stretch items-center justify-stretch gap-2 -space-x-px space-y-0'>
              <a className='inset-x-0 mx-0 w-full py-0' href='/work-history'>
                <Button
                  className='flex h-6 items-center justify-center gap-1 p-0 px-1'
                  variant='link'
                >
                  Work History
                  <ExternalLink
                    size={16}
                    className='fill-[var(--accentA6)] stroke-[var(--accent11)]'
                  />
                </Button>
              </a>
              <div className='my-auto h-4 min-w-px bg-[var(--grayA4)]' />
              <a
                className='inset-x-0 mx-0 w-full py-0'
                href='/resume/BryanFunk_CV-Resume_v2_001_reduced.pdf'
                download
              >
                <Button
                  className='flex h-6 items-center justify-center gap-1 p-0 px-1'
                  variant='link'
                >
                  <Download
                    size={16}
                    className='fill-[var(--accentA6)] stroke-[var(--accent11)]'
                  />
                  Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
        <h1 className='from-ghost-a11 to-ghost-a9 -mb-6 bg-gradient-to-b bg-clip-text px-2 pb-2 text-6xl font-medium tracking-tighter text-transparent sm:text-8xl'>
          Bryan Funk
        </h1>
        <Sparks className='pointer-events-none absolute inset-auto z-0 m-auto w-screen select-none' />
      </div>
      <div className='relative z-[1] flex size-[8.75rem] items-center justify-center border'>
        <div className='bg-ghost-a11 absolute left-0 z-[1] h-1/2 w-[4px] -translate-x-px mix-blend-hard-light blur-sm' />
        <div className='bg-ghost-a11 absolute z-[1] h-1/2 w-[4px] translate-x-px mix-blend-hard-light blur-sm' />
        <img
          src='https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/762dfb06-a622-4959-94cb-4357413be570.avif'
          className='absolute inset-auto left-0 z-[2] m-0 -translate-x-full select-none'
          alt='Chip glow'
        />
        <img
          src='https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/762dfb06-a622-4959-94cb-4357413be570.avif'
          className='absolute inset-auto right-0 z-[2] m-0 translate-x-full rotate-180 select-none'
          alt='Chip glow'
        />
        <Chip className='pointer-events-none z-10 min-w-96 translate-y-[6.125rem] select-none' />
        <div className='absolute z-0 m-auto h-full w-1/2 -translate-y-3 rotate-90 animate-pulse rounded-l-full bg-[var(--sky11)] blur-xl' />
        <div className='absolute z-0 m-auto h-full w-1/2 -translate-y-3 rotate-90 animate-pulse rounded-l-full bg-[var(--orange9)] blur-xl' />
        <div className='absolute z-0 m-auto h-full w-1/2 translate-y-3 rotate-90 animate-pulse rounded-l-full bg-[var(--sky11)] blur-xl' />
      </div>
      <LogoCloud>
        <CloudLogo>
          <Cisco className='h-4 w-auto max-w-14' />
        </CloudLogo>
        <CloudLogo>
          <CocaCola className='h-4 w-auto max-w-14' />
        </CloudLogo>
        <CloudLogo>
          <Hp className='h-4 w-auto max-w-14' />
        </CloudLogo>
        <CloudLogo>
          <Samsung className='h-4 w-auto max-w-14' />
        </CloudLogo>
        <CloudLogo>
          <Toyota className='h-4 w-auto max-w-14' />
        </CloudLogo>
        <CloudLogo>
          <Hm className='h-4 w-auto max-w-14' />
        </CloudLogo>
      </LogoCloud>

      <div className='relative z-[2] mb-4 flex flex-col items-center justify-center gap-2 sm:flex-row'>
        <h2 className=' from-ghost bg-gradient-to-br to-[var(--grayA10)] bg-clip-text font-mono text-xs uppercase tracking-widest text-transparent'>
          A portfolio platform from Bryan Funk
        </h2>
        <div className='bg-ghost-a1 hidden h-4 w-px sm:block' />
        <a href='/work-history'>
          <Button className='p-0 text-xs' variant='link'>
            Coming Soon
          </Button>
        </a>
        <div className='absolute -bottom-14 right-4 w-fit sm:-bottom-14 sm:-right-1/4'>
          <AnimatedCursor text='Bryan Funk' />
        </div>
      </div>
      <div className='relative hidden flex-row items-center justify-center gap-20'>
        {/* BOX 2 */}
        <div className='group flex flex-row items-center justify-center gap-0 space-y-0'>
          <div className='flex flex-col items-center justify-center gap-0 space-y-0'>
            <div className='shadow-ghost-aa12 relative flex flex-col items-center  justify-center border border-[var(--ghost-a1)] bg-gradient-to-br from-[var(--ghost-aa4)] to-[var(--gray3)] p-8 shadow-2xl ring ring-inset ring-[var(--ghost-aa4)]'>
              <div className='bg-gradient-to-t from-[var(--grayA2)] to-[var(--grayA8)] bg-clip-text font-mono text-xs uppercase tracking-widest text-transparent'>
                New Product Development
              </div>
            </div>
            {/* BRANCHES 2 */}
            <div className='gradientMask-to-b relative hidden flex-col items-center justify-center'>
              <div className='relative mt-6 flex flex-row items-center justify-center'>
                <div className='-scale-x-100' />
                <div className=' absolute inset-x-auto mx-auto'>
                  <PathLineComposed className='h-auto scale-150' />
                </div>
                <div className='-scale-x-100' />
              </div>
              <div className='relative mx-auto mt-6 flex flex-row items-center justify-center gap-2 text-center text-[var(--grayA9)]'>
                <div className='bg-radial-gradient shadow-ghost-aa12 relative  w-auto border border-[var(--grayA4)] from-[var(--ghost-aa1)] to-[var(--ghost-aa12)] px-5 py-2 font-mono text-xs font-light uppercase tracking-widest shadow-inner ring ring-inset ring-[var(--grayA2)]'>
                  <p className='bg-gradient-to-t from-[var(--ghost-a5)] to-[var(--ghost-aa9)] bg-clip-text text-transparent'>
                    Discovery
                  </p>
                  <p className='invisible absolute inset-0 z-[1] m-0 flex size-full items-center justify-center bg-[var(--ghost-aa12)] text-[var(--ghost-a3)] hover:visible'>
                    Continue
                  </p>
                </div>
                <div className='shadow-inner-[10px_10px_10px_4px] bg-radial-gradient shadow-ghost-a11  relative w-auto border border-[var(--grayA4)] from-[var(--ghost-aa1)] to-[var(--ghost-aa12)] px-5 py-2 font-mono text-xs font-light uppercase tracking-widest ring ring-inset ring-[var(--grayA2)]'>
                  <p className='bg-gradient-to-t from-[var(--ghost-a5)] to-[var(--ghost-aa9)] bg-clip-text text-transparent'>
                    Delivery
                  </p>
                  <p className='invisible absolute inset-0 z-[1] m-0 flex size-full items-center justify-center bg-[var(--ghost-aa12)] text-[var(--ghost-aa3)] hover:visible'>
                    Continue
                  </p>
                </div>
                <div className='bg-radial-gradient shadow-ghost-aa12 relative  w-auto border border-[var(--grayA4)] from-[var(--ghost-aa1)] to-[var(--ghost-aa12)] px-5 py-2 font-mono text-xs font-light uppercase tracking-widest shadow-inner ring ring-inset ring-[var(--grayA2)]'>
                  <p className='bg-gradient-to-t from-[var(--ghost-a5)] to-[var(--ghost-aa9)] bg-clip-text text-transparent'>
                    Growth
                  </p>
                  <p className='invisible absolute inset-0 z-[1] m-0 flex size-full items-center justify-center bg-[var(--ghost-aa12)] text-[var(--ghost-a3)] hover:visible'>
                    Continue
                  </p>
                </div>
              </div>
            </div>
            {/* END BRANCHES 2 */}
          </div>
          {/* BRANCHES 3 */}
          <div className='relative hidden -translate-y-1/4 flex-row items-center justify-center gap-8'>
            <div className='relative flex flex-row items-center justify-center'>
              <div className=' absolute translate-x-1/4 -rotate-90'>
                <PathLineComposed className='h-auto scale-y-150 mix-blend-overlay invert' />
              </div>
            </div>
            <div className='relative flex flex-col items-start justify-center gap-10 pl-10 text-center text-[var(--grayA6)]'>
              <div className='w-auto text-xs'>Discovery</div>
              <div className='w-auto text-xs'>Delivery</div>
              <div className='w-auto text-xs'>Growth</div>
            </div>
          </div>
          {/* END BRANCHES 3 */}
        </div>
        {/* END BOX 2 */}
      </div>
      <GradientGlow className='pointer-events-none absolute inset-x-auto bottom-0 z-0 mx-auto min-h-screen translate-y-1/4 select-none object-center' />
      <HeroBackground className='hero-mask pointer-events-none absolute inset-x-auto bottom-auto z-0 m-auto size-full min-w-[1920px] select-none overflow-hidden object-cover object-center brightness-0 dark:brightness-100' />
    </div>
  )
})

HeroHeader.displayName = 'HeroHeader'

export { HeroHeader }
