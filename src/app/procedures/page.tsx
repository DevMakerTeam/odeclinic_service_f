'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { hiloWaveData } from '@/data/procedures/hilo-wave';
import { juvelookVolumeData } from '@/data/procedures/juvelook-volume';
import { sculptraData } from '@/data/procedures/sculptra';
import { olidiaData } from '@/data/procedures/olidia';
import { radiesseData } from '@/data/procedures/radiesse';
import { ultracolData } from '@/data/procedures/ultracol';
import { undereyeFillerData } from '@/data/procedures/undereye-filler';

// Mock Data
type Category = '볼륨' | '리프팅' | '타이트닝' | '스킨부스터' | '프라이빗 바디 센터' | '웨딩';

const CATEGORIES: Category[] = [
  '볼륨',
  '리프팅',
  '타이트닝',
  '스킨부스터',
  '프라이빗 바디 센터',
  '웨딩',
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
    name: hiloWaveData.info.displayTitle,
    description: hiloWaveData.info.description,
    price: '1회 60만원',
    image: hiloWaveData.hero.image,
  },
  {
    id: 'juvelook-volume',
    category: '볼륨',
    name: juvelookVolumeData.info.displayTitle,
    description: juvelookVolumeData.info.description,
    price: '1병 49만원',
    image: juvelookVolumeData.hero.image,
  },
  {
    id: 'sculptra',
    category: '볼륨',
    name: sculptraData.info.displayTitle,
    description: sculptraData.info.description,
    price: '1병 69만원',
    image: sculptraData.hero.image,
  },
  {
    id: 'olidia',
    category: '볼륨',
    name: olidiaData.info.displayTitle,
    description: olidiaData.info.description,
    price: '1병 59만원',
    image: olidiaData.hero.image,
  },
  {
    id: 'radiesse',
    category: '볼륨',
    name: radiesseData.info.displayTitle,
    description: radiesseData.info.description,
    price: '1병 85만원',
    image: radiesseData.hero.image,
  },
  {
    id: 'ultracol',
    category: '볼륨',
    name: ultracolData.info.displayTitle,
    description: ultracolData.info.description,
    price: '1병 49만원',
    image: ultracolData.hero.image,
  },
  {
    id: 'undereye-filler',
    category: '볼륨',
    name: undereyeFillerData.info.displayTitle,
    description: undereyeFillerData.info.description,
    price: '0.5cc 45만원',
    image: undereyeFillerData.hero.image,
  },
];

export default function ProceduresPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('볼륨');
  const router = useRouter();

  const filteredProcedures = PROCEDURES.filter((p) => p.category === selectedCategory);

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
