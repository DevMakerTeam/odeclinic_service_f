import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  reservationService,
  type ReservationListParams,
} from "@/api/services/reservationService";
import type { ReservationCreateDto } from "@/api/generated";

export const RESERVATION_KEYS = {
  all: ["reservations"] as const,
  myLists: () => [...RESERVATION_KEYS.all, "my"] as const,
  myList: (params?: ReservationListParams) =>
    [...RESERVATION_KEYS.myLists(), params] as const,
};

export const useMyReservationList = (params?: ReservationListParams) => {
  return useQuery({
    queryKey: RESERVATION_KEYS.myList(params),
    queryFn: () => reservationService.getMyList(params),
  });
};

export const useCreateReservation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: ReservationCreateDto) => reservationService.create(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: RESERVATION_KEYS.myLists() });
    },
  });
};
