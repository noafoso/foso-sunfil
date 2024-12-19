export interface IAuthState {
    otp: number;
    setOtp: (key: number) => void;
    form: any;
    setForm: (key: any) => void;
}
export interface IAuthStore {
    informationUser?: any;
    setInformationUser: (key: any) => void;
}

export interface IUseCookie {
    key: "token_viethung" | string;
    initialValue?: string;
}

// interface state password
interface IChangePasswordState {
    showOldPassword: boolean;
    showNewPassword: boolean;
    showConfirmPassword: boolean;
}
export type {
    IChangePasswordState
}