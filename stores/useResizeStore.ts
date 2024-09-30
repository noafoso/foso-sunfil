import { IResizeStore } from "@/types/resize/IResize";
import { create } from "zustand";

// resize responsive
export const useResizeStore = create<IResizeStore>((set) => ({
    isVisibleMobile: false,
    isVisibleTablet: false,
    onResizeMobile: () => set({ isVisibleMobile: true }),
    onResizeTablet: () => set({ isVisibleTablet: true }),
    onCloseResizeMobile: () => set({ isVisibleMobile: false }),
    onCloseResizeTablet: () => set({ isVisibleTablet: false }),
}));
