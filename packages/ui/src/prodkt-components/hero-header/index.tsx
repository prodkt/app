'use client'

import * as React from 'react'

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
import { Sparks } from './sparks'

import './hero-header.css'

const HeroHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return (
    <div
      ref={ref}
      className='relative flex h-full flex-col items-center justify-start space-y-24 overflow-hidden py-20'
      {...props}
    >
      <div className='relative z-[1] flex h-fit flex-col items-center justify-center space-y-4'>
        <div className='relative z-[2] mb-4 flex flex-row items-center justify-center gap-2'>
          <h2 className=' bg-gradient-to-br from-ghost to-[var(--ghost-a10)] bg-clip-text font-mono text-xs font-semibold uppercase tracking-widest text-transparent'>
            A portfolio platform from Bryan Funk
          </h2>
          <div className='h-4 w-px bg-ghost-a1' />
          <a href='/about'>
            <Button className='p-0 text-xs' variant='link'>
              Learn more
            </Button>
          </a>
          <div className='absolute -bottom-14 -right-1/4 w-fit'>
            <AnimatedCursor text='Bryan Funk' />
          </div>
        </div>
        <div className='relative hidden border border-ghost-a3 bg-ghost-a1 px-4 py-2 shadow-2xl shadow-ghost-a5 backdrop-blur'>
          <div className='absolute -left-1 -top-1 bottom-auto mb-auto mt-0 size-2 rounded-none border border-ghost-a4 bg-ghost-aa7' />
          <div className='absolute -right-1 -top-1 bottom-auto mb-auto mt-0 size-2 rounded-none border border-ghost-a4 bg-ghost-aa7' />
          <div className='absolute -bottom-1 -left-1 top-auto my-0 size-2 rounded-none border border-ghost-a4 bg-ghost-aa7' />
          <div className='absolute -bottom-1 -right-1 top-auto my-0 size-2 rounded-none border border-ghost-a4 bg-ghost-aa7' />
          Exploring opportunities
        </div>

        <h1 className='-mb-2 bg-gradient-to-b from-ghost-a11 to-ghost-a9 bg-clip-text pb-2 text-8xl tracking-tighter text-transparent'>
          Bryan Funk
        </h1>
        <Sparks className='pointer-events-none absolute inset-auto z-0 m-auto w-screen select-none' />
      </div>
      <div className='relative z-[1] flex size-[8.75rem] items-center justify-center border'>
        <div className='absolute left-0 z-[1] h-1/2 w-[4px] -translate-x-px bg-ghost-a11 mix-blend-hard-light blur-sm' />
        <div className='absolute z-[1] h-1/2 w-[4px] translate-x-px bg-ghost-a11 mix-blend-hard-light blur-sm' />
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
        <Chip className='pointer-events-none z-[1] min-w-96 translate-y-[6.125rem] select-none' />
        <div className='absolute z-0 m-auto h-full w-1/2 -translate-y-3 rotate-90 animate-pulse rounded-l-full bg-[var(--sky11)] blur-xl' />
        <div className='absolute z-0 m-auto h-full w-1/2 -translate-y-3 rotate-90 animate-pulse rounded-l-full bg-[var(--orange9)] blur-xl' />
        <div className='absolute z-0 m-auto h-full w-1/2 translate-y-3 rotate-90 animate-pulse rounded-l-full bg-[var(--sky11)] blur-xl' />
      </div>
      <LogoCloud>
        <CloudLogo>
          <Cisco className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
        </CloudLogo>
        <CloudLogo>
          <CocaCola className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
        </CloudLogo>
        <CloudLogo>
          <Hp className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
        </CloudLogo>
        <CloudLogo>
          <Samsung className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
        </CloudLogo>
        <CloudLogo>
          <Toyota className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
        </CloudLogo>
        <CloudLogo>
          <Hm className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
        </CloudLogo>
      </LogoCloud>
      <GradientGlow className='pointer-events-none absolute inset-x-auto bottom-0 z-0 mx-auto min-h-screen translate-y-1/4 select-none object-center' />
      <HeroBackground className='hero-mask pointer-events-none absolute inset-x-auto bottom-auto z-0 m-auto size-full min-w-[1920px] select-none overflow-hidden object-cover object-center' />
    </div>
  )
})

HeroHeader.displayName = 'HeroHeader'

export { HeroHeader }
