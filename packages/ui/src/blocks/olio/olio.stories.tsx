import type { Meta, StoryObj } from '@storybook/react'

import Olio from '.'

const meta: Meta<typeof Olio> = {
  component: Olio,
  args: {},
}

export default meta
type Story = StoryObj<typeof Olio>

export const Default: Story = {
  render: () => (
    <div className='flex size-full max-w-full items-center justify-center overflow-x-hidden'>
      <Olio />
    </div>
  ),
}
