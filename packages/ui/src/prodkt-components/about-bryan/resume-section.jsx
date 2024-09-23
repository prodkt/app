/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */

// import type React from 'react'

import { CloudDownload } from 'lucide-react'

import BryanResume from '@prodkt/assets/resume/bryan-funk-resume-promo.webp'

/**
 *
 */
export default function ResumeSection() {
  return (
    <div className='h-auto w-full px-1 py-4 md:py-16 lg:py-28'>
      <div className='relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-4 lg:flex-row'>
        <div className='relative flex basis-1/3 flex-col items-center justify-center gap-5 lg:justify-start xl:items-start'>
          <h5 className='text-center text-6xl font-medium leading-none tracking-tight text-[var(--gray11)] lg:text-left'>
            A leave behind.
          </h5>
          <p className='leading-none tracking-normal text-[var(--gray9)] text-balance'>
            Print out for reference or for someone else in the office.
          </p>
          <a
            className='flex flex-row items-start justify-center gap-2'
            href='/resume/BryanFunk_CV-Resume_v2_001_reduced.pdf'
          >
            <CloudDownload
              strokeWidth={2.5}
              className='inset-0 z-[1] m-auto size-6 fill-[var(--grayA1)] stroke-[var(--red10)]'
            />
            <p className='text-nowrap text-right font-medium leading-7 tracking-tighter underline decoration-[var(--red10)] underline-offset-8'>
              Download Resume
            </p>
          </a>
        </div>
        <div className='relative flex basis-2/3 flex-col items-center justify-start'>
          <a
            href='/assets/downloads/BryanFunk_CV-Resume_v2_001_reduced.pdf'
            className='absolute z-[2] flex size-full flex-col items-center justify-center'
          >
            <div className='flex flex-row items-center justify-center gap-4'>
              <p className='text-right text-3xl font-medium leading-7 tracking-tighter text-[var(--gray1)] dark:text-[var(--gray12)]'>
                Download
                <br />
                Resume
              </p>
              <CloudDownload
                strokeWidth={2.5}
                className='inset-0 z-[1] m-auto -ml-20 size-48 fill-[var(--grayA1)] stroke-[var(--redA6)] opacity-100 mix-blend-overlay brightness-200 dark:brightness-50'
              />
            </div>
          </a>
          <img
            src={BryanResume}
            alt='Bryan Funk Resume'
            className='h-auto w-full select-none rounded-3xl border ring saturate-0'
          />
        </div>
      </div>
    </div>
  )
}
