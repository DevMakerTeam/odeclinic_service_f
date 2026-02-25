import { apiClient } from "@/api/client";
import type { PopupListResponseDto } from "@/api/generated";

export interface PopupListParams {
  lang?: string;
  page?: number;
  size?: number;
}

export const popupService = {
  getActiveList: async (
    params?: PopupListParams
  ): Promise<PopupListResponseDto> => {
    const res = await apiClient.get<{ data: PopupListResponseDto }>(
      "/api/v1/popup",
      { params }
    );
    return res.data.data;
  },
};
