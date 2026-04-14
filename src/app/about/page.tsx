'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useT } from '@/lib/LocaleContext';

export default function About() {
  const t = useT();
  return (
    <article className="max-w-[820px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-8 h-px bg-[color:var(--color-burgundy)]" />
        <span className="text-[12px] font-semibold tracking-widest uppercase text-[color:var(--color-burgundy)]">{t.about.eyebrow}</span>
      </div>

      <h1 className="font-serif font-normal text-[44px] sm:text-[58px] lg:text-[66px] leading-[1.05] tracking-tight text-[color:var(--color-ink)] max-w-[20ch] mb-10">
        {t.about.h1}
      </h1>

      <div className="prose-f4">
        <p className="lede">{t.about.lede}</p>
        <p>{t.about.body1}</p>
        <p>{t.about.body2}</p>
      </div>

      {/* Treatment / Festival diptych */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-16">
        <figure className="aspect-[4/5] bg-[color:var(--color-burgundy-soft)] border border-[color:var(--color-line)] rounded-md overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center text-[color:var(--color-burgundy)] text-[13px] font-medium">
            Photo: treatment day
          </div>
        </figure>
        <figure className="aspect-[4/5] bg-[color:var(--color-burgundy-soft)] border border-[color:var(--color-line)] rounded-md overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center text-[color:var(--color-burgundy)] text-[13px] font-medium">
            Photo: festival, golden hour
          </div>
        </figure>
        <figcaption className="md:col-span-2 font-serif italic text-[17px] text-[color:var(--color-muted)] text-center mt-3">
          {t.about.sectionTreatmentH}
        </figcaption>
      </div>

      <div className="prose-f4">
        <p>{t.about.sectionTreatmentP}</p>

        <h2>{t.about.sectionLLSH}</h2>
        <p>{t.about.sectionLLSP1}</p>

        {/* VOY photo */}
        <figure className="my-10 -mx-6 lg:mx-0">
          <div className="relative w-full aspect-[4/5] max-w-[560px] mx-auto border border-[color:var(--color-line)] rounded-md overflow-hidden">
            <Image
              src="/assets/photos/natalia-voy.png"
              alt="Natalia Menéndez, 2024 LLS Visionaries of the Year candidate, San Diego"
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <figcaption className="text-[13px] text-[color:var(--color-muted)] text-center mt-3 italic">
            Natalia as a 2024 LLS Visionaries of the Year candidate, San Diego.
          </figcaption>
        </figure>

        <p>{t.about.sectionLLSP2}</p>
        <p><em>{t.about.sectionLLSP3}</em></p>

        <h2>{t.about.sectionTeamH}</h2>
        <p>{t.about.sectionTeamP}</p>

        <div className="mt-12 pt-8 border-t border-[color:var(--color-line)]">
          <p className="font-serif italic text-[18px] text-[color:var(--color-muted)] mb-1">{t.about.signoff}</p>
          <p className="font-hand text-[34px] text-[color:var(--color-burgundy)]" style={{ fontFamily: 'var(--font-hand)' }}>Natalia</p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link href="/" className="text-[14px] text-[color:var(--color-muted)] hover:text-[color:var(--color-burgundy)] transition-colors">
          {t.common.backHome}
        </Link>
      </div>
    </article>
  );
}
