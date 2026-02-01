import { SectionHeading } from '@/components/ui/SectionHeading';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';
import type { StaticImageData } from 'next/image';

export interface Reason {
  title: string;
  description: string;
  image: string | StaticImageData;
}

interface WhyChooseUsProps {
  reasons: Reason[];
  title?: string;
}

export function WhyChooseUs({ reasons, title = "오드의원을 선택해야하는 이유" }: WhyChooseUsProps) {
  return (
    <section className="py-16 md:py-20 bg-[#f4f0ec]">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-12">
          <SectionHeading>{title}</SectionHeading>
        </div>
        
        <div className="flex flex-col gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="relative w-full h-80 md:h-[420px] rounded-xl overflow-hidden shadow-md group isolate">
              {/* Background Image */}
              <ImageWithFallback 
                src={reason.image} 
                alt={reason.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Overlay for text readability - Lighter as requested */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              
              {/* Gradient for text legibility at the bottom */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90" />

              {/* Text Content Overlay - Moved to bottom */}
              <div className="relative z-10 h-full flex flex-col justify-end items-start p-6 md:p-12 pb-8 md:pb-14">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 drop-shadow-md">
                  {reason.title}
                </h3>
                <p className="text-white/90 leading-relaxed text-sm md:text-lg whitespace-pre-line max-w-2xl drop-shadow-sm">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
