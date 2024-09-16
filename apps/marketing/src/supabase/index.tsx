import type { Database } from '@/database.types'
import type { SupabaseClientOptions } from '@supabase/supabase-js'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anonymous Key')
}

const options: SupabaseClientOptions<'public'> = {
  db: {},
  auth: {
    flowType: 'pkce',
    autoRefreshToken: false,
    detectSessionInUrl: false,
    persistSession: true,
  },
  global: {
    headers: {
      'x-prodkt-cloud': 'Prodkt from Bryan Funk',
      // cookies: {
      //   get: (name: string) => string;
      //   set: (name: string, value: string, options: Partial<CookieSerializeOptions>) => void;
      //   remove: (name: string, options: Partial<CookieSerializeOptions>) => void;
      // };
    },
  },
}

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, options)

// export const { data: getSession, error } = await supabase.auth.getSession()

export { supabase }
