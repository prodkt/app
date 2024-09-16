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
        downloadLink={FileLogo}
        fileSrc={FileSpline}
        folderTitle='Sugarless'
        src={FileLogo as string}
      />
      <PageFile
        title='filename'
        projectLogo={Explor}
        fileSrc={FileSvg}
        src={Circuit}
      />
      <PageFile
        title='filename'
        projectLogo={Explor}
        folderTitle='Sugarless'
        fileSrc={FileFigma}
        src={Scales3d}
      />
    </div>
  ),
}
