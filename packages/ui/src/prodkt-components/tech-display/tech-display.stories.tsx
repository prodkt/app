import type { Meta, StoryObj } from '@storybook/react'

import { TechDisplay } from '.'

const logo = '8b981925-6455-41a3-8be3-1fb3e2cb7b8f.svg'
const logo_onDark = '1419ef81-1345-46ee-b536-6f08d890eb41.svg'
const meta: Meta<typeof TechDisplay> = {
  component: TechDisplay,
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
type Story = StoryObj<typeof TechDisplay>

export const Default: Story = {
  render: () => (
    <div className='relative flex size-full flex-row items-start justify-start overflow-visible p-12'>
      <TechDisplay
        title='Build template'
        logo={logo}
        logoOnDark={logo_onDark}
      />
    </div>
  ),
}
