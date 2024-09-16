import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '.'
import Background from './fallback_codeblock_dark.avif'

const meta: Meta<typeof Card> = {
  component: Card,
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
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <div className='flex flex-row gap-12'>
      <Card
        image={Background}
        title='Title'
        excerpt='except'
        link='#'
        className='basis-1/3'
      />
    </div>
  ),
}
