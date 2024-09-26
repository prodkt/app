import type { Meta, StoryObj } from '@storybook/react'

import { HeaderMenu } from '.'

const meta: Meta<typeof HeaderMenu> = {
  component: HeaderMenu,
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
type Story = StoryObj<typeof HeaderMenu>

export const Default: Story = {
  render: () => (
    <div className='flex size-full items-center justify-center'>
      <HeaderMenu />
    </div>
  ),
}
