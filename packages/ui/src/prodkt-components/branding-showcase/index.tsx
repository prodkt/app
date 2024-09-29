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
      <div className='flex w-full flex-col' ref={ref} {...props}>
        <div className='relative grid w-full flex-col flex-wrap gap-6 md:grid-cols-2 xl:flex-nowrap'>
          <div className='relative flex h-auto max-w-full basis-1/2 flex-col items-center justify-between overflow-hidden bg-[var(--grayA1)] p-0'>
            <div className='absolute inset-0 m-0 size-full'>
              <div className='absolute inset-y-0 left-0 right-auto my-0 ml-0 mr-auto flex h-full flex-col'>
                <BackgroundPattern className='gradientMask-workShowcase absolute inset-0 z-0 m-0 min-h-full min-w-full text-[var(--redA2)]' />
                <div className='p-0' />
                <div className='flex h-full min-h-8 min-w-8 flex-row items-center justify-center border border-[var(--grayA4)] bg-[var(--ghost-aa1)] p-0'>
                  <RegistrationMark className='opacity-50 mix-blend-luminosity brightness-50 contrast-50' />
                </div>
                <div className='p-0' />
              </div>
              <div className='absolute inset-y-0 left-auto right-0 my-0 ml-auto mr-0 flex h-full flex-col'>
                <BackgroundPattern className='gradientMask-workShowcase absolute inset-0 z-0 m-0 min-h-full min-w-full text-[var(--redA2)]' />
                <div className='p-0' />
                <div className='relative flex h-full min-h-8 min-w-8 flex-row items-center justify-center border border-[var(--ghost-a2)] bg-[var(--ghost-aa1)] p-0'>
                  <RegistrationMark className='opacity-50 mix-blend-luminosity brightness-50 contrast-50' />
                </div>
                <div className='bg-[var(--ghost-aa1)] p-0' />
              </div>
            </div>
            <div className='relative size-full max-w-full p-8'>
              <div className='absolute inset-x-0 bottom-auto top-0 mx-auto mb-auto mt-0 flex w-full max-w-full flex-row'>
                <BackgroundPattern className='gradientMask-workShowcase absolute inset-0 z-0 m-0 min-h-full min-w-full text-[var(--redA2)]' />

                <div className='p-0' />
                <div className='flex min-h-8 w-full min-w-8 flex-row items-center justify-center border border-[var(--grayA4)] bg-[var(--ghost-aa1)] p-0'>
                  <RegistrationMark className='opacity-50 mix-blend-luminosity brightness-50 contrast-50' />
                </div>
                <div className='p-0' />
              </div>
              <div className='relative flex size-full max-w-full items-center justify-center bg-[var(--ghost-aa1)] p-12'>
                <img
                  src={RegistrationImage}
                  alt=''
                  className='pointer-events-none absolute -bottom-7 -left-7 z-0 mx-auto mb-0 ml-0 w-14 select-none mix-blend-hard-light duration-1000'
                />
                <img
                  src={RegistrationImage}
                  alt=''
                  className='pointer-events-none absolute -right-7 -top-7 z-0 mx-auto mr-0 mt-0 w-14 rotate-180 select-none mix-blend-hard-light duration-1000'
                />
                <div className='absolute left-3 top-3 flex w-auto flex-row flex-nowrap items-center justify-start gap-2'>
                  <PresstekLogo className='h-2 max-h-2 w-auto text-[var(--ghost-a4)]' />
                  <Badge className='text-[0.5rem]'>ProFire Digital Media</Badge>
                  <p className='text-[0.5rem] text-[var(--redA11)]'>
                    2540 dots/inch (100 dots/mm)
                  </p>
                </div>
                {ProjectAnimatedLogo ? (
                  <AnimatedComponentWrapper
                    componentName={ProjectAnimatedLogo}
                    className='z-[1] max-w-full overflow-visible'
                  />
                ) : null}
                <div className='gradientMask-11 absolute z-0 size-full max-w-full bg-transparent' />
              </div>
              <div className='absolute inset-x-0 bottom-0 top-auto mx-auto mb-0 mt-auto flex w-full max-w-full flex-row'>
                <BackgroundPattern className='gradientMask-workShowcase absolute inset-0 z-0 m-0 min-h-full min-w-full text-[var(--redA2)]' />

                <div className='p-0' />
                <div className='flex min-h-8 w-full min-w-8 flex-row items-center justify-center border border-[var(--grayA4)] bg-[var(--ghost-aa1)] p-0'>
                  <RegistrationMark className='opacity-50 mix-blend-luminosity brightness-50 contrast-50' />
                </div>
                <div className='p-0' />
              </div>
            </div>
          </div>
          <div className='relative flex h-auto max-w-full basis-1/2 flex-col items-center justify-between overflow-hidden bg-transparent p-0'>
            <div className='absolute inset-0 m-0 size-full'>
              <div className='absolute inset-y-0 left-0 right-auto my-0 ml-0 mr-auto flex h-full flex-col'>
                <div className='bg-[var(--ghost-aa1)] p-0' />
                <div className='flex h-full min-h-8 min-w-8 flex-row items-center justify-center border border-[var(--grayA4)] bg-[var(--ghost-aa1)] p-0'>
                  <RegistrationMark className='opacity-50 mix-blend-luminosity brightness-50 contrast-50' />
                </div>
                <div className='bg-[var(--redA2)] p-0' />
              </div>
              <div className='absolute inset-y-0 left-auto right-0 my-0 ml-auto mr-0 flex h-full flex-col'>
                <div className='bg-[var(--ghost-aa1)] p-0' />
                <div className='flex h-full min-h-8 min-w-8 flex-row items-center justify-center border border-[var(--grayA4)] bg-[var(--ghost-aa1)] p-0'>
                  <RegistrationMark className='opacity-50 mix-blend-luminosity brightness-50 contrast-50' />
                </div>
                <div className='p-0' />
              </div>
            </div>
            <div className='relative size-full p-8'>
              <div className='absolute inset-x-0 bottom-auto top-0 mx-auto mb-auto mt-0 flex w-full flex-row'>
                <div className='p-0' />
                <div className='flex min-h-8 w-full min-w-8 flex-row items-center justify-center border border-[var(--grayA4)] bg-[var(--ghost-aa1)] p-0'>
                  <RegistrationMark className='opacity-50 mix-blend-luminosity brightness-50 contrast-50' />
                </div>
                <div className='p-0' />
              </div>
              <div className='relative flex size-full items-center  justify-center'>
                <img
                  src={RegistrationImage}
                  alt=''
                  className='pointer-events-none absolute -bottom-7 -left-7 z-0 mx-auto mb-0 ml-0 w-14 select-none mix-blend-hard-light duration-1000'
                />
                <img
                  src={RegistrationImage}
                  alt=''
                  className='pointer-events-none absolute -right-7 -top-7 z-0 mx-auto mr-0 mt-0 w-14 rotate-180 select-none mix-blend-hard-light duration-1000'
                />
                <div className='absolute left-3 top-3 z-[1] flex w-auto flex-row flex-nowrap items-center justify-start gap-2'>
                  <PresstekLogo className='h-2 max-h-2 w-auto text-[var(--ghost-a4)]' />
                  <p className='text-[0.5rem] text-[var(--ghost-a4)]'>
                    Press Plate
                  </p>
                </div>
                {ProjectLogoCreative ? (
                  <img
                    src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${ProjectLogoCreative}`}
                    alt=''
                    className='pointer-events-none  z-0 mx-auto size-full select-none overflow-hidden object-cover contrast-125 saturate-50'
                  />
                ) : null}
              </div>
              <div className='absolute inset-x-0 bottom-0 top-auto mx-auto mb-0 mt-auto flex w-full flex-row'>
                <div className='bg-[var(--ghost-aa1)] p-0' />
                <div className='bottom-0 top-auto mb-0 mt-auto flex min-h-8 w-full min-w-8 flex-row items-center justify-center border border-[var(--grayA4)] bg-[var(--ghost-aa1)] p-0'>
                  <RegistrationMark className='opacity-50 mix-blend-luminosity brightness-50 contrast-50' />
                </div>
                <div className='bg-[var(--ghost-aa1)] p-0' />
              </div>
            </div>
          </div>
        </div>
        <div className='relative mx-auto grid w-full grid-cols-1 flex-col flex-wrap gap-6 sm:grid-cols-3 xl:max-w-7xl xl:flex-nowrap xl:pt-20'>
          <div className='col-span-1 flex h-full flex-col items-center justify-center gap-6 p-8'>
            {ProjectLogo ? (
              <img
                src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${ProjectLogo}`}
                className='pointer-events-none z-[3] m-auto h-auto w-full max-w-[800px] select-none'
                alt={WorkProject}
              />
            ) : null}
            <div className='flex select-none flex-row items-center justify-center gap-1 rounded-full border border-[var(--grayA4)] bg-[var(--grayA2)] p-px text-xs text-[var(--grayA7)]'>
              <AdobeIllustratorLogo className='size-6 overflow-hidden rounded-full object-cover object-center p-px shadow' />
              <p className='text-nowrap pr-1'>Adobe Illustrator</p>
            </div>
          </div>
          <div className='col-span-1 flex h-full flex-col items-center justify-center gap-6 p-8'>
            {ProjectLogoWireframe ? (
              <img
                src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${ProjectLogoWireframe}`}
                alt='3D Wireframe Model'
                className='pointer-events-none z-[3] m-auto h-auto w-full max-w-[800px] select-none brightness-50 dark:brightness-100'
              />
            ) : null}
            <div className='flex select-none flex-row items-center justify-center gap-1 rounded-full border border-[var(--grayA4)] bg-[var(--grayA2)] p-px text-xs text-[var(--grayA7)]'>
              <img
                src={SplineLogo}
                alt='Spline'
                className='size-6 rounded-full bg-[var(--gray1)] object-cover object-center p-px shadow'
              />
              <p className='text-nowrap pr-1'>3D Wireframe</p>
            </div>
          </div>
          <div className='col-span-1 flex h-full flex-col items-center justify-center gap-6 p-8'>
            {ProjectLogo3d ? (
              <img
                src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${ProjectLogo3d}`}
                className='pointer-events-none z-[3] m-auto h-auto w-full max-w-[800px] select-none'
                alt='3D Model'
              />
            ) : null}
            <div className='flex select-none flex-row items-center justify-center gap-1 rounded-full border border-[var(--grayA4)] bg-[var(--grayA2)] p-px text-xs text-[var(--grayA7)]'>
              <img
                src={SplineLogo}
                alt='Spline'
                className='size-6 rounded-full bg-[var(--gray1)] object-cover object-center p-px shadow'
              />
              <p className='text-nowrap pr-1'>3D Render</p>
            </div>
          </div>
        </div>
        <div className='relative flex w-full flex-col flex-wrap gap-4 xl:grid xl:grid-cols-1 xl:flex-nowrap'>
          <div className='z-[1] flex min-h-72 flex-col items-center justify-stretch p-0'>
            <div className='relative grid w-full grid-cols-2 gap-4 md:grid-cols-4 xl:p-20'>
              <div className='relative col-span-1 grid w-full border border-[var(--grayA4)] bg-[var(--gray2)]'>
                <div className='relative flex w-full flex-col items-start justify-start p-6'>
                  <h4 className='bg-gradient-to-br from-[var(--ghost-a1)] via-[var(--ghost-a12)] to-[var(--ghost-a12)] bg-clip-text pb-2 text-[0.625rem] font-medium uppercase tracking-[0.25rem] text-transparent'>
                    Type | Logotype
                  </h4>
                  <p className='my-0 ml-0 mr-auto tracking-tight'>
                    {ProjectLogoType}
                  </p>
                </div>
                <div className='relative flex items-center justify-end overflow-hidden pb-12 pl-12 pt-6'>
                  {ProjectLogoTypeSample ? (
                    <img
                      src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${ProjectLogoTypeSample}`}
                      alt='Project Logotype'
                      className='z-0 h-fit max-h-[280px] w-full origin-right translate-x-12 brightness-50 dark:brightness-100'
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
              <div className='relative col-span-1 grid w-full border border-[var(--grayA4)] bg-[var(--gray2)]'>
                <div className='relative flex w-full flex-col items-start justify-start p-6'>
                  <h4 className='bg-gradient-to-br from-[var(--ghost-a1)] via-[var(--ghost-a12)] to-[var(--ghost-a12)] bg-clip-text pb-2 text-[0.625rem] font-medium uppercase tracking-[0.25rem] text-transparent'>
                    Type | Base
                  </h4>
                  <p className='my-0 ml-0 mr-auto tracking-tight'>
                    {ProjectBaseType}
                  </p>
                </div>
                <div className='relative flex items-center justify-end overflow-hidden pb-12 pl-12 pt-6'>
                  {ProjectBaseTypeSample ? (
                    <img
                      src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${ProjectBaseTypeSample}`}
                      alt='Project Base Type'
                      className='z-0 h-fit max-h-[280px] min-h-[100px] w-full origin-right translate-x-12 brightness-50 dark:brightness-100'
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
              <div className='relative col-span-1 grid w-full border border-[var(--grayA4)] bg-[var(--gray2)]'>
                <div className='relative flex w-full flex-col items-start justify-start p-6'>
                  <h4 className='bg-gradient-to-br from-[var(--ghost-a1)] via-[var(--ghost-a12)] to-[var(--ghost-a12)] bg-clip-text pb-2 text-[0.625rem] font-medium uppercase tracking-[0.25rem] text-transparent'>
                    Type | Expressive
                  </h4>
                  <p className='my-0 ml-0 mr-auto tracking-tight'>
                    {ProjectExpressiveType}
                  </p>
                </div>
                <div className='relative flex items-center justify-end overflow-hidden pb-12 pl-12 pt-6'>
                  {ProjectExpressiveTypeSample ? (
                    <img
                      src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${ProjectExpressiveTypeSample}`}
                      alt='Project Expressive Type'
                      className='z-0 h-fit max-h-[280px] min-h-[100px] w-full origin-right translate-x-12 brightness-50 dark:brightness-100'
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
              <div className='relative col-span-1 grid w-full border border-[var(--grayA4)] bg-[var(--gray2)]'>
                <div className='relative flex w-full flex-col items-start justify-start p-6'>
                  <h4 className='bg-gradient-to-br from-[var(--ghost-a1)] via-[var(--ghost-a12)] to-[var(--ghost-a12)] bg-clip-text pb-2 text-[0.625rem] font-medium uppercase tracking-[0.25rem] text-transparent'>
                    Type | Code
                  </h4>
                  <p className='my-0 ml-0 mr-auto tracking-tight'>
                    {ProjectCodeType}
                  </p>
                </div>
                <div className='relative flex items-center justify-end overflow-hidden pb-12 pl-12 pt-6'>
                  {ProjectCodeTypeSample ? (
                    <img
                      src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${ProjectCodeTypeSample}`}
                      alt='Project Code Type'
                      className='z-0 h-fit max-h-[280px] min-h-[100px] w-full origin-right translate-x-12 brightness-50 dark:brightness-100'
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
        <div className='relative grid w-full  gap-4 md:grid-cols-2 xl:flex-nowrap xl:gap-16'>
          {ProjectDesignTokens
            ? ProjectDesignTokens.map((token: Token, tokenIndex: number) =>
                Object.keys(token.palettes).map((paletteName, paletteIndex) => (
                  <div
                    key={paletteIndex}
                    className='relative z-[1] col-span-1 grid w-full'
                  >
                    <div className='relative col-span-1 flex w-full flex-col items-start justify-start p-6'>
                      <h4 className='bg-gradient-to-br from-[var(--ghost-a1)] via-[var(--ghost-a12)] to-[var(--ghost-a12)] bg-clip-text pb-2 text-[0.625rem] font-medium uppercase tracking-[0.25rem] text-transparent'>
                        Color | Brand
                      </h4>
                      <p className='my-0 ml-0 mr-auto tracking-tight'>
                        {paletteName}
                      </p>
                    </div>

                    <div
                      className='grid w-full grid-cols-2 gap-4 p-4 xl:grid-cols-3'
                      data-key={`${tokenIndex}-${paletteIndex}`}
                    >
                      {Object.entries(
                        token.palettes[paletteName] as
                          | Record<string, never>
                          | ArrayLike<never>,
                      ).map(([shade, color], colorIndex) => (
                        <ColorCard
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
