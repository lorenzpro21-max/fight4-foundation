'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Locale } from './content';

type Ctx = { locale: Locale; setLocale: (l: Locale) => void };
const LocaleContext = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('f4-locale') : null;
    if (stored === 'en' || stored === 'es') setLocaleState(stored);
    else if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('es')) setLocaleState('es');
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') window.localStorage.setItem('f4-locale', l);
    if (typeof document !== 'undefined') document.documentElement.lang = l;
  };

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}

import { content } from './content';
export function useT() {
  const { locale } = useLocale();
  return content[locale];
}
