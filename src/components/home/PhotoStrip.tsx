'use client';

import { useT } from '@/lib/LocaleContext';

// Photos — drop real files in /public/assets/photos/ with these names to activate
const photos = [
  { src: '/assets/photos/lls-hope.jpg', caption: 'LLS Light the Night · HOPE' },
  { src: '/assets/photos/lls-sunset.jpg', caption: 'San Diego · 2024' },
  { src: '/assets/photos/lls-stage.jpg', caption: 'VOY opening night' },
  { src: '/assets/photos/lls-booth.jpg', caption: 'Community outreach' },
];

export function PhotoStrip() {
  const t = useT();
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 border-b border-[color:var(--color-line)]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 mb-10">
        <h2 className="font-serif text-[26px] lg:text-[32px] font-normal tracking-tight leading-tight max-w-[28ch]">
          Not just a website. A movement already underway.
        </h2>
        <p className="text-[13.5px] text-[color:var(--color-muted)] max-w-[34ch] lg:text-right">
          FIGHT4 grew out of Natalia&apos;s 2024 Leukemia &amp; Lymphoma Society Visionaries of the Year campaign in San Diego.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {photos.map((p, i) => (
          <figure key={i} className="relative aspect-[4/5] bg-[color:var(--color-burgundy-soft)] border border-[color:var(--color-line)] rounded-md overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt={p.caption}
              className="w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent text-white p-3 text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {p.caption}
            </figcaption>
            {/* Placeholder fallback when image fails */}
            <div className="absolute inset-0 -z-0 flex items-center justify-center text-[color:var(--color-burgundy)] text-[11px] font-medium pointer-events-none opacity-60">
              {p.caption}
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
