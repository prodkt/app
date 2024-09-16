import type { Meta, StoryObj } from '@storybook/react'

import { SafariBrowser } from '.'

const meta: Meta<typeof SafariBrowser> = {
  component: SafariBrowser,
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
type Story = StoryObj<typeof SafariBrowser>

export const Default: Story = {
  render: () => <SafariBrowser />,
}
