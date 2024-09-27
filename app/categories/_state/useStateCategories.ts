import { create } from "zustand";

interface IInput {
    value: string;
    selected: Record<string, any>;
    open: boolean;
}
interface IFilterAppication {
    branch?: IInput;
    class?: IInput;
    model?: IInput;
    year?: IInput;
    engine?: IInput;
    body?: IInput;
}
interface InitialStateStore {
    isStateCategories: {
        idTabActive: string; // Specify type
        filterProduct: {
            value: {
                text: string;
            };
        };
        filterAppication: IFilterAppication;
    };
    queryKeyIsStateHome: (key: Partial<InitialStateStore["isStateCategories"]>) => void;
}

// Factory function to create IInput defaults to avoid repetition
const createDefaultInput = (): IInput => ({
    value: "",
    selected: {},
    open: false,
});

export const useStateCategories = create<InitialStateStore>((set) => ({
    isStateCategories: {
        idTabActive: "1",
        filterProduct: {
            value: {
                text: "",
            },
        },
        filterAppication: {
            branch: createDefaultInput(),
            category: createDefaultInput(),
            model: createDefaultInput(),
            year: createDefaultInput(),
            engine: createDefaultInput(),
            body: createDefaultInput(),
        },
    },
    queryKeyIsStateHome: (key: any) =>
        set((state) => ({
            ...state,
            isStateCategories: {
                ...state.isStateCategories,
                ...key,
            },
        })),
}));
