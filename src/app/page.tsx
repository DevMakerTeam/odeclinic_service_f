'use client';

import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { motion } from 'motion/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';

const HERO_SLIDES = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1600947871775-082dd97e2d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhZXN0aGV0aWMlMjBjbGluaWMlMjBpbnRlcmlvciUyMG1pbmltYWwlMjB3aGl0ZXxlbnwxfHx8fDE3NzE1NzkyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Authentic Aesthetic Art',
    subtitle: '가장 나다운 아름다움을 찾는 시간, 오드클리닉',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1768836180171-24c727a594b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2xpbmljJTIwcmVjZXB0aW9uJTIwd2hpdGUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzE1NzkyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Private & Premium Care',
    subtitle: '당신만을 위해 준비된 프라이빗한 공간에서 시작되는 변화',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/flagged/photo-1577047795497-ba38bab31113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHdvbWFuJTIwcHJvZmlsZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzcxNTc5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Essential Skin Solution',
    subtitle: '기본에 충실한 진료로 피부 본연의 건강함을 깨웁니다',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1679496125396-8d01c968d071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXJtYXRvbG9neSUyMGNsaW5pYyUyMHByb2NlZHVyZSUyMGxhc2VyJTIwbW9kZXJufGVufDF8fHx8MTc3MTU3OTIyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Advanced Medical Beauty',
    subtitle: '숙련된 의료진과 프리미엄 장비로 완성하는 정교한 시술',
  },
];

function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: 'absolute', bottom: '30px', width: '100%' }}>
        <ul className="m-0 flex justify-center gap-1"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-white/30 rounded-full transition-all duration-300 hover:bg-white/60 [.slick-active_&]:w-6 [.slick-active_&]:bg-white" />
    ),
  };

  return (
    <section className="relative w-full aspect-square overflow-hidden [&_.slick-slider]:mb-0">
      <Slider {...settings} className="h-full">
        {HERO_SLIDES.map((slide) => (
          <div key={slide.id} className="relative w-full aspect-square outline-none">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

const BLOG_POSTS = [
  { id: 1, image: '/main/main-1.png' },
  { id: 2, image: '/main/main-2.png' },
  { id: 3, image: '/main/main-3.png' },
  { id: 4, image: '/main/main-4.png' },
  { id: 5, image: '/main/main-5.png' },
  { id: 6, image: '/main/main-6.png' },
  { id: 7, image: '/main/main-7.png' },
  { id: 8, image: '/main/main-8.png' },
  { id: 9, image: '/main/main-9.png' },
  { id: 10, image: '/main/main-10.png' },
  { id: 11, image: '/main/main-11.png' },
  { id: 12, image: '/main/main-12.png' },
];

function BlogThumbnailGrid() {
  return (
    <section className="w-full pt-0 pb-20 px-1 bg-white">
      <div className="text-center py-16 px-4">
        <p className="text-md text-[#483C32] font-bold tracking-widest mb-2">ODE Column</p>
        <h1 className="text-3xl text-black font-bold tracking-tight">
          <span className="text-[#483C32]">오드의원, </span>
          <span>함께 살펴보세요</span>
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {BLOG_POSTS.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="aspect-square overflow-hidden bg-gray-100 rounded-lg"
          >
            <img
              src={post.image}
              alt={`Blog Thumbnail ${post.id}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const SOLUTION_SLIDES = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1657470179441-c69861f0f748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1601839777132-b3f4e455c369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1749997087675-1c138e19b44b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

function PartSolutionSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  return (
    <section className="w-full pb-20 bg-white">
      <div className="text-center py-16 px-4">
        <p className="text-md text-[#483C32] font-bold tracking-widest mb-2 uppercase">
          Part Solution
        </p>
        <h1 className="text-3xl text-black font-bold tracking-tight">
          <span className="text-[#483C32]">오드의원, </span>
          <span>부위별 솔루션</span>
        </h1>
      </div>
      <div className="relative w-full aspect-[3/2] overflow-hidden">
        <Slider {...settings} className="h-full">
          {SOLUTION_SLIDES.map((slide) => (
            <div key={slide.id} className="relative w-full aspect-[3/2] outline-none">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

const PHILOSOPHY_ITEMS = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1730701878011-a423ec61c328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    title: '의료진 상담',
    description:
      '시술에 대해서 잘 모르시더라도 집도의와의 상담을 통해, 최적의 시술 계획을 세울 수 있습니다.',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1754817408912-49aa34c270c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    title: '다양한 장비 보유',
    description:
      '울쎄라, 써마지, 엠페이스, 세르프, 덴서티, 온다, 슈링크, 미라젯 등 프리미엄 장비에 계속해서 투자하여, 내 상태에 맞는 최적의 옵션을 선택하실 수 있도록 도와드립니다.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1663229049147-30f47be043ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    title: '시술 전후 사진 비교 상담',
    description:
      '효과가 서서히 나타나는 피부과 시술의 특성상 변화를 체감하기 어렵기 때문에 2D, 3D 피부진단기 사진을 촬영하여 시술 전후 나타나는 변화를 눈으로 확인하실 수 있도록 비교해드리고 있습니다.',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1618384874910-9f823a21babb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    title: '정품정량 사용',
    description: '오드의원은 환자와의 신뢰를 최우선으로 생각하며, 항상 정품, 정량만을 사용합니다.',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1660795774538-55c89a99723e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    title: '풍부한 임상 케이스, 학술활동',
    description:
      '모든 의료진이 울쎄라, 써마지 등 리프팅 시술 뿐만 아니라, 필러와 같은 주사시술까지 풍부한 임상 케이스를 보유하고 있습니다.\n\n또 학회에서의 강연, 정기적인 내부 세미나를 통해 시술에 대해 끊임없이 연구하고 배웁니다.',
  },
];

const PROMISES = [
  '01. 일률적 치료가 아닌 개개인에 맞는 맞춤형 치료를 하겠습니다.',
  '02. 환자분의 조그만 소리에도 항상 귀 기울이겠습니다.',
  '03. 환자 한 분, 한 분에게 더욱 나은 진료, 더욱 발전한 의료서비스를 제공하겠습니다.',
  '04. 시술 전과 시술 후의 태도가 달라지지 않도록 노력하겠습니다.',
];

const MEDICAL_SYSTEM = [
  {
    id: 1,
    step: 'step1. 내원',
    image:
      'https://images.unsplash.com/photo-1758448656987-cfae6bf225e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600',
  },
  {
    id: 2,
    step: 'step2. 1:1 원장 상담 및 시술 디자인',
    image:
      'https://images.unsplash.com/photo-1730701878011-a423ec61c328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600',
  },
  {
    id: 3,
    step: 'step3. 재 상담',
    image:
      'https://images.unsplash.com/photo-1663229049147-30f47be043ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600',
  },
  {
    id: 4,
    step: 'step4. 프라이빗 1인실 시술',
    image:
      'https://images.unsplash.com/photo-1629641320554-c8e8cfed610f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600',
  },
  {
    id: 5,
    step: 'step5. 맞춤관리',
    image:
      'https://images.unsplash.com/photo-1728949202468-c37fdbd76856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600',
  },
  {
    id: 6,
    step: 'step6. 귀가',
    image:
      'https://images.unsplash.com/photo-1595324090213-bb34ed302604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600',
  },
];

const HIGHLIGHT_PARTS = [
  '맞춤형 치료',
  '항상 귀 기울이겠습니다.',
  '더욱 나은 진료, 더욱 발전한 의료서비스를 제공하겠습니다.',
  '태도가 달라지지 않도록 노력하겠습니다.',
];

function PhilosophySection() {
  return (
    <section className="w-full bg-white pb-24">
      {/* 진료철학 */}
      <div className="pt-0 pb-20 px-6">
        <div className="text-center py-10 px-4">
          <p className="text-md text-[#483C32] font-bold tracking-widest mb-2 uppercase">
            ODE Philosophy
          </p>
          <h1 className="text-3xl text-black font-bold tracking-tight">
            <span className="text-[#483C32]">오드의원, </span>
            <span>진료철학</span>
          </h1>
        </div>

        <div className="space-y-4">
          {PHILOSOPHY_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full aspect-video overflow-hidden rounded-xl bg-gray-50 group"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-[14px] text-white/90 leading-relaxed whitespace-pre-wrap">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4가지 약속 */}
      <div className="py-24 bg-gray-50 px-8">
        <h2 className="text-xl text-[#483C32] font-bold mb-12 text-center">
          오드의원은 4가지의 약속을 드립니다.
        </h2>
        <div className="space-y-6 max-w-md mx-auto">
          {PROMISES.map((promise, index) => {
            const cleanPromise = promise.replace(/^\d{2}\.\s*/, '');
            const targetText = HIGHLIGHT_PARTS[index];
            const [before, after] = cleanPromise.split(targetText);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
              >
                <p className="text-[#483C32]/90 text-[15px] leading-snug">
                  {before}
                  <span className="text-[#483C32] font-bold">{targetText}</span>
                  {after}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 특별한 의료시스템 */}
      <div className="py-24 px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">
            오드의원의 <span className="text-[#483C32]">특별한 의료시스템</span>
          </h2>
          <p className="text-[14px] text-[#483C32]/70 leading-relaxed max-w-xs mx-auto">
            시술 후 개인의 피부타입을 고려하지 않고 정해진 절차대로 관리해주는 기존 병원들과 달리,
            오드의원은 개인의 피부상태에 알맞은 맞춤형 관리를 시행합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-12">
          {MEDICAL_SYSTEM.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-3 bg-gray-100">
                <ImageWithFallback
                  src={step.image}
                  alt={step.step}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center gap-1.5 min-h-[3.5rem]">
                <span className="text-[12px] font-bold text-[#483C32] uppercase">
                  {step.step.split('. ')[0]}
                </span>
                <span className="text-[14px] font-medium text-black text-center leading-tight px-1">
                  {step.step.split('. ')[1]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="w-full pt-24 pb-20 bg-white overflow-hidden">
      <div className="text-center mb-16 px-4">
        <p className="text-xs text-[#483C32] font-bold tracking-widest mb-2 uppercase">
          ODE Location
        </p>
        <h1 className="text-2xl text-black font-bold tracking-tight">
          <span className="text-[#483C32]">가장 특별한 곳, </span>
          <span>오드의원</span>
        </h1>
      </div>
      <div className="w-full h-[400px] bg-gray-100 mb-12">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1569336415962-a4bd9f6dfc0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW91bCUyMG1hcCUyMG1vZGVybiUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzE1OTI2MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Location Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* <div className="w-full px-5 space-y-8">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <h3 className="text-[18px] font-bold text-[#483C32] tracking-tight">병원 오시는길</h3>
            <p className="text-[#483C32] text-[15px] font-medium leading-relaxed">
              주소 : 서울특별시 강남구 강남대로 340, 8층(역삼동, 경원빌딩)
            </p>
          </div>
          <div>
            <p className="text-[#483C32] text-[15px] font-bold tracking-tight">TEL : 02-569-0222</p>
          </div>
        </div>

        <div className="pt-8 border-t border-[#483C32]/10 pb-10">
          <h3 className="text-[18px] font-bold text-[#483C32] tracking-tight mb-4">진료시간 안내</h3>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span className="text-[#483C32]/60 text-[15px] font-medium">월 - 금</span>
              <span className="text-[#483C32] text-[15px] font-bold">11:30 - 20:30</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#483C32]/60 text-[15px] font-medium">토요일</span>
              <span className="text-[#483C32] text-[15px] font-bold">10:00 - 16:00</span>
            </div>
            <div className="mt-3">
              <p className="text-[12px] text-red-500 leading-relaxed font-medium">
                * 점심시간 없이 진료하며,<br />
                공휴일과 일요일은 휴진입니다.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-full px-5 space-y-6">
        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-[20px] font-bold text-black tracking-tight mb-4">병원 오시는길</h3>
          <div className="space-y-2">
            <p className="text-[#483C32] text-[14px] font-semibold leading-relaxed">
              주소 : 서울특별시 강남구 강남대로 340, 8층(역삼동, 경원빌딩)
            </p>
            <p className="text-[#483C32] text-[14px] font-medium tracking-tight">
              TEL : <span className="text-[18px] text-[#6A4A37] font-bold">02-569-0222</span>
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-[#483C32]/20 pt-6">
          {/* Clinic Hours */}
          <h3 className="text-[20px] font-bold text-black tracking-tight mb-5">진료시간 안내</h3>

          <div className="space-y-1">
            <div className="flex items-center">
              <span className="text-[#483C32] text-[15px] font-bold min-w-[55px]">월 - 금 :</span>
              <span className="text-[#483C32] text-[15px] font-bold tracking-wide">
                AM 11 : 30 ~ PM 08 : 30
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-[#483C32] text-[15px] font-bold min-w-[55px]">토요일 :</span>
              <span className="text-[#483C32] text-[15px] font-bold tracking-wide">
                AM 10 : 00 ~ PM 04 : 00
              </span>
            </div>
            <div className="mt-2">
              <p className="text-[11px] text-red-500 font-semibold tracking-tight leading-relaxed">
                * 점심시간없이 진료하며, 공휴일과 일요일은 휴진입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="w-full min-h-full bg-white">
      <HeroSlider />
      <div className="[&>section]:pb-0">
        <BlogThumbnailGrid />
        <div className="flex justify-center pt-8 pb-12">
          <Link
            href="/column"
            className="text-white text-sm px-10 py-4 tracking-widest rounded-sm font-[Pretendard] font-semibold bg-[#654C3A]"
          >
            More Column
          </Link>
        </div>
      </div>
      <div className="[&>section]:pb-0">
        <PartSolutionSlider />
      </div>
      <div className="[&>section]:pb-0 [&>section>div:last-child]:pb-0">
        <PhilosophySection />
      </div>
      <LocationSection />
    </div>
  );
}
