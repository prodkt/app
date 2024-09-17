import React from 'react'

import type { ComponentType, ReactNode } from 'react'

import { Menu as MenuIcon } from 'lucide-react'

import {
  MobileBlog,
  MobileChangelogs,
  MobileData,
  MobileDesign,
  MobileDocs,
  MobileFlows,
  MobileHome,
  MobileWork,
} from '../../icons/navigation/mobileIcons'
import { Button } from '../../primitives/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '../../primitives/drawer'

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
          className='group flex flex-row items-center justify-center gap-1 rounded-full border px-2 py-1 hover:bg-[var(--ghost-aa12)]'
        >
          <MenuIcon size={20} className='group-hover:stroke-[var(--accent9)]' />
          <p className='font-mono text-xs font-normal tracking-widest uppercase'>
            Menu
          </p>
        </Button>
      </DrawerTrigger>
      <DrawerContent className='h-[75dvh]'>
        <DrawerHeader className='h-full'>
          <ul className='grid grid-cols-3 gap-px md:grid-cols-4'>
            <MobileMenuItem link='/' icon={MobileHome} name='Home' />
            <MobileMenuItem link='/flows' icon={MobileFlows} name='Flows' />
            <MobileMenuItem link='/blog' icon={MobileBlog} name='Blog' />
            <MobileMenuItem link='/work' icon={MobileWork} name='Work' />
            <MobileMenuItem link='/docs' icon={MobileDocs} name='Docs' />
            <MobileMenuItem link='/data' icon={MobileData} name='Data' />
            <MobileMenuItem link='/design' icon={MobileDesign} name='Design' />
            <MobileMenuItem
              link='/changelog'
              icon={MobileChangelogs}
              name='Changelog'
            />
          </ul>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant='outline'>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const MobileMenuItem = React.forwardRef<HTMLLIElement, MobileMenuItemProps>(
  ({ link, icon: MobileIcon, name, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className='flex items-center justify-center list-none size-full'
        {...props}
      >
        <a
          className='group relative mx-0 inline-flex h-full w-fit grow flex-col items-center justify-start gap-2 rounded-2xl px-5 py-3.5 text-sm text-[var(--gray11)]'
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
