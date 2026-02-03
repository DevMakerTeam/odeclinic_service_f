import undereyeFillerHero from '@/assets/procedures/undereye-filler/undereye-filler-hero.png';
import undereyeFillerBefore from '@/assets/procedures/undereye-filler/undereye-filler-before.png';
import undereyeFillerAfter from '@/assets/procedures/undereye-filler/undereye-filler-after.png';
import eyelight1 from '@/assets/procedures/undereye-filler/eyelight1.png';
import eyelight2 from '@/assets/procedures/undereye-filler/eyelight2.png';
import eyelightCompare from '@/assets/procedures/undereye-filler/eyelight-compare.png';

export const undereyeFillerData = {
  id: 'undereye-filler',

  // Hero Section
  hero: {
    image: undereyeFillerHero,
    alt: '레스틸렌 아이라이트 제품 컨셉컷',
  },

  // Procedure Info Section
  info: {
    title: '유일한 FDA 승인 눈밑꺼짐 개선 필러, 레스틸렌 아이라이트',
    displayTitle: '눈밑꺼짐 필러',
    displayTitleEn: 'Undereye filler (Restylane eyelight)',
    description:
      '수술 없이 꺼진 눈밑을 효과적으로 채우고 싶다면? 유일하게 FDA 승인을 받은 눈밑꺼짐 전용 필러, 레스틸렌 아이라이트의 특징, 전후 사진, 부작용까지 알기 쉽게 정리했습니다.',
    tags: ['눈밑꺼짐', '다크서클', '히알루론산필러'],
  },

  // Before & After
  beforeAfter: {
    title: '눈밑꺼짐 필러 전후',
    pairs: [{ before: undereyeFillerBefore, after: undereyeFillerAfter, id: 1 }],
  },

  // Special Sections (눈밑꺼짐 필러 고유 컨텐츠)
  specialSections: {
    effectiveness: {
      pointNumber: '01',
      title: '눈밑꺼짐을 채우는 <span class="highlight">가장 확실한 방법</span>',
      image: eyelight1,
      imageAlt: '아시아 여성의 눈밑 꺼짐 예시 이미지',
      imageCaption: '눈밑 피부는 매우 얇아서 정교한 시술이 필요',
      content: [
        '눈밑은 구조적으로 복잡하고 피부가 얇기 때문에, <span class="text-white bg-[#3F342D] px-1">조금만 과하게 채워져도 티가 날 수 있습니다.</span>',
        '따라서 예측이 어려운 콜라겐 촉진제보다는, 집도의가 원하는 만큼 0.01cc 단위로 정교한 주입이 가능한 필러 시술을 권유드립니다.',
      ],
    },

    stability: {
      pointNumber: '02',
      title: '<span class="highlight">시간이 지나도 변형이 적은</span> 레스틸렌 아이라이트',
      image: eyelight2,
      imageAlt: '눈밑 필러 물성에 따른 뭉침 현상 차이 모식도',
      imageSource: 'https://pubmed.ncbi.nlm.nih.gov/38573527/',
      imageSourceText:
        'A Multicenter, Randomized, Evaluator-Blinded Study to Examine the Safety and Effectiveness of Hyaluronic Acid Filler in the Correction of Infraorbital Hollows',
      content: [
        '눈밑에 사용하던 기존의 필러들은 잘 퍼지는 물성을 가지고 있었습니다.',
        '시술 하기엔 편하지만, 입자들끼리 서로 뭉치려는 성질 때문에 시간이 지나며 뭉치는 현상이 발생하기도 했습니다.',
        '레스틸렌 아이라이트는 입자가 매우 작으면서도 탄성값이 좋아서 서로 뭉치려고 하기보다는, <span class="text-white bg-[#3F342D] px-1">피부에 달라붙어서 쉽게 변형되지 않습니다.</span>',
      ],
    },

    fatMasking: {
      pointNumber: '03',
      title: '<span class="highlight">튀어나온 눈밑 지방</span>을 마스킹하는 효과',
      image: eyelightCompare,
      imageAlt: '레스틸렌 아이라이트 시술의 눈밑 지방 마스킹 효과',
      imageCaption: '오드의원 레스틸렌 아이라이트 시술 전후',
      content: [
        "불룩하게 튀어나온 눈밑 지방은 '눈밑지방재배치' 수술을 할 수도 있지만, 심하지 않다면 필러를 사용하여 안보이게 가려볼 수도 있습니다.",
        '필러 시술 후에도 언제든 눈밑지방재배치 수술을 할 수 있어서, 수술이 부담스러운 분들에게 필러를 추천드립니다.',
      ],
    },
  },

  // Maintenance
  maintenance: {
    title: '눈밑꺼짐 필러 유지기간, 주기',
    content:
      '눈밑꺼짐 필러의 유지기간은 <span class="text-[#a58d7d] font-bold">1년 ~ 1년 반</span>입니다.<br />필러는 언제든 추가로 채울 수 있다는 점이 장점이기 때문에, 1년 주기로 리터치 받는 것을 추천드립니다.',
  },

  // Pricing
  pricing: {
    title: '눈밑꺼짐 필러 가격, 비용',
    subtitle: '오드의원 눈밑꺼짐 필러 가격은 다음과 같습니다.',
    note: '(부가세 별도)',
    items: [
      { name: '레스틸렌 아이라이트 0.5cc', price: '45만원', highlight: true },
      { name: '앞광대 필러 (쥬비덤) 1cc', price: '35만원' },
      { name: '앞광대 필러 (레스틸렌) 1cc', price: '40만원' },
    ],
  },

  // Target Audience
  targetAudience: {
    title: '눈밑꺼짐 필러 시술 대상',
    subtitle: '이런 분들께 추천해 드립니다',
    items: [
      '눈밑 꺼짐으로 인한 다크서클을 개선하고 싶은 분들',
      '주변에서 피곤해보인다는 말을 자주 듣는 분들',
      '눈밑 지방 재배치 수술이 부담스러우신 분들',
      '과거 다른 제품으로 시술을 받아봤지만 불만족스러웠던 분들',
    ],
  },

  // FAQ
  faq: {
    title: '눈밑꺼짐 필러 자주 묻는 질문',
    items: [
      {
        q: '필러는 위험하지 않나요?',
        a: '많은 분들이 필러는 위험하고, 자가콜라겐 합성 촉진제는 안전하다고 생각합니다. 하지만 꼭 그렇지는 않습니다. 오히려 콜라겐 합성 촉진제는 문제가 생겼을 때 녹일 수 없지만, 필러는 언제든지 녹이고 수정이 가능합니다.\n\n간혹 필러가 이동하거나 흘러내린다고 생각하시는 분들도 계십니다. 적절한 층에 잘 주입한다면 이동하는 일은 거의 없습니다.',
      },
      {
        q: '눈밑 필러 대신 울트라콜 200은 어떤가요?',
        a: '울트라콜 200은 비교적 결절 리스크가 낮은 안전한 콜라겐 합성 촉진제입니다. 따라서 필러에 대한 거부감이 크신 분들이나, 혹은 피부 탄력이 너무 떨어져있어서 눈밑 필러를 하기 어려운 경우에는 울트라콜 200을 추천드리기도 합니다.\n\n정확한 건 경험이 풍부한 집도의와 상담을 통해 결정하시는 것이 좋습니다.',
      },
      {
        q: '앞광대 필러를 함께 시술하는 이유는 무엇인가요?',
        a: '눈밑이 꺼진 분들은 대부분 앞광대 (앞볼)도 함께 꺼져있는 경우가 많습니다. 되도록 함께 채우는 것이 조화롭고 자연스러운 개선이 가능하기 때문에 함께 시술하는 것을 권유드립니다. 물론 간혹 눈밑만 꺼져있는 분들도 계시긴합니다.',
      },
      {
        q: '눈밑꺼짐 필러 시술 후 멍, 붓기는 얼마나 가나요?',
        a: '붓기는 거의 없습니다. 멍은 생길 수 있으며, 1~2주 정도 남습니다.',
      },
    ],
  },

  // Related Posts
  relatedPosts: [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjkzOTk5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['눈밑꺼짐', '필러'],
      title: '눈밑꺼짐 필러, FDA 승인받은 레스틸렌 아이라이트',
      description:
        '유일하게 FDA 승인을 받은 눈밑 전용 필러로, 시간이 지나도 변형이 적고 자연스러운 효과를 제공합니다.',
      date: '2026.01.30',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1762121903467-8cf5cc423ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwY2FyZSUyMHRyZWF0bWVudCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY5Mzk5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['다크서클', '눈밑'],
      title: '눈밑 다크서클, 필러로 개선 가능할까?',
      description:
        '꺼진 눈밑으로 생긴 그림자형 다크서클은 필러 시술로 효과적으로 개선할 수 있습니다.',
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

  // 눈밑꺼짐 필러 전용 이미지들
  images: {
    eyelight1,
    eyelight2,
    eyelightCompare,
  },
};
