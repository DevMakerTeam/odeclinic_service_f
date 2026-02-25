import { useQuery } from "@tanstack/react-query";
import { popupService, type PopupListParams } from "@/api/services/popupService";

export const POPUP_KEYS = {
  all: ["popups"] as const,
  activeLists: () => [...POPUP_KEYS.all, "active"] as const,
  activeList: (params?: PopupListParams) =>
    [...POPUP_KEYS.activeLists(), params] as const,
};

export const useActivePopupList = (params?: PopupListParams) => {
  return useQuery({
    queryKey: POPUP_KEYS.activeList(params),
    queryFn: () => popupService.getActiveList(params),
  });
};
