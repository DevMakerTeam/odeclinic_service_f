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
import { juvelookVolumeData } from '@/data/procedures/juvelook-volume';
import { commonProcedureData } from '@/data/procedures/common';

export default function JuvelookVolumePageContent() {
  return (
    <div className="bg-background min-h-screen font-sans text-foreground w-full">
      {/* Hero Section */}
      <HeroSection image={juvelookVolumeData.hero.image} alt={juvelookVolumeData.hero.alt} />

      {/* Procedure Info Section */}
      <ProcedureInfoSection {...juvelookVolumeData.info} />

      {/* Before & After Section */}
      <BeforeAfterSection {...juvelookVolumeData.beforeAfter} />

      {/* Key Benefits (쥬베룩 고유 컨텐츠) */}
      <section className="py-16 md:py-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10 md:mb-16">
            <SectionHeading>쥬베룩 볼륨 효과</SectionHeading>
          </div>
          
          <div className="space-y-16 md:space-y-20">
            {/* POINT 01 - 자가콜라겐 합성 */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3">
                  POINT 01
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep">
                  <motion.span 
                    initial={{ backgroundSize: "0% 100%" }} 
                    whileInView={{ backgroundSize: "100% 100%" }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 1, ease: "easeOut" }} 
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    자가콜라겐 합성
                  </motion.span>을 통한 자연스러운 볼륨 생성
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8">
                  <p className="text-[#483C32] text-base md:text-lg leading-relaxed">
                    쥬베룩볼륨은 PDLLA라는 인체친화적인 성분을 진피와 피하지방층 사이에 주입하는 시술입니다.<br />
                    PDLLA는 체내에 주입된 뒤 서서히 분해되며{' '}
                    <span className="text-white bg-[#3F342D] px-1">자가콜라겐 합성 및 지방세포 분화, 증식을 유도</span>합니다.
                  </p>
                </div>
                
                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback 
                    src={juvelookVolumeData.specialSections.collagenSynthesis.image} 
                    alt={juvelookVolumeData.specialSections.collagenSynthesis.imageAlt} 
                    className="w-full h-auto object-contain" 
                  />
                </div>
                
                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold mb-1 md:mb-2">
                    {juvelookVolumeData.specialSections.collagenSynthesis.imageCaption}
                  </p>
                  <p className="text-[#8a7e75] text-[10px] md:text-xs leading-relaxed break-keep opacity-80">
                    논문 출처 : {juvelookVolumeData.specialSections.collagenSynthesis.imageSource}
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 02 - 피부 탄력 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3">
                  POINT 02
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep">
                  볼륨 뿐만 아니라,{' '}
                  <motion.span 
                    initial={{ backgroundSize: "0% 100%" }} 
                    whileInView={{ backgroundSize: "100% 100%" }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 1, ease: "easeOut" }} 
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    피부 탄력
                  </motion.span>도 좋아진다.
                </h3>
              </div>
              <div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl mb-6 md:mb-8">
                  <p className="text-[#483C32] text-base md:text-lg leading-relaxed">
                    콜라겐은 단순히 꺼진 공간을 채워주는 것 뿐만 아니라, 피부 (진피층) 자체를 개선합니다.<br />
                    피부 탄력이 개선되며 처짐을 예방해주고, 주름과 피부결도 좋아집니다.
                  </p>
                </div>
                
                <div className="rounded-2xl overflow-hidden mb-4 shadow-sm border border-[#e9e5e0]">
                  <ImageWithFallback 
                    src={juvelookVolumeData.specialSections.skinElasticity.image} 
                    alt={juvelookVolumeData.specialSections.skinElasticity.imageAlt} 
                    className="w-full h-auto object-contain" 
                  />
                </div>
                
                <div className="text-center">
                  <p className="text-[#483C32] text-sm md:text-base font-bold mb-1 md:mb-2">
                    {juvelookVolumeData.specialSections.skinElasticity.imageCaption}
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 03 - 결절 예방 3원칙 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3">
                  POINT 03
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep">
                  <motion.span 
                    initial={{ backgroundSize: "0% 100%" }} 
                    whileInView={{ backgroundSize: "100% 100%" }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 1, ease: "easeOut" }} 
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    결절 부작용 예방
                  </motion.span>을 위한 3가지 원칙
                </h3>
              </div>
              
              <div className="space-y-12">
                {juvelookVolumeData.specialSections.nodulePrevention.principles.map((principle, idx) => (
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
                    <div className="rounded-2xl overflow-hidden shadow-sm border border-[#e9e5e0]">
                      <ImageWithFallback 
                        src={principle.image} 
                        alt={principle.imageAlt} 
                        className="w-full h-auto object-cover" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* POINT 04 - 시술 가능 부위 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3">
                  POINT 04
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep">
                  쥬베룩볼륨{' '}
                  <motion.span 
                    initial={{ backgroundSize: "0% 100%" }} 
                    whileInView={{ backgroundSize: "100% 100%" }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 1, ease: "easeOut" }} 
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    시술 가능한 부위
                  </motion.span>는 어디인가요?
                </h3>
              </div>
              
              <div>
                <div className="rounded-2xl overflow-hidden shadow-sm border border-[#e9e5e0] mb-4">
                  <ImageWithFallback 
                    src={juvelookVolumeData.images.treatmentAreas} 
                    alt={juvelookVolumeData.specialSections.treatmentAreas.imageAlt} 
                    className="w-full object-cover" 
                  />
                </div>

                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl">
                  <p className="text-[#483C32] text-base md:text-lg leading-relaxed">
                    쥬베룩볼륨은 콜라겐 합성 촉진제로,{' '}
                    <span className="text-white bg-[#3F342D] px-1">
                      넓게 꺼진 볼, 앞광대 (중안부), 팔자주름 볼륨
                    </span>을 채우기에 좋습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <MaintenanceSection
        title={juvelookVolumeData.maintenance.title}
        content={juvelookVolumeData.maintenance.content}
      />

      {/* Pricing Section */}
      <PricingSection {...juvelookVolumeData.pricing} />

      {/* Target Audience Section */}
      <TargetAudienceSection {...juvelookVolumeData.targetAudience} />

      {/* FAQ Section */}
      <FAQSection title={juvelookVolumeData.faq.title} faqs={juvelookVolumeData.faq.items} />

      {/* Related Posts (페이지별 다름) */}
      <RelatedPosts posts={juvelookVolumeData.relatedPosts} />

      {/* Why Choose Us (공통) */}
      <WhyChooseUs reasons={commonProcedureData.reasons} />

      {/* Reservation CTA (공통) */}
      <ReservationCTA />
    </div>
  );
}
