'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ChevronRight, TrendingUp } from 'lucide-react';
import { eventService } from '@/api/services/eventService';
import type { EventListItemResponseDto, EventListResponseDto } from '@/api/generated';

export default function EventsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentLang = searchParams.get('lang') || 'ko';

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<EventListResponseDto | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await eventService.getList({
          lang: currentLang,
          page: 1,
          size: 1000,
        });
        setData(result);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [currentLang]);

  return (
    <div className="w-full bg-[#f4f0ec] min-h-full pb-10">
      {/* 헤더 */}
      <div className="bg-white px-5 pt-8 pb-6 border-b border-[#483C32]/5">
        <h2 className="text-[28px] font-bold text-[#483C32] tracking-tight mb-2">이벤트 & 가격</h2>
        <p className="text-[#483C32]/60 text-[15px] font-medium leading-relaxed">
          오드 클리닉의 특별한 혜택을 합리적인 가격으로 만나보세요.
        </p>
      </div>

      {/* 목록 */}
      <div className="px-5 py-6">
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#483C32]/5 animate-pulse"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-2 w-full">
                    <div className="h-6 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                  </div>
                  <div className="w-12 h-6 bg-gray-200 rounded" />
                </div>
                <div className="pt-4 border-t border-gray-100 flex justify-between">
                  <div className="h-6 bg-gray-200 rounded w-1/4" />
                  <div className="w-10 h-10 bg-gray-200 rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="py-20 text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-[#483C32]/5 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-[#483C32]/20" />
            </div>
            <p className="text-[#483C32]/40 font-bold">데이터를 불러오지 못했습니다.</p>
            <button
              onClick={() => router.refresh()}
              className="px-4 py-2 text-sm font-bold text-[#483C32] border border-[#483C32]/20 rounded-xl hover:bg-[#483C32]/5 transition-colors"
            >
              다시 시도
            </button>
          </div>
        ) : data?.items.length ? (
          <div className="space-y-4">
            {data.items.map((item: EventListItemResponseDto) => (
              <div
                key={item.id}
                onClick={() => router.push(`/events/${item.id}`)}
                className="group bg-white rounded-[24px] overflow-hidden border border-[#483C32]/5 shadow-sm hover:shadow-md hover:border-[#483C32]/20 transition-all duration-300 cursor-pointer active:scale-[0.99]"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {item.tag && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase text-white bg-[#483C32]">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="text-[19px] font-bold text-[#483C32] group-hover:text-black transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[#483C32]/50 text-sm line-clamp-3 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-5 mt-2 border-t border-[#483C32]/5">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#483C32]/30 font-bold uppercase tracking-wider mb-0.5">
                        Special Price
                      </span>
                      <span className="text-[20px] font-black text-[#483C32]">
                        {item.minPrice?.toLocaleString()}원
                        <span className="text-sm font-medium ml-1 text-[#483C32]/40">~</span>
                      </span>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center bg-[#483C32]/5 rounded-xl group-hover:bg-[#483C32] transition-all group-hover:translate-x-1">
                      <ChevronRight className="w-5 h-5 text-[#483C32] group-hover:text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-[#483C32]/5 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-[#483C32]/20" />
            </div>
            <p className="text-[#483C32]/40 font-bold">진행 중인 이벤트가 없습니다.</p>
          </div>
        )}

      </div>
    </div>
  );
}
