// Vite Helpers

import path from 'node:path'
import { fileURLToPath } from 'node:url'

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
// import sentry from '@sentry/astro'
import { defineConfig, envField } from 'astro/config'
import dotenv from 'dotenv'

import postcss from './postcss.config.js'

dotenv.config()

// Vite Helper
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  site: 'https://prodkt.cloud',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
    react({
      experimentalReactChildren: true,
    }),
    // sentry({
    //   dsn: import.meta.env.PUBLIC_SENTRY_DSN,
    //   sourceMapsUploadOptions: {
    //     org: import.meta.env.SENTRY_ORG,
    //     project: import.meta.env.SENTRY_PROJECT,
    //     authToken: import.meta.env.SENTRY_AUTH_TOKEN,
    //   },
    // }),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        postcss,
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@/supabase': path.resolve(__dirname, './src/supabase'),
        '@prodkt/assets': path.resolve(__dirname, '../../packages/assets'),
        '@prodkt/config/tailwind': path.resolve(
          __dirname,
          '../../packages/config/tailwind',
        ),
        '@prodkt/ui': path.resolve(__dirname, '../../packages/ui/dist'),
      },
    },
    ssr: {
      noExternal: ['@prodkt/ui'],
      external: ['image-size', 'tiny-glob'],
    },
  },
  output: 'server',
  adapter: vercel({
    imageService: true,
  }),
  experimental: {
    env: {
      schema: {
        SUPABASE_DEV_MODE: envField.string({
          context: 'server',
          access: 'public',
          default: 'false',
        }),
      },
    },
    // serverIslands: true,
  },
})
