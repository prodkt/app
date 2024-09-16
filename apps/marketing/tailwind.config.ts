import type { Config } from 'tailwindcss'

import { prodktTailwindPreset } from '@prodkt/tailwind'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx,astro}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,astro}',
    // '../../packages/ui/dist/**/*.js',
    '../../packages/ui/dist/primitives/**/*.js',
    '../../packages/ui/dist/prodkt-components/**/*.js',
    '../../packages/ui/dist/icons/**/*.js',
    '../../packages/ui/dist/technologies/**/*.js',
    '../../packages/ui/dist/brands/**/*.js',
  ],
  darkMode: 'class',
  presets: [prodktTailwindPreset],
}

export default config
