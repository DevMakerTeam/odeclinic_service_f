import coolsoniqHero from '@/assets/procedures/coolsoniq/coolsoniq-hero.png';
import coolsoniqBefore from '@/assets/procedures/coolsoniq/coolsoniq-before.png';
import coolsoniqAfter from '@/assets/procedures/coolsoniq/coolsoniq-after.png';
import coolsoniqPoint1 from '@/assets/procedures/coolsoniq/point-1.png';
import coolsoniqPoint2 from '@/assets/procedures/coolsoniq/point-2.png';
import coolsoniqPoint3 from '@/assets/procedures/coolsoniq/point-3.png';

export const coolsoniqData = {
  id: 'coolsoniq',

  // Hero Section
  hero: {
    image: coolsoniqHero,
    alt: '쿨소닉 장비 컨셉컷',
  },

  // Procedure Info Section
  info: {
    title: '통증은 적지만 효과는 뛰어난 HIFU 리프팅, 쿨소닉',
    displayTitle: '쿨소닉',
    displayTitleEn: 'Coolsoniq',
    description:
      '표피 냉각 시스템을 통해 통증을 최소화 하면서도 강력한 출력으로 리프팅 효과를 극대화한 HIFU 시술, 쿨소닉. 울쎄라의 통증이 부담스러우셨던 분들에게 추천드립니다.',
    tags: ['HIFU', '적은통증', '팔자주름', '브이라인'],
  },

  // Before & After
  beforeAfter: {
    title: '쿨소닉 전후',
    pairs: [{ before: coolsoniqBefore, after: coolsoniqAfter, id: 1 }],
  },

  // Effects/Points
  effects: {
    painMinimization: {
      pointNumber: '01',
      title: '표피 냉각 시스템을 통한 <span class="highlight">통증 최소화</span>',
      image: coolsoniqPoint1,
      imageAlt: '쿨소닉의 표피 냉각 원리',
      imageCaption: '특허받은 쿨링 시스템, 쿨소닉',
      reference: {
        text: 'coolsoniq.co.kr',
        url: 'https://coolsoniq.co.kr/',
      },
      content: [
        '쿨소닉은 울쎄라와 동일한 HIFU (고강도 집속 초음파) 리프팅 장비입니다.',
        '<span class="text-white bg-[#3F342D] px-1">특허받은 어플리케이터</span>를 통해 표피를 냉각하여 통증 걱정 없이 효과적인 리프팅이 가능합니다.',
      ],
    },

    penApplicator: {
      pointNumber: '02',
      title: '<span class="highlight">펜타입 어플리케이터</span>로 구석구석 확실하게',
      image: coolsoniqPoint2,
      imageAlt: '쿨소닉의 펜타입 어플리케이터',
      imageCaption: '정교한 시술이 가능한 쿨소닉의 펜타입 어플리케이터',
      content: [
        '기존 울쎄라 등의 어플리케이터는 표면적이 넓고 여백이 많아 구석구석 시술하기 어려웠다면, 쿨소닉의 경우 펜타입으로 출시되어 <span class="text-white bg-[#3F342D] px-1">마치 조각하듯 정교한 시술이 가능합니다.</span>',
        '한끗 차이가 만들어내는 디테일을 경험해보시길 바랍니다.',
      ],
    },

    effectiveAreas: {
      pointNumber: '03',
      title: '쿨소닉 효과 좋은 부위',
      image: coolsoniqPoint3,
      imageAlt: '쿨소닉 시술 범위',
      content: [
        '쿨소닉은 <span class="text-white bg-[#3F342D] px-1">눈썹 (눈꺼풀), 팔자주름, 볼처짐, 이중턱</span>에 시술 가능하며, 특히 기존의 HIFU 장비로는 디테일하게 시술하기 어려웠던 팔자주름 위 지방 처짐에 유용합니다.',
      ],
    },
  },

  // Maintenance
  maintenance: {
    title: '쿨소닉 유지기간, 주기',
    content:
      '쿨소닉 유지기간은 <span class="text-[#a58d7d] font-bold">6개월 ~ 12개월</span>입니다.<br />따라서 짧으면 6개월, 길면 <span class="text-[#a58d7d] font-bold">1년 주기</span>로 받는 것을 추천드립니다.',
  },

  // Pricing
  pricing: {
    title: '쿨소닉 가격, 비용',
    subtitle: '오드의원 쿨소닉 가격은 다음과 같습니다.',
    note: '(부가세 별도)',
    items: [
      { name: '쿨소닉 5000샷', price: '110만원' },
      { name: '쿨소닉 8000샷', price: '160만원', highlight: true },
      { name: '쿨소닉 10000샷', price: '190만원' },
    ],
  },

  // Target Audience
  targetAudience: {
    title: '쿨소닉 시술 대상',
    subtitle: '이런 분들께 추천해 드립니다',
    items: [
      '통증이 적은 리프팅 시술을 원하시는 분들',
      '팔자주름, 볼처짐, 이중턱이 고민이신 분들',
      '울쎄라 효과를 극대화하길 원하시는 분들',
    ],
  },

  // FAQ
  faq: {
    title: '쿨소닉 자주 묻는 질문',
    items: [
      {
        q: '통증이 적으면 효과가 떨어지는 거 아닌가요?',
        a: '그렇지 않습니다. 쿨소닉은 강한 열 응고점을 만들어 울쎄라에 버금가는 리프팅 효과를 기대할 수 있습니다.',
      },
      {
        q: '쿨소닉은 몇 샷 받아야하나요?',
        a: '처짐이 심하지 않은 20, 30대 분들은 5000샷을 추천드립니다. 하지만 처짐이 진행되었거나 심한 분들은 8000샷 혹은 10000샷을 권유드리기도 합니다.',
      },
      {
        q: '효과는 언제부터 나타나나요?',
        a: '효과는 바로 나타나지만, 쿨소닉 시술 후 약간의 붓기가 발생하여 체감하기 어렵습니다. 1~2주 정도 지나고 붓기가 빠지게 되면 처진 부분이 개선된 모습을 확인하실 수 있습니다.',
      },
      {
        q: '쿨소닉도 볼패임이 발생할 수 있나요?',
        a: '물론입니다. 그렇기 때문에 꺼질 수 있는 부위를 잘 디자인하고 진행하는 것이 필수적입니다.',
      },
    ],
  },

  // Related Posts
  relatedPosts: [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjkzOTk5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['쿨소닉', 'HIFU'],
      title: '쿨소닉 vs 울쎄라, 어떤 차이가 있을까요?',
      description:
        '동일한 HIFU 원리를 사용하지만 통증과 정교함에서 차이를 보이는 두 장비를 비교 분석합니다.',
      date: '2026.01.20',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1762121903467-8cf5cc423ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwY2FyZSUyMHRyZWF0bWVudCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY5Mzk5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['리프팅', '팔자주름'],
      title: '팔자주름, 쿨소닉으로 효과적으로 개선하세요',
      description: '펜타입 어플리케이터로 세밀한 부위까지 집중 시술이 가능한 쿨소닉의 장점을 알아봅니다.',
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
};
