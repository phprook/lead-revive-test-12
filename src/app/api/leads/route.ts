import { createClient } from "@supabase/supabase-js";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
};

function asTrimmedString(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return Response.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = asTrimmedString(body.name, 200);
  const emailRaw = asTrimmedString(body.email, 320);
  const email = emailRaw && EMAIL_PATTERN.test(emailRaw) ? emailRaw : null;

  if (!name || !email) {
    return Response.json(
      { error: "Please provide a valid name and email." },
      { status: 400 },
    );
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("Supabase env vars are not configured.");
    return Response.json(
      { error: "Lead storage is not configured. Please try again later." },
      { status: 503 },
    );
  }

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error } = await supabase.from("leads").insert({
    name,
    email,
    phone: asTrimmedString(body.phone, 40),
    message: asTrimmedString(body.message, 2000),
  });

  if (error) {
    console.error("Failed to insert lead:", error);
    return Response.json(
      { error: "We couldn't save your request. Please try again." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true }, { status: 201 });
}
