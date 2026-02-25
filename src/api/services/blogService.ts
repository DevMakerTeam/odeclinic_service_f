import { apiClient } from "@/api/client";
import type { BlogListResponseDto, BlogResponseDto } from "@/api/generated";

export interface BlogListParams {
  lang?: string;
  page?: number;
  size?: number;
}

export const blogService = {
  getList: async (params?: BlogListParams): Promise<BlogListResponseDto> => {
    const res = await apiClient.get<{ data: BlogListResponseDto }>(
      "/api/v1/blog",
      { params }
    );
    return res.data.data;
  },

  getMainList: async (
    params?: BlogListParams
  ): Promise<BlogListResponseDto> => {
    const res = await apiClient.get<{ data: BlogListResponseDto }>(
      "/api/v1/blog/main",
      { params }
    );
    return res.data.data;
  },

  getBySlug: async (slug: string): Promise<BlogResponseDto> => {
    const res = await apiClient.get<{ data: BlogResponseDto }>(
      `/api/v1/blog/${slug}`
    );
    return res.data.data;
  },
};
