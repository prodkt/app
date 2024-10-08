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
  render: () => (
    <div className='flex size-full items-center justify-center'>
      <TechUsed
        technologyMark='40a2ca7d-a884-4adb-a245-e5984fd265c5.svg'
        technologyName='Explor'
      />
    </div>
  ),
}
