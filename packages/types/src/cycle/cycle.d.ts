import type { IIssueFilterOptions, TIssue } from '@prodkt/types'

export type TCycleGroups = 'current' | 'upcoming' | 'completed' | 'draft'

export interface ICycle {
  backlog_issues: number
  cancelled_issues: number
  completed_issues: number
  created_at?: string
  created_by?: string
  description: string
  distribution?: {
    assignees: TAssigneesDistribution[]
    completion_chart: TCompletionChartDistribution
    labels: TLabelsDistribution[]
  }
  end_date: string | null
  id: string
  is_favorite?: boolean
  name: string
  owned_by_id: string
  progress_snapshot: TProgressSnapshot
  project_id: string
  status?: TCycleGroups
  sort_order: number
  start_date: string | null
  started_issues: number
  sub_issues?: number
  total_issues: number
  unstarted_issues: number
  updated_at?: string
  updated_by?: string
  archived_at: string | null
  assignee_ids?: string[]
  view_props: {
    filters: IIssueFilterOptions
  }
  workspace_id: string
}

export type TProgressSnapshot = {
  backlog_issues: number
  cancelled_issues: number
  completed_estimates: number | null
  completed_issues: number
  distribution?: {
    assignees: TAssigneesDistribution[]
    completion_chart: TCompletionChartDistribution
    labels: TLabelsDistribution[]
  }
  started_estimates: number | null
  started_issues: number
  total_estimates: number | null
  total_issues: number
  unstarted_issues: number
}

export type TAssigneesDistribution = {
  assignee_id: string | null
  avatar: string | null
  completed_issues: number
  first_name: string | null
  last_name: string | null
  display_name: string | null
  pending_issues: number
  total_issues: number
}

export type TCompletionChartDistribution = {
  [key: string]: number | null
}

export type TLabelsDistribution = {
  color: string | null
  completed_issues: number
  label_id: string | null
  label_name: string | null
  pending_issues: number
  total_issues: number
}

export interface CycleIssueResponse {
  id: string
  issue_detail: TIssue
  created_at: Date
  updated_at: Date
  created_by: string
  updated_by: string
  project: string
  workspace: string
  issue: string
  cycle: string
  sub_issues_count: number
}

export type SelectCycleType =
  | (ICycle & { actionType: 'edit' | 'delete' | 'create-issue' })
  | undefined

export type CycleDateCheckData = {
  start_date: string
  end_date: string
  cycle_id?: string
}
