// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./database.types.ts" />
/// <reference types="astro/client" />

// env.d.ts
interface ImportMetaEnv {
  readonly PUBLIC_SENTRY_DSN: string
  readonly SENTRY_ORG: string
  readonly SENTRY_PROJECT: string
  readonly SENTRY_AUTH_TOKEN: string
  readonly PUBLIC_SUPABASE_URL: string
  readonly PUBLIC_SUPABASE_ANON_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace App {
  interface Locals {
    email: string
  }
}
