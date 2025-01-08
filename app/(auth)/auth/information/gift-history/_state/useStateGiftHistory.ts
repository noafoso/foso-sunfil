import { create } from "zustand";

interface InitialStateStore {
    isStateGiftHistory: {
        flagEditInfo: boolean;
    };
    queryKeyIsStateGiftHistory: (key: any) => void;
}

export const useStateGiftHistory = create<InitialStateStore>((set) => ({
    isStateGiftHistory: {
        flagEditInfo: false,
    },
    queryKeyIsStateGiftHistory: (key: any) =>
        set((state) => ({
            ...state,
            isStateGiftHistory: {
                ...state.isStateGiftHistory,
                ...key,
            },
        })),
}));
