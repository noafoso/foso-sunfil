import { IOpenAlert } from "@/types/alert/IAlert";
import { create } from "zustand";

export const useAlertStore = create<IOpenAlert>((set) => ({
    openAlertDialog: false,
    type: "",
    setOpenAlertDialog: (key: any, type?: string) => set((state) => ({ openAlertDialog: key, type: type })),
}));
