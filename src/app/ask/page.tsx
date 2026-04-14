'use client';

import { useT } from '@/lib/LocaleContext';
import { LogoMark } from '@/components/LogoMark';

export default function Ask() {
  const t = useT();
  return (
    <div className="max-w-[880px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-8 h-px bg-[color:var(--color-burgundy)]" />
        <span className="text-[12px] font-semibold tracking-widest uppercase text-[color:var(--color-burgundy)]">{t.ask.eyebrow}</span>
      </div>

      <h1 className="font-serif font-normal text-[40px] sm:text-[52px] lg:text-[62px] leading-[1.08] tracking-tight text-[color:var(--color-ink)] max-w-[20ch] mb-8">
        {t.ask.h1}
      </h1>

      <p className="text-[18px] leading-relaxed text-[color:var(--color-ink-soft)] max-w-[62ch] mb-10">{t.ask.sub}</p>

      <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-widest uppercase text-[color:var(--color-muted)] bg-[color:var(--color-burgundy-soft)] text-[color:var(--color-burgundy)] px-3 py-1.5 rounded mb-10">
        <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-burgundy)] animate-pulse" />
        {t.ask.comingSoon}
      </div>

      {/* Chat mockup */}
      <div className="bg-[color:var(--color-bg-card)] border border-[color:var(--color-line)] rounded-xl overflow-hidden">
        <div className="bg-[color:var(--color-bg)] border-b border-[color:var(--color-line)] px-5 py-3.5 flex items-center gap-3">
          <LogoMark size={26} />
          <div className="flex-1">
            <div className="text-[14px] font-medium text-[color:var(--color-ink)]">Ask F4</div>
            <div className="text-[11.5px] text-[color:var(--color-muted)]">{t.ask.demoLabel}</div>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-[color:var(--color-muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6FBF73]" /> online
          </div>
        </div>

        <div className="p-5 lg:p-8 space-y-6">
          {/* User bubble */}
          <div className="flex justify-end">
            <div className="bg-[color:var(--color-burgundy)] text-[color:var(--color-bg)] px-5 py-4 rounded-2xl rounded-br-sm max-w-[80%] text-[15px] leading-relaxed">
              {t.ask.demoUser}
            </div>
          </div>
          {/* Assistant bubble */}
          <div className="flex justify-start items-start gap-3">
            <div className="flex-shrink-0 mt-1"><LogoMark size={28} /></div>
            <div className="bg-[color:var(--color-bg)] border border-[color:var(--color-line)] px-5 py-4 rounded-2xl rounded-bl-sm max-w-[80%] text-[15px] leading-relaxed text-[color:var(--color-ink)] whitespace-pre-line">
              {t.ask.demoAssistant}
            </div>
          </div>
        </div>

        <div className="border-t border-[color:var(--color-line)] p-5 bg-[color:var(--color-bg)] flex items-center gap-3">
          <input
            disabled
            placeholder="(Coming soon — launching Fall 2026)"
            className="flex-1 bg-transparent text-[15px] text-[color:var(--color-muted)] focus:outline-none"
          />
          <button disabled className="bg-[color:var(--color-burgundy)]/40 text-white px-4 py-2 rounded text-[13px] font-medium cursor-not-allowed">
            Send
          </button>
        </div>
      </div>

      <div className="mt-10 p-5 bg-[color:var(--color-burgundy-soft)] border border-[color:var(--color-burgundy)]/20 rounded-lg text-[13.5px] leading-relaxed text-[color:var(--color-ink-soft)]">
        <strong className="text-[color:var(--color-burgundy)] font-semibold">How this is different. </strong>
        Ask F4 only draws from resources personally reviewed by young adults who&apos;ve been through cancer treatment. It doesn&apos;t scrape the open web, doesn&apos;t make things up, and doesn&apos;t give medical advice. It matches you to what exists and is trusted.
      </div>
    </div>
  );
}
