import type { Metadata } from 'next';
import PageContent from './PageContent';
import { thermageData } from '@/data/procedures/thermage';

const title = `${thermageData.info.title} | 오드의원`;
const description = thermageData.info.description;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: thermageData.hero.image.src,
        width: 1200,
        height: 630,
        alt: thermageData.hero.alt,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [thermageData.hero.image.src],
  },
};

export default function ThermagePage() {
  return <PageContent />;
}
