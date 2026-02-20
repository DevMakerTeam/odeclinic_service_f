import xerfHero from '@/assets/procedures/xerf/xerf-hero.png';
import xerfBefore1 from '@/assets/procedures/xerf/xerf-before-1.png';
import xerfAfter1 from '@/assets/procedures/xerf/xerf-after-1.png';
import xerfBefore2 from '@/assets/procedures/xerf/xerf-before-2.png';
import xerfAfter2 from '@/assets/procedures/xerf/xerf-after-2.png';
import point1 from '@/assets/procedures/xerf/point-1.png';
import point2 from '@/assets/procedures/xerf/point-2.jpg';
import point3 from '@/assets/procedures/xerf/point-3.png';
import qna1 from '@/assets/procedures/xerf/qna-1.png';

export const xerfData = {
  id: 'xerf',

  // Hero Section
  hero: {
    image: xerfHero,
    alt: '세르프 장비 컨셉컷',
  },

  // Procedure Info Section
  info: {
    title: '리프팅과 타이트닝을 동시에 개선하는, 세르프 (XERF)',
    displayTitle: '세르프',
    displayTitleEn: 'XERF',
    description:
      '울쎄라의 리프팅과 써마지의 타이트닝을 동시에. 통증과 다운타임을 최소화한 우아한 리프팅, 세르프. 오드의원에서 만나보세요.',
    tags: ['RF', '타이트닝', '리프팅'],
  },

  // Before & After
  beforeAfter: {
    title: '세르프 전후',
    pairs: [
      { before: xerfBefore1, after: xerfAfter1, id: 1 },
      { before: xerfBefore2, after: xerfAfter2, id: 2 },
    ],
  },

  // Special Sections (세르프 고유 컨텐츠)
  specialSections: {
    dualFrequency: {
      pointNumber: '01',
      title: '<span class="highlight">듀얼 주파수</span>를 활용한 타이트닝 + 리프팅',
      image: point1,
      imageAlt: '써마지와 세르프의 에너지 도달 깊이 차이 비교',
      imageCaption: '써마지와 비교하여 상대적으로 깊은 층까지 열 전달이 가능한 세르프',
      content: [
        '세르프는 써마지와 동일한 6.78Mhz 주파수와 더불어, 2Mhz 주파수를 추가적으로 활용하여 깊은 근막층까지 에너지를 전달합니다.',
        '고주파 에너지는 섬유격막을 타고 전달되며, 그 결과 <span class="text-white bg-[#3F342D] px-1">타이트닝 뿐만 아니라 처진 부위를 직접 개선하는 리프팅 효과까지</span> 나타납니다.',
      ],
      reference: {
        text: 'Efficacy of dual‐frequency noninvasive monopolar radiofrequency in skin tightening: Histological evidence',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11180671/',
      },
    },

    operatorDependent: {
      pointNumber: '02',
      title: '세르프는 <span class="highlight">시술자에 따른 효과 차이</span>가 크다',
      image: point2,
      imageAlt: '세르프 시술 중인 오드의원 민경률 원장님',
      content: [
        '단순히 에너지 조절만 진행하는 써마지와 달리, 세르프는 Shallow - Middle - Deep 3단계의 깊이 조절이 가능합니다.',
        '게다가 에너지도 10단계, 쿨링 레벨도 3단계까지 조절이 가능하죠.',
        '환자의 상태에 맞춰서 <span class="text-white bg-[#3F342D] px-1">다양한 커스터마이징이 가능하다</span>는 뜻입니다.',
        '그리고 그만큼 시술자의 숙련도에 따라 결과 차이가 큽니다.',
      ],
      bottomContent: [
        '오드의원은 2025년 전국 세르프 시술량 TOP 10 안에 선정된 공식 인증 클리닉입니다.',
        '오드의원 의료진은 풍부한 경험을 바탕으로 가장 효율적인 시술법을 연구하고 공유합니다.',
      ],
    },

    minimalDowntime: {
      pointNumber: '03',
      title: '<span class="highlight">통증과 다운타임을 최소화</span>한 우아한 리프팅',
      image: point3,
      imageAlt: '세르프 팁 컨셉 이미지',
      imageCaption: '넓은 팁 면적으로 총 에너지 양을 극대화하면서도 통증과 다운타임을 최소화한 세르프',
      content: [
        '세르프는 강력한 쿨링 시스템을 통해 통증을 획기적으로 줄였습니다.',
        '또한 다운타임도 거의 없기 때문에, 바쁜 현대인에게 적합한 시술입니다.',
      ],
    },
  },

  // Maintenance
  maintenance: {
    title: '세르프 유지기간, 주기',
    content:
      '세르프의 리프팅 효과는 <span class="text-[#a58d7d] font-bold">6개월 ~ 1년</span> 정도 유지되지만, 장기적인 탄력 개선 효과는 <span class="text-[#a58d7d] font-bold">2년 이상</span> 지속됩니다.<br />일반적으로 <span class="text-white bg-[#3F342D] px-1">1년 주기로 받는 것을 추천</span>드립니다.',
  },

  // Pricing
  pricing: {
    title: '세르프 가격, 비용',
    subtitle: '오드의원 세르프 가격은 다음과 같습니다.',
    note: '(부가세 별도)',
    items: [
      { name: '세르프 300샷', price: '95만원' },
      { name: '세르프 600샷', price: '180만원', highlight: true },
      { name: '세르프 900샷', price: '260만원' },
    ],
  },

  // Target Audience
  targetAudience: {
    title: '세르프 시술 대상',
    subtitle: '이런 분들께 추천해 드립니다',
    items: [
      '팔자주름, 입가처짐, 무너진 턱선이 고민인 분들',
      '피부 탄력과 처짐을 한 번에 개선하고 싶은 분들',
      '통증과 다운타임이 적은 시술을 원하시는 분들',
    ],
  },

  // FAQ
  faq: {
    title: '세르프 자주 묻는 질문',
    items: [
      {
        q: '세르프 샷수는 얼마나 필요한가요?',
        a: '기본적으로는 타이트닝과 리프팅 효과를 모두 가져가기 위해 600샷을 추천드립니다.\n\n하지만 리프팅 효과만 원하신다면 300샷만 받아볼 수도 있습니다.',
      },
      {
        q: '세르프 효과는 언제부터 나타나나요?',
        a: '시술 직후부터 효과가 보이기 시작하여 2~3개월 째에 최대 효과가 나타납니다.',
      },
      {
        q: '세르프 부작용은 없나요?',
        a: '간혹 화상이나 물집이 잡힐 수 있습니다. 시술 받은 병원에서 처치를 통해 색소침착을 예방하는 것이 중요합니다.',
      },
      {
        q: '써마지, 덴서티, 세르프의 차이는 무엇인가요?',
        a: '세르프와 덴서티는 써마지를 기본으로, 파생 및 발전된 시술이라고 보시면 좋습니다.\n\n세르프는 써마지보다 에너지를 깊게 넣어서 리프팅 효과가 존재하고, 덴서티는 써마지보다 얕은 층에 바이폴라 고주파 에너지를 골고루 전달합니다.',
        image: qna1,
        imageAlt: '덴서티 알파팁, 써마지, 세르프의 깊이 차이 모식도',
        afterImageText: '써마지와 덴서티, 세르프 모두 장단점이 있기 때문에 집도의와 상담을 통해 적합한 옵션을 결정하시는 것이 좋습니다.',
      },
    ],
  },

  // Related Posts
  relatedPosts: [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjkzOTk5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['세르프', 'XERF'],
      title: '세르프, 리프팅과 타이트닝을 동시에',
      description:
        '듀얼 주파수 기술로 깊은 근막층까지 에너지를 전달하는 세르프의 효과에 대해 알아봅니다.',
      date: '2026.01.20',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1762121903467-8cf5cc423ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwY2FyZSUyMHRyZWF0bWVudCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY5Mzk5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['통증최소화', '다운타임'],
      title: '세르프, 통증과 다운타임을 최소화한 우아한 리프팅',
      description: '강력한 쿨링 시스템으로 통증을 줄이고 다운타임을 최소화한 세르프를 경험하세요.',
      date: '2026.01.15',
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1767966769495-dbb5e14cab5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwZXF1aXBtZW50JTIwYWVzdGhldGljfGVufDF8fHx8MTc2OTM5OTk4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['시술정보', '가격안내'],
      title: '2026년 오드의원 시술 가격 정책 안내',
      description:
        '투명하고 합리적인 가격 정책으로 고객님의 아름다움을 책임지는 오드의원의 새로운 가격표를 공개합니다.',
      date: '2026.01.10',
    },
  ],

  // 세르프 전용 이미지들
  images: {
    point1,
    point2,
    point3,
    qna1,
  },
};
