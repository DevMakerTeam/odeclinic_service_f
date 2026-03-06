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
import { densityAlphaData } from '@/data/procedures/density-alpha';
import { commonProcedureData } from '@/data/procedures/common';

export default function DensityAlphaPageContent() {
  return (
    <div className="bg-background min-h-screen font-sans text-foreground w-full">
      {/* Hero Section */}
      <HeroSection image={densityAlphaData.hero.image} alt={densityAlphaData.hero.alt} title={densityAlphaData.info.displayTitle} />

      {/* Procedure Info Section */}
      <ProcedureInfoSection {...densityAlphaData.info} />

      {/* Before & After Section */}
      <BeforeAfterSection {...densityAlphaData.beforeAfter} />

      {/* Key Benefits (덴서티 알파 고유 컨텐츠) */}
      <section className="py-16 md:py-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10 md:mb-16">
            <SectionHeading>덴서티 알파 효과</SectionHeading>
          </div>

          <div className="space-y-16 md:space-y-20">
            {/* POINT 01 - 바이폴라 + 모노폴라 */}
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
                    바이폴라 + 모노폴라
                  </motion.span>{' '}
                  고주파를 이용한 촘촘한 타이트닝
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8 space-y-4">
                  {densityAlphaData.specialSections.bipolarMonopolar.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[#483C32] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={densityAlphaData.images.point1}
                    alt={densityAlphaData.specialSections.bipolarMonopolar.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold">
                    {densityAlphaData.specialSections.bipolarMonopolar.imageCaption}
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 02 - 더 커진 전극 사이즈 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 02
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  더 커진 전극 사이즈로,{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    더 많은 에너지를 전달
                  </motion.span>
                  하는 덴서티 알파
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8 space-y-4">
                  {densityAlphaData.specialSections.largerElectrode.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[#483C32] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={densityAlphaData.images.point2}
                    alt={densityAlphaData.specialSections.largerElectrode.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold">
                    {densityAlphaData.specialSections.largerElectrode.imageCaption}
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 03 - 최소화된 다운타임 */}
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
                    시술 시간, 통증, 다운타임을 최소화한
                  </motion.span>{' '}
                  편안한 안티에이징
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8 space-y-4">
                  {densityAlphaData.specialSections.minimalDowntime.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[#483C32] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={densityAlphaData.images.point3}
                    alt={densityAlphaData.specialSections.minimalDowntime.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold">
                    {densityAlphaData.specialSections.minimalDowntime.imageCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <MaintenanceSection
        title={densityAlphaData.maintenance.title}
        content={densityAlphaData.maintenance.content}
      />

      {/* Pricing Section */}
      <PricingSection {...densityAlphaData.pricing} />

      {/* Target Audience Section */}
      <TargetAudienceSection {...densityAlphaData.targetAudience} />

      {/* FAQ Section */}
      <FAQSection title={densityAlphaData.faq.title} faqs={densityAlphaData.faq.items} />

      {/* Related Posts (페이지별 다름) */}
      <RelatedPosts posts={densityAlphaData.relatedPosts} />

      {/* Why Choose Us (공통) */}
      <WhyChooseUs reasons={commonProcedureData.reasons} />

      {/* Reservation CTA (공통) */}
      <ReservationCTA />
    </div>
  );
}
