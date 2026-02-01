import sculptraHero from '@/assets/procedures/sculptra/sculptra-hero.png';
import sculptraBefore1 from '@/assets/procedures/sculptra/sculptra-bna-before1.gif';
import sculptraAfter1 from '@/assets/procedures/sculptra/sculptra-bna-after1.gif';
import sculptraBefore2 from '@/assets/procedures/sculptra/sculptra-bna-before2.png';
import sculptraAfter2 from '@/assets/procedures/sculptra/sculptra-bna-after2.png';
import sculptraBefore3 from '@/assets/procedures/sculptra/sculptra-bna-before3.png';
import sculptraAfter3 from '@/assets/procedures/sculptra/sculptra-bna-after3.png';
import sculptraFDA from '@/assets/procedures/sculptra/sculptra-fda.png';
import sculptraCollagenChart from '@/assets/procedures/sculptra/sculptra-collagen-chart.png';
import treatmentAreas from '@/assets/procedures/common/treatment-areas.png';
import oneBottleUsage from '@/assets/procedures/common/one-bottle-usage.png';
import injectionTechnique from '@/assets/procedures/common/injection-technique.png';

export const sculptraData = {
  id: 'sculptra',

  // Hero Section
  hero: {
    image: sculptraHero,
    alt: 'SCULPTRA Background',
  },

  // Procedure Info Section
  info: {
    title: 'FDA 승인 콜라겐 합성 촉진제, 스컬트라',
    displayTitle: '스컬트라',
    displayTitleEn: 'Sculptra',
    description:
      '시간이 흐를수록 자연스럽게 차오르는 볼륨, 오드의원 스컬트라를 만나보세요. FDA 승인을 받은 안전한 PLLA 성분으로 피부 속 콜라겐을 직접 재생시킵니다.',
    tags: ['콜라겐합성유도', '자연스러운볼륨', 'PLLA'],
  },

  // Before & After
  beforeAfter: {
    title: '스컬트라 전후',
    pairs: [
      { before: sculptraBefore1, after: sculptraAfter1, id: 1 },
      { before: sculptraBefore2, after: sculptraAfter2, id: 2 },
      { before: sculptraBefore3, after: sculptraAfter3, id: 3 },
    ],
  },

  // Special Sections (스컬트라 고유 컨텐츠)
  specialSections: {
    pllaCollagen: {
      pointNumber: '01',
      title: 'PLLA의 <span class="highlight">자가콜라겐 합성 유도</span>',
      fdaImage: sculptraFDA,
      content: [
        '스컬트라는 PLLA라는 성분이 체내에 남아 콜라겐 합성을 자극하는 시술입니다. 외부 물질이 아니라 자가콜라겐이 차오르기 때문에 <span class="text-white bg-[#3F342D] px-1">이물감이 적고 자연스럽고 오래간다</span>는 장점이 있습니다.',
        'PLLA는 유일하게 FDA승인과 식약처 허가를 받았고, 오랫동안 사용되어온 만큼 안전성이 확보되어있는 시술입니다.',
      ],
    },

    skinElasticity: {
      pointNumber: '02',
      title: '볼륨 뿐만 아니라, <span class="highlight">피부 탄력도</span> 좋아진다.',
      image: sculptraCollagenChart,
      imageAlt: '스컬트라 시술 후 피부층의 변화',
      imageCaption: '스컬트라 시술 후 피부층의 변화',
      content: [
        '콜라겐은 단순히 꺼진 공간을 채워주는 것 뿐만 아니라, 피부 (진피층) 자체를 개선합니다. 피부 탄력이 개선되며 처짐을 예방해주고, 주름과 피부결도 좋아집니다.',
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
            '입자가 뭉쳐있으면 콜라겐 과다 합성으로 인한 결절 리스크가 높아집니다. 오드의원에서는 <span class="text-white bg-[#3F342D] px-1">24시간 이상 수화</span>하여 결절 발생률을 최소화합니다.',
        },
        {
          number: '(2)',
          title: 'cc가 아닌 한병 단위 사용',
          description:
            '한 바이알을 여러 명에게 사용하는 과정에서 감염 확률이 높아질 수 있고, 이는 곧 결절로 이어질 수 있습니다. 따라서 오드의원에서는 <span class="text-white bg-[#3F342D] px-1">한 병을 온전히 한 분에게 모두 사용</span>하고 남은 양은 폐기하고 있습니다.',
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
      title: '스컬트라 <span class="highlight">시술 가능한 부위</span>는 어디인가요?',
      image: treatmentAreas,
      imageAlt: '스컬트라 시술 가능 부위',
      content: [
        '스컬트라는 콜라겐 합성 촉진제로, <span class="text-white bg-[#3F342D] px-1">넓게 꺼진 볼, 앞광대 (중안부), 팔자주름 볼륨</span>을 채우기에 좋습니다.',
      ],
    },
  },

  // Maintenance
  maintenance: {
    title: '스컬트라 유지기간, 주기',
    content:
      '스컬트라의 유지기간은 <span class="text-[#a58d7d] font-bold">1년 반 ~ 2년</span>입니다.<br class="hidden md:block" />스컬트라는 한 달 간격으로 3회 시술 받고나서, 1년 반 ~ 2년마다 1회씩 리터치 받는 것을 권장드립니다.',
  },

  // Pricing
  pricing: {
    title: '스컬트라 가격, 비용',
    subtitle: '오드의원 스컬트라 가격은 다음과 같습니다.',
    note: '(부가세 별도)',
    items: [
      { name: '스컬트라 1병 1회', price: '69만원' },
      { name: '스컬트라 1병 3회', price: '189만원', highlight: true },
    ],
  },

  // Target Audience
  targetAudience: {
    title: '스컬트라 시술 대상',
    subtitle: '이런 분들께 추천해 드립니다',
    items: [
      '볼꺼짐, 팔자주름이 고민이신 분들',
      '필러에 대해 거부감이 크신 분들',
      '오래가는 효과를 원하시는 분들',
      '볼류마이징과 함께 탄력까지 개선하고 싶은 분들',
      'FDA 승인 받은 안전한 옵션을 원하시는 분들',
    ],
  },

  // FAQ
  faq: {
    title: '스컬트라 자주 묻는 질문',
    items: [
      {
        q: '스컬트라와 쥬베룩볼륨의 차이는 무엇인가요?',
        a: '쥬베룩볼륨과 비교하여 스컬트라의 입자가 더 뾰족한 모양입니다. 따라서 콜라겐 합성 자극이 더 강한 편입니다. 개개인의 상태에 따라 쥬베룩볼륨을 추천드리기도하고, 스컬트라를 추천드리기도 합니다. 이는 경험이 많은 집도의와 상의하여 결정하시는 것이 좋습니다.',
      },
      {
        q: '스컬트라 통증과 붓기는 어느 정도인가요?',
        a: '시술 시 바늘이 아니라 캐뉼라를 활용하기 때문에 통증이 심하지는 않습니다. 마취할 때만 따끔한 정도입니다. 그리고 시술 후 생리식염수로 인한 붓기가 발생하지만, 꺼진 부위가 차오르는 것이기 때문에 어색하지않고, 오히려 붓기가 있을 때의 모습을 더 선호하시는 분들이 많습니다. 붓기는 일주일 내로 거의 다 사라집니다.',
      },
      {
        q: '스컬트라 눈밑에도 시술 가능한가요?',
        a: '추천드리지 않습니다. 눈밑은 피부가 얇기 때문에 콜라겐이 조금만 과도하게 합성되어도 튀어나와보이거나 어색해보일 수 있습니다. 따라서 예측이 가능한 필러를 더 추천드립니다.',
      },
      {
        q: '스컬트라 효과는 언제부터 나타나나요?',
        a: 'PLLA가 주입된 직후부터 콜라겐 합성이 일어나지만, 눈에 보일 정도가 되려면 수 개월이 소요됩니다. 최소 4주가 지나야 조금씩 변화가 나타납니다.',
      },
    ],
  },

  // Related Posts
  relatedPosts: [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjkzOTk5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['스컬트라', 'FDA승인'],
      title: '스컬트라, FDA 승인 받은 안전한 콜라겐 시술',
      description:
        'FDA와 식약처 승인을 받은 유일한 PLLA 성분, 스컬트라의 안전성과 효과에 대해 알아봅니다.',
      date: '2026.01.20',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1762121903467-8cf5cc423ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwY2FyZSUyMHRyZWF0bWVudCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY5Mzk5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['콜라겐', '볼륨'],
      title: '오래 지속되는 자연스러운 볼륨, 스컬트라',
      description: '1년 이상 지속되는 효과, 자가 콜라겐으로 자연스럽게 차오르는 볼륨을 경험하세요.',
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

  // 스컬트라 전용 이미지들
  images: {
    fdaApproval: sculptraFDA,
    collagenChart: sculptraCollagenChart,
    treatmentAreas,
    oneBottleUsage,
    injectionTechnique,
  },
};
