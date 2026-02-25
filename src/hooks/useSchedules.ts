import { useQuery } from "@tanstack/react-query";
import {
  scheduleService,
  type DoctorsByDateParams,
} from "@/api/services/scheduleService";

export const SCHEDULE_KEYS = {
  all: ["schedules"] as const,
  doctorsByDate: (date: string) =>
    [...SCHEDULE_KEYS.all, "doctorsByDate", date] as const,
};

export const useDoctorsByDate = (params: DoctorsByDateParams) => {
  return useQuery({
    queryKey: SCHEDULE_KEYS.doctorsByDate(params.date),
    queryFn: () => scheduleService.getDoctorsByDate(params),
    enabled: !!params.date,
  });
};
