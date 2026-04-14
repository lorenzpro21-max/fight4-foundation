'use client';

import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';

type Direction = 'up' | 'left' | 'right' | 'scale' | 'none';

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  threshold?: number;
  as?: 'div' | 'section' | 'article' | 'aside' | 'figure' | 'span' | 'p' | 'h1' | 'h2' | 'h3';
  className?: string;
  style?: CSSProperties;
};

export function Reveal({
  children,
  delay = 0,
  duration = 700,
  direction = 'up',
  distance = 20,
  threshold = 0.12,
  as: Tag = 'div',
  className = '',
  style = {},
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') { setVisible(true); return; }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setVisible(true); io.unobserve(e.target); }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const from = (() => {
    switch (direction) {
      case 'up': return `translateY(${distance}px)`;
      case 'left': return `translateX(-${distance}px)`;
      case 'right': return `translateX(${distance}px)`;
      case 'scale': return `scale(0.97)`;
      case 'none': return 'none';
    }
  })();

  const computed: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : from,
    transition: `opacity ${duration}ms cubic-bezier(0.2, 0.6, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.2, 0.6, 0.2, 1) ${delay}ms`,
    willChange: visible ? 'auto' : 'opacity, transform',
    ...style,
  };

  const Component = Tag as React.ElementType;
  return <Component ref={ref} style={computed} className={className}>{children}</Component>;
}
