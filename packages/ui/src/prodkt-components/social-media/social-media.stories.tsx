import type { Meta, StoryObj } from '@storybook/react'

import { SocialMedia } from '.'

const meta: Meta<typeof SocialMedia> = {
  component: SocialMedia,
  args: {
    variant: 'default',
    size: 'default',
  },
  argTypes: {
    variant: {
      options: ['default', 'vertical', 'grid'],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'small', 'large'],
      control: { type: 'select' },
    },
  },
}

export default meta
type Story = StoryObj<typeof SocialMedia>

export const Default: Story = {
  args: {},
  render: (args) => <SocialMedia {...args} />,
}

export const Vert: Story = {
  args: {
    variant: 'vertical',
  },
  render: (args) => <SocialMedia {...args} />,
}

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => <SocialMedia {...args} />,
}
