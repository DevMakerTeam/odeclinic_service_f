import { apiClient } from "@/api/client";
import type {
  ReservationCreateDto,
  ReservationResponseDto,
  ReservationListResponseDto,
} from "@/api/generated";

export interface ReservationListParams {
  page?: number;
  size?: number;
}

export const reservationService = {
  create: async (
    dto: ReservationCreateDto
  ): Promise<ReservationResponseDto> => {
    const res = await apiClient.post<{ data: ReservationResponseDto }>(
      "/api/v1/reservation",
      dto
    );
    return res.data.data;
  },

  getMyList: async (
    params?: ReservationListParams
  ): Promise<ReservationListResponseDto> => {
    const res = await apiClient.get<{ data: ReservationListResponseDto }>(
      "/api/v1/reservation",
      { params }
    );
    return res.data.data;
  },
};
