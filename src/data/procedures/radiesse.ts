import radiesseHero from '@/assets/procedures/radiesse/radiesse-hero.jpg';
import radiesseBefore1 from '@/assets/procedures/radiesse/radiesse-before1.gif';
import radiesseAfter1 from '@/assets/procedures/radiesse/radiesse-after1.png';
import radiesseBefore2 from '@/assets/procedures/radiesse/radiesse-before2.png';
import radiesseAfter2 from '@/assets/procedures/radiesse/radiesse-after2.png';
import radiesse1 from '@/assets/procedures/radiesse/radiesse-1.png';
import radiesse2 from '@/assets/procedures/radiesse/radiesse-2.png';
import radiesse3 from '@/assets/procedures/radiesse/radiesse-3.png';
import radiesseTreatmentAreas from '@/assets/procedures/radiesse/radiesse-treatment-areas.png';

export const radiesseData = {
  id: 'radiesse',

  // Hero Section
  hero: {
    image: radiesseHero,
    alt: '팔자주름 개선에 사용되는 콜라겐 재생 촉진제 레디어스(Radiesse) 제품 사진',
  },

  // Procedure Info Section
  info: {
    title: '팔자주름 개선 시술, 왜 레디어스인가? 효과부터 부작용, 주의사항까지',
    displayTitle: '레디어스',
    displayTitleEn: 'Radiesse',
    description:
      '깊어진 팔자주름이 고민이라면? 콜라겐 재생을 유도하는 레디어스 시술 효과를 확인해 보세요. 시술 전 꼭 알아야 할 효과, 후기부터 부작용까지 알기 쉽게 정리했습니다.',
    tags: ['팔자주름', '콜라겐합성촉진', 'CaHA'],
  },

  // Before & After
  beforeAfter: {
    title: '레디어스 전후',
    pairs: [
      { before: radiesseBefore1, after: radiesseAfter1, id: 1 },
      { before: radiesseBefore2, after: radiesseAfter2, id: 2 },
    ],
  },

  // Special Sections (레디어스 고유 컨텐츠)
  specialSections: {
    cahaCollagen: {
      pointNumber: '01',
      title: 'CaHA의 <span class="highlight">콜라겐 및 엘라스틴</span> 생성 유도',
      image: radiesse1,
      imageAlt: '레디어스의 칼슘 성분(CaHA) 입자와 PCL, PLA 입자 비교 이미지',
      imageSource: 'https://radiesse.com/',
      content: [
        '레디어스는 인체의 뼈, 치아와 동일한 미네랄 성분인 칼슘(CaHA) 기반의 제제입니다.',
        '레디어스는 생체 적합성이 뛰어나 다른 콜라겐 합성 촉진제들과 달리 염증 반응을 크게 일으키지 않으면서도 <span class="text-white bg-[#3F342D] px-1">안정적으로 콜라겐 및 엘라스틴 합성을 유도</span>합니다.',
      ],
    },

    gelMatrix: {
      pointNumber: '02',
      title: '겔 매트릭스가 <span class="highlight">콜라겐이 차오를 공간을 확보</span>해준다.',
      image: radiesse2,
      imageAlt: '레디어스 시술 후 콜라겐 재생으로 인한 피부 속 변화',
      imageSource: 'https://pubmed.ncbi.nlm.nih.gov/38390986/',
      imageSourceText:
        'A systematic review of Radiesse (calcium hydroxylapatite): evidence and recommendations for the body',
      content: [
        '레디어스는 생리식염수가 아닌, 겔 매트릭스에 충전되어있어서 꺼진 부위에 주입하면 직접 볼륨을 채워줍니다.',
        '그리고 수 개월에 걸쳐 겔 매트릭스가 흡수되면서 그 자리에 <span class="text-white bg-[#3F342D] px-1">콜라겐 및 엘라스틴이 합성되며 볼륨을 대체</span>합니다.',
      ],
    },

    dilutionRatio: {
      pointNumber: '03',
      title: '<span class="highlight">희석 비율</span>에 따라 효과가 달라진다.',
      image: radiesse3,
      imageAlt: '레디어스의 희석 비율에 따른 효과 차이 비교',
      imageCaption: '희석 비율에 따라 달라지는 효과',
      content: [
        '레디어스는 희석을 적게하면 볼륨 효과가 커지고, 희석을 많이 할수록 피부 탄력 개선 효과가 커집니다.',
        '오드의원에서는 1회 시술 시에도 <span class="text-white bg-[#3F342D] px-1">목적에 따라 최대 2가지 비율로 희석</span>하여 효과를 극대화합니다.',
      ],
    },

    treatmentAreas: {
      pointNumber: '04',
      title: '레디어스 <span class="highlight">시술 가능한 부위</span>는 어디인가요?',
      image: radiesseTreatmentAreas,
      imageAlt: '팔자주름, 입가, 마리오네트 주름 등 레디어스 시술 가능한 부위',
      content: [
        '레디어스는 <span class="text-white bg-[#3F342D] px-1">팔자주름, 입가, 마리오네트 주름</span>을 개선하는 시술입니다.',
      ],
    },
  },

  // Maintenance
  maintenance: {
    title: '레디어스 유지기간, 주기',
    content:
      '레디어스의 유지기간은 <span class="text-[#a58d7d] font-bold">1년 반 ~ 2년</span>입니다.<br />레디어스는 4개월 간격으로 2~3회 시술 받고나서, 1년 반 ~ 2년마다 1회씩 리터치 받는 것을 권장드립니다.',
  },

  // Pricing
  pricing: {
    title: '레디어스 가격, 비용',
    subtitle: '오드의원 레디어스 가격은 다음과 같습니다.',
    note: '(부가세 별도)',
    items: [
      { name: '레디어스 1병 1회', price: '85만원' },
      { name: '레디어스 1병 2회', price: '150만원', highlight: true },
    ],
  },

  // Target Audience
  targetAudience: {
    title: '레디어스 시술 대상',
    subtitle: '이런 분들께 추천해 드립니다',
    items: [
      '팔자주름, 입가 탄력이 고민이신 분들',
      '필러에 대해 거부감이 크신 분들',
      '즉각적인 개선과 유지기간 둘 다 놓치고 싶지 않은 분들',
      '볼류마이징과 함께 탄력까지 개선하고 싶은 분들',
    ],
  },

  // FAQ
  faq: {
    title: '레디어스 자주 묻는 질문',
    items: [
      {
        q: '레디어스와 쥬베룩볼륨, 스컬트라의 차이는?',
        a: '레디어스는 CaHA(칼슘) 기반으로 즉각적인 볼륨 효과와 함께 콜라겐 재생을 유도합니다. 쥬베룩볼륨과 스컬트라는 PDLLA/PLLA 기반으로 시간이 지나며 서서히 효과가 나타나는 차이가 있습니다. 레디어스는 겔 매트릭스가 직접 볼륨을 채워주기 때문에 시술 직후부터 효과를 느낄 수 있습니다.',
      },
      {
        q: '레디어스 부작용은 어떤 것이 있나요?',
        a: '레디어스는 생체 적합성이 뛰어나 다른 콜라겐 합성 촉진제에 비해 염증 반응이 적은 편입니다. 하지만 시술 후 일시적인 붓기, 멍, 압통이 나타날 수 있으며, 드물게 결절이 발생할 수 있습니다.',
      },
    ],
  },

  // Related Posts
  relatedPosts: [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjkzOTk5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['레디어스', 'CaHA'],
      title: '레디어스, CaHA로 안전하게 팔자주름 개선',
      description:
        '칼슘 기반의 레디어스로 염증 반응 없이 안정적으로 콜라겐을 재생시키는 방법을 알아봅니다.',
      date: '2026.01.28',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1762121903467-8cf5cc423ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwY2FyZSUyMHRyZWF0bWVudCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY5Mzk5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['팔자주름', '콜라겐'],
      title: '즉각적인 효과와 지속력, 레디어스의 장점',
      description: '겔 매트릭스로 즉시 볼륨을 채우고 콜라겐 재생까지, 레디어스의 이중 효과를 소개합니다.',
      date: '2026.01.23',
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

  // 레디어스 전용 이미지들
  images: {
    radiesse1,
    radiesse2,
    radiesse3,
    treatmentAreas: radiesseTreatmentAreas,
  },
};
