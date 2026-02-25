import { apiClient } from "@/api/client";
import type { UnavailableSlotListResponseDto } from "@/api/generated";

export interface UnavailableSlotParams {
  /** 조회 시작일 (YYYY-MM-DD) */
  from?: string;
  /** 조회 종료일 (YYYY-MM-DD) */
  to?: string;
}

export const unavailableSlotService = {
  getList: async (
    params?: UnavailableSlotParams
  ): Promise<UnavailableSlotListResponseDto> => {
    const res = await apiClient.get<{ data: UnavailableSlotListResponseDto }>(
      "/api/v1/unavailable-slot",
      { params }
    );
    return res.data.data;
  },
};
