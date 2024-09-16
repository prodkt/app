import type { Preview } from '@storybook/react'

import type {} from '@storybook/types'

import type { ReactRenderer } from '@storybook/react'

import { withThemeByClassName } from '@storybook/addon-themes'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import theme from './theme'

const customViewports = {
  'SM-640': {
    name: 'Tailwind - SM (640px)',
    styles: {
      width: '640px',
      height: '1080px',
    },
  },
  'MD-768': {
    name: 'Tailwind - MD (768px)',
    styles: {
      width: '768px',
      height: '720px',
    },
  },
  'LG-1024': {
    name: 'Tailwind - LG (1024px)',
    styles: {
      width: '1024px',
      height: '1080px',
    },
  },
  'XL-1280': {
    name: 'Tailwind - XL (1280px)',
    styles: {
      width: '1280px',
      height: '1080px',
    },
  },
  '2XL-1536': {
    name: 'Tailwind - 2XL (1536px)',
    styles: {
      width: '1536px',
      height: '1080px',
    },
  },
  '3XL-1640': {
    name: 'Tailwind - 3XL (1640px)',
    styles: {
      width: '1640px',
      height: '1080px',
    },
  },
  '720p': {
    name: '720p',
    styles: {
      width: '1280px',
      height: '720px',
    },
  },
  '1080p': {
    name: '1080p',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  '2k': {
    name: '2K',
    styles: {
      width: '2560px',
      height: '1440px',
    },
  },
  '4k': {
    name: '4K',
    styles: {
      width: '3840px',
      height: '2160px',
    },
  },
  '21/9': {
    name: '21/9',
    styles: {
      width: '2560px',
      height: '1080px',
    },
  },
}

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...customViewports,
        ...INITIAL_VIEWPORTS,
      },
    },
    docs: {
      theme,
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],
} satisfies Preview

export default preview
