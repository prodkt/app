export interface ShowcaseFile {
  id: number
  showcase_templates_id: number
  type: string
  title: string
  directus_files_id: string // Assuming directus_files_id is a string, adjust the type as necessary
}

export type ShowcaseFiles = Record<string, ShowcaseFile[]>

export interface WorkShowcaseProps {
  workspace: any
  data: any
  WorkID: number
  WorkStatus: string
  WorkProject: number
  content_block: string | null
  date_created: string | null
  date_updated: string | null
  excerpt: string | null
  id: string
  like: number
  link_behance: string | null
  link_dribbble: string | null
  link_instagram: string | null
  primary_color: string | null
  primary_image: string | null
  project: string | null
  slug: string | null
  sort: number | null
  status: string
  title: string | null
  user_created: string | null
  user_updated: string | null
  logo: string | null
  public: boolean | null
}

export interface WorkShowcaseProps {
  id: string // or the correct type
  status: string // or the correct type
  title: string // or the correct type
  excerpt: string // or the correct type
}
