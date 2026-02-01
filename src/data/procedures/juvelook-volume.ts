import juvelookHero from '@/assets/procedures/juvelook/juvelook-hero.png';
import juvelookBefore1 from '@/assets/procedures/juvelook/juvelook-before1.png';
import juvelookAfter1 from '@/assets/procedures/juvelook/juvelook-after1.png';
import juvelookBefore2 from '@/assets/procedures/juvelook/juvelook-before2.png';
import juvelookAfter2 from '@/assets/procedures/juvelook/juvelook-after2.png';
import juvelookBefore3 from '@/assets/procedures/juvelook/juvelook-before3.png';
import juvelookAfter3 from '@/assets/procedures/juvelook/juvelook-after3.png';
import juvelookEffectChart from '@/assets/procedures/juvelook/juvelook-effect-chart.png';
import juvelookCollagenChart from '@/assets/procedures/juvelook/juvelook-collagen-chart.png';
import treatmentAreas from '@/assets/procedures/common/treatment-areas.png';
import vortexMixer from '@/assets/procedures/common/vortex-mixer.png';
import oneBottleUsage from '@/assets/procedures/common/one-bottle-usage.png';
import injectionTechnique from '@/assets/procedures/common/injection-technique.png';

export const juvelookVolumeData = {
  id: 'juvelook-volume',

  // Hero Section
  hero: {
    image: juvelookHero,
    alt: 'JUVELOOK VOLUME Background',
  },

  // Procedure Info Section
  info: {
    title: '자가콜라겐 합성을 통한 볼륨 및 탄력 개선, 쥬베룩볼륨',
    displayTitle: '쥬베룩볼륨',
    displayTitleEn: 'Juvelook Volume',
    description:
      '쥬베룩볼륨 시술, 효과는 극대화하고 부작용 걱정은 덜어내세요.\n오드의원만의 철저한 수화 및 정교한 주입 테크닉과 맞춤 디자인으로 자연스럽게 차오르는 볼륨을 경험해보세요.',
    tags: ['콜라겐합성유도', '자연스러운볼륨', 'PDLLA'],
  },

  // Before & After
  beforeAfter: {
    title: '쥬베룩 볼륨 전후',
    pairs: [
      { before: juvelookBefore1, after: juvelookAfter1, id: 1 },
      { before: juvelookBefore2, after: juvelookAfter2, id: 2 },
      { before: juvelookBefore3, after: juvelookAfter3, id: 3 },
    ],
  },

  // Effects (특수 섹션들 - 쥬베룩만의 고유 컨텐츠)
  specialSections: {
    collagenSynthesis: {
      pointNumber: '01',
      title: '<span class="highlight">자가콜라겐 합성</span>을 통한 자연스러운 볼륨 생성',
      image: juvelookEffectChart,
      imageAlt: 'PDLLA 시술 후 피하지방층 두께 변화',
      imageCaption: 'PDLLA 시술 후, 피하지방층 두께의 변화',
      imageSource:
        'Poly-D,L-Lactic Acid Fillers Increase Subcutaneous Adipose Tissue Volume by Promoting Adipogenesis in Aged Animal Skin (2023, International Journal of Molecular Sciences)',
      content: [
        '쥬베룩볼륨은 PDLLA라는 인체친화적인 성분을 진피와 피하지방층 사이에 주입하는 시술입니다.',
        'PDLLA는 체내에 주입된 뒤 서서히 분해되며 <span class="text-white bg-[#3F342D] px-1">자가콜라겐 합성 및 지방세포 분화, 증식을 유도</span>합니다.',
      ],
    },

    skinElasticity: {
      pointNumber: '02',
      title: '볼륨 뿐만 아니라, <span class="highlight">피부 탄력</span>도 좋아진다.',
      image: juvelookCollagenChart,
      imageAlt: '쥬베룩볼륨 시술 후 피부층의 변화',
      imageCaption: '쥬베룩볼륨 시술 후 피부층의 변화',
      content: [
        '콜라겐은 단순히 꺼진 공간을 채워주는 것 뿐만 아니라, 피부 (진피층) 자체를 개선합니다.',
        '피부 탄력이 개선되며 처짐을 예방해주고, 주름과 피부결도 좋아집니다.',
      ],
    },

    nodulePrevention: {
      pointNumber: '03',
      title: '<span class="highlight">결절 부작용 예방</span>을 위한 3가지 원칙',
      principles: [
        {
          number: '(1)',
          title: '철저한 수화 과정',
          description:
            '입자가 뭉쳐있으면 콜라겐 과다 합성으로 인한 결절 리스크가 높아집니다. 오드의원에서는 <span class="text-white bg-[#3F342D] px-1">볼텍스믹서로 30분 이상 수화</span>하여 결절 발생률을 최소화합니다.',
          image: vortexMixer,
          imageAlt: '볼텍스 믹서 수화 과정',
        },
        {
          number: '(2)',
          title: 'cc가 아닌 한병 단위 사용',
          description:
            '한 바이알을 여러 명에게 사용하는 과정에서 감염 확률이 높아질 수 있고, 이는 곧 결절로 이어질 수 있습니다. 따라서 오드의원에서는 <span class="text-white bg-[#3F342D] px-1">한 병을 온전히 한 분에게 모두 사용</span>하고 남은 양은 폐기하고 있습니다.',
          image: oneBottleUsage,
          imageAlt: '한 병 단위 사용',
        },
        {
          number: '(3)',
          title: '숙련된 주입 테크닉',
          description:
            '입자가 뭉치지 않도록 주입하는 것도 중요합니다. 오드의원 의료진은 풍부한 시술 경험을 바탕으로 개개인의 피부 두께와 조직 상태에 따라 <span class="text-white bg-[#3F342D] px-1">최적의 깊이에 정교하게 주입</span>합니다.',
          image: injectionTechnique,
          imageAlt: '숙련된 주입 테크닉',
        },
      ],
    },

    treatmentAreas: {
      pointNumber: '04',
      title: '쥬베룩볼륨 <span class="highlight">시술 가능한 부위</span>는 어디인가요?',
      image: treatmentAreas,
      imageAlt: '쥬베룩 볼륨 시술 가능 부위',
      content: [
        '쥬베룩볼륨은 콜라겐 합성 촉진제로, <span class="text-white bg-[#3F342D] px-1">넓게 꺼진 볼, 앞광대 (중안부), 팔자주름 볼륨</span>을 채우기에 좋습니다.',
      ],
    },
  },

  // Maintenance
  maintenance: {
    title: '쥬베룩볼륨 유지기간, 주기',
    content:
      '쥬베룩볼륨의 유지기간은 <span class="text-[#a58d7d] font-bold">1년 반 ~ 2년</span>입니다.<br />쥬베룩볼륨은 한 달 간격으로 3회 시술 받고나서, 1년 반 ~ 2년마다 1회씩 리터치 받는 것을 권장드립니다.',
  },

  // Pricing
  pricing: {
    title: '쥬베룩볼륨 가격, 비용',
    subtitle: '오드의원 쥬베룩볼륨 가격은 다음과 같습니다.',
    note: '(부가세 별도)',
    items: [
      { name: '쥬베룩볼륨 1병 1회', price: '49만원' },
      { name: '쥬베룩볼륨 1병 3회', price: '135만원', highlight: true },
    ],
  },

  // Target Audience
  targetAudience: {
    title: '쥬베룩볼륨 시술 대상',
    subtitle: '이런 분들께 추천해 드립니다',
    items: [
      '볼꺼짐, 팔자주름이 고민이신 분들',
      '필러에 대해 거부감이 크신 분들',
      '오래가는 효과를 원하시는 분들',
      '볼류마이징과 함께 탄력까지 개선하고 싶은 분들',
    ],
  },

  // FAQ
  faq: {
    title: '쥬베룩볼륨 자주 묻는 질문',
    items: [
      {
        q: '쥬베룩볼륨 용량은 몇 cc가 적당한가요?',
        a: '부위와 꺼진 정도에 따라 용량이 천차만별이라, 집도의와 상담을 통해 결정하는 것이 좋습니다. 그리고 쥬베룩볼륨은 cc 단위로 시술 받으면, 그 안에 유효 성분이 얼마나 포함되어있는지 알 수 없습니다. 따라서 꼭 한 병을 온전히 사용하는 곳을 찾아가시길 바랍니다.',
      },
      {
        q: '쥬베룩볼륨 결절이 생기면 어떻게 되나요?',
        a: '드문 부작용이지만 결절이 생기면 단단한 조직이 만져집니다. 가벼운 결절은 리프팅 장비로 처치해볼 수 있고, 크고 단단한 결절은 주사 처치가 수차례 필요할 수 있습니다.',
      },
      {
        q: '쥬베룩볼륨을 1회만 받아도 되나요?',
        a: '물론입니다. 꼭 3회를 받지 않아도 1회만큼의 효과가 나타납니다. 하지만 1회만으로 눈에 잘 보이지는 않겠죠.',
      },
      {
        q: '쥬베룩볼륨과 스컬트라, 올리디아는 어떻게 다른가요?',
        a: '쥬베룩볼륨은 PDLLA, 스컬트라와 올리디아는 PLLA 성분입니다. PLLA 입자가 더 뾰족해서 콜라겐 합성을 일으키는 자극이 더 세다고 알려져있습니다. 내 얼굴 상태에 어떤 시술이 더 적합한지는 집도의와 상의해서 결정하시는 것이 좋습니다.',
      },
      {
        q: '쥬베룩볼륨, 눈밑에도 시술 가능한가요?',
        a: '전 추천드리지 않습니다. 콜라겐 합성 유도제는 예측이 어렵다는 점이 큰 단점입니다. 그런데 눈밑은 피부가 얇아서 조금만 과하게 채워져도 티가 나는 부위입니다. 게다가 콜라겐은 녹일 수도 없죠. 따라서 쥬베룩볼륨보다는 0.01cc 단위로 의도한만큼 채울 수 있는 필러를 추천드립니다. (눈밑 전용 레스틸렌 아이라이트 등)',
      },
      {
        q: '쥬베룩볼륨, 이마 시술은 어떤가요?',
        a: '가능은 하지만 모양을 만들어줘야하는 부위라서 필러로 하는 것을 더 추천드립니다.',
      },
    ],
  },

  // Related Posts
  relatedPosts: [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjkzOTk5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['쥬베룩볼륨', '콜라겐'],
      title: '쥬베룩볼륨, 결절 부작용을 예방하려면?',
      description:
        '안전한 쥬베룩볼륨 시술을 위한 3가지 원칙과 오드의원의 세심한 관리 시스템을 소개합니다.',
      date: '2026.01.20',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1762121903467-8cf5cc423ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwY2FyZSUyMHRyZWF0bWVudCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY5Mzk5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['볼륨', '탄력'],
      title: '오래 지속되는 자연스러운 볼륨감',
      description:
        '1년 이상 지속되는 효과, 쥬베룩볼륨으로 자연스러운 볼륨과 탄력을 동시에 개선하세요.',
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

  // 쥬베룩 전용 이미지들
  images: {
    vortexMixer,
    oneBottleUsage,
    injectionTechnique,
    treatmentAreas,
  },
};
