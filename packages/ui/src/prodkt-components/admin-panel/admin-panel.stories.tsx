import type { Meta, StoryObj } from '@storybook/react'

import AdminPanelLayout from './admin-panel-layout'

const meta: Meta<typeof AdminPanelLayout> = {
  component: AdminPanelLayout,
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
type Story = StoryObj<typeof AdminPanelLayout>

export const Default: Story = {
  render: () => (
    <div className='flex flex-row gap-12'>
      <AdminPanelLayout> </AdminPanelLayout>
    </div>
  ),
}
