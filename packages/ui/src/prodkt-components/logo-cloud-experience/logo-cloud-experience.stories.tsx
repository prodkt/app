import type { Meta, StoryObj } from '@storybook/react'

import ConfluenceLogo from '@/brands/technologies/confluence'
import DatadogLogo from '@/brands/technologies/datadog'
import GitbookLogo from '@/brands/technologies/gitbook'
import GoogleanAlyticsLogo from '@/brands/technologies/google-analytics'
import LitLogo from '@/brands/technologies/lit'
import PosthogLogo from '@/brands/technologies/posthog'
import ReactLogo from '@/brands/technologies/react'
import StarlightLogo from '@/brands/technologies/starlight'
import StencilLogo from '@/brands/technologies/stencil'
import StorybookLogo from '@/brands/technologies/storybook'
import StyleDictionaryLogo from '@/brands/technologies/style-dictionary'
import SupernovaLogo from '@/brands/technologies/supernova'
import TurborepoLogo from '@/brands/technologies/turborepo'

import { ExperienceLogoCloud } from '.'

const meta: Meta<typeof ExperienceLogoCloud> = {
  component: ExperienceLogoCloud,
  args: {},
  // argTypes: {
  //   variant: {
  //     options: [
  //       "default",
  //     ],
  //     control: { type: "select" },
  //   },
  //   size: {
  //     options: [
  //       "default",
  //     ],
  //     control: { type: "select" },
  //   },
  //   swatch: {
  //     options: [
  //       "default",
  //     ],
  //     control: { type: "select" },
  //   },
  // }
}

export default meta
type Story = StoryObj<typeof ExperienceLogoCloud>

export const Default: Story = {
  render: () => (
    <ExperienceLogoCloud cta='design system tooling'>
      <StencilLogo className='contrast-50 saturate-0 opacity-50 w-full max-w-32 h-full max-h-3' />
      <StorybookLogo className='contrast-50 saturate-0 opacity-50 w-full max-w-32 h-full max-h-3' />
      <SupernovaLogo className='contrast-50 saturate-0 opacity-50 w-full max-w-32 h-full max-h-3' />
      <StyleDictionaryLogo className='contrast-50 saturate-0 opacity-50 w-full max-w-32 h-full max-h-3' />
      <TurborepoLogo className='contrast-50 saturate-0 opacity-50 w-full max-w-32 h-full max-h-3' />
      <ReactLogo className='contrast-50 saturate-0 opacity-50 w-full max-w-32 h-full max-h-3' />
      <LitLogo className='contrast-50 saturate-0 opacity-50 w-full max-w-32 h-full max-h-3' />
    </ExperienceLogoCloud>
  ),
}

export const KbTools: Story = {
  render: () => (
    <ExperienceLogoCloud cta='Knowledge Base tooling'>
      <StarlightLogo className='contrast-50 saturate-0 opacity-50 w-full max-w-32 h-full max-h-3' />
      <ConfluenceLogo className='contrast-50 saturate-0 opacity-50 w-full max-w-32 h-full max-h-3' />
      <GitbookLogo className='contrast-50 saturate-0 opacity-50 w-full max-w-32 h-full max-h-3' />
    </ExperienceLogoCloud>
  ),
}

export const DataTools: Story = {
  render: () => (
    <ExperienceLogoCloud cta='Data tooling'>
      <PosthogLogo className='contrast-50 saturate-0 opacity-50 w-full max-w-32 h-full max-h-3' />
      <GoogleanAlyticsLogo className='contrast-50 saturate-0 opacity-50 w-full max-w-32 h-full max-h-3' />
      <DatadogLogo className='contrast-50 saturate-0 opacity-50 w-full max-w-32 h-full max-h-3' />
    </ExperienceLogoCloud>
  ),
}
