import type { Metadata } from 'next';
import PageContent from './PageContent';
import { juvelookVolumeData } from '@/data/procedures/juvelook-volume';

const title = `${juvelookVolumeData.info.title} | 오드의원`;
const description = juvelookVolumeData.info.description;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: juvelookVolumeData.hero.image.src,
        width: 1200,
        height: 630,
        alt: juvelookVolumeData.hero.alt,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [juvelookVolumeData.hero.image.src],
  },
};

export default function JuvelookVolumePage() {
  return <PageContent />;
}
