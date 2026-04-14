import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-[680px] mx-auto px-6 py-32 text-center">
      <div className="font-serif text-[120px] text-[color:var(--color-burgundy)] leading-none font-normal mb-6">4</div>
      <h1 className="font-serif text-[34px] font-normal tracking-tight mb-4">This page couldn&apos;t find what you&apos;re looking for.</h1>
      <p className="text-[16px] text-[color:var(--color-muted)] mb-10 max-w-[48ch] mx-auto leading-relaxed">
        Sometimes the path twists unexpectedly. If you were looking for a specific resource, try the library or ask our team.
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <Link href="/" className="bg-[color:var(--color-burgundy)] text-[color:var(--color-bg)] px-6 py-3 rounded-md text-[14px] font-medium">Back home</Link>
        <Link href="/resources" className="border border-[color:var(--color-line)] px-6 py-3 rounded-md text-[14px] font-medium">Browse resources</Link>
      </div>
    </div>
  );
}
