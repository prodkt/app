import type { Database } from '@/database.types'
import type { Meta, StoryObj } from '@storybook/react'

import { ProjectLayout } from '@/prodkt-components/project-layout'

import { BoardColumn } from '.'

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
      date_updated: '2024-06-13T20:55:45.993+00:00',
      title: 'Prodkt.cloud',
      slug: 'prodkt-cloud',
      link_behance: null,
      link_dribbble: null,
      link_instagram: null,
      primary_image: 'f7ff4f36-e0c2-4016-aa55-345cc3c07b36',
      excerpt: 'Rebuilding Prodkt.cloud',
      content_block: null,
      workspace: '6b35ef60-3295-41cd-b219-39239cc23a03',
      logo: null,
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
      name: 'Prodkt.cloud',
      icon: null,
      icon_radius: 'rounded-md',
      og_image: null,
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
  status: 200,
}

// Group tasks by their status label
const columnsData = data.issueData.reduce<Record<string, Issue[]>>(
  (acc, task) => {
    const status = task.status // Ensure status is correctly typed
    // @ts-ignore
    const columnKey = status.label || 'Unknown' // Group by status label

    if (!acc[columnKey]) {
      acc[columnKey] = []
    }

    acc[columnKey].push(task)
    return acc
  },
  {},
)

// Transform grouped tasks into the format for BoardColumn
const columns: Column[] = Object.entries(columnsData).map(([label, tasks]) => {
  const exampleStatus = tasks[0]?.status as Status

  return {
    id: exampleStatus.id || `unknown-${label}`,
    color: exampleStatus.color || 'default-color',
    label: exampleStatus.label || 'No Label',
    value: exampleStatus.value || 'no-value',
    tasks, // Pass the tasks to the column object
  }
})

const meta: Meta = {
  component: BoardColumn,
  // argTypes: {
  //   columns: { control: "array" },
  //   tasks: { control: "array" },
  // },
}
export default meta
type Story = StoryObj<typeof BoardColumn>

export const Default: Story = {
  render: () => (
    <ProjectLayout>
      {columns.map((column) => (
        <BoardColumn
          key={column.id}
          column={column}
          tasks={column.tasks}
          isOverlay={false}
        />
      ))}
    </ProjectLayout>
  ),
}
