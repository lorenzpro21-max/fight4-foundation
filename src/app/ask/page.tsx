'use client';

import { useState, useRef, useEffect } from 'react';
import { useT, useLocale } from '@/lib/LocaleContext';
import { LogoMark } from '@/components/LogoMark';

type Msg = { role: 'user' | 'assistant'; content: string };

const prompts = {
  en: [
    "I was just diagnosed. Where do I start?",
    "I need help with medical bills.",
    "I want to meet other young adults with cancer.",
    "Are there free trips or experiences for cancer patients?",
    "I need resources in Spanish.",
  ],
  es: [
    'Me acaban de diagnosticar. ¿Por dónde empiezo?',
    'Necesito ayuda con las cuentas médicas.',
    'Quiero conocer a otros jóvenes con cáncer.',
    '¿Hay viajes o experiencias gratis para pacientes?',
    'Necesito recursos en español.',
  ],
};

export default function Ask() {
  const t = useT();
  const { locale } = useLocale();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, streaming]);

  const send = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || streaming) return;
    setError('');
    setInput('');
    const next: Msg[] = [...messages, { role: 'user', content }];
    setMessages([...next, { role: 'assistant', content: '' }]);
    setStreaming(true);

    try {
      abortRef.current = new AbortController();
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next, locale }),
        signal: abortRef.current.signal,
      });
      if (!res.ok || !res.body) {
        const j = await res.json().catch(() => ({ message: 'Something went wrong.' }));
        setError(j.message ?? 'Something went wrong.');
        setMessages(next);
        setStreaming(false);
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages([...next, { role: 'assistant', content: acc }]);
      }
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        setError((e as Error).message || 'Network error.');
        setMessages(next);
      }
    } finally {
      setStreaming(false);
    }
  };

  const reset = () => {
    abortRef.current?.abort();
    setMessages([]);
    setError('');
    setInput('');
    setStreaming(false);
  };

  const suggestions = prompts[locale];

  return (
    <div className="max-w-[920px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-px bg-[color:var(--color-burgundy)]" />
        <span className="text-[12px] font-semibold tracking-widest uppercase text-[color:var(--color-burgundy)]">{t.ask.eyebrow}</span>
      </div>

      <h1 className="font-serif font-normal text-[36px] sm:text-[46px] lg:text-[56px] leading-[1.08] tracking-tight text-[color:var(--color-ink)] max-w-[22ch] mb-6">
        {t.ask.h1}
      </h1>

      <p className="text-[17px] leading-relaxed text-[color:var(--color-ink-soft)] max-w-[62ch] mb-8">{t.ask.sub}</p>

      {/* Chat window */}
      <div className="bg-[color:var(--color-bg-card)] border border-[color:var(--color-line)] rounded-xl overflow-hidden flex flex-col h-[min(70vh,700px)]">
        <div className="bg-[color:var(--color-bg)] border-b border-[color:var(--color-line)] px-5 py-3.5 flex items-center gap-3">
          <LogoMark size={26} />
          <div className="flex-1">
            <div className="text-[14px] font-medium text-[color:var(--color-ink)]">Ask F4</div>
            <div className="text-[11.5px] text-[color:var(--color-muted)]">
              {locale === 'es' ? 'Solo recursos verificados. Sin web abierta. Sin consejo médico.' : 'Vetted resources only. No open web. No medical advice.'}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-medium text-[color:var(--color-muted)]">
              <span className={`w-1.5 h-1.5 rounded-full ${streaming ? 'bg-[color:var(--color-burgundy)] animate-pulse' : 'bg-[#6FBF73]'}`} />
              {streaming ? (locale === 'es' ? 'pensando' : 'thinking') : (locale === 'es' ? 'en línea' : 'online')}
            </div>
            {messages.length > 0 && (
              <button onClick={reset} className="text-[11.5px] text-[color:var(--color-muted)] hover:text-[color:var(--color-burgundy)] underline-offset-2 hover:underline">
                {locale === 'es' ? 'nueva' : 'new'}
              </button>
            )}
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 lg:p-7 space-y-5">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-6">
              <LogoMark size={40} />
              <p className="font-serif italic text-[17px] text-[color:var(--color-muted)] max-w-[40ch]">
                {locale === 'es' ? '¿Qué estás buscando?' : "What are you looking for?"}
              </p>
              <div className="flex flex-wrap gap-2 justify-center max-w-[560px]">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => send(s)}
                    className="text-[13px] px-3 py-2 bg-[color:var(--color-bg)] border border-[color:var(--color-line)] rounded-full hover:border-[color:var(--color-burgundy)] hover:text-[color:var(--color-burgundy)] transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start items-start gap-3'}`}>
              {m.role === 'assistant' && <div className="flex-shrink-0 mt-1"><LogoMark size={26} /></div>}
              <div
                className={
                  m.role === 'user'
                    ? 'bg-[color:var(--color-burgundy)] text-[color:var(--color-bg)] px-5 py-3.5 rounded-2xl rounded-br-sm max-w-[80%] text-[15px] leading-relaxed whitespace-pre-line'
                    : 'bg-[color:var(--color-bg)] border border-[color:var(--color-line)] px-5 py-3.5 rounded-2xl rounded-bl-sm max-w-[82%] text-[15px] leading-relaxed text-[color:var(--color-ink)] whitespace-pre-line'
                }
              >
                {m.content || (m.role === 'assistant' && streaming ? <span className="inline-flex gap-1"><Dot /><Dot d={150} /><Dot d={300} /></span> : '')}
              </div>
            </div>
          ))}

          {error && (
            <div className="text-[13px] text-[color:var(--color-burgundy)] bg-[color:var(--color-burgundy-soft)] border border-[color:var(--color-burgundy)]/20 p-3 rounded-md">
              {error}
            </div>
          )}
        </div>

        <form
          className="border-t border-[color:var(--color-line)] p-4 bg-[color:var(--color-bg)] flex items-center gap-3"
          onSubmit={(e) => { e.preventDefault(); send(); }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={locale === 'es' ? 'Escribe tu pregunta...' : 'Type your question...'}
            disabled={streaming}
            className="flex-1 bg-transparent text-[15px] text-[color:var(--color-ink)] placeholder:text-[color:var(--color-muted)] focus:outline-none disabled:opacity-50"
            maxLength={1000}
          />
          <button
            type="submit"
            disabled={!input.trim() || streaming}
            className="bg-[color:var(--color-burgundy)] text-[color:var(--color-bg)] px-4 py-2 rounded-md text-[13px] font-medium hover:bg-[color:var(--color-burgundy-dark)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {locale === 'es' ? 'Enviar' : 'Send'}
          </button>
        </form>
      </div>

      <div className="mt-8 p-5 bg-[color:var(--color-burgundy-soft)] border border-[color:var(--color-burgundy)]/20 rounded-lg text-[13.5px] leading-relaxed text-[color:var(--color-ink-soft)]">
        <strong className="text-[color:var(--color-burgundy)] font-semibold">
          {locale === 'es' ? 'Cómo es diferente. ' : 'How this is different. '}
        </strong>
        {locale === 'es'
          ? 'Ask F4 solo usa recursos revisados personalmente por jóvenes adultos que han pasado por tratamiento. No rastrea la web abierta, no inventa cosas y no da consejos médicos. Si no encuentra un recurso verificado para tu situación, te lo dice.'
          : "Ask F4 only draws from resources personally reviewed by young adults who've been through cancer treatment. It doesn't scrape the open web, doesn't make things up, and doesn't give medical advice. If it can't find a vetted match, it tells you."}
      </div>

      <p className="mt-4 text-[11.5px] text-[color:var(--color-muted)] text-center">
        {locale === 'es'
          ? 'Esto no sustituye a tu equipo médico. En crisis llama al 988 (EE.UU.) o a tu servicio de emergencia local.'
          : 'This is not a substitute for your care team. In crisis, call 988 (US) or your local emergency service.'}
      </p>
    </div>
  );
}

function Dot({ d = 0 }: { d?: number }) {
  return (
    <span
      className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-burgundy)] opacity-50"
      style={{ animation: 'f4-bounce 1.2s infinite', animationDelay: `${d}ms` }}
    />
  );
}
