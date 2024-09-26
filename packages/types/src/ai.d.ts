import { IProjectLite, IWorkspaceLite } from '@prodkt/types'

export interface IGptResponse {
  response: string
  response_html: string
  count: number
  project_detail: IProjectLite
  workspace_detail: IWorkspaceLite
}
