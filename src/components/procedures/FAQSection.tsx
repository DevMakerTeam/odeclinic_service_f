import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';
import type { StaticImageData } from 'next/image';

interface FAQ {
  q: string;
  a: string;
  image?: StaticImageData;
  imageAlt?: string;
  afterImageText?: string;
}

interface FAQSectionProps {
  title: string;
  faqs: FAQ[];
}

export function FAQSection({ title, faqs }: FAQSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-[#f4f0ec]">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-12">
          <SectionHeading>{title}</SectionHeading>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-${idx}`} 
              className="border rounded-xl px-4 md:px-6 bg-white data-[state=open]:border-[#dcd8d4] transition-colors overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline py-5 md:py-6 font-medium text-left text-base md:text-lg">
                <div className="text-left">
                  <span className="text-[#a58d7d] mr-2 md:mr-3 font-bold">Q.</span>
                  {faq.q}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[#8a7e75] text-base md:text-lg">
                <div className="pl-6 md:pl-8 pb-8 md:pb-10 leading-relaxed space-y-4">
                  <div className="whitespace-pre-line">{faq.a}</div>
                  {faq.image && (
                    <>
                      <div className="rounded-2xl overflow-hidden shadow-sm border border-[#e9e5e0] mt-4">
                        <ImageWithFallback
                          src={faq.image}
                          alt={faq.imageAlt || ''}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      {faq.afterImageText && (
                        <div className="whitespace-pre-line mt-4">{faq.afterImageText}</div>
                      )}
                    </>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
