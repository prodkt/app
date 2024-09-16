import type { Database } from '@/database.types'
import type { Meta, StoryObj } from '@storybook/react'

import { CodeblockLayout } from '.'

const buildLogo = '8b981925-6455-41a3-8be3-1fb3e2cb7b8f.svg'
const buildLogo_onDark = '1419ef81-1345-46ee-b536-6f08d890eb41.svg'

const logo = '8492dd76-c5bb-4132-a21a-c493f08c1ff4.svg'
const logo_onDark = 'a49199fd-f1e7-40fc-b795-c224f634ba38.svg'
const title = 'Leveln Codeblock'

const meta: Meta<typeof CodeblockLayout> = {
  component: CodeblockLayout,
}

export default meta
type Story = StoryObj<typeof CodeblockLayout>

export const Default: Story = {
  render: () => (
    <div className='relative inset-x-auto mx-auto flex w-dvw items-center justify-center p-0'>
      <CodeblockLayout
        buildLogo={buildLogo}
        buildLogoOnDark={buildLogo_onDark}
        title={title}
        clientOnly
        template='astro'
        componentData={{}}
        logo={logo}
        logoOnDark={logo_onDark}
      >
        test
      </CodeblockLayout>
    </div>
  ),
}
