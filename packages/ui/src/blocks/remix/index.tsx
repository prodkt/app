import type React from 'react'

import { Autoplay, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Decorative2 from '@prodkt/assets/remix/Deco1.svg'
import Iphone from '@prodkt/assets/remix/iPhone15ProMax-DarkTitanium-96dpi-720h.avif'
import RemixElement_1 from '@prodkt/assets/remix/isolated-elements/remixElement-1.png'
import RemixElement_2 from '@prodkt/assets/remix/isolated-elements/remixElement-2.png'
import RemixElement_3 from '@prodkt/assets/remix/isolated-elements/remixElement-3.png'
import RemixElement_4 from '@prodkt/assets/remix/isolated-elements/remixElement-4.png'
import RemixElement_5 from '@prodkt/assets/remix/isolated-elements/remixElement-5.png'
import RemixElement_6 from '@prodkt/assets/remix/isolated-elements/remixElement-6.png'
import RemixElement_7 from '@prodkt/assets/remix/isolated-elements/remixElement-7.png'
import RemixElement_8 from '@prodkt/assets/remix/isolated-elements/remixElement-8.png'
import RemixElement_9 from '@prodkt/assets/remix/isolated-elements/remixElement-9.png'
import RemixElement_10 from '@prodkt/assets/remix/isolated-elements/remixElement-10.png'
import BlogImageFour from '@prodkt/assets/remix/prodkt_card_13.avif'
import IPhone_01 from '@prodkt/assets/remix/Remix-Screen--iPhone15ProMax---01.avif'
import IPhone_02 from '@prodkt/assets/remix/Remix-Screen--iPhone15ProMax---02.avif'
import IPhone_03 from '@prodkt/assets/remix/Remix-Screen--iPhone15ProMax---03.avif'
import IPhone_04 from '@prodkt/assets/remix/Remix-Screen--iPhone15ProMax---04.avif'
import IPhone_05 from '@prodkt/assets/remix/Remix-Screen--iPhone15ProMax---05.avif'
import IPhone_06 from '@prodkt/assets/remix/Remix-Screen--iPhone15ProMax---06.avif'
import IPhone_07 from '@prodkt/assets/remix/Remix-Screen--iPhone15ProMax---07.avif'
import IPhone_08 from '@prodkt/assets/remix/Remix-Screen--iPhone15ProMax---08.avif'
import IPhone_09 from '@prodkt/assets/remix/Remix-Screen--iPhone15ProMax---09.avif'

import '@prodkt/tailwind/color'
import './remix.css'

const Remix: React.FC = (props) => (
  <section
    className='relative w-full overflow-hidden pb-20 xl:pb-32'
    {...props}
  >
    <div className='absolute bottom-0 top-auto z-10 mb-0 mt-auto h-[120px] w-full bg-gradient-to-b from-transparent to-[var(--violet1)]' />

    <img
      src={BlogImageFour}
      decoding='async'
      loading='lazy'
      alt='prodkt blog'
      className='pointer-events-none absolute left-0 top-0 size-full select-none object-cover object-top blur-lg'
    />
    <img
      src={BlogImageFour}
      decoding='async'
      loading='lazy'
      alt='prodkt blog'
      className='pointer-events-none absolute left-0 top-0 size-full select-none object-cover object-top opacity-20'
    />
    <div className='relative mx-auto mt-[90px] md:mt-[100px] lg:mt-[130px]'>
      <div className='mx-auto max-w-[1200px]'>
        <div className='flex w-full flex-col flex-wrap items-center justify-center gap-0 align-top md:flex-row md:flex-nowrap md:gap-8'>
          <div className='flex flex-initial shrink grow basis-1/3 flex-col items-center justify-start align-top'>
            <h1 className='remix-heading flex flex-row flex-nowrap whitespace-nowrap text-nowrap font-bold tracking-tighter'>
              <span className='ml-0 flex-nowrap whitespace-nowrap text-nowrap pl-0 text-inherit'>
                Remix
              </span>
            </h1>
            <a
              className='group relative mb-24 hidden w-auto overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--violetA9)] to-[var(--violetA6)] ps-7 font-semibold text-white shadow-2xl shadow-[var(--violetA3)] ring-1 ring-[var(--ghost-a1)] transition-all sm:w-auto'
              href='/'
            >
              <div className='absolute left-px right-full top-0 mr-px size-full rounded-3xl bg-gradient-to-tr from-[var(--crimsonA9)] to-[var(--violetA6)] p-px blur-lg transition duration-500 group-hover:translate-x-[70%] group-hover:scale-[1.2]' />
              <div className='relative flex items-center justify-center rounded-3xl'>
                <span className='mr-6 transition-all delay-150'>
                  Explore a new LMS
                </span>
                <span className='flex items-center justify-center border-l border-[var(--ghost-aa2)] p-6 transition-all delay-150 group-hover:border-[var(--ghost-a1)] group-hover:bg-[var(--ghost-a1)] group-hover:px-6'>
                  <svg
                    width='8'
                    height='12'
                    viewBox='0 0 8 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>svg</title>
                    <path
                      d='M6.83 5.29L2.59 1.05C2.49704 0.956274 2.38644 0.881879 2.26458 0.83111C2.14272 0.780342 2.01202 0.754204 1.88 0.754204C1.74799 0.754204 1.61729 0.780342 1.49543 0.83111C1.37357 0.881879 1.26297 0.956274 1.17 1.05C0.983753 1.23736 0.879211 1.49082 0.879211 1.755C0.879211 2.01919 0.983753 2.27264 1.17 2.46L4.71 6L1.17 9.54C0.983753 9.72736 0.879211 9.98082 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.71C6.92373 6.61704 6.99813 6.50644 7.04889 6.38458C7.09966 6.26272 7.1258 6.13201 7.1258 6C7.1258 5.86799 7.09966 5.73728 7.04889 5.61543C6.99813 5.49357 6.92373 5.38297 6.83 5.29Z'
                      fill='currentColor'
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
          <div className='relative z-0 flex flex-initial grow basis-1/3 origin-top-left flex-col place-content-center place-items-center items-center justify-center text-center align-middle'>
            <img
              src={Decorative2}
              decoding='async'
              loading='lazy'
              alt='prodkt remix lxp'
              className='pointer-events-none absolute top-0 z-0 min-w-min origin-center -translate-y-20 translate-x-[-28%] select-none blur-lg'
            />
            <div className='relative left-0 z-[5] flex w-auto origin-top-left flex-col place-content-center place-items-center items-center justify-center p-12'>
              <img
                src={Iphone}
                decoding='async'
                loading='lazy'
                alt='prodkt remix lxp'
                className='pointer-events-none absolute z-[6] ms-0 max-h-[498px] w-auto origin-center select-none object-center'
              />
              <div className='mx-auto h-[459px] max-h-[459px] max-w-[213px] overflow-hidden rounded-[27px] bg-[var(--ghost-aa10)] p-0'>
                <img
                  src={RemixElement_1}
                  decoding='async'
                  loading='lazy'
                  alt='prodkt remix lxp'
                  className='absolute left-0 top-0 mx-auto origin-center translate-x-[-130px] translate-y-[-90px] scale-50 overflow-hidden object-contain'
                />
                <img
                  src={RemixElement_2}
                  decoding='async'
                  loading='lazy'
                  alt='prodkt remix lxp'
                  className='absolute right-0 top-0 mx-auto origin-center translate-x-[120px] translate-y-[-60px] scale-50 overflow-hidden object-contain'
                />
                <img
                  src={RemixElement_3}
                  decoding='async'
                  loading='lazy'
                  alt='prodkt remix lxp'
                  className='absolute left-0 top-0 mx-auto origin-center translate-x-[-190px] translate-y-[80px] scale-[35%] overflow-hidden object-contain blur'
                />
                <img
                  src={RemixElement_5}
                  decoding='async'
                  loading='lazy'
                  alt='prodkt remix lxp'
                  className='absolute right-0 top-0 mx-auto origin-center translate-x-[190px] translate-y-[80px] scale-[35%] overflow-hidden object-contain blur'
                />
                <img
                  src={RemixElement_6}
                  decoding='async'
                  loading='lazy'
                  alt='prodkt remix lxp'
                  className='absolute left-0 top-0 mx-auto origin-center translate-x-[-140px] translate-y-[240px] scale-[75%] overflow-hidden object-contain'
                />
                <img
                  src={RemixElement_8}
                  decoding='async'
                  loading='lazy'
                  alt='prodkt remix lxp'
                  className='absolute right-0 top-0 mx-auto origin-center translate-x-[140px] translate-y-[240px] scale-[75%] overflow-hidden object-contain blur-sm'
                />
                <img
                  src={RemixElement_9}
                  decoding='async'
                  loading='lazy'
                  alt='prodkt remix lxp'
                  className='absolute left-0 top-0 mx-auto origin-center translate-x-[-140px] translate-y-[400px] scale-[25%] overflow-hidden object-contain blur'
                />
                <img
                  src={RemixElement_10}
                  decoding='async'
                  loading='lazy'
                  alt='prodkt remix lxp'
                  className='absolute right-0 top-0 mx-auto origin-center translate-x-[140px] translate-y-[400px] scale-[25%] overflow-hidden object-contain'
                />

                <img
                  src={RemixElement_4}
                  decoding='async'
                  loading='lazy'
                  alt='prodkt remix lxp'
                  className='absolute left-0 top-0 mx-auto origin-center translate-x-[-190px] translate-y-[580px] scale-[70%] overflow-hidden object-contain'
                />
                <img
                  src={RemixElement_7}
                  decoding='async'
                  loading='lazy'
                  alt='prodkt remix lxp'
                  className='absolute right-0 top-0 mx-auto origin-center translate-x-[190px] translate-y-[560px] scale-[70%] overflow-hidden object-contain blur-sm'
                />

                <Swiper
                  slidesPerView={1}
                  loop={true}
                  spaceBetween={0}
                  mousewheel={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Mousewheel]}
                  className={'max-h-[461px] w-full bg-transparent'}
                >
                  <SwiperSlide className=''>
                    <img
                      src={IPhone_01}
                      alt='prodkt remix lxp'
                      className='size-full max-h-[461px] origin-center overflow-hidden rounded-[27px] p-0'
                    />
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <img
                      src={IPhone_02}
                      alt='prodkt remix lxp'
                      className='max-h-[461px] origin-center overflow-hidden rounded-[27px] p-0'
                    />
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <img
                      src={IPhone_03}
                      alt='prodkt remix lxp'
                      className='max-h-[461px] origin-center overflow-hidden rounded-[27px] p-0'
                    />
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <img
                      src={IPhone_04}
                      alt='prodkt remix lxp'
                      className='max-h-[461px] origin-center overflow-hidden rounded-[27px] p-0'
                    />
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <img
                      src={IPhone_05}
                      alt='prodkt remix lxp'
                      className='max-h-[461px] origin-center overflow-hidden rounded-[27px] p-0'
                    />
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <img
                      src={IPhone_06}
                      alt='prodkt remix lxp'
                      className='max-h-[461px] origin-center overflow-hidden rounded-[27px] p-0'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={IPhone_07}
                      alt='prodkt remix lxp'
                      className='max-h-[461px] origin-center overflow-hidden rounded-[27px] p-0'
                    />
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <img
                      src={IPhone_08}
                      alt='prodkt remix lxp'
                      className='max-h-[461px] origin-center overflow-hidden rounded-[27px] p-0'
                    />
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <img
                      src={IPhone_09}
                      alt='prodkt remix lxp'
                      className='max-h-[461px] origin-center overflow-hidden rounded-[27px] p-0'
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

Remix.displayName = 'Remix'

export default Remix // Ensure default export
