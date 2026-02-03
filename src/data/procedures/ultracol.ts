import ultracolHero from '@/assets/procedures/ultracol/ultracol-hero.png';
import ultracolBefore from '@/assets/procedures/ultracol/ultracol-before.png';
import ultracolAfter from '@/assets/procedures/ultracol/ultracol-after.png';
import ultracol1 from '@/assets/procedures/ultracol/ultracol1.png';
import ultracolPart from '@/assets/procedures/ultracol/ultracolpart.png';
import ultracolCannulaAward from '@/assets/procedures/ultracol/ultracol-cannula-award.png';

export const ultracolData = {
  id: 'ultracol',

  // Hero Section
  hero: {
    image: ultracolHero,
    alt: '눈밑 등 피부 탄력을 개선하는 울트라콜 200 제품 이미지 컨셉컷',
  },

  // Procedure Info Section
  info: {
    title: '눈밑에도 시술 가능한 안전한 PDO 기반 콜라겐부스터, 울트라콜 200',
    displayTitle: '울트라콜 200',
    displayTitleEn: 'Ultracol 200',
    description:
      '콜라겐 합성을 통해 볼륨과 탄력을 개선하고 싶지만, 결절 부작용이 걱정된다면? 팔자는 물론, 눈밑 시술도 가능한 울트라콜 200 시술 효과와 후기, 부작용까지 꼼꼼하게 확인해보세요.',
    tags: ['PDO', '안전성', '콜라겐부스터'],
  },

  // Before & After
  beforeAfter: {
    title: '울트라콜 200 전후',
    pairs: [{ before: ultracolBefore, after: ultracolAfter, id: 1 }],
  },

  // Special Sections (울트라콜 고유 컨텐츠)
  specialSections: {
    pdoComponent: {
      pointNumber: '01',
      title: '쉽게 분해되는 <span class="highlight">미세구형 PDO</span> 성분',
      image: ultracol1,
      imageAlt: '6개월만에 쉽게 분해되는 울트라콜의 미세구형 PDO 입자',
      imageSource: 'https://pubmed.ncbi.nlm.nih.gov/37103107/',
      imageSourceText:
        'Bio-characteristics and Efficacy Analysis of Biodegradable Poly Dioxanone Dermal Filler in a Mouse Model and Humans',
      content: [
        'PDO (폴리디옥사논) 성분은 수술 시 사용하는 봉합사 (녹는실)의 재료가 되는 성분입니다.',
        '체내에 1~2년 동안 남아 계속해서 콜라겐을 만들어내는 PLA 제제들과 달리, PDO는 <span class="text-white bg-[#3F342D] px-1">6개월 전후로 분해되고 흡수</span>됩니다.',
        '따라서 결절 및 육아종 부작용 리스크가 낮고 상대적으로 안전합니다.',
      ],
    },

    underEyeTreatment: {
      pointNumber: '02',
      title: '피부가 얇은 <span class="highlight">눈밑에도 시술이 가능</span>하다.',
      image: ultracolPart,
      imageAlt: '울트라콜 200 시술 가능한 부위들',
      content: [
        '눈밑은 피부가 얇아서 결절이나 뭉침이 생겼을 때, 잘 드러나보이는 부위입니다.',
        '따라서 PLA 제제보다는 <span class="text-white bg-[#3F342D] px-1">결절 리스크가 낮은 울트라콜 200이 적합</span>합니다.',
        '울트라콜 200은 이마, 눈밑, 볼, 팔자, 입가 등 거의 모든 부위에 시술이 가능합니다.',
      ],
    },

    cannulaTechnique: {
      pointNumber: '03',
      title: '결절 부작용을 최소화하는 <span class="highlight">캐뉼라 테크닉</span>',
      image: ultracolCannulaAward,
      imageAlt: '오드의원 울트라콜 공식 인증패 사진',
      imageCaption: '2025 울트라콜 시술 탑 클리닉, 오드의원',
      content: [
        '오드의원은 2024년, 2025년 연속 <span class="text-white bg-[#3F342D] px-1">울트라콜 사용 TOP3 병원</span>으로 선정되었습니다.',
        '오드의원 의료진은 압도적인 시술 케이스를 바탕으로, 숙련된 캐뉼라 테크닉을 통해 결절을 최소화합니다.',
      ],
    },
  },

  // Maintenance
  maintenance: {
    title: '울트라콜 200 유지기간, 주기',
    content:
      '울트라콜 200의 유지기간은 <span class="text-[#a58d7d] font-bold">약 1년</span>입니다.<br />울트라콜 200은 한 달 간격으로 3회 시술 후, 1년마다 1회씩 리터치 받는 것을 추천드립니다.',
  },

  // Pricing
  pricing: {
    title: '울트라콜 200 가격, 비용',
    subtitle: '오드의원 울트라콜 200 가격은 다음과 같습니다.',
    note: '(부가세 별도)',
    items: [
      { name: '울트라콜 200 1병 1회', price: '49만원' },
      { name: '울트라콜 200 1병 3회', price: '135만원', highlight: true },
      { name: '울트라콜 200 2병 1회', price: '79만원' },
      { name: '울트라콜 200 2병 3회', price: '215만원', highlight: true },
    ],
  },

  // Target Audience
  targetAudience: {
    title: '울트라콜 200 시술 대상',
    subtitle: '이런 분들께 추천해 드립니다',
    items: [
      '볼류마이징과 함께 탄력까지 개선하고 싶은 분들',
      '필러에 대한 거부감이 크신 분들',
      '쥬베룩볼륨, 스컬트라, 올리디아 결절이 걱정되시는 분들',
    ],
  },

  // FAQ
  faq: {
    title: '울트라콜 200 자주 묻는 질문',
    items: [
      {
        q: '울트라콜 200 효과는 언제부터 나타나나요?',
        a: '시술 후 약 1개월 뒤부터 콜라겐 합성이 시작되어, 6개월까지 대부분의 효과가 나타납니다.',
      },
      {
        q: '울트라콜 200 용량은 얼마가 적당한가요?',
        a: '만약 한 부위만 채운다면, 한 병으로 적당합니다. 하지만 두 부위 이상 혹은 풀페이스를 기준으로 하면 1회 시술 당 두 병을 추천드립니다.',
      },
      {
        q: '울트라콜 200 시술 후 주의사항이 있나요?',
        a: '울트라콜 200은 시술 후 붓기가 있는 편입니다. 결절 리스크가 적기 때문에 마사지는 하지 않는 것이 좋습니다. 또한 염증 반응을 유발할 수 있는 격한 운동, 사우나, 음주 등은 최소 일주일은 삼가시는 게 좋습니다.',
      },
    ],
  },

  // Related Posts
  relatedPosts: [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjkzOTk5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['울트라콜', 'PDO'],
      title: '울트라콜 200, 눈밑에도 안전한 콜라겐부스터',
      description:
        'PDO 기반으로 결절 리스크를 낮춰 눈밑, 이마 등 얇은 부위에도 시술 가능한 울트라콜의 특징을 알아봅니다.',
      date: '2026.01.30',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1762121903467-8cf5cc423ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwY2FyZSUyMHRyZWF0bWVudCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY5Mzk5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['콜라겐', '탄력'],
      title: '안전하게 콜라겐 재생, 울트라콜의 장점',
      description:
        '6개월만에 분해되는 PDO로 부작용 걱정 없이 볼륨과 탄력을 개선하는 울트라콜 200을 소개합니다.',
      date: '2026.01.25',
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

  // 울트라콜 전용 이미지들
  images: {
    ultracol1,
    ultracolPart,
    cannulaAward: ultracolCannulaAward,
  },
};
