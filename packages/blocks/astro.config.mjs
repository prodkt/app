// Vite Helpers

import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Integrations
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
// Astro Config
import { defineConfig } from 'astro/config'
import dotenv from 'dotenv'

import postcss from './postcss.config.mjs'
import viteConfig from './vite.config.mjs'

dotenv.config()

// Vite Helper
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Astro Build Configuration

// https://astro.build/config
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'client.js',
        chunkFileNames: 'client.js',
        assetFileNames: 'client.[ext]',
      },
    },
  },
  integrations: [
    react({
      experimentalReactChildren: true,
      include: ['**/react/*'],
    }),
    tailwind({
      nesting: true,
    }),
  ],
  vite: {
    ...viteConfig,
    // sourceMap: true,
    css: {
      postcss,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    ssr: {
      // noExternal: ['swiper'],
      external: ['image-size', 'tiny-glob'],
    },
    plugins: [],
  },
})
