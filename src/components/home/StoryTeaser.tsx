'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useT, useLocale } from '@/lib/LocaleContext';

export function StoryTeaser() {
  const t = useT();
  const { locale } = useLocale();
  const penguinEn = "\"My oncologist said it was as rare as seeing a penguin in the wild... wearing a top hat... and shoes... and a sparkly bowtie.\"";
  const penguinEs = '"Mi oncóloga dijo que era tan raro como ver un pingüino en la naturaleza... con un sombrero de copa... zapatos... y un moño brillante."';
  const p = locale === 'es' ? penguinEs : penguinEn;

  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-20">
      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-18 items-center">
        <figure className="relative aspect-[4/5] max-w-[440px] w-full mx-auto lg:mx-0 rounded-lg overflow-hidden border border-[color:var(--color-line)]">
          <Image
            src="/assets/photos/natalia-voy.png"
            alt={t.founder.name}
            fill
            sizes="(max-width: 1024px) 100vw, 440px"
            className="object-cover"
          />
        </figure>
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[color:var(--color-burgundy)]" />
            <span className="text-[12px] font-semibold tracking-widest uppercase text-[color:var(--color-burgundy)]">{t.about.eyebrow}</span>
          </div>
          <h2 className="font-serif text-[32px] lg:text-[44px] font-normal leading-[1.1] tracking-tight mb-6 max-w-[22ch]">
            {t.about.h1}
          </h2>
          <p className="font-serif italic text-[20px] text-[color:var(--color-ink-soft)] mb-5 border-l-2 border-[color:var(--color-burgundy)] pl-5">
            {p}
          </p>
          <p className="text-[16px] leading-relaxed text-[color:var(--color-ink-soft)] mb-8 max-w-[56ch]">
            {t.about.body2}
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[color:var(--color-burgundy)] hover:gap-3 transition-all"
          >
            {t.common.readStory}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
