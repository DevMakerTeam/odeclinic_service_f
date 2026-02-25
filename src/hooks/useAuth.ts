import { useMutation } from "@tanstack/react-query";
import { authService } from "@/api/services/authService";
import type { SendSmsDto, VerifySmsDto } from "@/api/generated";

export const useAuthKeys = {
  all: ["auth"] as const,
};

export const useSendSms = () => {
  return useMutation({
    mutationFn: (dto: SendSmsDto) => authService.sendSms(dto),
  });
};

export const useVerifySms = () => {
  return useMutation({
    mutationFn: (dto: VerifySmsDto) => authService.verifySms(dto),
    onSuccess: (data) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      }
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    },
  });
};
