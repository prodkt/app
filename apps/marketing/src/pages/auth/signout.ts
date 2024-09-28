import type { APIRoute } from 'astro'

import { GET as getSupabaseClient } from '@/supabase'

export const GET: APIRoute = async (context) => {
  const initSupabase = await getSupabaseClient(context)
  await initSupabase.supabase.auth.signOut({ scope: 'local' })
  context.cookies.delete('sb-access-token', { path: '/' })
  context.cookies.delete('sb-refresh-token', { path: '/' })
  return context.redirect('/login')
}
