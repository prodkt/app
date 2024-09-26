import type { Meta, StoryObj } from '@storybook/react'

import PageFooter from '.'

const meta: Meta<typeof PageFooter> = {
  component: PageFooter,
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
type Story = StoryObj<typeof PageFooter>

export const Default: Story = {
  render: () => <PageFooter />,
}
