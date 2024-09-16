/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */

import type {
  Files,
  Project,
  ProjectList,
} from '@/prodkt-components/project-aside'
import type { ReactNode } from 'react'

import {
  MobileChangelogs,
  MobileCodeblocks,
  MobileDesign,
  MobileFlows,
} from '@/icons/navigation/mobileIcons'
import { Button } from '@/primitives/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/primitives/card'
import { DesignerMarks } from '@/prodkt-components/designer-marks'
import {
  ProjectAside,
  ProjectAsideHeading,
  WorkspaceProject,
} from '@/prodkt-components/project-aside'

export const description =
  'An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.'

const ProjectLayout = ({
  projects,
  children,
  projectLogo,
  projectTitle,
}: {
  projects: ProjectList[]
  children: ReactNode
  projectLogo: Files['filename_disk']
  projectTitle: Project['title']
}) => {
  return (
    <div className='inset-0 m-0 flex w-full flex-row place-content-stretch place-items-stretch content-stretch items-stretch justify-stretch gap-0 -space-x-0 p-10'>
      <ProjectAside>
        <ProjectAsideHeading title='Projects' />
        {projects.map((project) => (
          <WorkspaceProject
            id={project.id}
            key={project.id}
            slug={project.slug}
            title={project.title}
            alt={project.alt}
            logo={project.logos.logomark_backgroundFill.filename_disk}
          />
        ))}
      </ProjectAside>
      <main className='flex h-full grow flex-col gap-4 p-4 md:gap-0 md:-space-y-px md:p-0'>
        <div className='relative grid md:grid-cols-1 md:-space-x-px lg:grid-cols-1'>
          <DesignerMarks />
          <Card className='rounded-none'>
            <div className='relative flex h-full flex-col items-start justify-between overflow-hidden rounded-none'>
              <CardHeader className='z-[1] flex flex-row items-center justify-between space-y-0 pb-2 pt-11'>
                <CardTitle className='bg-gradient-to-b from-[var(--ghost-a7)] to-[var(--ghost-2)] bg-clip-text p-0 text-xs font-bold uppercase tracking-widest text-transparent'>
                  Project
                </CardTitle>
              </CardHeader>
              <CardContent className='z-[1] flex h-full flex-col items-start justify-center gap-1'>
                {projectLogo != null && projectLogo !== '' ? (
                  <img
                    className='h-6 w-auto'
                    src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${projectLogo}`}
                    alt={projectTitle ? projectTitle : 'Prodkt Project'}
                  />
                ) : null}
                <p className='text-sm font-medium text-[var(--gray7)]'>
                  {projectTitle ? projectTitle : null}
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
        <div className='relative grid md:grid-cols-2 md:-space-x-px lg:grid-cols-3'>
          <DesignerMarks />
          <Card className='rounded-none'>
            <div className='relative overflow-hidden rounded-none'>
              <CardHeader className='z-[1] flex flex-row items-center justify-between space-y-0 pb-2 pt-11'>
                <CardTitle className='bg-gradient-to-b from-[var(--ghost-a7)] to-[var(--ghost-2)] bg-clip-text p-0 text-xs font-bold uppercase tracking-widest text-transparent'>
                  Releases
                </CardTitle>
                <MobileChangelogs className='size-8 text-muted-foreground' />
              </CardHeader>
              <CardContent className='z-[1]'>
                <MobileChangelogs className='absolute inset-0 z-[-1] m-auto size-36 blur-md' />
                <div className='text-4xl font-bold tracking-tighter'>40</div>
                <Button
                  variant='link'
                  className='px-0 text-xs text-muted-foreground'
                >
                  Read the Changelog
                </Button>
              </CardContent>
            </div>
          </Card>
          <Card className='rounded-none'>
            <div className='relative overflow-hidden'>
              <CardHeader className='z-[1] flex flex-row items-center justify-between space-y-0 pb-2 pt-11'>
                <CardTitle className='bg-gradient-to-b from-[var(--ghost-a7)] to-[var(--ghost-2)] bg-clip-text p-0 text-xs font-bold uppercase tracking-widest text-transparent'>
                  Showcases
                </CardTitle>
                <MobileDesign className='size-8 text-muted-foreground' />
              </CardHeader>
              <CardContent className='z-[1]'>
                <MobileDesign className='absolute inset-0 z-[-1] m-auto size-36 blur-md' />
                <div className='text-4xl font-bold tracking-tighter'>3</div>
                <Button
                  variant='link'
                  className='px-0 text-xs text-muted-foreground'
                >
                  View Showcases
                </Button>
              </CardContent>
            </div>
          </Card>
          <Card className='rounded-none'>
            <div className='relative overflow-hidden'>
              <CardHeader className='z-[1] flex flex-row items-center justify-between space-y-0 pb-2 pt-11'>
                <CardTitle className='bg-gradient-to-b from-[var(--ghost-a7)] to-[var(--ghost-2)] bg-clip-text p-0 text-xs font-bold uppercase tracking-widest text-transparent'>
                  Flows
                </CardTitle>
                <MobileFlows className='size-8 text-muted-foreground' />
              </CardHeader>
              <CardContent className='z-[1]'>
                <MobileFlows className='absolute inset-0 z-[-1] m-auto size-36 blur-md' />
                <div className='text-4xl font-bold tracking-tighter'>8</div>
                <Button
                  variant='link'
                  className='px-0 text-xs text-muted-foreground'
                >
                  View Flows
                </Button>
              </CardContent>
            </div>
          </Card>
          <Card className='hidden'>
            <div className='relative overflow-hidden'>
              <CardHeader className='z-[1] flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='bg-gradient-to-b from-[var(--ghost-a7)] to-[var(--ghost-2)] bg-clip-text p-0 text-xs font-bold uppercase tracking-widest text-transparent'>
                  Codeblocks
                </CardTitle>
                <MobileCodeblocks className='size-8 text-muted-foreground' />
              </CardHeader>
              <CardContent className='z-[1]'>
                <MobileCodeblocks className='absolute inset-0 z-[-1] m-auto size-36 blur-md' />
                <div className='text-4xl font-bold tracking-tighter'>4</div>
                <Button
                  variant='link'
                  className='px-0 text-xs text-muted-foreground'
                >
                  View Blocks
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
        <div className='mx-auto grid w-full grid-cols-3 gap-8 px-4 sm:px-6 lg:px-4'>
          <div className='col-span-1 flex justify-between px-4 py-8'>
            <h4 className='my-0 py-0 text-2xl leading-none'>Issue Board</h4>
          </div>
          <div className='col-span-1 flex justify-between px-4'></div>
          <div className='col-span-1 flex items-center justify-end gap-2 px-4'>
            <a href='/'>
              <Button size='sm' variant='outline'>
                <span className='my-0 py-0 text-sm leading-none'>
                  All Issues
                </span>
              </Button>
            </a>
            <a href='/'>
              <Button size='sm' variant='secondary'>
                <span className='my-0 py-0 text-sm leading-none'>
                  New Issue
                </span>
              </Button>
            </a>
          </div>
        </div>
        <div className='relative grid min-h-[600px] grid-cols-3 gap-0 -space-x-px p-0'>
          <div className='absolute inset-x-1/2 -top-1/2 z-[-1] mx-auto mb-auto mt-0 hidden h-[200%] w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]'></div>
          <div className='absolute -top-1/2 left-1/3 z-[-1] mx-auto mb-auto mt-0 h-[200%] w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]'></div>
          <div className='absolute -top-1/2 right-1/3 z-[-1] mx-auto mb-auto mt-0 h-[200%] w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]'></div>

          <div className='absolute -left-0 -top-1/2 z-[-1] mb-auto mt-0 h-[200%] w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]'></div>
          <div className='absolute -right-0 -top-1/2 z-[-1] mb-auto mt-0 h-[200%] w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]'></div>

          <div className='absolute -left-0 -top-10 bottom-auto z-[-1] mb-auto mt-0 h-20 w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]'></div>
          <div className='absolute -left-10 -top-0 bottom-auto z-[-1] mb-auto mt-0 h-px max-h-px w-20 rounded-none bg-gradient-to-r from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]'></div>

          <div className='absolute -right-0 -top-10 bottom-auto z-[-1] mb-auto mt-0 h-20 w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]'></div>
          <div className='absolute -right-10 -top-0 bottom-auto z-[-1] mb-auto mt-0 h-px max-h-px w-20 rounded-none bg-gradient-to-r from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]'></div>

          <div className='absolute -bottom-10 -left-0 top-auto z-[-1] mb-auto mt-0 h-20 w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]'></div>
          <div className='absolute -bottom-0 -left-10 top-auto z-[-1] mb-auto mt-0 h-px max-h-px w-20 rounded-none bg-gradient-to-r from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]'></div>

          <div className='absolute -bottom-10 -right-0 top-auto z-[-1] mb-auto mt-0 h-20 w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]'></div>
          <div className='absolute -bottom-0 -right-10 top-auto z-[-1] mb-auto mt-0 h-px max-h-px w-20 rounded-none bg-gradient-to-r from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]'></div>

          <div className='absolute -left-1 -top-1 bottom-auto z-[1] mb-auto mt-0 size-2 rounded-none border border-ghost-a7 bg-ghost-aa7'></div>
          <div className='absolute -right-1 -top-1 bottom-auto z-[1] mb-auto mt-0 size-2 rounded-none border border-ghost-a7 bg-ghost-aa7'></div>
          <div className='absolute -bottom-1 -left-1 top-auto z-[1] my-0 size-2 rounded-none border border-ghost-a7 bg-ghost-aa7'></div>
          <div className='absolute -bottom-1 -right-1 top-auto z-[1] my-0 size-2 rounded-none border border-ghost-a7 bg-ghost-aa7'></div>
          {children}
        </div>
      </main>
    </div>
  )
}

export { ProjectLayout }
