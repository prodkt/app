import type { Meta, StoryObj } from '@storybook/react'

import { ColorSwatch } from '.'

const meta: Meta<typeof ColorSwatch> = {
  component: ColorSwatch,
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
type Story = StoryObj<typeof ColorSwatch>

export const Default: Story = {
  args: {},
  render: (args) => <ColorSwatch color='--lime9' {...args} />,
}

export const Color1: Story = {
  args: {},
  render: (args) => <ColorSwatch showValue color='--indigo9' {...args} />,
}
