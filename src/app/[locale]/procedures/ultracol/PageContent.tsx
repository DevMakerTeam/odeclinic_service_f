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
import { ultracolData } from '@/data/procedures/ultracol';
import { commonProcedureData } from '@/data/procedures/common';

export default function UltracolPageContent() {
  return (
    <div className="bg-background min-h-screen font-sans text-foreground w-full">
      {/* Hero Section */}
      <HeroSection image={ultracolData.hero.image} alt={ultracolData.hero.alt} title={ultracolData.info.displayTitle} />

      {/* Procedure Info Section */}
      <ProcedureInfoSection {...ultracolData.info} />

      {/* Before & After Section */}
      <BeforeAfterSection {...ultracolData.beforeAfter} />

      {/* Key Benefits (울트라콜 고유 컨텐츠) */}
      <section className="py-16 md:py-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10 md:mb-16">
            <SectionHeading>울트라콜 200 효과</SectionHeading>
          </div>

          <div className="space-y-16 md:space-y-20">
            {/* POINT 01 - PDO 성분 */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 01
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  쉽게 분해되는{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    미세구형 PDO
                  </motion.span>{' '}
                  성분
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8">
                  {ultracolData.specialSections.pdoComponent.content.map((text, idx) => (
                    <p
                      key={idx}
                      className={`text-[#483C32] text-base md:text-lg leading-relaxed ${
                        idx < ultracolData.specialSections.pdoComponent.content.length - 1 ? 'mb-4' : ''
                      }`}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={ultracolData.images.ultracol1}
                    alt={ultracolData.specialSections.pdoComponent.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#8a7e75] text-xs md:text-sm leading-relaxed break-keep opacity-80">
                    관련 논문 :{' '}
                    <a
                      href={ultracolData.specialSections.pdoComponent.imageSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a58d7d] hover:underline"
                    >
                      {ultracolData.specialSections.pdoComponent.imageSourceText}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 02 - 눈밑 시술 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 02
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  피부가 얇은{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    눈밑에도 시술이 가능
                  </motion.span>
                  하다.
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8">
                  {ultracolData.specialSections.underEyeTreatment.content.map((text, idx) => (
                    <p
                      key={idx}
                      className={`text-[#483C32] text-base md:text-lg leading-relaxed ${
                        idx < ultracolData.specialSections.underEyeTreatment.content.length - 1 ? 'mb-4' : ''
                      }`}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={ultracolData.images.ultracolPart}
                    alt={ultracolData.specialSections.underEyeTreatment.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* POINT 03 - 캐뉼라 테크닉 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 03
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  결절 부작용을 최소화하는{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    캐뉼라 테크닉
                  </motion.span>
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8">
                  {ultracolData.specialSections.cannulaTechnique.content.map((text, idx) => (
                    <p
                      key={idx}
                      className={`text-[#483C32] text-base md:text-lg leading-relaxed ${
                        idx < ultracolData.specialSections.cannulaTechnique.content.length - 1 ? 'mb-4' : ''
                      }`}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback
                    src={ultracolData.images.cannulaAward}
                    alt={ultracolData.specialSections.cannulaTechnique.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold mb-1 md:mb-2">
                    {ultracolData.specialSections.cannulaTechnique.imageCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <MaintenanceSection title={ultracolData.maintenance.title} content={ultracolData.maintenance.content} />

      {/* Pricing Section */}
      <PricingSection {...ultracolData.pricing} />

      {/* Target Audience Section */}
      <TargetAudienceSection {...ultracolData.targetAudience} />

      {/* FAQ Section */}
      <FAQSection title={ultracolData.faq.title} faqs={ultracolData.faq.items} />

      {/* Related Posts (페이지별 다름) */}
      <RelatedPosts posts={ultracolData.relatedPosts} />

      {/* Why Choose Us (공통) */}
      <WhyChooseUs reasons={commonProcedureData.reasons} />

      {/* Reservation CTA (공통) */}
      <ReservationCTA />
    </div>
  );
}
