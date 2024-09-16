/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-param-description */
/* eslint-disable jsdoc/require-returns */

import type { Database } from '@/database.types'
import type { ReactNode } from 'react'

import { ProdktLogotype } from '@/brands/prodkt'
import { Avatar, AvatarFallback, AvatarImage } from '@/primitives/avatar'
import { DesignerMarks } from '@/prodkt-components/designer-marks'
import { WorkspaceDropdown } from '@/prodkt-components/workspace-dropdown'

export type Project = Database['public']['Tables']['projects']['Row']
export type Files = Database['public']['Tables']['directus_files']['Row']

/**
 * ProjectAside Component
 * @param root0
 * @param root0.children
 * @param root0.projects
 */
export function ProjectAside({
  children,
  ...props
}: Readonly<{ children: ReactNode; projects?: Project[] }>) {
  return (
    <div
      className='inset-x-0 inset-y-auto m-0 flex w-1/6 grow-0 flex-col bg-[var(--grayA1)] p-0'
      {...props}
    >
      <section className='relative inset-0 m-0 h-full'>
        <nav className='flex items-center justify-between px-7 py-3.5 xl:hidden'>
          <div className='w-full px-2 xl:mr-10 xl:w-auto'>
            <div className='flex items-center justify-between'>
              <ProdktLogotype />
              <div className='xl:hidden'>
                <button className='text-gray-400 hover:text-gray-300 focus:outline-none'>
                  <svg
                    width={20}
                    height={12}
                    viewBox='0 0 20 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z'
                      fill='currentColor'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className='relative z-50 hidden size-full border border-[var(--grayA1)] pt-10 xl:flex xl:flex-col'>
          <div className='inset-0 flex flex-col gap-2'>
            <DesignerMarks hideRight />

            <div className='w-full p-0'>
              <p className='font-mono text-xs uppercase text-[var(--grayA8)]'>
                Workspace
              </p>
            </div>
            <div className='relative flex w-full flex-wrap items-center justify-between px-0'>
              {/* <ProdktLogotype /> */}
              <WorkspaceDropdown />
            </div>
            {/* <Separator /> */}
            <div className='flex h-full flex-col justify-start overflow-y-auto overflow-x-hidden p-0'>
              <div className='flex flex-col gap-4 p-0'>{children}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const ProjectAsideHeading = ({
  title,
  ...props
}: Readonly<{ title: string }>) => {
  return (
    <div className='w-full p-0' {...props}>
      <p className='font-mono text-xs uppercase text-[var(--grayA8)]'>
        {title}
      </p>
    </div>
  )
}

export interface ProjectList {
  projectLink?: string
  projectTitle?: string
  projectLogo: Files['filename_disk']
  projectAlt?: string
  projectId?: string

  slug?: string
  title?: string
  logo: Files['filename_disk']
  alt?: string
  id?: string
  filename_disk?: string
  logos: {
    logomark_backgroundFill: {
      filename_disk: string
    }
  }
}

const WorkspaceProject = ({
  slug,
  title,
  logo,
  alt,
  id,
  ...props
}: {
  slug: ProjectList['projectLink']
  title: ProjectList['projectTitle']
  logo: ProjectList['projectLogo']
  alt: ProjectList['projectAlt']
  id: ProjectList['projectId']
}) => (
  <div id={id} className='w-full p-0' {...props}>
    <a
      className='flex w-full flex-row items-center justify-start gap-2 bg-[var(--grayA1)] px-4 text-xs hover:underline hover:underline-offset-4'
      href={slug ? `/projects/${slug}` : '/'}
    >
      <Avatar className='size-6 rounded-full outline outline-1 -outline-offset-1 outline-[var(--grayA6)]'>
        <AvatarImage
          src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${logo ?? ''}`}
          alt={typeof logo === 'string' ? logo : alt}
          className=''
        />
        <AvatarFallback></AvatarFallback>
      </Avatar>
      <p className=''>{title}</p>
    </a>
  </div>
)

export { ProjectAsideHeading, WorkspaceProject }
