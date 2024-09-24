import type { Meta, StoryObj } from '@storybook/react'

import { PendoSection } from '.'

const meta: Meta<typeof PendoSection> = {
  component: PendoSection,
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
type Story = StoryObj<typeof PendoSection>

export const Default: Story = {
  render: () => <PendoSection />,
}
