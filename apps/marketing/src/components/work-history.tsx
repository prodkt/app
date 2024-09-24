/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */

import { useEffect, useState } from 'react'

import type { Database } from '@/database.types'
import type { PostgrestError } from '@supabase/supabase-js'

import {
  DesignBoiseLogo,
  ImpLogo,
  LumenLogo,
  TovutiLogo,
} from '@prodkt/ui/brands/employers'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@prodkt/ui/primitives/tabs'

import { supabase } from '@/supabase'
import { formatDate } from '@/utils/formatDate'

interface WorkItem {
  secondary_heading?: string
  secondary_subheading?: string
  // highlights?: Highlight[]; // Use the proper type here
  highlights?: { id: string; highlight?: string }[] // Ensure your highlight has the proper structure
  logo: string | null | boolean
  name?: string
  position?: string
  position_subheading?: string
  start_date: string | null
  end_date: string | null
}

type Resumes = Database['public']['Tables']['resumes']['Row'] & {
  id: string
  work: WorkItem[] // Declare it as an array of WorkItem objects
}

/**
 *
 */
export function WorkHistory() {
  const [resumes, setResumes] = useState<Resumes[]>([])
  const [error, setError] = useState<PostgrestError | null>(null)

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const { data } = await supabase
          .from('resumes')
          .select(
            '*, status,title,label,image,email,phone,url,summary,work,skills',
          )
          .eq('title', 'Bryan Funk')
          .eq('status', 'published')

        setResumes(data as Resumes[])
      } catch (error) {
        setError(error as PostgrestError)
      }
    }

    fetchResumes().catch((error: unknown) => {
      console.log('error', error)
      setError(error as PostgrestError | null)
    })
    console.log(fetchResumes)
  }, [])

  return (
    <div className='relative mx-auto flex h-auto flex-wrap place-content-stretch place-items-stretch items-start justify-start gap-2 py-2 md:py-12 lg:gap-20 lg:py-16 xl:max-w-[75dvw]'>
      {error && <p>Error fetching Resume data: {error.message}</p>}
      {resumes.map((resume) => {
        if (!Array.isArray(resume.work)) {
          return null
        }

        // Sort work items by end_date in descending order
        const sortedWork = resume.work.toSorted((a, b) => {
          const dateA = new Date(formatDate(a.start_date))
          const dateB = new Date(formatDate(b.end_date))
          return dateB.getTime() - dateA.getTime()
        })

        return sortedWork.map((workItem, index) => (
          <div
            key={`work-${resume.id}-${index as unknown as string}`}
            id='work'
            className='sticky top-1 z-[1] flex size-full snap-y snap-mandatory  flex-col place-content-start place-items-start items-start justify-start rounded-2xl shadow-2xl xl:top-24'
          >
            <div className='flex max-h-[calc(100dvh-210px)]  min-h-[calc(100dvh-210px)] snap-start flex-col items-center justify-stretch rounded-2xl border bg-[var(--gray2)] p-0 '>
              <div className=' z-[1] flex h-[90px] w-full flex-col flex-wrap items-center justify-between gap-0 rounded-t-2xl border-b bg-gradient-to-b from-[var(--gray1)] to-transparent pl-5 sm:min-h-[120px] sm:flex-row sm:justify-start sm:pl-8 md:justify-center md:pl-16'>
                <div className='relative mx-0 flex h-full w-auto flex-row items-center justify-center gap-0 lg:justify-start xl:justify-start '>
                  {!workItem.logo ? (
                    <p className='px-1 text-xl font-normal tracking-tighter '>
                      {workItem.name}
                    </p>
                  ) : null}
                  {workItem.logo && workItem.name === 'Tovuti LMS' ? (
                    <TovutiLogo className='h-8 max-h-10 max-w-20 sm:max-w-32' />
                  ) : null}
                  {workItem.logo && workItem.name === 'Design Boise' ? (
                    <DesignBoiseLogo className='h-8 max-h-10 max-w-20 sm:max-w-32' />
                  ) : null}
                  {workItem.logo &&
                  workItem.name === 'International Minute Press' ? (
                    <ImpLogo className='h-8 max-h-10 max-w-20 sm:max-w-32' />
                  ) : null}
                  {workItem.logo && workItem.name === 'Lumen Creative' ? (
                    <LumenLogo className='h-8 max-h-10 max-w-20 sm:max-w-32' />
                  ) : null}
                </div>
                <div className='inset-y-0 my-0 flex h-full w-auto grow flex-col items-end justify-center gap-1 px-2 md:py-2 lg:px-8'>
                  <p className='lg:text-md px-1 text-xs font-normal leading-none tracking-normal sm:text-sm'>
                    {workItem.position}
                  </p>
                  <p className='bg-gradient-to-r from-[var(--grayA9)] to-[var(--grayA2)] bg-clip-text px-1 text-xs leading-none tracking-normal text-transparent'>
                    {workItem.position_subheading}
                  </p>
                </div>
                {workItem.secondary_heading &&
                workItem.secondary_heading.length > 0 ? (
                  <div className='inset-y-0 my-0 hidden h-full w-auto grow flex-col items-end justify-center gap-1 p-2 md:flex lg:px-8'>
                    <p className='text-balance px-1 text-sm font-normal leading-none tracking-normal'>
                      {workItem.secondary_heading}
                    </p>
                    {workItem.secondary_subheading &&
                    workItem.secondary_subheading.length > 0 ? (
                      <p className='bg-gradient-to-r from-[var(--grayA9)] to-[var(--grayA2)] bg-clip-text px-1 text-xs leading-none tracking-normal text-transparent'>
                        {workItem.secondary_subheading}
                      </p>
                    ) : null}
                  </div>
                ) : null}
                <div className=' h-full flex-col items-start justify-center gap-0 p-0 '>
                  <div className='flex h-full flex-row items-center justify-center gap-0 rounded-tr-2xl border border-[var(--grayA2)] text-xl leading-[100%] tracking-tighter text-[var(--grayA10)]'>
                    <div className='inset-y-0 my-0 flex h-full flex-col items-center justify-center gap-0 py-0 pe-4 ps-4 text-right'>
                      <p className='m-0 p-0 text-sm tracking-tight'>
                        {formatDate(workItem.start_date)}
                      </p>
                    </div>
                    <div className='inset-y-0 my-0 min-h-full min-w-px self-stretch bg-[var(--grayA2)]' />
                    <div className='inset-y-0 my-0 flex h-full flex-col items-center justify-center gap-0 py-0 pe-4 ps-4 text-left'>
                      <p className='m-0 p-0 text-sm tracking-tight'>
                        {formatDate(workItem.end_date)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative w-full gap-0 overflow-y-auto p-0'>
                <div className=''>
                  <Tabs
                    defaultValue='highlights'
                    className='relative flex flex-col gap-2 pt-4'
                  >
                    <TabsList className='mx-auto hidden gap-px'>
                      <TabsTrigger className='w-auto' value='highlights'>
                        Highlights
                      </TabsTrigger>
                      <TabsTrigger className='hidden w-auto' value='showcase'>
                        Work
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent className='' value='highlights'>
                      <div className='bryan-employers grid snap-x grid-cols-3 gap-4 scroll-smooth rounded-b-2xl px-0 pb-8'>
                        {workItem.highlights?.map((highlight, index) => {
                          const highlightKey = highlight.id
                            ? `highlight-${resume.id}-${highlight.id}`
                            : // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                              `highlight-${resume.id}-fallback-${index}`

                          return (
                            <div
                              key={highlightKey}
                              className='col-span-1 row-span-1 mx-auto flex snap-center items-stretch gap-6 rounded-b-2xl px-10 py-8'
                            >
                              <div className='group z-[1] flex grow items-start gap-4 text-balance rounded-2xl bg-gradient-to-br from-[var(--grayA1)] to-[var(--grayA1)] text-sm leading-5 text-[var(--gray10)] transition-[colors,transform,background] duration-100 '>
                                <div className='flex w-2 min-w-2 max-w-2 items-start justify-center overflow-hidden rounded-full border border-[var(--grayA3)] bg-[var(--grayA2)] py-2 shadow-inner transition-[colors,transform,background] duration-100 group-hover:border-[var(--grayA4)] group-hover:bg-[var(--ghost-aa9)]'>
                                  <div className='h-2 w-1 min-w-2 max-w-2 translate-x-0 animate-pulse rounded-full bg-[var(--grayA2)] blur-md'></div>
                                  <div className='h-full rounded-full bg-gradient-to-b from-[var(--grayA2)] to-transparent shadow-inner blur-[2px]'></div>
                                </div>
                                <div
                                  className='text-sm'
                                  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                                  dangerouslySetInnerHTML={{
                                    __html: highlight.highlight ?? '',
                                  }}
                                />
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </TabsContent>
                    <TabsContent className='flex w-full' value='showcase'>
                      <div className='relative min-w-full max-w-full grid-cols-3 items-start justify-center gap-4 p-0'>
                        <div className='flex min-w-full grow flex-col items-center justify-center self-stretch'>
                          Work examples coming soon.
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        ))
      })}
    </div>
  )
}
