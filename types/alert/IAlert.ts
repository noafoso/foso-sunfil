export interface IOpenAlert {
    openAlertDialog: boolean;
    type?: string;
    setOpenAlertDialog: (key: any, type?: string) => void;
}
