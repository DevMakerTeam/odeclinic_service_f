'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full min-h-[60vh] pb-20 flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <h2 className="text-xl font-bold text-[#483C32] mb-2">예약 내역을 불러올 수 없습니다</h2>
        <p className="text-[#8a7e75] text-sm mb-6">
          일시적인 문제가 발생했습니다. 다시 시도해주세요.
        </p>
        <Button
          onClick={reset}
          className="bg-[#483C32] hover:bg-[#3a3128] text-white"
        >
          다시 시도
        </Button>
      </div>
    </div>
  );
}
