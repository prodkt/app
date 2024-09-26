import type { Meta, StoryObj } from '@storybook/react'

import { HeroHeader } from '.'
import { Header } from '../header'

const meta: Meta<typeof HeroHeader> = {
  component: HeroHeader,
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
type Story = StoryObj<typeof HeroHeader>

export const Default: Story = {
  render: () => (
    <>
      <Header />
      <HeroHeader />
    </>
  ),
}
