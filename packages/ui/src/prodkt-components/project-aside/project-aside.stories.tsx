import type { Meta, StoryObj } from '@storybook/react'

import { ProjectAside } from '.'

const meta: Meta<typeof ProjectAside> = {
  component: ProjectAside,
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
type Story = StoryObj<typeof ProjectAside>

export const Default: Story = {
  render: () => <ProjectAside> </ProjectAside>,
}
