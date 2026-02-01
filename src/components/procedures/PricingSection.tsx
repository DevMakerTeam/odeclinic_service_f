'use client';

import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useRouter } from 'next/navigation';

interface PriceItem {
  name: string;
  price: string;
  highlight?: boolean;
}

interface PricingSectionProps {
  title: string;
  subtitle: string;
  note?: string;
  items: PriceItem[];
}

export function PricingSection({ title, subtitle, note, items }: PricingSectionProps) {
  const router = useRouter();

  return (
    <section className="py-16 md:py-20 bg-[#f4f0ec]">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-12">
          <SectionHeading>{title}</SectionHeading>
          <h3 className="text-lg md:text-xl text-[#483C32] font-medium mb-2">{subtitle}</h3>
          {note && <p className="text-[#8a7e75] text-sm md:text-base">{note}</p>}
        </div>

        <div className="bg-white rounded-3xl shadow-sm border overflow-hidden max-w-2xl mx-auto">
          <div className="divide-y">
            {items.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-5 md:p-6 flex justify-between items-center hover:bg-[#f4f0ec] transition-colors ${
                  item.highlight ? 'bg-[#e9e5e0]/30' : ''
                }`}
              >
                <span className="font-medium text-sm md:text-base whitespace-nowrap text-[#483C32]">
                  {item.name}
                </span>
                <span className={`font-bold text-lg md:text-xl ${
                  item.highlight ? 'text-[#a58d7d]' : 'text-[#483C32]'
                }`}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            onClick={() => router.push('/events')}
            className="bg-[#483C32] hover:bg-[#362d26] text-white text-base md:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            이벤트 바로가기
          </Button>
        </div>
      </div>
    </section>
  );
}
