'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'motion/react';
import Image, { type StaticImageData } from 'next/image';
import { Card } from '@/components/ui/card';
import { hiloWaveData } from '@/data/procedures/hilo-wave';
import { juvelookVolumeData } from '@/data/procedures/juvelook-volume';
import { sculptraData } from '@/data/procedures/sculptra';
import { olidiaData } from '@/data/procedures/olidia';
import { radiesseData } from '@/data/procedures/radiesse';
import { ultracolData } from '@/data/procedures/ultracol';
import { undereyeFillerData } from '@/data/procedures/undereye-filler';
import { ultherapyData } from '@/data/procedures/ultherapy';
import { thermageData } from '@/data/procedures/thermage';
import { xerfData } from '@/data/procedures/xerf';
import { densityAlphaData } from '@/data/procedures/density-alpha';

// Mock Data
type Category = 'volume' | 'lifting-tightening' | 'anti-aging' | 'skin-booster' | 'body-program';

const CATEGORIES: Category[] = [
  'volume',
  'lifting-tightening',
  'anti-aging',
  'skin-booster',
  'body-program',
];

// 카테고리 한글 레이블
const CATEGORY_LABELS: Record<Category, string> = {
  'volume': '볼륨',
  'lifting-tightening': '리프팅 & 타이트닝',
  'anti-aging': '향노화',
  'skin-booster': '스킨부스터',
  'body-program': '바디 프로그램',
};

// 카테고리와 URL 필터 매핑
const CATEGORY_TO_FILTER: Record<Category, string | null> = {
  'volume': null,
  'lifting-tightening': 'lifting-tightening',
  'anti-aging': 'anti-aging',
  'skin-booster': 'skin-booster',
  'body-program': 'body-program',
};

const FILTER_TO_CATEGORY: Record<string, Category> = {
  'lifting-tightening': 'lifting-tightening',
  'anti-aging': 'anti-aging',
  'skin-booster': 'skin-booster',
  'body-program': 'body-program',
};

interface Procedure {
  id: string;
  category: Category;
  name: string;
  description: string;
  price: string;
  image: string | StaticImageData;
}

const PROCEDURES: Procedure[] = [
  {
    id: 'hilo-wave',
    category: 'volume',
    name: hiloWaveData.info.displayTitle,
    description: hiloWaveData.info.description,
    price: '1회 60만원',
    image: hiloWaveData.hero.image,
  },
  {
    id: 'juvelook-volume',
    category: 'volume',
    name: juvelookVolumeData.info.displayTitle,
    description: juvelookVolumeData.info.description,
    price: '1병 49만원',
    image: juvelookVolumeData.hero.image,
  },
  {
    id: 'sculptra',
    category: 'volume',
    name: sculptraData.info.displayTitle,
    description: sculptraData.info.description,
    price: '1병 69만원',
    image: sculptraData.hero.image,
  },
  {
    id: 'olidia',
    category: 'volume',
    name: olidiaData.info.displayTitle,
    description: olidiaData.info.description,
    price: '1병 59만원',
    image: olidiaData.hero.image,
  },
  {
    id: 'radiesse',
    category: 'volume',
    name: radiesseData.info.displayTitle,
    description: radiesseData.info.description,
    price: '1병 85만원',
    image: radiesseData.hero.image,
  },
  {
    id: 'ultracol',
    category: 'volume',
    name: ultracolData.info.displayTitle,
    description: ultracolData.info.description,
    price: '1병 49만원',
    image: ultracolData.hero.image,
  },
  {
    id: 'undereye-filler',
    category: 'volume',
    name: undereyeFillerData.info.displayTitle,
    description: undereyeFillerData.info.description,
    price: '0.5cc 45만원',
    image: undereyeFillerData.hero.image,
  },
  {
    id: 'ultherapy',
    category: 'lifting-tightening',
    name: ultherapyData.info.displayTitle,
    description: ultherapyData.info.description,
    price: '100샷 35만원',
    image: ultherapyData.hero.image,
  },
  {
    id: 'thermage',
    category: 'lifting-tightening',
    name: thermageData.info.displayTitle,
    description: thermageData.info.description,
    price: '600샷 230만원',
    image: thermageData.hero.image,
  },
  {
    id: 'xerf',
    category: 'lifting-tightening',
    name: xerfData.info.displayTitle,
    description: xerfData.info.description,
    price: '600샷 180만원',
    image: xerfData.hero.image,
  },
  {
    id: 'density-alpha',
    category: 'lifting-tightening',
    name: densityAlphaData.info.displayTitle,
    description: densityAlphaData.info.description,
    price: '알파팁 600샷 180만원',
    image: densityAlphaData.hero.image,
  },
];

export default function ProceduresPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // URL에서 filter 파라미터 읽기
  const filterParam = searchParams.get('filter');
  const initialCategory: Category = filterParam && FILTER_TO_CATEGORY[filterParam] 
    ? FILTER_TO_CATEGORY[filterParam] 
    : 'volume';
  
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);

  // URL 파라미터가 변경되면 selectedCategory 업데이트
  useEffect(() => {
    const filterParam = searchParams.get('filter');
    const category: Category = filterParam && FILTER_TO_CATEGORY[filterParam]
      ? FILTER_TO_CATEGORY[filterParam]
      : 'volume';
    setSelectedCategory(category);
  }, [searchParams]);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    const filter = CATEGORY_TO_FILTER[category];
    
    if (filter) {
      router.push(`/procedures?filter=${filter}`);
    } else {
      router.push('/procedures');
    }
  };

  const filteredProcedures = PROCEDURES.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-[#f4f0ec] min-h-full pb-10">
      {/* 헤더 & 필터 */}
      <div className="bg-white px-5 pt-8 pb-6 border-b border-[#483C32]/5">
        <h2 className="text-[28px] font-bold text-[#483C32] tracking-tight mb-2">시술 안내</h2>
        <p className="text-[#483C32]/60 text-[15px] font-medium leading-relaxed mb-6">
          오드의원의 전문 의료진이 직접 설계한 맞춤형 시술을 만나보세요.
          <br className="hidden sm:block" />
          당신의 고민에 꼭 맞는 솔루션을 찾아드립니다.
        </p>

        {/* 카테고리 필터 */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-[#483C32] text-white shadow-md shadow-[#483C32]/20'
                  : 'bg-[#483C32]/5 text-[#483C32]/60 hover:bg-[#483C32]/10 hover:text-[#483C32]'
              }`}
            >
              {CATEGORY_LABELS[category]}
            </button>
          ))}
        </div>
      </div>

      {/* 시술 목록 */}
      <div className="px-5 py-6">
        <div className="grid grid-cols-1 gap-4">
          {filteredProcedures.length > 0 ? (
            filteredProcedures.map((proc) => (
              <motion.div
                key={proc.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => router.push(`/procedures/${proc.id}`)}
              >
                <Card className="flex flex-row h-32 overflow-hidden bg-white hover:bg-[#faf9f8] border border-[#483C32]/5 shadow-sm hover:shadow-md hover:border-[#483C32]/20 transition-all duration-300 cursor-pointer group gap-0 rounded-[20px]">
                  <div className="w-32 h-full flex-shrink-0 bg-gray-100 relative overflow-hidden rounded-l-[20px]">
                    <Image
                      src={proc.image}
                      alt={proc.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center p-4 min-w-0">
                    <h4 className="text-base font-bold text-[#483C32] group-hover:text-black transition-colors duration-300 truncate mb-1">
                      {proc.name}
                    </h4>
                    <p className="text-xs text-[#483C32]/50 line-clamp-2 leading-relaxed">
                      {proc.description}
                    </p>
                    <p className="mt-2 text-[11px] font-bold text-[#483C32]/30 uppercase tracking-wider">
                      {proc.price}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-[#483C32]/40 font-bold">
              해당 카테고리에 등록된 시술이 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
