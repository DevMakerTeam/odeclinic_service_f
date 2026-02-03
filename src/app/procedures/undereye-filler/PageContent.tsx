'use client';

import { motion } from 'motion/react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';
import { HeroSection } from '@/components/procedures/HeroSection';
import { ProcedureInfoSection } from '@/components/procedures/ProcedureInfoSection';
import { BeforeAfterSection } from '@/components/procedures/BeforeAfterSection';
import { PricingSection } from '@/components/procedures/PricingSection';
import { TargetAudienceSection } from '@/components/procedures/TargetAudienceSection';
import { FAQSection } from '@/components/procedures/FAQSection';
import { MaintenanceSection } from '@/components/procedures/MaintenanceSection';
import { RelatedPosts } from '@/components/shared/RelatedPosts';
import { WhyChooseUs } from '@/components/shared/WhyChooseUs';
import { ReservationCTA } from '@/components/shared/ReservationCTA';
import { undereyeFillerData } from '@/data/procedures/undereye-filler';
import { commonProcedureData } from '@/data/procedures/common';

export default function UndereyeFillerPageContent() {
  return (
    <div className="bg-background min-h-screen font-sans text-foreground w-full">
      {/* Hero Section */}
      <HeroSection image={undereyeFillerData.hero.image} alt={undereyeFillerData.hero.alt} />

      {/* Procedure Info Section */}
      <ProcedureInfoSection {...undereyeFillerData.info} />

      {/* Before & After Section */}
      <BeforeAfterSection {...undereyeFillerData.beforeAfter} />

      {/* Key Benefits (눈밑꺼짐 필러 고유 컨텐츠) */}
      <section className="py-16 md:py-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10 md:mb-16">
            <SectionHeading>눈밑꺼짐 필러 효과</SectionHeading>
          </div>

          <div className="space-y-16 md:space-y-20">
            {/* POINT 01 - 가장 확실한 방법 */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 01
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  눈밑꺼짐을 채우는{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    가장 확실한 방법
                  </motion.span>
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8">
                  {undereyeFillerData.specialSections.effectiveness.content.map((text, idx) => (
                    <p
                      key={idx}
                      className={`text-[#483C32] text-base md:text-lg leading-relaxed ${
                        idx < undereyeFillerData.specialSections.effectiveness.content.length - 1 ? 'mb-4' : ''
                      }`}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={undereyeFillerData.images.eyelight1}
                    alt={undereyeFillerData.specialSections.effectiveness.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-medium mb-1 md:mb-2">
                    {undereyeFillerData.specialSections.effectiveness.imageCaption}
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 02 - 시간이 지나도 변형이 적은 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 02
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    시간이 지나도 변형이 적은
                  </motion.span>{' '}
                  레스틸렌 아이라이트
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8">
                  {undereyeFillerData.specialSections.stability.content.map((text, idx) => (
                    <p
                      key={idx}
                      className={`text-[#483C32] text-base md:text-lg leading-relaxed ${
                        idx < undereyeFillerData.specialSections.stability.content.length - 1 ? 'mb-4' : ''
                      }`}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={undereyeFillerData.images.eyelight2}
                    alt={undereyeFillerData.specialSections.stability.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#8a7e75] text-xs md:text-sm leading-relaxed break-keep opacity-80">
                    관련 연구 :{' '}
                    <a
                      href={undereyeFillerData.specialSections.stability.imageSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a58d7d] hover:underline"
                    >
                      {undereyeFillerData.specialSections.stability.imageSourceText}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 03 - 튀어나온 눈밑 지방 마스킹 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 03
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    튀어나온 눈밑 지방
                  </motion.span>
                  을 마스킹하는 효과
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8">
                  {undereyeFillerData.specialSections.fatMasking.content.map((text, idx) => (
                    <p
                      key={idx}
                      className={`text-[#483C32] text-base md:text-lg leading-relaxed ${
                        idx < undereyeFillerData.specialSections.fatMasking.content.length - 1 ? 'mb-4' : ''
                      }`}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={undereyeFillerData.images.eyelightCompare}
                    alt={undereyeFillerData.specialSections.fatMasking.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-medium mb-1 md:mb-2">
                    {undereyeFillerData.specialSections.fatMasking.imageCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <MaintenanceSection
        title={undereyeFillerData.maintenance.title}
        content={undereyeFillerData.maintenance.content}
      />

      {/* Pricing Section */}
      <PricingSection {...undereyeFillerData.pricing} />

      {/* Target Audience Section */}
      <TargetAudienceSection {...undereyeFillerData.targetAudience} />

      {/* FAQ Section */}
      <FAQSection title={undereyeFillerData.faq.title} faqs={undereyeFillerData.faq.items} />

      {/* Related Posts (페이지별 다름) */}
      <RelatedPosts posts={undereyeFillerData.relatedPosts} />

      {/* Why Choose Us (공통) */}
      <WhyChooseUs reasons={commonProcedureData.reasons} />

      {/* Reservation CTA (공통) */}
      <ReservationCTA />
    </div>
  );
}
