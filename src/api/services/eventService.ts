import { apiClient } from "@/api/client";
import type {
  EventListResponseDto,
  EventDetailResponseDto,
} from "@/api/generated";

export interface EventListParams {
  lang?: string;
  page?: number;
  size?: number;
}

export const eventService = {
  getList: async (params?: EventListParams): Promise<EventListResponseDto> => {
    const res = await apiClient.get<{ data: EventListResponseDto }>(
      "/api/v1/event",
      { params }
    );
    return res.data.data;
  },

  getDetail: async (
    id: number,
    params?: { lang?: string }
  ): Promise<EventDetailResponseDto> => {
    const res = await apiClient.get<{ data: EventDetailResponseDto }>(
      `/api/v1/event/${id}`,
      { params }
    );
    return res.data.data;
  },
};
