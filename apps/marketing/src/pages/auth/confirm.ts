import { createServerClient, parseCookieHeader } from '@supabase/ssr'
import { type EmailOtpType } from '@supabase/supabase-js'
import { type APIRoute } from 'astro'

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const requestUrl = new URL(request.url)
  const token_hash = requestUrl.searchParams.get('token_hash')
  const type = requestUrl.searchParams.get('type') as EmailOtpType | null
  const next = requestUrl.searchParams.get('next') ?? '/'

  if (token_hash && type) {
    const supabase = createServerClient(
      import.meta.env.PUBLIC_SUPABASE_URL,
      import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          getAll() {
            return parseCookieHeader(request.headers.get('Cookie') ?? '')
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookies.set(name, value, options)
            })
          },
        },
      },
    )

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })

    if (!error) {
      return redirect(next)
    }
  }

  // return the user to an error page with some instructions
  return redirect('/auth/auth-code-error')
}
