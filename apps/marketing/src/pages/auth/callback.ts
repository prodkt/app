import type { APIRoute } from 'astro'

import { GET as getSupabaseClient } from '@/supabase'

export const GET: APIRoute = async (context) => {
  const supabaseResponse = await getSupabaseClient(context)
  const authCode = context.url.searchParams.get('code')

  if (!authCode) {
    return new Response('No code provided', { status: 400 })
  }

  const { data, error } =
    await supabaseResponse.supabase.auth.exchangeCodeForSession(authCode)

  if (error) {
    return new Response(error.message, { status: 500 })
  }

  const { access_token, refresh_token } = data.session

  context.cookies.set('sb-access-token', access_token, {
    path: '/',
    secure: true,
    httpOnly: true,
  })
  context.cookies.set('sb-refresh-token', refresh_token, {
    path: '/',
    secure: true,
    httpOnly: true,
  })
  return context.redirect('/dashboard')
}
