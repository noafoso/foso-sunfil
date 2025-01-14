import { create } from "zustand";

interface InitialStateStore {
    isStatePageReveicedGift: {
        idTabActive: any;
    };
    queryKeyIsStatePageReveicedGift: (key: any) => void;
}

export const useStatePageReveicedGift = create<InitialStateStore>((set) => ({
    isStatePageReveicedGift: {
        idTabActive: undefined,
    },
    queryKeyIsStatePageReveicedGift: (key: any) =>
        set((state) => ({
            ...state,
            isStatePageReveicedGift: {
                ...state.isStatePageReveicedGift,
                ...key,
            },
        })),
}));
