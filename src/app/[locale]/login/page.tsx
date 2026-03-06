'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useRouter } from '@/i18n/navigation';
import { ChevronDown, Check } from 'lucide-react';
import { toast } from 'sonner';
import { useSendSms, useVerifySms } from '@/hooks/useAuth';

const COUNTRIES = [
  { code: '+82', name: '대한민국' },
  { code: '+1', name: '미국/캐나다' },
  { code: '+86', name: '중국' },
  { code: '+886', name: '대만' },
  { code: '+81', name: '일본' },
  { code: '+65', name: '싱가포르' },
];

const loginSchema = z.object({
  phone: z
    .string()
    .min(1, '휴대폰 번호를 입력해주세요.')
    .regex(/^\d{9,11}$/, '9~11자리 숫자로 입력해주세요.'),
  code: z.string(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [countryCode, setCountryCode] = useState('+82');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [expireMinutes, setExpireMinutes] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sendSmsMutation = useSendSms();
  const verifySmsMutation = useVerifySms();

  const {
    control,
    trigger,
    getValues,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { phone: '', code: '' },
    mode: 'onTouched',
  });

  const phone = watch('phone');
  const code = watch('code');

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSendCode = async () => {
    const isValid = await trigger('phone');
    if (!isValid) return;

    sendSmsMutation.mutate(
      { phone: getValues('phone'), countryCode: countryCode.replace('+', '') },
      {
        onSuccess: (data) => {
          setIsCodeSent(true);
          setIsVerified(false);
          setExpireMinutes(data.expireMinutes);
          clearErrors('code');
          toast.success('인증번호가 발송되었습니다.');
        },
        onError: () => {
          toast.error('인증번호 발송에 실패했습니다. 다시 시도해주세요.');
        },
      }
    );
  };

  const handleVerifyCode = () => {
    const codeValue = getValues('code');
    if (!/^\d{6}$/.test(codeValue ?? '')) {
      setError('code', { message: '인증번호 6자리를 입력해주세요.' });
      return;
    }
    clearErrors('code');

    verifySmsMutation.mutate(
      {
        phone: getValues('phone'),
        countryCode: countryCode.replace('+', ''),
        code: codeValue,
      },
      {
        onSuccess: () => {
          setIsVerified(true);
          window.dispatchEvent(new Event('login-status-changed'));
          toast.success('인증이 완료되었습니다.');
          setTimeout(() => router.push('/mypage'), 500);
        },
        onError: () => {
          setError('code', { message: '인증번호가 올바르지 않거나 만료되었습니다.' });
        },
      }
    );
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center min-h-[70vh] px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <SectionHeading>로그인</SectionHeading>
          <p className="mt-2 text-[#8a7e75] text-sm">휴대폰 번호로 본인인증을 진행해주세요.</p>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); if (!isCodeSent) handleSendCode(); }}
          className="space-y-5"
        >
          {/* ── 휴대폰 번호 ── */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-[#483C32] mb-1.5 ml-1">
              휴대폰 번호
            </label>
            <div className="flex gap-2">
              {/* 국가코드 드롭다운 */}
              <div className="relative w-[100px]" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full h-full px-3 py-3 bg-white border border-[#483C32]/10 rounded-lg focus:outline-none focus:border-[#483C32]/40 transition-colors text-[#483C32] text-sm font-medium flex items-center justify-between"
                >
                  <span>{countryCode}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#483C32]/50 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-[180px] mt-1 bg-white border border-[#483C32]/10 rounded-lg shadow-lg z-50 overflow-hidden animate-in fade-in zoom-in-95 origin-top-left">
                    {COUNTRIES.map((country) => (
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
                        <span
                          className={`text-xs font-bold ${
                            countryCode === country.code ? 'text-[#483C32]' : 'text-[#8a7e75]/50'
                          }`}
                        >
                          {country.code}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="tel"
                    id="phone"
                    onChange={(e) => field.onChange(e.target.value.replace(/[^0-9]/g, ''))}
                    className={`flex-1 px-4 py-3 bg-white border rounded-lg focus:outline-none transition-colors text-[#483C32] ${
                      errors.phone
                        ? 'border-red-300 focus:border-red-400'
                        : 'border-[#483C32]/10 focus:border-[#483C32]/40'
                    }`}
                    placeholder="휴대폰번호(-제외)"
                  />
                )}
              />
            </div>

            {errors.phone && (
              <p className="mt-1 ml-1 text-[10px] text-red-400">{errors.phone.message}</p>
            )}

            {!isCodeSent && (
              <button
                type="button"
                onClick={handleSendCode}
                disabled={!phone || sendSmsMutation.isPending}
                className="w-full mt-2 py-3 bg-[#483C32]/5 text-[#483C32] text-xs font-bold rounded-lg hover:bg-[#483C32]/10 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {sendSmsMutation.isPending ? (
                  <span className="w-4 h-4 border-2 border-[#483C32]/30 border-t-[#483C32] rounded-full animate-spin" />
                ) : (
                  '인증번호 받기'
                )}
              </button>
            )}
          </div>

          {/* ── 인증번호 ── */}
          {isCodeSent && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <label htmlFor="code" className="block text-xs font-bold text-[#483C32] mb-1.5 ml-1">
                인증번호 입력
              </label>
              <div className="flex gap-2">
                <Controller
                  name="code"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="code"
                      onChange={(e) => field.onChange(e.target.value.replace(/[^0-9]/g, ''))}
                      className={`flex-1 px-4 py-3 bg-white border rounded-lg focus:outline-none transition-colors text-[#483C32] ${
                        errors.code
                          ? 'border-red-300 focus:border-red-400'
                          : 'border-[#483C32]/10 focus:border-[#483C32]/40'
                      }`}
                      placeholder="인증번호 6자리"
                      maxLength={6}
                      disabled={isVerified}
                    />
                  )}
                />
                <button
                  type="button"
                  onClick={handleVerifyCode}
                  disabled={!code || isVerified || verifySmsMutation.isPending}
                  className={`px-4 py-3 rounded-lg text-xs font-bold transition-colors whitespace-nowrap flex items-center justify-center min-w-[56px] ${
                    isVerified
                      ? 'bg-[#483C32] text-white'
                      : 'bg-[#483C32]/5 text-[#483C32] hover:bg-[#483C32]/10'
                  }`}
                >
                  {verifySmsMutation.isPending ? (
                    <span className="w-4 h-4 border-2 border-[#483C32]/30 border-t-[#483C32] rounded-full animate-spin" />
                  ) : isVerified ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    '확인'
                  )}
                </button>
              </div>

              <div className="flex justify-between items-start mt-1.5 ml-1">
                {errors.code ? (
                  <p className="text-[10px] text-red-400">{errors.code.message}</p>
                ) : (
                  <p className="text-[10px] text-[#8a7e75]">
                    {isVerified
                      ? '인증이 완료되었습니다.'
                      : `인증번호가 발송되었습니다. ${expireMinutes ?? 3}분 이내에 입력해주세요.`}
                  </p>
                )}
                {!isVerified && (
                  <button
                    type="button"
                    onClick={handleSendCode}
                    disabled={sendSmsMutation.isPending}
                    className="text-[10px] text-[#8a7e75] underline hover:text-[#483C32] disabled:opacity-50 ml-2 shrink-0"
                  >
                    재전송
                  </button>
                )}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
