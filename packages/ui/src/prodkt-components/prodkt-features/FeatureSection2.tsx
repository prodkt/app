/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable jsdoc/require-returns */

import React from 'react'

import AstroLogomark from '@/brands/technologies/logomark_astro'
import BiomeLogomark from '@/brands/technologies/logomark_biome'
import BunLogomark from '@/brands/technologies/logomark_bun'
import ChromaLogomark from '@/brands/technologies/logomark_chroma'
import DockerLogomark from '@/brands/technologies/logomark_docker'
import FigmaLogomark from '@/brands/technologies/logomark_figma'
import PosthogLogomark from '@/brands/technologies/logomark_posthog'
import ReactLogomark from '@/brands/technologies/logomark_react'
import SentryLogomark from '@/brands/technologies/logomark_sentry'
import ShadcnLogomark from '@/brands/technologies/logomark_shadcn'
import StorybookLogomark from '@/brands/technologies/logomark_storybook'
import StyleDictionaryLogomark from '@/brands/technologies/logomark_styledictionary'
import SupabaseLogomark from '@/brands/technologies/logomark_supabase'
import SwaggerLogomark from '@/brands/technologies/logomark_swagger'
import TailwindLogomark from '@/brands/technologies/logomark_tailwind'
import TurboRepoLogomark from '@/brands/technologies/logomark_turborepo'
import VercelLogomark from '@/brands/technologies/logomark_vercel'
import ViteLogomark from '@/brands/technologies/logomark_vite'

const Technologies = [
  { name: 'TurboRepo', href: '#', icon: TurboRepoLogomark },
  { name: 'Supabase', href: '#', icon: SupabaseLogomark },
  { name: 'Astro', href: '#', icon: AstroLogomark },
  { name: 'Bun', href: '#', icon: BunLogomark },
  { name: 'Sentry', href: '#', icon: SentryLogomark },
  { name: 'Chroma', href: '#', icon: ChromaLogomark },
  { name: 'Tailwind', href: '#', icon: TailwindLogomark },
  { name: 'Posthog', href: '#', icon: PosthogLogomark },
  { name: 'Docker', href: '#', icon: DockerLogomark },
  { name: 'Shadcn', href: '#', icon: ShadcnLogomark },
  { name: 'Swagger', href: '#', icon: SwaggerLogomark },
  { name: 'Storybook', href: '#', icon: StorybookLogomark },
  { name: 'React', href: '#', icon: ReactLogomark },
  { name: 'Style Dictionary', href: '#', icon: StyleDictionaryLogomark },
  { name: 'Vite', href: '#', icon: ViteLogomark },
  { name: 'Biome', href: '#', icon: BiomeLogomark },
  { name: 'Vercel', href: '#', icon: VercelLogomark },
  { name: 'Figma', href: '#', icon: FigmaLogomark },
]

/**
 *
 */
export default function FeatureSection2() {
  return (
    <React.Fragment>
      <section className='relative overflow-hidden pb-10'>
        <div className='mx-auto'>
          <div className='max-w-lg text-balance md:mx-auto'>
            <h2 className='bg-radial-gradient from-gray-12 to-gray-11 text-shadow-[0_0_10px_var(--grayA2)] max-w-xs bg-clip-text pb-5 text-left text-2xl font-medium leading-none tracking-tighter text-transparent md:max-w-lg md:text-center md:text-5xl'>
              Built on a few of my favorite technologies
            </h2>
            <p className='text-shadow-[0px_0px_10px_var(--grayA2)] hidden text-center text-[var(--gray11)]'>
              Some of my favorite technologies to work with paired together to
              create a powerful monorepo resume.
            </p>
          </div>
          <div className='hero-mask mx-auto flex min-w-[150dvw] max-w-screen-lg translate-x-[-10%] flex-wrap justify-start gap-px p-0 md:min-w-6 md:translate-x-0 md:justify-center md:p-8'>
            {Technologies.map((technology) => (
              <div className='hero-mask w-auto' key={technology.name}>
                <div className='flex items-center justify-center rounded-none border border-[var(--grayA2)] bg-[var(--grayA2)] p-6 text-xs text-[var(--grayA7)]'>
                  <technology.icon className='mr-3 size-6' />
                  <p>{technology.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
