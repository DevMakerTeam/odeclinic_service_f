import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: '힐로웨이브 - 즉각적이고 안전한 볼륨 개선, 필러와의 차이까지 | 오드의원',
  description: '힐로웨이브(HILO WAVE)는 고분자 및 저분자 히알루론산(HA) 복합 성분을 활용해, 자연스럽게 볼륨을 채우면서도 수분감 및 탄력까지 개선하는 시술입니다.',
};

export default function HiloWavePage() {
  return <PageContent />;
}
