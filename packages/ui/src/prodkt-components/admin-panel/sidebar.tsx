/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */

import { Docs } from '@/icons/navigation'
import { Button } from '@/primitives/button'
import { cn } from '@/utils/cn'
import { useStore } from '@/utils/use-store'

import { useSidebarToggle } from './lib/use-sidebar-toggle'
import { Menu } from './menu'
import { SidebarToggle } from './sidebar-toggle'

/**
 *
 */
export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state)

  if (!sidebar) return null
  return (
    <aside
      className={cn(
        'fixed left-[32px] top-[96px] z-20 h-[calc(100%_-_128px)] -translate-x-full rounded-2xl border bg-[var(--gray1)] transition-[width] duration-300 ease-in-out lg:translate-x-0 ',
        !sidebar.isOpen ? 'w-[90px]' : 'w-72',
      )}
    >
      <SidebarToggle isOpen={sidebar.isOpen} setIsOpen={sidebar.setIsOpen} />
      <div className='relative flex h-full flex-col overflow-y-auto rounded-2xl px-3 py-4 shadow-2xl dark:shadow-[var(--grayA2)]'>
        <Button
          className={cn(
            'mb-1 justify-start transition-transform duration-300 ease-in-out',
            !sidebar.isOpen ? 'translate-x-1' : 'translate-x-0',
          )}
          variant='link'
          asChild
        >
          <a href='/docs' className='flex items-center gap-2'>
            <Docs className='mr-1 size-6' />
            <h1
              className={cn(
                'whitespace-nowrap text-lg transition-[transform,opacity,display] duration-300 ease-in-out',
                !sidebar.isOpen
                  ? 'hidden -translate-x-96 opacity-0'
                  : 'translate-x-0 opacity-100',
              )}
            >
              Docs
            </h1>
          </a>
        </Button>
        <Menu isOpen={sidebar.isOpen} />
      </div>
    </aside>
  )
}
