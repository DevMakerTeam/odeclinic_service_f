import { Check } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface TargetAudienceSectionProps {
  title: string;
  subtitle?: string;
  items: string[];
}

export function TargetAudienceSection({ title, subtitle, items }: TargetAudienceSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-16">
          <SectionHeading>{title}</SectionHeading>
          {subtitle && <p className="text-[#8a7e75] text-base md:text-lg">{subtitle}</p>}
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-6">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-3 p-4 bg-[#f4f0ec] rounded-xl hover:bg-[#e9e5e0] transition-colors"
            >
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#dcd8d4] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 md:w-3.5 h-3 md:h-3.5 text-[#a58d7d]" />
              </div>
              <span className="text-[#483C32] font-medium text-sm md:text-base leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
