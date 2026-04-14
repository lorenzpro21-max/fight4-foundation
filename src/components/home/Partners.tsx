'use client';

import { useT } from '@/lib/LocaleContext';

const partners = [
  { name: 'Leukemia & Lymphoma Society', logo: '/assets/logos/lls.svg', href: 'https://www.lls.org' },
  { name: 'Blood Cancer United', logo: '/assets/logos/blood-cancer-united.svg', href: 'https://bloodcancerunited.org' },
  { name: 'Stupid Cancer', logo: '/assets/logos/stupid-cancer.svg', href: 'https://stupidcancer.org' },
  { name: 'Cactus Cancer Society', logo: '/assets/logos/cactus-cancer.svg', href: 'https://cactuscancer.org' },
  { name: 'Cancer Buddy App', logo: '/assets/logos/cancer-buddy.svg', href: 'https://cancerbuddy.org' },
];

export function Partners() {
  const t = useT();
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12 border-t border-b border-[color:var(--color-line)]">
      <div className="text-center text-[11.5px] font-semibold tracking-widest uppercase text-[color:var(--color-muted)] mb-6">{t.partners.label}</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {partners.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener"
            className="group h-[84px] flex flex-col items-center justify-center px-3 py-4 border border-[color:var(--color-line)] rounded-md bg-[color:var(--color-bg-card)] hover:border-[color:var(--color-burgundy)] hover:-translate-y-0.5 transition-all"
          >
            {/* Logo falls back to text label gracefully */}
            <PartnerBadge name={p.name} src={p.logo} />
          </a>
        ))}
      </div>
      <div className="text-center mt-5 text-[11.5px] text-[color:var(--color-muted)]">{t.partners.disclaimer}</div>
    </section>
  );
}

function PartnerBadge({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <span className="font-serif text-[13.5px] font-medium text-[color:var(--color-ink-soft)] text-center leading-tight tracking-tight group-hover:text-[color:var(--color-burgundy)] transition-colors">
        {name}
      </span>
      {/* Hidden img for when real logos arrive — swap to conditional render then */}
      {/* <Image src={src} alt={name} ... /> */}
    </div>
  );
}
