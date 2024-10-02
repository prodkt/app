import type { Meta, StoryObj } from '@storybook/react'

import FeatureSection1 from '.'
import FeatureSection2 from './FeatureSection2'
import IndexSectionFeatures3 from './IndexSectionFeatures3'

const meta: Meta<typeof FeatureSection1> = {
  component: FeatureSection1,
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
type Story = StoryObj<typeof FeatureSection1>

export const Default: Story = {
  render: () => <FeatureSection1 />,
}
export const Section2: Story = {
  render: () => <FeatureSection2 />,
}
export const Section3: Story = {
  render: () => <IndexSectionFeatures3 />,
}
