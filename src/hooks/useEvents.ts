import { useQuery } from "@tanstack/react-query";
import { eventService, type EventListParams } from "@/api/services/eventService";

export const EVENT_KEYS = {
  all: ["events"] as const,
  lists: () => [...EVENT_KEYS.all, "list"] as const,
  list: (params?: EventListParams) => [...EVENT_KEYS.lists(), params] as const,
  details: () => [...EVENT_KEYS.all, "detail"] as const,
  detail: (id: number, lang?: string) => [...EVENT_KEYS.details(), id, lang] as const,
};

export const useEventList = (params?: EventListParams) => {
  return useQuery({
    queryKey: EVENT_KEYS.list(params),
    queryFn: () => eventService.getList(params),
  });
};

export const useEventDetail = (id: number, lang?: string) => {
  return useQuery({
    queryKey: EVENT_KEYS.detail(id, lang),
    queryFn: () => eventService.getDetail(id, { lang }),
    enabled: !!id,
  });
};
