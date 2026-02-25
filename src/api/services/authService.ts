import { apiClient } from "@/api/client";
import type {
  SendSmsDto,
  SendSmsResponseDto,
  VerifySmsDto,
  AuthTokenResponseDto,
  RefreshTokenResponseDto,
  LogoutResponseDto,
} from "@/api/generated";

export const authService = {
  sendSms: async (dto: SendSmsDto): Promise<SendSmsResponseDto> => {
    const res = await apiClient.post<{ data: SendSmsResponseDto }>(
      "/api/v1/auth/sms/send",
      dto
    );
    return res.data.data;
  },

  verifySms: async (dto: VerifySmsDto): Promise<AuthTokenResponseDto> => {
    const res = await apiClient.post<{ data: AuthTokenResponseDto }>(
      "/api/v1/auth/sms/verify",
      dto
    );
    return res.data.data;
  },

  refresh: async (): Promise<RefreshTokenResponseDto> => {
    const res = await apiClient.post<{ data: RefreshTokenResponseDto }>(
      "/api/v1/auth/refresh"
    );
    return res.data.data;
  },

  logout: async (): Promise<LogoutResponseDto> => {
    const res = await apiClient.delete<{ data: LogoutResponseDto }>(
      "/api/v1/auth/logout"
    );
    return res.data.data;
  },
};
