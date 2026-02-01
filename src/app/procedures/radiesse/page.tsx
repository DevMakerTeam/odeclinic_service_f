import type { Metadata } from 'next';
import PageContent from './PageContent';
import { radiesseData } from '@/data/procedures/radiesse';

const title = `${radiesseData.info.title} | 오드의원`;
const description = radiesseData.info.description;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: radiesseData.hero.image.src,
        width: 1200,
        height: 630,
        alt: radiesseData.hero.alt,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [radiesseData.hero.image.src],
  },
};

export default function RadiessePage() {
  return <PageContent />;
}
