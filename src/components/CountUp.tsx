'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

// Animates a number counting up from 0 to `to` when in view.
// Integer only. Use suffix for "K" / "%" etc.
export function CountUp({ to, prefix = '', suffix = '', duration = 1400, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setValue(to); return; }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3); // ease-out-cubic
              setValue(Math.round(to * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref} className={className}>{prefix}{value}{suffix}</span>;
}
