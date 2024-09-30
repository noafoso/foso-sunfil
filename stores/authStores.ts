import { IAuthState, IAuthStore } from "@/types/auth/IAuth";
import { create } from "zustand";

export const useAuthState = create<IAuthState>((set) => ({
    otp: 0,
    form: {},
    setOtp: (key: number) => set((state) => ({ otp: key })),
    setTimeOtp: (time: number) => set({ otp: time }),
    setForm: (key: any) => set((state) => ({ form: key })),
}));

export const useAuthStore = create<IAuthStore>((set) => ({
    informationUser: undefined,
    setInformationUser: (key: any) => set((state) => ({ informationUser: key })),
}));
