import type { Metadata } from 'next';
import { Source_Serif_4, Inter, Caveat } from 'next/font/google';
import './globals.css';
import { LocaleProvider } from '@/lib/LocaleContext';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

const serif = Source_Serif_4({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-serif-loaded', display: 'swap' });
const sans = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-sans-loaded', display: 'swap' });
const hand = Caveat({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-hand-loaded', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://fight4-foundation.vercel.app'),
  title: 'FIGHT4 Foundation — By young adults with cancer, for young adults with cancer',
  description: "Every resource personally reviewed by young adults who've been through cancer treatment. Financial aid, support groups, free experiences, and community — in one trusted place.",
  openGraph: {
    title: 'FIGHT4 Foundation',
    description: 'By young adults with cancer, for young adults with cancer. $90K raised for blood cancer research.',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'FIGHT4 Foundation',
  alternateName: 'F4 Cancer Foundation',
  description: 'A personally-vetted resource platform for young adults with cancer. By the people, for the people.',
  url: 'https://fight4-foundation.vercel.app',
  logo: 'https://fight4-foundation.vercel.app/icon',
  sameAs: ['https://instagram.com/fight4lls'],
  founder: {
    '@type': 'Person',
    name: 'Natalia Menéndez',
    jobTitle: 'Founder',
    description: 'SMZL survivor, LLS Visionaries of the Year candidate, Community Outreach Volunteer',
  },
  areaServed: 'Worldwide',
  knowsLanguage: ['en', 'es'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${hand.variable}`}>
      <body className="min-h-full flex flex-col">
        <style>{`
          :root {
            --font-serif: ${serif.style.fontFamily}, Georgia, serif;
            --font-sans: ${sans.style.fontFamily}, system-ui, sans-serif;
            --font-hand: ${hand.style.fontFamily}, cursive;
          }
          html { scroll-behavior: smooth; }
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LocaleProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
