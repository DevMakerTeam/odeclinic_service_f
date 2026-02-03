import type { Metadata } from 'next';
import PageContent from './PageContent';
import { undereyeFillerData } from '@/data/procedures/undereye-filler';

const title = `${undereyeFillerData.info.title} | 오드의원`;
const description = undereyeFillerData.info.description;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: undereyeFillerData.hero.image.src,
        width: 1200,
        height: 630,
        alt: undereyeFillerData.hero.alt,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [undereyeFillerData.hero.image.src],
  },
};

export default function UndereyeFillerPage() {
  return <PageContent />;
}
