export default function Loading() {
  return (
    <div className="w-full min-h-[60vh] pb-20">
      <div className="px-6 py-8">
        {/* User Info Card Skeleton */}
        <div className="bg-white p-6 rounded-xl border border-[#483C32]/10 mb-8 shadow-sm animate-pulse">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded w-32" />
              <div className="h-4 bg-gray-200 rounded w-24" />
            </div>
            <div className="h-8 w-20 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Tab Navigation Skeleton */}
        <div className="flex border-b border-[#483C32]/10 mb-6">
          <div className="flex-1 pb-3 h-8 bg-gray-200 rounded-t mx-2 animate-pulse" />
          <div className="flex-1 pb-3 h-8 bg-gray-200 rounded-t mx-2 animate-pulse" />
        </div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 bg-white rounded-lg border border-[#483C32]/10 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-2" />
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-1" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
