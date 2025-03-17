import axios from "@/utils/axios/axios-customize";

const apiAboutUs = {
    // GET DANH SÁCH LỊCH SỬ QUÀ TẶNG
    getDataPageAboutUs() {
        return axios.post(`/api_web/Api_introduce/introduce`);
    },
};

export default apiAboutUs;
