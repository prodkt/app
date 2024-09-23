import React from 'react'

export default function IndexSectionFeatures3() {
  return (
    <React.Fragment>
      <>
        <section className='relative pt-24 pb-48 overflow-hidden bg-black'>
          <img
            className='absolute top-0 right-0'
            src='gradia-assets/elements/features/radial1.svg'
            alt
          />
          <img
            className='absolute bottom-0 left-0'
            src='gradia-assets/elements/features/radial2.svg'
            alt
          />
          <div className='relative z-10 container mx-auto px-4'>
            <div className='md:max-w-3xl md:mx-auto'>
              <h2 className='mb-20 max-w-xl font-heading font-bold text-6xl sm:text-7xl text-white'>
                Recommended by world-class companies.
              </h2>
              <div className='flex flex-wrap -m-5'>
                <div className='w-full md:w-1/2 md:relative md:top-12 p-5'>
                  <div className='h-full p-9 transform hover:-translate-y-3 bg-gradient-orange2 rounded-2xl transition ease-out duration-1000'>
                    <p className='mb-4 font-heading text-base text-white text-opacity-70'>
                      Advance reports
                    </p>
                    <h3 className='mb-20 font-heading font-bold text-white text-3xl'>
                      Daily analytics help you to understand business growth.
                    </h3>
                    <div>
                      <div className='pr-7'>
                        <div className='relative z-10 p-5 text-center bg-white rounded-10 shadow-3xl'>
                          <p className='mb-3 text-3xl font-bold text-black'>
                            162.9k
                          </p>
                          <p className='mb-3 text-xs font-bold text-black'>
                            Last 7 Days Website Visits
                          </p>
                          <p className='text-xs text-gray-500'>
                            10% Increase from Last Week
                          </p>
                        </div>
                      </div>
                      <div className='-mt-14 pl-7'>
                        <div className='p-5 text-center bg-white opacity-30 rounded-10 shadow-3xl'>
                          <p className='mb-3 text-3xl font-bold text-black'>
                            162.9k
                          </p>
                          <p className='mb-3 text-xs font-bold text-black'>
                            Last 7 Days Website Visits
                          </p>
                          <p className='text-xs text-gray-500'>
                            10% Increase from Last Week
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-1/2 p-5'>
                  <div className='flex flex-col justify-between h-full transform hover:-translate-y-3 overflow-hidden bg-gradient-blue rounded-2xl transition ease-out duration-1000'>
                    <div className='p-9 pb-0'>
                      <p className='mb-4 font-heading text-base text-white text-opacity-70'>
                        Unlimited entertainment
                      </p>
                      <h3 className='mb-5 font-heading font-bold text-white text-3xl'>
                        Give a break. Make employee happy in the office.
                      </h3>
                    </div>
                    <img
                      className='mx-auto w-full'
                      src='gradia-assets/images/features/headphones.png'
                      alt
                    />
                  </div>
                </div>
                <div className='w-full md:w-1/2 md:relative md:top-12 p-5'>
                  <div className='h-full p-9 transform hover:-translate-y-3 bg-gradient-purple rounded-2xl transition ease-out duration-1000'>
                    <p className='mb-4 font-heading text-base text-white text-opacity-70'>
                      Fastest growth
                    </p>
                    <h3 className='mb-20 font-heading font-bold text-white text-3xl'>
                      Track results. Share with anyone without taking the
                      hassle.
                    </h3>
                    <img
                      className='mx-auto'
                      src='gradia-assets/images/features/card.png'
                      alt
                    />
                  </div>
                </div>
                <div className='w-full md:w-1/2 p-5'>
                  <div className='h-full p-9 pb-0 bg-gradient-violet2 transform hover:-translate-y-3 rounded-2xl transition ease-out duration-1000'>
                    <p className='mb-4 font-heading text-base text-white text-opacity-70'>
                      Customer review
                    </p>
                    <h3 className='mb-20 font-heading font-bold text-white text-3xl'>
                      20k+ experts love our products &amp; support.
                    </h3>
                    <img
                      className='mx-auto'
                      src='gradia-assets/images/features/comments.png'
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  )
}
