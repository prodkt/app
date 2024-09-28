/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */

// import type { Database } from '@/database.types'
// import type { CookieOptions } from '@supabase/ssr'

import type { Database } from '@/database.types'
import type {
  ApiResponse,
  ErrorProps,
  FeedbackProps,
  ProfileProps,
  ProjectProps,
} from '@/lib/types'
import type { CookieOptions } from '@supabase/ssr'
import type { SupabaseClient, UserMetadata } from '@supabase/supabase-js'
import type { APIContext, AstroGlobal } from 'astro'

import { createServerClient, parseCookieHeader } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anonymous Key')
}

// const options: SupabaseClientOptions<'public'> = {
//   db: {},
//   auth: {
//     flowType: 'pkce',
//     autoRefreshToken: false,
//     detectSessionInUrl: false,
//     persistSession: true,
//   },
//   global: {
//     headers: {
//       'x-prodkt-cloud': 'Prodkt from Bryan Funk',
//       // cookies: {
//       //   get: (name: string) => string;
//       //   set: (name: string, value: string, options: Partial<CookieSerializeOptions>) => void;
//       //   remove: (name: string, options: Partial<CookieSerializeOptions>) => void;
//       // };
//     },
//   },
// }

export interface ClientCookiesConfig {
  cookies: {
    get?: (name: string) => string | undefined
    set?: (name: string, value: string, options: CookieOptions) => void
    remove?: (name: string, options: CookieOptions) => void
  }
}

/**
 *
 * @param cookieStore
 * @param operations
 */
function createCookiesConfig(
  cookieStore: APIContext['cookies'],
  operations: ('get' | 'set' | 'remove')[],
): ClientCookiesConfig {
  const config: ClientCookiesConfig = {
    cookies: {},
  }

  operations.forEach((operation) => {
    switch (operation) {
      case 'get':
        config.cookies.get = (name: string) => cookieStore.get(name)?.value
        break
      case 'set':
        config.cookies.set = (
          name: string,
          value: string,
          options: CookieOptions,
        ) => {
          cookieStore.set(name, value, options)
        }
        break
      case 'remove':
        config.cookies.remove = (name: string, options: CookieOptions) => {
          cookieStore.set(name, '', { ...options })
        }
        break
      default:
        throw new Error(`Invalid operation: ${operation as string}`)
    }
  })

  return config
}

/**
 *
 * @param context
 * @param isPublic
 */
export async function GET(context: APIContext | AstroGlobal, isPublic = false) {
  const headerStore = context.request.headers
  const cookieStore = context.cookies
  // let headerStore: Headers

  // if (context?.request.headers) {
  //   // This covers both APIContext and AstroGlobal
  //   headerStore = context.request.headers
  //   cookieStore = context.cookies
  // } else if (context?.url) {
  //   // This is likely an Astro.props context
  //   headerStore = context.request.headers
  //   cookieStore = context.cookies
  // }

  // If we can't get headers or cookies, we'll return early
  // const assertedHeaderStore = headerStore;

  const authHeader = headerStore.get('authorization')

  const supabase = createServerClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        ...createCookiesConfig(cookieStore, ['get', 'set', 'remove']),
        getAll() {
          return parseCookieHeader(context.request.headers.get('Cookie') ?? '')
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        },
      },
      auth: {
        flowType: 'pkce',
        autoRefreshToken: false,
        detectSessionInUrl: false,
        persistSession: true,
      },
      global: {
        headers: {
          lumkey: headerStore.get('lumkey') ?? '',
        },
      },
    },
  )

  // If auth header exists, validate api key
  if (authHeader) {
    // Get api key from auth header
    const apiKey = authHeader.split(' ')[1]

    // Fetch api key
    const { data, error } = (await supabase
      .from('project_api_keys')
      .select('project_id, permission, creator:creator_id (*)')
      .eq('token', apiKey)
      .single()) as unknown as {
      data: {
        permission: 'full_access' | 'public_access'
        creator: ProfileProps['Row']
        project_id: string
      }
      error: ErrorProps
    }

    // If error is not null, then the api key is invalid
    if (error.message) {
      return {
        supabase,
        user: { data: null, error },
      }
    }

    // TODO: Expand this further, also supporting public access for feedback etc.
    if (data.permission === 'public_access' && !isPublic) {
      return {
        supabase,
        user: {
          data: null,
          error: { message: 'unauthorized, missing permissions.', status: 403 },
        },
      }
    }

    return {
      supabase,
      user: { data: { user: data.creator }, error: null },
      apiKey: data,
    }
  }

  const user = await supabase.auth.getUser()

  return { supabase, user, apiKey: null }
}

export const supabase = GET

type WithProjectAuthHandler<T> = (
  user: UserMetadata | null,
  supabase: SupabaseClient<Database>,
  project: ProjectProps['Row'] | null,
  error: ErrorProps | null,
  allowPublic?: boolean,
) => ApiResponse<T>

// withProjectAuth is a helper function that can be used to wrap API routes
// Ensures that the user is logged in and is a member of the project with the given slug
// allowAnonAccess = true bypasses complete user auth and project auth checks
// requireLogin = true requires the user to be logged in, even if allowAnonAccess is true
export const withProjectAuth = <T,>(handler: WithProjectAuthHandler<T>) => {
  return async (
    context: APIContext,
    slug: string,
    allowAnonAccess = false,
    requireLogin = true,
  ) => {
    // Get the user from the session
    const result = await GET(context, allowAnonAccess)
    const { supabase, user, apiKey } = result

    // If user.error is not null, then the user is likely not logged in
    if ((user.error !== null && requireLogin) || user.data === null) {
      return handler(null, supabase as SupabaseClient<Database>, null, {
        message:
          user.error.message === 'invalid claim: missing sub claim'
            ? 'unauthorized, login required.'
            : user.error.message || 'Unauthorized',
        status: user.error.status ?? 401,
      })
    }
    const getSupabaseData = supabase as SupabaseClient<Database>
    // Get project from database
    const { data: project, error } = await getSupabaseData
      .from('projects')
      .select()
      .eq('slug', slug)
      .single()

    // If error is not null, then the project does not exist
    if (error) {
      return handler(
        user.data.user ?? null,
        supabase as SupabaseClient<Database>,
        project,
        {
          message: 'project not found.',
          status: 404,
        },
      )
    }

    // If api key exists, check if the api key has access to the project
    if (apiKey && apiKey.project_id !== project.id) {
      return handler(
        user.data.user,
        supabase as SupabaseClient<Database>,
        project as ProjectProps['Row'],
        {
          message: 'unauthorized, invalid api key.',
          status: 401,
        },
      )
    }

    // Check if user is a member of the project
    if (!allowAnonAccess) {
      const { error: projectMemberError } = await getSupabaseData
        .from('project_members')
        .select()
        .eq('project_id', project.id)
        .eq('member_id', user.data.user?.id ?? '')
        .single()

      // If not null, user is not a member of the project and should not be able to access it
      if (projectMemberError) {
        return handler(
          user.data.user ?? null,
          supabase as SupabaseClient<Database>,
          project as ProjectProps['Row'],
          {
            message: 'project not found.',
            status: 404,
          },
        )
      }
    }

    return handler(
      user.data.user ?? null,
      supabase as SupabaseClient<Database>,
      project as ProjectProps['Row'],
      null,
      allowAnonAccess,
    )
  }
}

type WithFeedbackAuthHandler<T> = (
  user: UserMetadata | null,
  supabase: SupabaseClient<Database>,
  feedback: FeedbackProps['Row'] | null,
  project: ProjectProps['Row'] | null,
  error: ErrorProps | null,
) => ApiResponse<T>

// withFeedbackAuth is a helper function that can be used to wrap API routes
// Ensures that the user is logged in and is authorized to access the feedback post with the given id

export const withFeedbackAuth = <T,>(handler: WithFeedbackAuthHandler<T>) => {
  return async (
    id: string,
    slug: string,
    requireLogin = true,
    context: APIContext,
    allowAnonAccess = false,
  ) => {
    // Get the user from the session
    const result = await GET(context, allowAnonAccess)
    const { supabase, user } = result

    // If user.error is not null, then the user is likely not logged in
    if ((user.error !== null && requireLogin) || user.data === null) {
      return handler(null, supabase as SupabaseClient<Database>, null, null, {
        message:
          user.error.message === 'invalid claim: missing sub claim'
            ? 'unauthorized, login required.'
            : 'An error occurred',
        status: user.error.status ?? 401,
      })
    }

    const getSupabaseData = supabase as SupabaseClient<Database>
    // Get project from database
    const { data: project, error } = await getSupabaseData
      .from('projects')
      .select()
      .eq('slug', slug)
      .single()

    // If error is not null, then the project does not exist
    if (error) {
      return handler(
        user.data.user ?? null,
        supabase as SupabaseClient<Database>,
        null,
        project,
        {
          message: 'project not found.',
          status: 404,
        },
      )
    }

    // Check if feedback exists
    const { data: feedback, error: feedbackError } = await getSupabaseData
      .from('feedback')
      .select('*, user:user_id (*)')
      .eq('id', id)
      .eq('project_id', project.id)
      .single()

    // If not null, feedback does not exist
    if (feedbackError) {
      return handler(
        user.data.user ?? null,
        supabase as SupabaseClient<Database>,
        null,
        project as ProjectProps['Row'],
        {
          message: 'feedback not found.',
          status: 404,
        },
      )
    }

    // Return feedback
    return handler(
      user.data.user ?? null,
      supabase as SupabaseClient<Database>,
      feedback as FeedbackProps['Row'],
      project as ProjectProps['Row'],
      null,
    )
  }
}

type WithUserAuthHandler<T> = (
  user: UserMetadata | null,
  supabase: SupabaseClient<Database>,
  error: ErrorProps | null,
) => ApiResponse<T>

// withUserAuth is a helper function that can be used to wrap API routes
// Ensures that the user is logged in
export const withUserAuth = <T,>(handler: WithUserAuthHandler<T>) => {
  return async (context: APIContext, requireLogin = true) => {
    // Get the user from the session
    const result = await GET(context)
    const { supabase, user } = result
    // If user.error is not null, then the user is likely not logged in
    if (user.error !== null && requireLogin) {
      return handler(null, supabase as SupabaseClient<Database>, {
        message:
          user.error.message === 'invalid claim: missing sub claim'
            ? 'unauthorized, login required.'
            : user.error.message,
        status: user.error.status ?? 401,
      })
    }

    return handler(
      user.data?.user ?? null,
      supabase as SupabaseClient<Database>,
      null,
    )
  }
}

export const createClientSupabaseClient = () => {
  return createClient<Database>(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
    {
      auth: {
        storage: globalThis.localStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    },
  )
}
