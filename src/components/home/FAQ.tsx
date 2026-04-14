'use client';

import { useState } from 'react';
import { useLocale } from '@/lib/LocaleContext';
import { Reveal } from '@/components/Reveal';

const faqs = {
  en: [
    { q: 'Who vets the resources on this site?', a: 'Natalia, who was diagnosed with Splenic Marginal Zone Non-Hodgkin\'s Lymphoma at 23, personally reviews every resource. Over time, a small group of young adult survivors will join the vetting team — but every resource is always reviewed by someone who has been in treatment.' },
    { q: 'Is FIGHT4 free to use?', a: 'Yes. Completely free. Always. There is no paywall, no premium tier, and no sales pitch. This is a nonprofit resource built to be used.' },
    { q: 'Are you a registered 501(c)(3) nonprofit?', a: 'We are in the process. FIGHT4 grew out of Natalia\'s 2024 Leukemia & Lymphoma Society Visionaries of the Year campaign, which raised over $90,000 for blood cancer research. Formal 501(c)(3) status is in progress. Until then, donations go directly to LLS — the organization that backed this work from day one.' },
    { q: 'How is the AI assistant different from a regular chatbot?', a: 'Ask F4 only draws from resources we have personally reviewed. It does not scrape the open web, does not make things up, and does not give medical advice. If it can\'t find a vetted match for your situation, it tells you — instead of hallucinating an answer.' },
    { q: 'Do you have resources in Spanish?', a: 'Yes — this entire site is bilingual (use the EN/ES toggle in the top right), and we specifically prioritize Spanish-language resources and bilingual providers. Natalia is a Community Outreach Volunteer for LLS\'s Spanish Education Programs.' },
    { q: 'How do I suggest a resource you should vet?', a: 'Send us an email at hello@fight4foundation.org with the name of the organization, what they do, and (if you\'ve used them) what your experience was. We review every suggestion before adding it to the library.' },
  ],
  es: [
    { q: '¿Quién verifica los recursos en este sitio?', a: 'Natalia, a quien diagnosticaron con Linfoma No-Hodgkin de la Zona Marginal del Bazo a los 23 años, revisa personalmente cada recurso. Con el tiempo, un pequeño grupo de jóvenes sobrevivientes se unirá al equipo — pero cada recurso siempre será revisado por alguien que ha estado en tratamiento.' },
    { q: '¿FIGHT4 es gratis?', a: 'Sí. Totalmente gratis. Siempre. No hay muro de pago, ni nivel premium, ni venta. Es un recurso sin fines de lucro construido para usarse.' },
    { q: '¿Son una organización 501(c)(3) registrada?', a: 'Estamos en proceso. FIGHT4 nació de la campaña 2024 Visionarios del Año de la Sociedad de Leucemia y Linfoma de Natalia, que recaudó más de $90,000 para investigación del cáncer de sangre. El estatus formal 501(c)(3) está en progreso. Mientras tanto, las donaciones van directamente a LLS — la organización que respaldó este trabajo desde el primer día.' },
    { q: '¿Cómo es el asistente de IA diferente a un chatbot normal?', a: 'Pregúntale a F4 solo usa recursos que hemos revisado personalmente. No rastrea la web abierta, no inventa cosas y no da consejos médicos. Si no encuentra un recurso verificado para tu situación, te lo dice — en lugar de inventar una respuesta.' },
    { q: '¿Tienen recursos en español?', a: 'Sí — todo este sitio es bilingüe (usa el botón EN/ES arriba a la derecha), y priorizamos específicamente recursos en español y proveedores bilingües. Natalia es Voluntaria Comunitaria de los Programas de Educación en Español de LLS.' },
    { q: '¿Cómo les sugiero un recurso para verificar?', a: 'Escríbenos a hello@fight4foundation.org con el nombre de la organización, qué hacen, y (si los usaste) cómo fue tu experiencia. Revisamos cada sugerencia antes de agregarla a la biblioteca.' },
  ],
};

export function FAQ() {
  const { locale } = useLocale();
  const [open, setOpen] = useState<number | null>(0);
  const items = faqs[locale];
  const title = locale === 'es' ? 'Preguntas frecuentes' : 'Questions, answered.';
  const sub = locale === 'es' ? 'Lo que la gente nos pregunta más seguido.' : 'What people ask us most.';

  return (
    <section className="max-w-[1080px] mx-auto px-6 lg:px-12 py-20">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 mb-12">
        <Reveal as="h2" className="font-serif text-[32px] lg:text-[40px] font-normal tracking-tight leading-[1.1] max-w-[22ch]">{title}</Reveal>
        <Reveal as="p" delay={120} className="text-[13.5px] text-[color:var(--color-muted)] max-w-[28ch] lg:text-right">{sub}</Reveal>
      </div>
      <Reveal as="div" delay={180} className="divide-y divide-[color:var(--color-line)] border-t border-b border-[color:var(--color-line)]">
        {items.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left py-6 flex items-center justify-between gap-6 group"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-[19px] lg:text-[22px] font-medium tracking-tight leading-snug text-[color:var(--color-ink)] group-hover:text-[color:var(--color-burgundy)] transition-colors">
                  {f.q}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-[color:var(--color-line)] flex items-center justify-center transition-all ${isOpen ? 'bg-[color:var(--color-burgundy)] border-[color:var(--color-burgundy)] rotate-45' : ''}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isOpen ? 'white' : 'currentColor'} strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: isOpen ? '400px' : '0px' }}
              >
                <p className="pb-6 text-[15.5px] leading-relaxed text-[color:var(--color-ink-soft)] max-w-[64ch]">{f.a}</p>
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
