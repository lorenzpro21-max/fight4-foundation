'use client';

import Link from 'next/link';
import { useT } from '@/lib/LocaleContext';

export function Footer() {
  const t = useT();
  return (
    <footer className="bg-[color:var(--color-ink)] text-[color:var(--color-bg)] mt-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="font-serif text-[32px] lg:text-[44px] font-normal leading-tight tracking-tight mb-5">
              {t.footer.brandLine1}<br />
              <em className="italic text-[color:var(--color-coral)]">{t.footer.brandLine2}</em>
            </div>
            <p className="font-serif italic text-[15px] opacity-65 max-w-[32ch] leading-relaxed">{t.footer.tagline}</p>
          </div>
          <div>
            <h4 className="text-[11.5px] font-semibold tracking-widest uppercase opacity-55 mb-4">{t.footer.colResources}</h4>
            <Link className="block text-[14px] opacity-85 hover:opacity-100 mb-2.5" href="/resources">{t.nav.resources}</Link>
            <Link className="block text-[14px] opacity-85 hover:opacity-100 mb-2.5" href="/quick-guides">{t.nav.quickGuides}</Link>
            <Link className="block text-[14px] opacity-85 hover:opacity-100 mb-2.5" href="/ask">{t.nav.ask}</Link>
          </div>
          <div>
            <h4 className="text-[11.5px] font-semibold tracking-widest uppercase opacity-55 mb-4">{t.footer.colFoundation}</h4>
            <Link className="block text-[14px] opacity-85 hover:opacity-100 mb-2.5" href="/about">{t.nav.story}</Link>
            <Link className="block text-[14px] opacity-85 hover:opacity-100 mb-2.5" href="/movement">{t.nav.movement}</Link>
            <a className="block text-[14px] opacity-85 hover:opacity-100 mb-2.5" href="mailto:hello@fight4foundation.org">Contact</a>
          </div>
          <div>
            <h4 className="text-[11.5px] font-semibold tracking-widest uppercase opacity-55 mb-4">{t.footer.colTrust}</h4>
            <Link className="block text-[14px] opacity-85 hover:opacity-100 mb-2.5" href="#disclaimer">{t.trustBar.disclaimer}</Link>
            <a className="block text-[14px] opacity-85 hover:opacity-100 mb-2.5" href="https://instagram.com/fight4lls" target="_blank" rel="noopener">@fight4lls</a>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-2 text-[12.5px] opacity-55">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.reviewedBy}</span>
        </div>
      </div>
    </footer>
  );
}
