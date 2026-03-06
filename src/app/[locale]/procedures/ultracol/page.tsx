import type { Metadata } from 'next';
import PageContent from './PageContent';
import { ultracolData } from '@/data/procedures/ultracol';

const title = `${ultracolData.info.title} | 오드의원`;
const description = ultracolData.info.description;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: ultracolData.hero.image.src,
        width: 1200,
        height: 630,
        alt: ultracolData.hero.alt,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ultracolData.hero.image.src],
  },
};

export default function UltracolPage() {
  return <PageContent />;
}
