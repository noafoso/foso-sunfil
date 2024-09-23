import { create } from "zustand";

interface IOpenAlert {
    openAlertDialog: boolean;
    type?: string;
    setOpenAlertDialog: (key: any, type?: string) => void;
}

export const useAlertStore = create<IOpenAlert>((set) => ({
    openAlertDialog: false,
    type: "",
    setOpenAlertDialog: (key: any, type?: string) => set((state) => ({ openAlertDialog: key, type: type })),
}));
