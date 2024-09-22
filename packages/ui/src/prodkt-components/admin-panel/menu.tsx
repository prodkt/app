/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */
'use client'

import { Ellipsis, LogOut } from 'lucide-react'

import { Button } from '@/primitives/button'
import { ScrollArea } from '@/primitives/scroll-area'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/primitives/tooltip'
import { cn } from '@/utils/cn'

import { CollapseMenuButton } from './collapse-menu-button'
import { getMenuList } from './lib/menu-list'

interface MenuProps {
  isOpen: boolean | undefined
}

/**
 *
 * @param root0
 * @param root0.isOpen
 */
export function Menu({ isOpen }: MenuProps) {
  // const url = new URL(window.location.href);
  // const pathname = urlToSlug(url);
  const menuList = getMenuList()

  return (
    <ScrollArea className='[&>div>div[style]]:!block'>
      <nav className='mt-2 size-full'>
        <ul className='flex min-h-[calc(100vh-48px-36px-16px-32px)] flex-col items-start space-y-1 px-2 lg:min-h-[calc(100vh-32px-40px-32px)]'>
          {menuList.map(({ groupLabel, menus }, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <li className={cn('w-full', groupLabel ? 'pt-5' : '')} key={index}>
              {((isOpen && groupLabel) ?? isOpen === undefined) ? (
                <p className='max-w-[248px] truncate px-4 pb-2 text-xs font-medium text-[var(--gray11)]'>
                  {groupLabel}
                </p>
              ) : !isOpen && groupLabel ? (
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger className='w-full'>
                      <div className='flex w-full items-center justify-center'>
                        <Ellipsis className='size-5' />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side='right'>
                      <p className=''>{groupLabel}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <p className='pb-2' />
              )}
              {menus.map(
                ({ href, label, icon: Icon, active, submenus }, index) =>
                  submenus.length === 0 ? (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <div className='w-full' key={index}>
                      <TooltipProvider disableHoverableContent>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <Button
                              variant={active ? 'secondary' : 'ghost'}
                              className='mb-1 h-10 w-full justify-start'
                              asChild
                            >
                              <a href={href}>
                                <span
                                  className={cn(isOpen === false ? '' : 'mr-4')}
                                >
                                  <Icon size={18} />
                                </span>
                                <p
                                  className={cn(
                                    'max-w-[200px] truncate text-xs',
                                    isOpen === false
                                      ? '-translate-x-96 opacity-0'
                                      : 'translate-x-0 opacity-100',
                                  )}
                                >
                                  {label}
                                </p>
                              </a>
                            </Button>
                          </TooltipTrigger>
                          {isOpen === false && (
                            <TooltipContent side='right'>
                              {label}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <div className='w-full' key={index}>
                      <CollapseMenuButton
                        icon={Icon}
                        label={label}
                        active={active}
                        submenus={submenus}
                        isOpen={isOpen}
                      />
                    </div>
                  ),
              )}
            </li>
          ))}
          <li className='flex w-full grow items-end'>
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Button
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    onClick={() => {}}
                    variant='outline'
                    className='mt-5 hidden h-10 w-full justify-center'
                  >
                    <span className={cn(isOpen === false ? '' : 'mr-4')}>
                      <LogOut size={18} />
                    </span>
                    <p
                      className={cn(
                        'whitespace-nowrap',
                        isOpen === false ? 'hidden opacity-0' : 'opacity-100',
                      )}
                    >
                      Request
                    </p>
                  </Button>
                </TooltipTrigger>
                {isOpen === false && (
                  <TooltipContent side='right'>Request</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </li>
        </ul>
      </nav>
    </ScrollArea>
  )
}
