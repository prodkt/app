/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */

import { MenuIcon, PanelsTopLeft } from 'lucide-react'

import { Docs } from '@/icons/navigation'
import { Button } from '@/primitives/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/primitives/sheet'

import { Menu } from './menu'

/**
 *
 */
export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className='lg:hidden' asChild>
        <Button className='h-8' variant='outline' size='icon'>
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex h-full flex-col px-3 sm:w-72' side='left'>
        <SheetHeader>
          <Button
            className='flex items-center justify-center pb-2 pt-1'
            variant='link'
            asChild
          >
            <a href='/dashboard' className='flex items-center gap-2'>
              <Docs className='mr-1 size-6' />
              <SheetTitle className='text-lg'>Docs</SheetTitle>
            </a>
          </Button>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  )
}
