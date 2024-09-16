import type { Meta, StoryObj } from '@storybook/react'

import { VercelLogo } from '.'

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
