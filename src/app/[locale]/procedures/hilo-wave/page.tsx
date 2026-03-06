import type { Metadata } from 'next';
import PageContent from './PageContent';
import { hiloWaveData } from '@/data/procedures/hilo-wave';

const title = `${hiloWaveData.info.title} | 오드의원`;
const description = hiloWaveData.info.description;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: hiloWaveData.hero.image.src,
        width: 1200,
        height: 630,
        alt: hiloWaveData.hero.alt,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [hiloWaveData.hero.image.src],
  },
};

export default function HiloWavePage() {
  return <PageContent />;
}
