export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      accounts: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id: string
          user_id?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'accounts_user_id_foreign'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      accounts_liked: {
        Row: {
          accounts_id: string | null
          collection: string | null
          id: number
          item: string | null
        }
        Insert: {
          accounts_id?: string | null
          collection?: string | null
          id?: number
          item?: string | null
        }
        Update: {
          accounts_id?: string | null
          collection?: string | null
          id?: number
          item?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'accounts_liked_accounts_id_foreign'
            columns: ['accounts_id']
            isOneToOne: false
            referencedRelation: 'accounts'
            referencedColumns: ['id']
          },
        ]
      }
      articles: {
        Row: {
          author: string | null
          content: Json | null
          content_block: string | null
          date_created: string | null
          date_updated: string | null
          excerpt: string | null
          id: string
          image: string | null
          slug: string | null
          sort: number | null
          status: string
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          author?: string | null
          content?: Json | null
          content_block?: string | null
          date_created?: string | null
          date_updated?: string | null
          excerpt?: string | null
          id: string
          image?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          author?: string | null
          content?: Json | null
          content_block?: string | null
          date_created?: string | null
          date_updated?: string | null
          excerpt?: string | null
          id?: string
          image?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'articles_author_foreign'
            columns: ['author']
            isOneToOne: false
            referencedRelation: 'authors'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'articles_image_foreign'
            columns: ['image']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'articles_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'articles_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      articles_files: {
        Row: {
          articles_id: string | null
          directus_files_id: string | null
          id: number
        }
        Insert: {
          articles_id?: string | null
          directus_files_id?: string | null
          id?: number
        }
        Update: {
          articles_id?: string | null
          directus_files_id?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'articles_files_articles_id_foreign'
            columns: ['articles_id']
            isOneToOne: false
            referencedRelation: 'articles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'articles_files_directus_files_id_foreign'
            columns: ['directus_files_id']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
        ]
      }
      authors: {
        Row: {
          avatar: string | null
          date_created: string | null
          date_updated: string | null
          first_name: string | null
          id: string
          last_name: string | null
          sort: number | null
          status: string
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          avatar?: string | null
          date_created?: string | null
          date_updated?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          avatar?: string | null
          date_created?: string | null
          date_updated?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'authors_avatar_foreign'
            columns: ['avatar']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'authors_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'authors_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      changelog_subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          project_id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          project_id: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'changelog_subscribers_project_id_fkey'
            columns: ['project_id']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
        ]
      }
      changelogs: {
        Row: {
          api: Json | null
          author_id: string
          content: string | null
          fixes: Json | null
          id: string
          image: string | null
          improvements: Json | null
          new: Json | null
          project_id: string
          publish_date: string | null
          published: boolean
          slug: string
          summary: string | null
          title: string
        }
        Insert: {
          api?: Json | null
          author_id: string
          content?: string | null
          fixes?: Json | null
          id?: string
          image?: string | null
          improvements?: Json | null
          new?: Json | null
          project_id: string
          publish_date?: string | null
          published: boolean
          slug?: string
          summary?: string | null
          title?: string
        }
        Update: {
          api?: Json | null
          author_id?: string
          content?: string | null
          fixes?: Json | null
          id?: string
          image?: string | null
          improvements?: Json | null
          new?: Json | null
          project_id?: string
          publish_date?: string | null
          published?: boolean
          slug?: string
          summary?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: 'changelogs_author_id_fkey'
            columns: ['author_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'changelogs_image_foreign'
            columns: ['image']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'changelogs_project_id_fkey'
            columns: ['project_id']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
        ]
      }
      code_repositories: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: string
          screenshot: string | null
          sort: number | null
          status: string
          title: string | null
          url: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id: string
          screenshot?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          url?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: string
          screenshot?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          url?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'code_repositories_screenshot_foreign'
            columns: ['screenshot']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'code_repositories_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'code_repositories_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      codeblock_categories: {
        Row: {
          id: string
          sort: number | null
          title: string | null
        }
        Insert: {
          id: string
          sort?: number | null
          title?: string | null
        }
        Update: {
          id?: string
          sort?: number | null
          title?: string | null
        }
        Relationships: []
      }
      codeblock_template_astro: {
        Row: {
          astro_config: string | null
          date_created: string | null
          date_updated: string | null
          env: string | null
          id: string
          layouts: Json | null
          logos: string | null
          package_json: string | null
          sort: number | null
          status: string
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          astro_config?: string | null
          date_created?: string | null
          date_updated?: string | null
          env?: string | null
          id: string
          layouts?: Json | null
          logos?: string | null
          package_json?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          astro_config?: string | null
          date_created?: string | null
          date_updated?: string | null
          env?: string | null
          id?: string
          layouts?: Json | null
          logos?: string | null
          package_json?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'codeblock_template_astro_logos_foreign'
            columns: ['logos']
            isOneToOne: false
            referencedRelation: 'logos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'codeblock_template_astro_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'codeblock_template_astro_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      codeblock_template_astro_technology: {
        Row: {
          codeblock_template_astro_id: string | null
          id: number
          technology_id: string | null
        }
        Insert: {
          codeblock_template_astro_id?: string | null
          id?: number
          technology_id?: string | null
        }
        Update: {
          codeblock_template_astro_id?: string | null
          id?: number
          technology_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'codeblock_template_astro_technology_codebl__36d041c9_foreign'
            columns: ['codeblock_template_astro_id']
            isOneToOne: false
            referencedRelation: 'codeblock_template_astro'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'codeblock_template_astro_technology_technology_id_foreign'
            columns: ['technology_id']
            isOneToOne: false
            referencedRelation: 'technology'
            referencedColumns: ['id']
          },
        ]
      }
      codeblocks: {
        Row: {
          card_image: string | null
          category: string | null
          date_created: string | null
          date_updated: string | null
          frontmatter: string | null
          html: string | null
          id: string
          named_export: string | null
          slug: string | null
          sort: number | null
          status: string
          syntax: string | null
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          card_image?: string | null
          category?: string | null
          date_created?: string | null
          date_updated?: string | null
          frontmatter?: string | null
          html?: string | null
          id: string
          named_export?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          syntax?: string | null
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          card_image?: string | null
          category?: string | null
          date_created?: string | null
          date_updated?: string | null
          frontmatter?: string | null
          html?: string | null
          id?: string
          named_export?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          syntax?: string | null
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'codeblocks_card_image_foreign'
            columns: ['card_image']
            isOneToOne: true
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'codeblocks_category_foreign'
            columns: ['category']
            isOneToOne: false
            referencedRelation: 'codeblock_categories'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'codeblocks_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'codeblocks_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      codeblocks_themes: {
        Row: {
          codeblocks_id: string | null
          id: number
          themes_id: string | null
        }
        Insert: {
          codeblocks_id?: string | null
          id?: number
          themes_id?: string | null
        }
        Update: {
          codeblocks_id?: string | null
          id?: number
          themes_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'codeblocks_themes_codeblocks_id_foreign'
            columns: ['codeblocks_id']
            isOneToOne: false
            referencedRelation: 'codeblocks'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'codeblocks_themes_themes_id_foreign'
            columns: ['themes_id']
            isOneToOne: false
            referencedRelation: 'themes'
            referencedColumns: ['id']
          },
        ]
      }
      component__codeblock_code: {
        Row: {
          date_created: string | null
          exported_name: string | null
          html: string | null
          id: string
          jsx: string | null
          sort: number | null
          status: string
          title: string | null
          tsx: string | null
          type: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          exported_name?: string | null
          html?: string | null
          id: string
          jsx?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          tsx?: string | null
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          exported_name?: string | null
          html?: string | null
          id?: string
          jsx?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          tsx?: string | null
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'component__codeblock_code_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'component__codeblock_code_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      component__seo: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: string
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id: string
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: string
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'component__seo_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'component__seo_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      contacts: {
        Row: {
          alternate_name: string | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          email: string | null
          id: string
          legal_name: string | null
          name: string | null
          sort: number | null
          status: string
          telephone: string | null
          type: string | null
          url: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          alternate_name?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          email?: string | null
          id: string
          legal_name?: string | null
          name?: string | null
          sort?: number | null
          status?: string
          telephone?: string | null
          type?: string | null
          url?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          alternate_name?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          email?: string | null
          id?: string
          legal_name?: string | null
          name?: string | null
          sort?: number | null
          status?: string
          telephone?: string | null
          type?: string | null
          url?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'contacts_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'contacts_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      design_tokens: {
        Row: {
          date_updated: string | null
          id: string
          mime_type: string
          palettes_json: Json | null
          ref: string | null
          status: string
          title: string | null
          user_updated: string | null
        }
        Insert: {
          date_updated?: string | null
          id: string
          mime_type?: string
          palettes_json?: Json | null
          ref?: string | null
          status?: string
          title?: string | null
          user_updated?: string | null
        }
        Update: {
          date_updated?: string | null
          id?: string
          mime_type?: string
          palettes_json?: Json | null
          ref?: string | null
          status?: string
          title?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'design_tokens_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      directus_access: {
        Row: {
          id: string
          policy: string
          role: string | null
          sort: number | null
          user: string | null
        }
        Insert: {
          id: string
          policy: string
          role?: string | null
          sort?: number | null
          user?: string | null
        }
        Update: {
          id?: string
          policy?: string
          role?: string | null
          sort?: number | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'directus_access_policy_foreign'
            columns: ['policy']
            isOneToOne: false
            referencedRelation: 'directus_policies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_access_role_foreign'
            columns: ['role']
            isOneToOne: false
            referencedRelation: 'directus_roles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_access_user_foreign'
            columns: ['user']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      directus_activity: {
        Row: {
          action: string
          collection: string
          comment: string | null
          id: number
          ip: string | null
          item: string
          origin: string | null
          timestamp: string
          user: string | null
          user_agent: string | null
        }
        Insert: {
          action: string
          collection: string
          comment?: string | null
          id?: number
          ip?: string | null
          item: string
          origin?: string | null
          timestamp?: string
          user?: string | null
          user_agent?: string | null
        }
        Update: {
          action?: string
          collection?: string
          comment?: string | null
          id?: number
          ip?: string | null
          item?: string
          origin?: string | null
          timestamp?: string
          user?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      directus_collections: {
        Row: {
          accountability: string | null
          archive_app_filter: boolean
          archive_field: string | null
          archive_value: string | null
          collapse: string
          collection: string
          color: string | null
          display_template: string | null
          group: string | null
          hidden: boolean
          icon: string | null
          item_duplication_fields: Json | null
          note: string | null
          preview_url: string | null
          singleton: boolean
          sort: number | null
          sort_field: string | null
          translations: Json | null
          unarchive_value: string | null
          versioning: boolean
        }
        Insert: {
          accountability?: string | null
          archive_app_filter?: boolean
          archive_field?: string | null
          archive_value?: string | null
          collapse?: string
          collection: string
          color?: string | null
          display_template?: string | null
          group?: string | null
          hidden?: boolean
          icon?: string | null
          item_duplication_fields?: Json | null
          note?: string | null
          preview_url?: string | null
          singleton?: boolean
          sort?: number | null
          sort_field?: string | null
          translations?: Json | null
          unarchive_value?: string | null
          versioning?: boolean
        }
        Update: {
          accountability?: string | null
          archive_app_filter?: boolean
          archive_field?: string | null
          archive_value?: string | null
          collapse?: string
          collection?: string
          color?: string | null
          display_template?: string | null
          group?: string | null
          hidden?: boolean
          icon?: string | null
          item_duplication_fields?: Json | null
          note?: string | null
          preview_url?: string | null
          singleton?: boolean
          sort?: number | null
          sort_field?: string | null
          translations?: Json | null
          unarchive_value?: string | null
          versioning?: boolean
        }
        Relationships: [
          {
            foreignKeyName: 'directus_collections_group_foreign'
            columns: ['group']
            isOneToOne: false
            referencedRelation: 'directus_collections'
            referencedColumns: ['collection']
          },
        ]
      }
      directus_dashboards: {
        Row: {
          color: string | null
          date_created: string | null
          icon: string
          id: string
          name: string
          note: string | null
          user_created: string | null
        }
        Insert: {
          color?: string | null
          date_created?: string | null
          icon?: string
          id: string
          name: string
          note?: string | null
          user_created?: string | null
        }
        Update: {
          color?: string | null
          date_created?: string | null
          icon?: string
          id?: string
          name?: string
          note?: string | null
          user_created?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'directus_dashboards_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      directus_extensions: {
        Row: {
          bundle: string | null
          enabled: boolean
          folder: string
          id: string
          source: string
        }
        Insert: {
          bundle?: string | null
          enabled?: boolean
          folder: string
          id: string
          source: string
        }
        Update: {
          bundle?: string | null
          enabled?: boolean
          folder?: string
          id?: string
          source?: string
        }
        Relationships: []
      }
      directus_fields: {
        Row: {
          collection: string
          conditions: Json | null
          display: string | null
          display_options: Json | null
          field: string
          group: string | null
          hidden: boolean
          id: number
          interface: string | null
          note: string | null
          options: Json | null
          readonly: boolean
          required: boolean | null
          sort: number | null
          special: string | null
          translations: Json | null
          validation: Json | null
          validation_message: string | null
          width: string | null
        }
        Insert: {
          collection: string
          conditions?: Json | null
          display?: string | null
          display_options?: Json | null
          field: string
          group?: string | null
          hidden?: boolean
          id?: number
          interface?: string | null
          note?: string | null
          options?: Json | null
          readonly?: boolean
          required?: boolean | null
          sort?: number | null
          special?: string | null
          translations?: Json | null
          validation?: Json | null
          validation_message?: string | null
          width?: string | null
        }
        Update: {
          collection?: string
          conditions?: Json | null
          display?: string | null
          display_options?: Json | null
          field?: string
          group?: string | null
          hidden?: boolean
          id?: number
          interface?: string | null
          note?: string | null
          options?: Json | null
          readonly?: boolean
          required?: boolean | null
          sort?: number | null
          special?: string | null
          translations?: Json | null
          validation?: Json | null
          validation_message?: string | null
          width?: string | null
        }
        Relationships: []
      }
      directus_files: {
        Row: {
          charset: string | null
          created_on: string
          description: string | null
          duration: number | null
          embed: string | null
          filename_disk: string | null
          filename_download: string
          filesize: number | null
          focal_point_x: number | null
          focal_point_y: number | null
          folder: string | null
          height: number | null
          id: string
          location: string | null
          metadata: Json | null
          modified_by: string | null
          modified_on: string
          storage: string
          tags: string | null
          title: string | null
          tus_data: Json | null
          tus_id: string | null
          type: string | null
          uploaded_by: string | null
          uploaded_on: string | null
          width: number | null
        }
        Insert: {
          charset?: string | null
          created_on?: string
          description?: string | null
          duration?: number | null
          embed?: string | null
          filename_disk?: string | null
          filename_download: string
          filesize?: number | null
          focal_point_x?: number | null
          focal_point_y?: number | null
          folder?: string | null
          height?: number | null
          id: string
          location?: string | null
          metadata?: Json | null
          modified_by?: string | null
          modified_on?: string
          storage: string
          tags?: string | null
          title?: string | null
          tus_data?: Json | null
          tus_id?: string | null
          type?: string | null
          uploaded_by?: string | null
          uploaded_on?: string | null
          width?: number | null
        }
        Update: {
          charset?: string | null
          created_on?: string
          description?: string | null
          duration?: number | null
          embed?: string | null
          filename_disk?: string | null
          filename_download?: string
          filesize?: number | null
          focal_point_x?: number | null
          focal_point_y?: number | null
          folder?: string | null
          height?: number | null
          id?: string
          location?: string | null
          metadata?: Json | null
          modified_by?: string | null
          modified_on?: string
          storage?: string
          tags?: string | null
          title?: string | null
          tus_data?: Json | null
          tus_id?: string | null
          type?: string | null
          uploaded_by?: string | null
          uploaded_on?: string | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'directus_files_folder_foreign'
            columns: ['folder']
            isOneToOne: false
            referencedRelation: 'directus_folders'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_files_modified_by_foreign'
            columns: ['modified_by']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_files_uploaded_by_foreign'
            columns: ['uploaded_by']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      directus_flows: {
        Row: {
          accountability: string | null
          color: string | null
          date_created: string | null
          description: string | null
          icon: string | null
          id: string
          name: string
          operation: string | null
          options: Json | null
          status: string
          trigger: string | null
          user_created: string | null
        }
        Insert: {
          accountability?: string | null
          color?: string | null
          date_created?: string | null
          description?: string | null
          icon?: string | null
          id: string
          name: string
          operation?: string | null
          options?: Json | null
          status?: string
          trigger?: string | null
          user_created?: string | null
        }
        Update: {
          accountability?: string | null
          color?: string | null
          date_created?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          operation?: string | null
          options?: Json | null
          status?: string
          trigger?: string | null
          user_created?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'directus_flows_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      directus_folders: {
        Row: {
          id: string
          name: string
          parent: string | null
        }
        Insert: {
          id: string
          name: string
          parent?: string | null
        }
        Update: {
          id?: string
          name?: string
          parent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'directus_folders_parent_foreign'
            columns: ['parent']
            isOneToOne: false
            referencedRelation: 'directus_folders'
            referencedColumns: ['id']
          },
        ]
      }
      directus_migrations: {
        Row: {
          name: string
          timestamp: string | null
          version: string
        }
        Insert: {
          name: string
          timestamp?: string | null
          version: string
        }
        Update: {
          name?: string
          timestamp?: string | null
          version?: string
        }
        Relationships: []
      }
      directus_notifications: {
        Row: {
          collection: string | null
          id: number
          item: string | null
          message: string | null
          recipient: string
          sender: string | null
          status: string | null
          subject: string
          timestamp: string | null
        }
        Insert: {
          collection?: string | null
          id?: number
          item?: string | null
          message?: string | null
          recipient: string
          sender?: string | null
          status?: string | null
          subject: string
          timestamp?: string | null
        }
        Update: {
          collection?: string | null
          id?: number
          item?: string | null
          message?: string | null
          recipient?: string
          sender?: string | null
          status?: string | null
          subject?: string
          timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'directus_notifications_recipient_foreign'
            columns: ['recipient']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_notifications_sender_foreign'
            columns: ['sender']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      directus_operations: {
        Row: {
          date_created: string | null
          flow: string
          id: string
          key: string
          name: string | null
          options: Json | null
          position_x: number
          position_y: number
          reject: string | null
          resolve: string | null
          type: string
          user_created: string | null
        }
        Insert: {
          date_created?: string | null
          flow: string
          id: string
          key: string
          name?: string | null
          options?: Json | null
          position_x: number
          position_y: number
          reject?: string | null
          resolve?: string | null
          type: string
          user_created?: string | null
        }
        Update: {
          date_created?: string | null
          flow?: string
          id?: string
          key?: string
          name?: string | null
          options?: Json | null
          position_x?: number
          position_y?: number
          reject?: string | null
          resolve?: string | null
          type?: string
          user_created?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'directus_operations_flow_foreign'
            columns: ['flow']
            isOneToOne: false
            referencedRelation: 'directus_flows'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_operations_reject_foreign'
            columns: ['reject']
            isOneToOne: true
            referencedRelation: 'directus_operations'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_operations_resolve_foreign'
            columns: ['resolve']
            isOneToOne: true
            referencedRelation: 'directus_operations'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_operations_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      directus_panels: {
        Row: {
          color: string | null
          dashboard: string
          date_created: string | null
          height: number
          icon: string | null
          id: string
          name: string | null
          note: string | null
          options: Json | null
          position_x: number
          position_y: number
          show_header: boolean
          type: string
          user_created: string | null
          width: number
        }
        Insert: {
          color?: string | null
          dashboard: string
          date_created?: string | null
          height: number
          icon?: string | null
          id: string
          name?: string | null
          note?: string | null
          options?: Json | null
          position_x: number
          position_y: number
          show_header?: boolean
          type: string
          user_created?: string | null
          width: number
        }
        Update: {
          color?: string | null
          dashboard?: string
          date_created?: string | null
          height?: number
          icon?: string | null
          id?: string
          name?: string | null
          note?: string | null
          options?: Json | null
          position_x?: number
          position_y?: number
          show_header?: boolean
          type?: string
          user_created?: string | null
          width?: number
        }
        Relationships: [
          {
            foreignKeyName: 'directus_panels_dashboard_foreign'
            columns: ['dashboard']
            isOneToOne: false
            referencedRelation: 'directus_dashboards'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_panels_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      directus_permissions: {
        Row: {
          action: string
          collection: string
          fields: string | null
          id: number
          permissions: Json | null
          policy: string
          presets: Json | null
          validation: Json | null
        }
        Insert: {
          action: string
          collection: string
          fields?: string | null
          id?: number
          permissions?: Json | null
          policy: string
          presets?: Json | null
          validation?: Json | null
        }
        Update: {
          action?: string
          collection?: string
          fields?: string | null
          id?: number
          permissions?: Json | null
          policy?: string
          presets?: Json | null
          validation?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: 'directus_permissions_policy_foreign'
            columns: ['policy']
            isOneToOne: false
            referencedRelation: 'directus_policies'
            referencedColumns: ['id']
          },
        ]
      }
      directus_policies: {
        Row: {
          admin_access: boolean
          app_access: boolean
          description: string | null
          enforce_tfa: boolean
          icon: string
          id: string
          ip_access: string | null
          name: string
        }
        Insert: {
          admin_access?: boolean
          app_access?: boolean
          description?: string | null
          enforce_tfa?: boolean
          icon?: string
          id: string
          ip_access?: string | null
          name: string
        }
        Update: {
          admin_access?: boolean
          app_access?: boolean
          description?: string | null
          enforce_tfa?: boolean
          icon?: string
          id?: string
          ip_access?: string | null
          name?: string
        }
        Relationships: []
      }
      directus_presets: {
        Row: {
          bookmark: string | null
          collection: string | null
          color: string | null
          filter: Json | null
          icon: string | null
          id: number
          layout: string | null
          layout_options: Json | null
          layout_query: Json | null
          refresh_interval: number | null
          role: string | null
          search: string | null
          user: string | null
        }
        Insert: {
          bookmark?: string | null
          collection?: string | null
          color?: string | null
          filter?: Json | null
          icon?: string | null
          id?: number
          layout?: string | null
          layout_options?: Json | null
          layout_query?: Json | null
          refresh_interval?: number | null
          role?: string | null
          search?: string | null
          user?: string | null
        }
        Update: {
          bookmark?: string | null
          collection?: string | null
          color?: string | null
          filter?: Json | null
          icon?: string | null
          id?: number
          layout?: string | null
          layout_options?: Json | null
          layout_query?: Json | null
          refresh_interval?: number | null
          role?: string | null
          search?: string | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'directus_presets_role_foreign'
            columns: ['role']
            isOneToOne: false
            referencedRelation: 'directus_roles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_presets_user_foreign'
            columns: ['user']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      directus_relations: {
        Row: {
          id: number
          junction_field: string | null
          many_collection: string
          many_field: string
          one_allowed_collections: string | null
          one_collection: string | null
          one_collection_field: string | null
          one_deselect_action: string
          one_field: string | null
          sort_field: string | null
        }
        Insert: {
          id?: number
          junction_field?: string | null
          many_collection: string
          many_field: string
          one_allowed_collections?: string | null
          one_collection?: string | null
          one_collection_field?: string | null
          one_deselect_action?: string
          one_field?: string | null
          sort_field?: string | null
        }
        Update: {
          id?: number
          junction_field?: string | null
          many_collection?: string
          many_field?: string
          one_allowed_collections?: string | null
          one_collection?: string | null
          one_collection_field?: string | null
          one_deselect_action?: string
          one_field?: string | null
          sort_field?: string | null
        }
        Relationships: []
      }
      directus_revisions: {
        Row: {
          activity: number
          collection: string
          data: Json | null
          delta: Json | null
          id: number
          item: string
          parent: number | null
          version: string | null
        }
        Insert: {
          activity: number
          collection: string
          data?: Json | null
          delta?: Json | null
          id?: number
          item: string
          parent?: number | null
          version?: string | null
        }
        Update: {
          activity?: number
          collection?: string
          data?: Json | null
          delta?: Json | null
          id?: number
          item?: string
          parent?: number | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'directus_revisions_activity_foreign'
            columns: ['activity']
            isOneToOne: false
            referencedRelation: 'directus_activity'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_revisions_parent_foreign'
            columns: ['parent']
            isOneToOne: false
            referencedRelation: 'directus_revisions'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_revisions_version_foreign'
            columns: ['version']
            isOneToOne: false
            referencedRelation: 'directus_versions'
            referencedColumns: ['id']
          },
        ]
      }
      directus_roles: {
        Row: {
          description: string | null
          icon: string
          id: string
          name: string
          parent: string | null
        }
        Insert: {
          description?: string | null
          icon?: string
          id: string
          name: string
          parent?: string | null
        }
        Update: {
          description?: string | null
          icon?: string
          id?: string
          name?: string
          parent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'directus_roles_parent_foreign'
            columns: ['parent']
            isOneToOne: false
            referencedRelation: 'directus_roles'
            referencedColumns: ['id']
          },
        ]
      }
      directus_sessions: {
        Row: {
          expires: string
          ip: string | null
          next_token: string | null
          origin: string | null
          share: string | null
          token: string
          user: string | null
          user_agent: string | null
        }
        Insert: {
          expires: string
          ip?: string | null
          next_token?: string | null
          origin?: string | null
          share?: string | null
          token: string
          user?: string | null
          user_agent?: string | null
        }
        Update: {
          expires?: string
          ip?: string | null
          next_token?: string | null
          origin?: string | null
          share?: string | null
          token?: string
          user?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'directus_sessions_share_foreign'
            columns: ['share']
            isOneToOne: false
            referencedRelation: 'directus_shares'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_sessions_user_foreign'
            columns: ['user']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      directus_settings: {
        Row: {
          auth_login_attempts: number | null
          auth_password_policy: string | null
          basemaps: Json | null
          custom_aspect_ratios: Json | null
          custom_css: string | null
          default_appearance: string
          default_language: string
          default_theme_dark: string | null
          default_theme_light: string | null
          id: number
          mapbox_key: string | null
          module_bar: Json | null
          project_color: string
          project_descriptor: string | null
          project_logo: string | null
          project_name: string
          project_url: string | null
          public_background: string | null
          public_favicon: string | null
          public_foreground: string | null
          public_note: string | null
          public_registration: boolean
          public_registration_email_filter: Json | null
          public_registration_role: string | null
          public_registration_verify_email: boolean
          report_bug_url: string | null
          report_error_url: string | null
          report_feature_url: string | null
          storage_asset_presets: Json | null
          storage_asset_transform: string | null
          storage_default_folder: string | null
          theme_dark_overrides: Json | null
          theme_light_overrides: Json | null
        }
        Insert: {
          auth_login_attempts?: number | null
          auth_password_policy?: string | null
          basemaps?: Json | null
          custom_aspect_ratios?: Json | null
          custom_css?: string | null
          default_appearance?: string
          default_language?: string
          default_theme_dark?: string | null
          default_theme_light?: string | null
          id?: number
          mapbox_key?: string | null
          module_bar?: Json | null
          project_color?: string
          project_descriptor?: string | null
          project_logo?: string | null
          project_name?: string
          project_url?: string | null
          public_background?: string | null
          public_favicon?: string | null
          public_foreground?: string | null
          public_note?: string | null
          public_registration?: boolean
          public_registration_email_filter?: Json | null
          public_registration_role?: string | null
          public_registration_verify_email?: boolean
          report_bug_url?: string | null
          report_error_url?: string | null
          report_feature_url?: string | null
          storage_asset_presets?: Json | null
          storage_asset_transform?: string | null
          storage_default_folder?: string | null
          theme_dark_overrides?: Json | null
          theme_light_overrides?: Json | null
        }
        Update: {
          auth_login_attempts?: number | null
          auth_password_policy?: string | null
          basemaps?: Json | null
          custom_aspect_ratios?: Json | null
          custom_css?: string | null
          default_appearance?: string
          default_language?: string
          default_theme_dark?: string | null
          default_theme_light?: string | null
          id?: number
          mapbox_key?: string | null
          module_bar?: Json | null
          project_color?: string
          project_descriptor?: string | null
          project_logo?: string | null
          project_name?: string
          project_url?: string | null
          public_background?: string | null
          public_favicon?: string | null
          public_foreground?: string | null
          public_note?: string | null
          public_registration?: boolean
          public_registration_email_filter?: Json | null
          public_registration_role?: string | null
          public_registration_verify_email?: boolean
          report_bug_url?: string | null
          report_error_url?: string | null
          report_feature_url?: string | null
          storage_asset_presets?: Json | null
          storage_asset_transform?: string | null
          storage_default_folder?: string | null
          theme_dark_overrides?: Json | null
          theme_light_overrides?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: 'directus_settings_project_logo_foreign'
            columns: ['project_logo']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_settings_public_background_foreign'
            columns: ['public_background']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_settings_public_favicon_foreign'
            columns: ['public_favicon']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_settings_public_foreground_foreign'
            columns: ['public_foreground']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_settings_public_registration_role_foreign'
            columns: ['public_registration_role']
            isOneToOne: false
            referencedRelation: 'directus_roles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_settings_storage_default_folder_foreign'
            columns: ['storage_default_folder']
            isOneToOne: false
            referencedRelation: 'directus_folders'
            referencedColumns: ['id']
          },
        ]
      }
      directus_shares: {
        Row: {
          collection: string
          date_created: string | null
          date_end: string | null
          date_start: string | null
          id: string
          item: string
          max_uses: number | null
          name: string | null
          password: string | null
          role: string | null
          times_used: number | null
          user_created: string | null
        }
        Insert: {
          collection: string
          date_created?: string | null
          date_end?: string | null
          date_start?: string | null
          id: string
          item: string
          max_uses?: number | null
          name?: string | null
          password?: string | null
          role?: string | null
          times_used?: number | null
          user_created?: string | null
        }
        Update: {
          collection?: string
          date_created?: string | null
          date_end?: string | null
          date_start?: string | null
          id?: string
          item?: string
          max_uses?: number | null
          name?: string | null
          password?: string | null
          role?: string | null
          times_used?: number | null
          user_created?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'directus_shares_collection_foreign'
            columns: ['collection']
            isOneToOne: false
            referencedRelation: 'directus_collections'
            referencedColumns: ['collection']
          },
          {
            foreignKeyName: 'directus_shares_role_foreign'
            columns: ['role']
            isOneToOne: false
            referencedRelation: 'directus_roles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_shares_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      directus_translations: {
        Row: {
          id: string
          key: string
          language: string
          value: string
        }
        Insert: {
          id: string
          key: string
          language: string
          value: string
        }
        Update: {
          id?: string
          key?: string
          language?: string
          value?: string
        }
        Relationships: []
      }
      directus_users: {
        Row: {
          appearance: string | null
          auth_data: Json | null
          avatar: string | null
          description: string | null
          email: string | null
          email_notifications: boolean | null
          external_identifier: string | null
          first_name: string | null
          id: string
          language: string | null
          last_access: string | null
          last_name: string | null
          last_page: string | null
          location: string | null
          password: string | null
          provider: string
          role: string | null
          status: string
          tags: Json | null
          tfa_secret: string | null
          theme_dark: string | null
          theme_dark_overrides: Json | null
          theme_light: string | null
          theme_light_overrides: Json | null
          title: string | null
          token: string | null
        }
        Insert: {
          appearance?: string | null
          auth_data?: Json | null
          avatar?: string | null
          description?: string | null
          email?: string | null
          email_notifications?: boolean | null
          external_identifier?: string | null
          first_name?: string | null
          id: string
          language?: string | null
          last_access?: string | null
          last_name?: string | null
          last_page?: string | null
          location?: string | null
          password?: string | null
          provider?: string
          role?: string | null
          status?: string
          tags?: Json | null
          tfa_secret?: string | null
          theme_dark?: string | null
          theme_dark_overrides?: Json | null
          theme_light?: string | null
          theme_light_overrides?: Json | null
          title?: string | null
          token?: string | null
        }
        Update: {
          appearance?: string | null
          auth_data?: Json | null
          avatar?: string | null
          description?: string | null
          email?: string | null
          email_notifications?: boolean | null
          external_identifier?: string | null
          first_name?: string | null
          id?: string
          language?: string | null
          last_access?: string | null
          last_name?: string | null
          last_page?: string | null
          location?: string | null
          password?: string | null
          provider?: string
          role?: string | null
          status?: string
          tags?: Json | null
          tfa_secret?: string | null
          theme_dark?: string | null
          theme_dark_overrides?: Json | null
          theme_light?: string | null
          theme_light_overrides?: Json | null
          title?: string | null
          token?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'directus_users_role_foreign'
            columns: ['role']
            isOneToOne: false
            referencedRelation: 'directus_roles'
            referencedColumns: ['id']
          },
        ]
      }
      directus_versions: {
        Row: {
          collection: string
          date_created: string | null
          date_updated: string | null
          hash: string | null
          id: string
          item: string
          key: string
          name: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          collection: string
          date_created?: string | null
          date_updated?: string | null
          hash?: string | null
          id: string
          item: string
          key: string
          name?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          collection?: string
          date_created?: string | null
          date_updated?: string | null
          hash?: string | null
          id?: string
          item?: string
          key?: string
          name?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'directus_versions_collection_foreign'
            columns: ['collection']
            isOneToOne: false
            referencedRelation: 'directus_collections'
            referencedColumns: ['collection']
          },
          {
            foreignKeyName: 'directus_versions_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'directus_versions_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      directus_webhooks: {
        Row: {
          actions: string
          collections: string
          data: boolean
          headers: Json | null
          id: number
          method: string
          migrated_flow: string | null
          name: string
          status: string
          url: string
          was_active_before_deprecation: boolean
        }
        Insert: {
          actions: string
          collections: string
          data?: boolean
          headers?: Json | null
          id?: number
          method?: string
          migrated_flow?: string | null
          name: string
          status?: string
          url: string
          was_active_before_deprecation?: boolean
        }
        Update: {
          actions?: string
          collections?: string
          data?: boolean
          headers?: Json | null
          id?: number
          method?: string
          migrated_flow?: string | null
          name?: string
          status?: string
          url?: string
          was_active_before_deprecation?: boolean
        }
        Relationships: [
          {
            foreignKeyName: 'directus_webhooks_migrated_flow_foreign'
            columns: ['migrated_flow']
            isOneToOne: false
            referencedRelation: 'directus_flows'
            referencedColumns: ['id']
          },
        ]
      }
      documentation: {
        Row: {
          anchor_slug: string | null
          block: Json | null
          codefence_css: string | null
          date_created: string | null
          date_updated: string | null
          group: string | null
          group_codeblocks: boolean | null
          id: string
          sort: number | null
          status: string
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          anchor_slug?: string | null
          block?: Json | null
          codefence_css?: string | null
          date_created?: string | null
          date_updated?: string | null
          group?: string | null
          group_codeblocks?: boolean | null
          id: string
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          anchor_slug?: string | null
          block?: Json | null
          codefence_css?: string | null
          date_created?: string | null
          date_updated?: string | null
          group?: string | null
          group_codeblocks?: boolean | null
          id?: string
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'documentation_group_foreign'
            columns: ['group']
            isOneToOne: false
            referencedRelation: 'docummentation_group'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'documentation_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'documentation_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      documentation_page: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: string
          slug: string | null
          sort: number | null
          status: string
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id: string
          slug?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: string
          slug?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'documentation_page_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'documentation_page_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      docummentation_group: {
        Row: {
          date_created: string | null
          date_updated: string | null
          group_slug: string | null
          id: string
          page: string | null
          sort: number | null
          status: string
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          group_slug?: string | null
          id: string
          page?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          group_slug?: string | null
          id?: string
          page?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'docummentation_group_page_foreign'
            columns: ['page']
            isOneToOne: false
            referencedRelation: 'documentation_page'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'docummentation_group_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'docummentation_group_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      feedback: {
        Row: {
          comment_count: number
          created_at: string
          description: string
          id: string
          project_id: string
          raw_tags: Json[] | null
          status: string | null
          title: string
          upvotes: number
          user_id: string
        }
        Insert: {
          comment_count?: number
          created_at?: string
          description: string
          id?: string
          project_id: string
          raw_tags?: Json[] | null
          status?: string | null
          title: string
          upvotes?: number
          user_id: string
        }
        Update: {
          comment_count?: number
          created_at?: string
          description?: string
          id?: string
          project_id?: string
          raw_tags?: Json[] | null
          status?: string | null
          title?: string
          upvotes?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'feedback_project_id_fkey'
            columns: ['project_id']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'feedback_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      feedback_comments: {
        Row: {
          content: string
          created_at: string
          feedback_id: string
          id: string
          reply_to_id: string | null
          upvoters: string[] | null
          upvotes: number
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          feedback_id: string
          id?: string
          reply_to_id?: string | null
          upvoters?: string[] | null
          upvotes?: number
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          feedback_id?: string
          id?: string
          reply_to_id?: string | null
          upvoters?: string[] | null
          upvotes?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'feedback_comments_feedback_id_fkey'
            columns: ['feedback_id']
            isOneToOne: false
            referencedRelation: 'feedback'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'feedback_comments_reply_to_id_fkey'
            columns: ['reply_to_id']
            isOneToOne: false
            referencedRelation: 'feedback_comments'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'feedback_comments_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      feedback_tags: {
        Row: {
          color: string
          created_at: string
          id: string
          name: string
          project_id: string
        }
        Insert: {
          color: string
          created_at?: string
          id?: string
          name: string
          project_id: string
        }
        Update: {
          color?: string
          created_at?: string
          id?: string
          name?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'feedback_tags_project_id_fkey'
            columns: ['project_id']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
        ]
      }
      feedback_upvoters: {
        Row: {
          created_at: string
          feedback_id: string
          id: string
          profile_id: string
        }
        Insert: {
          created_at?: string
          feedback_id: string
          id?: string
          profile_id: string
        }
        Update: {
          created_at?: string
          feedback_id?: string
          id?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'feedback_upvoters_feedback_id_fkey'
            columns: ['feedback_id']
            isOneToOne: false
            referencedRelation: 'feedback'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'feedback_upvoters_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      file: {
        Row: {
          date_created: string | null
          date_updated: string | null
          folder: string | null
          id: string
          is_external: boolean | null
          src: string | null
          src_external: string | null
          title: string | null
          type: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          folder?: string | null
          id: string
          is_external?: boolean | null
          src?: string | null
          src_external?: string | null
          title?: string | null
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          folder?: string | null
          id?: string
          is_external?: boolean | null
          src?: string | null
          src_external?: string | null
          title?: string | null
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'file_folder_foreign'
            columns: ['folder']
            isOneToOne: false
            referencedRelation: 'folder'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'file_src_foreign'
            columns: ['src']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'file_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'file_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      flow_edges: {
        Row: {
          animated: boolean | null
          date_updated: string | null
          deletable: boolean | null
          focusable: boolean | null
          id: string
          label: string | null
          selectable: boolean | null
          source: string | null
          target: string | null
          type: string | null
          user_updated: string | null
        }
        Insert: {
          animated?: boolean | null
          date_updated?: string | null
          deletable?: boolean | null
          focusable?: boolean | null
          id: string
          label?: string | null
          selectable?: boolean | null
          source?: string | null
          target?: string | null
          type?: string | null
          user_updated?: string | null
        }
        Update: {
          animated?: boolean | null
          date_updated?: string | null
          deletable?: boolean | null
          focusable?: boolean | null
          id?: string
          label?: string | null
          selectable?: boolean | null
          source?: string | null
          target?: string | null
          type?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'flow_edges_source_foreign'
            columns: ['source']
            isOneToOne: false
            referencedRelation: 'flow_nodes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'flow_edges_target_foreign'
            columns: ['target']
            isOneToOne: false
            referencedRelation: 'flow_nodes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'flow_edges_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      flow_nodes: {
        Row: {
          connectable: boolean | null
          date_updated: string | null
          deletable: boolean | null
          draggable: boolean | null
          icon: string | null
          id: string
          image: string | null
          posx: number | null
          posy: number | null
          selectable: boolean | null
          subline: string | null
          title: string | null
          type: string | null
          user_updated: string | null
        }
        Insert: {
          connectable?: boolean | null
          date_updated?: string | null
          deletable?: boolean | null
          draggable?: boolean | null
          icon?: string | null
          id: string
          image?: string | null
          posx?: number | null
          posy?: number | null
          selectable?: boolean | null
          subline?: string | null
          title?: string | null
          type?: string | null
          user_updated?: string | null
        }
        Update: {
          connectable?: boolean | null
          date_updated?: string | null
          deletable?: boolean | null
          draggable?: boolean | null
          icon?: string | null
          id?: string
          image?: string | null
          posx?: number | null
          posy?: number | null
          selectable?: boolean | null
          subline?: string | null
          title?: string | null
          type?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'flow_nodes_image_foreign'
            columns: ['image']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'flow_nodes_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      flows: {
        Row: {
          author: string | null
          date_created: string | null
          date_updated: string | null
          excerpt: string | null
          id: string
          image: string | null
          slug: string | null
          sort: number | null
          status: string
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          author?: string | null
          date_created?: string | null
          date_updated?: string | null
          excerpt?: string | null
          id: string
          image?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          author?: string | null
          date_created?: string | null
          date_updated?: string | null
          excerpt?: string | null
          id?: string
          image?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'flows_author_foreign'
            columns: ['author']
            isOneToOne: false
            referencedRelation: 'authors'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'flows_image_foreign'
            columns: ['image']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'flows_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'flows_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      flows_flow_edges: {
        Row: {
          flow_edges_id: string | null
          flows_id: string | null
          id: number
        }
        Insert: {
          flow_edges_id?: string | null
          flows_id?: string | null
          id?: number
        }
        Update: {
          flow_edges_id?: string | null
          flows_id?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'flows_flow_edges_flow_edges_id_foreign'
            columns: ['flow_edges_id']
            isOneToOne: false
            referencedRelation: 'flow_edges'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'flows_flow_edges_flows_id_foreign'
            columns: ['flows_id']
            isOneToOne: false
            referencedRelation: 'flows'
            referencedColumns: ['id']
          },
        ]
      }
      flows_flow_nodes: {
        Row: {
          flow_nodes_id: string | null
          flows_id: string | null
          id: number
        }
        Insert: {
          flow_nodes_id?: string | null
          flows_id?: string | null
          id?: number
        }
        Update: {
          flow_nodes_id?: string | null
          flows_id?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'flows_flow_nodes_flow_nodes_id_foreign'
            columns: ['flow_nodes_id']
            isOneToOne: false
            referencedRelation: 'flow_nodes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'flows_flow_nodes_flows_id_foreign'
            columns: ['flows_id']
            isOneToOne: false
            referencedRelation: 'flows'
            referencedColumns: ['id']
          },
        ]
      }
      folder: {
        Row: {
          id: string
          parent: string | null
          project: string | null
          title: string | null
        }
        Insert: {
          id: string
          parent?: string | null
          project?: string | null
          title?: string | null
        }
        Update: {
          id?: string
          parent?: string | null
          project?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'folder_parent_foreign'
            columns: ['parent']
            isOneToOne: false
            referencedRelation: 'folder'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'folder_project_foreign'
            columns: ['project']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
        ]
      }
      issues: {
        Row: {
          assignee: string | null
          date_created: string | null
          date_updated: string | null
          due_date: string | null
          estimate: string | null
          id: string
          label: string | null
          priority: string | null
          project: string | null
          public_issue_id: number | null
          sort: number | null
          status: string | null
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          assignee?: string | null
          date_created?: string | null
          date_updated?: string | null
          due_date?: string | null
          estimate?: string | null
          id: string
          label?: string | null
          priority?: string | null
          project?: string | null
          public_issue_id?: number | null
          sort?: number | null
          status?: string | null
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          assignee?: string | null
          date_created?: string | null
          date_updated?: string | null
          due_date?: string | null
          estimate?: string | null
          id?: string
          label?: string | null
          priority?: string | null
          project?: string | null
          public_issue_id?: number | null
          sort?: number | null
          status?: string | null
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'issues_assignee_foreign'
            columns: ['assignee']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'issues_project_foreign'
            columns: ['project']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'issues_status_foreign'
            columns: ['status']
            isOneToOne: false
            referencedRelation: 'status'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'issues_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'issues_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      issues_issues: {
        Row: {
          id: number
          issues_id: string | null
          related_issues_id: string | null
        }
        Insert: {
          id?: number
          issues_id?: string | null
          related_issues_id?: string | null
        }
        Update: {
          id?: number
          issues_id?: string | null
          related_issues_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'issues_issues_issues_id_foreign'
            columns: ['issues_id']
            isOneToOne: false
            referencedRelation: 'issues'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'issues_issues_related_issues_id_foreign'
            columns: ['related_issues_id']
            isOneToOne: false
            referencedRelation: 'issues'
            referencedColumns: ['id']
          },
        ]
      }
      logos: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: string
          logo: string | null
          logo_onDark: string | null
          logomark: string | null
          logomark_3dWireframe: string | null
          logomark_3dWireframe_onDark: string | null
          logomark_backgroundFill: string | null
          logomark_backgroundFill_onDark: string | null
          logomark_onDark: string | null
          logotype: string | null
          logotype_onDark: string | null
          sort: number | null
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id: string
          logo?: string | null
          logo_onDark?: string | null
          logomark?: string | null
          logomark_3dWireframe?: string | null
          logomark_3dWireframe_onDark?: string | null
          logomark_backgroundFill?: string | null
          logomark_backgroundFill_onDark?: string | null
          logomark_onDark?: string | null
          logotype?: string | null
          logotype_onDark?: string | null
          sort?: number | null
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: string
          logo?: string | null
          logo_onDark?: string | null
          logomark?: string | null
          logomark_3dWireframe?: string | null
          logomark_3dWireframe_onDark?: string | null
          logomark_backgroundFill?: string | null
          logomark_backgroundFill_onDark?: string | null
          logomark_onDark?: string | null
          logotype?: string | null
          logotype_onDark?: string | null
          sort?: number | null
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'logos_logo_foreign'
            columns: ['logo']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'logos_logo_ondark_foreign'
            columns: ['logo_onDark']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'logos_logomark_3dwireframe_foreign'
            columns: ['logomark_3dWireframe']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'logos_logomark_3dwireframe_ondark_foreign'
            columns: ['logomark_3dWireframe_onDark']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'logos_logomark_backgroundfill_foreign'
            columns: ['logomark_backgroundFill']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'logos_logomark_backgroundfill_ondark_foreign'
            columns: ['logomark_backgroundFill_onDark']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'logos_logomark_foreign'
            columns: ['logomark']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'logos_logomark_ondark_foreign'
            columns: ['logomark_onDark']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'logos_logotype_foreign'
            columns: ['logotype']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'logos_logotype_ondark_foreign'
            columns: ['logotype_onDark']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'logos_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'logos_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      notifications: {
        Row: {
          comment_id: string | null
          created_at: string
          feedback_id: string
          has_archived: string[] | null
          id: string
          initiator_id: string
          project_id: string
          type: Database['public']['Enums']['notification_types']
        }
        Insert: {
          comment_id?: string | null
          created_at?: string
          feedback_id: string
          has_archived?: string[] | null
          id?: string
          initiator_id: string
          project_id: string
          type: Database['public']['Enums']['notification_types']
        }
        Update: {
          comment_id?: string | null
          created_at?: string
          feedback_id?: string
          has_archived?: string[] | null
          id?: string
          initiator_id?: string
          project_id?: string
          type?: Database['public']['Enums']['notification_types']
        }
        Relationships: [
          {
            foreignKeyName: 'notifications_comment_id_fkey'
            columns: ['comment_id']
            isOneToOne: false
            referencedRelation: 'feedback_comments'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'notifications_feedback_id_fkey'
            columns: ['feedback_id']
            isOneToOne: false
            referencedRelation: 'feedback'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'notifications_initiator_id_fkey'
            columns: ['initiator_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'notifications_project_id_fkey'
            columns: ['project_id']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          email: string
          full_name: string | null
          id: string
        }
        Insert: {
          avatar_url?: string | null
          email: string
          full_name?: string | null
          id?: string
        }
        Update: {
          avatar_url?: string | null
          email?: string
          full_name?: string | null
          id?: string
        }
        Relationships: []
      }
      project_api_keys: {
        Row: {
          created_at: string
          creator_id: string
          id: string
          name: string
          permission: Database['public']['Enums']['token_type']
          project_id: string
          short_token: string
          token: string
        }
        Insert: {
          created_at?: string
          creator_id: string
          id?: string
          name: string
          permission: Database['public']['Enums']['token_type']
          project_id: string
          short_token: string
          token: string
        }
        Update: {
          created_at?: string
          creator_id?: string
          id?: string
          name?: string
          permission?: Database['public']['Enums']['token_type']
          project_id?: string
          short_token?: string
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: 'project_api_keys_creator_id_fkey'
            columns: ['creator_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'project_api_keys_project_id_fkey'
            columns: ['project_id']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
        ]
      }
      project_configs: {
        Row: {
          changelog_enabled: boolean
          changelog_preview_style: string
          changelog_twitter_handle: string | null
          created_at: string
          custom_domain: string | null
          custom_domain_verified: boolean | null
          custom_theme: Database['public']['Enums']['theme_type']
          custom_theme_accent: string | null
          custom_theme_background: string | null
          custom_theme_border: string | null
          custom_theme_primary_foreground: string | null
          custom_theme_root: string | null
          custom_theme_secondary_background: string | null
          feedback_allow_anon_upvoting: boolean | null
          id: string
          integration_discord_role_id: string | null
          integration_discord_status: boolean
          integration_discord_webhook: string | null
          integration_slack_status: boolean
          integration_slack_webhook: string | null
          integration_sso_secret: string | null
          integration_sso_status: boolean | null
          integration_sso_url: string | null
          logo_redirect_url: string | null
          project_id: string
        }
        Insert: {
          changelog_enabled?: boolean
          changelog_preview_style?: string
          changelog_twitter_handle?: string | null
          created_at?: string
          custom_domain?: string | null
          custom_domain_verified?: boolean | null
          custom_theme?: Database['public']['Enums']['theme_type']
          custom_theme_accent?: string | null
          custom_theme_background?: string | null
          custom_theme_border?: string | null
          custom_theme_primary_foreground?: string | null
          custom_theme_root?: string | null
          custom_theme_secondary_background?: string | null
          feedback_allow_anon_upvoting?: boolean | null
          id?: string
          integration_discord_role_id?: string | null
          integration_discord_status?: boolean
          integration_discord_webhook?: string | null
          integration_slack_status?: boolean
          integration_slack_webhook?: string | null
          integration_sso_secret?: string | null
          integration_sso_status?: boolean | null
          integration_sso_url?: string | null
          logo_redirect_url?: string | null
          project_id: string
        }
        Update: {
          changelog_enabled?: boolean
          changelog_preview_style?: string
          changelog_twitter_handle?: string | null
          created_at?: string
          custom_domain?: string | null
          custom_domain_verified?: boolean | null
          custom_theme?: Database['public']['Enums']['theme_type']
          custom_theme_accent?: string | null
          custom_theme_background?: string | null
          custom_theme_border?: string | null
          custom_theme_primary_foreground?: string | null
          custom_theme_root?: string | null
          custom_theme_secondary_background?: string | null
          feedback_allow_anon_upvoting?: boolean | null
          id?: string
          integration_discord_role_id?: string | null
          integration_discord_status?: boolean
          integration_discord_webhook?: string | null
          integration_slack_status?: boolean
          integration_slack_webhook?: string | null
          integration_sso_secret?: string | null
          integration_sso_status?: boolean | null
          integration_sso_url?: string | null
          logo_redirect_url?: string | null
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'project_configs_project_id_fkey'
            columns: ['project_id']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
        ]
      }
      project_invites: {
        Row: {
          accepted: boolean
          created_at: string
          creator_id: string
          email: string
          id: string
          project_id: string
        }
        Insert: {
          accepted?: boolean
          created_at?: string
          creator_id: string
          email: string
          id?: string
          project_id: string
        }
        Update: {
          accepted?: boolean
          created_at?: string
          creator_id?: string
          email?: string
          id?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'project_invites_creator_id_fkey'
            columns: ['creator_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'project_invites_project_id_fkey'
            columns: ['project_id']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
        ]
      }
      project_members: {
        Row: {
          created_at: string | null
          id: string
          member_id: string
          project_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          member_id: string
          project_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          member_id?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'project_members_member_id_fkey'
            columns: ['member_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'project_members_project_id_fkey'
            columns: ['project_id']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
        ]
      }
      projects: {
        Row: {
          base_type: string | null
          base_type_sample: string | null
          brand_color_primary: string | null
          code_type: string | null
          code_type_sample: string | null
          component_animatedLogo_stroked: string | null
          componentPath_animatedLogo_stroked: string | null
          content_block: string | null
          date_created: string | null
          date_updated: string | null
          excerpt: string | null
          expressive_type: string | null
          expressive_type_sample: string | null
          icon_radius: string | null
          id: string
          link_behance: string | null
          link_dribbble: string | null
          link_github: string | null
          link_gitlab: string | null
          link_instagram: string | null
          logo: string | null
          logo_3d: string | null
          logo_creative: string | null
          logo_type: string | null
          logo_type_sample: string | null
          logo_wireframe: string | null
          logos: string | null
          og_image: string | null
          primary_image: string | null
          public: boolean | null
          slug: string
          sort: number | null
          status: string | null
          title: string | null
          user_created: string | null
          user_updated: string | null
          workspace: string | null
        }
        Insert: {
          base_type?: string | null
          base_type_sample?: string | null
          brand_color_primary?: string | null
          code_type?: string | null
          code_type_sample?: string | null
          component_animatedLogo_stroked?: string | null
          componentPath_animatedLogo_stroked?: string | null
          content_block?: string | null
          date_created?: string | null
          date_updated?: string | null
          excerpt?: string | null
          expressive_type?: string | null
          expressive_type_sample?: string | null
          icon_radius?: string | null
          id: string
          link_behance?: string | null
          link_dribbble?: string | null
          link_github?: string | null
          link_gitlab?: string | null
          link_instagram?: string | null
          logo?: string | null
          logo_3d?: string | null
          logo_creative?: string | null
          logo_type?: string | null
          logo_type_sample?: string | null
          logo_wireframe?: string | null
          logos?: string | null
          og_image?: string | null
          primary_image?: string | null
          public?: boolean | null
          slug: string
          sort?: number | null
          status?: string | null
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
          workspace?: string | null
        }
        Update: {
          base_type?: string | null
          base_type_sample?: string | null
          brand_color_primary?: string | null
          code_type?: string | null
          code_type_sample?: string | null
          component_animatedLogo_stroked?: string | null
          componentPath_animatedLogo_stroked?: string | null
          content_block?: string | null
          date_created?: string | null
          date_updated?: string | null
          excerpt?: string | null
          expressive_type?: string | null
          expressive_type_sample?: string | null
          icon_radius?: string | null
          id?: string
          link_behance?: string | null
          link_dribbble?: string | null
          link_github?: string | null
          link_gitlab?: string | null
          link_instagram?: string | null
          logo?: string | null
          logo_3d?: string | null
          logo_creative?: string | null
          logo_type?: string | null
          logo_type_sample?: string | null
          logo_wireframe?: string | null
          logos?: string | null
          og_image?: string | null
          primary_image?: string | null
          public?: boolean | null
          slug?: string
          sort?: number | null
          status?: string | null
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
          workspace?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'projects_base_type_sample_foreign'
            columns: ['base_type_sample']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'projects_code_type_sample_foreign'
            columns: ['code_type_sample']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'projects_expressive_type_sample_foreign'
            columns: ['expressive_type_sample']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'projects_logo_3d_foreign'
            columns: ['logo_3d']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'projects_logo_creative_foreign'
            columns: ['logo_creative']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'projects_logo_foreign'
            columns: ['logo']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'projects_logo_type_sample_foreign'
            columns: ['logo_type_sample']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'projects_logo_wireframe_foreign'
            columns: ['logo_wireframe']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'projects_logos_foreign'
            columns: ['logos']
            isOneToOne: false
            referencedRelation: 'logos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'projects_primary_image_foreign'
            columns: ['primary_image']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'projects_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'projects_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'projects_workspace_foreign'
            columns: ['workspace']
            isOneToOne: false
            referencedRelation: 'workspaces'
            referencedColumns: ['id']
          },
        ]
      }
      projects_design_tokens: {
        Row: {
          design_tokens_id: string | null
          id: number
          projects_id: string | null
        }
        Insert: {
          design_tokens_id?: string | null
          id?: number
          projects_id?: string | null
        }
        Update: {
          design_tokens_id?: string | null
          id?: number
          projects_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'projects_design_tokens_design_tokens_id_foreign'
            columns: ['design_tokens_id']
            isOneToOne: false
            referencedRelation: 'design_tokens'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'projects_design_tokens_projects_id_foreign'
            columns: ['projects_id']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
        ]
      }
      projects_files: {
        Row: {
          directus_files_id: string | null
          id: number
          projects_id: string | null
        }
        Insert: {
          directus_files_id?: string | null
          id?: number
          projects_id?: string | null
        }
        Update: {
          directus_files_id?: string | null
          id?: number
          projects_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'projects_files_directus_files_id_foreign'
            columns: ['directus_files_id']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'projects_files_projects_id_foreign'
            columns: ['projects_id']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
        ]
      }
      repos: {
        Row: {
          date_created: string | null
          date_updated: string | null
          excerpt: string | null
          gitlab_project_id: string | null
          id: string
          image: string | null
          sort: number | null
          status: string
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          excerpt?: string | null
          gitlab_project_id?: string | null
          id: string
          image?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          excerpt?: string | null
          gitlab_project_id?: string | null
          id?: string
          image?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'repos_image_foreign'
            columns: ['image']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'repos_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'repos_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      resumes: {
        Row: {
          date_created: string | null
          date_updated: string | null
          email: string | null
          id: string
          image: string | null
          label: string | null
          phone: string | null
          skills: Json | null
          sort: number | null
          status: string
          summary: string | null
          title: string | null
          url: string | null
          user_created: string | null
          user_updated: string | null
          work: Json | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          email?: string | null
          id: string
          image?: string | null
          label?: string | null
          phone?: string | null
          skills?: Json | null
          sort?: number | null
          status?: string
          summary?: string | null
          title?: string | null
          url?: string | null
          user_created?: string | null
          user_updated?: string | null
          work?: Json | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          email?: string | null
          id?: string
          image?: string | null
          label?: string | null
          phone?: string | null
          skills?: Json | null
          sort?: number | null
          status?: string
          summary?: string | null
          title?: string | null
          url?: string | null
          user_created?: string | null
          user_updated?: string | null
          work?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: 'resumes_image_foreign'
            columns: ['image']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'resumes_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'resumes_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      roadmaps: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: string
          projects_id: string | null
          slug: string | null
          sort: number | null
          status: string
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id: string
          projects_id?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: string
          projects_id?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'roadmaps_projects_id_foreign'
            columns: ['projects_id']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'roadmaps_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'roadmaps_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      showcase_templates: {
        Row: {
          date_created: string | null
          date_updated: string | null
          flow: string | null
          id: string
          sort: number | null
          status: string
          title: string | null
          type: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          flow?: string | null
          id: string
          sort?: number | null
          status?: string
          title?: string | null
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          flow?: string | null
          id?: string
          sort?: number | null
          status?: string
          title?: string | null
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'showcase_templates_flow_foreign'
            columns: ['flow']
            isOneToOne: false
            referencedRelation: 'flows'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'showcase_templates_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'showcase_templates_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      showcase_templates_design_tokens: {
        Row: {
          design_tokens_id: string | null
          id: number
          showcase_templates_id: string | null
        }
        Insert: {
          design_tokens_id?: string | null
          id?: number
          showcase_templates_id?: string | null
        }
        Update: {
          design_tokens_id?: string | null
          id?: number
          showcase_templates_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'showcase_templates_design_tokens_design_tokens_id_foreign'
            columns: ['design_tokens_id']
            isOneToOne: false
            referencedRelation: 'design_tokens'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'showcase_templates_design_tokens_showcase___315292ac_foreign'
            columns: ['showcase_templates_id']
            isOneToOne: false
            referencedRelation: 'showcase_templates'
            referencedColumns: ['id']
          },
        ]
      }
      showcase_templates_files: {
        Row: {
          directus_files_id: string | null
          id: number
          showcase_templates_id: string | null
        }
        Insert: {
          directus_files_id?: string | null
          id?: number
          showcase_templates_id?: string | null
        }
        Update: {
          directus_files_id?: string | null
          id?: number
          showcase_templates_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'showcase_templates_files_directus_files_id_foreign'
            columns: ['directus_files_id']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'showcase_templates_files_showcase_templates_id_foreign'
            columns: ['showcase_templates_id']
            isOneToOne: false
            referencedRelation: 'showcase_templates'
            referencedColumns: ['id']
          },
        ]
      }
      sites: {
        Row: {
          date_created: string | null
          date_updated: string | null
          description: string | null
          domain: string | null
          id: string
          social_behance: string | null
          social_discord: string | null
          social_docker: string | null
          social_dribbble: string | null
          social_email: string | null
          social_facebook: string | null
          social_figma: string | null
          social_github: string | null
          social_gitlab: string | null
          social_instagram: string | null
          social_linkedin: string | null
          social_slack: string | null
          social_x: string | null
          social_youtube: string | null
          sort: number | null
          status: string
          title: string | null
          user_created: string | null
          user_updated: string | null
          workspace: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          domain?: string | null
          id: string
          social_behance?: string | null
          social_discord?: string | null
          social_docker?: string | null
          social_dribbble?: string | null
          social_email?: string | null
          social_facebook?: string | null
          social_figma?: string | null
          social_github?: string | null
          social_gitlab?: string | null
          social_instagram?: string | null
          social_linkedin?: string | null
          social_slack?: string | null
          social_x?: string | null
          social_youtube?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
          workspace?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          domain?: string | null
          id?: string
          social_behance?: string | null
          social_discord?: string | null
          social_docker?: string | null
          social_dribbble?: string | null
          social_email?: string | null
          social_facebook?: string | null
          social_figma?: string | null
          social_github?: string | null
          social_gitlab?: string | null
          social_instagram?: string | null
          social_linkedin?: string | null
          social_slack?: string | null
          social_x?: string | null
          social_youtube?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
          workspace?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'sites_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'sites_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'sites_workspace_foreign'
            columns: ['workspace']
            isOneToOne: false
            referencedRelation: 'workspaces'
            referencedColumns: ['id']
          },
        ]
      }
      sites_social_networks: {
        Row: {
          id: number
          sites_id: string | null
          social_networks_id: string | null
        }
        Insert: {
          id?: number
          sites_id?: string | null
          social_networks_id?: string | null
        }
        Update: {
          id?: number
          sites_id?: string | null
          social_networks_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'sites_social_networks_sites_id_foreign'
            columns: ['sites_id']
            isOneToOne: false
            referencedRelation: 'sites'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'sites_social_networks_social_networks_id_foreign'
            columns: ['social_networks_id']
            isOneToOne: false
            referencedRelation: 'social_networks'
            referencedColumns: ['id']
          },
        ]
      }
      social_networks: {
        Row: {
          date_updated: string | null
          href: string | null
          id: string
          logomark: string | null
          logotype: string | null
          title: string | null
          user_updated: string | null
        }
        Insert: {
          date_updated?: string | null
          href?: string | null
          id: string
          logomark?: string | null
          logotype?: string | null
          title?: string | null
          user_updated?: string | null
        }
        Update: {
          date_updated?: string | null
          href?: string | null
          id?: string
          logomark?: string | null
          logotype?: string | null
          title?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'social_networks_logomark_foreign'
            columns: ['logomark']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'social_networks_logotype_foreign'
            columns: ['logotype']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'social_networks_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      social_networks_files: {
        Row: {
          directus_files_id: string | null
          id: number
          social_networks_id: string | null
        }
        Insert: {
          directus_files_id?: string | null
          id?: number
          social_networks_id?: string | null
        }
        Update: {
          directus_files_id?: string | null
          id?: number
          social_networks_id?: string | null
        }
        Relationships: []
      }
      status: {
        Row: {
          color: string | null
          id: string
          label: string | null
          value: string | null
        }
        Insert: {
          color?: string | null
          id: string
          label?: string | null
          value?: string | null
        }
        Update: {
          color?: string | null
          id?: string
          label?: string | null
          value?: string | null
        }
        Relationships: []
      }
      stylesheets: {
        Row: {
          date_updated: string | null
          id: string
          src: string | null
          tailwind_config: string | null
          title: string | null
          user_updated: string | null
        }
        Insert: {
          date_updated?: string | null
          id: string
          src?: string | null
          tailwind_config?: string | null
          title?: string | null
          user_updated?: string | null
        }
        Update: {
          date_updated?: string | null
          id?: string
          src?: string | null
          tailwind_config?: string | null
          title?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'stylesheets_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      teams: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: string
          private_team: boolean | null
          sort: number | null
          status: string
          team_identifier: string | null
          team_owner: string | null
          user_created: string | null
          user_updated: string | null
          workspace: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id: string
          private_team?: boolean | null
          sort?: number | null
          status?: string
          team_identifier?: string | null
          team_owner?: string | null
          user_created?: string | null
          user_updated?: string | null
          workspace?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: string
          private_team?: boolean | null
          sort?: number | null
          status?: string
          team_identifier?: string | null
          team_owner?: string | null
          user_created?: string | null
          user_updated?: string | null
          workspace?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'teams_team_owner_foreign'
            columns: ['team_owner']
            isOneToOne: false
            referencedRelation: 'accounts'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'teams_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'teams_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'teams_workspace_foreign'
            columns: ['workspace']
            isOneToOne: false
            referencedRelation: 'workspaces'
            referencedColumns: ['id']
          },
        ]
      }
      teams_accounts: {
        Row: {
          accounts_id: string | null
          id: number
          teams_id: string | null
        }
        Insert: {
          accounts_id?: string | null
          id?: number
          teams_id?: string | null
        }
        Update: {
          accounts_id?: string | null
          id?: number
          teams_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'teams_accounts_accounts_id_foreign'
            columns: ['accounts_id']
            isOneToOne: false
            referencedRelation: 'accounts'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'teams_accounts_teams_id_foreign'
            columns: ['teams_id']
            isOneToOne: false
            referencedRelation: 'teams'
            referencedColumns: ['id']
          },
        ]
      }
      technology: {
        Row: {
          id: string
          logo: string | null
          name: string | null
        }
        Insert: {
          id: string
          logo?: string | null
          name?: string | null
        }
        Update: {
          id?: string
          logo?: string | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'technology_logo_foreign'
            columns: ['logo']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
        ]
      }
      themes: {
        Row: {
          build_template: string | null
          date_updated: string | null
          id: string
          logo: string | null
          logos: string | null
          slug: string | null
          status: string
          title: string | null
          user_updated: string | null
        }
        Insert: {
          build_template?: string | null
          date_updated?: string | null
          id: string
          logo?: string | null
          logos?: string | null
          slug?: string | null
          status?: string
          title?: string | null
          user_updated?: string | null
        }
        Update: {
          build_template?: string | null
          date_updated?: string | null
          id?: string
          logo?: string | null
          logos?: string | null
          slug?: string | null
          status?: string
          title?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'themes_build_template_foreign'
            columns: ['build_template']
            isOneToOne: false
            referencedRelation: 'codeblock_template_astro'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'themes_logo_foreign'
            columns: ['logo']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'themes_logos_foreign'
            columns: ['logos']
            isOneToOne: false
            referencedRelation: 'logos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'themes_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      themes_stylesheets: {
        Row: {
          id: number
          stylesheets_id: string | null
          themes_id: string | null
        }
        Insert: {
          id?: number
          stylesheets_id?: string | null
          themes_id?: string | null
        }
        Update: {
          id?: number
          stylesheets_id?: string | null
          themes_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'themes_stylesheets_stylesheets_id_foreign'
            columns: ['stylesheets_id']
            isOneToOne: false
            referencedRelation: 'stylesheets'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'themes_stylesheets_themes_id_foreign'
            columns: ['themes_id']
            isOneToOne: false
            referencedRelation: 'themes'
            referencedColumns: ['id']
          },
        ]
      }
      themes_typefaces: {
        Row: {
          id: number
          themes_id: string | null
          typefaces_id: string | null
        }
        Insert: {
          id?: number
          themes_id?: string | null
          typefaces_id?: string | null
        }
        Update: {
          id?: number
          themes_id?: string | null
          typefaces_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'themes_typefaces_themes_id_foreign'
            columns: ['themes_id']
            isOneToOne: false
            referencedRelation: 'themes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'themes_typefaces_typefaces_id_foreign'
            columns: ['typefaces_id']
            isOneToOne: false
            referencedRelation: 'typefaces'
            referencedColumns: ['id']
          },
        ]
      }
      typefaces: {
        Row: {
          id: string
          static: Json | null
          title: string | null
          variable: string | null
        }
        Insert: {
          id: string
          static?: Json | null
          title?: string | null
          variable?: string | null
        }
        Update: {
          id?: string
          static?: Json | null
          title?: string | null
          variable?: string | null
        }
        Relationships: []
      }
      waitlist: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      work: {
        Row: {
          content_block: string | null
          date_created: string | null
          date_updated: string | null
          excerpt: string | null
          id: string
          is_brand_showcase: boolean | null
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
        }
        Insert: {
          content_block?: string | null
          date_created?: string | null
          date_updated?: string | null
          excerpt?: string | null
          id: string
          is_brand_showcase?: boolean | null
          like?: number
          link_behance?: string | null
          link_dribbble?: string | null
          link_instagram?: string | null
          primary_color?: string | null
          primary_image?: string | null
          project?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          content_block?: string | null
          date_created?: string | null
          date_updated?: string | null
          excerpt?: string | null
          id?: string
          is_brand_showcase?: boolean | null
          like?: number
          link_behance?: string | null
          link_dribbble?: string | null
          link_instagram?: string | null
          primary_color?: string | null
          primary_image?: string | null
          project?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'work_primary_image_foreign'
            columns: ['primary_image']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'work_project_foreign'
            columns: ['project']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'work_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'work_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
      work_showcase_templates: {
        Row: {
          id: number
          showcase_templates_id: string | null
          work_id: string | null
        }
        Insert: {
          id?: number
          showcase_templates_id?: string | null
          work_id?: string | null
        }
        Update: {
          id?: number
          showcase_templates_id?: string | null
          work_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'work_showcase_templates_showcase_templates_id_foreign'
            columns: ['showcase_templates_id']
            isOneToOne: false
            referencedRelation: 'showcase_templates'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'work_showcase_templates_work_id_foreign'
            columns: ['work_id']
            isOneToOne: false
            referencedRelation: 'work'
            referencedColumns: ['id']
          },
        ]
      }
      work_technology: {
        Row: {
          id: number
          technology_id: string | null
          work_id: string | null
        }
        Insert: {
          id?: number
          technology_id?: string | null
          work_id?: string | null
        }
        Update: {
          id?: number
          technology_id?: string | null
          work_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'work_technology_technology_id_foreign'
            columns: ['technology_id']
            isOneToOne: false
            referencedRelation: 'technology'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'work_technology_work_id_foreign'
            columns: ['work_id']
            isOneToOne: false
            referencedRelation: 'work'
            referencedColumns: ['id']
          },
        ]
      }
      workspaces: {
        Row: {
          admin: string | null
          date_created: string | null
          date_updated: string | null
          id: string
          logo: string | null
          logos: string | null
          slug: string | null
          sort: number | null
          status: string
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          admin?: string | null
          date_created?: string | null
          date_updated?: string | null
          id: string
          logo?: string | null
          logos?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          admin?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: string
          logo?: string | null
          logos?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'workspaces_admin_foreign'
            columns: ['admin']
            isOneToOne: false
            referencedRelation: 'accounts'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'workspaces_logo_foreign'
            columns: ['logo']
            isOneToOne: false
            referencedRelation: 'directus_files'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'workspaces_logos_foreign'
            columns: ['logos']
            isOneToOne: false
            referencedRelation: 'logos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'workspaces_user_created_foreign'
            columns: ['user_created']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'workspaces_user_updated_foreign'
            columns: ['user_updated']
            isOneToOne: false
            referencedRelation: 'directus_users'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_allowed_api_token: {
        Args: {
          apitoken: string
          tokentype: Database['public']['Enums']['token_type'][]
        }
        Returns: boolean
      }
    }
    Enums: {
      notification_types: 'comment' | 'post'
      theme_type: 'default' | 'light' | 'custom'
      token_type: 'full_access' | 'public_access'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never
