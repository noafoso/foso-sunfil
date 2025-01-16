import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { useStateAuth } from "@/managers/state-management/auth/useStateAuth";
import { useAuthStore } from "@/stores/useAuthStores";
import { IChangePassWordFormSetup } from "@/types/auth/IAuth";
import { useToastStore } from "@/stores/useToastStore";
import { useDialogStore } from "@/stores/useDialogStore";
import { useShowPasswordMulti } from "@/hooks/password/useShowPasswordMulti";
import apiGifts from "@/services/gifts/gifts.services";
import { useStatePageReveicedGift } from "@/app/(client)/reveiced-gift/_state/useStatePageReveicedGift";

export const usePostReveicedGiftCode = (initialFormValue: any) => {
    const dataSubmit = new FormData()

    const { setToast } = useToastStore();

    const { setStatusDialog, setOpenDialogCustom } = useDialogStore();

    const { isStatePageReveicedGift, queryKeyIsStatePageReveicedGift } = useStatePageReveicedGift()

    const form = useForm<any>({
        defaultValues: {
            ...initialFormValue,
        },
    });

    const sendOtpMutation = useMutation({
        mutationFn: async (formData: FormData) => {
            const { data } = await apiGifts.postGetReveicedGiftCode(formData);
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

    const onSubmit = async (values: any, code: string, formGetOtp?: any) => {
        console.log('values', values);

        try {
            dataSubmit.append("code", code)
            dataSubmit.append("phone", values?.phone)
            dataSubmit.append("code_otp", values?.otp)

            const res = await sendOtpMutation.mutateAsync(dataSubmit);

            if (!res?.result) {
                setToast(true, "error", res?.message);
                return;
            }
            setToast(true, "success", res?.message, 2500);
            setOpenDialogCustom(false);
            setStatusDialog("");

            queryKeyIsStatePageReveicedGift({
                otp_time: 0,
                form: {
                    ...isStatePageReveicedGift?.form,
                    phone: null,
                },
                dataGiftDone: res
            });
        } catch (error) {
            throw error;
        }
    };

    return {
        onSubmit,
        form,
        isLoading: sendOtpMutation.isPending,
    };
};
