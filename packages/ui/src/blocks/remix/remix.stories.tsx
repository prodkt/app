import type { Meta, StoryObj } from '@storybook/react'

import Remix from '.'

const meta: Meta<typeof Remix> = {
  component: Remix,
  args: {},
}

export default meta
type Story = StoryObj<typeof Remix>

export const Default: Story = {
  render: () => (
    <div className='flex size-full max-w-full items-center justify-center overflow-x-hidden'>
      <Remix />
    </div>
  ),
}
