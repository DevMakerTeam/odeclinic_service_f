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
import { olidiaData } from '@/data/procedures/olidia';
import { commonProcedureData } from '@/data/procedures/common';

export default function OlidiaPageContent() {
  return (
    <div className="bg-background min-h-screen font-sans text-foreground w-full">
      {/* Hero Section */}
      <HeroSection image={olidiaData.hero.image} alt={olidiaData.hero.alt} title={olidiaData.info.displayTitle} />

      {/* Procedure Info Section */}
      <ProcedureInfoSection {...olidiaData.info} />

      {/* Before & After Section */}
      <BeforeAfterSection {...olidiaData.beforeAfter} />

      {/* Key Benefits (올리디아 고유 컨텐츠) */}
      <section className="py-16 md:py-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10 md:mb-16">
            <SectionHeading>올리디아 효과</SectionHeading>
          </div>

          <div className="space-y-16 md:space-y-20">
            {/* POINT 01 - 구형 PLLA */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 01
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  안전성과 효과를 모두 잡은{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    구형 PLLA
                  </motion.span>
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8">
                  {olidiaData.specialSections.sphericalPLLA.content.map((text, idx) => (
                    <p
                      key={idx}
                      className={`text-[#483C32] text-base md:text-lg leading-relaxed ${
                        idx < olidiaData.specialSections.sphericalPLLA.content.length - 1 ? 'mb-4' : ''
                      }`}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={olidiaData.images.particle}
                    alt={olidiaData.specialSections.sphericalPLLA.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#8a7e75] text-xs md:text-sm leading-relaxed break-keep opacity-80">
                    출처 :{' '}
                    <a
                      href={olidiaData.specialSections.sphericalPLLA.imageSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a58d7d] hover:underline"
                    >
                      {olidiaData.specialSections.sphericalPLLA.imageSource}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 02 - 피부 탄력 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 02
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  볼륨 뿐만 아니라,{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    피부 탄력도
                  </motion.span>{' '}
                  좋아진다.
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8">
                  <p className="text-[#483C32] text-base md:text-lg leading-relaxed">
                    콜라겐은 단순히 꺼진 공간을 채워주는 것 뿐만 아니라, 피부 (진피층) 자체를 개선합니다.
                    <br />
                    피부 탄력이 개선되며 처짐을 예방해주고, 주름과 피부결도 좋아집니다.
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={olidiaData.images.collagenChart}
                    alt={olidiaData.specialSections.skinElasticity.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold mb-1 md:mb-2">
                    {olidiaData.specialSections.skinElasticity.imageCaption}
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 03 - 결절 예방 3원칙 */}
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
                    결절 부작용 예방
                  </motion.span>
                  을 위한 3가지 원칙
                </h3>
              </div>

              <div className="space-y-12">
                {olidiaData.specialSections.nodulePrevention.principles.map((principle, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-[#483C32] mb-3">
                        {principle.number} {principle.title}
                      </h4>
                      <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-4">
                        <p
                          className="text-[#483C32] text-base md:text-lg leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: principle.description }}
                        />
                      </div>
                    </div>
                    {principle.image && (
                      <div className="rounded-2xl overflow-hidden shadow-sm border border-[#e9e5e0]">
                        <ImageWithFallback
                          src={principle.image}
                          alt={principle.imageAlt || ''}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* POINT 04 - 시술 가능 부위 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 04
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  올리디아{' '}
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
                    src={olidiaData.images.treatmentAreas}
                    alt={olidiaData.specialSections.treatmentAreas.imageAlt}
                    className="w-full object-cover"
                  />
                </div>

                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl">
                  <p
                    className="text-[#483C32] text-base md:text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: olidiaData.specialSections.treatmentAreas.content[0],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <MaintenanceSection title={olidiaData.maintenance.title} content={olidiaData.maintenance.content} />

      {/* Pricing Section */}
      <PricingSection {...olidiaData.pricing} />

      {/* Target Audience Section */}
      <TargetAudienceSection {...olidiaData.targetAudience} />

      {/* FAQ Section */}
      <FAQSection title={olidiaData.faq.title} faqs={olidiaData.faq.items} />

      {/* Related Posts (페이지별 다름) */}
      <RelatedPosts posts={olidiaData.relatedPosts} />

      {/* Why Choose Us (공통) */}
      <WhyChooseUs reasons={commonProcedureData.reasons} />

      {/* Reservation CTA (공통) */}
      <ReservationCTA />
    </div>
  );
}
