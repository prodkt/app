import type { Meta, StoryObj } from '@storybook/react'

import {
  ComponentLibrary,
  DesignLanguage,
  DesignLibraries,
  Documentation,
  Governance,
  Sandboxes,
} from '.'

const meta: Meta<typeof ComponentLibrary> = {
  component: ComponentLibrary,
  args: {},
  render: (args) => <ComponentLibrary {...args} />,
}

export default meta
type Story = StoryObj<typeof ComponentLibrary>

export const ComponentLibraryIcon: Story = {
  args: {},
  render: (args) => (
    <ComponentLibrary className='w-auto h-16 mx-auto' {...args} />
  ),
}
export const DesignLanguageIcon: Story = {
  args: {},
  render: (args) => (
    <DesignLanguage className='w-auto h-16 mx-auto' {...args} />
  ),
}
export const DesignLibrariesIcon: Story = {
  args: {},
  render: (args) => (
    <DesignLibraries className='w-auto h-16 mx-auto' {...args} />
  ),
}
export const DocumentationIcon: Story = {
  args: {},
  render: (args) => <Documentation className='w-auto h-16 mx-auto' {...args} />,
}

export const GovernanceIcon: Story = {
  args: {},
  render: (args) => <Governance className='w-auto h-16 mx-auto' {...args} />,
}

export const SandboxesIcon: Story = {
  args: {},
  render: (args) => <Sandboxes className='w-auto h-16 mx-auto' {...args} />,
}
