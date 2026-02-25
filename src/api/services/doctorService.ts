import { apiClient } from "@/api/client";
import type { DoctorListResponseDto } from "@/api/generated";

export interface DoctorListParams {
  lang?: string;
  page?: number;
  size?: number;
}

export const doctorService = {
  getList: async (params?: DoctorListParams): Promise<DoctorListResponseDto> => {
    const res = await apiClient.get<{ data: DoctorListResponseDto }>(
      "/api/v1/doctor",
      { params }
    );
    return res.data.data;
  },
};
