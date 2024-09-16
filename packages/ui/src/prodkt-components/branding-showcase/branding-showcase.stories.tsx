import type { Meta, StoryObj } from '@storybook/react'

import { BrandingShowcase } from '.'

const data = {
  slug: 'remix-lxp-branding',
  WorkID: '1879152f-19fd-4dce-b9e7-118a9e221d64',
  WorkStatus: 'published',
  WorkTitle: 'Remix LXP Branding',
  WorkExcerpt: 'Learning Management System',
  WorkContent: null,
  LinkBehanceWork: null,
  LinkDribbbleWork: null,
  LinkInstagramWork: null,
  WorkPrimaryImage: 'b4a0635c-7b2b-40d1-9823-57e91fd76a58.avif',
  WorkPrimaryColor: '#6732E2',
  BrandShowcase: true,
  ProjectId: '4f4ea3b0-b2b3-4a3d-aea2-76ef810a7cbc',
  ProjectLogo: 'eb2b8c75-059d-41bd-b508-fdd3a71880b8.svg',
  ProjectLogoWireframe: 'c7033b97-ce3a-41e8-ba47-10bbf55a3409.avif',
  ProjectLogo3d: 'bf5790ca-e557-4cdc-8c5e-1709d587c69b.avif',
  ProjectLogoCreative: 'a654f51a-ea28-4ed6-972a-bd2cceca767f.avif',
  ProjectAnimatedLogo: 'RemixAnimatedLogo',
  ProjectPrimaryImage: 'c5aa611f-ea2e-49fa-acf1-fee999a5cb11.jpg',
  ProjectLogoType: 'Circular',
  ProjectLogoTypeSample: '546ebc28-85aa-4d0d-b2b9-9186fb8c47cc.svg',
  ProjectBaseType: 'Circular',
  ProjectBaseTypeSample: '546ebc28-85aa-4d0d-b2b9-9186fb8c47cc.svg',
  ProjectExpressiveType: 'Gloock',
  ProjectExpressiveTypeSample: 'dc964968-1aaa-48cf-b8cd-598c55fcdc7e.svg',
  ProjectCodeType: 'IBM Plex Mono',
  ProjectCodeTypeSample: 'd0d0c9e0-edb4-4686-83eb-c516c52579c1.svg',
  ProjectDesignTokens: [],
  WorkspaceSlug: 'prodkt',
  WorkspaceLogo: '6eb4fe3a-17b1-4b1d-8124-edc4c543c161.svg',
  WorkspaceID: '6b35ef60-3295-41cd-b219-39239cc23a03',
  Technologies: [
    {
      work_id: '1879152f-19fd-4dce-b9e7-118a9e221d64',
      technology_id: {
        logo: {
          filename_disk: '7997de94-c382-42b9-917a-eb32d39be752.svg',
        },
        name: 'Xcode',
      },
    },
    {
      work_id: '1879152f-19fd-4dce-b9e7-118a9e221d64',
      technology_id: {
        logo: {
          filename_disk: '96c6d4db-5084-4adc-9dcc-dc6d90ac71c3.svg',
        },
        name: 'Figma',
      },
    },
    {
      work_id: '1879152f-19fd-4dce-b9e7-118a9e221d64',
      technology_id: {
        logo: {
          filename_disk: '177c2791-c565-42eb-94b5-a6dd1df84a06.svg',
        },
        name: 'Swift UI',
      },
    },
  ],
  showcaseFiles: {},
  status: 200,
}

const meta: Meta<typeof BrandingShowcase> = {
  component: BrandingShowcase,
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
type Story = StoryObj<typeof BrandingShowcase>

export const Default: Story = {
  render: () => (
    <div className='w-full max-w-full overflow-x-hidden'>
      <BrandingShowcase
        // ProjectDesignTokens={data.ProjectDesignTokens}
        ProjectCodeType={data.ProjectCodeType}
        ProjectCodeTypeSample={data.ProjectCodeTypeSample}
        ProjectLogo={data.ProjectLogo}
        // WorkProject={data.WorkProject}
        ProjectLogo3d={data.ProjectLogo3d}
        ProjectExpressiveType={data.ProjectExpressiveType}
        ProjectExpressiveTypeSample={data.ProjectExpressiveTypeSample}
        ProjectLogoType={data.ProjectLogoType}
        ProjectLogoTypeSample={data.ProjectLogoTypeSample}
        ProjectLogoCreative={data.ProjectLogoCreative}
        ProjectLogoWireframe={data.ProjectLogoWireframe}
        ProjectAnimatedLogo={data.ProjectAnimatedLogo}
        ProjectBaseType={data.ProjectBaseType}
        ProjectBaseTypeSample={data.ProjectBaseTypeSample}
      />
    </div>
  ),
}
