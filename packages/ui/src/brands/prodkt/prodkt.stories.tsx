import type { Meta, StoryObj } from '@storybook/react'

import { ProdktLogo, ProdktLogomark, ProdktLogotype } from '.'

const meta: Meta<typeof ProdktLogo> = {
  component: ProdktLogo,
  render: () => <ProdktLogo />,
}

export default meta
type Story = StoryObj<typeof ProdktLogo>

export const Default: Story = {
  args: {},
  render: (args) => <ProdktLogo className='mx-auto h-16 w-auto' {...args} />,
}

export const Mark: Story = {
  args: {},
  render: (args) => (
    <ProdktLogomark className='mx-auto h-16 w-auto' {...args} />
  ),
}

export const Type: Story = {
  args: {},
  render: (args) => <ProdktLogotype className='mx-auto h-8 w-auto' {...args} />,
}
