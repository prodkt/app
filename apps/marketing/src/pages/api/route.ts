/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-param-description */

import type { APIContext } from 'astro'

import { createServerClient, parseCookieHeader } from '@supabase/ssr'

/**
 *
 * @param context
 */
export function GET(context: APIContext) {
  const supabase = createServerClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(context.request.headers.get('Cookie') ?? '')
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            context.cookies.set(name, value, options)
          })
        },
      },
    },
  )

  return supabase
}
