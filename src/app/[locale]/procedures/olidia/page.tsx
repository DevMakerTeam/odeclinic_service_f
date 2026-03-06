import type { Metadata } from 'next';
import PageContent from './PageContent';
import { olidiaData } from '@/data/procedures/olidia';

const title = `${olidiaData.info.title} | 오드의원`;
const description = olidiaData.info.description;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: olidiaData.hero.image.src,
        width: 1200,
        height: 630,
        alt: olidiaData.hero.alt,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [olidiaData.hero.image.src],
  },
};

export default function OlidiaPage() {
  return <PageContent />;
}
