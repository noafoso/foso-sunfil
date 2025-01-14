import axios from "@/utils/axios/axios-customize";
import { AxiosRequestConfig } from "axios";

const createAxiosRequestConfig = <T>(params?: T): AxiosRequestConfig<T> => {
    return {
        params,
    };
};

const apiBlog = {
    // danh sách tin tức
    getListBlog(params: any) {
        const config = createAxiosRequestConfig<any>(params);
        return axios.post(`/api_web/api_news/GetPost/${config.params.page}/${config.params.limit}`, config.params);
    },
    // chi tiết tin
    getDetailBlog(id: string) {
        return axios.get(`/api_web/api_news/GetDetailPost/${id}`);
    },
};

export default apiBlog;
