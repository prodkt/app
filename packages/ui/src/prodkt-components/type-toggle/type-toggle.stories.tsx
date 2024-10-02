import type { Meta, StoryObj } from '@storybook/react'

import { TypeToggle } from '.'

const meta: Meta<typeof TypeToggle> = {
  component: TypeToggle,
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
type Story = StoryObj<typeof TypeToggle>

export const Default: Story = {
  render: () => <TypeToggle />,
}
