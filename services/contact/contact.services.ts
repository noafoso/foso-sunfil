import axios from "@/utils/axios/axios-customize";

const apiContact = {
    // danh sách câu hỏi thường gặp
    getListQuestion(page: string, limit: string) {
        return axios.get(`/api_contact/GetQuestion/${page}/${limit}`);
    },
    // gửi liên hệ
    postContact(data: FormData) {
        return axios.post(`/api_contact/SubmitContact`, data);
    },
};

export default apiContact;
