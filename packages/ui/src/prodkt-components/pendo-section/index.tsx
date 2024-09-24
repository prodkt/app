import React from 'react'

// import ZendeskLogo from '@/brands/technologies/zendesk'

import {
  // ArrowUpRight,
  Cable,
  // ChevronsLeftRightEllipsis,
  Goal,
  LifeBuoy,
  // ListTree,
  Signature,
  // SwatchBook,
  // Workflow,
} from 'lucide-react'

import PendoLogo from '@/brands/technologies/pendo'

import PendoGraphic from './pendo-graphic'

const PendoSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className='relative flex flex-col items-start justify-center w-full gap-12 px-6 sm:px-8 xl:px-20 xl:flex-row'
    {...props}
  >
    <div className='flex flex-col items-center justify-start h-full gap-5 lg:gap-10 xl:gap-16 basis-full xl:mt-0 lg:mb-auto'>
      <div className='flex flex-col items-start justify-start w-full h-full gap-6 mt-0 mb-auto 2xl:gap-12'>
        <div className='relative w-full flex gap-2 flex-row items-end justify-start flex-nowrap md:w-1/3 xl:w-full ml-0 mr-auto tracking-tighter text-3xl 2xl:text-nowrap md:text-5xl 2xl:text-8xl text-[var(--grayA6)]'>
          Data & Analytics
        </div>
        <PendoLogo className='ml-0 mr-auto' />
      </div>
      <div className='relative flex flex-col items-center justify-center w-full h-auto px-2 xl:px-0'>
        <div className='grid items-start w-full grid-cols-2 gap-3 px-0 py-6 text-xs md:gap-6 lg:grid-cols-4 justify-stretch'>
          <div className='relative flex flex-col items-start justify-start h-full gap-4 pt-2 pb-4 pr-2 2xl:pl-6'>
            <div className='relative flex items-center justify-center aspect-square'>
              <Signature color='var(--accent10)' size='24' />
              <div className='absolute w-full h-full bg-[var(--accent11)] rounded-full blur-xl mix-blend-hard-light left-0 right-0 top-0 bottom-0 opacity-50'></div>
            </div>
            <p className='text-lg font-semibold text-[var(--accent10)] tracking-tighter'>
              Contracts
            </p>
            <p>
              Contract negotiations through full implementation of Pendo into
              existing SaaS.
            </p>
          </div>
          <div className='relative flex flex-col items-start justify-start h-full gap-4 pt-2 pb-4 pr-2 2xl:pl-6'>
            <div className='relative flex items-center justify-center aspect-square'>
              <Goal color='var(--accent10)' size='24' />
              <div className='absolute w-full h-full bg-[var(--accent11)] rounded-full blur-xl mix-blend-hard-light left-0 right-0 top-0 bottom-0 opacity-50'></div>
            </div>
            <p className='text-lg font-semibold text-[var(--accent10)] tracking-tighter'>
              Goal Setting
            </p>
            <p>
              Defined key measurables for department leaders and C-level teams.
            </p>
          </div>
          <div className='relative flex flex-col items-start justify-start h-full gap-4 pt-2 pb-4 pr-2 2xl:pl-6'>
            <div className='relative flex items-center justify-center aspect-square'>
              <LifeBuoy color='var(--accent10)' size='24' />
              <div className='absolute w-full h-full bg-[var(--accent11)] rounded-full blur-xl mix-blend-hard-light left-0 right-0 top-0 bottom-0 opacity-50'></div>
            </div>
            <p className='text-lg font-semibold text-[var(--accent10)] tracking-tighter'>
              Support
            </p>
            <p>Provided internal training and handoff for Support teams.</p>
          </div>
          <div className='relative flex flex-col items-start justify-start h-full gap-4 pt-2 pb-4 pr-2 2xl:pl-6'>
            <div className='relative flex items-center justify-center aspect-square'>
              <Cable color='var(--accent10)' size='24' />
              <div className='absolute w-full h-full bg-[var(--accent11)] rounded-full blur-xl mix-blend-hard-light left-0 right-0 top-0 bottom-0 opacity-50'></div>
            </div>
            <p className='text-lg font-semibold text-[var(--accent10)] tracking-tighter'>
              Integrations
            </p>
            <p>Custom integration into Hubspot & ZenDesk.</p>
          </div>
        </div>
      </div>
    </div>
    <div className='absolute flex-col items-center justify-end order-last hidden w-full mb-0 ml-auto mr-0 -translate-y-[92.5%] lg:-translate-y-[60%] 2xl:-translate-y-1/4 md:-translate-x-[6.25%] xl:translate-x-[4.75%] 2xl:-translate-x-[4.75%] md:flex'>
      <div className='relative right-0 left-auto flex items-center justify-center w-full h-auto ml-auto mr-0'>
        <div className='relative right-0 left-auto w-1/2 ml-auto mr-0 2xl:w-1/3 clip-container rounded-2xl'>
          <PendoGraphic className='clipImage w-full -translate-x-[30%]' />
          <div className='absolute top-[calc(50%_+_10%)] right-0 w-[calc(80%_-_10%)] min-h-[calc(50%_-_10%)] hidden md:flex flex-col gap-2 lg:gap-4 xl:mt-0'>
            <p className='text-lg md:leading-tight lg:leading-normal font-medium xl:text-2xl 2xl:text-3xl text-balance md:tracking-tighter text-[var(--accent9)] break-keep w-full'>
              From contract to implementation
            </p>
            <p className='text-balance text-[var(--accent12)] text-xs lg:text-sm font-normal w-full lg:line-clamp-2'>
              Vast experience implementing, and utilizing Pendo to track and
              report business goals and objectives.
            </p>
          </div>
          <svg
            className='absolute bottom-0 right-0 w-full h-full origin-bottom-right rounded-2xl'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Image Mask</title>
            <defs>
              <mask id='inverseMask'>
                <rect width='100%' height='100%' fill='white' ry='16' rx='16' />
                <rect
                  width='50%'
                  height='50%'
                  x='55%'
                  y='55%'
                  fill='black'
                  ry='16'
                  rx='20'
                />
                <rect
                  width='50.25%'
                  height='10.25%'
                  x='5%'
                  y='90%'
                  fill='black'
                />
                <rect
                  width='55%'
                  height='100%'
                  x='0%'
                  y='0%'
                  fill='white'
                  ry='16'
                  rx='20'
                />
                <rect
                  width='50.25%'
                  height='10.25%'
                  x='50%'
                  y='45%'
                  fill='black'
                />
                <rect
                  width='100%'
                  height='55.375%'
                  x='0%'
                  y='0%'
                  fill='white'
                  ry='16'
                  rx='20'
                />
              </mask>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </section>
))

PendoSection.displayName = 'PendoSection'

export { PendoSection }
