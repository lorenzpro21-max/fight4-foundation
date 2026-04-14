'use client';

import { useT } from '@/lib/LocaleContext';

export function Disclaimer() {
  const t = useT();
  return (
    <div id="disclaimer" className="max-w-[1280px] mx-auto px-6 lg:px-12 py-6 border-t border-[color:var(--color-line)]">
      <div className="flex gap-4 items-start text-[12.5px] text-[color:var(--color-muted)] leading-relaxed pt-6">
        <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
        <div>
          <strong className="text-[color:var(--color-ink-soft)] font-semibold">{t.disclaimer.heading} </strong>
          {t.disclaimer.body}
        </div>
      </div>
    </div>
  );
}
