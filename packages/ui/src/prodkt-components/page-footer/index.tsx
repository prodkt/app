/* eslint-disable jsdoc/require-returns */

import { ProdktLogo } from '@/brands/prodkt'
import { SocialMedia } from '@/prodkt-components/social-media'

/**
 *
 */
export default function PageFooter() {
  return (
    <section className='w-full bg-transparent'>
      <div className='flex flex-row flex-wrap'>
        <div className='w-full bg-[var(--ghost-aa2)] gradientMask-to-b-10 px-6 pt-10 sm:w-1/2 sm:pt-10 md:w-4/12 lg:w-3/12 lg:pb-10 lg:pl-12'>
          <div className='top-12 mx-auto max-w-md sm:sticky lg:relative'>
            <a className='mb-12 inline-block text-3xl' href='/'>
              <ProdktLogo className='h-9' />
            </a>
            <div className='mb-12 text-sm'>
              <p>Working remote</p>
              <p>Las Vegas, Nevada</p>
              <p>Boise, Idaho</p>
            </div>
            <div className='mb-16 flex md:mb-24'>
              <SocialMedia variant='grid' />
            </div>
          </div>
        </div>
        <div className='lg:-mx-4 w-full bg-[var(--ghost-aa2)] sm:bg-[var(--grayA1)] px-6 sm:px-12 py-4 sm:w-1/2 sm:py-10 md:w-7/12 lg:w-9/12 lg:py-20 lg:pl-16'>
          <div className='mt-2 flex flex-wrap border-b-4 border-[var(--ghost-a1)] pb-10 lg:pl-0'>
            <div className='w-1/2 px-4 sm:mb-10 sm:w-full md:w-1/2 lg:mb-0 lg:w-1/4'>
              <h3 className='mb-8 font-mono text-xs uppercase tracking-widest text-[var(--gray8)]'>
                Exploration
              </h3>
              <ul className='flex flex-col gap-px'>
                <li className='ml-[-16px] text-sm w-full flex flex-row items-stretch justify-stretch'>
                  <a
                    className='underline-offset-[12px] underline flex flex-row items-center py-2 px-4 justify-start text-[var(--grayA10)] hover:text-[var(--grayA12)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'
                    href='/flows'
                  >
                    Flows
                  </a>
                </li>
                <li className='ml-[-16px] text-sm w-full flex flex-row items-stretch justify-stretch'>
                  <a
                    className='underline-offset-[12px] underline flex flex-row items-center py-2 px-4 justify-start text-[var(--grayA10)] hover:text-[var(--grayA12)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'
                    href='/codeblocks'
                  >
                    Codeblocks
                  </a>
                </li>
                <li className='ml-[-16px] text-sm w-full flex flex-row items-stretch justify-stretch'>
                  <a
                    className='underline-offset-[12px] underline flex flex-row items-center py-2 px-4 justify-start text-[var(--grayA10)] hover:text-[var(--grayA12)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'
                    href='/files'
                  >
                    File Manager
                  </a>
                </li>
                <li className='ml-[-16px] text-sm w-full flex flex-row items-stretch justify-stretch'>
                  <a
                    className='underline-offset-[12px] underline flex flex-row items-center py-2 px-4 justify-start text-[var(--grayA10)] hover:text-[var(--grayA12)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'
                    href='/projects'
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-1/2 px-4 sm:mb-10 sm:w-full md:w-1/2 lg:mb-0 lg:w-1/4'>
              <h3 className='mb-8 font-mono text-xs uppercase tracking-widest text-[var(--gray8)]'>
                Bryan Funk
              </h3>
              <ul className='flex flex-col gap-px'>
                <li className='ml-[-16px] text-sm w-full flex flex-row items-stretch justify-stretch'>
                  <a
                    className='underline-offset-[12px] underline flex flex-row items-center py-2 px-4 justify-start text-[var(--grayA10)] hover:text-[var(--grayA12)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'
                    href='/work'
                  >
                    Work
                  </a>
                </li>
                <li className='ml-[-16px] text-sm w-full flex flex-row items-stretch justify-stretch'>
                  <a
                    className='underline-offset-[12px] underline flex flex-row items-center py-2 px-4 justify-start text-[var(--grayA10)] hover:text-[var(--grayA12)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'
                    href='/blog'
                  >
                    Blog
                  </a>
                </li>
                <li className='ml-[-16px] text-sm w-full flex flex-row items-stretch justify-stretch'>
                  <a
                    className='underline-offset-[12px] underline flex flex-row items-center py-2 px-4 justify-start text-[var(--grayA10)] hover:text-[var(--grayA12)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'
                    href='/work-history'
                  >
                    Work History
                  </a>
                </li>
                <li className='ml-[-16px] text-sm w-full flex flex-row items-stretch justify-stretch'>
                  <a
                    className='underline-offset-[12px] underline flex flex-row items-center py-2 px-4 justify-start text-[var(--grayA10)] hover:text-[var(--grayA12)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'
                    href='/work-history'
                  >
                    Resume
                  </a>
                </li>
                <li className='ml-[-16px] text-sm w-full flex flex-row items-stretch justify-stretch'>
                  <a
                    className='underline-offset-[12px] underline flex flex-row items-center py-2 px-4 justify-start text-[var(--grayA10)] hover:text-[var(--grayA12)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'
                    href='/type-one'
                  >
                    Type 1 Diabetes
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-1/2 px-4 sm:mb-10 sm:w-full md:w-1/2 lg:mb-0 lg:w-1/4'>
              <h3 className='mb-8 font-mono text-xs uppercase tracking-widest text-[var(--gray8)]'>
                Prodkt
              </h3>
              <ul className='flex flex-col gap-px'>
                <li className='ml-[-16px] text-sm w-full flex flex-row items-stretch justify-stretch'>
                  <a
                    className='underline-offset-[12px] underline flex flex-row items-center py-2 px-4 justify-start text-[var(--grayA10)] hover:text-[var(--grayA12)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'
                    href='/about'
                  >
                    What is Prodkt?
                  </a>
                </li>
                <li className='ml-[-16px] text-sm w-full flex flex-row items-stretch justify-stretch'>
                  <a
                    className='underline-offset-[12px] underline flex flex-row items-center py-2 px-4 justify-start text-[var(--grayA10)] hover:text-[var(--grayA12)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'
                    href='https://ui.prodkt.cloud'
                  >
                    Component Library
                  </a>
                </li>
                <li className='ml-[-16px] text-sm w-full flex flex-row items-stretch justify-stretch'>
                  <a
                    className='underline-offset-[12px] underline flex flex-row items-center py-2 px-4 justify-start text-[var(--grayA10)] hover:text-[var(--grayA12)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'
                    href='/roadmaps'
                  >
                    Roadmaps
                  </a>
                </li>
                <li className='ml-[-16px] text-sm w-full flex flex-row items-stretch justify-stretch'>
                  <a
                    className='underline-offset-[12px] underline flex flex-row items-center py-2 px-4 justify-start text-[var(--grayA10)] hover:text-[var(--grayA12)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'
                    href='/pricing'
                  >
                    Pricing
                  </a>
                </li>
                <li className='ml-[-16px] text-sm w-full flex flex-row items-stretch justify-stretch'>
                  <a
                    className='underline-offset-[12px] underline flex flex-row items-center py-2 px-4 justify-start text-[var(--grayA10)] hover:text-[var(--grayA12)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'
                    href='/docs'
                  >
                    Documentation
                  </a>
                </li>
                <li className='ml-[-16px] text-sm w-full flex flex-row items-stretch justify-stretch'>
                  <a
                    className='underline-offset-[12px] underline flex flex-row items-center py-2 px-4 justify-start text-[var(--grayA10)] hover:text-[var(--grayA12)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'
                    href='/'
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div className='px-4 sm:w-1/2 sm:w-full md:w-1/2 lg:w-full'>
              <h3 className='mb-8 font-mono text-xs uppercase tracking-widest text-[var(--gray8)]'>
                Contact Me
              </h3>
              <ul className='flex flex-col xl:flex-row gap-px xl:gap-8'>
                <li className='mb-6'>
                  <h4 className='flex flex-row items-center py-2 px-0 text-sm justify-start text-[var(--grayA10)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'>
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
                  <h4 className='flex flex-row items-center py-2 px-0 text-sm justify-start text-[var(--grayA10)] transition-colors decoration-[var(--grayA1)] duration-500 hover:decoration-[var(--grayA6)] w-full'>
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
            <p className='font-mono text-xs uppercase tracking-widest text-[var(--ghost-a2)]'>
              © Copyright 2024 Bryan Funk
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
