import emfaceHero from '@/assets/procedures/emface/emface-hero.png';
import emfaceBefore1 from '@/assets/procedures/emface/emface-before-1.png';
import emfaceAfter1 from '@/assets/procedures/emface/emface-after-1.png';
import emfaceBefore2 from '@/assets/procedures/emface/emface-before-2.png';
import emfaceAfter2 from '@/assets/procedures/emface/emface-after-2.png';
import point1 from '@/assets/procedures/emface/point-1.png';
import point2 from '@/assets/procedures/emface/point-2.png';
import point3 from '@/assets/procedures/emface/point-3.png';

export const emfaceData = {
  id: 'emface',

  // Hero Section
  hero: {
    image: emfaceHero,
    alt: '엠페이스 장비 컨셉컷',
  },

  // Procedure Info Section
  info: {
    title: '통증과 부작용 걱정 없이 중안부 처짐을 효과적으로 개선하는, 엠페이스 리프팅',
    displayTitle: '엠페이스',
    displayTitleEn: 'EMFACE',
    description:
      '기존 울쎄라, 써마지와 달리 근육 탄성을 회복하여 처짐을 개선하는 엠페이스 리프팅. 통증과 다운타임, 부작용이 거의 없고 중안부 처짐에 특화되어 있습니다. 엠페이스의 실제 효과부터 가격까지 오드의원에서 알아보세요.',
    tags: ['HIFES', '중안부축소', '근육탄성'],
  },

  // Before & After
  beforeAfter: {
    title: '엠페이스 전후',
    pairs: [
      { before: emfaceBefore1, after: emfaceAfter1, id: 1 },
      { before: emfaceBefore2, after: emfaceAfter2, id: 2 },
    ],
  },

  // Special Sections (엠페이스 고유 컨텐츠)
  specialSections: {
    muscleLifting: {
      pointNumber: '01',
      image: point1,
      imageAlt: '엠페이스의 중안부 볼륨 회복 효과',
      imageCaption: '엠페이스 시술 후 중안부 볼륨의 증가 (3개월 후 평균 1.27ml의 체적 증가)',
      content: [
        '엠페이스는 고강도 전자기 자극(HIFES)을 통해 인대와 근막, 피부에 부착되어있는 근육의 탄성을 강화합니다.',
        '기존의 장비들로 효과가 아쉬웠던 <span class="text-white bg-[#3F342D] px-1">중안부 리프팅을 원하시는 분들</span>, 혹은 <span class="text-white bg-[#3F342D] px-1">추가적인 효과를 원하시는 분들</span>에게 추천드립니다.',
      ],
      reference: {
        text: 'Remodeling of facial soft tissue induced by simultaneous application of HIFES and synchronized radiofrequency provides nonsurgical lift of facial soft tissues',
        url: 'https://pubmed.ncbi.nlm.nih.gov/38235951/',
      },
    },

    noDowntime: {
      pointNumber: '02',
      image: point2,
      imageAlt: '엠페이스 리프팅 시술 중인 모습',
      imageCaption: '통증과 다운타임이 거의 없는 엠페이스 리프팅',
      content: [
        '엠페이스는 전통적인 리프팅 장비들처럼 강한 열 에너지를 가해 조직의 수축을 유도하는 기전이 아니기 때문에 통증과 다운타임이 크지 않습니다.',
        '<span class="text-white bg-[#3F342D] px-1">일상생활에 지장없이 편안하게</span> 받을 수 있습니다.',
      ],
    },

    collagenRF: {
      pointNumber: '03',
      image: point3,
      imageAlt: '엠페이스 시술 후 콜라겐 및 엘라스틴 밀도 변화',
      imageCaption: '콜라겐, 엘라스틴 밀도 증가',
      content: [
        '고강도 전자기 자극 (HIFES)와 함께 나오는 고주파 (RF) 에너지를 통해 콜라겐 리모델링도 기대할 수 있습니다.',
        '그 결과 <span class="text-white bg-[#3F342D] px-1">진피 밀도가 증가하고 피부 주름이 개선</span>됩니다.',
      ],
      reference: {
        text: 'Treatment with synchronized radiofrequency and facial muscle stimulation: Histologic analysis of human skin for changes in collagen and elastin fibers',
        url: 'https://pubmed.ncbi.nlm.nih.gov/38468421/',
      },
    },
  },

  // Maintenance
  maintenance: {
    title: '엠페이스 유지기간, 주기',
    content:
      '엠페이스 리프팅은 <span class="text-[#a58d7d] font-bold">7일 간격으로 4~6회</span>가 한 사이클입니다.<br />한 사이클 시술 시 효과는 <span class="text-[#a58d7d] font-bold">9~12개월</span> 유지됩니다.<br />1년 주기로 받는 것을 추천드립니다.',
  },

  // Pricing
  pricing: {
    title: '엠페이스 가격, 비용',
    subtitle: '오드의원 엠페이스 가격은 다음과 같습니다.',
    note: '(부가세 별도)',
    items: [
      { name: '엠페이스 1회', price: '80만원' },
      { name: '엠페이스 4회', price: '240만원', highlight: true },
      { name: '엠페이스 6회', price: '320만원' },
    ],
  },

  // Target Audience
  targetAudience: {
    title: '엠페이스 시술 대상',
    subtitle: '이런 분들께 추천해 드립니다',
    items: [
      '중안부 처짐이 고민인 분들',
      '통증과 다운타임이 적은 시술을 원하시는 분들',
      '울쎄라, 써마지 등을 받았지만 추가적인 효과를 원하시는 분들',
    ],
  },

  // FAQ
  faq: {
    title: '엠페이스 자주 묻는 질문',
    items: [
      {
        q: '엠페이스로 중안부 길이가 줄어드나요?',
        a: "'중안부 축소 리프팅'이라고 알려져있지만, 실제로 얼굴 길이가 줄어들 수는 없습니다.\n\n중안부는 중력에 의해 처지면서 길어보이게 되는데, 엠페이스 시술 후 처진 볼륨이 리프팅되면서 중안부가 다시 짧아보이게 되는 것입니다.",
      },
      {
        q: '효과는 언제부터 나타나나요?',
        a: '직후부터 나타나기 시작하지만, 최대 효과는 마지막 세션으로부터 3개월 이후로 알려져있습니다.',
      },
      {
        q: '엠페이스와 함께 받으면 좋은 시술은 어떤게 있나요?',
        a: '중안부 볼류마이징을 위한 필러 시술, 그리고 팔자 위 볼륨을 줄여주는 여러가지 리프팅 시술들 (세르프, 쿨소닉 등)을 병행하시면 좋습니다.',
      },
    ],
  },

  // Related Posts
  relatedPosts: [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjkzOTk5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['엠페이스', 'HIFES'],
      title: '엠페이스 리프팅, 중안부 처짐의 해답',
      description:
        '고강도 전자기 자극(HIFES)으로 근육 탄성을 회복하여 중안부 처짐을 효과적으로 개선하는 엠페이스 리프팅을 소개합니다.',
      date: '2026.02.10',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1762121903467-8cf5cc423ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwY2FyZSUyMHRyZWF0bWVudCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY5Mzk5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['리프팅', '중안부축소'],
      title: '울쎄라·써마지와 엠페이스, 무엇이 다를까?',
      description:
        '열에너지 기반 리프팅과 HIFES 기반 근육 탄성 회복의 차이, 내게 맞는 시술을 선택하는 방법을 알아봅니다.',
      date: '2026.02.05',
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1767966769495-dbb5e14cab5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwZXF1aXBtZW50JTIwYWVzdGhldGljfGVufDF8fHx8MTc2OTM5OTk4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['시술정보', '가격안내'],
      title: '2026년 오드의원 엠페이스 가격 안내',
      description: '오드의원 엠페이스 리프팅의 투명하고 합리적인 가격 정책을 공개합니다.',
      date: '2026.01.20',
    },
  ],

  // 엠페이스 전용 이미지들
  images: {
    point1,
    point2,
    point3,
  },
};
