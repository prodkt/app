import type { Meta, StoryObj } from '@storybook/react'

import { WorkspaceDropdown } from '.'

const data = {
  params: {
    slug: 'prodkt',
  },
  workspaceData: [
    {
      title: 'Prodkt',
      slug: 'prodkt',
      logos: {
        logomark_backgroundFill: {
          filename_disk: '3ccc4faf-605a-43e0-a4aa-455e723fd6d6.svg',
        },
      },
    },
  ],
  status: 200,
}

const meta: Meta<typeof WorkspaceDropdown> = {
  component: WorkspaceDropdown,
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
type Story = StoryObj<typeof WorkspaceDropdown>

export const Default: Story = {
  render: () => <WorkspaceDropdown />,
}

export const Header: Story = {
  render: () => (
    <WorkspaceDropdown
      workspaceLogo={
        data.workspaceData[0]?.logos.logomark_backgroundFill.filename_disk
      }
    />
  ),
}
