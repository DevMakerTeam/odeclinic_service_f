'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft, Share2 } from 'lucide-react';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';
import type { StaticImageData } from 'next/image';

interface HeroSectionProps {
  image: string | StaticImageData;
  alt: string;
  title?: string;
}

export function HeroSection({ image, alt, title }: HeroSectionProps) {
  const router = useRouter();

  return (
    <>
      {/* Sticky 헤더 */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#483C32]/5 flex items-center h-14 px-4">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-[#483C32]/5 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-[#483C32]" />
        </button>

        {/* 타이틀: 절대 중앙 고정 */}
        <h1 className="absolute left-1/2 -translate-x-1/2 text-base font-bold text-[#483C32] truncate max-w-[200px] pointer-events-none">
          {title ?? '시술 안내'}
        </h1>

        <button className="p-2 hover:bg-[#483C32]/5 rounded-full transition-colors ml-auto">
          <Share2 className="w-5 h-5 text-[#483C32]" />
        </button>
      </div>

      {/* Hero 이미지 */}
      <section className="relative w-full h-[260px] md:h-[440px] overflow-hidden bg-[#f4f0ec]">
        <ImageWithFallback
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-center"
        />
      </section>
    </>
  );
}
