'use client';

import { useState, useRef, useEffect } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useRouter } from 'next/navigation';
import { ChevronDown, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function LoginPage() {
  const router = useRouter();
  const [countryCode, setCountryCode] = useState('+82');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countries = [
    { code: '+82', name: '대한민국' },
    { code: '+1', name: '미국/캐나다' },
    { code: '+86', name: '중국' },
    { code: '+886', name: '대만' },
    { code: '+81', name: '일본' },
    { code: '+65', name: '싱가포르' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleSendCode = () => {
    if (!phoneNumber) {
        toast.error('휴대폰 번호를 입력해주세요.');
        return;
    }
    setLoading(true);
    setIsVerified(false);
    setAuthCode('');
    // Simulate sending code
    setTimeout(() => {
      setIsCodeSent(true);
      setLoading(false);
      toast.success('인증번호가 발송되었습니다.');
    }, 600);
  };

  const handleVerifyCode = () => {
    if (!authCode || authCode.length < 6) {
        toast.error('인증번호 6자리를 입력해주세요.');
        return;
    }
    setIsVerified(true);
    toast.success('인증이 완료되었습니다.');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCodeSent) {
        handleSendCode();
        return;
    }
    
    if (!isVerified) {
        toast.error('인증번호 확인을 진행해주세요.');
        return;
    }

    setLoading(true);

    // Simulate API call and verification
    setTimeout(() => {
      localStorage.setItem('isLoggedIn', 'true');
      // Dispatch event to update Layout state
      window.dispatchEvent(new Event('login-status-changed'));
      setLoading(false);
      router.push('/mypage');
    }, 800);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center min-h-[70vh] px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <SectionHeading>로그인</SectionHeading>
          <p className="mt-2 text-[#8a7e75] text-sm">휴대폰 번호로 본인인증을 진행해주세요.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-[#483C32] mb-1.5 ml-1">휴대폰 번호</label>
            <div className="flex gap-2">
                {/* Custom Country Code Dropdown */}
                <div className="relative w-[100px]" ref={dropdownRef}>
                    <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full h-full px-3 py-3 bg-white border border-[#483C32]/10 rounded-lg focus:outline-none focus:border-[#483C32]/40 transition-colors text-[#483C32] text-sm font-medium flex items-center justify-between"
                    >
                        <span>{countryCode}</span>
                        <ChevronDown className={`w-4 h-4 text-[#483C32]/50 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 w-[180px] mt-1 bg-white border border-[#483C32]/10 rounded-lg shadow-lg z-50 overflow-hidden animate-in fade-in zoom-in-95 origin-top-left">
                            {countries.map((country) => (
                                <button
                                    key={country.code}
                                    type="button"
                                    onClick={() => {
                                        setCountryCode(country.code);
                                        setIsDropdownOpen(false);
                                    }}
                                    className="w-full px-4 py-2.5 text-left text-sm hover:bg-[#483C32]/5 flex items-center justify-between transition-colors"
                                >
                                    <span className="text-[#483C32]">{country.name}</span>
                                    <span className={`text-xs font-bold ${countryCode === country.code ? 'text-[#483C32]' : 'text-[#8a7e75]/50'}`}>
                                        {country.code}
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <input 
                  type="tel" 
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9]/g, ''))}
                  className="flex-1 px-4 py-3 bg-white border border-[#483C32]/10 rounded-lg focus:outline-none focus:border-[#483C32]/40 transition-colors text-[#483C32]"
                  placeholder="휴대폰번호(-제외)"
                  required 
                />
            </div>
            {!isCodeSent && (
                 <button 
                 type="button" 
                 onClick={handleSendCode}
                 disabled={!phoneNumber || loading}
                 className="w-full mt-2 py-3 bg-[#483C32]/5 text-[#483C32] text-xs font-bold rounded-lg hover:bg-[#483C32]/10 transition-colors disabled:opacity-50"
               >
                 인증번호 받기
               </button>
            )}
          </div>
          
          {isCodeSent && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label htmlFor="code" className="block text-xs font-bold text-[#483C32] mb-1.5 ml-1">인증번호 입력</label>
                <div className="flex gap-2">
                    <input 
                      type="text" 
                      id="code"
                      value={authCode}
                      onChange={(e) => setAuthCode(e.target.value.replace(/[^0-9]/g, ''))}
                      className="flex-1 px-4 py-3 bg-white border border-[#483C32]/10 rounded-lg focus:outline-none focus:border-[#483C32]/40 transition-colors text-[#483C32]"
                      placeholder="인증번호 6자리"
                      maxLength={6}
                      disabled={isVerified}
                      required 
                    />
                     <button 
                        type="button" 
                        onClick={handleVerifyCode}
                        disabled={!authCode || isVerified}
                        className={`px-4 py-3 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                            isVerified 
                            ? 'bg-[#483C32] text-white' 
                            : 'bg-[#483C32]/5 text-[#483C32] hover:bg-[#483C32]/10'
                        }`}
                    >
                        {isVerified ? <Check className="w-4 h-4" /> : '확인'}
                    </button>
                </div>
                <div className="flex justify-between items-start mt-1.5 ml-1">
                    <p className="text-[10px] text-[#8a7e75]">
                        {isVerified ? '인증이 완료되었습니다.' : '인증번호가 발송되었습니다. 3분 이내에 입력해주세요.'}
                    </p>
                    {!isVerified && (
                        <button 
                            type="button" 
                            onClick={handleSendCode}
                            className="text-[10px] text-[#8a7e75] underline hover:text-[#483C32]"
                        >
                            재전송
                        </button>
                    )}
                </div>
              </div>
          )}

          <button 
            type="submit" 
            disabled={loading || !isVerified}
            className="w-full bg-[#483C32] text-white py-3.5 rounded-lg font-bold text-sm hover:bg-[#3a3128] transition-colors mt-8 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-lg shadow-[#483C32]/10"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : '로그인'}
          </button>
        </form>
      </div>
    </div>
  );
}
