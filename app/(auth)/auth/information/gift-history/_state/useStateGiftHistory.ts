import { create } from "zustand";

interface ISearch {
    searchCode: string
}

interface InitialStateStore {
    isStateGiftHistory: {
        flagEditInfo: boolean;
        search: ISearch;
        tableGiftList: {
            pageCount: string | number; // quantity
            pageIndex: string | number; // page
            pageSize: string | number;  // limit
        }
    };
    queryKeyIsStateGiftHistory: (key: any) => void;
}

export const useStateGiftHistory = create<InitialStateStore>((set) => ({
    isStateGiftHistory: {
        flagEditInfo: false,
        search: {
            searchCode: ""
        },
        tableGiftList: {
            pageCount: 0,
            pageIndex: 1,
            pageSize: 5,
        }
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
