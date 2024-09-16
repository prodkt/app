import type { Meta, StoryObj } from '@storybook/react'

import {
  Blog,
  Changelogs,
  Codeblocks,
  Concepts,
  Data,
  Design,
  Docs,
  FileVault,
  Flows,
  Handoff,
  Home,
  Milestones,
  Repo,
  Roadmaps,
  Work,
} from '.'

const meta: Meta<typeof Codeblocks> = {
  component: Codeblocks,
  args: {},
  render: (args) => <Codeblocks {...args} />,
}

export default meta
type Story = StoryObj<typeof Codeblocks>

export const CodeblocksIcon: Story = {
  args: {},
  render: (args) => <Codeblocks className='mx-auto h-16 w-auto' {...args} />,
}
export const DataIcon: Story = {
  args: {},
  render: (args) => <Data className='mx-auto h-16 w-auto' {...args} />,
}
export const DocsIcon: Story = {
  args: {},
  render: (args) => <Docs className='mx-auto h-16 w-auto' {...args} />,
}
export const HandoffIcon: Story = {
  args: {},
  render: (args) => <Handoff className='mx-auto h-16 w-auto' {...args} />,
}

export const RepoIcon: Story = {
  args: {},
  render: (args) => <Repo className='mx-auto h-16 w-auto' {...args} />,
}

export const ChangelogsIcon: Story = {
  args: {},
  render: (args) => <Changelogs className='mx-auto h-16 w-auto' {...args} />,
}
export const ConceptsIcon: Story = {
  args: {},
  render: (args) => <Concepts className='mx-auto h-16 w-auto' {...args} />,
}
export const FlowsIcon: Story = {
  args: {},
  render: (args) => <Flows className='mx-auto h-16 w-auto' {...args} />,
}
export const DesignIcon: Story = {
  args: {},
  render: (args) => <Design className='mx-auto h-16 w-auto' {...args} />,
}
export const WorkIcon: Story = {
  args: {},
  render: (args) => <Work className='mx-auto h-16 w-auto' {...args} />,
}
export const RoadmapsIcon: Story = {
  args: {},
  render: (args) => <Roadmaps className='mx-auto h-16 w-auto' {...args} />,
}
export const FileVaultIcon: Story = {
  args: {},
  render: (args) => <FileVault className='mx-auto h-16 w-auto' {...args} />,
}
export const MilestonesIcon: Story = {
  args: {},
  render: (args) => <Milestones className='mx-auto h-16 w-auto' {...args} />,
}
export const HomeIcon: Story = {
  args: {},
  render: (args) => <Home className='mx-auto h-16 w-auto' {...args} />,
}
export const BlogIcon: Story = {
  args: {},
  render: (args) => <Blog className='mx-auto h-16 w-auto' {...args} />,
}
