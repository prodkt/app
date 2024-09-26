import React from 'react'

import './header.css'

import type { VariantProps } from 'class-variance-authority'

import { cva } from 'class-variance-authority'

import { ProdktLogo } from '@/brands/prodkt'
import { Avatar, AvatarFallback, AvatarImage } from '@/primitives/avatar'
import { Button } from '@/primitives/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/primitives/dropdown-menu'
import { HeaderMenu } from '@/prodkt-components/header-menu'
import { MobileMenu } from '@/prodkt-components/mobile-menu'
import { ModeToggle } from '@/prodkt-components/mode-toggle'
import { TeamSwitcher } from '@/prodkt-components/team-switcher'
import { ThemeToggle } from '@/prodkt-components/theme-toggle'
import { cn } from '@/utils/cn'

/**
 * User Account component allows users to toggle between different accent and gray colors.
 * @returns The rendered User Account component.
 */
function HeaderUserNav() {
  return (
    <div className='flex items-center justify-center h-full'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            className='relative size-9 rounded-full border border-[var(--grayA1)] bg-[var(--grayA1)] p-0.5 ring-1 ring-[var(--grayA1)] transition-all duration-300 hover:bg-[var(--gray12)] dark:bg-[var(--gray3)] dark:ring-[var(--gray6)]'
          >
            <Avatar className='border-0 size-8'>
              <AvatarImage
                src='https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/1ad4fd1f-b9e0-445d-aedd-960bb4a7da8e.png'
                alt='@prodkt-demo'
              />
              <AvatarFallback>BF</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56' align='end' forceMount>
          <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col space-y-1'>
              <p className='text-sm font-medium leading-none'>prodkt-demo</p>
              <p className='text-xs leading-none text-muted-foreground'>
                bryan.funk@prodkt.cloud
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>New Team</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

const HeaderLogo = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ ...props }, ref) => (
  <a {...props} ref={ref}>
    <ProdktLogo />
  </a>
))

const headerVariants = cva(
  'relative w-auto max-w-full content-center items-center justify-start justify-items-center gap-4 overflow-x-clip p-0 after:absolute after:inset-0 after:z-0 after:size-full',
  {
    variants: {
      variant: {
        default: 'flex flex-row',
        vertical: 'flex flex-col',
        grid: 'grid grid-cols-4',
      },
      size: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof headerVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    className={cn(headerVariants({ variant }), className)}
    {...props}
    ref={ref}
  >
    <div className='z-[1] mx-0 flex flex-row items-center justify-center gap-x-0'>
      <HeaderLogo
        className='flex size-12 w-32 items-center justify-center rounded-2xl border border-[var(--gray12)] bg-[var(--grayA12)] px-4 text-[var(--gray1)] dark:border-[var(--gray4)] dark:bg-[var(--gray1)] dark:text-[var(--gray12)] dark:ring-[var(--gray4)] sm:rounded-r-none md:rounded-l-2xl'
        href='/'
      />
      <TeamSwitcher variant='header' />
    </div>
    <HeaderMenu />
    <div className='z-[1] ml-auto mr-0 flex h-12  flex-row items-center justify-end gap-1 gap-x-px rounded-3xl border border-[var(--gray4)] bg-[var(--gray12)] dark:bg-[var(--gray1)] lg:pl-px'>
      <div className='flex flex-row items-center justify-end h-12 gap-1 px-1 grow'>
        <MobileMenu />
        <ModeToggle />
        <ThemeToggle />
        <HeaderUserNav />
      </div>
    </div>
  </div>
))

Header.displayName = 'Header'
HeaderLogo.displayName = 'HeaderLogo'

export { Header, HeaderLogo, HeaderUserNav }
