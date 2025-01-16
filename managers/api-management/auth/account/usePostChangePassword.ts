import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { useStateAuth } from "@/managers/state-management/auth/useStateAuth";
import { useAuthStore } from "@/stores/useAuthStores";
import { IChangePassWordFormSetup } from "@/types/auth/IAuth";
import { useToastStore } from "@/stores/useToastStore";
import { useDialogStore } from "@/stores/useDialogStore";
import { useShowPasswordMulti } from "@/hooks/password/useShowPasswordMulti";
import apiAuth from "@/services/auth/auth.services";

export const usePostChangePassword = (initialFormValue: IChangePassWordFormSetup | any) => {
    const dataSubmit = new FormData()

    const { informationUser } = useAuthStore();

    const { isStateAuth, queryKeyIsStateAuth } = useStateAuth();

    const { resetPasswordVisibility } = useShowPasswordMulti();

    const { setToast } = useToastStore();

    const { setStatusDialog, setOpenDialogCustom } = useDialogStore();

    const form = useForm<IChangePassWordFormSetup | any>({
        defaultValues: {
            ...initialFormValue,
        },
    });

    const newPassword = form.watch("newPassword", "");

    const sendOtpMutation = useMutation({
        mutationFn: async (formData: FormData) => {
            const { data } = await apiAuth.postChangePassword(formData);
            return data;
        },
        onSuccess: (res) => {
            if (res?.result) {
                return res;
            }
        },
        onError: (error: any) => {
            throw error;
        },
    });

    const onSubmit = async (values: IChangePassWordFormSetup | any, type: string) => {
        try {
            if (type === "send_otp_password") {
                if (isStateAuth?.otp_time > 0) {
                    return setToast(true, "error", `Please wait ${isStateAuth?.otp_time} seconds to resend OTP`);
                }

                dataSubmit.append("password_new", values?.newPassword ?? values?.password) // Vì gửi qua form nêu khi f5 lại cần 
                dataSubmit.append("type_request", "send_otp")

                const res = await sendOtpMutation.mutateAsync(dataSubmit);
                console.log('res', res);

                if (!res?.result) {
                    setToast(true, "error", res?.message);
                    return;
                }

                queryKeyIsStateAuth({
                    otp_time: res?.data?.time,
                    form: { ...isStateAuth.form, password: values?.newPassword, email: informationUser?.email_client },
                    formFile: form,
                });
                setOpenDialogCustom(true);
                setStatusDialog("otp_update_password");
            }

            if (type === "update_password") {
                dataSubmit.append("password_new", values?.newPassword ?? values?.password)
                dataSubmit.append("type_request", "change_password")
                dataSubmit.append("code_otp", values?.otp)

                const res = await sendOtpMutation.mutateAsync(dataSubmit);
                console.log('res', res);

                if (!res?.result) {
                    setToast(true, "error", res?.message);
                    return;
                }
                setToast(true, "success", res?.message, 2500);
                setOpenDialogCustom(false);
                setStatusDialog("");
                resetPasswordVisibility();
                form.resetField("newPassword")
                form.resetField("confirmPassword")
                queryKeyIsStateAuth({ otp_time: 0 });
            }
        } catch (error) {
            throw error;
        }
    };

    return {
        onSubmit,
        form,
        newPassword,
        isLoading: sendOtpMutation.isPending,
    };
};
