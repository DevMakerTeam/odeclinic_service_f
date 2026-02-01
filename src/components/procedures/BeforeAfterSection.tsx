import { ShieldAlert } from 'lucide-react';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { StaticImageData } from 'next/image';

interface BeforeAfterPair {
  before: string | StaticImageData;
  after: string | StaticImageData;
  id: number;
}

interface BeforeAfterSectionProps {
  title: string;
  pairs: BeforeAfterPair[];
}

export function BeforeAfterSection({ title, pairs }: BeforeAfterSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-[#f4f0ec]">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-16">
          <SectionHeading>{title}</SectionHeading>
        </div>
        
        <div className="space-y-12 md:space-y-16">
          {pairs.map((pair, index) => (
            <div key={index} className="grid grid-cols-2 gap-3 md:gap-4">
              {/* Before */}
              <div className="relative aspect-[3/4] bg-[#e6e2de] rounded-xl md:rounded-2xl overflow-hidden">
                <ImageWithFallback 
                  src={pair.before} 
                  alt={`Case ${pair.id} Before`} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-black/50 backdrop-blur-md text-white px-2.5 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider">
                  Before
                </div>
              </div>
              
              {/* After */}
              <div className="relative aspect-[3/4] bg-[#e6e2de] rounded-xl md:rounded-2xl overflow-hidden">
                <ImageWithFallback 
                  src={pair.after} 
                  alt={`Case ${pair.id} After`} 
                  className="w-full h-full object-cover blur-[2px]" 
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-3 md:p-6 text-center z-10">
                  <ShieldAlert className="w-6 h-6 md:w-8 md:h-8 text-white mb-2 md:mb-3 opacity-80" />
                  <p className="text-white font-bold text-[10px] sm:text-xs md:text-base mb-1 md:mb-2 leading-snug break-keep">
                    전후 사진은 로그인 후에<br className="hidden sm:block"/> 확인하실 수 있습니다.
                  </p>
                  <p className="text-white/60 text-[9px] md:text-xs font-medium mt-1">
                    오드의원은 의료법을 준수합니다.
                  </p>
                </div>
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#a58d7d]/80 backdrop-blur-md text-white px-2.5 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider">
                  After
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
