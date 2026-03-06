'use client';

import { User } from 'lucide-react';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';
import { useDoctorList } from '@/hooks/useDoctors';
import type { DoctorScheduleDto } from '@/api/generated';

const dayNames = ['월', '화', '수', '목', '금', '토', '일'];
const dayKeys: (keyof DoctorScheduleDto)[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const philosophyItems = [
  {
    image: '/about/philosophy-1.png',
    alt: '집도의와의 1:1 대면 상담',
    title: '집도의와의 1:1 대면 상담',
    descriptions: [
      '시술에 대해 잘 모르시더라도 집도의와의 상담을 통해 최적의 옵션을 선택할 수 있도록 도와드립니다.',
      '오드의원 의료진은 환자분의 니즈는 물론, 효과 시기와 유지기간, 비용, 부작용까지 다각도로 고려하여 플랜을 제시합니다.',
    ],
  },
  {
    image: '/about/philosophy-2.png',
    alt: '전후 사진 비교 및 경과',
    title: '전후 사진 비교 및 경과',
    descriptions: [
      '의료진이 직접 피부진단기 사진을 통한 객관적인 전후 변화 비교와 경과 상담까지 책임지고 진료합니다.',
    ],
  },
  {
    image: '/about/philosophy-3.png',
    alt: '정품, 정량, 정직한 시술',
    title: '정품, 정량, 정직한 시술',
    descriptions: [
      '환자와의 신뢰를 최우선으로 생각하며, 정품, 정량을 지키고 정직하게 시술할 것을 약속드립니다.',
    ],
  },
];

export default function AboutPage() {
  const { data, isLoading } = useDoctorList();
  const doctors = (data?.items ?? []).slice().sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className="w-full bg-[#fdfbf9] min-h-full">
      <div className="px-5 pt-8 space-y-8">
        {/* 페이지 타이틀 */}
        <div className="text-center space-y-2 pb-2">
          <h2 className="text-[28px] font-black text-black">
            오드의원 <span className="text-[#483C32]">의료진소개</span>
          </h2>
          <p className="text-[12px] text-[#483C32]/50 font-medium leading-relaxed">
            모든 시술 영역에 숙련된 집도의가 직접 상담합니다.
          </p>
        </div>

        {/* 의료진 목록 */}
        <div className="space-y-8">
          {isLoading ? (
            Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-[32px] overflow-hidden border border-[#483C32]/[0.08] shadow-lg animate-pulse"
              >
                <div className="w-full h-[700px] bg-[#483C32]/10" />
                <div className="p-7 space-y-3">
                  <div className="h-4 w-1/3 bg-[#483C32]/10 rounded" />
                  <div className="h-3 w-full bg-[#483C32]/10 rounded" />
                  <div className="h-3 w-2/3 bg-[#483C32]/10 rounded" />
                </div>
              </div>
            ))
          ) : (
            doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-[32px] overflow-hidden border border-[#483C32]/[0.08] shadow-lg"
              >
                {/* 프로필 이미지 with 이름 오버레이 */}
                <div className="relative w-full h-[700px] overflow-hidden">
                  {doctor.photoUrl ? (
                    <ImageWithFallback
                      src={doctor.photoUrl}
                      alt={`${doctor.name} ${doctor.position ?? ''}`}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#483C32]/10 flex items-center justify-center">
                      <User className="w-20 h-20 text-[#483C32]" />
                    </div>
                  )}

                  {/* 하단 그라데이션 이름 오버레이 */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pt-20 pb-6 px-6">
                    <div className="flex items-end gap-3">
                      <h3 className="text-[32px] font-medium text-white leading-none">{doctor.name}</h3>
                      {doctor.position && (
                        <span className="text-[18px] font-medium text-white/90 pb-1">{doctor.position}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* 프로필 정보 */}
                <div className="p-7">
                  {/* 이력 */}
                  {doctor.careers && doctor.careers.length > 0 && (
                    <div className="pb-6 border-b border-[#483C32]/[0.08]">
                      <h4 className="text-[13px] font-black text-[#483C32] mb-4 tracking-wide uppercase">Career</h4>
                      <ul className="space-y-2.5">
                        {doctor.careers.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2.5 text-[14px] text-[#483C32]/70 font-medium leading-relaxed"
                          >
                            <span className="text-[#483C32] mt-[6px] text-[6px]">●</span>
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 진료 스케줄 */}
                  {doctor.schedules && (
                    <div className={doctor.careers && doctor.careers.length > 0 ? 'pt-6' : ''}>
                      <h4 className="text-[13px] font-black text-[#483C32] mb-4 tracking-wide uppercase">Schedule</h4>
                      <div className="bg-white rounded-2xl overflow-hidden border border-[#483C32]/10">
                        {/* 헤더 */}
                        <div className="grid grid-cols-8 bg-[#483C32]">
                          <div className="py-2.5 px-1.5 text-[10px] font-semibold text-white/80" />
                          {dayNames.map((day) => (
                            <div
                              key={day}
                              className="py-2.5 px-1 text-[13px] font-bold text-white text-center border-l border-white/10"
                            >
                              {day}
                            </div>
                          ))}
                        </div>

                        {/* 오전 */}
                        <div className="grid grid-cols-8 bg-white border-b border-[#483C32]/10">
                          <div className="py-4 px-1 text-[10px] font-bold text-[#483C32]/70 flex items-center justify-center bg-[#483C32]/[0.08]">
                            오전
                          </div>
                          {dayKeys.map((dayKey) => (
                            <div
                              key={`am-${dayKey}`}
                              className="py-4 px-1 border-l border-[#483C32]/[0.08] flex items-center justify-center"
                            >
                              {doctor.schedules?.[dayKey]?.am && (
                                <div className="w-2.5 h-2.5 rounded-full bg-[#483C32]" />
                              )}
                            </div>
                          ))}
                        </div>

                        {/* 오후 */}
                        <div className="grid grid-cols-8 bg-white">
                          <div className="py-4 px-1 text-[10px] font-bold text-[#483C32]/70 flex items-center justify-center bg-[#483C32]/[0.08]">
                            오후
                          </div>
                          {dayKeys.map((dayKey) => (
                            <div
                              key={`pm-${dayKey}`}
                              className="py-4 px-1 border-l border-[#483C32]/[0.08] flex items-center justify-center"
                            >
                              {doctor.schedules?.[dayKey]?.pm && (
                                <div className="w-2.5 h-2.5 rounded-full bg-[#483C32]" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* 오드 진료철학 섹션 */}
        <div className="-mx-5 bg-white px-5 py-16 mt-12">
          <div className="text-center space-y-3 pb-10">
            <h2 className="text-[28px] font-black text-[#483C32] leading-tight">
              <span className="text-[#1a1614]">항상 더 나은 결과를</span> 위해<br />
              오드의원 의료진은 노력합니다.
            </h2>
          </div>

          <div className="space-y-10">
            {philosophyItems.map((item, index) => (
              <div key={index} className="bg-[#fdfbf9] rounded-3xl overflow-hidden">
                <div className="relative w-full h-[320px] overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 space-y-5">
                  <h3 className="text-[22px] font-black text-[#483C32] tracking-tight">
                    {item.title}
                  </h3>
                  <div className="space-y-3.5">
                    {item.descriptions.map((desc, i) => (
                      <p key={i} className="text-[15px] text-[#483C32]/80 font-medium leading-relaxed">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
