/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */
'use client'

import { cn } from '@/utils/cn'
import { useStore } from '@/utils/use-store'

import { Footer } from './footer'
import { useSidebarToggle } from './lib/use-sidebar-toggle'
import { Sidebar } from './sidebar'

/**
 *
 * @param root0
 * @param root0.children
 */
export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sidebar = useStore(useSidebarToggle, (state) => state)

  if (!sidebar) return null

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          'min-h-[calc(100vh_-_56px)] bg-zinc-50 transition-[margin-left] duration-300 ease-in-out dark:bg-zinc-900',
          !sidebar.isOpen ? 'lg:ml-[90px]' : 'lg:ml-72',
        )}
      >
        {children}
      </main>
      <footer
        className={cn(
          'transition-[margin-left] duration-300 ease-in-out',
          !sidebar.isOpen ? 'lg:ml-[90px]' : 'lg:ml-72',
        )}
      >
        <Footer />
      </footer>
    </>
  )
}
