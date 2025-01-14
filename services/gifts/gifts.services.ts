import axios from "@/utils/axios/axios-customize";

const apiGifts = {
    // GET DANH SÁCH LỊCH SỬ QUÀ TẶNG
    getGiftsHistoryList(page: string | number | any = 1, limit: string | number | any = 10, data?: any) {
        return axios.post(`/Api_gift/Getgift/${page}/${limit}`, data);
    },
};

export default apiGifts;
