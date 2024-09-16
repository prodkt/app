import type { Meta, StoryObj } from '@storybook/react'

import { TechUsed } from '.'

const meta: Meta<typeof TechUsed> = {
  component: TechUsed,
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
type Story = StoryObj<typeof TechUsed>

export const Default: Story = {
  render: () => <TechUsed />,
}
