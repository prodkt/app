/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable security/detect-object-injection */
/* eslint-disable tailwindcss/no-custom-classname */

import React from 'react'

import { Badge } from '@/primitives/badge'

import AdobeIllustratorLogo from './adobe-illustrator'
import AnimatedComponentWrapper from './AnimatedComponentWrapper'
import ColorCard from './color-card'
import BackgroundPattern from './diagPattern'
import PresstekLogo from './PresstekLogo'
import RegistrationMark from './registrationMark'
import RegistrationImage from './registrationMarks-1.avif'
import SplineLogo from './spline_100w.png'

export interface Token {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  palettes: Record<string, Record<string, any>>
}

// const transformPaletteName = (name: Json) => {
//   // @ts-ignore
//   const parts = name?.split('_')
//   const lastPart = parts.pop()
//   const mainPart = parts
//     // @ts-ignore
//     .map((part: Json) => part?.replace(/([a-z])([A-Z])/g, '$1 $2'))
//     .join(' - ')
//   return `${mainPart} (${lastPart})`
// }

interface Showcase {
  ProjectDesignTokens?: Token[]
  ProjectCodeType?: string
  ProjectCodeTypeSample?: string
  ProjectLogo?: string
  WorkProject?: string
  ProjectLogo3d?: string
  ProjectExpressiveType?: string
  ProjectExpressiveTypeSample?: string
  ProjectLogoType?: string
  ProjectLogoTypeSample?: string
  ProjectLogoCreative?: string
  ProjectLogoWireframe?: string
  ProjectAnimatedLogo?: string
  ProjectBaseType?: string
  ProjectBaseTypeSample?: string
}

const BrandingShowcase = React.forwardRef<HTMLDivElement, Showcase>(
  (
    {
      ProjectExpressiveType,
      ProjectLogoType,
      ProjectLogoWireframe,
      ProjectAnimatedLogo,
      ProjectLogoTypeSample,
      ProjectBaseType,
      ProjectBaseTypeSample,
      ProjectExpressiveTypeSample,
      ProjectLogoCreative,
      ProjectLogo3d,
      ProjectLogo,
      WorkProject,
      ProjectDesignTokens,
      ProjectCodeType,
      ProjectCodeTypeSample,
      ...props
    },
    ref,
  ) => {
    return (
      <div className='flex flex-col w-full' ref={ref} {...props}>
        <div className='relative flex flex-col flex-wrap w-full gap-6 px-6 py-10 xl:grid xl:grid-cols-2 xl:flex-nowrap'>
          <div className='relative flex h-auto max-w-full basis-1/2 flex-col items-center justify-between overflow-hidden bg-[var(--grayA1)] p-0'>
            <div className='absolute inset-0 m-0 size-full'>
              <div className='absolute inset-y-0 left-0 right-auto flex flex-col h-full my-0 ml-0 mr-auto'>
                <BackgroundPattern className='gradientMask-workShowcase absolute inset-0 z-0 m-0 min-h-full min-w-full text-[var(--redA2)]' />
                <div className='p-0' />
                <div className='border-var(--ghost-aa1) flex h-full min-h-8 min-w-8 flex-row items-center justify-center border bg-[var(--ghost-aa1)] p-0'>
                  <RegistrationMark className='opacity-50 mix-blend-luminosity brightness-50 contrast-50' />
                </div>
                <div className='p-0' />
              </div>
              <div className='absolute inset-y-0 right-0 left-auto flex flex-col h-full my-0 ml-auto mr-0'>
                <BackgroundPattern className='gradientMask-workShowcase absolute inset-0 z-0 m-0 min-h-full min-w-full text-[var(--redA2)]' />
                <div className='p-0' />
                <div className='border-var(--ghost-aa1) relative flex h-full min-h-8 min-w-8 flex-row items-center justify-center border bg-[var(--ghost-aa1)] p-0'>
                  <RegistrationMark className='opacity-50 mix-blend-luminosity brightness-50 contrast-50' />
                </div>
                <div className='bg-[var(--ghost-aa1)] p-0' />
              </div>
            </div>
            <div className='relative max-w-full p-8 size-full'>
              <div className='absolute inset-x-0 top-0 bottom-auto flex flex-row w-full max-w-full mx-auto mt-0 mb-auto'>
                <BackgroundPattern className='gradientMask-workShowcase absolute inset-0 z-0 m-0 min-h-full min-w-full text-[var(--redA2)]' />

                <div className='p-0' />
                <div className='border-var(--ghost-aa1) flex min-h-8 w-full min-w-8 flex-row items-center justify-center border bg-[var(--ghost-aa1)] p-0'>
                  <RegistrationMark className='opacity-50 mix-blend-luminosity brightness-50 contrast-50' />
                </div>
                <div className='p-0' />
              </div>
              <div className='relative flex size-full max-w-full items-center justify-center bg-[var(--ghost-aa1)] p-12'>
                <img
                  src={RegistrationImage}
                  alt=''
                  className='absolute z-0 mx-auto mb-0 ml-0 duration-1000 pointer-events-none select-none -bottom-7 -left-7 w-14 mix-blend-hard-light'
                />
                <img
                  src={RegistrationImage}
                  alt=''
                  className='absolute z-0 mx-auto mt-0 mr-0 duration-1000 rotate-180 pointer-events-none select-none -right-7 -top-7 w-14 mix-blend-hard-light'
                />
                <div className='absolute flex flex-row items-center justify-start w-auto gap-2 left-3 top-3 flex-nowrap'>
                  <PresstekLogo className='h-2 max-h-2 w-auto text-[var(--ghost-a4)]' />
                  <Badge className='text-[0.5rem]'>ProFire Digital Media</Badge>
                  <p className='text-[0.5rem] text-[var(--indigoA6)]'>
                    2540 dots/inch (100 dots/mm)
                  </p>
                </div>
                {ProjectAnimatedLogo ? (
                  <AnimatedComponentWrapper
                    componentName={ProjectAnimatedLogo}
                    className='z-[1] max-w-full overflow-visible'
                  />
                ) : null}
                <div className='absolute z-0 max-w-full bg-transparent gradientMask-11 size-full' />
              </div>
              <div className='absolute inset-x-0 bottom-0 top-auto flex flex-row w-full max-w-full mx-auto mt-auto mb-0'>
                <BackgroundPattern className='gradientMask-workShowcase absolute inset-0 z-0 m-0 min-h-full min-w-full text-[var(--redA2)]' />

                <div className='p-0' />
                <div className='border-var(--ghost-aa1) flex min-h-8 w-full min-w-8 flex-row items-center justify-center border bg-[var(--ghost-aa1)] p-0'>
                  <RegistrationMark className='opacity-50 mix-blend-luminosity brightness-50 contrast-50' />
                </div>
                <div className='p-0' />
              </div>
            </div>
          </div>
          <div className='relative flex flex-col items-center justify-between h-auto max-w-full p-0 overflow-hidden bg-transparent basis-1/2'>
            <div className='absolute inset-0 m-0 size-full'>
              <div className='absolute inset-y-0 left-0 right-auto flex flex-col h-full my-0 ml-0 mr-auto'>
                <div className='bg-[var(--ghost-aa1)] p-0' />
                <div className='border-var(--ghost-aa1) flex h-full min-h-8 min-w-8 flex-row items-center justify-center border bg-[var(--ghost-aa1)] p-0'>
                  <RegistrationMark className='opacity-50 mix-blend-luminosity brightness-50 contrast-50' />
                </div>
                <div className='bg-[var(--accent1)] p-0' />
              </div>
              <div className='absolute inset-y-0 right-0 left-auto flex flex-col h-full my-0 ml-auto mr-0'>
                <div className='bg-[var(--ghost-aa1)] p-0' />
                <div className='border-var(--ghost-aa1) flex h-full min-h-8 min-w-8 flex-row items-center justify-center border bg-[var(--ghost-aa1)] p-0'>
                  <RegistrationMark className='opacity-50 mix-blend-luminosity brightness-50 contrast-50' />
                </div>
                <div className='p-0' />
              </div>
            </div>
            <div className='relative p-8 size-full'>
              <div className='absolute inset-x-0 top-0 bottom-auto flex flex-row w-full mx-auto mt-0 mb-auto'>
                <div className='p-0' />
                <div className='border-var(--ghost-aa1) flex min-h-8 w-full min-w-8 flex-row items-center justify-center border bg-[var(--ghost-aa1)] p-0'>
                  <RegistrationMark className='opacity-50 mix-blend-luminosity brightness-50 contrast-50' />
                </div>
                <div className='p-0' />
              </div>
              <div className='relative flex items-center justify-center p-12 size-full grow'>
                <img
                  src={RegistrationImage}
                  alt=''
                  className='absolute z-0 mx-auto mb-0 ml-0 duration-1000 pointer-events-none select-none -bottom-7 -left-7 w-14 mix-blend-hard-light'
                />
                <img
                  src={RegistrationImage}
                  alt=''
                  className='absolute z-0 mx-auto mt-0 mr-0 duration-1000 rotate-180 pointer-events-none select-none -right-7 -top-7 w-14 mix-blend-hard-light'
                />
                <div className='absolute flex flex-row items-center justify-start w-auto gap-2 left-3 top-3 flex-nowrap'>
                  <PresstekLogo className='h-2 max-h-2 w-auto text-[var(--ghost-a4)]' />
                  <p className='text-[0.5rem] text-[var(--grayA5)]'>
                    Press Plate
                  </p>
                </div>
                {ProjectLogoCreative ? (
                  <img
                    src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${ProjectLogoCreative}`}
                    alt=''
                    className='absolute z-0 object-cover mx-auto overflow-hidden pointer-events-none select-none size-full contrast-125 saturate-50'
                  />
                ) : null}
              </div>
              <div className='absolute inset-x-0 bottom-0 top-auto flex flex-row w-full mx-auto mt-auto mb-0'>
                <div className='bg-[var(--ghost-aa1)] p-0' />
                <div className='border-var(--ghost-aa1) bottom-0 top-auto mb-0 mt-auto flex min-h-8 w-full min-w-8 flex-row items-center justify-center border bg-[var(--ghost-aa1)] p-0'>
                  <RegistrationMark className='opacity-50 mix-blend-luminosity brightness-50 contrast-50' />
                </div>
                <div className='bg-[var(--ghost-aa1)] p-0' />
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex flex-col flex-wrap w-full gap-6 px-6 py-3 mx-auto xl:grid xl:max-w-7xl xl:grid-cols-3 xl:flex-nowrap xl:pt-20'>
          <div className='flex flex-col items-center justify-center h-full col-span-1 gap-6 p-8'>
            {ProjectLogo ? (
              <img
                src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${ProjectLogo}`}
                className='pointer-events-none z-[3] m-auto h-auto w-full max-w-[800px] select-none'
                alt={WorkProject}
              />
            ) : null}
            <div className='flex select-none flex-row items-center justify-center gap-1 rounded-full border bg-[var(--grayA2)] p-px text-xs text-[var(--grayA7)]'>
              <AdobeIllustratorLogo className='object-cover object-center p-px overflow-hidden rounded-full shadow size-4' />
              <p className='pr-1 text-nowrap'>Adobe Illustrator</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center h-full col-span-1 gap-6 p-8'>
            {ProjectLogoWireframe ? (
              <img
                src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${ProjectLogoWireframe}`}
                alt='3D Wireframe Model'
                className='pointer-events-none z-[3] m-auto h-auto w-full max-w-[800px] select-none brightness-50 dark:brightness-100'
              />
            ) : null}
            <div className='flex select-none flex-row items-center justify-center gap-1 rounded-full border bg-[var(--grayA2)] p-px text-xs text-[var(--grayA7)]'>
              <img
                src={SplineLogo}
                alt='Spline'
                className='size-4 rounded-full bg-[var(--gray1)] object-cover object-center p-px shadow'
              />
              <p className='pr-1 text-nowrap'>3D Wireframe</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center h-full col-span-1 gap-6 p-8'>
            {ProjectLogo3d ? (
              <img
                src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${ProjectLogo3d}`}
                className='pointer-events-none z-[3] m-auto h-auto w-full max-w-[800px] select-none'
                alt='3D Model'
              />
            ) : null}
            <div className='flex select-none flex-row items-center justify-center gap-1 rounded-full border bg-[var(--grayA2)] p-px text-xs text-[var(--grayA7)]'>
              <img
                src={SplineLogo}
                alt='Spline'
                className='size-4 rounded-full bg-[var(--gray1)] object-cover object-center p-px shadow'
              />
              <p className='pr-1 text-nowrap'>3D Render</p>
            </div>
          </div>
        </div>
        <div className='relative flex flex-col flex-wrap w-full gap-6 px-6 py-3 xl:grid xl:grid-cols-1 xl:flex-nowrap'>
          <div className='z-[1] flex h-full min-h-72 flex-col items-center justify-stretch p-0'>
            <h3 className='my-0 ml-0 mr-auto hidden w-full items-center justify-start border-b bg-gradient-to-b from-[var(--gray12)] via-[var(--gray10)] to-[var(--gray9)] bg-clip-text px-8 py-6 text-xl leading-[100%] tracking-tighter text-transparent md:text-3xl xl:text-5xl'>
              Type
            </h3>

            <div className='relative grid grid-cols-4 gap-6 size-full xl:gap-12 xl:p-20'>
              <div className='border-var(--ghost-aa1) relative col-span-1 grid size-full border bg-[var(--gray2)]'>
                <div className='relative flex flex-col items-start justify-start col-span-1 p-6 size-full'>
                  <h4 className='bg-gradient-to-br from-[var(--ghost-a1)] via-[var(--ghost-a12)] to-[var(--ghost-a12)] bg-clip-text pb-2 text-[0.625rem] font-medium uppercase tracking-[0.25rem] text-transparent'>
                    Type | Logotype
                  </h4>
                  <p className='my-0 ml-0 mr-auto tracking-tight leading-tighter'>
                    {ProjectLogoType}
                  </p>
                </div>
                <div className='relative flex items-center justify-end pt-6 pb-12 pl-12 overflow-hidden'>
                  {ProjectLogoTypeSample ? (
                    <img
                      src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${ProjectLogoTypeSample}`}
                      alt='Project Logotype'
                      className='z-0 h-auto max-h-[280px] w-full origin-right translate-x-12 brightness-50 dark:brightness-100'
                      style={{
                        maskImage:
                          'linear-gradient(270deg, transparent 8%, var(--gray1) 99%)',
                        WebkitMaskImage:
                          'linear-gradient(270deg, transparent 8%, var(--gray1) 99%)',
                      }}
                    />
                  ) : null}
                </div>
              </div>
              <div className='border-var(--ghost-aa1) relative col-span-1 grid size-full border bg-[var(--gray2)]'>
                <div className='relative flex flex-col items-start justify-start col-span-1 p-6 size-full'>
                  <h4 className='bg-gradient-to-br from-[var(--ghost-a1)] via-[var(--ghost-a12)] to-[var(--ghost-a12)] bg-clip-text pb-2 text-[0.625rem] font-medium uppercase tracking-[0.25rem] text-transparent'>
                    Type | Base
                  </h4>
                  <p className='my-0 ml-0 mr-auto tracking-tight leading-tighter'>
                    {ProjectBaseType}
                  </p>
                </div>
                <div className='relative flex items-center justify-end pt-6 pb-12 pl-12 overflow-hidden'>
                  {ProjectBaseTypeSample ? (
                    <img
                      src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${ProjectBaseTypeSample}`}
                      alt='Project Base Type'
                      className='z-0 h-auto max-h-[280px] w-full origin-right translate-x-12 brightness-50 dark:brightness-100'
                      style={{
                        maskImage:
                          'linear-gradient(270deg, transparent 8%, var(--gray1) 99%)',
                        WebkitMaskImage:
                          'linear-gradient(270deg, transparent 8%, var(--gray1) 99%)',
                      }}
                    />
                  ) : null}
                </div>
              </div>
              <div className='border-var(--ghost-aa1) relative col-span-1 grid size-full border bg-[var(--gray2)]'>
                <div className='relative flex flex-col items-start justify-start col-span-1 p-6 size-full'>
                  <h4 className='bg-gradient-to-br from-[var(--ghost-a1)] via-[var(--ghost-a12)] to-[var(--ghost-a12)] bg-clip-text pb-2 text-[0.625rem] font-medium uppercase tracking-[0.25rem] text-transparent'>
                    Type | Expressive
                  </h4>
                  <p className='my-0 ml-0 mr-auto tracking-tight leading-tighter'>
                    {ProjectExpressiveType}
                  </p>
                </div>
                <div className='relative flex items-center justify-end pt-6 pb-12 pl-12 overflow-hidden'>
                  {ProjectExpressiveTypeSample ? (
                    <img
                      src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${ProjectExpressiveTypeSample}`}
                      alt='Project Expressive Type'
                      className='z-0 h-auto max-h-[280px] w-full origin-right translate-x-12 brightness-50 dark:brightness-100'
                      style={{
                        maskImage:
                          'linear-gradient(270deg, transparent 8%, var(--gray1) 99%)',
                        WebkitMaskImage:
                          'linear-gradient(270deg, transparent 8%, var(--gray1) 99%)',
                      }}
                    />
                  ) : null}
                </div>
              </div>
              <div className='border-var(--ghost-aa1) relative col-span-1 grid size-full border bg-[var(--gray2)]'>
                <div className='relative flex flex-col items-start justify-start col-span-1 p-6 size-full'>
                  <h4 className='bg-gradient-to-br from-[var(--ghost-a1)] via-[var(--ghost-a12)] to-[var(--ghost-a12)] bg-clip-text pb-2 text-[0.625rem] font-medium uppercase tracking-[0.25rem] text-transparent'>
                    Type | Code
                  </h4>
                  <p className='my-0 ml-0 mr-auto tracking-tight leading-tighter'>
                    {ProjectCodeType}
                  </p>
                </div>
                <div className='relative flex items-center justify-end pt-6 pb-12 pl-12 overflow-hidden'>
                  {ProjectCodeTypeSample ? (
                    <img
                      src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${ProjectCodeTypeSample}`}
                      alt='Project Code Type'
                      className='z-0 h-auto max-h-[280px] w-full origin-right translate-x-12 brightness-50 dark:brightness-100'
                      style={{
                        maskImage:
                          'linear-gradient(270deg, transparent 8%, var(--gray1) 99%)',
                        WebkitMaskImage:
                          'linear-gradient(270deg, transparent 8%, var(--gray1) 99%)',
                      }}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex flex-col flex-wrap w-full gap-6 px-6 py-3 xl:grid xl:grid-cols-2 xl:flex-nowrap xl:gap-16'>
          {ProjectDesignTokens
            ? ProjectDesignTokens.map((token: Token, tokenIndex: number) =>
                Object.keys(token.palettes).map((paletteName, paletteIndex) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    key={paletteIndex}
                    className='relative z-[1] col-span-1 grid size-full'
                  >
                    <div className='relative flex flex-col items-start justify-start col-span-1 p-6 size-full'>
                      <h4 className='bg-gradient-to-br from-[var(--ghost-a1)] via-[var(--ghost-a12)] to-[var(--ghost-a12)] bg-clip-text pb-2 text-[0.625rem] font-medium uppercase tracking-[0.25rem] text-transparent'>
                        Color | Brand
                      </h4>
                      <p className='my-0 ml-0 mr-auto tracking-tight leading-tighter'>
                        {paletteName}
                      </p>
                    </div>

                    <div
                      className='grid grid-cols-3 gap-4 p-4 size-full'
                      data-key={`${tokenIndex}-${paletteIndex}`}
                    >
                      {Object.entries(
                        token.palettes[paletteName] as
                          | Record<string, never>
                          | ArrayLike<never>,
                      ).map(([shade, color], colorIndex) => (
                        <ColorCard
                          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                          key={`${paletteName}-${colorIndex}`}
                          value_hsl={color}
                          key_hsl={shade}
                          isDark={
                            !!(
                              paletteName.includes('dark') ||
                              paletteName.includes('Dark')
                            )
                          }
                          key_use={shade}
                        />
                      ))}
                    </div>
                  </div>
                )),
              )
            : null}
        </div>
      </div>
    )
  },
)

BrandingShowcase.displayName = 'BrandingShowcase'

export { BrandingShowcase }
