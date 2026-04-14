'use client';

import { useEffect, useState } from 'react';
import { useLocale } from '@/lib/LocaleContext';

type Phase = 'playing' | 'exiting' | 'done';

export function Preloader() {
  const { locale } = useLocale();
  const [phase, setPhase] = useState<Phase>('playing');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Skip conditions: already-played-this-session OR prefers-reduced-motion OR not a first nav
    const seen = sessionStorage.getItem('f4-preloader-seen');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (seen || reduced) {
      setPhase('done');
      return;
    }
    document.body.style.overflow = 'hidden';

    const exitAt = 2500;
    const doneAt = 3200;
    const t1 = setTimeout(() => setPhase('exiting'), exitAt);
    const t2 = setTimeout(() => {
      setPhase('done');
      sessionStorage.setItem('f4-preloader-seen', '1');
      document.body.style.overflow = '';
    }, doneAt);

    const skip = () => {
      clearTimeout(t1); clearTimeout(t2);
      setPhase('exiting');
      setTimeout(() => {
        setPhase('done');
        sessionStorage.setItem('f4-preloader-seen', '1');
        document.body.style.overflow = '';
      }, 500);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') skip(); };
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t1); clearTimeout(t2);
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, []);

  if (!mounted || phase === 'done') return null;

  const line1a = locale === 'es' ? 'Por jóvenes' : 'By young adults';
  const line1b = locale === 'es' ? 'con cáncer.' : 'with cancer.';
  const line2a = locale === 'es' ? 'Para jóvenes' : 'For young adults';
  const line2b = locale === 'es' ? 'con cáncer.' : 'with cancer.';
  const tag = locale === 'es' ? 'Por la gente, para la gente.' : 'By the people, for the people.';

  return (
    <div
      className={`f4-preloader ${phase === 'exiting' ? 'f4-exit' : ''}`}
      onClick={() => {
        if (phase !== 'playing') return;
        setPhase('exiting');
        setTimeout(() => {
          setPhase('done');
          sessionStorage.setItem('f4-preloader-seen', '1');
          document.body.style.overflow = '';
        }, 500);
      }}
      aria-hidden={phase !== 'playing'}
    >
      <div className="f4-preloader-inner">
        <div className="f4-preloader-logo" aria-hidden>
          <span /><span /><span /><span />
        </div>

        <div className="f4-preloader-line f4-line-1">
          <span className="f4-part">{line1a}</span>{' '}
          <em className="f4-mark">{line1b}</em>
        </div>
        <div className="f4-preloader-line f4-line-2">
          <span className="f4-part">{line2a}</span>{' '}
          <em className="f4-mark">{line2b}</em>
        </div>

        <div className="f4-preloader-tag">{tag}</div>
        <div className="f4-preloader-hint" aria-hidden>↵ skip</div>
      </div>
    </div>
  );
}
