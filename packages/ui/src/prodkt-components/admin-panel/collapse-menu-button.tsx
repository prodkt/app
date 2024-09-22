/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */
'use client'

import { useState } from 'react'

import type { LucideIcon } from 'lucide-react'

import { DropdownMenuArrow } from '@radix-ui/react-dropdown-menu'
import { ChevronDown, Dot } from 'lucide-react'

import { Button } from '@/primitives/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/primitives/collapsible'
import {
  DropdownMenu,
  DropdownMenuContent,
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
import { cn } from '@/utils/cn'

interface Submenu {
  href: string
  label: string
  active: boolean
}

interface CollapseMenuButtonProps {
  icon: LucideIcon
  label: string
  active: boolean
  submenus: Submenu[]
  isOpen: boolean | undefined
}

/**
 *
 * @param root0
 * @param root0.icon
 * @param root0.label
 * @param root0.active
 * @param root0.submenus
 * @param root0.isOpen
 */
export function CollapseMenuButton({
  icon: Icon,
  label,
  active,
  submenus,
  isOpen,
}: CollapseMenuButtonProps) {
  const isSubmenuActive = submenus.some((submenu) => submenu.active)
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive)

  return isOpen ? (
    <Collapsible
      open={isCollapsed}
      onOpenChange={setIsCollapsed}
      className='w-full'
    >
      <CollapsibleTrigger
        className='mb-1 [&[data-state=open]>div>div>svg]:rotate-180'
        asChild
      >
        <Button
          variant={active ? 'secondary' : 'ghost'}
          className='h-10 w-full justify-start'
        >
          <div className='flex w-full items-center justify-between'>
            <div className='flex items-center'>
              <span className='mr-4'>
                <Icon size={18} />
              </span>
              <p
                className={cn(
                  'max-w-[150px] truncate text-xs',
                  isOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-96 opacity-0',
                )}
              >
                {label}
              </p>
            </div>
            <div
              className={cn(
                'whitespace-nowrap',
                isOpen
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-96 opacity-0',
              )}
            >
              <ChevronDown
                size={18}
                className='transition-transform duration-200'
              />
            </div>
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down relative overflow-hidden'>
        <div className='absolute ml-[calc(1.5rem+1px)] h-full w-px bg-gradient-to-b from-[transparent] via-[var(--grayA2)] to-[transparent]' />
        {submenus.map(({ href, label, active }, index) => (
          <Button
            key={index}
            variant={active ? 'secondary' : 'ghost'}
            className='mb-1 h-8 w-full justify-start'
            asChild
          >
            <a href={href}>
              <span className='ml-0 mr-4'>
                <Dot
                  size={19}
                  className='rounded-md border border-[var(--grayA2)] bg-[var(--grayA1)] text-[var(--gray9)] shadow-md backdrop-blur-[1px]'
                />
              </span>
              <p
                className={cn(
                  'max-w-[170px] truncate text-xs',
                  isOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-96 opacity-0',
                )}
              >
                {label}
              </p>
            </a>
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  ) : (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant={active ? 'secondary' : 'ghost'}
                className='mb-1 h-10 w-full justify-start'
              >
                <div className='flex w-full items-center justify-between'>
                  <div className='flex items-center'>
                    <span className={cn(isOpen === false ? '' : 'mr-4')}>
                      <Icon size={18} />
                    </span>
                    <p
                      className={cn(
                        'max-w-[200px] truncate',
                        isOpen === false ? 'opacity-0' : 'opacity-100',
                      )}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side='right' align='start' alignOffset={2}>
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent side='right' sideOffset={25} align='start'>
        <DropdownMenuLabel className='max-w-[190px] truncate'>
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {submenus.map(({ href, label }, index) => (
          <DropdownMenuItem key={index} asChild>
            <a className='cursor-pointer' href={href}>
              <p className='max-w-[180px] truncate'>{label}</p>
            </a>
          </DropdownMenuItem>
        ))}
        <DropdownMenuArrow className='fill-border' />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
