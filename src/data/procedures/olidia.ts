import olidiaHero from '@/assets/procedures/olidia/olidia-hero.png';
import olidiaBefore1 from '@/assets/procedures/olidia/olidia-before1.png';
import olidiaAfter1 from '@/assets/procedures/olidia/olidia-after1.png';
import olidiaBefore2 from '@/assets/procedures/olidia/olidia-before2.png';
import olidiaAfter2 from '@/assets/procedures/olidia/olidia-after2.png';
import olidiaBefore3 from '@/assets/procedures/olidia/olidia-before3.png';
import olidiaAfter3 from '@/assets/procedures/olidia/olidia-after3.png';
import olidiaParticle from '@/assets/procedures/olidia/olidia-particle.png';
import collagenChart from '@/assets/procedures/common/collagen-chart.png';
import treatmentAreas from '@/assets/procedures/common/treatment-areas.png';
import injectionTechnique from '@/assets/procedures/common/injection-technique.png';

export const olidiaData = {
  id: 'olidia',

  // Hero Section
  hero: {
    image: olidiaHero,
    alt: 'OLIDIA Background',
  },

  // Procedure Info Section
  info: {
    title: '안전성과 효과 두마리 토끼를 잡은 콜라겐 촉진제, 올리디아',
    displayTitle: '올리디아',
    displayTitleEn: 'Olidia',
    description:
      '쥬베룩은 아쉽고, 스컬트라는 부담스럽다면? 안전성과 효과를 모두 검증받은 PLLA 촉진제 오드의원 올리디아! 자연스러운 볼륨감을 원하시는 분들께 추천드립니다.',
    tags: ['콜라겐합성유도', '자연스러운볼륨', 'PLLA'],
  },

  // Before & After
  beforeAfter: {
    title: '올리디아 전후',
    pairs: [
      { before: olidiaBefore1, after: olidiaAfter1, id: 1 },
      { before: olidiaBefore2, after: olidiaAfter2, id: 2 },
      { before: olidiaBefore3, after: olidiaAfter3, id: 3 },
    ],
  },

  // Special Sections (올리디아 고유 컨텐츠)
  specialSections: {
    sphericalPLLA: {
      pointNumber: '01',
      title: '안전성과 효과를 모두 잡은 <span class="highlight">구형 PLLA</span>',
      image: olidiaParticle,
      imageAlt: '올리디아 구형 입자',
      content: [
        '올리디아는 콜라겐 합성 효과를 극대화한 PLLA 이면서도, 구형 입자로 만들어져 결절 리스크를 낮췄습니다.',
        '안전성과 효과, 두 마리 토끼를 모두 잡은 올리디아.',
        '<span class="text-white bg-[#3F342D] px-1">쥬베룩은 아쉽고, 스컬트라는 부담스러우셨던 분들</span>에게 추천드립니다.',
      ],
    },

    skinElasticity: {
      pointNumber: '02',
      title: '볼륨 뿐만 아니라, <span class="highlight">피부 탄력도</span> 좋아진다.',
      image: collagenChart,
      imageAlt: '올리디아 시술 후 피부층의 변화',
      imageCaption: '올리디아 시술 후 피부층의 변화',
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
      title: '올리디아 <span class="highlight">시술 가능한 부위</span>는 어디인가요?',
      image: treatmentAreas,
      imageAlt: '올리디아 시술 가능 부위',
      content: [
        '올리디아는 콜라겐 합성 촉진제로, <span class="text-white bg-[#3F342D] px-1">넓게 꺼진 볼, 앞광대 (중안부), 팔자주름 볼륨</span>을 채우기에 좋습니다.',
      ],
    },
  },

  // Maintenance
  maintenance: {
    title: '올리디아 유지기간, 주기',
    content:
      '올리디아의 유지기간은 <span class="text-[#a58d7d] font-bold">1년 반 ~ 2년</span>입니다.<br class="hidden md:block" />올리디아는 한 달 간격으로 3회 시술 받고나서, 1년 반 ~ 2년마다 1회씩 리터치 받는 것을 권장드립니다.',
  },

  // Pricing
  pricing: {
    title: '올리디아 가격, 비용',
    subtitle: '오드의원 올리디아 가격은 다음과 같습니다.',
    note: '(부가세 별도)',
    items: [
      { name: '올리디아 1병 1회', price: '59만원' },
      { name: '올리디아 1병 3회', price: '159만원', highlight: true },
    ],
  },

  // Target Audience
  targetAudience: {
    title: '올리디아 시술 대상',
    subtitle: '이런 분들께 추천해 드립니다',
    items: [
      '볼꺼짐, 팔자주름이 고민이신 분들',
      '필러에 대해 거부감이 크신 분들',
      '오래가는 효과를 원하시는 분들',
      '볼류마이징과 함께 탄력까지 개선하고 싶은 분들',
      '효과와 안전성 모두 중요하게 생각하시는 분들',
    ],
  },

  // FAQ
  faq: {
    title: '올리디아 자주 묻는 질문',
    items: [
      {
        q: '올리디아와 쥬베룩볼륨, 스컬트라의 차이는?',
        a: '쥬베룩볼륨은 가성비가 좋지만 콜라겐 합성 효과가 아쉽고, 스컬트라는 콜라겐 합성 효과가 좋고 안전성이 뛰어나지만 가성비가 떨어집니다. 올리디아는 콜라겐 합성 효과, 안전성 (결절 위험성), 가성비 모두 밸런스를 갖춘 제품입니다.',
      },
      {
        q: '올리디아 효과는 언제부터 나타나나요?',
        a: '평균적으로 시술 후 2~3개월 뒤부터 효과가 느껴집니다.',
      },
      {
        q: '올리디아 시술 주기를 꼭 지켜야하나요?',
        a: '사정이 있다면 꼭 한 달 주기를 지키지 않으셔도 됩니다. 시술 주기가 길어지면 전체 치료기간이 길어질 수는 있습니다.',
      },
      {
        q: '올리디아 부작용이 발생하면 어떻게 처치하나요?',
        a: '올리디아 시술 후 결절이 발생한다면, 결절을 작게 만들어주는 약물을 주입하면서 경과를 지켜보는 방법이 있습니다.',
      },
    ],
  },

  // Related Posts
  relatedPosts: [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjkzOTk5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['올리디아', 'PLLA'],
      title: '올리디아, 안전성과 효과를 모두 잡은 콜라겐 시술',
      description:
        '구형 PLLA로 결절 리스크를 낮추고 콜라겐 합성 효과를 극대화한 올리디아의 특징에 대해 알아봅니다.',
      date: '2026.01.25',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1762121903467-8cf5cc423ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwY2FyZSUyMHRyZWF0bWVudCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY5Mzk5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['콜라겐', '볼륨'],
      title: '쥬베룩과 스컬트라 사이, 올리디아의 장점',
      description:
        '가성비와 효과, 안전성까지 모두 갖춘 밸런스형 콜라겐 촉진제 올리디아를 소개합니다.',
      date: '2026.01.20',
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

  // 올리디아 전용 이미지들
  images: {
    particle: olidiaParticle,
    collagenChart,
    treatmentAreas,
    injectionTechnique,
  },
};
