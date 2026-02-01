export default function EventsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-5 md:px-10 py-8">
      <h2 className="text-xl font-bold text-[#1e2b39] mb-4">이벤트 & 가격</h2>
      <p className="text-sm text-[#1e2b39]/70">진행 중인 이벤트와 시술 가격 정보를 확인하세요.</p>
      {/* Placeholder content */}
      <div className="mt-8 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-[#1e2b39]/5">
            <div className="h-24 bg-gray-100 rounded-lg mb-3"></div>
            <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-100 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
