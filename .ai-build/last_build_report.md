# Build Report — Connect lead form to Supabase (direct from client)

**Status:** complete
**Date:** 2026-05-17

## Summary
The lead form submits directly from the browser into `public.leads` using
`NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`. The form's
existing client-side validation, success state, and non-technical error UI
are preserved. No service role key is used anywhere in browser code.

## Implementation state (verified this run)
- `src/lib/supabaseClient.ts` — Lazy singleton browser Supabase client built
  from `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Auth
  session persistence disabled (not needed for this form).
- `src/app/LeadForm.tsx` — `handleSubmit` calls
  `supabase.from("leads").insert(...)` with:
  - `full_name` ← trimmed name
  - `email` ← trimmed email
  - `phone` ← trimmed phone or `null`
  - `interest_type` ← `"not_sure"` (satisfies the
    `check (interest_type in ('buying','selling','both','not_sure'))` constraint)
  - `message` ← trimmed message or `null`
  - `source` ← `"website"`
  Existing validation (required name, valid email) runs first. On insert error
  the form surfaces *"We couldn't save your request right now. Please try
  again in a moment."*; on thrown/network error, *"We couldn't reach the
  server. Please check your connection and try again."*. On success the form
  clears state and renders the existing success card.
- `src/app/page.tsx` renders `<LeadForm />` (line 262).
- RLS policy `"Allow public lead inserts"` on `public.leads` permits anon
  inserts (defined in `supabase/migrations/20260517212842_create_leads_table.sql`).

## Dependencies
- `@supabase/supabase-js@^2.105.4` already present in `package.json`; no
  install needed.

## Security
- Only `NEXT_PUBLIC_*` keys are referenced in client code.
- `SUPABASE_SERVICE_ROLE_KEY` is not referenced anywhere in the project.
- Inserts are gated server-side by the anon-only insert RLS policy.

## Verification
- `npm run build` ✅ — Next.js 16.2.6 (Turbopack). TypeScript clean.
  Static routes generated: `/`, `/_not-found`.
  - Compiled in 8.7s; static pages generated in 291ms.
  - Only warning: Next.js detected an extra lockfile at
    `/home/ubuntu/ai-builds/package-lock.json` (unrelated to this task).
- Browser flow not exercised in this run.
