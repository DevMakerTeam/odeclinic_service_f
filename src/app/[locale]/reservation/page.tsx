'use client';

import React, { useState } from 'react';
import { useRouter } from '@/i18n/navigation';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  User,
} from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const countryCodes = [
  { code: '+82', name: '대한민국', countryCode: 'KR' },
  { code: '+1', name: '미국', countryCode: 'US' },
  { code: '+86', name: '중국', countryCode: 'CN' },
  { code: '+886', name: '대만', countryCode: 'TW' },
];

const generateTimeSlots = (isWeekend: boolean): string[] => {
  const slots: string[] = [];

  if (isWeekend) {
    for (let hour = 10; hour < 16; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        slots.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
      }
    }
  } else {
    for (let hour = 11; hour <= 20; hour++) {
      const minuteStart = hour === 11 ? 30 : 0;
      const minuteEnd = hour === 20 ? 30 : 45;
      for (let minute = minuteStart; minute <= minuteEnd; minute += 15) {
        slots.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
      }
    }
  }

  return slots;
};

// 더미 장바구니 아이템 (디자인 확인용)
const dummyCartItems = [
  { id: 1, title: '프리미엄 리프팅 100샷', description: '탄력 저하가 고민되는 부위에 집중 케어', price: 150000, discountPrice: 120000 },
  { id: 2, title: '수분 폭탄 관리 (풀코스)', description: '속건조부터 겉광채까지 한 번에 해결', price: 80000, discountPrice: 59000 },
];

// 더미 의료진 데이터 (디자인 확인용)
const dummyDoctors = [
  { id: 1, name: '김민준 원장', specialization: '피부과 전문의' },
  { id: 2, name: '이서연 원장', specialization: '피부 미용 전문의' },
  { id: 3, name: '최유진 원장', specialization: '안티에이징 전문의' },
];

export default function ReservationPage() {
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);

  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [request, setRequest] = useState('');

  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const isWeekend = selectedDate
    ? selectedDate.getDay() === 0 || selectedDate.getDay() === 6
    : false;
  const timeSlots = selectedDate ? generateTimeSlots(isWeekend) : [];

  const totalAmount = dummyCartItems.reduce(
    (sum, item) => sum + (item.discountPrice ?? item.price),
    0
  );

  return (
    <div className="w-full bg-[#fdfbf9] min-h-full pb-32">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#483C32]/5 flex items-center justify-between px-4 h-14">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-[#483C32]/5 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-[#483C32]" />
        </button>
        <h1 className="text-[15px] font-black text-[#483C32] tracking-tight">예약하기</h1>
        <div className="w-10" />
      </div>

      <div className="px-5 py-8 space-y-8">
        {/* 날짜 선택 */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-4 bg-[#483C32] rounded-full" />
            <h2 className="text-[18px] font-bold text-[#483C32]">날짜 선택</h2>
          </div>
          <div className="bg-white rounded-[28px] border border-[#483C32]/10 overflow-hidden">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date < today;
              }}
              locale={ko}
              fromDate={new Date()}
              formatters={{
                formatCaption: (date) => format(date, 'yyyy.MM'),
              }}
              modifiers={{
                saturday: (date) => date.getDay() === 6,
                sunday: (date) => date.getDay() === 0,
              }}
              modifiersStyles={{
                saturday: { color: '#2563eb' },
                sunday: { color: '#dc2626' },
              }}
              classNames={{
                months: 'flex flex-col',
                month: 'w-full',
                caption: 'flex justify-center items-center py-4 px-4 gap-3',
                caption_label: 'text-[15px] font-bold text-[#483C32] order-2',
                nav: 'contents',
                nav_button:
                  'size-8 bg-transparent p-0 text-[#483C32] hover:bg-[#483C32]/5 rounded-lg transition-colors flex items-center justify-center shrink-0',
                nav_button_previous: 'order-1',
                nav_button_next: 'order-3',
                table: 'w-full border-collapse px-4 pb-5',
                head_row: 'flex w-full gap-1',
                head_cell:
                  'text-[#483C32]/40 flex-1 font-semibold text-[12px] pb-3 text-center',
                row: 'flex w-full mt-2 gap-1',
                cell: 'flex-1 text-center relative flex items-center justify-center',
                day: 'w-full aspect-square max-w-[40px] inline-flex items-center justify-center text-[13px] font-semibold text-[#483C32] hover:bg-[#483C32]/10 rounded-full transition-colors',
                day_selected:
                  '!bg-[#483C32] !text-white hover:!bg-[#483C32] hover:!text-white font-bold',
                day_today: '',
                day_outside: 'text-[#483C32]/20',
                day_disabled: 'text-[#483C32]/10 hover:bg-transparent',
              }}
              components={{
                IconLeft: () => <ChevronLeft className="w-4 h-4" />,
                IconRight: () => <ChevronRight className="w-4 h-4" />,
              }}
            />
          </div>
        </section>

        {/* 시간 선택 */}
        {selectedDate && (
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-[#483C32] rounded-full" />
              <h2 className="text-[18px] font-bold text-[#483C32]">시간 선택</h2>
            </div>
            <div className="bg-white rounded-[28px] p-5 border border-[#483C32]/10">
              <p className="mb-4 text-[13px] text-[#483C32]/60 font-medium">
                {isWeekend ? '토·일: AM 10:00 ~ PM 04:00' : '월-금: AM 11:30 ~ PM 08:30'}
              </p>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2.5 rounded-xl text-[13px] font-bold transition-all ${
                      selectedTime === time
                        ? 'bg-[#483C32] text-white'
                        : 'bg-[#483C32]/5 text-[#483C32] hover:bg-[#483C32]/10'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 의료진 선택 */}
        {selectedDate && selectedTime && (
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-[#483C32] rounded-full" />
              <h2 className="text-[18px] font-bold text-[#483C32]">의료진 선택</h2>
            </div>
            <div className="bg-white rounded-[28px] p-5 border border-[#483C32]/10">
              <div className="space-y-3">
                {dummyDoctors.map((doctor) => (
                  <button
                    key={doctor.id}
                    onClick={() => setSelectedDoctor(doctor.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      selectedDoctor === doctor.id
                        ? 'border-[#483C32] bg-[#483C32]/5'
                        : 'border-[#483C32]/10 hover:border-[#483C32]/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          selectedDoctor === doctor.id ? 'bg-[#483C32]' : 'bg-[#483C32]/10'
                        }`}
                      >
                        <User
                          className={`w-6 h-6 ${
                            selectedDoctor === doctor.id ? 'text-white' : 'text-[#483C32]'
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[15px] font-bold text-[#483C32]">{doctor.name}</h4>
                        <p className="text-[12px] text-[#483C32]/60 font-medium mt-0.5">
                          {doctor.specialization}
                        </p>
                      </div>
                      {selectedDoctor === doctor.id && (
                        <Check className="w-5 h-5 text-[#483C32]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 선택한 시술 */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-4 bg-[#483C32] rounded-full" />
            <h2 className="text-[18px] font-bold text-[#483C32]">선택한 시술</h2>
          </div>
          <div className="bg-white rounded-[28px] p-5 border border-[#483C32]/10 space-y-3">
            {dummyCartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-2">
                <div className="space-y-0.5">
                  <h4 className="text-[15px] font-bold text-[#483C32]">{item.title}</h4>
                  {item.description && (
                    <p className="text-[12px] text-[#483C32]/50 font-medium">{item.description}</p>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-[16px] font-black text-[#483C32]">
                    {(item.discountPrice ?? item.price).toLocaleString()}원
                  </div>
                </div>
              </div>
            ))}
            <div className="pt-3 border-t border-[#483C32]/10">
              <div className="flex justify-between items-center">
                <span className="text-[15px] font-bold text-[#483C32]">총 금액</span>
                <div className="text-right">
                  <div className="text-[20px] font-black text-[#483C32]">
                    {totalAmount.toLocaleString()}원
                  </div>
                  <div className="text-[11px] text-[#483C32]/50 font-medium">VAT 별도</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 예약 정보 입력 */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-4 bg-[#483C32] rounded-full" />
            <h2 className="text-[18px] font-bold text-[#483C32]">예약 정보</h2>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-[13px] font-bold text-[#483C32] mb-2">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력해주세요"
                className="w-full px-4 py-3 rounded-xl border border-[#483C32]/10 bg-white text-[#483C32] text-[14px] font-medium focus:outline-none focus:border-[#483C32]/30"
              />
            </div>
            <div>
              <label className="block text-[13px] font-bold text-[#483C32] mb-2">
                생년월일 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={birthDate}
                onChange={(e) => {
                  const v = e.target.value.replace(/\D/g, '');
                  if (v.length <= 8) setBirthDate(v);
                }}
                placeholder="YYYYMMDD"
                maxLength={8}
                className="w-full px-4 py-3 rounded-xl border border-[#483C32]/10 bg-white text-[#483C32] text-[14px] font-medium focus:outline-none focus:border-[#483C32]/30"
              />
            </div>
            <div>
              <label className="block text-[13px] font-bold text-[#483C32] mb-2">
                이메일 주소 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full px-4 py-3 rounded-xl border border-[#483C32]/10 bg-white text-[#483C32] text-[14px] font-medium focus:outline-none focus:border-[#483C32]/30"
              />
            </div>
            <div>
              <label className="block text-[13px] font-bold text-[#483C32] mb-2">요청사항</label>
              <textarea
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                placeholder="특별한 요청사항이 있으시면 입력해주세요"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-[#483C32]/10 bg-white text-[#483C32] text-[14px] font-medium focus:outline-none focus:border-[#483C32]/30 resize-none"
              />
            </div>
          </div>
        </section>

        {/* 본인인증 */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-4 bg-[#483C32] rounded-full" />
            <h2 className="text-[18px] font-bold text-[#483C32]">본인인증</h2>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-[13px] font-bold text-[#483C32] mb-2">
                휴대폰 번호 <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-[#483C32]/10 bg-white">
                  <div className="relative">
                    <button
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="flex items-center gap-1 text-[#483C32] text-[13px] font-medium focus:outline-none"
                    >
                      <span>{selectedCountry.code}</span>
                      <span className="text-[#483C32]/60 text-[11px]">{selectedCountry.countryCode}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    {showCountryDropdown && (
                      <div className="absolute top-full mt-1 -left-4 bg-white border border-[#483C32]/10 rounded-xl shadow-lg z-10 overflow-hidden min-w-[120px]">
                        {countryCodes.map((country) => (
                          <button
                            key={country.code}
                            onClick={() => {
                              setSelectedCountry(country);
                              setShowCountryDropdown(false);
                            }}
                            className="w-full px-3 py-2 text-left hover:bg-[#483C32]/5 flex items-center gap-2 text-[13px] font-medium text-[#483C32]"
                          >
                            <span>{country.code}</span>
                            <span className="text-[#483C32]/60 text-[11px]">{country.countryCode}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="w-px h-5 bg-[#483C32]/10" />
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="01012345678"
                    className="flex-1 bg-transparent text-[#483C32] text-[14px] font-medium focus:outline-none"
                  />
                </div>
                <button className="w-full py-3 bg-[#483C32]/10 text-[#483C32] rounded-xl font-bold text-[13px] hover:bg-[#483C32]/20 transition-all">
                  인증번호 전송
                </button>
              </div>
            </div>
            {phoneNumber && (
              <div>
                <label className="block text-[13px] font-bold text-[#483C32] mb-2">
                  인증번호 <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    placeholder="인증번호 6자리"
                    maxLength={6}
                    disabled={isVerified}
                    className="flex-1 px-4 py-3 rounded-xl border border-[#483C32]/10 bg-white text-[#483C32] text-[14px] font-medium focus:outline-none focus:border-[#483C32]/30 disabled:bg-[#483C32]/5"
                  />
                  <button
                    onClick={() => setIsVerified(true)}
                    disabled={isVerified}
                    className={`px-4 py-3 rounded-xl font-bold text-[13px] transition-all whitespace-nowrap ${
                      isVerified
                        ? 'bg-green-500/10 text-green-600'
                        : 'bg-[#483C32] text-white hover:bg-[#483C32]/90'
                    }`}
                  >
                    {isVerified ? (
                      <span className="flex items-center gap-1">
                        <Check className="w-4 h-4" />
                        완료
                      </span>
                    ) : (
                      '확인'
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 약관 동의 */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-4 bg-[#483C32] rounded-full" />
            <h2 className="text-[18px] font-bold text-[#483C32]">약관 동의</h2>
          </div>
          <div className="bg-white rounded-[28px] p-5 border border-[#483C32]/10">
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => setAgreedToTerms(!agreedToTerms)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer flex-shrink-0 ${
                  agreedToTerms
                    ? 'bg-[#483C32] border-[#483C32]'
                    : 'border-[#483C32]/20 hover:border-[#483C32]/40'
                }`}
              >
                {agreedToTerms && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-[14px] font-bold text-[#483C32]">
                개인정보 수집 및 이용에 동의합니다 <span className="text-red-500">*</span>
              </span>
            </label>
            <p className="mt-3 text-[12px] text-[#483C32]/50 font-medium leading-relaxed pl-8">
              예약 처리를 위해 이름, 생년월일, 이메일, 휴대폰 번호 등의 개인정보를 수집하며,
              수집된 정보는 예약 확인 및 안내 목적으로만 사용됩니다.
            </p>
          </div>
        </section>

        {/* 완료 버튼 */}
        <button className="w-full py-4 bg-[#483C32] text-white rounded-xl font-bold text-[16px] hover:bg-[#483C32]/90 transition-all active:scale-[0.98] mt-4">
          예약 완료
        </button>
      </div>
    </div>
  );
}
