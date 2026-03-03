import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/api/services/authService";
import type { SendSmsDto, VerifySmsDto } from "@/api/generated";
import {
  setAccessTokenCookie,
  clearAccessTokenCookie,
} from "@/lib/auth";

export const AUTH_KEYS = {
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
      if (typeof window === "undefined") return;
      setAccessTokenCookie(data.accessToken);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authService.logout(),
    onSettled: () => {
      if (typeof window === "undefined") return;
      clearAccessTokenCookie();
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      queryClient.clear();
      window.dispatchEvent(new Event("login-status-changed"));
    },
  });
};
