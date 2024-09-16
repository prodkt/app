import type { Meta, StoryObj } from '@storybook/react'

import { IssuePriority } from './'

const meta: Meta<typeof IssuePriority> = {
  component: IssuePriority,
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
type Story = StoryObj<typeof IssuePriority>

export const Default: Story = {
  render: () => (
    <div className='relative flex size-full flex-row items-start justify-start overflow-visible p-12'>
      <IssuePriority />
    </div>
  ),
}
