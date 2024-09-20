import type { Meta, StoryObj } from '@storybook/react'

import { File, FileLarge, PageFile } from '.'
import Circuit from './circuit2.avif'
import Explor from './explor_logo_onDark.svg'
import FileFigma from './figma.svg'
import FileLogo from './file.png'
import Scales3d from './scales3d.png'
import FileSpline from './spline.svg'
import FileSvg from './svg.svg'

const meta: Meta<typeof File> = {
  component: File,
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
type Story = StoryObj<typeof File>

export const Default: Story = {
  render: () => (
    <div className='flex size-full h-screen max-w-full items-center justify-center overflow-x-hidden'>
      <File src={FileLogo as string} />
    </div>
  ),
}

export const Large: Story = {
  render: () => (
    <div className='flex size-full h-screen max-w-full items-center justify-center gap-2 overflow-x-hidden'>
      <FileLarge src={FileLogo as string} />
      <FileLarge src={Circuit} />
    </div>
  ),
}

export const FilePage: Story = {
  render: () => (
    <div className='flex size-full h-screen max-w-full items-center justify-center gap-2 overflow-x-hidden'>
      <PageFile
        title='filename'
        downloadLink='7b2ae3a2-eded-4a52-adcc-ba31346e4164.svg'
        fileSrc='56c87434-0b8f-4734-b5ff-bbcb3c67fa53.avif'
        folderTitle='Sugarless'
        src='eec84143-61e6-4607-addf-75cd40b130b2.avif'
      />
      <PageFile
        title='filename'
        projectLogo={Explor}
        fileSrc='7055699f-8a61-48b7-9bb7-3ef8d1aa48d9.avif'
        src='4306fd23-b2d8-49c5-a7c7-40f344584acd.avif'
      />
      <PageFile
        title='filename'
        projectLogo={Explor}
        folderTitle='Sugarless'
        fileSrc='f6894a58-ed38-4668-a9f4-8f0ca5b563cf.avif'
        src={Scales3d}
      />
    </div>
  ),
}
