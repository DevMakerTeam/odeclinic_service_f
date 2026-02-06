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
import { thermageData } from '@/data/procedures/thermage';
import { commonProcedureData } from '@/data/procedures/common';

export default function ThermagePageContent() {
  return (
    <div className="bg-background min-h-screen font-sans text-foreground w-full">
      {/* Hero Section */}
      <HeroSection image={thermageData.hero.image} alt={thermageData.hero.alt} />

      {/* Procedure Info Section */}
      <ProcedureInfoSection {...thermageData.info} />

      {/* Before & After Section */}
      <BeforeAfterSection {...thermageData.beforeAfter} />

      {/* Key Benefits (써마지 고유 컨텐츠) */}
      <section className="py-16 md:py-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10 md:mb-16">
            <SectionHeading>써마지 효과</SectionHeading>
          </div>

          <div className="space-y-16 md:space-y-20">
            {/* POINT 01 - 콜라겐 리모델링 */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 01
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  진피 내 콜라겐 리모델링을 통한{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    탄력 개선과 처짐 예방
                  </motion.span>
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8 space-y-4">
                  {thermageData.specialSections.collagenRemodeling.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[#483C32] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={thermageData.images.mechanism}
                    alt={thermageData.specialSections.collagenRemodeling.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold mb-2">
                    {thermageData.specialSections.collagenRemodeling.imageCaption}
                  </p>
                  {thermageData.specialSections.collagenRemodeling.reference && (
                    <p className="text-[#8a7e75] text-xs md:text-sm leading-relaxed break-keep opacity-80">
                      관련 연구 :{' '}
                      <a
                        href={thermageData.specialSections.collagenRemodeling.reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a58d7d] hover:underline"
                      >
                        {thermageData.specialSections.collagenRemodeling.reference.text}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* POINT 02 - 효과가 없다고 느끼는 이유 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 02
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  써마지{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    효과가 없다고 느끼는 이유
                  </motion.span>
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8">
                  <p className="text-[#483C32] text-base md:text-lg leading-relaxed">
                    {thermageData.specialSections.effectPerception.intro}
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden mb-8 md:mb-12 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={thermageData.images.effectPerception1}
                    alt={thermageData.specialSections.effectPerception.image1Alt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="space-y-8 md:space-y-10">
                  {thermageData.specialSections.effectPerception.reasons.map((reason, idx) => (
                    <div key={idx} className="flex flex-col gap-4">
                      <h4 className="text-lg md:text-xl font-bold text-[#483C32] pl-2">
                        {reason.number}{' '}
                        <motion.span
                          initial={{ backgroundSize: '0% 100%' }}
                          whileInView={{ backgroundSize: '100% 100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                          className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                        >
                          {reason.title}
                        </motion.span>
                      </h4>
                      <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl">
                        <p
                          className="text-[#483C32] text-base md:text-lg leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: reason.description }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mt-8 md:mt-12 mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={thermageData.images.effectPerception2}
                    alt={thermageData.specialSections.effectPerception.image2Alt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold">
                    {thermageData.specialSections.effectPerception.image2Caption}
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
                  써마지{' '}
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
                  {thermageData.specialSections.painReduction.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[#483C32] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={thermageData.images.airnox}
                    alt={thermageData.specialSections.painReduction.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold">
                    {thermageData.specialSections.painReduction.imageCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <MaintenanceSection
        title={thermageData.maintenance.title}
        content={thermageData.maintenance.content}
      />

      {/* Pricing Section */}
      <PricingSection {...thermageData.pricing} />

      {/* Target Audience Section */}
      <TargetAudienceSection {...thermageData.targetAudience} />

      {/* FAQ Section */}
      <FAQSection title={thermageData.faq.title} faqs={thermageData.faq.items} />

      {/* Related Posts (페이지별 다름) */}
      <RelatedPosts posts={thermageData.relatedPosts} />

      {/* Why Choose Us (공통) */}
      <WhyChooseUs reasons={commonProcedureData.reasons} />

      {/* Reservation CTA (공통) */}
      <ReservationCTA />
    </div>
  );
}
