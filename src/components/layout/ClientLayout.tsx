'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { LanguageSelector } from '@/components/LanguageSelector';
import { User, ShoppingBag } from 'lucide-react';
import Footer from '@/components/layout/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Initial check
    const status = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(status);

    // Poll for changes or listen to storage events if needed, but for the toggle button it's fine.
    // For smoother UX across tabs, a storage event listener is good.
    const handleStorageChange = () => {
      const status = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(status);
    };

    window.addEventListener('storage', handleStorageChange);
    // Custom event for same-window updates
    window.addEventListener('login-status-changed', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('login-status-changed', handleStorageChange);
    };
  }, []);

  const navItems = [
    { name: '홈', path: '/' },
    { name: '이벤트&가격', path: '/events' },
    { name: '시술안내', path: '/procedures' },
    { name: '오드칼럼', path: '/column' },
    { name: '오드소개', path: '/about' },
  ];

  return (
    <>
      {/* Left Sidebar - Hidden on Mobile */}
      <aside className="hidden 2xl:flex flex-col justify-center w-[400px] py-12 px-8 overflow-y-auto hide-scrollbar absolute left-[calc(50%-780px)] h-full z-10">
        {/* Search Input */}
        <div className="relative mb-6 group">
          <input
            type="text"
            placeholder="시술명, 증상을 검색해보세요"
            className="w-full bg-white border border-[#483C32]/10 rounded-full py-3.5 pl-12 pr-4 text-sm text-[#483C32] placeholder-[#483C32]/30 focus:outline-none focus:border-[#483C32]/30 transition-all shadow-sm focus:shadow-md"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#483C32]/30 group-focus-within:text-[#483C32]/50 transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        {/* Popular Keywords */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2">
            {['볼륨', '리프팅', '타이트닝', '스킨부스터', '프라이빗 바디 센터', '웨딩'].map(
              (tag) => (
                <button
                  key={tag}
                  onClick={() => router.push('/procedures')}
                  className="px-4 py-2 bg-white border border-[#483C32]/10 rounded-lg text-sm text-[#483C32]/80 hover:bg-[#483C32] hover:text-white hover:border-[#483C32] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>

        {/* Promotion Banner */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl group cursor-pointer h-auto aspect-[3/4]">
          <img
            src="https://images.unsplash.com/photo-1762631203805-88841687ab4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3BhJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MDA4MjE5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Promotion Banner"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#483C32]/60 via-transparent to-transparent flex flex-col justify-end p-6">
            <span className="text-white/90 text-xs font-medium mb-1 tracking-wider uppercase">
              Special Offer
            </span>
            <h3 className="text-white text-2xl font-serif">
              Monthly
              <br />
              Signature Event
            </h3>
          </div>
        </div>
      </aside>

      {/* Right Mobile View / Main Content */}
      <main className="w-full max-w-[600px] mx-auto h-[100dvh] bg-[#f4f0ec] flex flex-col relative z-30 flex-shrink-0 overflow-hidden lg:h-screen lg:shadow-[0_0_100px_rgba(72,60,50,0.2)] lg:rounded-none">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#483C32]/5 flex flex-col">
          <div className="flex items-center justify-between px-6 h-14">
            <button onClick={() => router.push('/')} className="h-full flex items-center">
              <svg
                width="230"
                height="32"
                viewBox="0 0 230.002 32"
                className="h-5 w-auto"
                aria-label="ODE CLINIC"
              >
                <g transform="translate(0 5)">
                  <rect
                    width="230"
                    height="32"
                    transform="translate(0 -5)"
                    fill="#fff"
                    opacity="0"
                  />
                  <path
                    d="M22893,19911a15.949,15.949,0,1,1,15.949,16A15.97,15.97,0,0,1,22893,19911Zm81.2,15.285v-14.578h15.883v-1.406H22974.2v-14.574h24.754v3.473h-8.871v11.1h7.492v1.416h-7.492v11.092h8.871v3.477Zm-25.283-.01h-13.174v-14.568h19.248v-1.416h-19.248v-14.564h13.213a15.274,15.274,0,0,1,0,30.549Zm168.418-15.238a2.841,2.841,0,0,1,2.932-2.941,2.654,2.654,0,0,1,2.723,2.139l-1.207.143a1.525,1.525,0,0,0-1.488-1.174,1.843,1.843,0,0,0,0,3.668,1.541,1.541,0,0,0,1.488-1.127l1.219.158a2.637,2.637,0,0,1-2.734,2.086A2.843,2.843,0,0,1,23117.336,19911.037Zm-103.752,0a2.839,2.839,0,0,1,2.924-2.941,2.651,2.651,0,0,1,2.73,2.139l-1.219.143a1.51,1.51,0,0,0-1.473-1.174,1.842,1.842,0,0,0,0,3.668,1.543,1.543,0,0,0,1.482-1.127l1.217.158a2.627,2.627,0,0,1-2.738,2.086A2.841,2.841,0,0,1,23013.584,19911.037Zm85.135,2.756v-5.512h1.293v5.512Zm-19.021,0-2.191-3.93v3.93h-1.234v-5.512h1.455l2.186,3.939v-3.939h1.234v5.512Zm-22.293,0v-5.512h1.289v5.512Zm-20.832,0v-5.512h1.3v4.395h2.293v1.117Z"
                    transform="translate(-22893.002 -19900)"
                    fill="#463D34"
                  />
                </g>
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <button
                onClick={() => router.push('/cart')}
                className="p-1.5 hover:bg-[#483C32]/5 rounded-full transition-colors text-[#483C32]"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => {
                  if (isLoggedIn) {
                    router.push('/mypage');
                  } else {
                    router.push('/login');
                  }
                }}
                className="p-1.5 hover:bg-[#483C32]/5 rounded-full transition-colors text-[#483C32]"
                aria-label="My Page"
              >
                <User className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <nav className="flex items-center justify-between px-6 overflow-x-auto hide-scrollbar mt-4">
            {navItems.map((item) => {
              const isActive =
                item.path === '/' ? pathname === '/' : pathname.startsWith(item.path);

              return (
                <button
                  key={item.name}
                  onClick={() => router.push(item.path)}
                  className={`pb-3 text-sm font-bold whitespace-nowrap transition-colors text-[#483C32] ${isActive ? 'border-b-2 border-[#483C32]' : ''}`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>
        </header>

        <div className="flex-1 overflow-y-auto hide-scrollbar">
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
}
