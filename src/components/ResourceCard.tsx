'use client';

import { useLocale } from '@/lib/LocaleContext';
import type { Resource } from '@/lib/resources';

const categoryLabels = {
  en: { financial: 'Financial Aid', support: 'Support', experiences: 'Experiences', education: 'Education' },
  es: { financial: 'Ayuda financiera', support: 'Apoyo', experiences: 'Experiencias', education: 'Educación' },
};

const stageLabels = {
  en: { diagnosed: 'Just diagnosed', treatment: 'In treatment', remission: 'Remission', any: 'Any stage' },
  es: { diagnosed: 'Recién diagnosticado', treatment: 'En tratamiento', remission: 'Remisión', any: 'Cualquier etapa' },
};

export function ResourceCard({ r }: { r: Resource }) {
  const { locale } = useLocale();
  const summary = r.summary[locale];
  const note = r.vettedNote[locale];
  const catLabel = categoryLabels[locale][r.category];

  return (
    <article className="bg-[color:var(--color-bg-card)] border border-[color:var(--color-line)] rounded-lg p-7 hover:border-[color:var(--color-ink)] transition-colors group">
      <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
        <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-[color:var(--color-burgundy)] bg-[color:var(--color-burgundy-soft)] px-2.5 py-1 rounded">
          {catLabel}
        </span>
        <div className="flex gap-1.5 flex-wrap">
          {r.stage.map((s) => (
            <span key={s} className="text-[10.5px] tracking-wider uppercase text-[color:var(--color-muted)] border border-[color:var(--color-line)] px-2 py-0.5 rounded">
              {stageLabels[locale][s]}
            </span>
          ))}
        </div>
      </div>
      <h3 className="font-serif text-[22px] font-medium tracking-tight mb-1 leading-snug">{r.name}</h3>
      <p className="text-[13px] text-[color:var(--color-muted)] mb-4">{r.org} · {r.countries.join(', ')}</p>
      <p className="text-[14.5px] leading-relaxed text-[color:var(--color-ink-soft)] mb-5">{summary}</p>

      <div className="p-4 bg-[color:var(--color-burgundy-soft)] border-l-2 border-[color:var(--color-burgundy)] rounded-r mb-5">
        <div className="text-[10.5px] font-semibold tracking-widest uppercase text-[color:var(--color-burgundy)] mb-1.5">
          {locale === 'es' ? 'Nota de Natalia' : "Natalia's note"}
        </div>
        <p className="text-[14px] leading-relaxed text-[color:var(--color-ink-soft)] italic">{note}</p>
      </div>

      <a
        href={r.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[14px] font-medium text-[color:var(--color-burgundy)] group-hover:gap-3 transition-all"
      >
        {locale === 'es' ? 'Visitar recurso' : 'Visit resource'}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M10 7h7v7" /></svg>
      </a>
    </article>
  );
}
