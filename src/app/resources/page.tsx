'use client';

import { useState } from 'react';
import { useT, useLocale } from '@/lib/LocaleContext';
import { sampleResources } from '@/lib/resources';
import { ResourceCard } from '@/components/ResourceCard';

export default function Resources() {
  const t = useT();
  const { locale } = useLocale();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale }),
      });
      if (!res.ok) throw new Error('subscribe failed');
      setSubmitted(true);
    } catch {
      setError(locale === 'es' ? 'Algo falló. Intenta de nuevo.' : 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-8 h-px bg-[color:var(--color-burgundy)]" />
        <span className="text-[12px] font-semibold tracking-widest uppercase text-[color:var(--color-burgundy)]">{t.resources.eyebrow}</span>
      </div>

      <h1 className="font-serif font-normal text-[42px] sm:text-[54px] lg:text-[66px] leading-[1.06] tracking-tight text-[color:var(--color-ink)] max-w-[18ch] mb-8">
        {locale === 'es' ? 'Una biblioteca que confías. Revisada por quienes la vivieron.' : 'A library you can trust. Reviewed by the people who lived it.'}
      </h1>

      <p className="text-[18px] leading-relaxed text-[color:var(--color-ink-soft)] max-w-[60ch] mb-10">{t.resources.sub}</p>

      {/* Email capture */}
      <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-[560px] mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.resources.placeholder}
          required
          disabled={submitted}
          className="flex-1 px-5 py-4 border border-[color:var(--color-line)] rounded-md bg-[color:var(--color-bg-card)] text-[15px] focus:outline-none focus:border-[color:var(--color-burgundy)] transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={submitted}
          className="bg-[color:var(--color-burgundy)] text-[color:var(--color-bg)] px-7 py-4 rounded-md text-[15px] font-medium hover:bg-[color:var(--color-burgundy-dark)] transition-colors disabled:opacity-50 whitespace-nowrap"
        >
          {submitted ? '✓ ' + (locale === 'es' ? 'Guardado' : 'Saved') : t.resources.button}
        </button>
      </form>
      {submitted && (
        <p className="text-[14px] text-[color:var(--color-burgundy)] mb-16 max-w-[560px]">{t.resources.thanks}</p>
      )}
      {error && (
        <p className="text-[14px] text-[color:var(--color-burgundy)] mb-16 max-w-[560px]">{error}</p>
      )}
      {!submitted && !error && <div className="mb-16" />}

      {/* Real sample resources */}
      <div className="border-t border-[color:var(--color-line)] pt-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10">
          <div>
            <div className="text-[11.5px] font-semibold tracking-widest uppercase text-[color:var(--color-muted)] mb-3">
              {locale === 'es' ? 'MUESTRA · Recursos verificados' : 'SAMPLE · Vetted Resources'}
            </div>
            <h2 className="font-serif text-[32px] lg:text-[40px] font-normal tracking-tight leading-tight max-w-[22ch]">
              {locale === 'es' ? 'Un vistazo a lo que está en la biblioteca.' : 'A preview of what\'s in the library.'}
            </h2>
          </div>
          <p className="text-[13.5px] text-[color:var(--color-muted)] max-w-[38ch]">
            {locale === 'es' ? 'Cada recurso tiene una nota personal de Natalia explicando por qué lo recomienda y cómo usarlo.' : "Each resource has a personal note from Natalia explaining why she recommends it and how to use it."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {sampleResources.map((r) => <ResourceCard key={r.id} r={r} />)}
        </div>
      </div>

      {/* Suggest a resource */}
      <div className="mb-20 p-8 lg:p-12 bg-[color:var(--color-burgundy-soft)] border border-[color:var(--color-burgundy)]/20 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-[24px] lg:text-[28px] font-medium leading-tight mb-2 max-w-[32ch]">
            {locale === 'es' ? '¿Conoces un recurso que deberíamos verificar?' : 'Know a resource we should vet?'}
          </h3>
          <p className="text-[14.5px] text-[color:var(--color-ink-soft)] max-w-[56ch]">
            {locale === 'es' ? 'Revisamos cada sugerencia antes de agregarla a la biblioteca. Cuéntanos qué recurso te ayudó y por qué.' : "We review every suggestion before adding it to the library. Tell us what resource helped you and why."}
          </p>
        </div>
        <a
          href="mailto:hello@fight4foundation.org?subject=Resource%20suggestion"
          className="bg-[color:var(--color-burgundy)] text-[color:var(--color-bg)] px-6 py-3.5 rounded-md text-[14px] font-medium hover:bg-[color:var(--color-burgundy-dark)] transition-colors inline-flex items-center gap-2 whitespace-nowrap self-start md:self-auto"
        >
          {locale === 'es' ? 'Sugerir un recurso' : 'Suggest a resource'}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
        </a>
      </div>

      {/* What we're building */}
      <div className="border-t border-[color:var(--color-line)] pt-16">
        <h2 className="font-serif text-[28px] lg:text-[34px] font-normal tracking-tight leading-tight mb-10">{t.resources.categoriesH}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.resources.categories.map((c) => (
            <div key={c.t} className="bg-[color:var(--color-bg-card)] border border-[color:var(--color-line)] rounded-lg p-6 hover:border-[color:var(--color-ink)] transition-colors">
              <h3 className="font-serif text-[19px] font-medium mb-2.5">{c.t}</h3>
              <p className="text-[13.5px] leading-relaxed text-[color:var(--color-ink-soft)]">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
