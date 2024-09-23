import type { Meta, StoryObj } from '@storybook/react'

import { CloudLogo, LogoCloud } from '.'
import { Cisco } from '../../brands/clients/cisco'
import { CocaCola } from '../../brands/clients/coke'
import { Hm } from '../../brands/clients/hm'
import { Hp } from '../../brands/clients/hp'
import { Samsung } from '../../brands/clients/samsung'
import { Toyota } from '../../brands/clients/toyota'

const meta: Meta<typeof LogoCloud> = {
  component: LogoCloud,
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
type Story = StoryObj<typeof LogoCloud>

export const Default: Story = {
  render: () => (
    <div className='flex size-full items-center justify-center'>
      <LogoCloud>
        <CloudLogo>
          <Cisco className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
        </CloudLogo>
        <CloudLogo>
          <CocaCola className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
        </CloudLogo>
        <CloudLogo>
          <Hp className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
        </CloudLogo>
        <CloudLogo>
          <Samsung className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
        </CloudLogo>
        <CloudLogo>
          <Toyota className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
        </CloudLogo>
        <CloudLogo>
          <Hm className='h-4 w-auto max-w-14 text-[var(--ghost-a6)]' />
        </CloudLogo>
      </LogoCloud>
    </div>
  ),
}
