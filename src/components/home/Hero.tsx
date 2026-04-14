'use client';

import Link from 'next/link';
import { useT } from '@/lib/LocaleContext';
import Image from 'next/image';

export function Hero() {
  const t = useT();
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-18 items-start">
      <div>
        <div className="flex items-center gap-3 mb-9">
          <span className="w-8 h-px bg-[color:var(--color-burgundy)]" />
          <span className="text-[12px] font-semibold tracking-widest uppercase text-[color:var(--color-burgundy)]">{t.hero.eyebrow}</span>
        </div>
        <p className="font-serif italic text-[17px] text-[color:var(--color-muted)] mb-6">{t.hero.lede}</p>
        <h1 className="font-serif font-normal text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.05] tracking-tight text-[color:var(--color-ink)] max-w-[18ch] mb-8">
          <span className="block">{t.hero.h1Line1} <em className="italic text-[color:var(--color-burgundy)] mark">{t.hero.h1Line1Mark}</em></span>
          <span className="block">{t.hero.h1Line2} <em className="italic text-[color:var(--color-burgundy)] mark">{t.hero.h1Line2Mark}</em></span>
        </h1>
        <p className="text-[18px] leading-relaxed text-[color:var(--color-ink-soft)] max-w-[54ch] mb-9">{t.hero.sub}</p>
        <div className="flex flex-wrap gap-3.5 items-center mb-12">
          <Link href="/ask" className="bg-[color:var(--color-burgundy)] text-[color:var(--color-bg)] px-7 py-3.5 rounded-md text-[15px] font-medium hover:bg-[color:var(--color-burgundy-dark)] transition-colors inline-flex items-center gap-2.5">
            {t.hero.ctaPrimary}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </Link>
          <Link href="/resources" className="text-[color:var(--color-ink)] px-5 py-3.5 border border-[color:var(--color-line)] rounded-md text-[15px] font-medium hover:border-[color:var(--color-ink)] transition-colors">{t.hero.ctaSecondary}</Link>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-9 border-t border-[color:var(--color-line)] max-w-[620px]">
          {[t.stats.raised, t.stats.partners, t.stats.vetted].map((s, i) => (
            <div key={i}>
              <div className="font-serif text-[34px] font-normal text-[color:var(--color-ink)] leading-none tracking-tight mb-1.5">{s.num}</div>
              <div className="text-[13px] text-[color:var(--color-muted)] leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Founder card */}
      <aside className="bg-[color:var(--color-bg-card)] border border-[color:var(--color-line)] rounded-lg p-8">
        <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-[color:var(--color-burgundy)] bg-[color:var(--color-burgundy-soft)] px-2.5 py-1 rounded mb-5">{t.founder.tag}</span>
        <div className="w-[84px] h-[84px] rounded-full overflow-hidden mb-5 border-2 border-[color:var(--color-burgundy)]">
          <Image
            src="/assets/photos/natalia-avatar.png"
            alt={t.founder.name}
            width={168}
            height={168}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <p className="font-serif text-[19px] leading-relaxed text-[color:var(--color-ink)] mb-5">{t.founder.quote}</p>
        <div className="text-[14px] font-semibold text-[color:var(--color-ink)] mb-1">{t.founder.name}</div>
        <div className="text-[13px] text-[color:var(--color-muted)] leading-snug">{t.founder.role}</div>
        <div className="mt-5 pt-5 border-t border-[color:var(--color-line)] font-serif italic text-[14px] text-[color:var(--color-muted)]">{t.founder.closing}</div>
      </aside>
    </section>
  );
}
