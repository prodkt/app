/* eslint-disable jsdoc/require-returns */

import { ProdktLogo } from '../../brands/prodkt'
import { SocialMedia } from '../social-media'

/**
 *
 */
function PageFooter() {
  return (
    <section className='w-full bg-transparent'>
      <div className='flex flex-row flex-wrap'>
        <div className='w-full px-6 pt-10 bg-transparent sm:w-1/2 sm:pt-10 md:w-4/12 lg:w-3/12 lg:pb-10 lg:pl-12'>
          <div className='max-w-md mx-auto top-12 sm:sticky lg:relative'>
            <a className='inline-block mb-12 text-3xl' href='/'>
              <ProdktLogo className='h-9' />
            </a>
            <div className='mb-12 text-xs'>
              <p>Working remote</p>
              <p>Las Vegas, Nevada</p>
              <p>Boise, Idaho</p>
            </div>
            <div className='flex mb-16 md:mb-24'>
              <SocialMedia variant='grid' />
            </div>
          </div>
        </div>
        <div className='w-full px-6 py-4 sm:w-1/2 sm:py-10 md:w-7/12 lg:w-9/12 lg:py-20 lg:pl-36'>
          <div className='-mx-4 mt-2 flex flex-wrap border-b border-[var(--grayA3)] pb-10'>
            <div className='w-1/2 px-4 sm:mb-10 sm:w-full md:w-1/2 lg:mb-0 lg:w-1/4'>
              <h3 className='mb-8 font-mono text-xs uppercase tracking-widest text-[var(--gray8)]'>
                Exploration
              </h3>
              <ul>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/flows'>
                    Flows
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/codeblocks'>
                    Codeblocks
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/files'>
                    File Manager
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/projects'>
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-1/2 px-4 sm:mb-10 sm:w-full md:w-1/2 lg:mb-0 lg:w-1/4'>
              <h3 className='mb-8 font-mono text-xs uppercase tracking-widest text-[var(--gray8)]'>
                Bryan Funk
              </h3>
              <ul>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/work'>
                    Work
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/blog'>
                    Blog
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/'>
                    Work History
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/'>
                    Resume
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/'>
                    Type 1 Diabetes
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-1/2 px-4 sm:mb-10 sm:w-full md:w-1/2 lg:mb-0 lg:w-1/4'>
              <h3 className='mb-8 font-mono text-xs uppercase tracking-widest text-[var(--gray8)]'>
                Prodkt
              </h3>
              <ul>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/about'>
                    What is Prodkt?
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/'>
                    Component Library
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/'>
                    Roadmap
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/'>
                    Pricing
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/docs'>
                    Documentation
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/'>
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div className='px-4 sm:w-1/2 sm:w-full md:w-1/2 lg:w-1/4'>
              <h3 className='mb-8 font-mono text-xs uppercase tracking-widest text-[var(--gray8)]'>
                Contact Me
              </h3>
              <ul>
                <li className='mb-6'>
                  <h4 className='mb-2 text-xs'>Mobile</h4>
                  <a
                    className='text-xs text-[var(--accent11)] hover:underline dark:text-[var(--accent10)]'
                    href='/'
                  >
                    +1 208 954 4981
                  </a>
                </li>
                <li className='mb-6'>
                  <h4 className='mb-2 text-xs'>Email</h4>
                  <a
                    className='text-xs  text-[var(--accent11)] hover:underline dark:text-[var(--accent10)]'
                    href='mailto:bryan.funk@prodkt.cloud'
                  >
                    bryan.funk@prodkt.cloud
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='relative pb-32 mt-8 lg:pb-0'>
            <p className='font-mono text-xs tracking-widest uppercase'>
              © Copyright 2024 Bryan Funk
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { PageFooter }
