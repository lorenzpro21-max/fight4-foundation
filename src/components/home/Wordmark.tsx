'use client';

import Link from 'next/link';
import { useT } from '@/lib/LocaleContext';

export function Wordmark() {
  const t = useT();
  return (
    <section className="bg-[color:var(--color-burgundy)] text-[color:var(--color-bg)] py-20 px-6">
      <div className="max-w-[1280px] mx-auto text-center">
        <div className="text-[11.5px] font-semibold tracking-widest uppercase opacity-70 mb-6">{t.movement.eyebrow}</div>
        <h2
          className="font-hand text-[64px] sm:text-[96px] lg:text-[140px] leading-none mb-8"
          style={{ fontFamily: 'var(--font-hand)', textShadow: '4px 4px 0 rgba(0,0,0,0.15)' }}
        >
          {t.movement.wordmark}
        </h2>
        <p className="font-serif italic text-[18px] lg:text-[20px] max-w-[48ch] mx-auto opacity-90 mb-8">{t.movement.lede}</p>
        <Link href="/movement" className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 px-6 py-3 rounded-md text-[14px] font-medium transition-colors">
          {t.movement.ctaButton}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </section>
  );
}
