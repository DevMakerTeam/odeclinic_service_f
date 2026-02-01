import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: '스컬트라 - 필러 대신 콜라겐 합성 효과부터 후기까지 | 오드의원',
  description: '시간이 흐를수록 자연스럽게 차오르는 볼륨, 오드의원 스컬트라를 만나보세요. FDA 승인을 받은 안전한 PLLA 성분으로 피부 속 콜라겐을 직접 재생시킵니다.',
};

export default function SculptraPage() {
  return <PageContent />;
}
