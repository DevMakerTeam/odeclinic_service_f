import type { Metadata } from 'next';
import PageContent from './PageContent';
import { densityAlphaData } from '@/data/procedures/density-alpha';

const title = `${densityAlphaData.info.title} | 오드의원`;
const description = densityAlphaData.info.description;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: densityAlphaData.hero.image.src,
        width: 1200,
        height: 630,
        alt: densityAlphaData.hero.alt,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [densityAlphaData.hero.image.src],
  },
};

export default function DensityAlphaPage() {
  return <PageContent />;
}
