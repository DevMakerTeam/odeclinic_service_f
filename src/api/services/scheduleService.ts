import { apiClient } from "@/api/client";
import type { DoctorByDateListResponseDto } from "@/api/generated";

export interface DoctorsByDateParams {
  /** 조회할 날짜 (YYYY-MM-DD) */
  date: string;
  page?: number;
  size?: number;
}

export const scheduleService = {
  getDoctorsByDate: async (
    params: DoctorsByDateParams
  ): Promise<DoctorByDateListResponseDto> => {
    const res = await apiClient.get<{ data: DoctorByDateListResponseDto }>(
      "/api/v1/schedules/doctors/by-date",
      { params }
    );
    return res.data.data;
  },
};
