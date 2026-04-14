'use client';

import { useState } from 'react';
import { useT } from '@/lib/LocaleContext';

export default function Resources() {
  const t = useT();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to real email service (ConvertKit, Beehiiv, Resend)
    setSubmitted(true);
  };

  return (
    <div className="max-w-[1080px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-8 h-px bg-[color:var(--color-burgundy)]" />
        <span className="text-[12px] font-semibold tracking-widest uppercase text-[color:var(--color-burgundy)]">{t.resources.eyebrow}</span>
      </div>

      <h1 className="font-serif font-normal text-[44px] sm:text-[58px] lg:text-[72px] leading-[1.05] tracking-tight text-[color:var(--color-ink)] max-w-[16ch] mb-8">
        {t.resources.h1}
      </h1>

      <p className="text-[18px] leading-relaxed text-[color:var(--color-ink-soft)] max-w-[60ch] mb-10">{t.resources.sub}</p>

      {/* Email capture */}
      <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-[560px] mb-16">
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
          {submitted ? '✓' : t.resources.button}
        </button>
      </form>

      {submitted && (
        <p className="text-[15px] text-[color:var(--color-burgundy)] -mt-12 mb-16 max-w-[560px]">
          {t.resources.thanks}
        </p>
      )}

      {/* What we're building */}
      <div className="border-t border-[color:var(--color-line)] pt-12">
        <h2 className="font-serif text-[28px] lg:text-[34px] font-normal tracking-tight leading-tight mb-10">{t.resources.categoriesH}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {t.resources.categories.map((c) => (
            <div key={c.t} className="bg-[color:var(--color-bg-card)] border border-[color:var(--color-line)] rounded-lg p-7 hover:border-[color:var(--color-ink)] transition-colors">
              <h3 className="font-serif text-[22px] font-medium mb-3">{c.t}</h3>
              <p className="text-[14.5px] leading-relaxed text-[color:var(--color-ink-soft)]">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
