import type { Provider } from '@supabase/supabase-js'
import type { APIRoute } from 'astro'

import { GET as getSupabaseClient } from '@/supabase'

export const POST: APIRoute = async (context) => {
  const formData = await context.request.formData()
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()
  const provider = formData.get('provider')?.toString()

  const supabaseResponse = await getSupabaseClient(context)

  if (provider) {
    const { data, error } =
      await supabaseResponse.supabase.auth.signInWithOAuth({
        provider: provider as Provider,
        options: {
          redirectTo:
            import.meta.env['PUBLIC_VERCEL_ENV'] === 'development'
              ? 'http://localhost:4321/auth/confirm'
              : 'https://prodkt.cloud/auth/confirm',
        },
      })

    if (error) {
      return new Response(error.message, { status: 500 })
    }

    return context.redirect(data.url)
  }

  if (!email || !password) {
    return new Response('Email and password are required', { status: 400 })
  }

  const { data, error } =
    await supabaseResponse.supabase.auth.signInWithPassword({
      email,
      password,
    })

  if (error) {
    return new Response(error.message, { status: 500 })
  }

  const { access_token, refresh_token } = data.session
  context.cookies.set('sb-access-token', access_token, {
    sameSite: 'strict',
    path: '/',
    secure: true,
  })
  context.cookies.set('sb-refresh-token', refresh_token, {
    sameSite: 'strict',
    path: '/',
    secure: true,
  })

  return context.redirect('/dashboard')
}
