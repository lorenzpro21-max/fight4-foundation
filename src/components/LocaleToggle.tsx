'use client';

import { useLocale } from '@/lib/LocaleContext';

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();
  return (
    <button
      onClick={() => setLocale(locale === 'en' ? 'es' : 'en')}
      aria-label={`Switch to ${locale === 'en' ? 'Spanish' : 'English'}`}
      className="text-[12px] font-medium tracking-wider uppercase text-[color:var(--color-muted)] hover:text-[color:var(--color-burgundy)] transition-colors border border-[color:var(--color-line)] rounded-full px-3 py-1.5 flex items-center gap-1.5"
    >
      <span className={locale === 'en' ? 'text-[color:var(--color-ink)]' : ''}>EN</span>
      <span className="opacity-30">/</span>
      <span className={locale === 'es' ? 'text-[color:var(--color-ink)]' : ''}>ES</span>
    </button>
  );
}
