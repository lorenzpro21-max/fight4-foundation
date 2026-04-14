'use client';

import { useEffect, useState } from 'react';
import { useLocale } from '@/lib/LocaleContext';

type Quote = { en: string; es: string };

const quotes: Quote[] = [
  {
    en: "\"For seven months doctors told me it was meningitis. When I was finally diagnosed — Splenic Marginal Zone Non-Hodgkin's Lymphoma, one month before my 23rd birthday — sorting through resources while in treatment was its own kind of exhausting. FIGHT4 is what I wish I had then.\"",
    es: '"Durante siete meses, los doctores pensaron que tenía meningitis. Cuando por fin me diagnosticaron — Linfoma No-Hodgkin de la Zona Marginal del Bazo, un mes antes de cumplir 23 años — buscar recursos en tratamiento fue su propio tipo de agotamiento. FIGHT4 es lo que desearía haber tenido entonces."',
  },
  {
    en: "\"My oncologist said it was as rare as seeing a penguin in the wild... wearing a top hat... and shoes... and a sparkly bowtie.\"",
    es: '"Mi oncóloga dijo que era tan raro como ver un pingüino en la naturaleza... con un sombrero de copa... zapatos... y un moño brillante."',
  },
  {
    en: "\"Every resource on this site was personally used or reviewed by someone who understands what it takes to use it. By the people, for the people.\"",
    es: '"Cada recurso en este sitio fue usado o revisado personalmente por alguien que entiende lo que toma usarlo. Por la gente, para la gente."',
  },
];

const INTERVAL = 12000;
const FADE = 550;

export function FounderQuotes() {
  const { locale } = useLocale();
  const [i, setI] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setI((prev) => (prev + 1) % quotes.length);
        setFading(false);
      }, FADE);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      <p
        className="font-serif text-[19px] leading-relaxed text-[color:var(--color-ink)] mb-5 transition-opacity duration-[550ms]"
        style={{ opacity: fading ? 0 : 1 }}
      >
        {quotes[i][locale]}
      </p>
      <div className="flex gap-1.5 mb-4" aria-label="Quote navigation">
        {quotes.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (idx === i) return;
              setFading(true);
              setTimeout(() => { setI(idx); setFading(false); }, FADE);
            }}
            className="h-1 rounded-full transition-all"
            style={{
              width: idx === i ? 20 : 6,
              background: idx === i ? 'var(--color-burgundy)' : 'var(--color-line)',
            }}
            aria-label={`Quote ${idx + 1} of ${quotes.length}`}
          />
        ))}
      </div>
    </div>
  );
}
