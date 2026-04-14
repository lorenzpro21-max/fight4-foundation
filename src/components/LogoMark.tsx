export function LogoMark({ size = 32, breathe = false }: { size?: number; breathe?: boolean }) {
  const s = size;
  const dot = s * 0.53;
  const off = s * 0.23;
  return (
    <div
      className={breathe ? 'logo-mark-breathe' : undefined}
      style={{ position: 'relative', width: s, height: s, flexShrink: 0, transformOrigin: 'center' }}
      aria-hidden
    >
      <span style={{ position: 'absolute', width: dot, height: dot, borderRadius: '50%', background: 'var(--color-burgundy)', top: 0, left: off }} />
      <span style={{ position: 'absolute', width: dot, height: dot, borderRadius: '50%', background: 'var(--color-sage)', top: off, right: 0 }} />
      <span style={{ position: 'absolute', width: dot, height: dot, borderRadius: '50%', background: 'var(--color-coral)', bottom: 0, left: off }} />
      <span style={{ position: 'absolute', width: dot, height: dot, borderRadius: '50%', background: 'var(--color-accent)', top: off, left: 0 }} />
    </div>
  );
}
