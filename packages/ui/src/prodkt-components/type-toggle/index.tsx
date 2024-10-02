/* eslint-disable tailwindcss/no-custom-classname */

import { useEffect, useState } from 'react'

import { Button } from '@/primitives/button'
import { Dialog, DialogContent, DialogTrigger } from '@/primitives/dialog'
import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/primitives/drawer'

/**
 * TypographyThemeToggle component allows users to toggle between different typography themes and shows the current theme.
 * @returns The rendered TypographyThemeToggle component.
 */
export function TypeToggle() {
  const defaultTheme = 'prodkt' // Base theme that will always be set

  // State to store the current theme
  const [currentTheme, setCurrentTheme] = useState<string>(defaultTheme)

  // Function to toggle typography theme
  const toggleTypography = (theme: string) => {
    const dataAttribute = 'data-typography'
    localStorage.setItem(dataAttribute, theme)
    document.documentElement.setAttribute(dataAttribute, theme)
    setCurrentTheme(theme) // Update state
  }

  // Effect to initialize typography theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('data-typography') ?? defaultTheme
    document.documentElement.setAttribute('data-typography', storedTheme)
    setCurrentTheme(storedTheme) // Set the state to the stored theme or default
  }, [defaultTheme])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='rounded-full border-[var(--gray11)] bg-[var(--grayA1)] transition-all duration-500 after:rounded-full hover:bg-[var(--grayA6)] dark:border-[var(--gray6)] dark:bg-[var(--gray3)] dark:hover:bg-[var(--gray2)]'
          size='icon'
        >
          <span className='text-xs leading-[0px] text-[var(--gray1)] dark:text-[var(--gray12)]'>
            A
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <div className='mx-auto w-full max-w-sm p-4 text-center'>
          <DrawerHeader>
            <DrawerTitle className='mx-auto text-3xl'>Typography</DrawerTitle>
            <DrawerDescription className='mx-auto'>
              Choose your typography theme.
            </DrawerDescription>
          </DrawerHeader>

          <p className='mb-4 font-mono text-xs uppercase tracking-widest text-[var(--grayA9)]'>
            Current: {currentTheme}
          </p>
          <div className='relative mx-auto mb-4 flex flex-col items-center justify-center p-0'>
            <div className='group flex w-full flex-row -space-x-px text-lg'>
              <div className='relative flex h-24 w-1/2 flex-col items-start justify-end gap-0 overflow-hidden rounded-2xl rounded-r-none border border-[var(--grayA4)] bg-[var(--gray1)] p-4 font-sans'>
                <div className='absolute left-0 top-0 m-0 w-full px-0 py-2 text-xs uppercase tracking-widest text-[var(--grayA9)]'>
                  Body
                </div>
                <p className='duration-5000 m-0 p-0 leading-none text-[var(--grayA11)] transition-all ease-in-out group-hover:translate-x-[-70%]'>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className='duration-5000 m-0 p-0 leading-none text-[var(--grayA11)] transition-all ease-in-out group-hover:translate-x-[-70%]'>
                  abcdefghijklmopqrstuvwxyz
                </p>
              </div>
              <div className='relative flex h-24 w-1/2 flex-col items-start justify-end gap-0 overflow-hidden rounded-2xl rounded-l-none border border-[var(--grayA4)] bg-[var(--gray1)] p-3 font-mono'>
                <div className='absolute left-0 top-0 m-0 w-full px-0 py-2 text-xs uppercase tracking-widest text-[var(--grayA9)]'>
                  Mono
                </div>
                <p className='duration-5000 m-0 p-0 leading-none text-[var(--grayA11)] transition-all ease-in-out group-hover:translate-x-[-70%]'>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className='duration-5000 m-0 p-0 leading-none text-[var(--grayA11)] transition-all ease-in-out group-hover:translate-x-[-70%]'>
                  abcdefghijklmopqrstuvwxyz
                </p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[var(--grayA4)] bg-[var(--gray3)]'>
            {['prodkt', 'trendy', 'techy', 'press', 'giest', 'steady'].map(
              (theme) => (
                <Button
                  key={theme}
                  variant='outline'
                  size='icon'
                  className='min-h-8 w-full rounded-none border-[var(--grayA1)] bg-[var(--gray1)] p-1 text-xs hover:bg-transparent'
                  onClick={() => {
                    toggleTypography(theme)
                  }}
                >
                  <span className='uppercase'>{theme}</span>
                </Button>
              ),
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
