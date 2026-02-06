import ultherapyHero from '@/assets/procedures/ultherapy/ultherapy-hero.png';
import ultherapyBefore1 from '@/assets/procedures/ultherapy/ultherapy-before1.png';
import ultherapyAfter1 from '@/assets/procedures/ultherapy/ultherapy-after1.png';
import ultherapyBefore2 from '@/assets/procedures/ultherapy/ultherapy-before2.png';
import ultherapyAfter2 from '@/assets/procedures/ultherapy/ultherapy-after2.png';
import ultherapyBefore3 from '@/assets/procedures/ultherapy/ultherapy-before3.png';
import ultherapyAfter3 from '@/assets/procedures/ultherapy/ultherapy-after3.png';
import ultheraThermage from '@/assets/procedures/ultherapy/ulthera-thermage.png';
import ultherapy21 from '@/assets/procedures/ultherapy/ultherapy2-1.png';
import ultherapy22 from '@/assets/procedures/ultherapy/ultherapy2-2.png';
import ultherapy3 from '@/assets/procedures/ultherapy/ultherapy3.png';
import ultherapy4 from '@/assets/procedures/ultherapy/ultherapy4.png';

export const ultherapyData = {
  id: 'ultherapy',

  // Hero Section
  hero: {
    image: ultherapyHero,
    alt: '울쎄라 리프팅 장비 컨셉컷',
  },

  // Procedure Info Section
  info: {
    title: '효과가 검증된 고강도 집속 초음파 리프팅, 울쎄라',
    displayTitle: '울쎄라',
    displayTitleEn: 'Ultherapy',
    description:
      '오랜기간 효과가 검증된 확실한 리프팅 시술을 원한다면? 울쎄라의 효과와 통증, 써마지와의 차이점까지. 오드의원에서 알려드리는 울쎄라에 대한 핵심 정보를 꼼꼼히 확인해보세요.',
    tags: ['HIFU', '확실한리프팅', '브이라인'],
  },

  // Before & After
  beforeAfter: {
    title: '울쎄라 전후',
    pairs: [
      { before: ultherapyBefore1, after: ultherapyAfter1, id: 1 },
      { before: ultherapyBefore2, after: ultherapyAfter2, id: 2 },
      { before: ultherapyBefore3, after: ultherapyAfter3, id: 3 },
    ],
  },

  // Special Sections (울쎄라 고유 컨텐츠)
  specialSections: {
    smasLayer: {
      pointNumber: '01',
      title: '깊은 SMAS층까지 열 응고점을 만들어서 <span class="highlight">즉각적인 수축을 유도</span>',
      image: ultheraThermage,
      imageAlt: '울쎄라와 써마지의 작용 기전 차이',
      imageCaption: '울쎄라의 리프팅 효과와 써마지의 타이트닝 효과',
      content: [
        '울쎄라는 고강도 집속 초음파 (HIFU)를 활용해 피부 속 깊은 근막층에 열 응고점을 만들어줍니다.',
        '그 결과 중력에 의해 처져내려온 조직들이 수축하면서, <span class="text-white bg-[#3F342D] px-1">직접적인 리프팅 효과를 기대</span>할 수 있습니다.',
        '반면, 써마지는 피부 탄력을 개선하여 처짐을 예방하는 간접적인 리프팅 시술입니다.',
      ],
      reference: {
        text: 'Evaluation of a microfocused ultrasound system for improving skin laxity and tightening in the lower face',
        url: 'https://pubmed.ncbi.nlm.nih.gov/24990884/',
      },
    },

    thinFace: {
      pointNumber: '02',
      title: '<span class="highlight">얼굴에 살이 없어도</span> 울쎄라가 필요할 수 있다',
      image1: ultherapy21,
      image1Alt: '얼굴 살이 없는 사람의 볼처짐',
      image2: ultherapy22,
      image2Alt: '울쎄라 시술 전 볼패임을 예방하기 위한 디자인',
      image2Caption: '누웠을 때는 꺼진 부위가 잘 보이지 않는다.',
      content: [
        '많은 분들이 얼굴에 살이 없으면 울쎄라를 받지 못한다고 생각하십니다.',
        '하지만 실제로는 <span class="text-white bg-[#3F342D] px-1">얼굴에 살이 없어도 처진 부분이 존재할 수 있고</span>, 이런 경우에는 울쎄라가 필요합니다.',
      ],
      question: '"울쎄라를 하면 볼패임이 더 심해질 수도 있지 않나요?"',
      answer: '<span class="text-white bg-[#3F342D] px-1">중력을 받는 상태에서 디자인</span>을 하고 들어가면, 볼패임을 예방할 수 있습니다.',
    },

    painReduction: {
      pointNumber: '03',
      title: '울쎄라 <span class="highlight">통증을 최소화하는 방법</span>',
      image: ultherapy3,
      imageAlt: '에어녹스 질소마취 장비 사진',
      imageCaption: '비수면 진정 마취 시스템, 에어녹스',
      content: [
        '수면마취는 추천드리지 않습니다.',
        '위험할 뿐더러, 움직임으로 인해 디테일한 시술이 어려워집니다.',
        '그보다는 <span class="text-white bg-[#3F342D] px-1">에어녹스 질소마취</span>를 추천드립니다.',
        '수면마취보다 상대적으로 안전하게 울쎄라 통증을 최소화할 수 있습니다.',
      ],
    },

    effectiveAreas: {
      pointNumber: '04',
      title: '울쎄라 효과 좋은 부위',
      image: ultherapy4,
      imageAlt: '울쎄라 시술 가능 부위 - 눈썹, 팔자주름, 볼처짐, 이중턱',
      content: [
        '울쎄라는 <span class="text-white bg-[#3F342D] px-1">눈썹 (눈꺼풀), 팔자주름, 볼처짐, 이중턱</span>에 효과가 좋습니다.',
      ],
      reference: {
        text: 'High-Intensity Focused Ultrasound for the Treatment of Wrinkles and Skin Laxity in Seven Different Facial Areas',
        url: 'https://pubmed.ncbi.nlm.nih.gov/26719637/',
      },
    },
  },

  // Maintenance
  maintenance: {
    title: '울쎄라 유지기간, 주기',
    content:
      '울쎄라 유지기간은 <span class="text-[#a58d7d] font-bold">6개월 ~ 12개월</span>입니다.<br />따라서 짧으면 6개월, 길면 1년 주기로 받는 것을 추천드립니다.',
  },

  // Pricing
  pricing: {
    title: '울쎄라 가격, 비용',
    subtitle: '오드의원 울쎄라 가격은 다음과 같습니다.',
    note: '(부가세 별도)',
    items: [
      { name: '울쎄라 100샷', price: '35만원' },
    ],
  },

  // Target Audience
  targetAudience: {
    title: '울쎄라 시술 대상',
    subtitle: '이런 분들께 추천해 드립니다',
    items: [
      '눈꺼풀 처짐, 팔자주름, 볼처짐, 이중턱이 고민이신 분들',
      '브이라인을 원하시는 분들',
      '수술 없이 리프팅 효과를 원하시는 분들',
    ],
  },

  // FAQ
  faq: {
    title: '울쎄라 자주 묻는 질문',
    items: [
      {
        q: '울쎄라 샷수는 얼마나 필요한가요?',
        a: '처진 정도, 면적에 따라 개인차가 크지만, 평균적으로 300~600샷을 많이 권유드립니다.',
      },
      {
        q: '어린 나이인 20대부터 울쎄라를 받아도 되나요?',
        a: '어렸을 때 받을 수록 좋습니다. 울쎄라는 직접적인 리프팅 효과 뿐만 아니라, 콜라겐 합성을 통한 처짐 예방효과도 있기 때문입니다.',
      },
      {
        q: '울쎄라 효과는 언제부터 나타나나요?',
        a: '시술 직후 붓기가 발생하여 2주동안 지속됩니다. 2주가 지나고부터 달라붙는 효과가 보이기 시작하고, 2~3개월 째에 최대 효과가 나타납니다. 그 후 서서히 효과가 떨어지며 6~12개월 정도 유지됩니다.',
      },
    ],
  },

  // Related Posts
  relatedPosts: [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjkzOTk5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['울쎄라', 'HIFU'],
      title: '울쎄라, 검증된 고강도 집속 초음파 리프팅',
      description:
        '깊은 SMAS층까지 열 응고점을 만들어 즉각적인 수축을 유도하는 울쎄라의 효과에 대해 알아봅니다.',
      date: '2026.01.20',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1762121903467-8cf5cc423ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwY2FyZSUyMHRyZWF0bWVudCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY5Mzk5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['리프팅', '통증관리'],
      title: '울쎄라 통증, 에어녹스로 안전하게 관리하세요',
      description: '수면마취 없이도 안전하고 편안하게 울쎄라 시술을 받을 수 있습니다.',
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

  // 울쎄라 전용 이미지들
  images: {
    ultheraThermage,
    thinFace1: ultherapy21,
    thinFace2: ultherapy22,
    airnox: ultherapy3,
    treatmentAreas: ultherapy4,
  },
};
