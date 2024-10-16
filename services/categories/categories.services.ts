import axios from "@/utils/axios/axios-customize";

const apiCategories = {
    // danh sách danh mục ở trang chủ và sản phẩm
    getListCategories() {
        return axios.get(`/api_items/getCategory`);
    },
    // chi tiết sản phẩm
    getDetailCategories(id: string) {
        return axios.get(`/api_items/getDetailCategory/${id}`);
    },

    // search sản phẩm theo code (tuyệt đối)
    getCodeProductAbsolute(code: string) {
        return axios.get(`/api_products/get_product_code/${code}`);
    },

    // search sản phẩm theo code hoặc tên,... (tương đối)
    getCodeProductRelative(data: any) {
        return axios.post(`/api_products/search_product`, data);
    },

};

export default apiCategories;
