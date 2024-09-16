import type { Meta, StoryObj } from '@storybook/react'

import {
  Add,
  Backlog,
  Cancelled,
  Done,
  InProgress,
  MilestoneFilled,
  MilestoneOutline,
  MilestoneProgress,
  Todo,
} from '.'

const meta: Meta<typeof Backlog> = {
  component: Backlog,
  args: {},
  render: (args) => <Backlog {...args} />,
}

export default meta
type Story = StoryObj<typeof Backlog>

export const CodeblocksIcon: Story = {
  args: {},
  render: (args) => <Backlog className='mx-auto h-16 w-auto' {...args} />,
}
export const DataIcon: Story = {
  args: {},
  render: (args) => <Todo className='mx-auto h-16 w-auto' {...args} />,
}
export const DocsIcon: Story = {
  args: {},
  render: (args) => <InProgress className='mx-auto h-16 w-auto' {...args} />,
}
export const HandoffIcon: Story = {
  args: {},
  render: (args) => <Cancelled className='mx-auto h-16 w-auto' {...args} />,
}

export const RepoIcon: Story = {
  args: {},
  render: (args) => <Done className='mx-auto h-16 w-auto' {...args} />,
}

export const ChangelogsIcon: Story = {
  args: {},
  render: (args) => <Add className='mx-auto h-16 w-auto' {...args} />,
}
export const ConceptsIcon: Story = {
  args: {},
  render: (args) => (
    <MilestoneOutline className='mx-auto h-16 w-auto' {...args} />
  ),
}
export const FlowsIcon: Story = {
  args: {},
  render: (args) => (
    <MilestoneFilled className='mx-auto h-16 w-auto' {...args} />
  ),
}
export const DesignIcon: Story = {
  args: {},
  render: (args) => (
    <MilestoneProgress className='mx-auto h-16 w-auto' {...args} />
  ),
}
