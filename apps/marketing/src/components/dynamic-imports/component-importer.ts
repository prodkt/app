/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-explicit-any */

import type { FC } from 'react'

import Ampersand from '@prodkt/ui/blocks/ampersand' // Adjust the path accordingly

import Olio from '@prodkt/ui/blocks/olio' // Adjust the path accordingly
import Remix from '@prodkt/ui/blocks/remix' // Adjust the path accordingly

import RemixHero from '../../../../../packages/blocks/src/templates/unique/components/remix-hero.astro'
import RemixLayout from '../../../../../packages/blocks/src/templates/unique/layouts/remix-hero-layout.astro'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type ComponentMap = Record<string, FC<any>>

const componentMap: ComponentMap = {
  Remix,
  RemixLayout,
  RemixHero,
  Ampersand,
  Olio,
}

export { componentMap }
