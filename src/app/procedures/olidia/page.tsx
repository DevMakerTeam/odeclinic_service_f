import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: '올리디아 - 필러보다 자연스러운 볼륨 효과 | 오드의원',
  description:
    '쥬베룩은 아쉽고, 스컬트라는 부담스럽다면? 안전성과 효과를 모두 검증받은 PLLA 촉진제 오드의원 올리디아! 자연스러운 볼륨감을 원하시는 분들께 추천드립니다.',
};

export default function OlidiaPage() {
  return <PageContent />;
}
