'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { ChevronLeft, Share2, Calendar, ShoppingCart, Check } from 'lucide-react';
import { addToCart, isInCart } from '@/lib/cartStorage';
import { toast } from 'sonner';
import { useEventDetail } from '@/hooks/useEvents';
import type { ProductResponseDto } from '@/api/generated';

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const locale = useLocale();

  const { data: event, isLoading: loading, isError: error } = useEventDetail(Number(id), locale);
  const [cartedIds, setCartedIds] = useState<Set<number>>(new Set());

  // 데이터 로드 후 이미 장바구니에 담긴 항목 초기화
  useEffect(() => {
    if (event) {
      setCartedIds(new Set(event.products.filter((p) => isInCart(p.id)).map((p) => p.id)));
    }
  }, [event]);

  const handleAddToCart = (product: ProductResponseDto) => {
    if (cartedIds.has(product.id)) {
      router.push('/cart');
      return;
    }
    addToCart({
      id: product.id,
      title: product.title,
      description: product.description,
      tag: product.tag,
      price: product.price,
      discountPrice: product.discountPrice,
      discountRate: product.discountRate,
    });
    setCartedIds((prev) => new Set(prev).add(product.id));
    toast.success('장바구니에 담았습니다', {
      description: product.title,
      duration: 2000,
      action: {
        label: '장바구니 보기',
        onClick: () => router.push('/cart'),
      },
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <div className="w-10 h-10 border-4 border-[#483C32]/20 border-t-[#483C32] rounded-full animate-spin" />
        <p className="text-[#483C32]/60 text-sm">정보를 불러오는 중입니다...</p>
      </div>
    );
  }

  if (error || !event) {
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

  const startDate = event.displayStartAt
    ? new Date(event.displayStartAt).toLocaleDateString('ko-KR')
    : null;
  const endDate = event.displayEndAt
    ? new Date(event.displayEndAt).toLocaleDateString('ko-KR')
    : null;

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
          {event.title}
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
            {event.title}
          </h2>
          {(startDate || endDate) && (
            <div className="flex items-center gap-4 text-[#483C32]/40 text-sm font-bold">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>
                  {startDate} ~ {endDate}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* 이벤트 설명 */}
        {event.description && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-[#483C32] rounded-full" />
              <h3 className="text-[18px] font-bold text-[#483C32]">이벤트 상세 설명</h3>
            </div>
            <p className="text-[#483C32]/70 text-[16px] leading-relaxed font-medium">
              {event.description}
            </p>

            {event.minPrice != null && (
              <div className="pb-6 mb-6 border-b border-[#483C32]/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-[22px] font-bold text-[#483C32] leading-none">
                    {event.minPrice.toLocaleString()}원 ~
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 상품 목록 */}
        {event.products.length > 0 && (
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
                          {product.discountPrice && (
                            <span className="text-[#483C32]/20 text-[13px] font-bold line-through decoration-1">
                              {product.price.toLocaleString()}원
                            </span>
                          )}
                          <span className="text-[20px] font-black text-[#483C32] leading-none mt-1">
                            {(product.discountPrice ?? product.price).toLocaleString()}원
                          </span>
                        </div>
                        <span className="text-[11px] text-[#483C32]/60 font-medium mt-1.5">
                          VAT 별도
                        </span>
                      </div>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-[13px] transition-all active:scale-95 ${
                          cartedIds.has(product.id)
                            ? 'bg-[#483C32] text-white'
                            : 'bg-[#483C32]/5 text-[#483C32] group-hover:bg-[#483C32] group-hover:text-white'
                        }`}
                      >
                        {cartedIds.has(product.id) ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            담김
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-3.5 h-3.5" />
                            시술 담기
                          </>
                        )}
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
