import type { Config } from 'tailwindcss'

import { prodktTailwindPreset } from '@prodkt/tailwind'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  presets: [prodktTailwindPreset],
}

export default config
