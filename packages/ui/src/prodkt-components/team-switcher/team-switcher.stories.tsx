import type { Meta, StoryObj } from '@storybook/react'

import { TeamSwitcher } from '.'

const meta: Meta<typeof TeamSwitcher> = {
  component: TeamSwitcher,
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
type Story = StoryObj<typeof TeamSwitcher>

export const Default: Story = {
  render: () => <TeamSwitcher />,
}

export const Header: Story = {
  render: () => <TeamSwitcher variant='header' />,
}
