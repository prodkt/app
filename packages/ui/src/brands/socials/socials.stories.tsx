import type { Meta, StoryObj } from '@storybook/react'

import {
  BehanceLogo,
  DiscordLogo,
  DockerLogo,
  DribbbleLogo,
  FigmaLogo,
  GithubLogo,
  GitlabLogo,
  InstagramLogo,
  LinkedinLogo,
  SlackLogo,
  XLogo,
  YouTubeLogo,
} from '.'

const meta: Meta<typeof BehanceLogo> = {
  component: BehanceLogo,
  args: {},
  render: (args) => <BehanceLogo {...args} />,
}

export default meta
type Story = StoryObj<typeof BehanceLogo>

export const Default: Story = {
  args: {},
  render: (args) => <BehanceLogo className='w-auto h-16 mx-auto' {...args} />,
}

export const Behance: Story = {
  args: {},
  render: (args) => <BehanceLogo className='w-auto h-16 mx-auto' {...args} />,
}

export const Discord: Story = {
  args: {},
  render: (args) => <DiscordLogo className='w-auto h-16 mx-auto' {...args} />,
}
export const Docker: Story = {
  args: {},
  render: (args) => <DockerLogo className='w-auto h-16 mx-auto' {...args} />,
}
export const Dribbble: Story = {
  args: {},
  render: (args) => <DribbbleLogo className='w-auto h-16 mx-auto' {...args} />,
}

export const Figma: Story = {
  args: {},
  render: (args) => <FigmaLogo className='w-auto h-16 mx-auto' {...args} />,
}

export const Github: Story = {
  args: {},
  render: (args) => <GithubLogo className='w-auto h-16 mx-auto' {...args} />,
}

export const Gitlab: Story = {
  args: {},
  render: (args) => <GitlabLogo className='w-auto h-16 mx-auto' {...args} />,
}

export const Instagram: Story = {
  args: {},
  render: (args) => <InstagramLogo className='w-auto h-16 mx-auto' {...args} />,
}

export const Linkedin: Story = {
  args: {},
  render: (args) => <LinkedinLogo className='w-auto h-16 mx-auto' {...args} />,
}

export const Slack: Story = {
  args: {},
  render: (args) => <SlackLogo className='w-auto h-16 mx-auto' {...args} />,
}

export const X: Story = {
  args: {},
  render: (args) => <XLogo className='w-auto h-16 mx-auto' {...args} />,
}

export const YouTube: Story = {
  args: {},
  render: (args) => <YouTubeLogo className='w-auto h-16 mx-auto' {...args} />,
}
