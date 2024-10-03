import type React from 'react'

import Background from '@prodkt/assets/ampersand/ampersand-pattern.svg'
import AppCircles from '@prodkt/assets/ampersand/appCircles_lg_opt.avif'
import ConnectionLines from '@prodkt/assets/ampersand/connectionLines.svg'
import CenterCircle from '@prodkt/assets/ampersand/figmaCircle1680w_md_opt.avif'
import LockSwipe from '@prodkt/assets/ampersand/lockSwiper_md_opt.avif'
import AmpersandMock from '@prodkt/assets/ampersand/logoOnlyMock_sm_opt.avif'
import Yada1 from '@prodkt/assets/ampersand/menu-example.webp'

import './ampersand.css'

const Ampersand: React.FC = (props) => (
  <section
    className='gradientMask-to-b-10 relative flex w-full flex-col items-center justify-center px-10 pb-40 md:px-20 '
    {...props}
  >
    <div className='absolute bottom-0 top-auto z-10 mb-0 mt-auto h-[160px] w-full bg-gradient-to-b from-transparent to-[var(--violet1)]' />
    <div className='absolute inset-0 size-full bg-[var(--mauve1)]' />
    <img
      src={Background}
      decoding='async'
      loading='lazy'
      alt='prodkt'
      className='absolute inset-x-auto inset-y-0 z-0 mx-0 my-auto h-full w-dvw select-none object-cover object-center opacity-[20%] contrast-200 invert saturate-0 dark:opacity-[10%] dark:invert-0'
    />
    <div className='container relative left-0 mx-auto pt-[92px] md:py-[6.5dvw]'>
      <div className='inset-x-0 mx-auto flex w-full max-w-6xl flex-row items-center justify-center gap-0 text-center sm:align-top md:items-center md:align-middle'>
        <div className='left-0 top-0 z-20 me-auto ms-auto flex w-1/2 scale-100 flex-col place-content-center items-start justify-start gap-[3dvw] text-start align-middle sm:w-3/4 sm:scale-90 sm:justify-center md:w-1/2 md:grow md:scale-100'>
          <h3 className='xs:text-5xl z-10 text-3xl font-medium tracking-tighter md:max-w-4xl xl:text-5xl'>
            <span className='bg-gradient-to-br from-[var(--mauve12)] to-[var(--mauve10)] bg-clip-text text-transparent drop-shadow'>
              Design token transformer.
            </span>
          </h3>
          <h2 className='xs:text-5xl z-10 mx-auto ml-0 flex max-w-3xl flex-col gap-[1dvw] text-balance pb-2 text-start text-xl font-medium tracking-tighter sm:text-2xl lg:text-3xl'>
            <span className='me-auto ms-0 block w-full max-w-md bg-gradient-to-l from-[var(--mauve9)] to-[var(--slate10)] bg-clip-text tracking-tighter text-transparent'>
              <span className='text-[var(--violet12)]'>Figma</span>
              <span className='mx-2 inline-flex h-8 -translate-y-1 items-center justify-center rounded-lg bg-[var(--violet9)] px-2 pb-1 pt-0 align-middle text-[var(--violet1)]'>
                to
              </span>
              iOS, iPadOS, MacOS, Android, Flutter & Web.
            </span>
            <span className='me-auto ms-0 block bg-gradient-to-br from-[var(--mauve11)] to-[var(--mauve12)] bg-clip-text text-transparent'>
              In seconds.
            </span>
          </h2>
        </div>
        <div className='group relative top-0 flex w-1/2 max-w-4xl scale-100 flex-row place-content-center items-center justify-center align-middle sm:w-1/4 md:w-auto md:shrink md:translate-x-16 md:scale-100 xl:translate-x-0'>
          <img
            src={AmpersandMock}
            decoding='async'
            loading='lazy'
            alt='prodkt'
            className='inset-auto z-10 my-auto me-auto ms-auto max-h-[83dvh] w-[400px] origin-right select-none self-center object-contain'
          />
          <img
            src={Yada1}
            decoding='async'
            loading='lazy'
            alt='prodkt'
            className='invisible absolute inset-y-auto left-0 right-auto z-[1] my-auto me-auto ms-0 w-[300px] origin-center translate-x-[-120px] select-none contrast-125 invert saturate-0 md:visible dark:invert-0'
          />
          <img
            src={CenterCircle}
            decoding='async'
            loading='lazy'
            alt='prodkt'
            className='absolute inset-x-auto z-[22] my-auto me-auto ms-auto min-w-[650px] origin-center scale-50 select-none brightness-200 contrast-125 invert transition-all duration-500 group-hover:scale-[0.25] md:scale-100 md:group-hover:scale-75 dark:brightness-100 dark:invert-0'
          />
          <img
            src={AppCircles}
            decoding='async'
            loading='lazy'
            alt='prodkt'
            className='absolute inset-x-auto z-[26] my-auto me-auto ms-auto w-[400px] origin-center scale-100 animate-none select-none contrast-125 transition-all duration-1000 group-hover:scale-[65%]'
          />
          <img
            src={AppCircles}
            decoding='async'
            loading='lazy'
            alt='prodkt'
            className='absolute inset-x-auto z-[25] my-auto me-auto ms-auto w-[400px] origin-center scale-100 animate-none select-none blur-lg transition-all duration-1000 group-hover:scale-[65%] group-hover:opacity-0'
          />
          <img
            src={ConnectionLines}
            decoding='async'
            loading='lazy'
            alt='prodkt'
            className='absolute inset-x-auto z-20 my-auto me-auto ms-auto w-[400px] origin-center scale-100 animate-none select-none blur-2xl invert-0 transition-all duration-1000 ease-in-out group-hover:scale-[40%] group-hover:animate-none group-hover:opacity-0'
          />
          <img
            src={ConnectionLines}
            decoding='async'
            loading='lazy'
            alt='prodkt'
            className='absolute inset-x-auto z-20 m-auto w-[400px] scale-100 select-none invert transition-all duration-1000 ease-in-out group-hover:scale-[40%] group-hover:blur-3xl group-hover:invert-0'
          />
          <img
            src={ConnectionLines}
            decoding='async'
            loading='lazy'
            alt='prodkt'
            className='absolute inset-x-auto z-20 my-auto me-auto ms-auto w-[400px] origin-center scale-100 select-none opacity-50 transition-all duration-1000 ease-in-out group-hover:scale-[40%] group-hover:animate-none'
          />
          <img
            src={LockSwipe}
            decoding='async'
            loading='lazy'
            alt='prodkt'
            className='invisible absolute inset-x-auto bottom-0 top-auto z-20 my-auto me-auto ms-auto w-[20px] origin-center translate-y-[-5dvw] select-none rounded-[15.5px] shadow-2xl shadow-[var(--green9)] md:visible md:w-[45px]'
          />
          <div className='absolute z-50 my-auto me-auto ms-auto h-[80px] w-[100px] animate-[spin_5s_linear_infinite] rounded-full bg-gradient-to-br from-[var(--mauve12)] to-[var(--mauve1)] mix-blend-hard-light blur-xl' />
        </div>
      </div>
    </div>
  </section>
)

Ampersand.displayName = 'Ampersand'

export default Ampersand
