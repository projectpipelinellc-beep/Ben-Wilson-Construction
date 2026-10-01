import { NextResponse } from "next/server";
import { site } from "@/content/site";

const MAX = { name: 120, phone: 40, email: 160, address: 240, projectType: 60, message: 4000 };

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

/**
 * Forwards project inquiries to INQUIRY_WEBHOOK_URL (e.g. a Formspree, Zapier or Make endpoint).
 * No email address is hard-coded: configure the destination in the environment.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  // Honeypot: bots fill hidden fields. Pretend success.
  if (clean(body.company, 100)) return NextResponse.json({ ok: true });

  const data = {
    name: clean(body.name, MAX.name),
    phone: clean(body.phone, MAX.phone),
    email: clean(body.email, MAX.email),
    address: clean(body.address, MAX.address),
    projectType: clean(body.projectType, MAX.projectType),
    message: clean(body.message, MAX.message),
  };

  if (!data.name || !data.phone || !data.message) {
    return NextResponse.json({ error: "Please include your name, phone number and project details." }, { status: 422 });
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 422 });
  }

  const endpoint = process.env.INQUIRY_WEBHOOK_URL;
  if (!endpoint) {
    return NextResponse.json({ error: `Online requests aren't available right now. Please call ${site.phone}.` }, { status: 503 });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ source: "benwilsonconstruction website", ...data }),
    });
    if (!res.ok) throw new Error(String(res.status));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: `We couldn't send that just now. Please call ${site.phone}.` }, { status: 502 });
  }
}
