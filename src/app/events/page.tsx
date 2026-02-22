import { Suspense } from 'react';
import type { Metadata } from 'next';
import EventsPageContent from './EventsPageContent';
import Loading from './loading';

export const metadata: Metadata = {
  title: '이벤트 & 가격 | 오드의원',
  description: '오드 클리닉의 특별한 혜택을 합리적인 가격으로 만나보세요.',
};

export default function EventsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <EventsPageContent />
    </Suspense>
  );
}
