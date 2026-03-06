import type { Metadata } from 'next';
import PageContent from './PageContent';
import { coolsoniqData } from '@/data/procedures/coolsoniq';

const title = `${coolsoniqData.info.title} | 오드의원`;
const description = coolsoniqData.info.description;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: coolsoniqData.hero.image.src,
        width: 1200,
        height: 630,
        alt: coolsoniqData.hero.alt,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [coolsoniqData.hero.image.src],
  },
};

export default function CoolsoniqPage() {
  return <PageContent />;
}
