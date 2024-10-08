import '../../../../../apps/marketing/src/styles/codeblock.scss'

import type { Database } from '@/database.types'
import type {
  ComponentData,
  ComponentTemplate,
} from '@/prodkt-components/code-editor'
import type React from 'react'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/primitives/resizable'
import { CodeEditor } from '@/prodkt-components/code-editor'
import { TechDisplay } from '@/prodkt-components/tech-display'

export type Files = Database['public']['Tables']['directus_files']['Row']

const CodeblockLayout = ({
  children,
  clientOnly: _clientOnly,
  componentData,
  logo,
  title,
  logoOnDark,
  buildLogo,
  buildLogoOnDark,
  template = 'astro',
  ...props
}: {
  clientOnly?: boolean
  componentData: ComponentData
  logo: string
  buildLogo: string
  title: string | null
  logoOnDark: string
  buildLogoOnDark: string
  template: ComponentTemplate
  children?: React.ReactNode
}) => {
  return (
    <div className='inset-0 m-0 flex w-full flex-row place-content-stretch place-items-stretch content-stretch items-stretch justify-stretch gap-0 -space-x-0 p-0'>
      <div className='relative w-full max-w-full px-4 pt-16'>
        <main
          className='flex h-full grow flex-col gap-4 p-0 md:gap-0 md:-space-y-px md:p-0'
          {...props}
        >
          <div className='flex h-24 w-full flex-row items-center justify-start gap-4 text-nowrap p-4'>
            <div className='flex flex-row items-center border-r border-[var(--grayA3)] pr-4'>
              <img
                src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${logoOnDark}`}
                alt='Logo'
                className='hidden h-6 dark:flex'
              />
              <img
                src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${logo}`}
                alt='Logo'
                className='h-6 dark:hidden'
              />
            </div>
            <h1 className='text-nowrap text-lg lg:text-2xl'>{title}</h1>
            <div className='mr-0 hidden w-full flex-row items-center justify-end lg:ml-auto lg:flex'>
              <TechDisplay
                title='Build template'
                logo={buildLogo}
                logoOnDark={buildLogoOnDark}
              />
            </div>
          </div>
          <ResizablePanelGroup
            direction='horizontal'
            className='inset-0 m-0 size-full'
          >
            <ResizablePanel defaultSize={25} minSize={25} className='flex'>
              <div className='inset-0 m-0 flex size-full items-start justify-center py-0'>
                <CodeEditor componentData={componentData} template={template} />
              </div>
            </ResizablePanel>
            <ResizableHandle
              className='relative mx-2 flex h-full max-h-full border-none bg-transparent'
              withHandle
            />
            <ResizablePanel minSize={25} defaultSize={75}>
              <div className='inset-0 m-0 flex size-full items-start justify-center py-0 pl-0'>
                {children}
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </main>
      </div>
    </div>
  )
}

export { CodeblockLayout }
