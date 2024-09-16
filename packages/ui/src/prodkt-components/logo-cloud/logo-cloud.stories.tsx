import type { Meta, StoryObj } from '@storybook/react'

import { LogoCloud } from '.'

const meta: Meta<typeof LogoCloud> = {
  component: LogoCloud,
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
type Story = StoryObj<typeof LogoCloud>

export const Default: Story = {
  render: () => <LogoCloud />,
}
