'use client';

import { motion } from 'motion/react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
import { hiloWaveData } from '@/data/procedures/hilo-wave';
import { commonProcedureData } from '@/data/procedures/common';

export default function HiloWavePageContent() {
  return (
    <div className="bg-background min-h-screen font-sans text-foreground w-full">
      {/* Hero Section */}
      <HeroSection image={hiloWaveData.hero.image} alt={hiloWaveData.hero.alt} title={hiloWaveData.info.displayTitle} />

      {/* Procedure Info Section */}
      <ProcedureInfoSection {...hiloWaveData.info} />

      {/* Before & After Section */}
      <BeforeAfterSection {...hiloWaveData.beforeAfter} />

      {/* Key Benefits (힐로웨이브 고유 컨텐츠) */}
      <section className="py-16 md:py-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10 md:mb-16">
            <SectionHeading>힐로웨이브 효과</SectionHeading>
          </div>

          <div className="space-y-16 md:space-y-20">
            {/* POINT 01 */}
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
                    힐로웨이브
                  </motion.span>
                  란,
                </h3>
              </div>
              <div>
                <div className="rounded-2xl overflow-hidden shadow-sm border border-[#e9e5e0] mb-6 md:mb-8">
                  <ImageWithFallback
                    src={hiloWaveData.images.hiloWave3}
                    alt="힐로웨이브 제품 컨셉 이미지"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl">
                  {hiloWaveData.effects[0].content.map((text, idx) => (
                    <p
                      key={idx}
                      className={`text-[#483C32] text-base md:text-lg leading-relaxed ${
                        idx < hiloWaveData.effects[0].content.length - 1 ? 'mb-4' : ''
                      }`}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* POINT 02 */}
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
                    힐로웨이브와 필러의 차이
                  </motion.span>
                  는 무엇인가요?
                </h3>
                <div className="mt-6 md:mt-8 rounded-2xl overflow-hidden shadow-sm">
                  <ImageWithFallback
                    src={hiloWaveData.chartImage}
                    alt="필러와 힐로웨이브의 물성 비교"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl">
                {hiloWaveData.effects[1].content.map((text, idx) => (
                  <p
                    key={idx}
                    className={`text-[#483C32] text-base md:text-lg leading-relaxed ${
                      idx < hiloWaveData.effects[1].content.length - 1 ? 'mb-4' : ''
                    }`}
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                ))}

                <div className="border rounded-2xl overflow-hidden shadow-sm mt-4 bg-white">
                  <Table className="w-full table-fixed">
                    <TableHeader className="bg-[#f4f0ec]">
                      <TableRow>
                        <TableHead className="w-[26%] border-r border-gray-200 px-1 text-center text-xs md:text-base py-3 md:py-4 md:px-4 text-[#8a7e75]"></TableHead>
                        <TableHead className="w-[37%] px-1 text-center text-xs md:text-base py-3 md:py-4 md:px-4 text-[#483C32] font-extrabold bg-[#e8e2dc] border-l-[3px] border-t-[3px] border-r-[3px] border-[#9A5737]">
                          힐로웨이브
                        </TableHead>
                        <TableHead className="w-[37%] px-1 text-center text-xs md:text-base py-3 md:py-4 md:px-4 text-[#8a7e75]">
                          필러
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        ['효과시기', '즉각적', '즉각적'],
                        ['이물감', '거의 없음', '있을 수 있음'],
                        ['부작용', '거의 없음', '혈관 폐색'],
                        ['부위', '앞광대, 볼, 팔자', '모든 부위'],
                        ['유지기간', '6개월', '1년 전후'],
                      ].map(([label, hilo, filler], idx) => (
                        <TableRow key={idx}>
                          <TableCell className="border-r border-gray-200 px-1 py-3 md:py-4 md:px-4 text-center text-xs md:text-base font-medium text-[#8a7e75] break-keep">
                            {label}
                          </TableCell>
                          <TableCell
                            className={`px-1 py-3 md:py-4 md:px-4 text-center text-xs md:text-base font-extrabold text-[#483C32] bg-[#f4f0ec] break-keep border-l-[3px] border-r-[3px] border-[#9A5737] ${idx === 4 ? 'border-b-[3px]' : ''}`}
                          >
                            {hilo}
                          </TableCell>
                          <TableCell className="px-1 py-3 md:py-4 md:px-4 text-center text-xs md:text-base text-[#8a7e75] break-keep">
                            {filler}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>

            {/* POINT 03 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 03
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  힐로웨이브{' '}
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
                <div className="mt-6 md:mt-8 rounded-2xl overflow-hidden shadow-sm">
                  <ImageWithFallback
                    src={hiloWaveData.treatmentAreasImage}
                    alt="앞볼, 옆볼, 팔자주름 등 힐로웨이브 시술 가능한 부위"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl">
                <p
                  className="text-[#483C32] text-base md:text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: hiloWaveData.effects[2].content[0] }}
                />
              </div>
            </div>

            {/* POINT 04 */}
            <div className="flex flex-col gap-6 md:gap-8 border-t pt-16 md:pt-20">
              <div>
                <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3 pl-2">
                  POINT 04
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep pl-2">
                  힐로웨이브와{' '}
                  <motion.span
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[linear-gradient(to_top,transparent_2px,#a58d7d_2px,#a58d7d_10px,transparent_10px)] box-decoration-clone bg-no-repeat bg-left-bottom"
                  >
                    쥬베룩볼륨, 스컬트라, 올리디아는 어떻게 다른가요?
                  </motion.span>
                </h3>
                <div className="mt-6 md:mt-8 rounded-2xl overflow-hidden shadow-sm">
                  <ImageWithFallback
                    src={hiloWaveData.productComparisonImage}
                    alt="힐로웨이브와 스컬트라, 올리디아, 쥬베룩볼륨 비교"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl">
                <p
                  className="text-[#483C32] text-base md:text-lg leading-relaxed mb-6 md:mb-8"
                  dangerouslySetInnerHTML={{ __html: hiloWaveData.effects[3].content[0] }}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-[#e9e5e0] p-5 md:p-6 rounded-2xl border border-[#dcd8d4] flex flex-col justify-center">
                    <p className="font-bold text-[#483C32] text-base md:text-lg mb-2">힐로웨이브</p>
                    <p className="text-[#483C32] text-sm md:text-base font-medium">
                      유지기간이 짧지만,
                      <br />
                      즉각적이고 안전한 시술을 원한다면?
                    </p>
                  </div>
                  <div className="bg-white p-5 md:p-6 rounded-2xl border border-[#dcd8d4] flex flex-col justify-center">
                    <p className="font-bold text-[#483C32] text-base md:text-lg mb-2">
                      쥬베룩볼륨, 스컬트라, 올리디아
                    </p>
                    <p className="text-[#8a7e75] text-sm md:text-base font-medium">
                      오래가는 효과를 원한다면?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <MaintenanceSection
        title={hiloWaveData.maintenance.title}
        content={hiloWaveData.maintenance.content}
      />

      {/* Pricing Section */}
      <PricingSection {...hiloWaveData.pricing} />

      {/* Target Audience Section */}
      <TargetAudienceSection {...hiloWaveData.targetAudience} />

      {/* FAQ Section */}
      <FAQSection title={hiloWaveData.faq.title} faqs={hiloWaveData.faq.items} />

      {/* Related Posts (페이지별 다름) */}
      <RelatedPosts posts={hiloWaveData.relatedPosts} />

      {/* Why Choose Us (공통) */}
      <WhyChooseUs reasons={commonProcedureData.reasons} />

      {/* Reservation CTA (공통) */}
      <ReservationCTA />
    </div>
  );
}
