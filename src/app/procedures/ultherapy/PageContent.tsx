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
import { ultherapyData } from '@/data/procedures/ultherapy';
import { commonProcedureData } from '@/data/procedures/common';

export default function UltherapyPageContent() {
  return (
    <div className="bg-background min-h-screen font-sans text-foreground w-full">
      {/* Hero Section */}
      <HeroSection image={ultherapyData.hero.image} alt={ultherapyData.hero.alt} />

      {/* Procedure Info Section */}
      <ProcedureInfoSection {...ultherapyData.info} />

      {/* Before & After Section */}
      <BeforeAfterSection {...ultherapyData.beforeAfter} />

      {/* Key Benefits (울쎄라 고유 컨텐츠) */}
      <section className="py-16 md:py-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10 md:mb-16">
            <SectionHeading>울쎄라 효과</SectionHeading>
          </div>

          <div className="space-y-16 md:space-y-20">
            {/* POINT 01 - SMAS층 리프팅 */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 01
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  깊은 SMAS층까지 열 응고점을 만들어서{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    즉각적인 수축을 유도
                  </motion.span>
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8 space-y-4">
                  {ultherapyData.specialSections.smasLayer.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[#483C32] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={ultherapyData.images.ultheraThermage}
                    alt={ultherapyData.specialSections.smasLayer.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold mb-2">
                    {ultherapyData.specialSections.smasLayer.imageCaption}
                  </p>
                  {ultherapyData.specialSections.smasLayer.reference && (
                    <p className="text-[#8a7e75] text-xs md:text-sm leading-relaxed break-keep opacity-80">
                      관련 연구 :{' '}
                      <a
                        href={ultherapyData.specialSections.smasLayer.reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a58d7d] hover:underline"
                      >
                        {ultherapyData.specialSections.smasLayer.reference.text}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* POINT 02 - 얼굴에 살이 없어도 */}
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
                    얼굴에 살이 없어도
                  </motion.span>{' '}
                  울쎄라가 필요할 수 있다
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8 space-y-4">
                  {ultherapyData.specialSections.thinFace.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[#483C32] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-6 md:mb-8 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={ultherapyData.images.thinFace1}
                    alt={ultherapyData.specialSections.thinFace.image1Alt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8">
                  <p className="text-[#483C32] text-base md:text-lg font-bold mb-4">
                    {ultherapyData.specialSections.thinFace.question}
                  </p>
                  <p
                    className="text-[#483C32] text-base md:text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: ultherapyData.specialSections.thinFace.answer,
                    }}
                  />
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={ultherapyData.images.thinFace2}
                    alt={ultherapyData.specialSections.thinFace.image2Alt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base">
                    {ultherapyData.specialSections.thinFace.image2Caption}
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 03 - 통증 최소화 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 03
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  울쎄라{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    통증을 최소화하는 방법
                  </motion.span>
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8 space-y-4">
                  {ultherapyData.specialSections.painReduction.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[#483C32] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={ultherapyData.images.airnox}
                    alt={ultherapyData.specialSections.painReduction.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold">
                    {ultherapyData.specialSections.painReduction.imageCaption}
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 04 - 효과 좋은 부위 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 04
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  울쎄라 효과 좋은 부위
                </h3>
              </div>

              <div>
                <div className="rounded-2xl overflow-hidden shadow-sm border border-[#e9e5e0] mb-6 md:mb-8">
                  <ImageWithFallback
                    src={ultherapyData.images.treatmentAreas}
                    alt={ultherapyData.specialSections.effectiveAreas.imageAlt}
                    className="w-full object-cover"
                  />
                </div>

                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl">
                  <p
                    className="text-[#483C32] text-base md:text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: ultherapyData.specialSections.effectiveAreas.content[0],
                    }}
                  />
                </div>

                {ultherapyData.specialSections.effectiveAreas.reference && (
                  <div className="text-center mt-4">
                    <p className="text-[#8a7e75] text-xs md:text-sm leading-relaxed break-keep opacity-80">
                      관련 연구 :{' '}
                      <a
                        href={ultherapyData.specialSections.effectiveAreas.reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a58d7d] hover:underline"
                      >
                        {ultherapyData.specialSections.effectiveAreas.reference.text}
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <MaintenanceSection
        title={ultherapyData.maintenance.title}
        content={ultherapyData.maintenance.content}
      />

      {/* Pricing Section */}
      <PricingSection {...ultherapyData.pricing} />

      {/* Target Audience Section */}
      <TargetAudienceSection {...ultherapyData.targetAudience} />

      {/* FAQ Section */}
      <FAQSection title={ultherapyData.faq.title} faqs={ultherapyData.faq.items} />

      {/* Related Posts (페이지별 다름) */}
      <RelatedPosts posts={ultherapyData.relatedPosts} />

      {/* Why Choose Us (공통) */}
      <WhyChooseUs reasons={commonProcedureData.reasons} />

      {/* Reservation CTA (공통) */}
      <ReservationCTA />
    </div>
  );
}
