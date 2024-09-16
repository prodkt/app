import type { Meta, StoryObj } from '@storybook/react'

import {
  CircuitThree,
  CircuitTwo,
  ConnectionBoard,
  GiantOrb,
  GlowOrb,
  GreenGlow,
  InvertedGlow,
  ProdktBlurry,
  ProjectLogos,
  TopGlow,
} from '.'

const meta: Meta<typeof InvertedGlow> = {
  component: InvertedGlow,
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
type Story = StoryObj<typeof InvertedGlow>

export const Default: Story = {
  render: () => <InvertedGlow />,
}
export const GlowTop: Story = {
  render: () => <TopGlow />,
}
export const GlowGreen: Story = {
  render: () => <GreenGlow />,
}
export const OrbGlow: Story = {
  render: () => <GlowOrb />,
}
export const Circuit2: Story = {
  render: () => <CircuitTwo />,
}
export const Circuit3: Story = {
  render: () => <CircuitThree />,
}
export const BoardConnection: Story = {
  render: () => <ConnectionBoard />,
}
export const BlurryProdkt: Story = {
  render: () => <ProdktBlurry />,
}
export const MassiveOrb: Story = {
  render: () => <GiantOrb />,
}
export const ProjectBrands: Story = {
  render: () => <ProjectLogos />,
}
