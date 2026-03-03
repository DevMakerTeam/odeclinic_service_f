import { useQuery } from "@tanstack/react-query";
import { bannerService, type BannerListParams } from "@/api/services/bannerService";

export const BANNER_KEYS = {
  all: ["banners"] as const,
  activeLists: () => [...BANNER_KEYS.all, "active"] as const,
  activeList: (params?: BannerListParams) =>
    [...BANNER_KEYS.activeLists(), params] as const,
};

export const useActiveBannerList = (params?: BannerListParams) => {
  return useQuery({
    queryKey: BANNER_KEYS.activeList(params),
    queryFn: () => bannerService.getActiveList(params),
  });
};
