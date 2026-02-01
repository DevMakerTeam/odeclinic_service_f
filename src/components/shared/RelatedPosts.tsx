import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';

export interface RelatedPost {
  id: string;
  image: string;
  tags: string[];
  title: string;
  description: string;
  date: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
  title?: string;
}

export function RelatedPosts({ posts, title = "관련 게시글" }: RelatedPostsProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-12">
          <SectionHeading>{title}</SectionHeading>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group bg-white cursor-pointer h-full flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl shrink-0">
                 <ImageWithFallback 
                   src={post.image} 
                   alt={post.title} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
                 <div className="absolute top-4 left-4 flex gap-2">
                   {post.tags.map((tag, idx) => (
                     <Badge key={idx} variant="secondary" className="bg-white/90 backdrop-blur-sm text-[#483C32] hover:bg-white rounded-md font-medium">
                       {tag}
                     </Badge>
                   ))}
                 </div>
              </div>
              <CardContent className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-[#483C32] mb-3 line-clamp-2 group-hover:text-[#a58d7d] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#8a7e75] text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-auto text-xs text-[#a58d7d] font-medium">
                  {post.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
