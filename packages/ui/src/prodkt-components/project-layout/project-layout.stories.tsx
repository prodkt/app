import type { Database } from '@/database.types'
import type { Meta, StoryObj } from '@storybook/react'

import { ProjectLayout } from '.'
import { Header } from '../header'
import { BoardColumn } from '../kanban'

type Roadmap = Database['public']['Tables']['roadmaps']['Row']
type Project = Database['public']['Tables']['projects']['Row']
type Issue = Database['public']['Tables']['issues']['Row']
type Status = Database['public']['Tables']['status']['Row'] & { tasks: Issue[] } // Ensure Status includes tasks
interface Column {
  id: string
  color: string
  label: string
  value: string
  tasks: Issue[]
}

interface ProjectData {
  projectSlug?: string
  roadmapSlug?: string
  roadmapData?: Roadmap[]
  projectData: Project[]
  issueData: Issue[]
}

const projects = [
  {
    id: '20aee22e-f5dd-4155-acb5-7ed39b329880',
    title: 'Flows',
    slug: 'flows',
    logos: {
      logomark_backgroundFill: {
        filename_disk: '9e312223-5f82-4714-a21d-2ade1eea6be5.avif',
      },
    },
  },
  {
    id: '4f4ea3b0-b2b3-4a3d-aea2-76ef810a7cbc',
    title: 'Remix LXP',
    slug: 'remix-lxp',
    logos: {
      logomark_backgroundFill: {
        filename_disk: 'ec0501a1-383d-40ff-a55f-4e5f025986c7.avif',
      },
    },
  },
  {
    id: '6250264a-ab21-4723-b437-23711f04199c',
    title: 'Sugarless',
    slug: 'sugarless',
    logos: {
      logomark_backgroundFill: {
        filename_disk: '1b47e9a0-adde-4616-9dcd-a78b9f25ff46.avif',
      },
    },
  },
  {
    id: 'f52fc5a3-c407-4c8e-bd02-03811f20987d',
    title: 'Craft',
    slug: 'craft-flow-builder',
    logos: {
      logomark_backgroundFill: {
        filename_disk: '80029f3f-886c-47ef-90ed-48608ea40194.avif',
      },
    },
  },
  {
    id: '364a3d7a-54ef-47e5-86d1-ee2194ad2cc9',
    title: 'Prodkt.cloud',
    slug: 'prodkt-cloud',
    logos: {
      logomark_backgroundFill: {
        filename_disk: '3ccc4faf-605a-43e0-a4aa-455e723fd6d6.svg',
      },
    },
  },
  {
    id: '09332d23-b406-4735-a055-a1e745abc0a4',
    title: 'Olio',
    slug: 'olio',
    logos: {
      logomark_backgroundFill: {
        filename_disk: '93763bf1-f3e9-4b7b-8fae-fe53c264368d.avif',
      },
    },
  },
  {
    id: '7440d347-b8da-4e6b-80fa-9b5dc48da552',
    title: 'Scales',
    slug: 'scales',
    logos: {
      logomark_backgroundFill: {
        filename_disk: '2a9ffc05-4d94-425f-be92-28923f79c826.avif',
      },
    },
  },
]

const data = {
  params: {
    projectSlug: 'prodkt-cloud',
  },
  projectData: [
    {
      id: '364a3d7a-54ef-47e5-86d1-ee2194ad2cc9',
      status: 'in progress',
      sort: null,
      user_created: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_created: '2024-06-13T20:32:34.393+00:00',
      user_updated: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_updated: '2024-09-11T06:26:57.119+00:00',
      title: 'Prodkt.cloud',
      slug: 'prodkt-cloud',
      link_behance: null,
      link_dribbble: null,
      link_instagram: null,
      primary_image: 'f7ff4f36-e0c2-4016-aa55-345cc3c07b36',
      excerpt: 'Rebuilding Prodkt.cloud',
      content_block: null,
      workspace: '6b35ef60-3295-41cd-b219-39239cc23a03',
      logo: {
        filename_disk: '1ad02607-8f36-4378-90fc-0c339c2370b4.svg',
      },
      public: true,
      link_github: null,
      link_gitlab: null,
      expressive_type: null,
      logo_type: null,
      base_type: null,
      code_type: null,
      logo_type_sample: null,
      base_type_sample: null,
      expressive_type_sample: null,
      code_type_sample: null,
      logo_wireframe: null,
      logo_3d: null,
      logo_creative: null,
      component_animatedLogo_stroked: null,
      componentPath_animatedLogo_stroked: null,
      brand_color_primary: null,
      icon_radius: 'rounded-md',
      og_image: null,
      logos: '83eab30d-352d-425d-a86a-07cb276c07a0',
    },
  ],
  issueData: [
    {
      id: '09d3c228-6809-4b0e-86a4-5576de0b6a9f',
      sort: null,
      user_created: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_created: '2024-09-07T05:16:23.128+00:00',
      user_updated: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_updated: '2024-09-07T05:52:04.683+00:00',
      title: 'GitLab Server Endpoints (SSR API Routes)',
      priority: 'high',
      label: 'improvement',
      estimate: '3',
      due_date: '2024-09-09T12:00:00',
      assignee: 'a7a59fa2-44b2-4669-990e-674f87ea534b',
      project: '364a3d7a-54ef-47e5-86d1-ee2194ad2cc9',
      public_issue_id: 1,
      status: {
        id: 'd416fc0a-3774-4f3a-a7ec-c015f49dcd0b',
        color: 'mint',
        label: 'Backlog',
        value: 'backlog',
      },
    },
    {
      id: 'ab925f83-9a34-4d05-bc63-29c5881b3bbc',
      sort: null,
      user_created: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_created: '2024-09-07T06:01:03.194+00:00',
      user_updated: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_updated: '2024-09-07T06:01:37.352+00:00',
      title: 'Project Server Endpoints (SSR API Routes)',
      priority: 'urgent',
      label: 'feature',
      estimate: '4',
      due_date: '2024-09-07T12:00:00',
      assignee: 'a7a59fa2-44b2-4669-990e-674f87ea534b',
      project: '364a3d7a-54ef-47e5-86d1-ee2194ad2cc9',
      public_issue_id: 2,
      status: {
        id: '1d095ed9-1be2-4ce6-bb6b-cdcc7c95537d',
        color: 'blue',
        label: 'In Progress',
        value: 'in-progress',
      },
    },
  ],
  projectListing: [
    {
      id: '20aee22e-f5dd-4155-acb5-7ed39b329880',
      title: 'Flows',
      slug: 'flows',
      logos: {
        logomark_backgroundFill: {
          filename_disk: '9e312223-5f82-4714-a21d-2ade1eea6be5.avif',
        },
      },
    },
    {
      id: '4f4ea3b0-b2b3-4a3d-aea2-76ef810a7cbc',
      title: 'Remix LXP',
      slug: 'remix-lxp',
      logos: {
        logomark_backgroundFill: {
          filename_disk: 'ec0501a1-383d-40ff-a55f-4e5f025986c7.avif',
        },
      },
    },
    {
      id: '6250264a-ab21-4723-b437-23711f04199c',
      title: 'Sugarless',
      slug: 'sugarless',
      logos: {
        logomark_backgroundFill: {
          filename_disk: '1b47e9a0-adde-4616-9dcd-a78b9f25ff46.avif',
        },
      },
    },
    {
      id: 'f52fc5a3-c407-4c8e-bd02-03811f20987d',
      title: 'Craft',
      slug: 'craft-flow-builder',
      logos: {
        logomark_backgroundFill: {
          filename_disk: '80029f3f-886c-47ef-90ed-48608ea40194.avif',
        },
      },
    },
    {
      id: '364a3d7a-54ef-47e5-86d1-ee2194ad2cc9',
      title: 'Prodkt.cloud',
      slug: 'prodkt-cloud',
      logos: {
        logomark_backgroundFill: {
          filename_disk: '3ccc4faf-605a-43e0-a4aa-455e723fd6d6.svg',
        },
      },
    },
    {
      id: '09332d23-b406-4735-a055-a1e745abc0a4',
      title: 'Olio',
      slug: 'olio',
      logos: {
        logomark_backgroundFill: {
          filename_disk: '93763bf1-f3e9-4b7b-8fae-fe53c264368d.avif',
        },
      },
    },
    {
      id: '7440d347-b8da-4e6b-80fa-9b5dc48da552',
      title: 'Scales',
      slug: 'scales',
      logos: {
        logomark_backgroundFill: {
          filename_disk: '2a9ffc05-4d94-425f-be92-28923f79c826.avif',
        },
      },
    },
  ],
  status: 200,
}

const issueData = data.issueData // Access your issue data from the data object

// Group issues by their status label
const columnsData = issueData.reduce((acc, issue) => {
  const statusLabel = issue.status.label // Use the status label for grouping
  if (!acc[statusLabel]) {
    acc[statusLabel] = []
  }
  acc[statusLabel].push(issue)
  return acc
}, {})

// Transform grouped tasks into the format for BoardColumn
const columns = Object.entries(columnsData).map(([label, tasks]) => {
  return {
    id: tasks[0]?.status.id || `unknown-${label}`, // Use the first task's status id
    color: tasks[0]?.status.color ?? 'default-color', // Use the first task's status color
    label, // The label is the status label (e.g., "Backlog", "Todo")
    tasks, // Pass the tasks to the column object
    value: label,
  }
})

// Define the desired order of the columns
const desiredOrder = ['backlog', 'todo', 'in-progress', 'done']

const orderedColumns = columns.sort((a, b) => {
  const valueA = a.value.toLowerCase() // Ensure lowercase for comparison
  const valueB = b.value.toLowerCase() // Ensure lowercase for comparison

  const indexA = desiredOrder.indexOf(valueA)
  const indexB = desiredOrder.indexOf(valueB)

  // If the value is not found in the desiredOrder array, place it at the end
  const orderA = indexA === -1 ? desiredOrder.length : indexA
  const orderB = indexB === -1 ? desiredOrder.length : indexB

  return orderA - orderB
})

const meta: Meta<typeof ProjectLayout> = {
  component: ProjectLayout,
}

export default meta
type Story = StoryObj<typeof ProjectLayout>

export const Default: Story = {
  render: () => (
    <div className='relative inset-x-auto mx-auto flex w-dvw items-center justify-center p-0'>
      <div className='absolute top-4 z-[100] w-full max-w-[calc(100%_-_32px)] overflow-hidden rounded-2xl bg-transparent'>
        <Header />
      </div>
      <ProjectLayout
        projectLogo={data.projectData[0]?.logo.filename_disk as string | null}
        projectTitle={data.projectData[0]?.title ?? ''}
        projects={projects}
      >
        {orderedColumns.map((column) => (
          <BoardColumn
            key={column.id}
            column={column}
            tasks={column.tasks}
            isOverlay={false}
          />
        ))}
      </ProjectLayout>
    </div>
  ),
}
