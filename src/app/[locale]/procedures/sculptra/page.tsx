import type { Metadata } from 'next';
import PageContent from './PageContent';
import { sculptraData } from '@/data/procedures/sculptra';

const title = `${sculptraData.info.title} | 오드의원`;
const description = sculptraData.info.description;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: sculptraData.hero.image.src,
        width: 1200,
        height: 630,
        alt: sculptraData.hero.alt,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [sculptraData.hero.image.src],
  },
};

export default function SculptraPage() {
  return <PageContent />;
}
