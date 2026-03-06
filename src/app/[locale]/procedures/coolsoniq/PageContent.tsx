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
import { coolsoniqData } from '@/data/procedures/coolsoniq';
import { commonProcedureData } from '@/data/procedures/common';

export default function CoolsoniqPageContent() {
  const { effects } = coolsoniqData;

  return (
    <div className="bg-background min-h-screen font-sans text-foreground w-full">
      {/* Hero Section */}
      <HeroSection
        image={coolsoniqData.hero.image}
        alt={coolsoniqData.hero.alt}
        title={coolsoniqData.info.displayTitle}
      />

      {/* Procedure Info Section */}
      <ProcedureInfoSection {...coolsoniqData.info} />

      {/* Before & After Section */}
      <BeforeAfterSection {...coolsoniqData.beforeAfter} />

      {/* Key Benefits */}
      <section className="py-16 md:py-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10 md:mb-16">
            <SectionHeading>쿨소닉 효과</SectionHeading>
          </div>

          <div className="space-y-16 md:space-y-20">
            {/* POINT 01 - 표피 냉각 시스템 통증 최소화 */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 01
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  표피 냉각 시스템을 통한{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    통증 최소화
                  </motion.span>
                </h3>
              </div>

              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8 space-y-4">
                  {effects.painMinimization.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[#483C32] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={effects.painMinimization.image}
                    alt={effects.painMinimization.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center mt-3">
                  <p className="text-[#483C32] text-sm md:text-base font-bold mb-1">
                    {effects.painMinimization.imageCaption}
                  </p>
                  <p className="text-[#8a7e75] text-xs md:text-sm opacity-80">
                    출처 :{' '}
                    <a
                      href={effects.painMinimization.reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a58d7d] hover:underline"
                    >
                      {effects.painMinimization.reference.text}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 02 - 펜타입 어플리케이터 */}
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
                    펜타입 어플리케이터
                  </motion.span>
                  로 구석구석 확실하게
                </h3>
              </div>

              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8 space-y-4">
                  {effects.penApplicator.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[#483C32] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={effects.penApplicator.image}
                    alt={effects.penApplicator.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center mt-3">
                  <p className="text-[#483C32] text-sm md:text-base font-bold">
                    {effects.penApplicator.imageCaption}
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 03 - 효과 좋은 부위 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 03
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  쿨소닉 효과 좋은 부위
                </h3>
              </div>

              <div>
                <div className="rounded-2xl overflow-hidden shadow-sm border border-[#e9e5e0] mb-6 md:mb-8">
                  <ImageWithFallback
                    src={effects.effectiveAreas.image}
                    alt={effects.effectiveAreas.imageAlt}
                    className="w-full object-cover"
                  />
                </div>

                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl">
                  <p
                    className="text-[#483C32] text-base md:text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: effects.effectiveAreas.content[0] }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <MaintenanceSection
        title={coolsoniqData.maintenance.title}
        content={coolsoniqData.maintenance.content}
      />

      {/* Pricing Section */}
      <PricingSection {...coolsoniqData.pricing} />

      {/* Target Audience Section */}
      <TargetAudienceSection {...coolsoniqData.targetAudience} />

      {/* FAQ Section */}
      <FAQSection title={coolsoniqData.faq.title} faqs={coolsoniqData.faq.items} />

      {/* Related Posts */}
      <RelatedPosts posts={coolsoniqData.relatedPosts} />

      {/* Why Choose Us (공통) */}
      <WhyChooseUs reasons={commonProcedureData.reasons} />

      {/* Reservation CTA (공통) */}
      <ReservationCTA />
    </div>
  );
}
