interface IAuthState {
    otp: number;
    setOtp: (key: number) => void;
    form: any;
    setForm: (key: any) => void;
}
interface IAuthStore {
    informationUser?: any;
    setInformationUser: (key: any) => void;
}

interface IUseCookie {
    key: "token_viethung" | string;
    initialValue?: string;
}

// interface state password
interface IChangePasswordState {
    showOldPassword: boolean;
    showNewPassword: boolean;
    showConfirmPassword: boolean;
}

interface IInformationUser {
    fullname: string;
    phonenumber: string;
    count_quotes: number;
    count_orders: number;
    default_language: string;
    userid: string;
    staff_id: string | null;
    client_image: string;
    email_client: string | null;
    id_google: string | null;
    id_facebook: string | null;
    datecreated: string;
    is_login: number;
    code_gt: string | null;
    birtday: string;
    gender: string;
    shipping_client: {
        id: string,
        client: string,
        name: string,
        phone: string,
        address: string,
        code_zip: string | null,
        address_primary: string,
        date_create: string,
        create_by: string,
        address_v2: string,
        name_v2: string,
        delivery_area: string,
        city_shipping: string,
        district_shipping: string,
        quotes: string | null,
        type: string
    };
}

export type {
    IAuthState,
    IAuthStore,
    IUseCookie,
    IChangePasswordState,
    IInformationUser
}