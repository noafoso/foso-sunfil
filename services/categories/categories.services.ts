import axios from "@/utils/axios/axios-customize";

const apiCategories = {
    // danh sách danh mục ở trang chủ
    getCategory() {
        return axios.get(`/api_items/getCategory`);
    },
};

export default apiCategories;
