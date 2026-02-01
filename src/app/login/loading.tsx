export default function Loading() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center min-h-[70vh] px-6">
      <div className="w-full max-w-sm animate-pulse">
        <div className="text-center mb-10">
          <div className="h-8 bg-gray-200 rounded w-32 mx-auto mb-2" />
          <div className="h-4 bg-gray-200 rounded w-64 mx-auto" />
        </div>

        <div className="space-y-5">
          <div>
            <div className="h-4 bg-gray-200 rounded w-20 mb-2" />
            <div className="flex gap-2">
              <div className="w-[100px] h-12 bg-gray-200 rounded-lg" />
              <div className="flex-1 h-12 bg-gray-200 rounded-lg" />
            </div>
          </div>
          
          <div className="h-12 bg-gray-200 rounded-lg w-full mt-8" />
        </div>
      </div>
    </div>
  );
}
