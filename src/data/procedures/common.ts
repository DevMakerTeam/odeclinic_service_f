import reasonConsultation from '@/assets/common/reason-consultation.png';
import reasonComparison from '@/assets/common/reason-comparison.png';
import reasonExperience from '@/assets/common/reason-experience.png';

// 모든 시술 페이지에서 공통으로 사용하는 데이터
export const commonProcedureData = {
  // 오드의원을 선택해야하는 이유 (모든 페이지 동일)
  reasons: [
    {
      title: '피부진단기를 통한 집도의 상담 시스템',
      description:
        '오드의원에서는 작은 시술이라도 집도의가 직접 상담부터 합니다. 진짜 필요한 시술인지, 혹은 더 나은 다른 옵션은 없는지 하나 하나 디테일하게 따져보고 최적의 시술 계획을 제시합니다.',
      image: reasonConsultation,
    },
    {
      title: '전후 사진 비교 시스템',
      description:
        '시술만 하고 끝나는게 아닙니다. 집도의가 시술 후 비교 상담까지 진행하며, 책임있는 진료를 약속드립니다.',
      image: reasonComparison,
    },
    {
      title: '풍부한 시술 경험과 케이스',
      description:
        '운이 없으면 경험이 부족한 원장님께 시술받을 수도 있는 공장형 병원이 아닙니다. 오드의원 의료진은 수많은 경험을 바탕으로 정기적으로 케이스와 노하우를 공유하며 공부합니다.',
      image: reasonExperience,
    },
  ],
};
