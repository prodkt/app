import { TLogoProps } from './common'
import {
  IIssueDisplayFilterOptions,
  IIssueDisplayProperties,
  IIssueFilterOptions,
} from './view-props'

export interface IProjectView {
  id: string
  access: string
  created_at: Date
  updated_at: Date
  is_favorite: boolean
  created_by: string
  updated_by: string
  name: string
  description: string
  filters: IIssueFilterOptions
  display_filters: IIssueDisplayFilterOptions
  display_properties: IIssueDisplayProperties
  query: IIssueFilterOptions
  query_data: IIssueFilterOptions
  project: string
  workspace: string
  logo_props: TLogoProps | undefined
}
