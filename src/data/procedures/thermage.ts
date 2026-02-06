import thermageHero from '@/assets/procedures/thermage/thermage-hero.png';
import thermageBefore1 from '@/assets/procedures/thermage/thermage-before1.png';
import thermageAfter1 from '@/assets/procedures/thermage/thermage-after1.png';
import thermageBefore2 from '@/assets/procedures/thermage/thermage-before2.png';
import thermageAfter2 from '@/assets/procedures/thermage/thermage-after2.png';
import thermage1 from '@/assets/procedures/thermage/thermage1.png';
import thermage21 from '@/assets/procedures/thermage/thermage2-1.png';
import thermage22 from '@/assets/procedures/thermage/thermage2-2.png';
import thermage3 from '@/assets/procedures/thermage/thermage3.png';
import ebdLayer from '@/assets/procedures/thermage/EBDlayer.png';

export const thermageData = {
  id: 'thermage',

  // Hero Section
  hero: {
    image: thermageHero,
    alt: '써마지 장비 컨셉컷',
  },

  // Procedure Info Section
  info: {
    title: '검증된 오리지널 고주파 타이트닝, 써마지 FLX',
    displayTitle: '써마지',
    displayTitleEn: 'Thermage',
    description:
      '피부 탄력을 개선하며, 처짐을 예방하는 오리지널 타이트닝 시술 써마지. 써마지의 효과, 통증, 그리고 울쎄라와의 차이점까지. 한 눈에 알기쉽게 정리했습니다.',
    tags: ['RF', '확실한타이트닝', '탄력개선'],
  },

  // Before & After
  beforeAfter: {
    title: '써마지 전후',
    pairs: [
      { before: thermageBefore1, after: thermageAfter1, id: 1 },
      { before: thermageBefore2, after: thermageAfter2, id: 2 },
    ],
  },

  // Special Sections (써마지 고유 컨텐츠)
  specialSections: {
    collagenRemodeling: {
      pointNumber: '01',
      title: '진피 내 콜라겐 리모델링을 통한 <span class="highlight">탄력 개선과 처짐 예방</span>',
      image: thermage1,
      imageAlt: '울쎄라의 리프팅과 써마지의 타이트닝 기전 차이',
      imageCaption: '울쎄라의 리프팅 효과 vs 써마지의 타이트닝 효과',
      content: [
        '써마지는 고주파 에너지를 진피층에 골고루 전달하여, 콜라겐 수축과 리모델링을 유도합니다.',
        '그 결과, <span class="text-white bg-[#3F342D] px-1">피부결, 주름이 개선되고, 더 처지지 않도록 예방하는 효과</span>가 있습니다.',
        '이미 처진 부위를 직접 수축시키는 울쎄라와는 차이가 있죠.',
      ],
      reference: {
        text: 'Histological and ultrastructural evaluation of the effects of a radiofrequency-based nonablative dermal remodeling device: a pilot study',
        url: 'https://pubmed.ncbi.nlm.nih.gov/14967794/',
      },
    },

    effectPerception: {
      pointNumber: '02',
      title: '써마지 <span class="highlight">효과가 없다고 느끼는 이유</span>',
      image1: thermage21,
      image1Alt: '써마지 효과에 대한 네이버 연관 검색어들',
      image2: thermage22,
      image2Alt: '시술 전후 비교 상담 중인 오드의원 김도훈 원장',
      image2Caption: '오드의원의 시술 전후 비교 상담 시스템',
      intro: '간혹 써마지를 받고 효과가 없다고 느끼시는 분들이 있습니다.',
      reasons: [
        {
          number: '(1)',
          title: '효과에 대한 오해',
          description:
            '써마지가 울쎄라처럼 처진 부분을 직접 리프팅한다고 생각하신다면, 효과가 없다고 느낄 수 있습니다.<br />타이트닝은 피부 층의 변화이기 때문에 윤곽이 개선되지는 않습니다.',
        },
        {
          number: '(2)',
          title: '점진적으로 나타나는 변화',
          description:
            '콜라겐 리모델링 과정은 6개월에 걸쳐서 서서히 나타나기 때문에 거울을 보고 체감하기는 어렵습니다.<br />따라서 시술 전후로 피부진단기 사진을 촬영하고 효과를 객관적으로 비교해주는 병원을 찾아가시는 것이 좋습니다.',
        },
      ],
    },

    painReduction: {
      pointNumber: '03',
      title: '써마지 <span class="highlight">통증을 최소화하는 방법</span>',
      image: thermage3,
      imageAlt: '에어녹스 질소마취 장비 사진',
      imageCaption: '비수면 진정 마취 시스템, 에어녹스',
      content: [
        '써마지에는 강한 쿨링 시스템이 적용되어있지만, 그럼에도 불구하고 통증이 수반됩니다.',
        '수면마취를 하는 방법도 존재하지만, 안전상의 이유, 그리고 시술 중 움직임 때문에 추천드리지는 않습니다.',
        '만약 써마지 통증이 걱정되신다면, 에어녹스 질소마취를 통해 보다 편안하게 받는 방법도 존재합니다.',
        '의식이 있기 때문에 <span class="text-white bg-[#3F342D] px-1">수면마취보다 상대적으로 안전하게 통증을 줄일 수 있습니다.</span>',
      ],
    },
  },

  // Maintenance
  maintenance: {
    title: '써마지 유지기간, 주기',
    content:
      '써마지의 콜라겐 리모델링 효과는 <span class="text-[#a58d7d] font-bold">2년 이상</span> 지속됩니다.<br />탄력 개선과 안티에이징 효과를 극대화하기 위해 써마지는 약 <span class="text-[#a58d7d] font-bold">1년 주기</span>로 받는 것을 권장드립니다.',
  },

  // Pricing
  pricing: {
    title: '써마지 가격, 비용',
    subtitle: '오드의원 써마지 가격은 다음과 같습니다.',
    note: '(부가세 별도)',
    items: [
      { name: '써마지 600샷', price: '230만원', highlight: true },
      { name: '써마지 900샷', price: '270만원' },
    ],
  },

  // Target Audience
  targetAudience: {
    title: '써마지 시술 대상',
    subtitle: '이런 분들께 추천해 드립니다',
    items: [
      '피부 탄력이 많이 떨어져있는 분들',
      '꾸준히 관리하여 자연스러운 안티에이징을 원하시는 분들',
      '잔주름, 피부결을 함께 개선하고 싶은 분들',
      '오랜기간 수많은 연구를 통해 검증된 시술을 원하시는 분들',
    ],
  },

  // FAQ
  faq: {
    title: '써마지 자주 묻는 질문',
    items: [
      {
        q: '써마지 샷수는 얼마나 필요한가요?',
        a: '고주파 시술은 예열 (preheating) 과정을 통해 어느 정도 열이 올라와야 그 때부터 본격적인 콜라겐 리모델링이 일어납니다. 따라서 300샷과 600샷의 유효샷수는 단순 2배가 아니라, 그 이상입니다. 따라서 가격 대비 효과를 고려했을 때, 600샷 이상 받는 것을 추천드립니다.',
      },
      {
        q: '어린 나이인 20대부터 써마지를 받아도 되나요?',
        a: '써마지는 처짐을 예방하는 효과가 있기 때문에, 어렸을 때부터 받을수록 더 좋습니다.',
      },
      {
        q: '써마지 효과는 언제부터 나타나나요?',
        a: '시술 직후부터 콜라겐 리모델링이 시작되지만, 본격적으로 변화를 느낄 수 있는 시기는 2~3개월 후부터입니다.',
      },
      {
        q: '써마지와 덴서티, 세르프의 차이는 무엇인가요?',
        a: '써마지는 검증된 오리지널 고주파 장비이고, 덴서티와 세르프는 후발 주자입니다.\n\n덴서티 알파팁은 모노폴라 + 바이폴라 고주파를 활용해 타이트닝 효과를 극대화한 시술입니다.\n\n세르프는 깊은 층까지 에너지를 전달하여 타이트닝 효과 뿐만 아니라, 리프팅 효과도 기대할 수 있는 시술입니다.',
        image: ebdLayer,
        imageAlt: 'EBD 장비별 에너지 침투 깊이',
        afterImageText: '모두 장단점이 있기 때문에 나에게 가장 적합한 시술이 무엇인지는 경험이 많은 집도의와 상담을 통해서 결정하시는 것이 좋습니다.',
      },
      {
        q: '써마지 부작용은 무엇인가요?',
        a: '써마지는 울쎄라와 달리 지방층까지 에너지가 전달되기 어렵기 때문에 볼패임 부작용 걱정은 없습니다.\n\n다만 간혹 화상이 생겨 물집이 잡히는 경우가 있습니다. 이 경우 병원에 내원하셔서 색소침착이 남지 않도록 처치를 받을 필요가 있습니다.',
      },
    ],
  },

  // Related Posts
  relatedPosts: [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjkzOTk5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['써마지', 'RF'],
      title: '써마지 FLX, 검증된 오리지널 고주파',
      description:
        '20년 이상 검증된 오리지널 고주파 장비 써마지 FLX의 안전성과 효과에 대해 알아봅니다.',
      date: '2026.01.20',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1762121903467-8cf5cc423ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwY2FyZSUyMHRyZWF0bWVudCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY5Mzk5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['타이트닝', '콜라겐리모델링'],
      title: '써마지로 피부 탄력 개선하기',
      description: '진피층 콜라겐 리모델링으로 2년 이상 지속되는 탄력 개선 효과를 경험하세요.',
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

  // 써마지 전용 이미지들
  images: {
    mechanism: thermage1,
    effectPerception1: thermage21,
    effectPerception2: thermage22,
    airnox: thermage3,
    ebdLayer,
  },
};
