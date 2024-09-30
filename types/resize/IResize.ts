export interface IResizeStore {
    isVisibleMobile: boolean;
    isVisibleTablet: boolean;
    onResizeMobile: () => void;
    onResizeTablet: () => void;
    onCloseResizeMobile: () => void;
    onCloseResizeTablet: () => void;
}
