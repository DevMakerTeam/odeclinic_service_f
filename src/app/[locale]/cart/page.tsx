'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from '@/i18n/navigation';
import { ChevronLeft, Trash2, Plus } from 'lucide-react';
import { getCart, removeFromCart, CartItem } from '@/lib/cartStorage';
import { toast } from 'sonner';

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const items = getCart();
    setCartItems(items);
    setSelectedItems(new Set(items.map((item) => item.id)));
  };

  const handleSelectAll = () => {
    if (selectedItems.size === cartItems.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(cartItems.map((item) => item.id)));
    }
  };

  const handleToggleItem = (itemId: number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  const handleRemoveItem = (itemId: number, itemTitle: string) => {
    removeFromCart(itemId);
    loadCart();
    toast.success('시술이 삭제되었습니다', {
      description: itemTitle,
      duration: 2000,
    });
  };

  const handleReservation = () => {
    if (selectedItems.size === 0) {
      toast.error('시술을 선택해주세요');
      return;
    }
    const selectedCartItems = cartItems.filter((item) => selectedItems.has(item.id));
    localStorage.setItem('cart', JSON.stringify(selectedCartItems));
    router.push('/reservation');
  };

  const selectedCartItems = cartItems.filter((item) => selectedItems.has(item.id));
  const totalAmount = selectedCartItems.reduce((sum, item) => {
    return sum + (item.discountPrice ?? item.price);
  }, 0);

  const subHeader = (
    <div className="bg-white/80 backdrop-blur-md border-b border-[#483C32]/5 flex items-center justify-between px-4 h-14 flex-shrink-0">
      <button
        onClick={() => router.back()}
        className="p-2 hover:bg-[#483C32]/5 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-[#483C32]" />
      </button>
      <h1 className="text-[15px] font-black text-[#483C32] tracking-tight">장바구니</h1>
      <div className="w-10" />
    </div>
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-full flex flex-col bg-[#fdfbf9]">
        {subHeader}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="w-20 h-20 bg-[#483C32]/5 rounded-full flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-[#483C32]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-[20px] font-bold text-[#483C32] mb-2">장바구니가 비어있습니다</h2>
          <p className="text-[#483C32]/50 text-[14px] mb-8 text-center">원하는 시술을 담아보세요</p>
          <button
            onClick={() => router.push('/events')}
            className="px-6 py-3 bg-[#483C32] text-white rounded-xl font-bold text-[14px] hover:bg-[#483C32]/90 transition-colors"
          >
            시술 둘러보기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full flex flex-col bg-[#fdfbf9]">
      {subHeader}

      <div className="px-5 py-6 space-y-4 flex-1">
        {/* Select All */}
        <div className="flex items-center justify-between py-3">
          <button onClick={handleSelectAll} className="flex items-center gap-2 group">
            <div
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                selectedItems.size === cartItems.length
                  ? 'bg-[#483C32] border-[#483C32]'
                  : 'border-[#483C32]/20 group-hover:border-[#483C32]/40'
              }`}
            >
              {selectedItems.size === cartItems.length && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-[14px] font-bold text-[#483C32]">전체선택</span>
          </button>
          <span className="text-[13px] text-[#483C32]/50 font-medium">
            {selectedItems.size}/{cartItems.length}
          </span>
        </div>

        {/* Cart Items */}
        <div className="space-y-3">
          {cartItems.map((item) => {
            const isSelected = selectedItems.has(item.id);
            const finalPrice = item.discountPrice ?? item.price;

            return (
              <div
                key={item.id}
                className={`bg-white border rounded-[24px] p-5 transition-all ${
                  isSelected ? 'border-[#483C32]/20 shadow-sm' : 'border-[#483C32]/5'
                }`}
              >
                <div className="flex gap-3">
                  {/* Checkbox */}
                  <button
                    onClick={() => handleToggleItem(item.id)}
                    className="flex-shrink-0 pt-1"
                  >
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-[#483C32] border-[#483C32]'
                          : 'border-[#483C32]/20 hover:border-[#483C32]/40'
                      }`}
                    >
                      {isSelected && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {item.tag && (
                            <span className="text-[9px] font-black bg-[#483C32] text-white px-1.5 py-0.5 rounded tracking-tighter uppercase">
                              {item.tag}
                            </span>
                          )}
                          <h3 className="text-[16px] font-bold text-[#483C32] leading-tight">
                            {item.title}
                          </h3>
                        </div>
                        {item.description && (
                          <p className="text-[#483C32]/50 text-[13px] font-medium leading-snug">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id, item.title)}
                        className="p-1.5 hover:bg-[#483C32]/5 rounded-lg transition-colors flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4 text-[#483C32]/40" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-1.5 pt-2 border-t border-[#483C32]/5">
                      {item.discountPrice && (
                        <>
                          <span className="text-[#483C32]/20 text-[13px] font-bold line-through decoration-1">
                            {item.price.toLocaleString()}원
                          </span>
                          {item.discountRate && (
                            <span className="text-[12px] font-black text-[#ff4d4d]">
                              {item.discountRate}%
                            </span>
                          )}
                        </>
                      )}
                      <span className="text-[18px] font-black text-[#483C32] leading-none">
                        {finalPrice.toLocaleString()}원
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#fdfbf9] border-t border-[#483C32]/10 px-5 py-4 space-y-4">
        {/* Notice */}
        <ul className="space-y-1.5 text-[#483C32]/50 text-[12px] font-medium">
          <li className="flex items-start gap-1.5">
            <span className="text-[#483C32]/30 mt-0.5">•</span>
            <span>예약 확정 후 시술 변경 및 취소는 최소 24시간 전에 가능합니다.</span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="text-[#483C32]/30 mt-0.5">•</span>
            <span>표시된 가격은 VAT가 포함되지 않은 금액입니다.</span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="text-[#483C32]/30 mt-0.5">•</span>
            <span>실제 비용은 상담 후 달라질 수 있습니다.</span>
          </li>
        </ul>

        {/* Summary */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-[#483C32]/60 font-medium">
              선택한 시술 {selectedItems.size}개
            </span>
            <div className="text-right">
              <div className="text-[20px] font-black text-[#483C32] leading-none">
                {totalAmount.toLocaleString()}원
              </div>
              <div className="text-[11px] text-[#483C32]/50 font-medium mt-1">VAT 별도</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <button
            onClick={handleReservation}
            disabled={selectedItems.size === 0}
            className={`w-full py-4 rounded-xl font-bold text-[15px] transition-all ${
              selectedItems.size > 0
                ? 'bg-[#483C32] text-white hover:bg-[#483C32]/90 active:scale-[0.98]'
                : 'bg-[#483C32]/10 text-[#483C32]/30 cursor-not-allowed'
            }`}
          >
            예약하기
          </button>
          <button
            onClick={() => router.push('/events')}
            className="w-full py-3 bg-[#483C32]/5 text-[#483C32] rounded-xl font-bold text-[14px] hover:bg-[#483C32]/10 transition-all active:scale-[0.98] flex items-center justify-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            다른 시술 추가
          </button>
        </div>
      </div>
    </div>
  );
}
