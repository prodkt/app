import React from 'react'

import Background2 from '@prodkt/assets/olio/olio_bg_1-2k.avif'
import Olio3d from '@prodkt/assets/olio/olio_ipad_1_opt.avif'
import OlioLogo from '@prodkt/assets/olio/olio_logotype_monochrome_onDark.svg'

const Olio = React.forwardRef<HTMLDivElement>(({ ...props }, ref) => {
  return (
    <section
      ref={ref}
      className='relative flex flex-col items-center justify-center w-full p-12 overflow-hidden align-middle'
      {...props}
    >
      <img
        src={Background2}
        decoding='async'
        loading='lazy'
        alt='prodkt'
        className='absolute top-0 z-[-1] m-auto h-auto select-none object-cover'
      />
      <div className='container relative z-[5] mx-auto px-4'>
        <div className='flex flex-col items-center justify-start max-w-4xl mx-auto text-center'>
          <div className='relative flex items-center justify-center'>
            <img
              src={Olio3d}
              decoding='async'
              loading='lazy'
              alt='prodkt'
              className='z-20 m-auto w-[1200px] min-w-[600px] select-none'
            />
          </div>
          <div
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(9,9,121,1) 0%, rgba(0,212,255,0.1) 100%)',
              background: 'rgb(2,0,36,.5)',
            }}
            className='absolute z-20 flex size-full max-w-4xl flex-col items-center justify-center rounded-[2.7rem]'
          >
            <img
              src={OlioLogo}
              decoding='async'
              loading='lazy'
              alt='prodkt'
              className='w-32 h-auto mx-auto mb-4 pointer-events-none select-none none sm:w-40'
            />
            <h3 className='z-20 mx-auto mb-2 max-w-2xl text-xl font-medium tracking-tighter text-[var(--blue11)] sm:text-2xl'>
              <span className=''>An iPadOS concept </span>
            </h3>
            <h2 className='z-20 mx-auto mb-8 max-w-[75dvw] text-balance bg-gradient-to-br from-[var(--ghost-a3)] to-[var(--ghost-a12)] bg-clip-text pb-2 text-2xl font-medium leading-tight tracking-tighter text-transparent sm:mb-4 sm:text-4xl lg:max-w-3xl xl:text-5xl 2xl:max-w-5xl'>
              <span className=''>Build Tailwind enabled</span>
              <span className='bg-gradient-to-br from-[#4345fd] to-[var(--blue11)] bg-clip-text text-transparent'>
                HTML sites from abroad on iPad.
              </span>
            </h2>
            <a
              className='group relative z-20 inline-block w-auto overflow-hidden rounded-full bg-gradient-to-br from-[var(--ghost-a9)] to-[var(--ghost-a3)] ps-7 font-semibold text-[var(--ghost-a12)] shadow-2xl shadow-[var(--greenA3)] ring-1 ring-[var(--ghost-a2)] transition-all sm:w-auto'
              href='/'
            >
              <div className='absolute left-px right-full top-0 mr-px size-full rounded-3xl bg-gradient-to-tr from-[var(--blue10)] to-[#4345fd] p-px blur-lg transition duration-500 group-hover:translate-x-[70%] group-hover:scale-[1.2]'></div>
              <div className='relative flex items-center justify-center rounded-3xl group-hover:text-[var(--ghost-a12)]'>
                <span className='mr-6 transition-all delay-150'>
                  See more designs
                </span>
                <span className='flex items-center justify-center border-l border-[var(--ghost-aa2)] p-6 transition-all delay-150 group-hover:border-[var(--ghost-a1)] group-hover:bg-[var(--ghost-a1)] group-hover:px-6 group-hover:text-[var(--ghost-a12)]'>
                  <svg
                    width='8'
                    height='12'
                    viewBox='0 0 8 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>olio svg</title>
                    <path
                      d='M6.83 5.29L2.59 1.05C2.49704 0.956274 2.38644 0.881879 2.26458 0.83111C2.14272 0.780342 2.01202 0.754204 1.88 0.754204C1.74799 0.754204 1.61729 0.780342 1.49543 0.83111C1.37357 0.881879 1.26297 0.956274 1.17 1.05C0.983753 1.23736 0.879211 1.49082 0.879211 1.755C0.879211 2.01919 0.983753 2.27264 1.17 2.46L4.71 6L1.17 9.54C0.983753 9.72736 0.879211 9.98082 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.71C6.92373 6.61704 6.99813 6.50644 7.04889 6.38458C7.09966 6.26272 7.1258 6.13201 7.1258 6C7.1258 5.86799 7.09966 5.73728 7.04889 5.61543C6.99813 5.49357 6.92373 5.38297 6.83 5.29Z'
                      fill='currentColor'
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
})

Olio.displayName = 'Olio'

export { Olio }
