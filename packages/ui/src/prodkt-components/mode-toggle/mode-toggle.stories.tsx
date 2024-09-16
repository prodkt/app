import type { Meta, StoryObj } from '@storybook/react'

import { ModeToggle } from '.'

const meta: Meta<typeof ModeToggle> = {
  component: ModeToggle,
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
type Story = StoryObj<typeof ModeToggle>

export const Default: Story = {
  render: () => <ModeToggle />,
}
