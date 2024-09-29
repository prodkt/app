import { useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { useMounted } from '@/utils/use-mounted'

import { Button } from '../../primitives/button'

const SunIcon = () => (
  <motion.svg
    width='22'
    height='22'
    radius='100%'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    z-index='10'
    strokeLinecap='round'
    strokeLinejoin='round'
    initial={{ scale: 0.5, opacity: 0, rotate: 90 }}
    animate={{
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.2, type: 'spring', stiffness: 100 },
    }}
    exit={{
      scale: 0.5,
      opacity: 0,
      rotate: 90,
      transition: { duration: 0.2 },
    }}
  >
    <title>Toggle to Dark Mode</title>
    <circle cx='12' cy='12' r='5' />
    <line x1='12' y1='1' x2='12' y2='3' />
    <line x1='12' y1='21' x2='12' y2='23' />
    <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
    <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
    <line x1='1' y1='12' x2='3' y2='12' />
    <line x1='21' y1='12' x2='23' y2='12' />
    <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
    <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
  </motion.svg>
)

const MoonIcon = () => (
  <motion.svg
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    z-index='10'
    strokeLinecap='round'
    strokeLinejoin='round'
    initial={{ scale: 0.5, opacity: 0, rotate: 90 }}
    animate={{
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.2, type: 'spring', stiffness: 100 },
    }}
    exit={{
      scale: 0.5,
      opacity: 0,
      rotate: 90,
      transition: { duration: 0.2 },
    }}
  >
    <title>Toggle to Light Mode</title>

    <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
  </motion.svg>
)

/**
 * Mode component allows users to toggle between light and dark mode preferences.
 * @returns The rendered ModeToggle component.
 */
export function ModeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined' || import.meta.env['SSR']) {
      return undefined
    }
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      return storedTheme
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark-theme'
    }
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'dark-theme'
    }
    return 'dark-theme'
  })

  const toggleTheme = () => {
    const newTheme = theme === 'dark-theme' ? 'dark-theme' : 'light-theme'
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    document.documentElement.setAttribute('style', `color-scheme: ${newTheme};`)
    setTheme(newTheme)
  }

  const mounted = useMounted()

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light-theme') {
      root.classList.remove('dark-theme')
      root.classList.remove('dark')
      root.classList.add('light-theme')
      root.classList.add('light')
      root.setAttribute('data-theme', 'light-theme')
      root.setAttribute(
        'style',
        'color-scheme: light-theme; background-color: var(--gray2)',
      )
    }
    // if (theme === 'system' || theme === undefined) {
    //   localStorage.setItem('theme', 'dark-theme')
    //   root.classList.remove('light-theme')
    //   root.classList.remove('light')
    //   root.classList.add('dark-theme')
    //   root.classList.add('dark')
    //   root.setAttribute('data-theme', 'dark-theme')
    //   root.setAttribute(
    //     'style',
    //     'color-scheme: dark-theme; background-color: var(--gray2)',
    //   )
    // }
    else {
      root.classList.add('dark-theme')
      root.classList.add('dark')
      root.classList.remove('light-theme')
      root.classList.remove('light')
      root.setAttribute('data-theme', 'dark-theme')
      root.setAttribute(
        'style',
        'color-scheme: dark-theme; background-color: var(--gray2)',
      )
    }
  }, [theme])

  return mounted ? (
    <Button
      variant='outline'
      size='icon'
      onClick={toggleTheme}
      className='prodktModeToggle !before:group-hover:rounded-full !before:hover:rounded-full !before:rounded-full !after:group-hover:rounded-full !after:hover:rounded-full !after:rounded-full flex  items-center justify-center rounded-full border-[var(--grayA1)] bg-[var(--grayA1)] p-2 text-[var(--gray9)] shadow-inner transition-all duration-500 hover:bg-[var(--grayA6)] hover:text-[var(--gray9)] focus:outline-none dark:border-[var(--gray6)]  dark:bg-[var(--gray3)] dark:hover:bg-[var(--gray2)] dark:hover:text-[var(--gray11)]'
    >
      <span className='sr-only rounded-full'>Toggle mode</span>
      <AnimatePresence initial={false}>
        {theme !== 'dark-theme' ? <SunIcon /> : <MoonIcon />}
      </AnimatePresence>
    </Button>
  ) : null
}
