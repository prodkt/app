// issues
export * from './issue'
export * from './issue_reaction'
export * from './issue_link'
export * from './issue_attachment'
export * from './issue_relation'
export * from './issue_sub_issues'
export * from './activity/base'

export type TLoader = 'init-loader' | 'mutation' | undefined

export type TGroupedIssues = {
  [group_id: string]: string[]
}

export type TSubGroupedIssues = {
  [sub_grouped_id: string]: {
    [group_id: string]: string[]
  }
}

export type TUnGroupedIssues = string[]
