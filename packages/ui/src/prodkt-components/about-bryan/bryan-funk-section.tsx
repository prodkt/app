/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */

import { Aperture, Scroll, ShipWheel } from 'lucide-react'

import BryanPhoto from '@prodkt/assets/avatars/bryan-funk-portrait-xl.avif'

import { SkillMarquee } from './skill-marquee'

/**
 *
 */
export function BryanFunkSection() {
  return (
    <div className='relative flex items-center justify-center xl:pt-12'>
      <div className='relative flex size-full flex-col items-center justify-center px-2 md:px-4 lg:px-12 xl:px-20'>
        <div className='flex w-full flex-col items-start justify-center gap-4 lg:gap-8 xl:max-w-[65dvw]'>
          <div className='flex w-full items-start justify-start px-4 pt-10 text-left text-2xl leading-none tracking-tight md:text-3xl lg:text-nowrap lg:text-5xl' />
          <div className='z-[1] flex w-full flex-row flex-wrap justify-center gap-2 md:gap-4 lg:h-full xl:flex-nowrap'>
            <div className='relative flex w-1/2 grow flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-[var(--grayA4)] bg-gradient-to-br from-[var(--gray1)] to-[var(--grayA1)] p-4 backdrop-blur sm:basis-1/4 sm:p-6 xl:p-10'>
              <div className='prodkt-card-avatar relative z-[1] flex size-16 items-end justify-center'>
                <img
                  src={BryanPhoto}
                  alt=''
                  className=' z-[1] h-auto w-full select-none rounded-xl border border-[var(--grayA2)] bg-[var(--gray2)] pt-2'
                />
              </div>
              <h2 className='z-[1] text-2xl font-normal tracking-tighter text-[var(--gray9)] antialiased'>
                Bryan Funk
              </h2>
              <h4 className=' text-xs text-[var(--grayA11)]'>
                Former Director of Design at Tovuti LMS
              </h4>

              <div className='gradientMask-4 absolute -mt-12 flex w-full flex-row items-center justify-center gap-4'>
                <SkillMarquee />
              </div>
            </div>
            <a
              href='#work'
              className='xs:basis-1/4 relative flex grow flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-[var(--grayA4)] bg-gradient-to-br from-[var(--gray1)] to-[var(--grayA1)] p-4 shadow-inner backdrop-blur sm:p-6 xl:p-10'
            >
              <div className='prodkt-card-avatar relative z-[1] flex size-16 items-center justify-center rounded-full'>
                <ShipWheel
                  size={40}
                  strokeWidth={1}
                  className='animate-waving-hand text-[var(--amber2)] mix-blend-overlay dark:text-[var(--amberA9)]'
                />
                <div className='absolute size-8 bg-[var(--amberA8)] blur-lg' />
              </div>
              <h2 className='z-[1] text-2xl font-normal tracking-tighter text-[var(--gray9)] antialiased'>
                Work History
              </h2>
              {/* <WorkHistoryIcon className="absolute left-auto right-auto h-auto m-auto scale-150 translate-x-20 translate-y-20 stroke-0 mix-blend-hard-light fill-none blur-[2px] w-450px" /> */}
            </a>
            <div className='xs:basis-1/4 relative flex grow flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-[var(--grayA4)] bg-gradient-to-br from-[var(--gray1)] to-[var(--grayA1)] p-4 shadow-inner backdrop-blur sm:p-6 xl:p-10'>
              <div className='prodkt-card-avatar relative z-[1] flex size-16 items-center justify-center rounded-full'>
                <Aperture
                  size={40}
                  strokeWidth={1}
                  className='text-[var(--mint2)] mix-blend-overlay dark:text-[var(--mint-a9)]'
                />
                <div className='absolute size-8 bg-[var(--mintA8)] blur-lg'></div>
              </div>
              <h2 className='z-[1] text-2xl font-normal tracking-tighter text-[var(--gray9)] antialiased'>
                Visuals
              </h2>
              {/* <VisualTwo className="absolute left-auto right-auto h-auto m-auto scale-150 translate-x-20 translate-y-20 stroke-0 mix-blend-hard-light fill-none blur-[2px] w-450px" /> */}
            </div>
            <div className='xs:basis-1/4 relative flex grow flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-[var(--grayA4)] bg-gradient-to-br from-[var(--gray1)] to-[var(--grayA1)] p-4 shadow-inner backdrop-blur sm:p-6 xl:p-10'>
              <div className='prodkt-card-avatar relative z-[1] flex size-16 items-center justify-center rounded-full'>
                <Scroll
                  size={40}
                  strokeWidth={1}
                  className='text-[var(--violet2)] mix-blend-overlay dark:text-[var(--violetA9)]'
                />
                <div className='absolute size-8 bg-[var(--violetA5)] blur-lg'></div>
              </div>
              <h2 className='z-[1] text-2xl font-normal tracking-tighter text-[var(--gray9)] antialiased'>
                Resume
              </h2>
              {/* <VisualTwo className="absolute left-auto right-auto h-auto m-auto scale-150 translate-x-20 translate-y-20 stroke-0 mix-blend-hard-light fill-none blur-[2px] w-450px" /> */}
            </div>
          </div>
          <div className='relative flex size-full flex-col items-start justify-center gap-2 overflow-hidden'>
            <div className='items-between flex w-full flex-col justify-start'>
              <div className='relative flex w-full flex-row items-start justify-start gap-2 px-4'>
                <h6 className=' prodkt-h1-correction bottom-1 z-[1] flex w-auto bg-gradient-to-r from-[var(--grayA9)] via-[var(--grayA6)] to-[var(--grayA5)] bg-clip-text pb-4 pr-2 text-xs font-bold uppercase tracking-[0.325rem] text-transparent bg-blend-difference'>
                  Frontend.
                </h6>
                <h6 className=' prodkt-h1-correction bottom-1 z-[1] flex w-auto bg-gradient-to-r from-[var(--grayA9)] via-[var(--grayA6)] to-[var(--grayA5)] bg-clip-text pb-4 pr-2 text-xs font-bold uppercase tracking-[0.325rem] text-transparent bg-blend-difference'>
                  Design.
                </h6>
                <h6 className=' prodkt-h1-correction bottom-1 z-[1] flex w-auto bg-gradient-to-r from-[var(--grayA9)] via-[var(--grayA6)] to-[var(--grayA5)] bg-clip-text pb-4 pr-2 text-xs font-bold uppercase tracking-[0.325rem] text-transparent bg-blend-difference'>
                  Development.
                </h6>
                <h6 className=' prodkt-h1-correction bottom-1 z-[1] flex w-auto bg-gradient-to-r from-[var(--grayA9)] via-[var(--grayA6)] to-[var(--grayA5)] bg-clip-text pb-4 pr-2 text-xs font-bold uppercase tracking-[0.325rem] text-transparent bg-blend-difference'>
                  Culture.
                </h6>
                <h6 className=' prodkt-h1-correction bottom-1 z-[1] flex w-auto bg-gradient-to-r from-[var(--grayA9)] via-[var(--grayA6)] to-[var(--grayA5)] bg-clip-text pb-4 pr-2 text-xs font-bold uppercase tracking-[0.325rem] text-transparent bg-blend-difference'>
                  People.
                </h6>
                <h6 className=' prodkt-h1-correction bottom-1 z-[1] flex w-auto bg-gradient-to-r from-[var(--grayA9)] via-[var(--grayA6)] to-[var(--grayA5)] bg-clip-text pb-4 pr-2 text-xs font-bold uppercase tracking-[0.325rem] text-transparent bg-blend-difference'>
                  Experience.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
