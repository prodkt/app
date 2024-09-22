/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
'use client'

import { LayoutGrid, LogOut, User } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/primitives/avatar'
import { Button } from '@/primitives/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/primitives/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/primitives/tooltip'

/**
 *
 */
export function UserNav() {
  return (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                className='relative size-8 rounded-full'
              >
                <Avatar className='size-8'>
                  <AvatarImage src='#' alt='Avatar' />
                  <AvatarFallback className='bg-transparent'>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side='bottom'>Profile</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>John Doe</p>
            <p className='text-xs leading-none text-muted-foreground'>
              johndoe@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className='hover:cursor-pointer' asChild>
            <a href='/dashboard' className='flex items-center'>
              <LayoutGrid className='mr-3 size-4 text-muted-foreground' />
              Dashboard
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className='hover:cursor-pointer' asChild>
            <a href='/account' className='flex items-center'>
              <User className='mr-3 size-4 text-muted-foreground' />
              Account
            </a>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='hover:cursor-pointer' onClick={() => {}}>
          <LogOut className='mr-3 size-4 text-muted-foreground' />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
