import { useEffect } from 'react'

import { Button } from '../../primitives/button'
import { Dialog, DialogContent, DialogTrigger } from '../../primitives/dialog'
import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '../../primitives/drawer'
import { ColorWheel } from './ColorWheel'

import './theme-toggle.css'

/**
 * ThemeToggle component allows users to toggle between different accent and gray colors.
 * @returns The rendered ThemeToggle component.
 */
export function ThemeToggle() {
  // Function to toggle color and update gray color based on the accent
  const toggleColor = (colorType: 'accent' | 'gray', color: string) => {
    const dataAttribute =
      colorType === 'accent' ? 'data-accent-color' : 'data-gray-color'
    localStorage.setItem(dataAttribute, color)
    document.documentElement.setAttribute(dataAttribute, color)

    if (colorType === 'accent') {
      // Check if we need to set the gray color automatically
      const autoGrayColor = grayColorMapping[color]
      if (autoGrayColor) {
        localStorage.setItem('data-gray-color', autoGrayColor)
        document.documentElement.setAttribute('data-gray-color', autoGrayColor)
      }
    }
  }

  // Effect to initialize colors on mount
  useEffect(() => {
    const storedAccent = localStorage.getItem('data-accent-color')
    if (storedAccent) {
      document.documentElement.setAttribute('data-accent-color', storedAccent)
    }

    const storedGray = localStorage.getItem('data-gray-color')
    if (storedGray) {
      document.documentElement.setAttribute('data-gray-color', storedGray)
    }
  }, [])

  // Mapping from accent colors to gray colors
  const grayColorMapping: Record<string, string> = {
    // mauve group
    tomato: 'mauve',
    red: 'mauve',
    ruby: 'mauve',
    crimson: 'mauve',
    pink: 'mauve',
    plum: 'mauve',
    purple: 'mauve',
    violet: 'mauve',
    // slate group
    iris: 'slate',
    indigo: 'slate',
    blue: 'slate',
    sky: 'slate',
    cyan: 'slate',
    // sage group
    mint: 'sage',
    teal: 'sage',
    jade: 'sage',
    green: 'sage',
    // olive group
    grass: 'olive',
    lime: 'olive',
    // sand group
    yellow: 'sand',
    amber: 'sand',
    orange: 'sand',
    brown: 'sand',
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='rounded-full border-[var(--grayA1)] bg-[var(--grayA1)] transition-all duration-500 after:rounded-full hover:bg-[var(--grayA6)] dark:border-[var(--gray6)] dark:bg-[var(--gray3)] dark:hover:bg-[var(--gray2)]'
          size='icon'
        >
          <ColorWheel className='size-6' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <div className='mx-auto w-full max-w-sm p-4 text-center'>
          <DrawerHeader>
            <DrawerTitle className='mx-auto text-3xl'>Theming</DrawerTitle>
            <DrawerDescription className='mx-auto'>
              Set your preferred color scheme.
            </DrawerDescription>
          </DrawerHeader>
          <div className='prodkt-mobile-navigation-button themeColor relative mx-auto flex flex-col items-center justify-center'>
            <p className='font-mono text-xs uppercase tracking-widest text-[var(--grayA9)]'>
              Current
            </p>
            <ColorWheel
              className='!h-32 max-h-32 !min-h-32 !w-32 !min-w-32 max-w-32 rounded-full drop-shadow-xl transition-colors duration-1000'
              wheelColor='accent'
            />
          </div>
          <div className='grid grid-cols-4 gap-4 p-4 pb-0'>
            {[
              'pink',
              'violet',
              'mint',
              'lime',
              'red',
              'sky',
              'indigo',
              'cyan',
              'amber',
              'green',
              'gold',
              'orange',
            ].map((color) => (
              <Button
                key={color}
                variant='outline'
                size='icon'
                className='min-h-16 min-w-16 rounded-full p-2 after:rounded-full hover:p-1'
                id={`${color}Scale`}
                onClick={() => {
                  toggleColor('accent', color)
                }}
              >
                <ColorWheel
                  className='size-12 rotate-0 duration-500 ease-out hover:rotate-45 hover:scale-125 hover:duration-1000 hover:ease-in-out'
                  wheelColor={color}
                />
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
