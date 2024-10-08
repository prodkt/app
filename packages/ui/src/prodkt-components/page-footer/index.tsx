/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */

import { ProdktLogo } from '@/brands/prodkt'
import { Badge } from '@/primitives/badge'
import { SocialMedia } from '@/prodkt-components/social-media'

/**
 *
 */
export default function PageFooter() {
  return (
    <section className='w-full bg-transparent'>
      <div className='flex flex-row flex-wrap'>
        <div className='gradientMask-to-b-10 w-full bg-[var(--ghost-aa2)] px-8 pt-10 sm:w-1/2 sm:pt-16 md:w-4/12 lg:w-3/12 lg:pb-10 lg:pl-12'>
          <div className='top-4 mx-auto max-w-md sm:sticky lg:relative'>
            <a className='mb-6 inline-block text-3xl' href='/'>
              <ProdktLogo className='h-9' />
            </a>
            <div className='mb-4 flex md:mb-24'>
              <SocialMedia variant='grid' />
            </div>
          </div>
        </div>
        <div className='w-full text-nowrap bg-[var(--ghost-aa2)] px-6 py-4 sm:w-1/2 sm:bg-[var(--grayA1)] sm:px-12 sm:py-10 md:w-7/12 lg:-mx-4 lg:w-9/12 lg:py-20  lg:pl-16'>
          <div className='mt-2 flex flex-wrap gap-y-4 border-b-4 border-[var(--grayA4)] pb-10 lg:pl-0'>
            <div className='w-1/2 px-4 sm:w-full md:w-1/2 lg:mb-0 lg:w-1/3'>
              <h3 className='mb-2 font-mono text-xs uppercase tracking-widest text-[var(--gray8)]'>
                Exploration
              </h3>
              <ul className='flex flex-col gap-px'>
                <li className='ml-[-16px] flex w-full flex-row items-stretch justify-stretch text-sm'>
                  <a
                    className='flex w-full flex-row items-center justify-start px-4 py-2 text-[var(--grayA10)] underline decoration-[var(--grayA1)] underline-offset-[12px] transition-colors duration-500 hover:text-[var(--grayA12)] hover:decoration-[var(--grayA6)]'
                    href='/flows'
                  >
                    Flows
                  </a>
                </li>
                <li className='ml-[-16px] flex w-full flex-row items-stretch justify-stretch text-sm'>
                  <a
                    className='flex w-full flex-row items-center justify-start px-4 py-2 text-[var(--grayA10)] underline decoration-[var(--grayA1)] underline-offset-[12px] transition-colors duration-500 hover:text-[var(--grayA12)] hover:decoration-[var(--grayA6)]'
                    href='/codeblocks'
                  >
                    Codeblocks
                  </a>
                </li>
                <li className='ml-[-16px] flex w-full flex-row items-stretch justify-stretch text-sm'>
                  <a
                    className='flex w-full flex-row items-center justify-start px-4 py-2 text-[var(--grayA10)] underline decoration-[var(--grayA1)] underline-offset-[12px] transition-colors duration-500 hover:text-[var(--grayA12)] hover:decoration-[var(--grayA6)]'
                    href='/files'
                  >
                    File Manager
                  </a>
                </li>
                <li className='ml-[-16px] flex w-full flex-row items-stretch justify-stretch text-sm'>
                  <a
                    className='flex w-full flex-row items-center justify-start px-4 py-2 text-[var(--grayA10)] underline decoration-[var(--grayA1)] underline-offset-[12px] transition-colors duration-500 hover:text-[var(--grayA12)] hover:decoration-[var(--grayA6)]'
                    href='/projects'
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-1/2 px-4 sm:w-full md:w-1/2 lg:mb-0 lg:w-1/3'>
              <h3 className='mb-2 font-mono text-xs uppercase tracking-widest text-[var(--gray8)]'>
                Bryan Funk
              </h3>
              <ul className='flex flex-col gap-px'>
                <li className='ml-[-16px] flex w-full flex-row items-stretch justify-stretch text-sm'>
                  <a
                    className='flex w-full flex-row items-center justify-start px-4 py-2 text-[var(--grayA10)] underline decoration-[var(--grayA1)] underline-offset-[12px] transition-colors duration-500 hover:text-[var(--grayA12)] hover:decoration-[var(--grayA6)]'
                    href='/work'
                  >
                    Work
                  </a>
                </li>
                <li className='ml-[-16px] flex w-full flex-row items-stretch justify-stretch text-sm'>
                  <a
                    className='flex w-full flex-row items-center justify-start px-4 py-2 text-[var(--grayA10)] underline decoration-[var(--grayA1)] underline-offset-[12px] transition-colors duration-500 hover:text-[var(--grayA12)] hover:decoration-[var(--grayA6)]'
                    href='/blog'
                  >
                    Blog
                  </a>
                </li>
                <li className='ml-[-16px] flex w-full flex-row items-stretch justify-stretch text-sm'>
                  <a
                    className='flex w-full flex-row items-center justify-start px-4 py-2 text-[var(--grayA10)] underline decoration-[var(--grayA1)] underline-offset-[12px] transition-colors duration-500 hover:text-[var(--grayA12)] hover:decoration-[var(--grayA6)]'
                    href='/work-history'
                  >
                    Work History
                  </a>
                </li>
                <li className='ml-[-16px] flex w-full flex-row items-stretch justify-stretch text-sm'>
                  <a
                    className='flex w-full flex-row items-center justify-start px-4 py-2 text-[var(--grayA10)] underline decoration-[var(--grayA1)] underline-offset-[12px] transition-colors duration-500 hover:text-[var(--grayA12)] hover:decoration-[var(--grayA6)]'
                    href='/work-history'
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-1/2 px-4 sm:w-full md:w-1/2 lg:mb-0 lg:w-1/3'>
              <h3 className='mb-2 font-mono text-xs uppercase tracking-widest text-[var(--gray8)]'>
                Prodkt
              </h3>
              <ul className='flex flex-col gap-px'>
                <li className='ml-[-16px] flex w-full flex-row items-stretch justify-stretch text-sm'>
                  <a
                    className='flex w-full flex-row items-center justify-start px-4 py-2 text-[var(--grayA10)] underline decoration-[var(--grayA1)] underline-offset-[12px] transition-colors duration-500 hover:text-[var(--grayA12)] hover:decoration-[var(--grayA6)]'
                    href='https://ui.prodkt.cloud'
                  >
                    Component Library
                  </a>
                </li>
                <li className='ml-[-16px] flex w-full flex-row items-stretch justify-stretch text-sm'>
                  <div className='flex flex-row items-center justify-start px-4 py-2 text-[var(--grayA10)] underline decoration-[var(--grayA1)] underline-offset-[12px] transition-colors duration-500 hover:text-[var(--grayA12)] hover:decoration-[var(--grayA6)]'>
                    Documentation
                  </div>
                  <Badge variant='outline'>Coming Soon</Badge>
                </li>
                <li className='ml-[-16px] flex w-full flex-row items-stretch justify-stretch text-sm'>
                  <div className='flex flex-row items-center justify-start px-4 py-2 text-[var(--grayA10)] underline decoration-[var(--grayA1)] underline-offset-[12px] transition-colors duration-500 hover:text-[var(--grayA12)] hover:decoration-[var(--grayA6)]'>
                    Workspaces
                  </div>
                  <Badge variant='outline'>Coming Soon</Badge>
                </li>
                <li className='ml-[-16px] flex w-full flex-row items-stretch justify-stretch text-sm'>
                  <div className='flex flex-row items-center justify-start px-4 py-2 text-[var(--grayA10)] underline decoration-[var(--grayA1)] underline-offset-[12px] transition-colors duration-500 hover:text-[var(--grayA12)] hover:decoration-[var(--grayA6)]'>
                    API
                  </div>
                  <Badge variant='outline'>Coming Soon</Badge>
                </li>
              </ul>
            </div>
            <div className='mt-6 flex w-full flex-col px-4'>
              <h3 className='mb-2 font-mono text-xs uppercase tracking-widest text-[var(--gray8)]'>
                Contact Me
              </h3>
              <ul className='flex flex-col gap-px md:flex-row md:gap-8'>
                <li className='mb-6'>
                  <h4 className='flex w-full flex-row items-center justify-start px-0 py-2 text-sm text-[var(--grayA10)] decoration-[var(--grayA1)] transition-colors duration-500 hover:decoration-[var(--grayA6)]'>
                    Mobile
                  </h4>
                  <a
                    className='text-sm text-[var(--accent11)] underline dark:text-[var(--accent10)]'
                    href='/'
                  >
                    +1 208 954 4981
                  </a>
                </li>
                <li className='mb-6'>
                  <h4 className='flex w-full flex-row items-center justify-start px-0 py-2 text-sm text-[var(--grayA10)] decoration-[var(--grayA1)] transition-colors duration-500 hover:decoration-[var(--grayA6)]'>
                    Email
                  </h4>
                  <a
                    className='text-sm  text-[var(--accent11)] underline dark:text-[var(--accent10)]'
                    href='mailto:bryan.funk@prodkt.cloud'
                  >
                    bryan.funk@prodkt.cloud
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='relative mt-4 pb-12 lg:pb-0'>
            <p className='font-mono text-xs uppercase tracking-widest text-[var(--grayA7)]'>
              © Copyright 2024 Bryan Funk
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
