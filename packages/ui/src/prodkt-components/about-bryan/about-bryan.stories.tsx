import type { Meta, StoryObj } from '@storybook/react'

import { BryanFunkSection } from '.'
import ResumeSection from './resume-section'

const meta: Meta<typeof BryanFunkSection> = {
  component: BryanFunkSection,
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
type Story = StoryObj<typeof BryanFunkSection>

export const Default: Story = {
  render: () => (
    <div className='size-full max-w-full overflow-x-hidden'>
      <BryanFunkSection />
      <ResumeSection />
    </div>
  ),
}
