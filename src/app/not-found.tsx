import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-[#483C32] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[#483C32] mb-2">페이지를 찾을 수 없습니다</h2>
        <p className="text-[#8a7e75] text-sm mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Link href="/">
          <Button className="bg-[#483C32] hover:bg-[#3a3128] text-white">
            홈으로 돌아가기
          </Button>
        </Link>
      </div>
    </div>
  );
}
