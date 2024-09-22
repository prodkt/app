/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
'use client'

import * as React from 'react'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/primitives/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/primitives/tooltip'

/**
 *
 */
export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            className='mr-2 size-8 rounded-full bg-background'
            variant='outline'
            size='icon'
            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark')
            }}
          >
            <SunIcon className='size-[1.2rem] rotate-90 scale-0 transition-transform duration-500 ease-in-out dark:rotate-0 dark:scale-100' />
            <MoonIcon className='scale-1000 absolute size-[1.2rem] rotate-0 transition-transform duration-500 ease-in-out dark:-rotate-90 dark:scale-0' />
            <span className='sr-only'>Switch Theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side='bottom'>Switch Theme</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
