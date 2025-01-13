import { create } from "zustand";

interface ISearch {
    searchCode: string
}

interface InitialStateStore {
    isStateSearchHistory: {
        flagEditInfo: boolean;
        search: ISearch
    };
    queryKeyIsStateSearchHistory: (key: any) => void;
}

export const useStateSearchHistory = create<InitialStateStore>((set) => ({
    isStateSearchHistory: {
        flagEditInfo: false,
        search: {
            searchCode: ""
        }
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
