# Build Report — Connect lead form to Supabase (direct from client)

**Status:** complete
**Date:** 2026-05-17

## Summary
Replaced the old server-route lead pipeline (which used the service role key
and the old `name` column) with a direct browser → Supabase insert that uses
the public anon key and the current `public.leads` schema. The form's existing
validation and success state are preserved.

## Files changed
- `src/lib/supabaseClient.ts` — **new.** Lazy singleton browser Supabase client
  built from `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
  Never references the service role key.
- `src/app/LeadForm.tsx` — replaced `fetch("/api/leads")` with
  `supabase.from("leads").insert(...)`. Maps fields to the current schema:
  - `full_name` ← form name
  - `email` ← form email
  - `phone` ← form phone (empty → `null`)
  - `interest_type` ← `"not_sure"` (form does not collect; value satisfies the
    `check (interest_type in ('buying','selling','both','not_sure'))` constraint)
  - `message` ← form message (empty → `null`)
  - `source` ← `"website"`
  Client-side validation, success UI, and the non-technical error UI are
  unchanged. On any insert error we surface
  *"We couldn't save your request right now. Please try again in a moment."*
- `.env.example` — now documents the `NEXT_PUBLIC_SUPABASE_URL` /
  `NEXT_PUBLIC_SUPABASE_ANON_KEY` pair actually used.

## Files removed
- `src/app/api/leads/route.ts` (and the now-empty `src/app/api/` directory) —
  the route depended on `SUPABASE_SERVICE_ROLE_KEY` (no longer in
  `.env.local`) and wrote to the old `name` column. Direct client inserts
  replace it, gated by the existing
  `"Allow public lead inserts"` RLS policy.

## Dependencies
- `@supabase/supabase-js@^2.105.4` was already in `package.json` and
  installed. No install was required.

## Security
- Only `NEXT_PUBLIC_*` keys are used in browser code.
- No service role key is referenced anywhere in the project.
- Inserts are limited by RLS to the `anon` role's insert-only policy on
  `public.leads`.

## Verification
- `npm run build` succeeds (Next.js 16.2.6, Turbopack). TypeScript clean.
  Static routes generated: `/`, `/_not-found`.
- Browser flow not exercised in this run (no dev server started).
