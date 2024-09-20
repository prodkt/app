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
      className='gradientMask-to-b-10 relative flex w-full flex-col items-center justify-center overflow-hidden px-10 pb-40 md:px-20 '
      {...props}
    >
      {/* <CircuitTwo className='absolute bottom-0 z-0 mb-0 hidden size-full min-w-[1920px] -translate-y-1/3 object-cover md:block' /> */}
      <div className='relative flex w-full flex-col place-content-center place-items-center content-center items-start justify-start md:min-h-screen md:items-center md:justify-center'>
        <div className='my-auto grid max-w-screen-md grid-cols-1 place-content-center place-items-center content-start items-start justify-center md:grid-cols-4 md:place-items-center md:items-center'>
          <div className='z-10 col-span-2 my-auto flex flex-col items-center justify-center gap-8 py-20 md:pt-0'>
            <h3 className='my-auto max-w-[60dvw] text-pretty bg-gradient-to-br from-[var(--gray11)] to-[var(--gray12)] bg-clip-text pb-2 pr-3 text-6xl font-semibold leading-[80%] tracking-tighter text-transparent sm:text-7xl sm:leading-[75%] md:text-balance md:text-8xl md:leading-[75%] lg:max-w-full'>
              What is Prodkt?
            </h3>
            <div className='relative mr-auto flex translate-y-0 flex-row items-center justify-start gap-4'>
              <div className='h-px w-4 bg-[var(--grayA5)]' />

              <div className='relative z-[19] mr-auto flex w-full translate-y-0 flex-col items-center justify-start gap-2'>
                <h2 className='relative bg-gradient-to-br from-[var(--grayA4)] to-[var(--grayA9)] bg-clip-text font-mono text-xs font-semibold uppercase tracking-widest text-transparent'>
                  Lets get to the details
                </h2>
                <h2 className='absolute animate-pulse bg-gradient-to-br from-[var(--grayA4)] to-[var(--grayA12)] bg-clip-text font-mono text-xs font-semibold uppercase tracking-widest text-transparent blur'>
                  Lets get to the details
                </h2>
              </div>
            </div>
          </div>
          <div className='absolute -top-8 left-20 z-[1] flex h-auto flex-col place-content-center place-items-center content-center items-center justify-center md:relative md:left-0 md:col-span-2 md:scale-100'>
            <div className='absolute inset-auto z-10 m-auto size-[19.5rem] overflow-hidden rounded-[5.5rem]'>
              <div className='relative -right-1/3 top-9 m-auto size-1 rounded-full bg-[var(--lime9)] shadow ring-2 ring-[var(--limeA3)]' />
            </div>
            <div className='relative inset-auto z-[3] m-auto -my-20 flex flex-col place-content-center place-items-center content-center items-center justify-center overflow-visible'>
              <div className='absolute inset-auto z-0 m-auto grid size-[19.5rem] grid-cols-2 grid-rows-2 gap-[3.129rem] rounded-[5.5rem] p-[0.58rem] ring-[15px] ring-[var(--ghost-a4)] blur-xl' />

              <div className='absolute inset-auto z-[5] m-auto grid size-[13.85rem] translate-x-[2px] grid-cols-2 grid-rows-2 gap-[3.25rem] p-[0.581rem]'>
                <ProdktBlurry className='absolute inset-auto z-[6]  m-auto size-[62.5rem] translate-x-[-25rem] translate-y-2 rotate-2 opacity-100 mix-blend-hard-light' />
                <h2 className='absolute inset-0 mx-auto -translate-y-5 bg-gradient-to-b from-[var(--grayA5)] to-[var(--grayA2)] bg-clip-text px-4 text-left font-mono text-xs font-semibold uppercase tracking-widest text-transparent'>
                  Prodkt
                </h2>
                <h2 className='absolute inset-x-0 bottom-0 top-auto mx-auto mb-0 mt-auto translate-y-4 bg-gradient-to-br from-[var(--grayA2)] to-[var(--grayA6)] bg-clip-text text-center font-mono text-xs font-semibold uppercase tracking-widest text-transparent'>
                  Portfolio Engine
                </h2>
                <div className='relative z-[5] flex size-[4.5rem] origin-center animate-spinSlow1x items-center justify-center rounded-full border border-[var(--mintA9)] bg-[var(--gray2)] p-0 shadow-2xl shadow-[var(--sky9)] ring-1 ring-[var(--skyA3)] after:absolute after:inset-0 after:z-20 after:size-full after:animate-spinSlow1x after:rounded-full after:bg-gradient-to-b after:from-transparent after:to-transparent after:opacity-100 after:brightness-100 after:transition-all'>
                  {/* <div className="inset-0 m-0 size-full overflow-hidden rounded-full border-[10px] border-[var(--gray6)] blur-sm" /> */}
                  <img
                    src={TinyFan}
                    alt={''}
                    className='absolute inset-0 m-auto origin-center animate-spinSlow2x overflow-hidden rounded-full object-cover object-center opacity-[0.015] brightness-0 contrast-0'
                  />
                </div>
                <div className='relative z-[5] flex size-[4.5rem] origin-center animate-spinSlow1x items-center justify-center rounded-full border border-[var(--mintA9)] bg-[var(--gray2)] p-0 shadow-2xl shadow-[var(--sky9)] ring-1 ring-[var(--skyA3)] after:absolute after:inset-0 after:z-20 after:size-full after:animate-spinSlow4x after:rounded-full after:bg-gradient-to-b after:from-transparent after:to-transparent after:opacity-100 after:brightness-100 after:transition-all'>
                  {/* <div className="inset-0 m-0 size-full overflow-hidden rounded-full border-[10px] border-[var(--gray6)] blur-sm" /> */}
                  <img
                    src={TinyFan}
                    alt={''}
                    className='absolute inset-0 m-auto origin-center animate-spinSlow2x overflow-hidden rounded-full object-cover object-center opacity-[0.015] brightness-0 contrast-0'
                  />
                </div>
                <div className='relative z-[5] flex size-[4.5rem] origin-center animate-spinSlow1x items-center justify-center rounded-full border border-[var(--mintA9)] bg-[var(--gray2)] p-0 shadow-2xl shadow-[var(--sky9)] ring-1 ring-[var(--skyA3)] after:absolute after:inset-0 after:z-20 after:size-full after:animate-spinSlow3x after:rounded-full after:bg-gradient-to-b after:from-transparent after:to-transparent after:opacity-100 after:brightness-100 after:transition-all'>
                  {/* <div className="inset-0 m-0 size-full overflow-hidden rounded-full border-[10px] border-[var(--gray6)] blur-sm" /> */}
                  <img
                    src={TinyFan}
                    alt={''}
                    className='absolute inset-0 m-auto origin-center animate-spinSlow2x overflow-hidden rounded-full object-cover object-center opacity-[0.015] brightness-0 contrast-0'
                  />
                </div>
                <div className='relative z-[5] flex size-[4.5rem] origin-center animate-spinSlow1x items-center justify-center rounded-full border border-[var(--mintA9)] bg-[var(--gray2)] p-0 shadow-2xl shadow-[var(--sky9)] ring-1 ring-[var(--skyA3)] after:absolute after:inset-0 after:z-20 after:size-full after:animate-spinSlow2x after:rounded-full after:bg-gradient-to-b after:from-transparent after:to-transparent after:opacity-100 after:brightness-100 after:transition-all'>
                  {/* <div className="inset-0 m-0 size-full overflow-hidden rounded-full border-[10px] border-[var(--gray6)] blur-sm" /> */}
                  <img
                    src={TinyFan}
                    alt={''}
                    className='absolute inset-0 m-auto origin-center animate-spinSlow2x overflow-hidden rounded-full object-cover object-center opacity-[0.015] brightness-0 contrast-0'
                  />
                </div>
              </div>
              <div className='relative inset-0 m-auto flex size-full flex-col place-content-center place-items-center content-center items-center justify-center'>
                <img
                  src='https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/762dfb06-a622-4959-94cb-4357413be570.avif'
                  className='absolute left-0 z-[-1] -translate-x-1/2  scale-y-[-0.7] animate-pulse select-none opacity-50'
                  alt='Chip glow'
                />
                <img
                  src='https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/762dfb06-a622-4959-94cb-4357413be570.avif'
                  className='absolute right-0 z-[-1]  translate-x-1/2 -scale-x-100 scale-y-[-0.7] animate-pulse select-none opacity-50'
                  alt='Chip glow'
                />
                <ConnectionBoard className='absolute z-[11] m-auto size-[43.25rem] translate-y-[10.5rem] fill-[var(--grayA2)] stroke-none opacity-100 mix-blend-screen' />
                <ConnectionBoard className='z-[1] m-auto size-[43.25rem] translate-y-[10.5rem] fill-background stroke-[var(--grayA6)] opacity-100 mix-blend-color-dodge' />
              </div>
            </div>
          </div>
        </div>
        <div className='relative z-[19] ml-0 mt-auto flex w-full flex-col items-center justify-start gap-8 overflow-visible pb-12 md:pb-20 lg:pb-28'>
          {/* <h6 className="mx-auto text-balance bg-gradient-to-br from-[var(--grayA10)] to-[var(--grayA12)] bg-clip-text px-3 pb-2 text-6xl font-semibold leading-[80%] tracking-tighter text-transparent xl:text-3xl xl:leading-[90%]">Its quite simple</h6> */}
          {/* <h6 className='relative  mx-auto -translate-y-16 bg-gradient-to-br from-[var(--grayA4)] to-[var(--grayA9)] bg-clip-text text-left font-mono text-xs font-semibold uppercase tracking-[0.2rem] text-transparent'>
              Built on top of bad ass technology
            </h6> */}
          <LogoCloud>
            <CloudLogo>
              <Supabase className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
            </CloudLogo>
            <CloudLogo>
              <Astro className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
            </CloudLogo>
            <CloudLogo>
              <Directus className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
            </CloudLogo>
            <CloudLogo>
              <Storybook className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
            </CloudLogo>
            <CloudLogo>
              <ReactLogo className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
            </CloudLogo>
            <CloudLogo>
              <Docker className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
            </CloudLogo>
          </LogoCloud>
        </div>
      </div>

      <div className='relative bottom-0 top-auto z-[1] mb-0 mt-auto flex w-full max-w-full flex-row items-start justify-start gap-8 lg:justify-center'>
        <div className='flex h-full flex-col items-start justify-start gap-12'>
          <h6 className='relative mr-auto max-w-[75dvw] text-balance bg-gradient-to-br from-[var(--grayA10)] to-[var(--grayA12)] bg-clip-text text-left font-mono text-xs font-semibold uppercase tracking-widest text-transparent lg:mx-auto'>
            The driving force above all other intentions and purpose is
            simple...
          </h6>
          <h3 className='text-balance bg-gradient-to-br from-[var(--gray11)] to-[var(--gray12)] bg-clip-text pb-2 pr-3 text-6xl font-semibold leading-[80%] tracking-tighter text-transparent md:text-8xl md:leading-[75%] lg:mx-auto'>
            Get hired.
          </h3>
          <h6 className='mr-auto text-balance bg-gradient-to-br from-[var(--grayA6)] to-[var(--grayA4)] bg-clip-text pb-2 pr-3 text-4xl font-semibold leading-[80%] tracking-tighter text-transparent md:text-5xl md:leading-[90%]'>
            I{`'`}m in search of my next challenge.
          </h6>
        </div>
      </div>
      <HeroBackground className='hero-mask pointer-events-none absolute inset-x-auto bottom-auto z-[-1] m-auto size-full min-w-[1920px] select-none overflow-hidden object-cover object-center' />

      {/* <GlowOrb className="absolute z-0 translate-x-20 -translate-y-16 size-full blur-2xl" /> */}
      {/* <CircuitThree className="absolute inset-auto z-0 hidden w-full min-h-screen mb-auto pointer-events-none select-none min-w-screen size-full md:block" /> */}
      <Stars className='pointer-events-none absolute inset-x-auto bottom-auto top-0 z-20 mx-0 mb-auto mt-0 select-none opacity-10' />
      <GreenGlow className='pointer-events-none absolute inset-x-0 bottom-auto top-0 z-[-1] mx-0 mb-auto mt-0 translate-y-0 select-none' />
      <TopGlow className='pointer-events-none absolute inset-x-auto top-0 z-0 mx-0 mt-0 min-w-full select-none opacity-100 mix-blend-hard-light blur' />
      <GiantOrb className='pointer-events-none absolute inset-auto z-[-1] mx-0 w-full min-w-[150dvw] translate-y-40 select-none sm:w-full sm:translate-y-24 md:translate-y-40 lg:translate-y-1/4 xl:translate-y-1/3' />
    </section>
  )
})

AboutProdkt.displayName = 'AboutProdkt'

export { AboutProdkt }
