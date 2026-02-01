'use client';

import Slider from 'react-slick';
import { ChevronRight, MapPin, Clock, Phone } from 'lucide-react';
import Image from 'next/image';

// Import slick carousel styles
import 'slick-carousel/slick/slick.css';

// --- Mock Data ---

const MAIN_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1764727291644-5dcb0b1a0375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBtaW5pbWFsJTIwY2xpbmljJTIwcmVjZXB0aW9uJTIwd2hpdGV8ZW58MXx8fHwxNzY5NDk4ODMwfDA&ixlib=rb-4.1.0&q=80&w=1920',
    title: 'Authentic Aesthetic Art',
    subtitle: '자연스러운 아름다움을 위한 오드만의 프리미엄 솔루션',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhY2lhbCUyMHNraW4lMjBjYXJlJTIwdHJlYXRtZW50JTIwc3BhfGVufDF8fHx8MTc2OTQ5ODgyNHww&ixlib=rb-4.1.0&q=80&w=1920',
    title: 'Private & Premium Care',
    subtitle: '당신만을 위한 프라이빗한 공간에서 시작되는 변화',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1679581356089-e65ea18c7f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYmVhdXR5JTIwY29uc3VsdGF0aW9uJTIwbmF0dXJhbHxlbnwxfHx8fDE3Njk0OTk5MTl8MA&ixlib=rb-4.1.0&q=80&w=1920',
    title: 'Personalized Consulting',
    subtitle: '개인의 고유한 매력을 찾아내는 1:1 맞춤형 컨설팅',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1758632031161-b6d7e913c2b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjB0cmVhdG1lbnQlMjByb29tJTIwcmVsYXhpbmd8ZW58MXx8fHwxNzY5NDk5OTE5fDA&ixlib=rb-4.1.0&q=80&w=1920',
    title: 'Relaxing Atmosphere',
    subtitle: '도심 속 휴식, 편안하고 아늑한 치유의 공간',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1674049406179-d7bf2c263e71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBkZXJtYXRvbG9neSUyMGxhc2VyJTIwcHJvY2VkdXJlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3Njk0OTk5MTl8MA&ixlib=rb-4.1.0&q=80&w=1920',
    title: 'Advanced Technology',
    subtitle: '최신 프리미엄 장비로 완성하는 안전하고 효과적인 시술',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1725034246182-0bb08e80d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGdsb3dpbmclMjBza2luJTIwcG9ydHJhaXQlMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzY5NDk5OTE5fDA&ixlib=rb-4.1.0&q=80&w=1920',
    title: 'Radiant Skin & Beauty',
    subtitle: '건강하게 빛나는 피부, 당신의 아름다움을 깨우다',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1767966769495-dbb5e14cab5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwZXF1aXBtZW50JTIwdGVjaG5vbG9neSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3Njk0OTk5MjB8MA&ixlib=rb-4.1.0&q=80&w=1920',
    title: 'Professional Medical Team',
    subtitle: '풍부한 경험과 노하우를 갖춘 숙련된 의료진의 정밀한 시술',
  },
];

const COLUMN_POSTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1666980347648-23bb1e49c1e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600',
    title: '리프팅 레이저, 나에게 맞는 시술은?',
    desc: '울쎄라, 써마지, 슈링크 등 다양한 리프팅 레이저의 차이점과 효과',
    date: '2023.10.15'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1579165466741-7f35a4755657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600',
    title: '환절기 피부 관리의 핵심, 스킨부스터',
    desc: '건조한 가을철, 피부 장벽을 강화하고 속건조를 해결하는 방법',
    date: '2023.10.22'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600',
    title: '자연스러운 볼륨감, 필러 시술 가이드',
    desc: '부위별 필러 선택 기준과 시술 전후 주의사항',
    date: '2023.11.01'
  }
];

// --- Components ---

function HeroSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="w-full relative overflow-hidden group">
      <Slider {...settings}>
        {MAIN_SLIDES.map((slide) => (
          <div key={slide.id} className="relative w-full h-[600px] outline-none">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/30" />
            {/* 텍스트 애니메이션 제거 - 이미지 자체에 텍스트 포함 예정 */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

function MedicalStaffBanner() {
  return (
    <section className="w-full">
      <Image 
        src="https://images.unsplash.com/photo-1659353888477-6e6aab941b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920" 
        alt="Medical Staff Banner" 
        width={1920}
        height={500}
        className="w-full h-[400px] md:h-[500px] object-cover block -mt-2"
      />
    </section>
  );
}

function OdeColumnGrid() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-serif text-[#483C32] mb-3">ODE Column</h3>
          <p className="text-[#8a7e75] text-sm">오드클리닉의 새로운 소식과 유익한 정보를 만나보세요</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {COLUMN_POSTS.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-5 relative">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                 <span className="text-[10px] font-bold text-[#483C32] uppercase tracking-wider border border-[#483C32]/20 px-2 py-0.5 rounded-full">Skin Care</span>
                 <span className="text-[11px] text-[#8a7e75]">{post.date}</span>
              </div>
              <h4 className="text-lg font-bold text-[#483C32] mb-2 group-hover:text-[#483C32]/70 transition-colors line-clamp-1">
                {post.title}
              </h4>
              <p className="text-[#8a7e75] text-sm leading-relaxed line-clamp-2">
                {post.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
             <button className="flex items-center gap-1 text-xs font-bold text-[#483C32] hover:text-[#483C32]/70 transition-colors uppercase tracking-widest border-b border-[#483C32] pb-1">
                View All Posts <ChevronRight className="w-3 h-3" />
             </button>
        </div>
      </div>
    </section>
  );
}

function SolutionBanner() {
  return (
    <section className="w-full relative h-[350px] md:h-[450px] flex items-center bg-[#F5F3F0]">
        <div className="w-1/2 h-full relative hidden md:block">
            <Image 
                src="https://images.unsplash.com/photo-1660940637862-e4f9740ebaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920" 
                alt="Body Solution"
                width={1920}
                height={450}
                className="w-full h-full object-cover"
            />
             <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F5F3F0]" />
        </div>
        <div className="w-full md:w-1/2 px-6 md:pl-12 py-12 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <span className="text-xs font-bold text-[#483C32] tracking-[0.2em] mb-4 uppercase">Special Solution</span>
            <h3 className="text-3xl md:text-4xl font-serif text-[#483C32] mb-6 leading-tight">
                Body & Face<br />
                Total Solution
            </h3>
            <p className="text-[#8a7e75] mb-8 max-w-md leading-relaxed text-sm md:text-base">
                얼굴부터 바디까지, 당신의 고민을 해결해 줄<br className="md:hidden" /> 오드만의 맞춤형 솔루션을 제안합니다.
            </p>
            <div className="flex gap-4">
                 <button className="px-6 py-3 bg-[#483C32] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#3a3128] transition-colors shadow-lg shadow-[#483C32]/20">
                    Face Solution
                </button>
                <button className="px-6 py-3 bg-white border border-[#483C32]/20 text-[#483C32] text-xs font-bold uppercase tracking-widest hover:bg-[#483C32]/5 transition-colors">
                    Body Solution
                </button>
            </div>
        </div>
    </section>
  );
}

function PhilosophySection() {
    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                 <div className="w-16 h-16 mx-auto mb-8 text-[#483C32]">
                     <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite]">
                        <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                        <text className="text-[10px] uppercase font-bold tracking-[0.3em] fill-current">
                            <textPath href="#curve">
                                Authentic Aesthetic Art • ODE Clinic •
                            </textPath>
                        </text>
                     </svg>
                 </div>
                 <h3 className="text-2xl md:text-3xl font-serif text-[#483C32] mb-8 leading-normal">
                    "가장 나다운 아름다움이<br />
                    가장 완벽한 아름다움입니다."
                 </h3>
                 <div className="space-y-6 text-[#8a7e75] text-sm md:text-base font-light leading-loose">
                    <p>
                        오드클리닉은 획일화된 아름다움이 아닌,<br />
                        개인이 가진 고유의 매력을 찾아내어 더욱 빛나게 만듭니다.
                    </p>
                    <p>
                        과하지 않은 자연스러움, 기본에 충실한 진료,<br />
                        그리고 당신만을 위한 프라이빗한 공간.
                    </p>
                    <p>
                        시간이 흘러도 변치 않는 가치, 오드(ODE)가 추구하는 미학입니다.
                    </p>
                 </div>
                 <div className="mt-12 w-12 h-[1px] bg-[#483C32]/30 mx-auto" />
            </div>
        </section>
    );
}

function LocationSection() {
    return (
        <section className="w-full bg-[#1e1e1e] text-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Map Area */}
                    <div className="w-full lg:w-3/5 h-[400px] bg-[#2a2a2a] relative overflow-hidden group">
                         <Image 
                            src="https://images.unsplash.com/photo-1660602738577-7277a9354341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920" 
                            alt="Map Location"
                            width={1920}
                            height={400}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                             <div className="bg-[#483C32] p-4 rounded-full shadow-2xl animate-bounce">
                                <MapPin className="w-6 h-6 text-white" />
                             </div>
                        </div>
                         <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] text-white/80 rounded">
                            강남대로 340
                        </div>
                    </div>
                    
                    {/* Info Area */}
                    <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-10">
                        <div>
                            <h3 className="text-xl font-serif mb-6 border-b border-white/10 pb-4 inline-block">오시는 길</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-white/60 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="font-bold mb-1">주소</p>
                                        <p className="text-white/70 text-sm font-light leading-relaxed">
                                            서울특별시 강남구 강남대로 340, 8층<br />
                                            (역삼동, 경원빌딩)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="w-5 h-5 text-white/60 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="font-bold mb-1">TEL</p>
                                        <p className="text-white/70 text-sm font-light">02-569-0222</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                             <h3 className="text-xl font-serif mb-6 border-b border-white/10 pb-4 inline-block">진료시간 안내</h3>
                             <div className="flex items-start gap-4">
                                <Clock className="w-5 h-5 text-white/60 mt-0.5 shrink-0" />
                                <div className="space-y-2">
                                    <div className="flex justify-between w-full min-w-[200px] text-sm">
                                        <span className="text-white/90">월 - 금</span>
                                        <span className="text-white/70 font-light">AM 11:30 ~ PM 08:30</span>
                                    </div>
                                    <div className="flex justify-between w-full min-w-[200px] text-sm">
                                        <span className="text-white/90">토요일</span>
                                        <span className="text-white/70 font-light">AM 10:00 ~ PM 04:00</span>
                                    </div>
                                    <p className="text-xs text-[#8a7e75] mt-3 pt-3 border-t border-white/5">
                                        * 점심시간 없이 진료하며, 공휴일과 일요일은 휴진입니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <HeroSlider />
      <MedicalStaffBanner />
      <OdeColumnGrid />
      <SolutionBanner />
      <PhilosophySection />
      <LocationSection />
    </div>
  );
}
