import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: '레디어스 - 팔자 시술 효과, 후기, 부작용까지 | 오드의원',
  description:
    '깊어진 팔자주름이 고민이라면? 콜라겐 재생을 유도하는 레디어스 시술 효과를 확인해 보세요. 시술 전 꼭 알아야 할 효과, 후기부터 부작용까지 알기 쉽게 정리했습니다.',
};

export default function RadiessePage() {
  return <PageContent />;
}
