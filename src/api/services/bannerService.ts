import { apiClient } from "@/api/client";
import type { BannerListResponseDto } from "@/api/generated";

export interface BannerListParams {
  lang?: string;
  type?: "MAIN" | "MAIN_SOLUTION";
  page?: number;
  size?: number;
}

export const bannerService = {
  getActiveList: async (
    params?: BannerListParams
  ): Promise<BannerListResponseDto> => {
    const res = await apiClient.get<{ data: BannerListResponseDto }>(
      "/api/v1/banner",
      { params }
    );
    return res.data.data;
  },
};
