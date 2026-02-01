interface ProcedureInfoSectionProps {
  title: string;
  displayTitle: string;
  displayTitleEn: string;
  description: string;
  tags: string[];
}

export function ProcedureInfoSection({
  title,
  displayTitle,
  displayTitleEn,
  description,
  tags,
}: ProcedureInfoSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col items-start text-left max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-lg md:text-2xl font-bold text-[#483C32] mb-4 leading-snug break-keep">
            {title}
          </h1>
          <p className="text-4xl md:text-6xl font-bold text-[#483C32] leading-none mb-2 tracking-tight">
            {displayTitle}
          </p>
          <p className="text-xl md:text-3xl font-bold text-[#a58d7d] mb-8 tracking-tight">
            {displayTitleEn}
          </p>
          <div className="w-16 h-1 bg-[#483C32] mb-8 opacity-30"></div>
          <p className="text-[#5d534a] text-lg md:text-xl leading-relaxed font-medium break-keep mb-8">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {tags.map((tag, idx) => (
              <div key={idx} className="px-4 py-2 bg-[#f4f0ec] rounded-full text-[#483C32] text-sm font-bold">
                #{tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
