import type { APIRoute } from 'astro'

import { GET as getSupabaseClient } from '@/supabase'

export const POST: APIRoute = async (context) => {
  const formData = await context.request.formData()
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()

  if (!email || !password) {
    return new Response('Email and password are required', { status: 400 })
  }

  const { supabase } = await getSupabaseClient(context)

  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    return new Response(error.message, { status: 500 })
  }

  return context.redirect('/login')
}
