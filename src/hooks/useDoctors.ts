import { useQuery } from "@tanstack/react-query";
import { doctorService, type DoctorListParams } from "@/api/services/doctorService";

export const DOCTOR_KEYS = {
  all: ["doctors"] as const,
  lists: () => [...DOCTOR_KEYS.all, "list"] as const,
  list: (params?: DoctorListParams) => [...DOCTOR_KEYS.lists(), params] as const,
};

export const useDoctorList = (params?: DoctorListParams) => {
  return useQuery({
    queryKey: DOCTOR_KEYS.list(params),
    queryFn: () => doctorService.getList(params),
  });
};
