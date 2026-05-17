# Build Report — FEATURE_007: Optional backend lead storage

**Status:** complete
**Date:** 2026-05-17

## Summary
Connected the lead capture form to Supabase via a server-side Route Handler. The frontend now POSTs JSON to `/api/leads`, which validates the payload and inserts a row into `public.leads` using the service role key (which never leaves the server).

## Files added
- `src/app/api/leads/route.ts` — server-only POST handler. Validates name + email format, instantiates a Supabase client from `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY`, inserts into `leads`, and returns JSON responses with appropriate HTTP statuses (400 / 503 / 500 / 201).
- `supabase/schema.sql` — SQL to provision the `leads` table (id, created_at, name, email, phone, message) with RLS enabled so only the service role can read/write.
- `.env.example` — documents the two required env vars (server-side only, no `NEXT_PUBLIC_` prefix).

## Files changed
- `src/app/LeadForm.tsx` — `handleSubmit` now `fetch`es `/api/leads`. Added `isSubmitting` loading state (button shows "Sending…" and is disabled) and a `submitError` UI block that surfaces server error messages. The existing success state is unchanged.
- `package.json` — added `@supabase/supabase-js` dependency.

## Done-when checklist
- [x] Supabase project details configured through environment variables (`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`).
- [x] Leads table schema provided (`supabase/schema.sql`) with the approved fields only (name, email, phone, message + id/created_at).
- [x] Valid form submissions POST to `/api/leads` and are inserted via the Supabase client.
- [x] Success message remains; new error UI surfaces failures with a clear message.
- [x] No secrets exposed in the frontend — the service role key is read only inside the route handler. No `NEXT_PUBLIC_*` Supabase vars exist.

## Constraints respected
- No hardcoded keys.
- No auth, CRM dashboard, or automated emails.
- No new routes beyond the single API endpoint required to persist a lead.

## Verification
- `npm run build` passes (Next.js 16.2.6, Turbopack). TypeScript clean. `/` remains static; `/api/leads` is correctly marked dynamic.
- Without env vars set, the route returns a 503 with a user-friendly message — the form gracefully shows the error instead of falsely confirming success.

## Operator setup (one-time)
1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in the deployment environment (e.g. `vercel env add`).
