/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @eslint-community/eslint-comments/no-duplicate-disable */
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @eslint-community/eslint-comments/no-duplicate-disable */
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */

/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @eslint-community/eslint-comments/no-duplicate-disable */
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */

/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */

import type { Meta, StoryObj } from '@storybook/react'

import { Flow } from '.'
import FlowDnD from './dnd'
import NestedFlow from './nested-flow'
import PositionLogger from './position-logger'

const data = {
  slug: 'olio-logo-concepts',
  FlowTitle: 'Olio Page Builder Logo Concepts',
  FlowNodes: [
    {
      id: '8e23d496-8b97-4c47-b08d-41b654eeeda5',
      user_updated: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_updated: '2024-08-06T13:05:26.102+00:00',
      title: 'Flat Logo',
      icon: null,
      posx: 0,
      posy: 0,
      subline: null,
      type: 'borderlessImageNode',
      image: {
        filename_disk: '78bb55f3-baa4-492f-9855-a07a92fc11bd.png',
      },
      draggable: false,
      selectable: false,
      deletable: true,
      connectable: true,
    },
    {
      id: '6abd2a0e-6181-4358-b367-3b0c0049ab93',
      user_updated: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_updated: '2024-08-06T13:12:43.119+00:00',
      title: 'dashStroke Logo',
      icon: null,
      posx: 700,
      posy: 0,
      subline: null,
      type: 'borderlessImageNode',
      image: {
        filename_disk: '54d694b2-7559-49d3-ac98-c936129590eb.png',
      },
      draggable: false,
      selectable: false,
      deletable: true,
      connectable: true,
    },
    {
      id: 'cce0b09e-b004-447b-ab55-86bd429d8a12',
      user_updated: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_updated: '2024-08-06T13:12:44.084+00:00',
      title: 'Wireframe Logo',
      icon: null,
      posx: 1400,
      posy: 0,
      subline: null,
      type: 'borderlessImageNode',
      image: {
        filename_disk: '2ad3ed50-c6e8-46f0-bf1e-633ea26d7c9a.png',
      },
      draggable: false,
      selectable: false,
      deletable: true,
      connectable: true,
    },
    {
      id: '65c128e3-ed71-4e68-a980-d67743f1493b',
      user_updated: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_updated: '2024-08-06T13:12:44.55+00:00',
      title: '3D Bubble',
      icon: null,
      posx: 0,
      posy: 500,
      subline: null,
      type: 'borderlessImageNode',
      image: {
        filename_disk: 'b958a7c4-5662-4854-a9fa-2d1b713bcd4d.png',
      },
      draggable: false,
      selectable: false,
      deletable: true,
      connectable: true,
    },
    {
      id: 'ec961633-5d93-4fab-b0c7-fae18d984966',
      user_updated: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_updated: '2024-08-06T13:12:46.103+00:00',
      title: '3D Deep',
      icon: null,
      posx: 700,
      posy: 500,
      subline: null,
      type: 'borderlessImageNode',
      image: {
        filename_disk: '4d8b6736-ceef-4019-9430-3501e916c130.png',
      },
      draggable: false,
      selectable: false,
      deletable: true,
      connectable: true,
    },
  ],
  FlowEdges: [],
  status: 200,
}

const meta: Meta<typeof Flow> = {
  component: Flow,
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
type Story = StoryObj<typeof Flow>

export const Default: Story = {
  render: () => (
    <div className='relative inset-0 min-w-full min-h-full size-full h-dvh'>
      <Flow
        data={data}
        initialEdges={data.FlowEdges}
        flowTitle={data.FlowTitle}
      />
    </div>
  ),
}
export const Nested: Story = {
  render: () => (
    <div className='relative inset-0 min-w-full min-h-full size-full h-dvh'>
      <NestedFlow />
    </div>
  ),
}
export const PositionLog: Story = {
  render: () => (
    <div className='relative inset-0 min-w-full min-h-full size-full h-dvh'>
      <PositionLogger />
    </div>
  ),
}
export const DND: Story = {
  render: () => (
    <div className='relative inset-0 min-w-full min-h-full size-full h-dvh'>
      <FlowDnD />
    </div>
  ),
}
