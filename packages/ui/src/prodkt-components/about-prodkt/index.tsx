import React from 'react'

import Astro from '@/brands/technologies/astro'
import Directus from '@/brands/technologies/directus'
import Docker from '@/brands/technologies/docker'
import ReactLogo from '@/brands/technologies/react'
import Storybook from '@/brands/technologies/storybook'
import Supabase from '@/brands/technologies/supabase'

import {
  ConnectionBoard,
  GiantOrb,
  GreenGlow,
  ProdktBlurry,
  Stars,
  TopGlow,
} from '../assets'
import { HeroBackground } from '../hero-header/background'
import { CloudLogo, LogoCloud } from '../logo-cloud'

import './about-prodkt.css'

import TinyFan from './fan-tiny.avif'

const AboutProdkt = React.forwardRef<HTMLDivElement>(({ ...props }, ref) => {
  return (
    <section
      ref={ref}
      className='relative flex w-full flex-col items-center justify-center overflow-hidden px-10 md:px-20 md:pb-20 '
      {...props}
    >
      <div className='relative flex w-full flex-col place-content-center place-items-center content-center items-start justify-start md:items-center md:justify-center'>
        <div className='my-auto grid max-w-screen-md grid-cols-1 place-content-center place-items-center content-start items-start justify-center md:grid-cols-4 md:place-items-center md:items-center'>
          <div className='z-10 col-span-2 my-auto flex flex-col items-start justify-center gap-8 py-10 md:items-center md:pt-0'>
            <h3 className='my-auto max-w-[60dvw] text-pretty bg-gradient-to-br from-[var(--gray11)] to-[var(--gray12)] bg-clip-text pb-2 pr-3 text-6xl font-semibold leading-[80%] tracking-tighter text-transparent sm:text-7xl sm:leading-[75%] md:text-balance md:text-8xl md:leading-[75%] lg:max-w-full'>
              What is Prodkt?
            </h3>
            <div className='relative mr-auto flex translate-y-0 flex-col items-center justify-start gap-4'>
              <div className='relative z-[19] mr-auto flex w-full translate-y-0 flex-col items-start justify-start gap-2'>
                <h2 className=' relative max-w-xs text-balance bg-gradient-to-br from-[var(--grayA9)] to-[var(--grayA11)] bg-clip-text font-mono text-xs uppercase tracking-widest text-transparent'>
                  <div className='absolute inset-y-0 -left-5 my-auto h-px w-3 bg-[var(--grayA5)]' />
                  A resume made available to companies I've expressed interest
                  in for potential employment.
                </h2>
                <h2 className=' absolute max-w-xs animate-pulse text-balance bg-gradient-to-br from-[var(--grayA4)] to-[var(--grayA12)] bg-clip-text font-mono text-xs uppercase tracking-widest text-transparent blur'>
                  <div className='absolute inset-y-0 -left-5 my-auto h-px w-3 bg-[var(--grayA5)]' />
                  A resume made available to companies I've expressed interest
                  in for potential employment.
                </h2>
              </div>
              <div className='relative z-[19] mr-auto flex w-full translate-y-0 flex-col items-start justify-start gap-2'>
                <h2 className=' relative max-w-[240px] text-balance bg-gradient-to-br from-[var(--grayA4)] to-[var(--grayA9)] bg-clip-text font-mono text-xs uppercase tracking-widest text-transparent'>
                  <div className='absolute inset-y-0 -left-5 my-auto h-px w-3 bg-[var(--grayA5)]' />
                  Building towards a multi-tenant SaaS platform for technical
                  Designer/Developers looking to showcase their work.
                </h2>
                <h2 className='4absolute hidden max-w-[200px] animate-pulse text-balance bg-gradient-to-br from-[var(--grayA4)] to-[var(--grayA12)] bg-clip-text font-mono text-xs uppercase tracking-widest text-transparent blur'>
                  <div className='absolute inset-y-0 -left-5 my-auto h-px w-3 bg-[var(--grayA5)]' />
                  Building towards a multi-tenant SaaS platform for technical
                  Designer/Developers looking to showcase their work.
                </h2>
              </div>
            </div>
          </div>
          <div className='absolute -top-8 left-20 z-[1] flex h-auto flex-col place-content-center place-items-center content-center items-center justify-center md:relative md:left-0 md:col-span-2 md:scale-100'>
            <div className='absolute inset-auto z-10 m-auto size-[19.5rem] overflow-hidden rounded-[5.5rem]'>
              <div className='relative -right-1/3 top-9 m-auto size-1 rounded-full bg-[var(--lime9)] shadow ring-2 ring-[var(--limeA3)]' />
            </div>
            <div className='relative inset-auto z-[3] m-auto -my-20 flex flex-col place-content-center place-items-center content-center items-center justify-center overflow-visible'>
              <div className='absolute inset-auto z-0 m-auto grid size-[19.5rem] grid-cols-2 grid-rows-2 gap-[3.129rem] rounded-[5.5rem] p-[0.58rem] ring-[15px] ring-[var(--gray1)] blur-xl' />

              <div className='absolute inset-auto z-[5] m-auto grid size-[13.85rem] translate-x-[2px] grid-cols-2 grid-rows-2 gap-[3.25rem] p-[0.581rem]'>
                <ProdktBlurry className='absolute inset-auto z-[6]  m-auto size-[62.5rem] translate-x-[-25rem] translate-y-2 rotate-2 opacity-50 mix-blend-color-burn blur-lg dark:opacity-100 dark:mix-blend-hard-light' />
                <h2 className='absolute inset-0 mx-auto -translate-y-5 bg-gradient-to-b from-[var(--ghost-a4)] to-[var(--ghost-a12)] bg-clip-text px-4 text-left font-mono text-xs font-semibold uppercase tracking-widest text-transparent dark:from-[var(--grayA5)] dark:to-[var(--grayA2)]'>
                  Prodkt
                </h2>
                <h2 className='absolute inset-x-0 bottom-0 top-auto mx-auto mb-0 mt-auto translate-y-4 bg-gradient-to-br  from-[var(--ghost-a7)] to-[var(--ghost-aa1)] bg-clip-text  text-center font-mono text-xs font-semibold uppercase tracking-widest text-transparent dark:from-[var(--grayA5)]'>
                  Portfolio Engine
                </h2>
                <div className='relative z-[5] flex size-[4.5rem] origin-center animate-spinSlow1x items-center justify-center rounded-full border border-[var(--slateA11)] bg-[var(--slate3)] p-0 shadow-2xl shadow-[var(--sky12)] ring-2 ring-[var(--mintA11)] after:absolute after:inset-0 after:z-20 after:size-full after:animate-spinSlow1x after:rounded-full after:bg-gradient-to-b after:from-transparent after:to-transparent after:opacity-100 after:brightness-100 after:transition-all dark:border-[var(--mintA9)] dark:bg-[var(--gray2)] dark:ring-[var(--mintA6)]'>
                  {/* <div className="inset-0 m-0 size-full overflow-hidden rounded-full border-[10px] border-[var(--gray6)] blur-sm" /> */}
                  <img
                    src={TinyFan}
                    alt={''}
                    className='absolute inset-0 m-auto origin-center animate-spinSlow2x overflow-hidden rounded-full object-cover object-center opacity-[0.055] brightness-0 contrast-0 dark:opacity-[0.015]'
                  />
                </div>
                <div className='relative z-[5] flex size-[4.5rem] origin-center animate-spinSlow1x items-center justify-center rounded-full border border-[var(--slateA7)] bg-[var(--slate3)] p-0 shadow-2xl shadow-[var(--sky12)] ring-2 ring-[var(--mintA11)] after:absolute after:inset-0 after:z-20 after:size-full after:animate-spinSlow4x after:rounded-full after:bg-gradient-to-b after:from-transparent after:to-transparent after:opacity-100 after:brightness-100 after:transition-all dark:border-[var(--mintA9)] dark:bg-[var(--gray2)] dark:ring-[var(--mintA6)]'>
                  {/* <div className="inset-0 m-0 size-full overflow-hidden rounded-full border-[10px] border-[var(--gray6)] blur-sm" /> */}
                  <img
                    src={TinyFan}
                    alt={''}
                    className='absolute inset-0 m-auto origin-center animate-spinSlow2x overflow-hidden rounded-full object-cover object-center opacity-[0.055] brightness-0 contrast-0 dark:opacity-[0.015]'
                  />
                </div>
                <div className='relative z-[5] flex size-[4.5rem] origin-center animate-spinSlow1x items-center justify-center rounded-full border border-[var(--slateA7)] bg-[var(--slate3)] p-0 shadow-2xl shadow-[var(--sky12)] ring-2 ring-[var(--mintA11)] after:absolute after:inset-0 after:z-20 after:size-full after:animate-spinSlow3x after:rounded-full after:bg-gradient-to-b after:from-transparent after:to-transparent after:opacity-100 after:brightness-100 after:transition-all dark:border-[var(--mintA9)] dark:bg-[var(--gray2)] dark:ring-[var(--mintA6)]'>
                  {/* <div className="inset-0 m-0 size-full overflow-hidden rounded-full border-[10px] border-[var(--gray6)] blur-sm" /> */}
                  <img
                    src={TinyFan}
                    alt={''}
                    className='absolute inset-0 m-auto origin-center animate-spinSlow2x overflow-hidden rounded-full object-cover object-center opacity-[0.055] brightness-0 contrast-0 dark:opacity-[0.015]'
                  />
                </div>
                <div className='relative z-[5] flex size-[4.5rem] origin-center animate-spinSlow1x items-center justify-center rounded-full border border-[var(--slateA7)] bg-[var(--slate3)] p-0 shadow-2xl shadow-[var(--sky12)] ring-2 ring-[var(--mintA11)] after:absolute after:inset-0 after:z-20 after:size-full after:animate-spinSlow2x after:rounded-full after:bg-gradient-to-b after:from-transparent after:to-transparent after:opacity-100 after:brightness-100 after:transition-all dark:border-[var(--mintA9)] dark:bg-[var(--gray2)] dark:ring-[var(--mintA6)]'>
                  {/* <div className="inset-0 m-0 size-full overflow-hidden rounded-full border-[10px] border-[var(--gray6)] blur-sm" /> */}
                  <img
                    src={TinyFan}
                    alt={''}
                    className='absolute inset-0 m-auto origin-center animate-spinSlow2x overflow-hidden rounded-full object-cover object-center opacity-[0.055] brightness-0 contrast-0 dark:opacity-[0.015]'
                  />
                </div>
              </div>
              <div className='relative inset-0 m-auto flex size-full flex-col place-content-center place-items-center content-center items-center justify-center'>
                <img
                  src='https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/762dfb06-a622-4959-94cb-4357413be570.avif'
                  className='absolute left-0 z-0 ml-0 hidden -translate-x-1/2 scale-y-[-0.7] animate-pulse select-none opacity-100 invert dark:block dark:invert-0'
                  alt='Chip glow'
                />
                <img
                  src='https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/762dfb06-a622-4959-94cb-4357413be570.avif'
                  className='absolute right-0 z-0  hidden translate-x-1/2 -scale-x-100 scale-y-[-0.7] animate-pulse select-none opacity-100 invert dark:block dark:invert-0'
                  alt='Chip glow'
                />
                <ConnectionBoard className='absolute z-[11] m-auto size-[43.25rem] translate-y-[10.5rem] fill-[var(--grayA1)] stroke-[var(--grayA1)] opacity-0 mix-blend-soft-light dark:fill-[var(--grayA1)] dark:stroke-[var(--grayA2)] dark:opacity-0 dark:mix-blend-lighten' />
                <ConnectionBoard className='z-[1] m-auto size-[43.25rem] translate-y-[10.5rem] fill-[var(--grayA1)] stroke-none opacity-100 mix-blend-lighten dark:fill-[var(--grayA1)] dark:stroke-[var(--grayA1)] dark:mix-blend-color-dodge' />
              </div>
            </div>
          </div>
        </div>
        <div className='relative z-[1] mx-auto -mt-[calc(0.6rem_-_1px)] mb-12 flex flex-col items-center justify-start overflow-visible backdrop-blur md:mb-20 lg:mb-28'>
          <LogoCloud>
            <CloudLogo>
              <Supabase className='h-4 w-auto max-w-16 text-[var(--ghost-a6)]' />
            </CloudLogo>
            <CloudLogo>
              <Astro className='h-4 w-auto max-w-16 text-[var(--ghost-a6)]' />
            </CloudLogo>
            <CloudLogo>
              <Directus className='h-4 w-auto max-w-16 text-[var(--ghost-a6)]' />
            </CloudLogo>
            <CloudLogo>
              <Storybook className='h-4 w-auto max-w-16 text-[var(--ghost-a6)]' />
            </CloudLogo>
            <CloudLogo>
              <ReactLogo className='h-4 w-auto max-w-16 text-[var(--ghost-a6)]' />
            </CloudLogo>
            <CloudLogo>
              <Docker className='h-4 w-auto max-w-16 text-[var(--ghost-a6)]' />
            </CloudLogo>
          </LogoCloud>
        </div>
      </div>

      <div className='relative bottom-0 top-auto z-[1] mb-0 mt-auto flex w-full max-w-full flex-row items-start justify-start gap-8 lg:justify-center'>
        <div className='flex h-full flex-col items-start justify-start gap-4'>
          <h6 className='relative mr-auto max-w-[75dvw] max-w-xl text-balance bg-gradient-to-br from-[var(--grayA10)] to-[var(--grayA12)] bg-clip-text text-left font-mono text-xs uppercase tracking-widest text-transparent lg:mx-auto lg:text-center'>
            The driving force above all other intentions and purpose is
            simple...
          </h6>
          <h3 className='text-balance bg-gradient-to-br from-[var(--gray11)] to-[var(--gray12)] bg-clip-text pb-2 pr-3 text-6xl font-medium leading-[80%] tracking-tighter text-transparent md:text-8xl md:leading-[85%] lg:mx-auto'>
            Get hired.
          </h3>
          <h6 className='mr-auto text-balance  pb-2.5 pr-3 text-lg leading-[80%] tracking-tight text-[var(--gray9)] md:text-2xl md:leading-[80%] lg:mx-auto'>
            I{`'`}m in search of my next challenge.
          </h6>
        </div>
      </div>

      {/* <GlowOrb className="absolute z-0 translate-x-20 -translate-y-16 size-full blur-2xl" /> */}
      {/* <CircuitThree className="absolute inset-auto z-0 hidden w-full min-h-screen mb-auto pointer-events-none select-none min-w-screen size-full md:block" /> */}
      <Stars className='pointer-events-none absolute inset-x-auto bottom-auto top-0 z-20 mx-0 mb-auto mt-0 select-none opacity-10' />
      {/* <GreenGlow className="pointer-events-none absolute inset-x-0 bottom-auto top-0 z-[0] mx-0 mb-auto mt-0 translate-y-40 select-none" /> */}
      <TopGlow className='gradientMask-to-b-40 pointer-events-none absolute inset-x-auto top-0 z-0 mb-auto ml-auto mt-0 hidden min-h-screen w-1/2 -translate-y-12 select-none opacity-100 mix-blend-hard-light blur-xl' />
      <HeroBackground className='hero-mask pointer-events-none absolute inset-x-auto bottom-auto z-0 m-auto size-full min-w-[1920px] select-none overflow-hidden object-cover object-center' />
    </section>
  )
})

AboutProdkt.displayName = 'AboutProdkt'

export { AboutProdkt }
