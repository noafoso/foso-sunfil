"use client";
import { IUseCookie } from "@/types/auth/IAuth";
import Cookies from "js-cookie";

const useCookieStore = (key: IUseCookie["key"] = "token_viethung", initialValue?: IUseCookie["initialValue"]) => {
    const setCookie = (value: string, options?: Cookies.CookieAttributes) => {
        Cookies.set(key, value, options);
    };

    const removeCookie = (key: IUseCookie["key"] = "token_viethung", options?: Cookies.CookieAttributes) => {
        Cookies.remove(key, options);
    };

    const getCookie = () => {
        return Cookies.get(key);
    };

    return { setCookie, removeCookie, getCookie };
};

export default useCookieStore;
