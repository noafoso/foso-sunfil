export interface IToastStore {
    openToast: boolean;
    type?: "success" | "error" | "warning";
    message?: string;
    duration?: number;
    description?: string;
    style?: {
        className: string;
        classNameDescription: {} | any;
    };
    showType: boolean;
    dataObject: any;
    setToast: (
        key: any,
        type?: "success" | "error" | "warning",
        message?: string,
        duration?: number,
        description?: string,
        style?: { className: string; classNameDescription: {} | any }
    ) => void;
    setShowType: (key: boolean) => void;
    setDataObject: (key: any) => void;
}
