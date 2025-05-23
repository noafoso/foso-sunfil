import axios from "@/utils/axios/axios-customize";

const apiCategories = {

    // danh sách danh mục ở trang chủ và sản phẩm
    getListCategories() {
        return axios.get(`/api_web/api_items/getCategory`);
    },
    // chi tiết sản phẩm
    getDetailCategories(id: string) {
        return axios.get(`/api_web/api_items/getDetailCategory/${id}`);
    },

    // search sản phẩm theo code (tuyệt đối)
    getCodeProductAbsolute(code: string) {
        return axios.get(`/api_web/api_products/get_product_code/${code}`);
    },

    // Danh sách LỊCH SỬ TÌM KIẾM code sản phẩm
    getSearchHistoryList(page: string | number = 1, limit: string | number = 10, code?: any) {
        return axios.get(`/api_web/Api_history_search_products/index?page=${page}&limit=${limit}${code ? `&code=${code}` : ""}`,);
    },

    // search sản phẩm theo code hoặc tên,... (tương đối)
    postCodeProductRelative(data: any) {
        return axios.post(`/api_web/api_products/search_product`, data);
    },

    // lấy danh sách brand 
    postGetListBrands() {
        return axios.post(`/api_web/api_products/get_manufacturer`)
    },

    // lấy danh sách model
    postGetListModels(id_manufacturer: string | number | any) {
        return axios.post(`/api_web/api_products/get_model/${id_manufacturer}`)
    },

    // lấy danh sách năm
    postGetListYears(data: any) {
        return axios.post(`/api_web/api_products/get_year`, data)
    },

    // lấy danh sách engine & body
    postGetListEngineAndBody(data: any) {
        return axios.post(`/api_web/api_products/get_engine_tbody`, data)
    },

    // submit search danh sách sản phẩm application
    postSearchCodeApplication(data: any) {
        return axios.post(`/api_web/api_products/get_detail`, data)
    }
};

export default apiCategories;
