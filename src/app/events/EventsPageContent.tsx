'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';

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
}

interface EventResponse {
  data: {
    items: EventResponseDto[];
    total: number;
    page: number;
    size: number;
    lastPage: number;
    nextPage: number | null;
  };
}

const SIZE = 10;

export default function EventsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentLang = searchParams.get('lang') || 'ko';
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<EventResponse | null>(null);

  const updateParams = (lang: string, page: number) => {
    const params = new URLSearchParams();
    params.set('lang', lang);
    params.set('page', page.toString());
    router.push(`/events?${params.toString()}`);
  };

  const handlePageChange = (page: number) => {
    updateParams(currentLang, page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 600));

      const totalItems = 45;
      const lastPage = Math.ceil(totalItems / SIZE);

      const mockRaw: (EventResponseDto | null)[] = Array.from({ length: SIZE }, (_, i) => {
        const id = (currentPage - 1) * SIZE + i + 1;
        if (id > totalItems) return null;
        return {
          id,
          title: `${id}번 이벤트 시술 할인 혜택`,
          description: `오드 클리닉만의 특별한 ${id}번째 시술 제안! 지금 바로 상담받아보세요.`,
          tag: id % 3 === 0 ? 'HOT' : id % 5 === 0 ? 'NEW' : 'EVENT',
          lang: currentLang,
          displayStartAt: '2026-02-01T00:00:00Z',
          displayEndAt: '2026-02-28T23:59:59Z',
          status: 'ACTIVE' as const,
          sortOrder: id,
          minPrice: 99000 + id * 1000,
          createdAt: '2026-01-20T10:00:00Z',
          updatedAt: '2026-01-20T10:00:00Z',
        } satisfies EventResponseDto;
      });
      const mockItems: EventResponseDto[] = mockRaw.filter(
        (item): item is EventResponseDto => item !== null,
      );

      setData({
        data: {
          items: mockItems,
          total: totalItems,
          page: currentPage,
          size: SIZE,
          lastPage,
          nextPage: currentPage < lastPage ? currentPage + 1 : null,
        },
      });
      setLoading(false);
    };

    fetchEvents();
  }, [currentLang, currentPage]);

  const paginationRange = useMemo(() => {
    if (!data) return [];
    const { lastPage, page } = data.data;
    const maxVisible = 5;
    let start = Math.max(1, page - Math.floor(maxVisible / 2));
    const end = Math.min(lastPage, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    const range: number[] = [];
    for (let i = start; i <= end; i++) range.push(i);
    return range;
  }, [data]);

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
        ) : data?.data.items.length ? (
          <div className="space-y-4">
            {data.data.items.map((item) => (
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
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase text-white ${
                              item.tag === 'HOT' ? 'bg-[#ff4d4d]' : 'bg-[#483C32]'
                            }`}
                          >
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="text-[19px] font-bold text-[#483C32] group-hover:text-black transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[#483C32]/50 text-sm line-clamp-1 leading-relaxed font-medium">
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

        {/* 페이지네이션 */}
        {data && data.data.lastPage > 1 && (
          <div className="mt-10 flex justify-center items-center gap-2">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2.5 rounded-xl border border-[#483C32]/10 bg-white text-[#483C32] disabled:opacity-30 disabled:pointer-events-none hover:bg-[#483C32]/5 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5 px-1">
              {paginationRange.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                    currentPage === page
                      ? 'bg-[#483C32] text-white shadow-md shadow-[#483C32]/20'
                      : 'bg-white text-[#483C32]/60 border border-[#483C32]/5 hover:border-[#483C32]/30 hover:text-[#483C32]'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                handlePageChange(Math.min(data.data.lastPage, currentPage + 1))
              }
              disabled={currentPage === data.data.lastPage}
              className="p-2.5 rounded-xl border border-[#483C32]/10 bg-white text-[#483C32] disabled:opacity-30 disabled:pointer-events-none hover:bg-[#483C32]/5 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
