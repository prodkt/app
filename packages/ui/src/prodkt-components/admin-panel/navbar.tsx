/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */

import { ModeToggle } from './mode-toggle'
import { SheetMenu } from './sheet-menu'
import { UserNav } from './user-nav'

interface NavbarProps {
  title: string
}

/**
 *
 * @param root0
 * @param root0.title
 */
export function Navbar({ title }: NavbarProps) {
  return (
    <header className='bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10 w-full shadow backdrop-blur dark:shadow-secondary'>
      <div className='mx-4 flex h-14 items-center sm:mx-8'>
        <div className='flex items-center space-x-4 lg:space-x-0'>
          <SheetMenu />
          <h1 className=''>{title}</h1>
        </div>
        <div className='flex flex-1 items-center justify-end'>
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
