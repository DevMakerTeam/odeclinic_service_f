'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ReservationCTA() {
  return (
    <section className="pt-24 pb-12 bg-[#483C32] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-white blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading tracking-tight">
          지금 바로 예약해보세요.
        </h2>
        <p className="text-white/80 mb-12 text-lg md:text-xl font-light leading-relaxed">
          오드의원의 투명하고 합리적인 가격과<br />
          다양한 이벤트를 확인해보세요.
        </p>
        
        <Link 
          href="/events" 
          className="inline-flex items-center justify-center gap-3 bg-white text-[#483C32] px-10 py-5 rounded-full font-bold text-lg md:text-xl hover:bg-[#f4f0ec] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span>예약 바로가기</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
