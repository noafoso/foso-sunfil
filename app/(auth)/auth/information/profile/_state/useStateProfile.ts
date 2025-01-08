import { create } from "zustand";

interface InitialStateStore {
    isStateProfile: {
        flagEditInfo: boolean;
    };
    queryKeyIsStateProfile: (key: any) => void;
}

export const useStateProfile = create<InitialStateStore>((set) => ({
    isStateProfile: {
        flagEditInfo: false,
    },
    queryKeyIsStateProfile: (key: any) =>
        set((state) => ({
            ...state,
            isStateProfile: {
                ...state.isStateProfile,
                ...key,
            },
        })),
}));
