import { NextResponse } from 'next/server';

// Simple email-capture endpoint.
// For now: validates + logs to Vercel function logs.
// Swap for Resend / ConvertKit / Beehiiv when Natalia picks a provider.

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
    const locale = body?.locale === 'es' ? 'es' : 'en';

    if (!isEmail(email) || email.length > 200) {
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
    }

    // Log the signup. Vercel captures these in the dashboard under Functions > Logs.
    console.log(JSON.stringify({
      event: 'subscribe',
      email,
      locale,
      ip: req.headers.get('x-forwarded-for') ?? 'unknown',
      ua: req.headers.get('user-agent') ?? 'unknown',
      at: new Date().toISOString(),
    }));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}
