import { create } from "zustand";

interface InitialStateStore {
    isStateProductSlug: {
        idTabActive: any;
    };
    queryKeyIsStateProductSlug: (key: any) => void;
}

export const useStateProductSlug = create<InitialStateStore>((set) => ({
    isStateProductSlug: {
        idTabActive: 3,
    },
    queryKeyIsStateProductSlug: (key: any) =>
        set((state) => ({
            ...state,
            isStateProductSlug: {
                ...state.isStateProductSlug,
                ...key,
            },
        })),
}));
