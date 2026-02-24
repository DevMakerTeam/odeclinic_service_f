import hiloWaveHero from '@/assets/procedures/hilowave/hilowave-hero.png';
import hiloWaveBnaBefore1 from '@/assets/procedures/hilowave/hilowave-bna-before1.png';
import hiloWaveBnaAfter1 from '@/assets/procedures/hilowave/hilowave-bna-after1.png';
import hiloWaveBnaBefore2 from '@/assets/procedures/hilowave/hilowave-bna-before2.png';
import hiloWaveBnaAfter2 from '@/assets/procedures/hilowave/hilowave-bna-after2.png';
import hiloWave3 from '@/assets/procedures/hilowave/hilowave3.png';
import hiloWaveVsFillerChart from '@/assets/procedures/hilowave/hilowave-vs-filler-chart.png';
import treatmentAreas from '@/assets/procedures/common/treatment-areas.png';
import productComparisonChart from '@/assets/procedures/common/product-comparison-chart.png';

export const hiloWaveData = {
  id: 'hilo-wave',

  // Hero Section
  hero: {
    image: hiloWaveHero,
    alt: '힐로웨이브 제품 이미지 사진',
  },

  // Procedure Info Section
  info: {
    title: '자연스럽고 안전한 볼륨 개선, 힐로웨이브',
    displayTitle: '힐로웨이브',
    displayTitleEn: 'HILO WAVE',
    description:
      '힐로웨이브(HILO WAVE)는 고분자 및 저분자 히알루론산(HA) 복합 성분을 활용해, 자연스럽게 볼륨을 채우면서도 수분감 및 탄력까지 개선하는 시술입니다.',
    tags: ['자연스러운볼륨', '탄력개선', 'Dual-HA'],
  },

  // Before & After
  beforeAfter: {
    title: '힐로웨이브 전후',
    pairs: [
      { before: hiloWaveBnaBefore1, after: hiloWaveBnaAfter1, id: 1 },
      { before: hiloWaveBnaBefore2, after: hiloWaveBnaAfter2, id: 2 },
    ],
  },

  // Effects/Points
  effects: [
    {
      pointNumber: '01',
      title: '<span class="highlight">힐로웨이브</span>란,',
      image: hiloWave3,
      imageAlt: '힐로웨이브 제품 컨셉 이미지',
      content: [
        '힐로웨이브는 고분자 + 저분자 히알루론산 복합체로, 얼굴의 꺼진 볼륨을 자연스럽게 채우는 시술입니다.',
        '부작용이 거의 없어서 <span class="text-white bg-[#3F342D] px-1">안전한 시술을 원하시는 분들</span>에게 추천드립니다.',
      ],
    },
    {
      pointNumber: '02',
      title: '<span class="highlight">힐로웨이브와 필러의 차이</span>는 무엇인가요?',
      image: hiloWaveVsFillerChart,
      imageAlt: '필러와 힐로웨이브의 물성 비교',
      content: [
        '둘 다 히알루론산 기반으로 즉각적으로 볼륨을 개선한다는 점은 같습니다.',
        '하지만, 힐로웨이브는 BDDE라는 가교제가 최소한으로 포함되어있어 전통적인 필러에 비해 <span class="text-white bg-[#3F342D] px-1">이물감이나 혈관 폐색 부작용을 일으킬 가능성이 적습니다.</span>',
        '다만, 시술 가능한 부위가 한정적이고, 유지기간이 다소 짧다는 단점이 있습니다.',
      ],
      table: {
        headers: ['', '힐로웨이브', '필러'],
        rows: [
          ['효과시기', '즉각적', '즉각적'],
          ['이물감', '거의 없음', '있을 수 있음'],
          ['부작용', '거의 없음', '혈관 폐색'],
          ['부위', '앞광대, 볼, 팔자', '모든 부위'],
          ['유지기간', '6개월', '1년 전후'],
        ],
      },
    },
    {
      pointNumber: '03',
      title: '힐로웨이브 <span class="highlight">시술 가능한 부위</span>는 어디인가요?',
      image: treatmentAreas,
      imageAlt: '앞볼, 옆볼, 팔자주름 등 힐로웨이브 시술 가능한 부위',
      content: [
        '힐로웨이브는 물성이 묽기 때문에, 이마, 코, 입술 등 모양을 만들고 잡아줘야하는 부위보다는, <span class="text-white bg-[#3F342D] px-1">넓게 꺼져있는 볼, 앞광대 (중안부), 팔자주름 볼륨</span>을 채우기에 좋습니다.',
      ],
    },
    {
      pointNumber: '04',
      title:
        '힐로웨이브와 <span class="highlight">쥬베룩볼륨, 스컬트라, 올리디아는 어떻게 다른가요?</span>',
      image: productComparisonChart,
      imageAlt: '힐로웨이브와 스컬트라, 올리디아, 쥬베룩볼륨 비교',
      content: [
        '모두 넓은 부위의 볼륨을 자연스럽게 채울 때 사용하는 시술들입니다.',
        '하지만 힐로웨이브는 히알루론산 그 자체가 볼륨을 만들기 때문에 <span class="text-white bg-[#3F342D] px-1">시술 직후 즉각적으로 채워지고</span>, 쥬베룩볼륨, 스컬트라, 올리디아 등 PLLA 기반의 콜라겐 합성 촉진제들은 콜라겐 합성에 시간이 필요하기 때문에 효과가 나타날 때까지 수 개월이 소요된다는 차이가 있습니다.',
        '또, 쥬베룩볼륨, 스컬트라, 올리디아의 경우, 결절이라는 부작용이 생길 수도 있죠. <span class="text-white bg-[#3F342D] px-1">힐로웨이브는 결절 등 부작용이 거의 없는 안전한 시술</span>입니다.',
      ],
      comparison: {
        option1: {
          title: '힐로웨이브',
          description: '유지기간이 짧지만,\n즉각적이고 안전한 시술을 원한다면?',
        },
        option2: {
          title: '쥬베룩볼륨, 스컬트라, 올리디아',
          description: '오래가는 효과를 원한다면?',
        },
      },
    },
  ],

  // Maintenance
  maintenance: {
    title: '힐로웨이브 유지기간, 주기',
    content:
      '힐로웨이브의 유지기간은 <span class="text-[#a58d7d] font-bold">6개월 전후</span>입니다.<br />일반적으로 <span class="text-[#a58d7d] font-bold">6개월 간격으로 2회 반복 시술</span>을 권장드립니다.',
  },

  // Pricing
  pricing: {
    title: '힐로웨이브 가격, 비용',
    subtitle: '오드의원 힐로웨이브 가격은 다음과 같습니다.',
    note: '(부가세 별도)',
    items: [
      { name: '힐로웨이브 2cc', price: '60만원' },
      { name: '힐로웨이브 2cc 2회', price: '100만원', highlight: true },
      { name: '힐로웨이브 4cc', price: '100만원' },
      { name: '힐로웨이브 4cc 2회', price: '170만원', highlight: true },
      { name: '힐로웨이브 6cc', price: '140만원' },
      { name: '힐로웨이브 6cc 2회', price: '240만원', highlight: true },
    ],
  },

  // Target Audience
  targetAudience: {
    title: '힐로웨이브 시술 대상',
    subtitle: '이런 분들께 추천해 드립니다',
    items: [
      '중안부 볼륨이 밋밋해서 고민이신 분들',
      '볼꺼짐, 팔자주름이 고민이신 분들',
      '필러보다 안전하고 자연스러운 시술을 원하시는 분들',
      '즉각적인 효과를 원하시는 분들',
      '볼류마이징과 함께 속건조까지 개선하고 싶은 분들',
    ],
  },

  // FAQ
  faq: {
    title: '힐로웨이브 자주 묻는 질문',
    items: [
      {
        q: '힐로웨이브 부위별 용량은 얼마나 필요한가요?',
        a: '일반적으로 한 부위에 2cc가 필요합니다. 하지만 꺼진 정도에 따라 달라질 수 있기 때문에 반드시 집도의와 상담부터하고 결정하시는 것을 추천드립니다.',
      },
      {
        q: '힐로웨이브는 녹일 수 있나요?',
        a: '히알루론산 기반의 시술이기 때문에 필러처럼 언제든지 마음에 안들면 녹일 수 있습니다.',
      },
      {
        q: '과거에 다른 시술을 받았는데, 힐로웨이브를 또 해도 되나요?',
        a: '필러나 쥬베룩볼륨, 스컬트라, 올리디아, 혹은 실리프팅 등 다른 시술을 받은 상태에서도 힐로웨이브 시술은 가능합니다. 하지만 이미 많이 채워져서, 꺼진 부분이 보이지 않을 때는 힐로웨이브 추가 시술을 권장드리지 않습니다.',
      },
      {
        q: '힐로웨이브 통증은 얼마나 있나요?',
        a: '보통 끝이 뭉툭한 캐뉼라를 활용하여 주입합니다. 캐뉼라를 진입시키기 위해 자입점을 마취할 때만 따끔한 정도이며, 시술 중에는 크게 통증이 발생하지 않습니다.',
      },
    ],
  },

  // Related Posts
  relatedPosts: [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjkzOTk5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['힐로웨이브', '스킨부스터'],
      title: '힐로웨이브, 기존 스킨부스터와 무엇이 다른가요?',
      description:
        '기존 히알루론산 필러와 스킨부스터의 장점만을 결합한 힐로웨이브의 특징과 효과에 대해 자세히 알아봅니다.',
      date: '2026.01.20',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1762121903467-8cf5cc423ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwY2FyZSUyMHRyZWF0bWVudCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY5Mzk5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['리프팅', '안티에이징'],
      title: '자연스러운 볼륨을 위한 최적의 선택',
      description:
        '인위적인 느낌 없이 자연스럽게 차오르는 볼륨감을 원하신다면 힐로웨이브가 해답이 될 수 있습니다.',
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

  // Common Sections (데이터만, 컴포넌트는 공통)
  chartImage: hiloWaveVsFillerChart,
  treatmentAreasImage: treatmentAreas,
  productComparisonImage: productComparisonChart,
  
  // 힐로웨이브 전용 이미지들
  images: {
    hiloWave3,
  },
};
