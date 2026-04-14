'use client';

import { useT } from '@/lib/LocaleContext';

export function Pillars() {
  const t = useT();
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-20">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 mb-12">
        <h2 className="font-serif text-[32px] lg:text-[40px] font-normal tracking-tight leading-[1.1] max-w-[24ch]">{t.pillars.title}</h2>
        <p className="text-[13.5px] text-[color:var(--color-muted)] max-w-[28ch] lg:text-right">{t.pillars.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.pillars.items.map((p) => (
          <div key={p.num} className="bg-[color:var(--color-bg-card)] border border-[color:var(--color-line)] rounded-lg p-7 hover:border-[color:var(--color-ink)] hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-[13px] text-[color:var(--color-burgundy)] mb-4 tracking-wider">{p.num}</div>
            <h3 className="font-serif text-[22px] font-medium tracking-tight mb-3">{p.title}</h3>
            <p className="text-[14.5px] leading-relaxed text-[color:var(--color-ink-soft)]">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
