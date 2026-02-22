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
import { xerfData } from '@/data/procedures/xerf';
import { commonProcedureData } from '@/data/procedures/common';

export default function XerfPageContent() {
  return (
    <div className="bg-background min-h-screen font-sans text-foreground w-full">
      {/* Hero Section */}
      <HeroSection image={xerfData.hero.image} alt={xerfData.hero.alt} title={xerfData.info.displayTitle} />

      {/* Procedure Info Section */}
      <ProcedureInfoSection {...xerfData.info} />

      {/* Before & After Section */}
      <BeforeAfterSection {...xerfData.beforeAfter} />

      {/* Key Benefits (세르프 고유 컨텐츠) */}
      <section className="py-16 md:py-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10 md:mb-16">
            <SectionHeading>세르프 효과</SectionHeading>
          </div>

          <div className="space-y-16 md:space-y-20">
            {/* POINT 01 - 듀얼 주파수 */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 01
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    듀얼 주파수
                  </motion.span>
                  를 활용한 타이트닝 + 리프팅
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8 space-y-4">
                  {xerfData.specialSections.dualFrequency.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[#483C32] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={xerfData.images.point1}
                    alt={xerfData.specialSections.dualFrequency.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold mb-2">
                    {xerfData.specialSections.dualFrequency.imageCaption}
                  </p>
                  {xerfData.specialSections.dualFrequency.reference && (
                    <p className="text-[#8a7e75] text-xs md:text-sm leading-relaxed break-keep opacity-80">
                      관련 연구 :{' '}
                      <a
                        href={xerfData.specialSections.dualFrequency.reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a58d7d] hover:underline"
                      >
                        {xerfData.specialSections.dualFrequency.reference.text}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* POINT 02 - 시술자 의존도 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 02
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  세르프는{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    시술자에 따른 효과 차이
                  </motion.span>
                  가 크다
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8 space-y-4">
                  {xerfData.specialSections.operatorDependent.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[#483C32] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-6 md:mb-8 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={xerfData.images.point2}
                    alt={xerfData.specialSections.operatorDependent.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl space-y-4">
                  {xerfData.specialSections.operatorDependent.bottomContent.map((text, idx) => (
                    <p key={idx} className="text-[#483C32] text-base md:text-lg leading-relaxed">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* POINT 03 - 통증과 다운타임 최소화 */}
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
                    통증과 다운타임을 최소화
                  </motion.span>
                  한 우아한 리프팅
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8 space-y-4">
                  {xerfData.specialSections.minimalDowntime.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[#483C32] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={xerfData.images.point3}
                    alt={xerfData.specialSections.minimalDowntime.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold">
                    {xerfData.specialSections.minimalDowntime.imageCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <MaintenanceSection
        title={xerfData.maintenance.title}
        content={xerfData.maintenance.content}
      />

      {/* Pricing Section */}
      <PricingSection {...xerfData.pricing} />

      {/* Target Audience Section */}
      <TargetAudienceSection {...xerfData.targetAudience} />

      {/* FAQ Section */}
      <FAQSection title={xerfData.faq.title} faqs={xerfData.faq.items} />

      {/* Related Posts (페이지별 다름) */}
      <RelatedPosts posts={xerfData.relatedPosts} />

      {/* Why Choose Us (공통) */}
      <WhyChooseUs reasons={commonProcedureData.reasons} />

      {/* Reservation CTA (공통) */}
      <ReservationCTA />
    </div>
  );
}
