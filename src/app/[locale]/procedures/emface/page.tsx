import type { Metadata } from 'next';
import PageContent from './PageContent';
import { emfaceData } from '@/data/procedures/emface';

const title = `${emfaceData.info.title} | 오드의원`;
const description = emfaceData.info.description;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: emfaceData.hero.image.src,
        width: 1200,
        height: 630,
        alt: emfaceData.hero.alt,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [emfaceData.hero.image.src],
  },
};

export default function EmfacePage() {
  return <PageContent />;
}
