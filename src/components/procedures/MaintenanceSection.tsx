import { SectionHeading } from '@/components/ui/SectionHeading';

interface MaintenanceSectionProps {
  title: string;
  content: string;
}

export function MaintenanceSection({ title, content }: MaintenanceSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 text-center">
        <SectionHeading className="mb-6 md:mb-8">{title}</SectionHeading>
        <div 
          className="text-base md:text-xl text-[#483C32] leading-relaxed font-medium"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
}
