import { ImageWithFallback } from '@/components/common/ImageWithFallback';
import type { StaticImageData } from 'next/image';

interface HeroSectionProps {
  image: string | StaticImageData;
  alt: string;
}

export function HeroSection({ image, alt }: HeroSectionProps) {
  return (
    <section className="relative w-full h-[300px] md:h-[480px] overflow-hidden bg-[#f4f0ec]">
      <ImageWithFallback 
        src={image} 
        alt={alt} 
        className="w-full h-full object-cover object-center" 
      />
    </section>
  );
}
