import { useQuery } from "@tanstack/react-query";
import {
  unavailableSlotService,
  type UnavailableSlotParams,
} from "@/api/services/unavailableSlotService";

export const UNAVAILABLE_SLOT_KEYS = {
  all: ["unavailableSlots"] as const,
  lists: () => [...UNAVAILABLE_SLOT_KEYS.all, "list"] as const,
  list: (params?: UnavailableSlotParams) =>
    [...UNAVAILABLE_SLOT_KEYS.lists(), params] as const,
};

export const useUnavailableSlotList = (params?: UnavailableSlotParams) => {
  return useQuery({
    queryKey: UNAVAILABLE_SLOT_KEYS.list(params),
    queryFn: () => unavailableSlotService.getList(params),
  });
};
