-- Lead Revive: leads table schema
-- Run this in your Supabase SQL editor to provision the table the
-- /api/leads route writes to. Only the fields collected by the form
-- are stored.

create table if not exists public.leads (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  name         text not null,
  email        text not null,
  phone        text,
  message      text
);

-- Row Level Security: insertions happen from the server using the
-- service role key, which bypasses RLS. Keep RLS enabled so that the
-- anon/public key cannot read or write leads from the browser.
alter table public.leads enable row level security;
