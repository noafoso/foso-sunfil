import { create } from "zustand";

interface InitialStateStore {
    isStateSearchHistory: {
        flagEditInfo: boolean;
    };
    queryKeyIsStateSearchHistory: (key: any) => void;
}

export const useStateSearchHistory = create<InitialStateStore>((set) => ({
    isStateSearchHistory: {
        flagEditInfo: false,
    },
    queryKeyIsStateSearchHistory: (key: any) =>
        set((state) => ({
            ...state,
            isStateSearchHistory: {
                ...state.isStateSearchHistory,
                ...key,
            },
        })),
}));
