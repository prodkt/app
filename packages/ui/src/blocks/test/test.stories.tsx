import type { Meta, StoryObj } from '@storybook/react'

import { Test } from '.'

const meta: Meta<typeof Test> = {
  component: Test,
  args: {},
}

export default meta
type Story = StoryObj<typeof Test>

export const Default: Story = {
  render: () => (
    <div className='flex size-full max-w-full items-center justify-center overflow-x-hidden'>
      <Test />
    </div>
  ),
}
