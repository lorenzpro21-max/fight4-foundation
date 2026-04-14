'use client';

import Link from 'next/link';
import { useT } from '@/lib/LocaleContext';
import { LogoMark } from './LogoMark';
import { LocaleToggle } from './LocaleToggle';

export function Nav() {
  const t = useT();
  return (
    <>
      {/* Trust bar */}
      <div className="bg-[color:var(--color-ink)] text-[color:var(--color-bg)] text-[12px] tracking-wide">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-2.5 flex justify-between items-center gap-4">
          <div className="flex gap-4 md:gap-8 items-center opacity-80 flex-wrap">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6FBF73] inline-block" />{t.trustBar.verified}</span>
            <span className="hidden md:inline">{t.trustBar.updated}</span>
          </div>
          <Link href="#disclaimer" className="opacity-75 hover:opacity-100 border-b border-white/30 pb-[1px] hidden md:inline">{t.trustBar.disclaimer}</Link>
        </div>
      </div>

      {/* Main nav */}
      <nav className="border-b border-[color:var(--color-line)] bg-[color:var(--color-bg)] sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-4 flex justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-3.5 text-[color:var(--color-ink)] no-underline">
            <LogoMark />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-[18px] font-medium tracking-tight">FIGHT4 Foundation</span>
              <span className="text-[10.5px] font-medium text-[color:var(--color-muted)] tracking-wide mt-0.5">{t.nav.tagline}</span>
            </div>
          </Link>
          <div className="hidden lg:flex gap-8 text-[14px] font-medium text-[color:var(--color-ink-soft)]">
            <Link href="/resources" className="hover:text-[color:var(--color-burgundy)] transition-colors">{t.nav.resources}</Link>
            <Link href="/quick-guides" className="hover:text-[color:var(--color-burgundy)] transition-colors">{t.nav.quickGuides}</Link>
            <Link href="/about" className="hover:text-[color:var(--color-burgundy)] transition-colors">{t.nav.story}</Link>
            <Link href="/movement" className="hover:text-[color:var(--color-burgundy)] transition-colors">{t.nav.movement}</Link>
          </div>
          <div className="flex items-center gap-3">
            <LocaleToggle />
            <Link href="/ask" className="bg-[color:var(--color-burgundy)] text-[color:var(--color-bg)] px-4 py-2.5 rounded-md text-[14px] font-medium hover:bg-[color:var(--color-burgundy-dark)] transition-colors whitespace-nowrap">{t.nav.ask} →</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
