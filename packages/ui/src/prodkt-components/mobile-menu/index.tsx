import React from 'react'

import type { ComponentType, ReactNode } from 'react'

import { Menu as MenuIcon } from 'lucide-react'

import {
  MobileBlog,
  MobileChangelogs,
  MobileCodeblocks,
  MobileDesign,
  MobileDocs,
  MobileFlows,
  MobileHome,
  MobileWork,
} from '@/icons/navigation/mobileIcons'
import { Button } from '@/primitives/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/primitives/drawer'

interface MobileMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  link: string
  name: string
  icon: ComponentType<{ className?: string }> | ReactNode
}
const MobileMenu = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild className='px-2 xl:hidden'>
        <Button
          variant='outline'
          className='group flex flex-row items-center justify-center gap-1 rounded-full border border-[var(--gray11)] bg-[var(--grayA1)] px-2 py-1 text-[var(--gray2)] transition-all duration-500 hover:bg-[var(--grayA6)] hover:text-[var(--gray3)] dark:border-[var(--gray6)] dark:bg-[var(--gray3)] dark:text-[var(--gray12)] dark:hover:bg-[var(--gray2)] dark:hover:text-[var(--gray11)]'
        >
          <MenuIcon size={20} className='' />
          <p className='font-mono text-xs font-normal uppercase tracking-widest'>
            Menu
          </p>
        </Button>
      </DrawerTrigger>
      <DrawerContent className='h-[75dvh] border-[var(--grayA4)]'>
        <DrawerHeader className='h-full'>
          <ul className='grid grid-cols-3 gap-px overflow-hidden rounded-xl md:grid-cols-4'>
            <MobileMenuItem link='/' icon={MobileHome} name='Home' />
            <MobileMenuItem link='/flows' icon={MobileFlows} name='Flows' />
            <MobileMenuItem link='/blog' icon={MobileBlog} name='Blog' />
            <MobileMenuItem link='/work' icon={MobileWork} name='Work' />
            <MobileMenuItem
              link='/work-history'
              icon={MobileDocs}
              name='Work History'
            />
            <MobileMenuItem
              link='/codeblocks'
              icon={MobileCodeblocks}
              name='Codeblocks'
            />
            <MobileMenuItem
              link='https://ui.prodkt.cloud'
              icon={MobileDesign}
              name='Component Library'
            />
            <MobileMenuItem
              link='/changelog'
              icon={MobileChangelogs}
              name='Changelog'
            />
          </ul>
        </DrawerHeader>
        {/* <DrawerFooter>
          <DrawerClose>
            <Button variant='outline'>Close</Button>
          </DrawerClose>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  )
}

const MobileMenuItem = React.forwardRef<HTMLLIElement, MobileMenuItemProps>(
  ({ link, icon: MobileIcon, name, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className='flex size-full list-none place-content-center place-items-center content-center items-center justify-center bg-[var(--grayA2)]'
        {...props}
      >
        <a
          className='group relative mx-0 inline-flex h-full w-fit grow flex-col items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm text-[var(--gray11)]'
          href={link}
        >
          {MobileIcon && typeof MobileIcon === 'function' ? (
            <MobileIcon className='z-[14] size-12' />
          ) : (
            MobileIcon
          )}
          <p className=''>{name}</p>
        </a>
      </li>
    )
  },
)

MobileMenuItem.displayName = 'MobileMenuItem'

export { MobileMenuItem, MobileMenu }
