'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import Image from 'next/image';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

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
  imageUrl: string;
}

const PROCEDURES: Procedure[] = [
  {
    id: 'hilo-wave',
    category: '볼륨',
    name: '힐로웨이브',
    description: '고분자 및 저분자 히알루론산(HA) 복합 성분으로 자연스러운 볼륨과 탄력을 개선합니다.',
    price: '1회 60만원',
    imageUrl: 'https://images.unsplash.com/photo-1642844613096-7b743b7d9915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBtZWRpY2FsJTIwbGFzZXIlMjB0cmVhdG1lbnQlMjBtYWNoaW5lJTIwY2xpbmljfGVufDF8fHx8MTc2ODkyMTM5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'juvelook-volume',
    category: '볼륨',
    name: '쥬베룩 볼륨',
    description: '자가 콜라겐 생성을 유도하는 PDLLA와 히알루론산(HA)이 결합된 스킨부스터입니다.',
    price: '1병 49만원',
    imageUrl: 'https://images.unsplash.com/photo-1620755901999-166c6c151efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBza2luJTIwdHJlYXRtZW50JTIwY2xpbmljJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc2OTc3NzAzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'sculptra',
    category: '볼륨',
    name: '스컬트라',
    description: 'FDA 승인 PLLA 성분으로 자가 콜라겐 합성을 유도하여 자연스럽고 오래가는 볼륨을 만듭니다.',
    price: '1병 69만원',
    imageUrl: 'https://images.unsplash.com/photo-1674049406179-d7bf2c263e71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBkZXJtYXRvbG9neSUyMGxhc2VyJTIwcHJvY2VkdXJlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3Njk0OTk5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'olidia',
    category: '볼륨',
    name: '올리디아',
    description: '안전성과 효과를 모두 잡은 구형 PLLA 콜라겐 촉진제로 자연스러운 볼륨과 탄력을 개선합니다.',
    price: '1병 59만원',
    imageUrl: 'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjkzOTk5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080'
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
              whileHover={{ y: -5 }}
              className="cursor-pointer"
              onClick={() => router.push(`/procedures/${proc.id}`)}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow border-none shadow-sm">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={proc.imageUrl}
                    alt={proc.name}
                    width={1080}
                    height={192}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{proc.name}</CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">
                    {proc.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-0 text-lg font-semibold text-gray-900">
                  {proc.price}
                </CardFooter>
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
