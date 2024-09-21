import type { Meta, StoryObj } from '@storybook/react'

import Ampersand from '.'

const meta: Meta<typeof Ampersand> = {
  component: Ampersand,
  args: {},
}

export default meta
type Story = StoryObj<typeof Ampersand>

export const Default: Story = {
  render: () => (
    <div className='flex size-full max-w-full items-center justify-center overflow-x-hidden'>
      <Ampersand />
    </div>
  ),
}
