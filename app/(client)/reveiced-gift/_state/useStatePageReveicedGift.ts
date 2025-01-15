import { create } from "zustand";

interface InitialStateStore {
    isStatePageReveicedGift: {
        otp_time: number,
        form: {
            phone: null,
        },
        disablePhoneInput: boolean,
        showFullNameField: boolean,
        dataGiftDone: any
    };
    queryKeyIsStatePageReveicedGift: (key: any) => void;
}

export const useStatePageReveicedGift = create<InitialStateStore>((set) => ({
    isStatePageReveicedGift: {
        otp_time: 0,
        form: {
            phone: null,
        },
        formHook: null,
        disablePhoneInput: false,
        showFullNameField: false,
        dataGiftDone: undefined
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
