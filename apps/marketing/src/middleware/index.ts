import type { APIContext } from 'astro'

import { defineMiddleware } from 'astro:middleware'
import micromatch from 'micromatch'

import { GET as getSupabaseClient } from '@/supabase'

const protectedRoutes = ['/dashboard(|/)']
const redirectRoutes = ['/signin(|/)', '/register(|/)']
const proptectedAPIRoutes = ['/api/guestbook(|/)']

export const onRequest = defineMiddleware(
  async (context: APIContext, next: () => Promise<Response>) => {
    const supabaseResponse = await getSupabaseClient(context)
    if (!supabaseResponse?.supabase) {
      return new Response('Unable to initialize Supabase client', {
        status: 500,
      })
    }
    if (micromatch.isMatch(context.url.pathname, protectedRoutes)) {
      const accessToken = context.cookies.get('sb-access-token')
      const refreshToken = context.cookies.get('sb-refresh-token')

      if (!accessToken || !refreshToken) {
        return context.redirect('/login')
      }

      const { data, error } = await supabaseResponse.supabase.auth.setSession({
        refresh_token: refreshToken.value,
        access_token: accessToken.value,
      })

      if (error) {
        context.cookies.delete('sb-access-token', {
          path: '/',
        })
        context.cookies.delete('sb-refresh-token', {
          path: '/',
        })
        return context.redirect('/login')
      }

      context.locals.email = data.user?.email ?? ''
      context.cookies.set('sb-access-token', data.session?.access_token ?? '', {
        sameSite: 'strict',
        path: '/',
        secure: true,
      })
      context.cookies.set(
        'sb-refresh-token',
        data.session?.refresh_token ?? '',
        {
          sameSite: 'strict',
          path: '/',
          secure: true,
        },
      )
    }

    if (micromatch.isMatch(context.url.pathname, redirectRoutes)) {
      const accessToken = context.cookies.get('sb-access-token')
      const refreshToken = context.cookies.get('sb-refresh-token')

      if (accessToken && refreshToken) {
        return context.redirect('/dashboard')
      }
    }

    if (micromatch.isMatch(context.url.pathname, proptectedAPIRoutes)) {
      const accessToken = context.cookies.get('sb-access-token')
      const refreshToken = context.cookies.get('sb-refresh-token')

      // Check for tokens
      if (!accessToken || !refreshToken) {
        return new Response(
          JSON.stringify({
            error: 'Unauthorized',
          }),
          { status: 401 },
        )
      }

      // Verify the tokens
      const { error } = await supabaseResponse.supabase.auth.setSession({
        access_token: accessToken.value,
        refresh_token: refreshToken.value,
      })

      if (error) {
        return new Response(
          JSON.stringify({
            error: 'Unauthorized',
          }),
          { status: 401 },
        )
      }
    }

    return next()
  },
)
