import { create } from "zustand";

interface InitialStateStore {
    isStateHeader: {
        isActiveService: boolean;
        isShowMenuScreen: boolean;
        selectedCodeCountry: string;
    };
    queryKeyIsStateHeader: (key: any) => void;
}

export const useStateHeader = create<InitialStateStore>((set) => ({
    isStateHeader: {
        isActiveService: false,
        isShowMenuScreen: false,
        selectedCodeCountry: "",
    },
    queryKeyIsStateHeader: (key: any) =>
        set((state) => ({
            ...state,
            isStateHeader: {
                ...state.isStateHeader,
                ...key,
            },
        })),
}));
