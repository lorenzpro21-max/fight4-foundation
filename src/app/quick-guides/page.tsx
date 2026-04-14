'use client';

import { useT } from '@/lib/LocaleContext';

const guides = [
  { stage: 'Just diagnosed', t: "You got the call. What happens in the first two weeks.", badge: '01' },
  { stage: 'Starting treatment', t: 'Before your first infusion, biopsy, or surgery — the practical checklist.', badge: '02' },
  { stage: 'In active treatment', t: 'Managing side effects, work, school, and the people around you.', badge: '03' },
  { stage: 'Remission & after', t: 'Survivorship care plans, scanxiety, rebuilding identity, what\'s next.', badge: '04' },
  { stage: 'Supporting someone', t: 'For parents, partners, siblings, and friends — how to actually help.', badge: '05' },
  { stage: 'Spanish-language care', t: 'Finding bilingual providers, patient advocates, and Spanish resources.', badge: '06' },
];

export default function QuickGuides() {
  const t = useT();
  return (
    <div className="max-w-[1080px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-8 h-px bg-[color:var(--color-burgundy)]" />
        <span className="text-[12px] font-semibold tracking-widest uppercase text-[color:var(--color-burgundy)]">{t.nav.quickGuides}</span>
      </div>

      <h1 className="font-serif font-normal text-[44px] sm:text-[56px] lg:text-[66px] leading-[1.06] tracking-tight text-[color:var(--color-ink)] max-w-[18ch] mb-8">
        Plain-language walkthroughs for every stage.
      </h1>

      <p className="text-[18px] leading-relaxed text-[color:var(--color-ink-soft)] max-w-[60ch] mb-16">
        Short, honest, no-jargon guides for each phase of young adult cancer. Written by the people who&apos;ve lived them. Coming Fall 2026.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {guides.map((g) => (
          <article key={g.badge} className="bg-[color:var(--color-bg-card)] border border-[color:var(--color-line)] rounded-lg p-7 hover:border-[color:var(--color-ink)] transition-colors">
            <div className="flex items-baseline justify-between mb-3">
              <span className="font-serif text-[13px] tracking-wider text-[color:var(--color-burgundy)]">GUIDE {g.badge}</span>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[color:var(--color-muted)] bg-[color:var(--color-bg)] border border-[color:var(--color-line)] px-2 py-0.5 rounded">Draft</span>
            </div>
            <div className="text-[13px] font-semibold tracking-wider uppercase text-[color:var(--color-burgundy)] mb-3">{g.stage}</div>
            <h2 className="font-serif text-[22px] font-medium leading-snug tracking-tight mb-3">{g.t}</h2>
          </article>
        ))}
      </div>
    </div>
  );
}
