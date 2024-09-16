import type { Meta, StoryObj } from '@storybook/react'

import {
  DesignBoiseLogo,
  DesignBoiseLogomark,
  ImpLogo,
  ImpLogomark,
  LumenLogo,
  TovutiLogo,
} from '.'

const meta: Meta<typeof TovutiLogo> = {
  component: TovutiLogo,
  render: () => <TovutiLogo />,
}

export default meta
type Story = StoryObj<typeof TovutiLogo>

export const Default: Story = {
  args: {},
  render: (args) => <TovutiLogo className='w-auto h-16 mx-auto' {...args} />,
}

export const Tovuti: Story = {
  args: {},
  render: (args) => <TovutiLogo className='w-auto h-16 mx-auto' {...args} />,
}
export const Lumen: Story = {
  args: {},
  render: (args) => <LumenLogo className='w-auto h-16 mx-auto' {...args} />,
}

export const Imp: Story = {
  args: {},
  render: (args) => <ImpLogo className='w-auto h-16 mx-auto' {...args} />,
}

export const ImpMark: Story = {
  args: {},
  render: (args) => <ImpLogomark className='w-auto h-16 mx-auto' {...args} />,
}

export const Designboise: Story = {
  args: {},
  render: (args) => (
    <DesignBoiseLogo className='w-auto h-16 mx-auto' {...args} />
  ),
}
export const DesignboiseMark: Story = {
  args: {},
  render: (args) => (
    <DesignBoiseLogomark className='w-auto h-16 mx-auto' {...args} />
  ),
}
