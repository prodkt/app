import type { Meta, StoryObj } from '@storybook/react'

import FileFolder from '.'
import File from './file.png'

const meta: Meta<typeof FileFolder> = {
  component: FileFolder,
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
type Story = StoryObj<typeof FileFolder>

export const Default: Story = {
  render: () => (
    <div className='flex size-full h-screen max-w-full items-center justify-center overflow-x-hidden'>
      <FileFolder src={File as string} count='5' text='Backgrounds' />
    </div>
  ),
}
