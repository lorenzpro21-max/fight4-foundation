'use client';

import { useT } from '@/lib/LocaleContext';
import { Reveal } from '@/components/Reveal';

const partners = [
  { name: 'Leukemia & Lymphoma Society', href: 'https://www.lls.org' },
  { name: 'Blood Cancer United', href: 'https://bloodcancerunited.org' },
  { name: 'Stupid Cancer', href: 'https://stupidcancer.org' },
  { name: 'Cactus Cancer Society', href: 'https://cactuscancer.org' },
  { name: 'Cancer Buddy App', href: 'https://cancerbuddy.org' },
];

export function Partners() {
  const t = useT();
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12 border-t border-b border-[color:var(--color-line)]">
      <Reveal as="div" className="text-center text-[11.5px] font-semibold tracking-widest uppercase text-[color:var(--color-muted)] mb-6">
        {t.partners.label}
      </Reveal>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {partners.map((p, i) => (
          <Reveal key={p.name} delay={80 * i} duration={600} distance={12}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener"
              className="group h-[84px] flex flex-col items-center justify-center px-3 py-4 border border-[color:var(--color-line)] rounded-md bg-[color:var(--color-bg-card)] hover:border-[color:var(--color-burgundy)] hover:-translate-y-0.5 transition-all"
            >
              <span className="font-serif text-[13.5px] font-medium text-[color:var(--color-ink-soft)] text-center leading-tight tracking-tight group-hover:text-[color:var(--color-burgundy)] transition-colors">
                {p.name}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal as="div" delay={200} className="text-center mt-5 text-[11.5px] text-[color:var(--color-muted)]">
        {t.partners.disclaimer}
      </Reveal>
    </section>
  );
}
