// import { IInitialStateAuthStore } from "@/types/auth/IAuth";
import { create } from "zustand";

export const useStateAuth = create<any>((set) => ({
    isStateAuth: {
        otp_time: 0,
        form: {
            phone: null,
            otp: 0,
            email: "",
            password: "",
            name: "",
            confirmPassword: "",
            promoCode: "",
            policy: false,
        },
        statusAuth: "login",
        formFile: null
    },
    queryKeyIsStateAuth: (key: any) =>
        set((state: any) => ({
            ...state,
            isStateAuth: {
                ...state.isStateAuth,
                ...key,
            },
        })),
}));
