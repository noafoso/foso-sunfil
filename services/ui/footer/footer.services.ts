import axios from "@/utils/axios/axios-customize";

const apiFooter = {
    // GET DANH SÁCH LỊCH SỬ QUÀ TẶNG
    getDataFooter() {
        return axios.post(`/api_web/Api_introduce/footer`);
    },
};

export default apiFooter;
