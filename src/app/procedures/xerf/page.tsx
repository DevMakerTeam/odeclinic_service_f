import type { Metadata } from 'next';
import PageContent from './PageContent';
import { xerfData } from '@/data/procedures/xerf';

const title = `${xerfData.info.title} | 오드의원`;
const description = xerfData.info.description;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: xerfData.hero.image.src,
        width: 1200,
        height: 630,
        alt: xerfData.hero.alt,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [xerfData.hero.image.src],
  },
};

export default function XerfPage() {
  return <PageContent />;
}
