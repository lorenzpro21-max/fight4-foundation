'use client';

import Link from 'next/link';
import { useT } from '@/lib/LocaleContext';

export default function Movement() {
  const t = useT();
  return (
    <div className="bg-[color:var(--color-burgundy)] text-[color:var(--color-bg)] min-h-[80vh]">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-12 py-20 lg:py-28 text-center">
        <div className="text-[11.5px] font-semibold tracking-widest uppercase opacity-70 mb-8">{t.movement.eyebrow}</div>

        <h1
          className="font-hand text-[68px] sm:text-[108px] lg:text-[160px] leading-[0.9] mb-12"
          style={{ fontFamily: 'var(--font-hand)', textShadow: '6px 6px 0 rgba(0,0,0,0.18)' }}
        >
          {t.movement.wordmark}
        </h1>

        <div className="max-w-[58ch] mx-auto space-y-6 text-left md:text-center">
          <p className="font-serif italic text-[20px] lg:text-[22px] leading-relaxed">{t.movement.lede}</p>
          <p className="text-[17px] lg:text-[18px] leading-relaxed opacity-90">{t.movement.body1}</p>
          <p className="text-[17px] lg:text-[18px] leading-relaxed opacity-90">{t.movement.body2}</p>
          <p className="font-serif text-[19px] lg:text-[21px] leading-relaxed italic pt-4">{t.movement.cta}</p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <a
            href="https://instagram.com/fight4lls"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 bg-white text-[color:var(--color-burgundy)] px-7 py-4 rounded-md text-[15px] font-medium hover:bg-white/90 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>
            @fight4lls
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 px-6 py-4 rounded-md text-[15px] font-medium transition-colors"
          >
            {t.common.backHome}
          </Link>
        </div>
      </div>
    </div>
  );
}
