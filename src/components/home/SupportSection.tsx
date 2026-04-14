'use client';

import { useLocale } from '@/lib/LocaleContext';

export function SupportSection() {
  const { locale } = useLocale();
  const copy = {
    en: {
      eyebrow: 'Support the Fight',
      h2: 'Donations open when 501(c)(3) status lands.',
      body: "FIGHT4 Foundation is in the process of becoming a registered 501(c)(3) nonprofit. In the meantime, the best way to support this work is to donate directly to the Leukemia & Lymphoma Society — the organization that trained, supported, and backed this foundation from day one.",
      primary: 'Donate to LLS research',
      secondary: 'Follow our progress',
      note: "Tax-deductible in the United States. 100% goes to blood cancer research.",
    },
    es: {
      eyebrow: 'Apoya la lucha',
      h2: 'Donaciones abren cuando tengamos estatus 501(c)(3).',
      body: 'La Fundación FIGHT4 está en proceso de registrarse como organización sin fines de lucro 501(c)(3). Mientras tanto, la mejor forma de apoyar este trabajo es donar directamente a la Sociedad de Leucemia y Linfoma — la organización que capacitó, apoyó y respaldó esta fundación desde el primer día.',
      primary: 'Donar a investigación LLS',
      secondary: 'Seguir nuestro progreso',
      note: 'Deducible de impuestos en EE.UU. 100% va a investigación del cáncer de sangre.',
    },
  };
  const c = copy[locale];
  return (
    <section className="bg-[color:var(--color-ink)] text-[color:var(--color-bg)] py-20 px-6">
      <div className="max-w-[960px] mx-auto text-center">
        <div className="text-[11.5px] font-semibold tracking-widest uppercase opacity-55 mb-5">{c.eyebrow}</div>
        <h2 className="font-serif text-[34px] lg:text-[46px] font-normal leading-[1.15] tracking-tight mb-6 max-w-[22ch] mx-auto">{c.h2}</h2>
        <p className="text-[17px] lg:text-[18px] leading-relaxed opacity-80 max-w-[60ch] mx-auto mb-10">{c.body}</p>
        <div className="flex gap-3 justify-center flex-wrap mb-6">
          <a
            href="https://www.lls.org/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[color:var(--color-bg)] text-[color:var(--color-ink)] px-7 py-3.5 rounded-md text-[15px] font-medium hover:bg-white transition-colors inline-flex items-center gap-2"
          >
            {c.primary}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M10 7h7v7" /></svg>
          </a>
          <a
            href="https://instagram.com/fight4lls"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 text-[color:var(--color-bg)] px-6 py-3.5 rounded-md text-[15px] font-medium hover:bg-white/10 transition-colors"
          >
            {c.secondary}
          </a>
        </div>
        <p className="text-[12.5px] opacity-55">{c.note}</p>
      </div>
    </section>
  );
}
