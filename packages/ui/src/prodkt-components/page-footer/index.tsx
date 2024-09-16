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
        <div className='w-full bg-transparent px-6 pb-36 pt-20 md:w-5/12 lg:w-3/12'>
          <div className='mx-auto max-w-xs'>
            <a className='mb-12 inline-block text-3xl' href='/'>
              <ProdktLogo className='h-9' />
            </a>
            <div className='mb-12 text-xs'>
              <p>Working remote</p>
              <p>Las Vegas, Nevada</p>
              <p>Boise, Idaho</p>
            </div>
            <div className='mb-16 flex md:mb-24'>
              <SocialMedia variant='grid' />
            </div>
          </div>
        </div>
        <div className='w-full px-6 py-20 md:w-7/12 lg:w-9/12 lg:pl-40'>
          <div className='-mx-4 mt-16 flex flex-wrap border-b pb-20'>
            <div className='mb-10 w-full px-4 md:w-1/2 lg:mb-0 lg:w-1/3'>
              <h3 className='mb-8 font-mono text-xs uppercase tracking-widest text-[var(--gray8)]'>
                Information
              </h3>
              <ul>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/flows'>
                    User Flows
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/blog'>
                    Blog
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/work'>
                    Work Showcase
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/projects'>
                    Projects
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/codeblocks'>
                    Codeblocks
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/documentation'>
                    Documentation
                  </a>
                </li>
                <li className='text-xs'>
                  <a className='hover:underline' href='/changelog'>
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div className='mb-10 w-full px-4 md:w-1/2 lg:mb-0 lg:w-1/3'>
              <h3 className='mb-8 font-mono text-xs uppercase tracking-widest text-[var(--gray8)]'>
                Customer Service
              </h3>
              <ul>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/'>
                    Return an order
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/'>
                    Search Terms
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/'>
                    Advanced Search
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/'>
                    Orders and Returns
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/'>
                    FAQs
                  </a>
                </li>
                <li className='mb-6 text-xs'>
                  <a className='hover:underline' href='/'>
                    Store Location
                  </a>
                </li>
                <li className='text-xs'>
                  <a className='hover:underline' href='/'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4'>
              <h3 className='mb-8 font-mono text-xs uppercase tracking-widest text-[var(--gray8)]'>
                Contact Me
              </h3>
              <ul>
                <li className='mb-6'>
                  <h4 className='mb-2 text-xs'>Mobile</h4>
                  <a
                    className='text-xs text-[var(--accent9)] hover:underline'
                    href='/'
                  >
                    +1 208 954 4981
                  </a>
                </li>
                <li className='mb-6'>
                  <h4 className='mb-2 text-xs'>Email</h4>
                  <a
                    className='text-xs text-[var(--accent9)] hover:underline'
                    href='mailto:bryan.funk@prodkt.cloud'
                  >
                    bryan.funk@prodkt.cloud
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='relative mt-8 pb-32 lg:pb-0'>
            <p className='font-mono text-xs uppercase tracking-widest'>
              © Copyright 2024 Bryan Funk
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { PageFooter }
