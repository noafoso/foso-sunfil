"use client";
import { IUseCookie } from "@/types/auth/IAuth";
import Cookies from "js-cookie";

const useCookieStore = (initialValue?: IUseCookie["initialValue"]) => {
    const setCookie = (key: IUseCookie["key"] = "token_viethung", value: string, options?: Cookies.CookieAttributes) => {
        Cookies.set(key, value, options);
    };

    const removeCookie = (key: IUseCookie["key"] = "token_viethung", options?: Cookies.CookieAttributes) => {
        Cookies.remove(key, options);
    };

    const getCookie = (key: IUseCookie["key"] = "token_viethung") => {
        return Cookies.get(key);
    };

    return { setCookie, removeCookie, getCookie };
};

export default useCookieStore;
