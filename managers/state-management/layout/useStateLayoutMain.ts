import { create } from "zustand";

interface InitialStateStore {
    isStateLayoutMain: {
        header: {
            isActiveService: boolean;
            isShowMenuScreen: boolean;
            isShowMenuSearchProduct: boolean;
            selectedCodeCountry: any;
            openDropdownProfile: boolean;
            searchProduct: string;
        },
    };
    queryKeyIsStateLayoutMain: (key: any) => void;
}

export const useStateLayoutMain = create<InitialStateStore>((set) => ({
    isStateLayoutMain: {
        header: {
            isActiveService: false,
            isShowMenuScreen: false,
            isShowMenuSearchProduct: false,
            selectedCodeCountry: undefined,
            openDropdownProfile: false,
            searchProduct: ""
        },
    },
    queryKeyIsStateLayoutMain: (key: any) =>
        set((state) => ({
            ...state,
            isStateLayoutMain: {
                ...state.isStateLayoutMain,
                ...key,
            },
        })),
}));
