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
import { emfaceData } from '@/data/procedures/emface';
import { commonProcedureData } from '@/data/procedures/common';

const underlineClass =
  'bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom';

export default function EmfacePageContent() {
  return (
    <div className="bg-background min-h-screen font-sans text-foreground w-full">
      {/* Hero Section */}
      <HeroSection
        image={emfaceData.hero.image}
        alt={emfaceData.hero.alt}
        title={emfaceData.info.displayTitle}
      />

      {/* Procedure Info Section */}
      <ProcedureInfoSection {...emfaceData.info} />

      {/* Before & After Section */}
      <BeforeAfterSection {...emfaceData.beforeAfter} />

      {/* Key Benefits */}
      <section className="py-16 md:py-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10 md:mb-16">
            <SectionHeading>엠페이스 효과</SectionHeading>
          </div>

          <div className="space-y-16 md:space-y-20">
            {/* POINT 01 - 근육 탄성 회복 */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 01
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  근육 탄성 회복을 통한{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={underlineClass}
                  >
                    중안부 리프팅
                  </motion.span>
                </h3>
              </div>

              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8 space-y-4">
                  {emfaceData.specialSections.muscleLifting.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[#483C32] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={emfaceData.images.point1}
                    alt={emfaceData.specialSections.muscleLifting.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold mb-2">
                    {emfaceData.specialSections.muscleLifting.imageCaption}
                  </p>
                  <p className="text-[#8a7e75] text-xs md:text-sm leading-relaxed break-keep opacity-80">
                    관련 연구 :{' '}
                    <a
                      href={emfaceData.specialSections.muscleLifting.reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a58d7d] hover:underline"
                    >
                      {emfaceData.specialSections.muscleLifting.reference.text}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 02 - 통증·다운타임 없음 */}
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
                    className={underlineClass}
                  >
                    통증과 다운타임 걱정 없이
                  </motion.span>{' '}
                  편안한 리프팅
                </h3>
              </div>

              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8 space-y-4">
                  {emfaceData.specialSections.noDowntime.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[#483C32] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={emfaceData.images.point2}
                    alt={emfaceData.specialSections.noDowntime.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold">
                    {emfaceData.specialSections.noDowntime.imageCaption}
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 03 - RF 콜라겐 리모델링 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 03
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  고주파 (RF) 에너지를 통한{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={underlineClass}
                  >
                    주름 개선 및 타이트닝까지
                  </motion.span>
                </h3>
              </div>

              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8 space-y-4">
                  {emfaceData.specialSections.collagenRF.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[#483C32] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={emfaceData.images.point3}
                    alt={emfaceData.specialSections.collagenRF.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold mb-2">
                    {emfaceData.specialSections.collagenRF.imageCaption}
                  </p>
                  <p className="text-[#8a7e75] text-xs md:text-sm leading-relaxed break-keep opacity-80">
                    관련 연구 :{' '}
                    <a
                      href={emfaceData.specialSections.collagenRF.reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a58d7d] hover:underline"
                    >
                      {emfaceData.specialSections.collagenRF.reference.text}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <MaintenanceSection
        title={emfaceData.maintenance.title}
        content={emfaceData.maintenance.content}
      />

      {/* Pricing Section */}
      <PricingSection {...emfaceData.pricing} />

      {/* Target Audience Section */}
      <TargetAudienceSection {...emfaceData.targetAudience} />

      {/* FAQ Section */}
      <FAQSection title={emfaceData.faq.title} faqs={emfaceData.faq.items} />

      {/* Related Posts */}
      <RelatedPosts posts={emfaceData.relatedPosts} />

      {/* Why Choose Us (공통) */}
      <WhyChooseUs reasons={commonProcedureData.reasons} />

      {/* Reservation CTA (공통) */}
      <ReservationCTA />
    </div>
  );
}
