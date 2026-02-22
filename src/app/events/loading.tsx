export default function Loading() {
  return (
    <div className="w-full bg-[#f4f0ec] min-h-full pb-10">
      <div className="bg-white px-5 pt-8 pb-6 border-b border-[#483C32]/5">
        <div className="h-8 bg-gray-200 rounded w-48 mb-3 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-72 animate-pulse" />
      </div>

      <div className="px-5 py-6 space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-sm border border-[#483C32]/5 animate-pulse"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-2 w-full">
                <div className="h-6 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-full" />
              </div>
              <div className="w-12 h-6 bg-gray-200 rounded ml-4" />
            </div>
            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
              <div className="h-6 bg-gray-200 rounded w-1/4" />
              <div className="w-10 h-10 bg-gray-200 rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
