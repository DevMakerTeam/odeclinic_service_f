import type { Metadata } from 'next';
import PageContent from './PageContent';
import { ultherapyData } from '@/data/procedures/ultherapy';

const title = `${ultherapyData.info.title} | 오드의원`;
const description = ultherapyData.info.description;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: ultherapyData.hero.image.src,
        width: 1200,
        height: 630,
        alt: ultherapyData.hero.alt,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ultherapyData.hero.image.src],
  },
};

export default function UltherapyPage() {
  return <PageContent />;
}
