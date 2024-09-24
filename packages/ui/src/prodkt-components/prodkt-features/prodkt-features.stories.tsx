import type { Meta, StoryObj } from '@storybook/react'

import IndexSectionFeatures2 from '.'
import IndexSectionFeatures1 from './IndexSectionFeatures1'
import IndexSectionFeatures3 from './IndexSectionFeatures3'

const meta: Meta<typeof IndexSectionFeatures1> = {
  component: IndexSectionFeatures1,
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
type Story = StoryObj<typeof IndexSectionFeatures1>

export const Default: Story = {
  render: () => <IndexSectionFeatures1 />,
}
export const Section2: Story = {
  render: () => <IndexSectionFeatures2 />,
}
export const Section3: Story = {
  render: () => <IndexSectionFeatures3 />,
}
