'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import hiloWaveHero from '@/assets/procedures/hilowave/hilowave-hero.png';
import juvelookHero from '@/assets/procedures/juvelook/juvelook-hero.png';
import sculptraHero from '@/assets/procedures/sculptra/sculptra-hero.png';
import olidiaHero from '@/assets/procedures/olidia/olidia-hero.png';
import radiesseHero from '@/assets/procedures/radiesse/radiesse-hero.jpg';
import ultracolHero from '@/assets/procedures/ultracol/ultracol-hero.png';

// Mock Data
type Category = '볼륨' | '리프팅' | '타이트닝' | '스킨부스터' | '프라이빗 바디 센터' | '웨딩';

const CATEGORIES: Category[] = [
  '볼륨',
  '리프팅',
  '타이트닝',
  '스킨부스터',
  '프라이빗 바디 센터',
  '웨딩'
];

interface Procedure {
  id: string;
  category: Category;
  name: string;
  description: string;
  price: string;
  image: any;
}

const PROCEDURES: Procedure[] = [
  {
    id: 'hilo-wave',
    category: '볼륨',
    name: '힐로웨이브',
    description: '고분자 및 저분자 히알루론산(HA) 복합 성분으로 자연스러운 볼륨과 탄력을 개선합니다.',
    price: '1회 60만원',
    image: hiloWaveHero,
  },
  {
    id: 'juvelook-volume',
    category: '볼륨',
    name: '쥬베룩 볼륨',
    description: '자가 콜라겐 생성을 유도하는 PDLLA와 히알루론산(HA)이 결합된 스킨부스터입니다.',
    price: '1병 49만원',
    image: juvelookHero,
  },
  {
    id: 'sculptra',
    category: '볼륨',
    name: '스컬트라',
    description: 'FDA 승인 PLLA 성분으로 자가 콜라겐 합성을 유도하여 자연스럽고 오래가는 볼륨을 만듭니다.',
    price: '1병 69만원',
    image: sculptraHero,
  },
  {
    id: 'olidia',
    category: '볼륨',
    name: '올리디아',
    description: '안전성과 효과를 모두 잡은 구형 PLLA 콜라겐 촉진제로 자연스러운 볼륨과 탄력을 개선합니다.',
    price: '1병 59만원',
    image: olidiaHero,
  },
  {
    id: 'radiesse',
    category: '볼륨',
    name: '레디어스',
    description: 'CaHA 기반의 콜라겐 재생 촉진제로 팔자주름을 개선하고 즉각적인 볼륨 효과를 제공합니다.',
    price: '1병 85만원',
    image: radiesseHero,
  },
  {
    id: 'ultracol',
    category: '볼륨',
    name: '울트라콜 200',
    description: 'PDO 기반의 안전한 콜라겐부스터로 눈밑 등 얇은 부위에도 시술 가능하며 탄력을 개선합니다.',
    price: '1병 49만원',
    image: ultracolHero,
  }
];

export default function ProceduresPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('볼륨');
  const router = useRouter();

  const filteredProcedures = PROCEDURES.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-5 md:px-10 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">시술 안내</h1>
      
      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredProcedures.length > 0 ? (
          filteredProcedures.map((proc) => (
            <motion.div
              key={proc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => router.push(`/procedures/${proc.id}`)}
            >
              <Card className="flex flex-row h-32 overflow-hidden bg-white hover:bg-[#faf9f8] border border-[#483C32]/10 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group gap-0">
                <div className="w-32 h-full flex-shrink-0 bg-gray-100 relative overflow-hidden">
                  <Image
                    src={proc.image}
                    alt={proc.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center p-4 min-w-0">
                  <div className="mb-1">
                    <h4 className="text-base font-bold text-[#483C32] group-hover:text-[#ab9178] transition-colors duration-300 truncate">
                      {proc.name}
                    </h4>
                  </div>
                  <p className="text-xs text-[#483C32]/60 line-clamp-2 leading-relaxed">
                    {proc.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-400">
            해당 카테고리에 등록된 시술이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}
