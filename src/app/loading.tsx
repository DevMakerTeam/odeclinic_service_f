export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#483C32]/20 border-t-[#483C32] rounded-full animate-spin" />
        <p className="text-[#8a7e75] text-sm font-medium">로딩 중...</p>
      </div>
    </div>
  );
}
