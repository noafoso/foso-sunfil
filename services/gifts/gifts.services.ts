import axios from "@/utils/axios/axios-customize";

const apiGifts = {
    // GET DANH SÁCH LỊCH SỬ QUÀ TẶNG
    getGiftsHistoryList(page: string | number | any = 1, limit: string | number | any = 10, data?: any) {
        return axios.post(`/api_web/Api_gift/Getgift/${page}/${limit}`, data);
    },

    // Kiểm tra mã code QR có tồn tại hay không
    getCheckGiftCode(code: string) {
        return axios.get(`/gift_code?code=${code}`);
    },

    // Lần đầu POST (phone, code, type_request=send_otp)
    // - Nếu result === true => tiếp theo POST (phone, code , code_otp)
    // - Nếu result === false => bắt buộc nhập tên (phone, code, name, type_request=addClients) => result === true tiếp theo POST (phone, code , code_otp)
    postGetOtpGiftCode(data: any) {
        return axios.post(`/gift_code/GetOtp?csrf_protection=true`, data);
    },

    // POST (code_otp, phone, code)
    postGetReveicedGiftCode(data: any) {
        return axios.post(`/gift_code/GetGift?csrf_protection=true`, data);
    },
};

export default apiGifts;
