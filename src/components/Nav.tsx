'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useT } from '@/lib/LocaleContext';
import { LogoMark } from './LogoMark';
import { LocaleToggle } from './LocaleToggle';

export function Nav() {
  const t = useT();
  const [open, setOpen] = useState(false);
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
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3.5 text-[color:var(--color-ink)] no-underline">
            <LogoMark breathe />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-[16px] sm:text-[18px] font-medium tracking-tight">FIGHT4 Foundation</span>
              <span className="text-[10.5px] font-medium text-[color:var(--color-muted)] tracking-wide mt-0.5 hidden sm:inline">{t.nav.tagline}</span>
            </div>
          </Link>
          <div className="hidden lg:flex gap-8 text-[14px] font-medium text-[color:var(--color-ink-soft)]">
            <Link href="/resources" className="hover:text-[color:var(--color-burgundy)] transition-colors">{t.nav.resources}</Link>
            <Link href="/quick-guides" className="hover:text-[color:var(--color-burgundy)] transition-colors">{t.nav.quickGuides}</Link>
            <Link href="/about" className="hover:text-[color:var(--color-burgundy)] transition-colors">{t.nav.story}</Link>
            <Link href="/movement" className="hover:text-[color:var(--color-burgundy)] transition-colors">{t.nav.movement}</Link>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block"><LocaleToggle /></div>
            <Link href="/ask" className="hidden sm:inline-flex bg-[color:var(--color-burgundy)] text-[color:var(--color-bg)] px-4 py-2.5 rounded-md text-[14px] font-medium hover:bg-[color:var(--color-burgundy-dark)] transition-colors whitespace-nowrap">{t.nav.ask} →</Link>
            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 -mr-2 text-[color:var(--color-ink)] hover:text-[color:var(--color-burgundy)]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-[color:var(--color-line)] bg-[color:var(--color-bg)]">
            <div className="px-6 py-6 flex flex-col gap-1">
              {[
                { href: '/resources', label: t.nav.resources },
                { href: '/quick-guides', label: t.nav.quickGuides },
                { href: '/about', label: t.nav.story },
                { href: '/movement', label: t.nav.movement },
                { href: '/ask', label: t.nav.ask },
              ].map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[18px] font-serif text-[color:var(--color-ink)] border-b border-[color:var(--color-line)] hover:text-[color:var(--color-burgundy)]"
                >
                  {i.label}
                </Link>
              ))}
              <div className="pt-4 flex items-center justify-between">
                <LocaleToggle />
                <span className="text-[12px] text-[color:var(--color-muted)] italic">{t.nav.tagline}</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
