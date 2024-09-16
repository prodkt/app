import type { Config } from 'tailwindcss'

import { withUt } from 'uploadthing/tw'

import { prodktTailwindPreset } from '@prodkt/tailwind'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '@prodkt/ui/dist/**/*.js'],
  darkMode: 'class',
  presets: [prodktTailwindPreset],
}

export default withUt(config)
