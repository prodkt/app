import type {
  IIssueFilterOptions,
  ILinkDetails,
  TAssigneesDistribution,
  TCompletionChartDistribution,
  TIssue,
  TLabelsDistribution,
} from '@prodkt/types'

export type TModuleStatus =
  | 'backlog'
  | 'planned'
  | 'in-progress'
  | 'paused'
  | 'completed'
  | 'cancelled'

export interface IModule {
  backlog_issues: number
  cancelled_issues: number
  completed_issues: number
  created_at: string
  created_by?: string
  description: string
  description_text: any
  description_html: any
  distribution?: {
    assignees: TAssigneesDistribution[]
    completion_chart: TCompletionChartDistribution
    labels: TLabelsDistribution[]
  }
  id: string
  lead_id: string | null
  link_module?: ILinkDetails[]
  member_ids: string[]
  is_favorite: boolean
  name: string
  project_id: string
  sort_order: number
  sub_issues?: number
  start_date: string | null
  started_issues: number
  status?: TModuleStatus
  target_date: string | null
  total_issues: number
  unstarted_issues: number
  updated_at: string
  updated_by?: string
  archived_at: string | null
  view_props: {
    filters: IIssueFilterOptions
  }
  workspace_id: string
}

export interface ModuleIssueResponse {
  created_at: Date
  created_by: string
  id: string
  issue: string
  issue_detail: TIssue
  module: string
  module_detail: IModule
  project: string
  updated_at: Date
  updated_by: string
  workspace: string
  sub_issues_count: number
}

export type ModuleLink = {
  title: string
  url: string
}

export type SelectModuleType =
  | (IModule & { actionType: 'edit' | 'delete' | 'create-issue' })
  | undefined
