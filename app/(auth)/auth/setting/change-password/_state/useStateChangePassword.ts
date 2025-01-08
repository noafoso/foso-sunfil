import { create } from "zustand";

interface InitialStateStore {
    isStateChangePassword: {
        flagEditInfo: boolean;
    };
    queryKeyIsStateChangePassword: (key: any) => void;
}

export const useStateChangePassword = create<InitialStateStore>((set) => ({
    isStateChangePassword: {
        flagEditInfo: false,
    },
    queryKeyIsStateChangePassword: (key: any) =>
        set((state) => ({
            ...state,
            isStateChangePassword: {
                ...state.isStateChangePassword,
                ...key,
            },
        })),
}));
