import type { Meta, StoryObj } from '@storybook/react'

import { DocsAside } from '.'

const meta: Meta<typeof DocsAside> = {
  component: DocsAside,
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
type Story = StoryObj<typeof DocsAside>

export const Default: Story = {
  render: () => <DocsAside />,
}
