import type { Meta, StoryObj } from '@storybook/react'

import { AboutProdkt } from '.'

const meta: Meta<typeof AboutProdkt> = {
  component: AboutProdkt,
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
type Story = StoryObj<typeof AboutProdkt>

export const Default: Story = {
  render: () => (
    <div className='w-full max-w-full overflow-x-hidden'>
      <AboutProdkt />
    </div>
  ),
}
