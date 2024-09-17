import type { Meta, StoryObj } from '@storybook/react'

import { VercelLogo } from '.'
import AdobeAcrobatWithAdobe from './adobe-acrobat-with-adobe'
import AdobeIllustrator from './adobe-illustrator'
import Astro from './astro'
import Confluence from './confluence'
import Datadog from './datadog'
import Directus from './directus'
import Docker from './docker'
import Figma from './figma'
import Gitbook from './gitbook'
import GoogleAnalytics from './google-analytics'
import Ideanote from './ideanote'
import Lit from './lit'
import Posthog from './posthog'
import Postmark from './postmark'
import React from './react'
import Starlight from './starlight'
import Stencil from './stencil'
import Storybook from './storybook'
import Stripe from './stripe'
import StyleDictionary from './style-dictionary'
import Supabase from './supabase'
import Supernova from './supernova'
import TokensStudio from './tokens-studio'
import Turborepo from './turborepo'

const meta: Meta<typeof VercelLogo> = {
  component: VercelLogo,
  render: () => <VercelLogo />,
}

export default meta
type Story = StoryObj<typeof VercelLogo>

export const Default: Story = {
  args: {},
  render: (args) => <VercelLogo className='w-auto h-16 mx-auto' {...args} />,
}

export const AdobeAcrobatWithAdobeLogo: Story = {
  args: {},
  render: (args) => (
    <AdobeAcrobatWithAdobe className='w-auto h-16 mx-auto' {...args} />
  ),
}
export const AdobeIllustratorLogo: Story = {
  args: {},
  render: (args) => (
    <AdobeIllustrator className='w-auto h-16 mx-auto' {...args} />
  ),
}
export const AstroLogo: Story = {
  args: {},
  render: (args) => <Astro className='w-auto h-16 mx-auto' {...args} />,
}
export const ConfluenceLogo: Story = {
  args: {},
  render: (args) => <Confluence className='w-auto h-16 mx-auto' {...args} />,
}
export const DatadogLogo: Story = {
  args: {},
  render: (args) => <Datadog className='w-auto h-16 mx-auto' {...args} />,
}
export const DirectusLogo: Story = {
  args: {},
  render: (args) => <Directus className='w-auto h-16 mx-auto' {...args} />,
}
export const DockerLogo: Story = {
  args: {},
  render: (args) => <Docker className='w-auto h-16 mx-auto' {...args} />,
}
export const FigmaLogo: Story = {
  args: {},
  render: (args) => <Figma className='w-auto h-16 mx-auto' {...args} />,
}
export const GitbookLogo: Story = {
  args: {},
  render: (args) => <Gitbook className='w-auto h-16 mx-auto' {...args} />,
}
export const GoogleAnalyticsLogo: Story = {
  args: {},
  render: (args) => (
    <GoogleAnalytics className='w-auto h-16 mx-auto' {...args} />
  ),
}
export const IdeanoteLogo: Story = {
  args: {},
  render: (args) => <Ideanote className='w-auto h-16 mx-auto' {...args} />,
}
export const LitLogo: Story = {
  args: {},
  render: (args) => <Lit className='w-auto h-16 mx-auto' {...args} />,
}
export const PosthogLogo: Story = {
  args: {},
  render: (args) => <Posthog className='w-auto h-16 mx-auto' {...args} />,
}
export const PostmarkLogo: Story = {
  args: {},
  render: (args) => <Postmark className='w-auto h-16 mx-auto' {...args} />,
}
export const ReactLogo: Story = {
  args: {},
  render: (args) => <React className='w-auto h-16 mx-auto' {...args} />,
}
export const StarlightLogo: Story = {
  args: {},
  render: (args) => <Starlight className='w-auto h-16 mx-auto' {...args} />,
}
export const StencilLogo: Story = {
  args: {},
  render: (args) => <Stencil className='w-auto h-16 mx-auto' {...args} />,
}
export const StorybookLogo: Story = {
  args: {},
  render: (args) => <Storybook className='w-auto h-16 mx-auto' {...args} />,
}
export const StripeLogo: Story = {
  args: {},
  render: (args) => <Stripe className='w-auto h-16 mx-auto' {...args} />,
}
export const StyleDictionaryLogo: Story = {
  args: {},
  render: (args) => (
    <StyleDictionary className='w-auto h-16 mx-auto' {...args} />
  ),
}
export const SupabaseLogo: Story = {
  args: {},
  render: (args) => <Supabase className='w-auto h-16 mx-auto' {...args} />,
}
export const SupernovaLogo: Story = {
  args: {},
  render: (args) => <Supernova className='w-auto h-16 mx-auto' {...args} />,
}
export const TokensStudioLogo: Story = {
  args: {},
  render: (args) => <TokensStudio className='w-auto h-16 mx-auto' {...args} />,
}
export const TurborepoLogo: Story = {
  args: {},
  render: (args) => <Turborepo className='w-auto h-16 mx-auto' {...args} />,
}
