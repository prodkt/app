/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */

import React from 'react'

import { Check, Minus, Plus } from 'lucide-react'

import Portrait from '@prodkt/assets/bryan-funk/bryan-funk-portrait-xl.avif'

import Directus from '@/brands/technologies/directus'
import Docker from '@/brands/technologies/docker'
import AstroLogomark from '@/brands/technologies/logomark_astro'
import BunLogomark from '@/brands/technologies/logomark_bun'
import ReactLogomark from '@/brands/technologies/logomark_react'
import StorybookLogomark from '@/brands/technologies/logomark_storybook'
import SupabaseLogomark from '@/brands/technologies/logomark_supabase'
import TurborepoLogomark from '@/brands/technologies/logomark_turborepo'
import VercelLogomark from '@/brands/technologies/logomark_vercel'
import StorybookLogo from '@/brands/technologies/storybook'

import { CircuitThree, CircuitTwo, GlowOrb } from '../assets'
import { ChartBar } from './chart-bar'
import { CodeblockGraphic, CodeblockStyles } from './code-block'
import DataCube from './data-cube'
import { GithubCat } from './github'
import { PieChartBlue, PieChartGreen, PieChartRed } from './pie-charts'
import PowerLines from './power-lines'
import Signature from './signature'

/**
 *
 */
export default function IndexSectionFeatures2() {
  return (
    <React.Fragment>
      <section className='overflow-hidden'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-4xl pb-16 pt-4 md:pt-8 lg:pb-24 lg:pt-16'>
            <div className='-m-3 flex flex-wrap'>
              <div className='w-full p-3 md:w-1/2'>
                <div className='bg-radial-gradient from-gray-4 to-gray-4 relative flex h-auto flex-col items-stretch gap-4 overflow-hidden border border-[var(--grayA3)] p-10 ring ring-inset ring-[var(--grayA2)]'>
                  <CodeblockGraphic className='absolute z-0 -translate-x-1/2 scale-75' />
                  <CodeblockStyles className='absolute z-0 translate-x-3/4 scale-125' />
                  <div className='z-[1] flex h-full grow flex-wrap items-stretch justify-stretch'>
                    <div className='z-[1] size-full'>
                      {/* START FEATURE GRAPHIC 1 */}
                      <div className=' inset-0 my-0 size-full flex-col place-content-start place-items-start content-start items-stretch justify-start '>
                        {/* START TOP ROW */}
                        <div className=' flex size-full flex-col place-content-stretch place-items-stretch content-stretch items-stretch justify-stretch overflow-hidden rounded-t-2xl border border-dashed border-[var(--gray8)] border-b-[var(--gray8)] bg-gradient-to-b from-[var(--ghost-aa9)] to-[var(--ghost-a2)] backdrop-blur-sm dark:to-[var(--ghost-aa1)]'>
                          {/* START TOP ROW - ROW 1 */}
                          <div className='absolute mx-0 mb-auto flex h-auto w-full flex-row items-center justify-between'>
                            <div className='flex w-1/2 flex-row items-center justify-start'>
                              {/* START MENUBOX */}
                              <div className='flex size-12 flex-col items-center justify-center gap-0 space-y-[-24px] px-2 py-1'>
                                <Minus className='h-auto w-8 stroke-1' />
                                <Minus className='h-auto w-8 stroke-1' />
                              </div>
                              {/* END MENUBOX */}
                            </div>
                            <div className='flex w-1/2 flex-row items-center justify-end pr-2'>
                              {/* START AVATARBOX */}
                              <div className='from-gray-1 via-grayA-1 to-grayA-4 flex size-8 flex-col items-center justify-center gap-0 rounded-lg bg-gradient-to-tr shadow-[inset_0px_-2px_6px_var(--gray3)] ring ring-inset ring-[var(--grayA3)]' />

                              {/* START AVATARBOX */}
                            </div>
                          </div>
                          {/* END TOP ROW - ROW 1 */}
                          {/* START TOP ROW - ROW 2 */}
                          <div className='inset-0 m-0 flex size-full min-h-12 min-h-80 flex-row items-center justify-center self-stretch '>
                            <ChartBar />
                          </div>
                          {/* END TOP ROW - ROW 2 */}
                        </div>
                        {/* START PX ROW */}
                        <div className='mt-auto h-0 max-h-0 w-full overflow-visible bg-gradient-to-b from-[var(--ghost-aa6)] to-[var(--ghost-aa1)] backdrop-blur-sm'>
                          <div className=' absolute left-[calc(75%-2rem)] z-[1] size-16 -translate-y-1/2 border border-dashed border-[var(--gray8)] bg-[var(--grayA3)] p-1 backdrop-blur '>
                            <div className='z-[1] flex size-full items-center justify-center border-[var(--gray8)] bg-[var(--grayA2)] text-[var(--gray12)]'>
                              <p>
                                <Plus className='z-[3]' />
                                <Plus className='absolute inset-0 m-auto blur' />
                              </p>
                            </div>
                            <div className='absolute -left-1 -top-1 size-2 border border-[var(--gray8)]' />
                            <div className='absolute -bottom-1 -left-1 size-2 border border-[var(--gray8)]' />
                            <div className='absolute -right-1 -top-1 size-2 border border-[var(--gray8)]' />
                            <div className='absolute -bottom-1 -right-1 size-2 border border-[var(--gray8)]' />
                          </div>
                        </div>
                        <div className=' gradientMask-to-t absolute right-[calc(25%+1.2rem)] top-0 z-0 h-full min-h-full w-0 max-w-0 self-stretch border border-dashed border-[var(--gray8)]' />
                        {/* START BOTTOM ROW */}
                        <div className='mt-auto flex h-auto w-full flex-col items-start justify-center gap-4 rounded-b-2xl border border-t-0 border-[var(--gray8)] bg-gradient-to-b from-[var(--ghost-aa7)] to-[var(--ghost-aa5)] px-8 pb-8 pt-20'>
                          <p className='text-xs'>Unique Components</p>
                          <div className='flex flex-row items-center justify-start gap-2'>
                            <PieChartGreen className='rotate-180' />
                            <PieChartRed />
                            <PieChartBlue className='rotate-45' />
                          </div>
                        </div>
                      </div>
                      {/* END FEATURE GRAPHIC 1 */}
                    </div>
                  </div>
                  <div className='bottom-0 top-auto z-[1] mb-0 mt-auto flex size-auto flex-col gap-4 p-2'>
                    <h3 className='bg-radial-gradient from-gray-12 to-gray-6 bg-clip-text pb-1 text-4xl font-semibold tracking-tight text-transparent'>
                      Open-source Components
                    </h3>
                    <p className='text-gray-9 text-sm'>
                      Built in isolation with Storybook
                    </p>
                  </div>
                  <div className='bottom-0 top-auto z-[1] mb-0 mt-auto flex size-auto w-full flex-row gap-4 p-2'>
                    <a
                      href='/codeblocks'
                      className='bg-radial-gradient from-gray-12 to-gray-6 hover:to-gray-9 text-nowrap bg-clip-text pb-1 text-xs font-semibold tracking-tight text-transparent underline decoration-[var(--grayA6)] underline-offset-4 transition-colors duration-500 ease-in'
                    >
                      View Codeblocks
                    </a>
                    <p className='aspect-1 bg-radial-gradient m-0 flex size-8 w-fit -translate-y-2 items-center justify-center text-nowrap rounded-full from-[var(--ghost-aa1)] to-[var(--grayA3)]  p-1 text-xs font-semibold leading-none tracking-tight text-[var(--grayA7)]'>
                      or
                    </p>
                    <a
                      href='https://ui.prodkt.cloud'
                      className='text-gray-9 text-nowrap text-xs'
                    >
                      <StorybookLogo className='h-4 w-auto max-w-28 transition-colors duration-500 ease-in hover:brightness-150 hover:contrast-150' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full p-3 md:w-1/2'>
                <div className='to-grayA-1 h-full overflow-hidden border border-[var(--grayA4)] bg-gradient-to-b from-[var(--grayA2)] p-8 ring ring-inset ring-[var(--grayA3)]'>
                  <div className='bottom-0 top-auto z-[1] mb-10 mt-auto flex size-auto flex-col gap-0 p-2'>
                    <h3 className='gradientMask-to-t-10 from-gray-12 via-gray-11 to-gray-1 max-w-xs text-balance bg-gradient-to-t bg-clip-text pb-2 text-3xl font-semibold leading-10 tracking-tighter text-transparent'>
                      Astro SSR Turborepo
                    </h3>
                    <p className='text-shadow-[0_0_20px_var(--grayA9)] bg-gradient-to-b from-[var(--grayA4)] to-[var(--grayA11)] bg-clip-text pl-1 font-mono text-xs uppercase tracking-[0.275rem] text-transparent'>
                      Powered by Supabase
                    </p>
                  </div>
                  <div className='relative'>
                    <GithubCat className='pointer-events-none absolute inset-0 m-0 select-none mix-blend-hard-light blur' />
                    <GithubCat className='pointer-events-none select-none mix-blend-hard-light' />
                    <GithubCat className='gradientMask-to-t pointer-events-none absolute bottom-0 top-auto m-0 translate-y-16 scale-x-150 scale-y-50  select-none blur-lg' />
                    <GlowOrb className='gradientMask-to-t pointer-events-none absolute -left-1/4 -top-1/4 z-0 m-auto scale-[2] select-none opacity-25 mix-blend-hard-light brightness-100 contrast-50 dark:opacity-100 dark:brightness-100' />
                    <TurborepoLogomark className='pointer-events-none absolute right-0 top-1/3 my-auto h-12 w-auto select-none blur-sm' />
                    <SupabaseLogomark className='pointer-events-none absolute left-6 top-1/3 z-[1] my-auto h-20  w-auto -rotate-12 select-none' />
                    <VercelLogomark className='pointer-events-none absolute bottom-12 left-8 m-0 h-8 w-auto scale-x-150 scale-y-50 select-none blur-[2px]' />
                    <StorybookLogomark className='pointer-events-none absolute right-[calc(50%-10%)] top-4 m-0 h-4 w-auto rotate-6 scale-x-125 scale-y-75 select-none blur-[1px]' />
                    <BunLogomark className='pointer-events-none absolute bottom-20 right-12 mx-auto h-8 w-auto scale-y-50 select-none blur-[2px]' />
                    <AstroLogomark className='pointer-events-none absolute left-3/4 top-0 mx-auto h-20 w-auto rotate-12 select-none' />
                    <AstroLogomark className='pointer-events-none absolute right-28 top-[65%] mx-auto h-20 w-auto rotate-45 -skew-x-12 -skew-y-[45deg] scale-y-50 select-none opacity-50 blur-md' />
                    <ReactLogomark className='pointer-events-none absolute left-0 top-0 m-0 h-12 w-auto select-none blur-sm' />
                  </div>
                  <div className='z-[1] mb-0 mt-24 flex grow flex-col items-stretch justify-stretch gap-4 p-2'>
                    <h3 className='bg-radial-gradient from-gray-12 to-gray-9 h-full max-w-[75%] text-balance bg-clip-text pb-1 text-xl font-semibold leading-6 tracking-tighter text-transparent'>
                      Low barrier, high tech stack great for new and experienced
                      developers.
                    </h3>
                  </div>
                  <div className='bottom-0 top-auto z-[3] mb-0 mt-auto flex size-auto w-full flex-row gap-4 self-stretch p-2'>
                    <a
                      href='https://github.com/prodkt/app'
                      target='_blank'
                      className='bg-radial-gradient from-gray-12 to-gray-6 hover:to-gray-9 text-nowrap bg-clip-text pb-1 text-xs font-semibold tracking-tight text-transparent underline decoration-[var(--grayA6)] underline-offset-4 transition-colors duration-500 ease-in'
                      rel='noreferrer'
                    >
                      View Project on GitHub
                    </a>
                    <p className='aspect-1 bg-radial-gradient m-0 flex size-8 w-fit -translate-y-2 items-center justify-center text-nowrap rounded-full from-[var(--ghost-aa1)] to-[var(--grayA3)]  p-1 text-xs font-semibold leading-none tracking-tight text-[var(--grayA7)]'>
                      or
                    </p>
                    <a
                      href='https://ui.prodkt.cloud'
                      className='text-gray-9 text-nowrap text-xs'
                    >
                      Continue exploring the site
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full p-3 md:w-1/2'>
                <div className='bg-conic-gradient relative h-full overflow-hidden border border-[var(--greenA3)]  from-[var(--oliveA7)] to-[var(--olive7)] p-16 ring ring-inset ring-[var(--grayA3)] dark:from-[var(--olive1)]'>
                  <PowerLines className='absolute inset-0 m-auto blur-xl' />

                  <div className='bottom-0 top-auto z-[1] mb-10 mt-auto flex size-auto flex-col gap-12 p-2'>
                    <div className='bottom-0 top-auto z-[1] mb-0 mt-auto flex size-auto w-full flex-row items-center justify-center gap-4 p-2'>
                      <Docker />

                      <p className='aspect-1 bg-radial-gradient m-0 flex size-8 w-fit items-center justify-center text-nowrap rounded-full from-[var(--ghost-aa1)] to-[var(--grayA3)]  p-1 text-xs font-semibold leading-none tracking-tight text-[var(--grassA9)]'>
                        <Plus size={16} />
                      </p>

                      <Directus />
                    </div>
                    <p className='text-md text-shadow-[0_0_20px_var(--grayA9)] mx-auto bg-gradient-to-b from-[var(--grayA4)] to-[var(--grayA11)] bg-clip-text pl-1 font-mono uppercase tracking-[0.36rem] text-transparent'>
                      DB + CMS + Docker
                    </p>
                  </div>
                  <div className='relative inset-0 mx-auto -mb-24 -ml-11 mt-24 h-auto w-full'>
                    <PowerLines className='gradientMask-to-t absolute bottom-0 m-auto ml-10 -translate-y-1/4 -rotate-6 mix-blend-overlay' />
                    <PowerLines className='gradientMask-to-t absolute bottom-0 m-auto ml-10 -translate-y-1/4 -rotate-6 blur-md' />

                    <SupabaseLogomark className='absolute inset-0 z-[1] mx-auto size-24 translate-x-10 brightness-75 contrast-100' />
                    <SupabaseLogomark className='absolute inset-0 z-[1] mx-auto size-40 translate-x-10 mix-blend-color-burn blur-2xl brightness-75 contrast-150' />
                    <SupabaseLogomark className='absolute inset-0 z-[1] mx-auto size-40 translate-x-10 translate-y-12 scale-y-150 mix-blend-color-burn gradientMask-to-b blur-2xl brightness-50 contrast-10' />
                    <DataCube className=' gradientMask-to-t-50 inset-0 mx-auto origin-center mix-blend-color-dodge' />
                  </div>
                  <div className='z-10 flex flex-wrap items-center justify-center'>
                    <div className='h-auto w-full'>
                      <div className='z-[1] mb-0 mt-auto flex grow flex-col items-stretch justify-stretch gap-4 p-2'>
                        <ul className='flex flex-col items-start justify-center gap-8 text-balance p-0 text-sm tracking-normal text-[var(--gray11)]'>
                          <li className='relative flex h-full flex-row items-center justify-start gap-2'>
                            <Check className='size-4 rounded bg-[var(--grassA9)] p-0.5 text-[var(--grass1)] shadow-2xl shadow-[var(--grassA9)]' />{' '}
                            <p className='ml-0 mr-auto w-full grow basis-3/4'>
                              Model your data visually.
                            </p>
                          </li>
                          <li className='relative flex h-full flex-row items-center justify-start gap-2'>
                            <Check className='size-4 rounded bg-[var(--grassA9)] p-0.5 text-[var(--grass1)] shadow-2xl shadow-[var(--grassA9)]' />{' '}
                            <p className='ml-0 mr-auto w-full grow basis-3/4'>
                              All Server. SSR + Astro + Vercel = ❤️
                            </p>
                          </li>
                          <li className='relative flex h-full flex-row items-start justify-start gap-2'>
                            <Check className='size-4 rounded bg-[var(--grassA9)] p-0.5 text-[var(--grass1)] shadow-2xl shadow-[var(--grassA9)]' />{' '}
                            <p className='ml-0 mr-auto w-full grow basis-3/4'>
                              Preconfigured CMS accessible from any computer in
                              your home or shared network.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full p-3 md:w-1/2'>
                <div className='relative h-full overflow-hidden border border-[var(--grayA4)]  bg-gradient-to-b from-[var(--gray4)] ring ring-inset ring-[var(--grayA3)] dark:from-[var(--ghost-aa8)]'>
                  <div className='0 bottom-0 top-auto z-[1] m-0 flex size-auto h-full flex-col gap-8 p-10'>
                    <p className='text-shadow-[0_0_20px_var(--grayA9)] bg-gradient-to-b from-[var(--grayA9)] to-[var(--grayA11)] bg-clip-text pl-1 font-mono text-xs uppercase tracking-[0.175rem] text-transparent'>
                      <em className='not-italic text-[var(--amber9)]'>
                        Hiring
                      </em>{' '}
                      or know someone that is?
                    </p>
                    <h3 className='from-gray-12 to-gray-10 max-w-xs text-balance bg-gradient-to-b bg-clip-text pb-2 text-4xl font-semibold leading-8 tracking-tighter text-transparent'>
                      {`I'm`} on the search for my next challenge.
                    </h3>
                    <h3 className='text-md from-gray-10 to-gray-8 h-full max-w-[75%] text-balance bg-gradient-to-br bg-clip-text pb-1 font-semibold leading-6 tracking-tight  text-transparent'>
                      Leave the company name in the chat below and I'll take it
                      from there. Though feel free to share any contact you
                      think would be a ideal to make connection with.
                    </h3>
                    <div className='hidden md:block bottom-0 mb-0 h-fit max-h-fit w-full'>
                      <Signature className='contrast-00 absolute inset-x-0 z-0 mx-auto mt-auto h-auto max-w-56 -translate-x-16 translate-y-4 rotate-6 -skew-y-12 skew-x-12 scale-x-105 fill-transparent  stroke-[var(--grayA5)]  stroke-1 text-[var(--grayA3)] brightness-100' />
                      <Signature className='absolute inset-x-0 z-0 mx-auto mt-auto h-auto max-w-56 -translate-x-16 translate-y-4 rotate-6 -skew-y-12 skew-x-12 scale-x-105 animate-pulse fill-transparent stroke-[var(--ghost-a12)]  stroke-[4px] text-[var(--grayA9)] mix-blend-difference blur-lg brightness-0 contrast-200' />
                      <Signature className='absolute inset-x-0 z-0 mx-auto mt-auto h-auto max-w-56 -translate-x-16 translate-y-4 rotate-6 -skew-y-12 skew-x-12 scale-x-105 fill-transparent stroke-[var(--grayA10)] stroke-1  text-[var(--grayA9)] mix-blend-difference blur brightness-100 contrast-150' />
                      <Signature className='inset-x-0 z-0 mx-auto mt-auto h-auto max-w-56 -translate-x-16 translate-y-4 rotate-6 -skew-y-12 skew-x-12 scale-x-105 fill-transparent stroke-[var(--gray12)] stroke-0 text-[var(--grayA3)]  brightness-0  contrast-50 dark:stroke-1' />
                    </div>
                  </div>
                  <CircuitThree className='absolute inset-y-0 m-0 h-full' />
                  <CircuitTwo className='absolute inset-y-0 m-0 h-full' />
                  <img
                    src={Portrait}
                    alt=''
                    className='select-none pointer-events-none gradientMask-to-t-50 absolute inset-y-0 my-auto translate-y-1/4 opacity-25 md:opacity-50 mix-blend-difference contrast-125 invert dark:brightness-50 dark:contrast-[0.81] dark:invert-0'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
