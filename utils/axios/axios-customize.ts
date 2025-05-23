import { CookieCore } from "@/lib/cookie";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_URL_API;

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    params: {},
});

// Add a request interceptor
instance.interceptors.request.use(
    async function (config) {
        if (CookieCore.get("token_sunfil") !== undefined) {
            config.headers["Authorization"] = "Bearer " + CookieCore.get("token_sunfil");
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        const status = error.response?.status || 500;
        // we can handle global errors here
        switch (status) {
            // authentication (token related issues)
            case 401: {
                if (!error.response.data?.result && error.response.data?.code == 401) {
                    CookieCore.remove("token_sunfil");
                }
                return error.response.data;
            }

            // forbidden (permission related issues)
            case 403: {
                return Promise.reject(error);
            }

            // bad request
            case 400: {
                return Promise.reject(error);
            }

            // not found
            case 404: {
                return Promise.reject(error);
            }

            // conflict
            case 409: {
                return Promise.reject(error);
            }

            // unprocessable
            case 422: {
                return Promise.reject(error);
            }

            // generic api error (server related) unexpected
            default: {
                const errorMessage = error?.response?.data?.message;
                return errorMessage ? errorMessage : Promise.reject(error);
            }
        }
    }
);

export default instance;
