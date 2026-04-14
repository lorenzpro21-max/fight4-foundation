import { Hero } from '@/components/home/Hero';
import { Partners } from '@/components/home/Partners';
import { PhotoStrip } from '@/components/home/PhotoStrip';
import { Pillars } from '@/components/home/Pillars';
import { StoryTeaser } from '@/components/home/StoryTeaser';
import { Wordmark } from '@/components/home/Wordmark';
import { Disclaimer } from '@/components/home/Disclaimer';

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Pillars />
      <StoryTeaser />
      <PhotoStrip />
      <Wordmark />
      <Disclaimer />
    </>
  );
}
