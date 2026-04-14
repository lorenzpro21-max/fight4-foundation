'use client';

// Ambient floating dots behind the hero. Dust-in-warm-light feel.
// 7 dots with staggered, slow animations. Pure CSS via animation-delay + infinite.

const dots = [
  { size: 14, top: '8%',  left: '6%',  color: 'var(--color-burgundy)', dur: 22, delay: 0,   opacity: 0.08 },
  { size: 10, top: '22%', left: '88%', color: 'var(--color-coral)',    dur: 18, delay: 3,   opacity: 0.12 },
  { size: 18, top: '48%', left: '4%',  color: 'var(--color-sage)',     dur: 26, delay: 6,   opacity: 0.1 },
  { size: 8,  top: '62%', left: '92%', color: 'var(--color-accent)',   dur: 20, delay: 1.5, opacity: 0.14 },
  { size: 12, top: '78%', left: '14%', color: 'var(--color-burgundy)', dur: 24, delay: 4,   opacity: 0.07 },
  { size: 6,  top: '30%', left: '50%', color: 'var(--color-coral)',    dur: 16, delay: 2,   opacity: 0.1 },
  { size: 16, top: '85%', left: '70%', color: 'var(--color-sage)',     dur: 28, delay: 7,   opacity: 0.09 },
];

export function HeroAmbient() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full blur-[2px]"
          style={{
            width: d.size,
            height: d.size,
            top: d.top,
            left: d.left,
            background: d.color,
            opacity: d.opacity,
            animation: `f4-drift ${d.dur}s ease-in-out ${d.delay}s infinite`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  );
}
