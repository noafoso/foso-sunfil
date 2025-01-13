import instance from "@/utils/axios/axios-customize";

const apiAuth = {
    // api api lấy thông tin qua token
    async getInfoByToken(): Promise<any> {
        return await instance.get(`/Api_Clients/info`);
    },

    // api get info bằng google
    async getUserInfoGoogle(token: string): Promise<any> {
        return await instance.get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },

    // api get access token facebook
    async getAccessTokenFacebook(code: string): Promise<any> {
        return await instance.get(
            `https://graph.facebook.com/oauth/access_token?client_id=${process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET}&redirect_uri=${process.env.NEXT_PUBLIC_URL_WEBSITE}api/auth/callback/facebook&code=${code}`
        );
    },

    // api get info by token facebook
    async getInfoByTokenFacebook(token: string): Promise<any> {
        return await instance.get(`https://graph.facebook.com/v20.0/me?fields=email,name,picture`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },

    // api post đăng nhập thường
    async postLoginDefault(data: FormData): Promise<any> {
        return await instance.post(`/Api_Auth/login`, data);
    },

    // api đăng ký thường (lần thao tác 1 gửi "type_request": send_otp, lần thao tác 2 "type_request": register )
    async postRegister(data: FormData): Promise<any> {
        return await instance.post(`/Api_Auth/register`, data);
    },

    // api thay đổi mật khẩu lấy otp (lần thao tác 1 gửi "type_request": send_otp, lần thao tác 2 "type_request": change_password )
    async postChangePassword(data: FormData) {
        return await instance.post("/Api_Clients/change_password", data);
    },

    // api post lấy lại otp
    async postOtpVerifyPhone(data: { phone: string; client_app_id: string }): Promise<any> {
        return await instance.post(`/api/v1/user/otp_verify_phone`, data);
    },

    // api post xác nhận otp
    async postVerifyPhone(data: FormData): Promise<any> {
        return await instance.post(`/Api_auth/SenOtp`, data);
    },

    // api đăng nhập google
    async postLoginGoogle(data: FormData): Promise<any> {
        return await instance.post("/Api_Auth/login_google", data);
    },

    // api post data login facebook
    async postLoginFacebook(data: FormData): Promise<any> {
        return await instance.post(`/Api_auth/Login_register_facebook`, data);
    },

    // api post quên mật khẩu
    async postForgotPassword(data: FormData): Promise<any> {
        return await instance.post(`/Api_auth/Forgotpassword`, data);
    },

    // api post đổi mật khẩu
    async postUpdatePassword(data: FormData) {
        return await instance.post("/Api_Clients/change_password", data);
    },

    // api post update account
    async postUpdateProfile(data: FormData) {
        return await instance.post("/Api_Clients/update_profile", data);
    },

    // api post update avatar
    async postUpdateAvatar(data: FormData) {
        return await instance.post("/api_info/UpdateInfoAvatar", data);
    },
};

export default apiAuth;
