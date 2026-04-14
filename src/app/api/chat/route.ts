import { GoogleGenAI } from '@google/genai';
import { buildSystemPrompt } from '@/lib/askSystemPrompt';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Rate limit (in-memory, per IP, per hour)
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQ = 25;
const buckets = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string): { ok: boolean; remaining: number } {
  const now = Date.now();
  const b = buckets.get(ip);
  if (!b || b.reset < now) {
    buckets.set(ip, { count: 1, reset: now + WINDOW_MS });
    return { ok: true, remaining: MAX_REQ - 1 };
  }
  if (b.count >= MAX_REQ) return { ok: false, remaining: 0 };
  b.count += 1;
  return { ok: true, remaining: MAX_REQ - b.count };
}

type ClientMessage = { role: 'user' | 'assistant'; content: string };

function sanitize(messages: unknown): ClientMessage[] {
  if (!Array.isArray(messages)) return [];
  return messages
    .filter((m): m is ClientMessage =>
      !!m &&
      typeof (m as ClientMessage).content === 'string' &&
      ((m as ClientMessage).role === 'user' || (m as ClientMessage).role === 'assistant'),
    )
    .slice(-20)
    .map((m) => ({ role: m.role, content: (m.content as string).slice(0, 4000) }));
}

// Gemini uses 'user' and 'model' as roles, not 'user' and 'assistant'
function toGeminiContents(messages: ClientMessage[]) {
  return messages.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));
}

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'server_not_configured', message: 'Ask F4 is not yet configured. Set GEMINI_API_KEY in Vercel env vars.' }),
      { status: 503, headers: { 'content-type': 'application/json' } },
    );
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const rl = rateLimit(ip);
  if (!rl.ok) {
    return new Response(
      JSON.stringify({ error: 'rate_limited', message: "You've hit the hourly limit. Try again later, or email hello@fight4foundation.org." }),
      { status: 429, headers: { 'content-type': 'application/json' } },
    );
  }

  let body: { messages?: unknown; locale?: 'en' | 'es' } = {};
  try { body = await req.json(); } catch {
    return new Response(JSON.stringify({ error: 'bad_request' }), { status: 400 });
  }

  const messages = sanitize(body.messages);
  if (!messages.length || messages[messages.length - 1].role !== 'user') {
    return new Response(JSON.stringify({ error: 'missing_user_message' }), { status: 400 });
  }
  const locale: 'en' | 'es' = body.locale === 'es' ? 'es' : 'en';

  const ai = new GoogleGenAI({ apiKey });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const response = await ai.models.generateContentStream({
          model: 'gemini-2.0-flash',
          config: {
            systemInstruction: buildSystemPrompt(locale),
            maxOutputTokens: 900,
            temperature: 0.4,
          },
          contents: toGeminiContents(messages),
        });
        for await (const chunk of response) {
          const text = chunk.text;
          if (text) controller.enqueue(encoder.encode(text));
        }
        controller.close();
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'stream_error';
        controller.enqueue(encoder.encode(`\n\n[ERROR] ${msg}`));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
      'x-ratelimit-remaining': String(rl.remaining),
    },
  });
}
