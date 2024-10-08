import { create } from "zustand";

interface IInput {
    value: string;
    selected: Record<string, any>;
    open: boolean;
}
interface IFilterApplication {
    branch?: IInput;
    class?: IInput;
    model?: IInput;
    year?: IInput;
    engine?: IInput;
    body?: IInput;
}
interface InitialStateStore {
    isStateCategories: {
        idOpenAccordion: string[] | null;
        idTabActive: string; // Specify type
        filterProduct: {
            value: string;
        };
        filterApplication: IFilterApplication;
    };
    queryKeyIsStateCategories: (key: Partial<InitialStateStore["isStateCategories"]>) => void;
}

// Factory function to create IInput defaults to avoid repetition
const createDefaultInput = (): IInput => ({
    value: "",
    selected: {},
    open: false,
});

export const useStateCategories = create<InitialStateStore>((set) => ({
    isStateCategories: {
        idOpenAccordion: null,
        idTabActive: "1",
        filterProduct: {
            value: "",
        },
        filterApplication: {
            branch: createDefaultInput(),
            category: createDefaultInput(),
            model: createDefaultInput(),
            year: createDefaultInput(),
            engine: createDefaultInput(),
            body: createDefaultInput(),
        },
    },
    queryKeyIsStateCategories: (key: any) =>
        set((state) => ({
            ...state,
            isStateCategories: {
                ...state.isStateCategories,
                ...key,
            },
        })),
}));
