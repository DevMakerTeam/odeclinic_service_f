import densityAlphaHero from '@/assets/procedures/density-alpha/density-alpha-hero.png';
import densityAlphaBefore1 from '@/assets/procedures/density-alpha/density-alpha-before-1.png';
import densityAlphaAfter1 from '@/assets/procedures/density-alpha/density-alpha-after-1.png';
import densityAlphaBefore2 from '@/assets/procedures/density-alpha/density-alpha-before-2.png';
import densityAlphaAfter2 from '@/assets/procedures/density-alpha/density-alpha-after-2.png';
import point1 from '@/assets/procedures/density-alpha/point-1.png';
import point2 from '@/assets/procedures/density-alpha/point-2.png';
import point3 from '@/assets/procedures/density-alpha/point-3.jpg';
import qna1 from '@/assets/procedures/density-alpha/qna-1.png';

export const densityAlphaData = {
  id: 'density-alpha',

  // Hero Section
  hero: {
    image: densityAlphaHero,
    alt: '덴서티 장비 컨셉컷',
  },

  // Procedure Info Section
  info: {
    title: '넓고 촘촘하게 에너지를 전달하는 고주파 타이트닝, 덴서티',
    displayTitle: '덴서티 알파',
    displayTitleEn: 'Density Alpha',
    description:
      '바이폴라 + 모노폴라 고주파로 에너지를 촘촘하게 전달하고 콜라겐 리모델링을 유도하는 덴서티. 덴서티와 써마지의 차이, 알파팁과 일반팁 비교까지. 오드의원에서 한 눈에 보기 쉽게 정리했습니다.',
    tags: ['RF', '타이트닝', '바이폴라+모노폴라'],
  },

  // Before & After
  beforeAfter: {
    title: '덴서티 알파 전후',
    pairs: [
      { before: densityAlphaBefore1, after: densityAlphaAfter1, id: 1 },
      { before: densityAlphaBefore2, after: densityAlphaAfter2, id: 2 },
    ],
  },

  // Special Sections (덴서티 알파 고유 컨텐츠)
  specialSections: {
    bipolarMonopolar: {
      pointNumber: '01',
      title: '<span class="highlight">바이폴라 + 모노폴라</span> 고주파를 이용한 촘촘한 타이트닝',
      image: point1,
      imageAlt: '덴서티 알파의 모노폴라, 바이폴라 순차 조사 모식도',
      imageCaption: '덴서티 알파, 하이에만 적용되는 모노폴라 + 바이폴라 고주파',
      content: [
        '덴서티 알파는 모노폴라 고주파에 더해, 바이폴라 고주파를 순차 조사하여 깊은 층 뿐만 아니라 얕은 층까지 촘촘하게 에너지를 전달합니다.',
        '따라서 <span class="text-white bg-[#3F342D] px-1">피부 속 깊은 탄력 뿐만 아니라, 눈에 보이는 잔주름과 피부결 개선까지</span> 기대할 수 있습니다.',
      ],
    },

    largerElectrode: {
      pointNumber: '02',
      title: '더 커진 전극 사이즈로, <span class="highlight">더 많은 에너지를 전달</span>하는 덴서티 알파',
      image: point2,
      imageAlt: '덴서티 알파팁 컨셉컷',
      imageCaption: '더 커진 전극 사이즈의 덴서티 알파',
      content: [
        '기존의 덴서티 하이의 경우, 전가되는 에너지 양이 아쉽다는 의견이 많았습니다.',
        '하지만 덴서티 알파가 출시되며, 더 커진 전극 사이즈를 통해 많은 양의 에너지를 넣어줄 수 있게 되었습니다.',
      ],
    },

    minimalDowntime: {
      pointNumber: '03',
      title: '<span class="highlight">시술 시간, 통증, 다운타임을 최소화한</span> 편안한 안티에이징',
      image: point3,
      imageAlt: '덴서티 알파 시술 중인 민경률 원장님',
      imageCaption: '편안한 안티에이징, 덴서티 알파',
      content: [
        '덴서티 알파는 600샷 기준으로 25~30분 내외로 시술이 완료되며, 10단계 펄스의 쿨링 시스템을 통해 통증을 최소화했기 때문에 편안하게 받을 수 있다는 점이 장점입니다.',
        '시술 후 붓기나 붉은기 등 다운타임도 길지 않은 편이라, 바쁜 현대인들에게 적합한 시술입니다.',
      ],
    },
  },

  // Maintenance
  maintenance: {
    title: '덴서티 알파 유지기간, 주기',
    content:
      '덴서티 알파 시술 후 콜라겐 합성이 증가하는 시기는 <span class="text-[#a58d7d] font-bold">6개월</span> 가량이지만, 이로 인한 탄력 개선 효과는 <span class="text-[#a58d7d] font-bold">2년 이상</span> 지속됩니다.<br />타이트닝 효과를 극대화하기 위해 평균 <span class="text-[#a58d7d] font-bold">1년 주기</span>로 시술 받는 것을 추천드립니다.',
  },

  // Pricing
  pricing: {
    title: '덴서티 알파 가격, 비용',
    subtitle: '오드의원 덴서티 가격은 다음과 같습니다.',
    note: '(부가세 별도)',
    items: [
      { name: '덴서티 클래식 300샷', price: '75만원' },
      { name: '덴서티 클래식 600샷', price: '150만원' },
      { name: '덴서티 알파팁 300샷', price: '95만원' },
      { name: '덴서티 알파팁 600샷', price: '180만원', highlight: true },
      { name: '덴서티 알파팁 900샷', price: '260만원' },
    ],
  },

  // Target Audience
  targetAudience: {
    title: '덴서티 알파 시술 대상',
    subtitle: '이런 분들께 추천해 드립니다',
    items: [
      '피부 탄력과 함께 잔주름, 피부결을 개선하고 싶은 분들',
      '통증, 다운타임이 적은 시술을 원하시는 분들',
    ],
  },

  // FAQ
  faq: {
    title: '덴서티 알파 자주 묻는 질문',
    items: [
      {
        q: '덴서티와 써마지, 세르프의 차이는 무엇인가요?',
        a: '써마지는 오랫동안 검증된 장비라는 점에서 장점이 있습니다.\n\n세르프는 에너지를 깊게 넣어서 근막층까지 리프팅 할 수 있다는 점이 장점입니다.\n\n반면 덴서티 알파는 피부 얕은 층까지 촘촘하게 에너지를 전달한다는 점이 장점입니다.',
        image: qna1,
        imageAlt: '덴서티 알파, 써마지, 세르프의 깊이 차이 모식도',
        afterImageText: '장비마다 장단점이 있기 때문에 나에게 어떤 시술이 적합한지는 경험이 많은 원장님과 직접 상담을 통해 결정하시는 것이 좋습니다.',
      },
      {
        q: '덴서티 효과는 언제부터 나타나나요?',
        a: '시술 직후부터 콜라겐 합성이 시작되는데, 눈에 보이는 효과가 나타나기까지는 2-3개월 정도가 소요됩니다.',
      },
      {
        q: '덴서티 부작용은 무엇인가요?',
        a: '피부 표면에 화상이나 가벼운 물집이 잡힐 수 있습니다.',
      },
      {
        q: '덴서티 샷수는 몇 샷이 적당한가요?',
        a: '기본적으로는 600샷을 추천드립니다.\n\n만약 50대 이상이거나, 목까지 함께 시술 받으실 때는 900샷도 좋습니다.',
      },
    ],
  },

  // Related Posts
  relatedPosts: [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjkzOTk5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['덴서티', '알파팁'],
      title: '덴서티 알파, 촘촘한 타이트닝의 새로운 기준',
      description:
        '바이폴라 + 모노폴라 고주파로 얕은 층부터 깊은 층까지 촘촘하게 에너지를 전달합니다.',
      date: '2026.01.20',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1762121903467-8cf5cc423ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwY2FyZSUyMHRyZWF0bWVudCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY5Mzk5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['타이트닝', '통증최소화'],
      title: '덴서티, 편안한 안티에이징의 대표 주자',
      description: '시술 시간, 통증, 다운타임을 최소화한 덴서티로 편안한 안티에이징을 경험하세요.',
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

  // 덴서티 알파 전용 이미지들
  images: {
    point1,
    point2,
    point3,
    qna1,
  },
};
