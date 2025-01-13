import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

// import { useShowPasswordMulti } from "@/hooks/auth/useShowPasswordMulti";
import { toastCore } from "@/lib/toast";

// import apiAuth from "@/services/auth/auth.services";
// import { IChangePassWordFormSetup } from "@/types/auth/IAuth";
// import { toast } from "@/hooks/use-toast";
// import { useTranslate } from "@/contexts/TranslateContext";
// import { useToastStore } from "@/stores/useToastStore";
// import { useDialogStore } from "@/stores/useDialogStores";
import { useStateAuth } from "@/managers/state-management/auth/useStateAuth";
import { useAuthStore } from "@/stores/useAuthStores";
import { IChangePassWordFormSetup } from "@/types/auth/IAuth";
import { useToastStore } from "@/stores/useToastStore";
import { useDialogStore } from "@/stores/useDialogStore";
import { useShowPasswordMulti } from "@/hooks/hooks/password/useShowPasswordMulti";
import apiAuth from "@/services/auth/auth.services";

export const usePostChangePassword = (initialFormValue: IChangePassWordFormSetup) => {
    const { resetPasswordVisibility } = useShowPasswordMulti();

    const { informationUser } = useAuthStore();

    const { isStateAuth, queryKeyIsStateAuth } = useStateAuth();

    // const { dataLang } = useTranslate();

    const { setToast } = useToastStore();

    const { setStatusDialog, setOpenDialogCustom } = useDialogStore();

    const form = useForm<IChangePassWordFormSetup>({
        defaultValues: {
            ...initialFormValue,
        },
    });

    const newPassword = form.watch("newPassword", "");

    const sendOtpMutation = useMutation({
        mutationFn: async () => {
            const { data } = await apiAuth.postChangePassword();
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

    const onSubmit = async (values: IChangePassWordFormSetup) => {
        if (isStateAuth?.otp_time > 0) {
            return toastCore.error(`Please wait ${isStateAuth?.otp_time} seconds to resend OTP`);
        }

        try {
            const res = await sendOtpMutation.mutateAsync();
            console.log('res', res);

            // if (!res?.isSuccess) {
            //     setToast(true, "error", res?.message);
            //     return;
            // }
            // queryKeyIsStateAuth({
            //     otp_time: res?.time,
            //     form: { ...isStateAuth.form, password: values?.newPassword, email: informationUser?.email_client },
            //     formFile: form,
            // });
            // setOpenDialogCustom(true);
            // setStatusDialog("update_password");
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
