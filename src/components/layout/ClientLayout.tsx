'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import instagramIcon from '@/assets/icons/social/social-instagram.png';
import youtubeIcon from '@/assets/icons/social/social-youtube.png';
import naverIcon from '@/assets/icons/social/social-naver.png';
import kakaoIcon from '@/assets/icons/social/social-kakao.png';
import logo from '@/assets/icons/logo.png';
import { LanguageSelector } from '@/components/LanguageSelector';
import { User, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

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
      <aside className="hidden lg:flex flex-col justify-center w-[400px] py-12 px-8">
        <div className="mb-6">
          <Image src={logo} alt="ODE CLINIC" className="w-64 object-contain" />
        </div>

        <div>
          <p className="text-[10px] font-bold text-[#483C32]/40 uppercase tracking-widest mb-5">
            Official Channels
          </p>
          <div className="flex gap-4 items-center">
            <a
              className="block w-10 h-10 flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
              href="#"
              title="Instagram"
            >
              <Image src={instagramIcon} alt="Instagram" className="w-full h-full object-cover" />
            </a>
            <a
              className="block w-10 h-10 flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
              href="#"
              title="YouTube"
            >
              <Image src={youtubeIcon} alt="YouTube" className="w-full h-full object-cover" />
            </a>
            <a
              className="block w-10 h-10 flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
              href="#"
              title="Naver Booking"
            >
              <Image src={naverIcon} alt="Naver Booking" className="w-full h-full object-cover" />
            </a>
            <a
              className="block w-10 h-10 flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
              href="#"
              title="Kakao Inquiry"
            >
              <Image src={kakaoIcon} alt="Kakao Inquiry" className="w-full h-full object-cover" />
            </a>
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

        <div className="flex-1 overflow-y-auto hide-scrollbar">{children}</div>
      </main>
    </>
  );
}
