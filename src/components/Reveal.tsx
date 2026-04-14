'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'aside';
  className?: string;
};

export function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setVisible(true); return; }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setVisible(true); io.unobserve(e.target); }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity 0.7s cubic-bezier(0.2, 0.6, 0.2, 1) ${delay}ms, transform 0.7s cubic-bezier(0.2, 0.6, 0.2, 1) ${delay}ms`,
  };

  const Component = Tag as React.ElementType;
  return <Component ref={ref} style={style} className={className}>{children}</Component>;
}
