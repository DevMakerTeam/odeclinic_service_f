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
import { radiesseData } from '@/data/procedures/radiesse';
import { commonProcedureData } from '@/data/procedures/common';

export default function RadiessePageContent() {
  return (
    <div className="bg-background min-h-screen font-sans text-foreground w-full">
      {/* Hero Section */}
      <HeroSection image={radiesseData.hero.image} alt={radiesseData.hero.alt} title={radiesseData.info.displayTitle} />

      {/* Procedure Info Section */}
      <ProcedureInfoSection {...radiesseData.info} />

      {/* Before & After Section */}
      <BeforeAfterSection {...radiesseData.beforeAfter} />

      {/* Key Benefits (레디어스 고유 컨텐츠) */}
      <section className="py-16 md:py-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10 md:mb-16">
            <SectionHeading>레디어스 효과</SectionHeading>
          </div>

          <div className="space-y-16 md:space-y-20">
            {/* POINT 01 - CaHA 콜라겐 합성 */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 01
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  CaHA의{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    콜라겐 및 엘라스틴
                  </motion.span>{' '}
                  생성 유도
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8">
                  {radiesseData.specialSections.cahaCollagen.content.map((text, idx) => (
                    <p
                      key={idx}
                      className={`text-[#483C32] text-base md:text-lg leading-relaxed ${
                        idx < radiesseData.specialSections.cahaCollagen.content.length - 1 ? 'mb-4' : ''
                      }`}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={radiesseData.images.radiesse1}
                    alt={radiesseData.specialSections.cahaCollagen.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#8a7e75] text-xs md:text-sm leading-relaxed break-keep opacity-80">
                    출처 :{' '}
                    <a
                      href={radiesseData.specialSections.cahaCollagen.imageSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a58d7d] hover:underline"
                    >
                      {radiesseData.specialSections.cahaCollagen.imageSource}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 02 - 겔 매트릭스 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 02
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  겔 매트릭스가{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    콜라겐이 차오를 공간을 확보
                  </motion.span>
                  해준다.
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8">
                  {radiesseData.specialSections.gelMatrix.content.map((text, idx) => (
                    <p
                      key={idx}
                      className={`text-[#483C32] text-base md:text-lg leading-relaxed ${
                        idx < radiesseData.specialSections.gelMatrix.content.length - 1 ? 'mb-4' : ''
                      }`}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={radiesseData.images.radiesse2}
                    alt={radiesseData.specialSections.gelMatrix.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#8a7e75] text-xs md:text-sm leading-relaxed break-keep opacity-80">
                    관련 논문 출처 :{' '}
                    <a
                      href={radiesseData.specialSections.gelMatrix.imageSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a58d7d] hover:underline"
                    >
                      {radiesseData.specialSections.gelMatrix.imageSourceText}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 03 - 희석 비율 */}
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
                    희석 비율
                  </motion.span>
                  에 따라 효과가 달라진다.
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8">
                  {radiesseData.specialSections.dilutionRatio.content.map((text, idx) => (
                    <p
                      key={idx}
                      className={`text-[#483C32] text-base md:text-lg leading-relaxed ${
                        idx < radiesseData.specialSections.dilutionRatio.content.length - 1 ? 'mb-4' : ''
                      }`}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={radiesseData.images.radiesse3}
                    alt={radiesseData.specialSections.dilutionRatio.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold mb-1 md:mb-2">
                    {radiesseData.specialSections.dilutionRatio.imageCaption}
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 04 - 시술 가능 부위 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 04
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  레디어스{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    시술 가능한 부위
                  </motion.span>
                  는 어디인가요?
                </h3>
              </div>

              <div>
                <div className="rounded-2xl overflow-hidden shadow-sm border border-[#e9e5e0] mb-4">
                  <ImageWithFallback
                    src={radiesseData.images.treatmentAreas}
                    alt={radiesseData.specialSections.treatmentAreas.imageAlt}
                    className="w-full object-cover"
                  />
                </div>

                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl">
                  <p
                    className="text-[#483C32] text-base md:text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: radiesseData.specialSections.treatmentAreas.content[0],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <MaintenanceSection title={radiesseData.maintenance.title} content={radiesseData.maintenance.content} />

      {/* Pricing Section */}
      <PricingSection {...radiesseData.pricing} />

      {/* Target Audience Section */}
      <TargetAudienceSection {...radiesseData.targetAudience} />

      {/* FAQ Section */}
      <FAQSection title={radiesseData.faq.title} faqs={radiesseData.faq.items} />

      {/* Related Posts (페이지별 다름) */}
      <RelatedPosts posts={radiesseData.relatedPosts} />

      {/* Why Choose Us (공통) */}
      <WhyChooseUs reasons={commonProcedureData.reasons} />

      {/* Reservation CTA (공통) */}
      <ReservationCTA />
    </div>
  );
}
