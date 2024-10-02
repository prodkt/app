import React from 'react'

import ProdktCard from '@prodkt/assets/remix/prodkt_card_13.avif'

/**
 *
 */
export default function IndexSectionFeatures3() {
  return (
    <React.Fragment>
      <section className='relative overflow-hidden pb-48 pt-24'>
        <img
          className='absolute right-0 top-0'
          src='@prodkt/assets/features/radial1.svg'
          alt=''
        />
        <img
          className='absolute bottom-0 left-0'
          src='@prodkt/assets/features/radial2.svg'
          alt=''
        />
        <div className='container relative z-10 mx-auto px-4'>
          <div className='md:mx-auto md:max-w-3xl'>
            <h2 className='bg-radial-gradient from-gray-12 to-gray-11 text-shadow-[0_0_10px_var(--grayA2)] mb-20 mb-6 max-w-xl text-balance bg-clip-text pb-2 text-5xl font-medium tracking-tighter text-transparent sm:text-6xl'>
              Recommended by world-class companies.
            </h2>
            <div className='-m-5 flex flex-wrap'>
              <div className='w-full p-5 md:relative md:top-12 md:w-1/2'>
                <div className='bg-radial-gradient h-full border border-[var(--grayA3)] from-[var(--iris1)] to-[var(--irisA1)] p-9 transition duration-1000 ease-out hover:-translate-y-3'>
                  <p className='from-iris-9 to-iris-11 mb-4 bg-gradient-to-b bg-clip-text font-mono text-xs uppercase text-transparent text-opacity-100'>
                    Advance reports
                  </p>
                  <h3 className='from-iris-11 to-iris-12 mb-20 bg-gradient-to-br bg-clip-text text-3xl font-medium tracking-tight text-transparent'>
                    Daily analytics help you to understand business growth.
                  </h3>
                  <div>
                    <div className='pr-7'>
                      <div className='rounded-10 shadow-3xl bg-radial-gradient from-iris-a1 to-mauve-a7 relative z-10 border border-[var(--grayA2)] p-5 text-center backdrop-blur'>
                        <p className='text-iris-12 text-shadow-[0_4px_32px_var(--iris12)] mb-3 text-3xl font-medium'>
                          162.9k
                        </p>
                        <p className='text-iris-12 text-shadow-[0_4px_24px_var(--gray10)] mb-3 text-xs font-medium'>
                          Last 7 Days Website Visits
                        </p>
                        <p className='text-gray-9 text-xs'>
                          10% Increase from Last Week
                        </p>
                      </div>
                    </div>
                    <div className='-mt-14 pl-7'>
                      <div className='rounded-10 shadow-3xl bg-mauve-a7 border border-[var(--irisA2)] p-5 text-center opacity-30'>
                        <p className='text-gray-11 text-shadow-[0_4px_24px_var(--gray12)] mb-3 text-3xl font-medium'>
                          162.9k
                        </p>
                        <p className='text-iris-12 text-shadow-[0_4px_24px_var(-iris10)] mb-3 text-xs font-medium'>
                          Last 7 Days Website Visits
                        </p>
                        <p className='text-iris-11 text-xs'>
                          10% Increase from Last Week
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full p-5 md:w-1/2'>
                <div className='bg-radial-gradient from-blue-7 to-blue-9 flex h-full flex-col justify-between overflow-hidden transition duration-1000 ease-out hover:-translate-y-3'>
                  <div className='p-9 pb-0'>
                    <p className='from-blue-9 to-blue-12 mb-4 bg-gradient-to-b bg-clip-text font-mono text-xs uppercase text-transparent text-opacity-100'>
                      Unlimited entertainment
                    </p>
                    <h3 className='from-blue-12 to-blue-10 mb-5 bg-gradient-to-br bg-clip-text text-3xl font-medium tracking-tight text-transparent'>
                      Give a break. Make employee happy in the office.
                    </h3>
                  </div>
                  <img className='mx-auto w-full' src={ProdktCard} alt='' />
                </div>
              </div>
              <div className='w-full p-5 md:relative md:top-12 md:w-1/2'>
                <div className='bg-radial-gradient from-amber-6 to-amber-10 h-full p-9 transition duration-1000 ease-out hover:-translate-y-3'>
                  <p className='from-amber-10 to-amber-12 mb-4 bg-gradient-to-b bg-clip-text font-mono text-xs uppercase text-transparent text-opacity-100'>
                    Fastest growth
                  </p>
                  <h3 className='from-amber-12 to-amber-10 mb-20 bg-gradient-to-tr bg-clip-text text-3xl font-medium tracking-tight text-transparent'>
                    Track results. Share with anyone without taking the hassle.
                  </h3>
                  <img className='mx-auto' src={ProdktCard} alt='' />
                </div>
              </div>
              <div className='w-full p-5 md:w-1/2'>
                <div className='bg-radial-gradient from-slate-1 to-slate-3 h-full border border-[var(--slateA3)] p-9 pb-0 transition duration-1000 ease-out hover:-translate-y-3'>
                  <p className='from-slate-10 to-slate-12 mb-4 bg-gradient-to-b bg-clip-text font-mono text-xs uppercase text-transparent text-opacity-100'>
                    Customer review
                  </p>
                  <h3 className='from-slate-12 to-slate-10 mb-20 bg-gradient-to-tr bg-clip-text text-3xl font-medium tracking-tight text-transparent'>
                    20k+ experts love our products &amp; support.
                  </h3>
                  <img className='mx-auto' src={ProdktCard} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
