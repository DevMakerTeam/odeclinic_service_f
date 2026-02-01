export default function Loading() {
  return (
    <div className="w-full max-w-7xl mx-auto px-5 md:px-10 py-8">
      <div className="h-7 bg-gray-200 rounded w-48 mb-4 animate-pulse" />
      <div className="h-4 bg-gray-200 rounded w-96 mb-8 animate-pulse" />
      
      <div className="mt-8 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-[#1e2b39]/5 animate-pulse">
            <div className="h-24 bg-gray-200 rounded-lg mb-3" />
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
