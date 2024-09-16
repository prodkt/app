import type { Meta, StoryObj } from '@storybook/react'

import { CodeEditor } from '.'

const meta: Meta<typeof CodeEditor> = {
  component: CodeEditor,
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
type Story = StoryObj<typeof CodeEditor>

export const Default: Story = {
  render: () => (
    <div className='relative size-full'>
      <CodeEditor />
    </div>
  ),
}
