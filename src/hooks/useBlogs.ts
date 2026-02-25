import { useQuery } from "@tanstack/react-query";
import { blogService, type BlogListParams } from "@/api/services/blogService";

export const BLOG_KEYS = {
  all: ["blogs"] as const,
  lists: () => [...BLOG_KEYS.all, "list"] as const,
  list: (params?: BlogListParams) => [...BLOG_KEYS.lists(), params] as const,
  mainLists: () => [...BLOG_KEYS.all, "main"] as const,
  mainList: (params?: BlogListParams) => [...BLOG_KEYS.mainLists(), params] as const,
  details: () => [...BLOG_KEYS.all, "detail"] as const,
  detail: (slug: string) => [...BLOG_KEYS.details(), slug] as const,
};

export const useBlogList = (params?: BlogListParams) => {
  return useQuery({
    queryKey: BLOG_KEYS.list(params),
    queryFn: () => blogService.getList(params),
  });
};

export const useBlogMainList = (params?: BlogListParams) => {
  return useQuery({
    queryKey: BLOG_KEYS.mainList(params),
    queryFn: () => blogService.getMainList(params),
  });
};

export const useBlogDetail = (slug: string) => {
  return useQuery({
    queryKey: BLOG_KEYS.detail(slug),
    queryFn: () => blogService.getBySlug(slug),
    enabled: !!slug,
  });
};
