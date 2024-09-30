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
};

export default apiCategories;
