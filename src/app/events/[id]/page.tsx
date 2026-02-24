'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ChevronLeft, Share2, Calendar } from 'lucide-react';

interface ProductResponseDto {
  id: number;
  eventId: number;
  title: string;
  description?: string;
  tag?: string;
  lang?: string;
  price: number;
  discountPrice?: number;
  discountRate?: number;
  status: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

interface EventResponseDto {
  id: number;
  title: string;
  description?: string;
  tag?: string;
  lang?: string;
  displayStartAt?: string;
  displayEndAt?: string;
  status: 'ACTIVE' | 'HIDDEN';
  sortOrder: number;
  minPrice?: number;
  createdAt: string;
  updatedAt: string;
  products?: ProductResponseDto[];
}

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [event, setEvent] = useState<EventResponseDto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventDetail = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));

      const mockProducts: ProductResponseDto[] = [
        {
          id: 101,
          eventId: Number(id),
          title: '프리미엄 리프팅 100샷',
          description: '탄력 저하가 고민되는 부위에 집중 케어',
          tag: 'BEST',
          lang: 'ko',
          price: 150000,
          discountPrice: 120000,
          discountRate: 20,
          status: 'ACTIVE',
          sortOrder: 1,
          createdAt: '2026-02-01T10:00:00Z',
          updatedAt: '2026-02-01T10:00:00Z',
        },
        {
          id: 102,
          eventId: Number(id),
          title: '윤곽 주사 3회 패키지',
          description: '더욱 선명해지는 얼굴 라인을 위한 필수 코스',
          lang: 'ko',
          price: 300000,
          discountPrice: 210000,
          discountRate: 30,
          status: 'ACTIVE',
          sortOrder: 2,
          createdAt: '2026-02-01T10:00:00Z',
          updatedAt: '2026-02-01T10:00:00Z',
        },
        {
          id: 103,
          eventId: Number(id),
          title: '수분 폭탄 관리 (풀코스)',
          description: '속건조부터 겉광채까지 한 번에 해결',
          tag: 'NEW',
          lang: 'ko',
          price: 80000,
          discountPrice: 59000,
          discountRate: 26,
          status: 'ACTIVE',
          sortOrder: 3,
          createdAt: '2026-02-01T10:00:00Z',
          updatedAt: '2026-02-01T10:00:00Z',
        },
      ];

      const mockEvent: EventResponseDto = {
        id: Number(id),
        title: `[이벤트] ${id}번 시술 특별 할인`,
        description:
          '오직 이번 달에만 만날 수 있는 오드 클리닉의 특별한 혜택! 합리적인 가격으로 프리미엄 시술을 경험해보세요. 전문 의료진의 섬세한 상담과 맞춤형 시술이 진행됩니다. 본 이벤트는 한정된 기간 동안 제공되니 서둘러 예약하세요.',
        tag: id === '1' ? 'HOT' : id === '2' ? 'NEW' : 'EVENT',
        lang: 'ko',
        displayStartAt: '2026-02-01T00:00:00Z',
        displayEndAt: '2026-02-28T23:59:59Z',
        status: 'ACTIVE',
        sortOrder: 1,
        minPrice: 59000,
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-01-20T10:00:00Z',
        products: mockProducts,
      };

      setEvent(mockEvent);
      setLoading(false);
    };

    fetchEventDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <div className="w-10 h-10 border-4 border-[#483C32]/20 border-t-[#483C32] rounded-full animate-spin" />
        <p className="text-[#483C32]/60 text-sm">정보를 불러오는 중입니다...</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="p-10 text-center">
        <p className="text-[#483C32]/60">이벤트를 찾을 수 없습니다.</p>
        <button
          onClick={() => router.push('/events')}
          className="mt-4 px-6 py-2 bg-[#483C32] text-white rounded-lg text-sm"
        >
          목록으로 돌아가기
        </button>
      </div>
    );
  }

  const cleanTitle = event.title.replace(/^\[[^\]]+\]\s*\d+번\s*/, '');
  const startDate = new Date(event.displayStartAt || '').toLocaleDateString('ko-KR');
  const endDate = new Date(event.displayEndAt || '').toLocaleDateString('ko-KR');

  return (
    <div className="w-full bg-[#fdfbf9] min-h-full pb-32">
      {/* 헤더 */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#483C32]/5 flex items-center justify-between px-4 h-14">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-[#483C32]/5 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-[#483C32]" />
        </button>
        <h1 className="text-[15px] font-black text-[#483C32] truncate max-w-[220px] tracking-tight">
          {cleanTitle}
        </h1>
        <button className="p-2 hover:bg-[#483C32]/5 rounded-full transition-colors">
          <Share2 className="w-5 h-5 text-[#483C32]" />
        </button>
      </div>

      <div className="px-5 py-8 space-y-10">
        {/* 타이틀 섹션 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {event.tag && (
              <span className="bg-[#483C32] text-white text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase">
                {event.tag}
              </span>
            )}
          </div>
          <h2 className="text-[28px] font-bold text-[#483C32] leading-tight tracking-tight">
            {cleanTitle}
          </h2>
          <div className="flex items-center gap-4 text-[#483C32]/40 text-sm font-bold">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>
                {startDate} ~ {endDate}
              </span>
            </div>
          </div>
        </div>

        {/* 이벤트 설명 */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-4 bg-[#483C32] rounded-full" />
            <h3 className="text-[18px] font-bold text-[#483C32]">이벤트 상세 설명</h3>
          </div>
          <p className="text-[#483C32]/70 text-[16px] leading-relaxed font-medium">
            {event.description}
          </p>

          {/* 최저가 인라인 표시 */}
          <div className="pb-6 mb-6 border-b border-[#483C32]/10">
            <div className="flex items-baseline gap-2">
              <span className="text-[22px] font-bold text-[#483C32] leading-none">
                {event.minPrice?.toLocaleString()}원 ~
              </span>
            </div>
          </div>
        </div>

        {/* 상품 목록 */}
        {event.products && event.products.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-[#483C32] rounded-full" />
                <h3 className="text-[18px] font-bold text-[#483C32]">세부 시술 품목</h3>
              </div>
              <span className="text-[11px] font-bold text-[#483C32]/40 uppercase tracking-widest">
                {event.products.length} Items
              </span>
            </div>

            <div className="space-y-4">
              {event.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-[#483C32]/10 rounded-[28px] p-6 shadow-sm hover:shadow-md hover:border-[#483C32]/20 transition-all group"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          {product.tag && (
                            <span className="text-[9px] font-black bg-[#483C32] text-white px-1.5 py-0.5 rounded tracking-tighter uppercase">
                              {product.tag}
                            </span>
                          )}
                          <h4 className="text-[17px] font-bold text-[#483C32] leading-tight">
                            {product.title}
                          </h4>
                        </div>
                        {product.description && (
                          <p className="text-[#483C32]/50 text-[13px] font-medium leading-tight">
                            {product.description}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        {product.discountRate && (
                          <div className="text-[14px] font-black text-[#ff4d4d] mb-0.5">
                            {product.discountRate}% OFF
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-end justify-between pt-4 border-t border-[#483C32]/5">
                      <div className="flex items-end gap-1.5">
                        <div className="flex flex-col">
                          <span className="text-[#483C32]/20 text-[13px] font-bold line-through decoration-1">
                            {product.price.toLocaleString()}원
                          </span>
                          <span className="text-[20px] font-black text-[#483C32] leading-none mt-1">
                            {product.discountPrice
                              ? product.discountPrice.toLocaleString()
                              : product.price.toLocaleString()}
                            원
                          </span>
                        </div>
                        <span className="text-[11px] text-[#483C32]/60 font-medium mt-1.5">VAT 별도</span>
                      </div>
                      <button className="px-4 py-2.5 bg-[#483C32]/5 text-[#483C32] rounded-xl font-bold text-[13px] group-hover:bg-[#483C32] group-hover:text-white transition-all active:scale-95">
                        시술 담기
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
