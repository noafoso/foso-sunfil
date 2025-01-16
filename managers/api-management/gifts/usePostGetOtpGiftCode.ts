import moment from "moment";
import { useForm } from "react-hook-form";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { IChangeProfileFormSetup, IInformationUser } from "@/types/auth/IAuth";

import apiAuth from "@/services/auth/auth.services";

import { FORMAT_DATE } from "@/constants/FormatDate";
import { useToastStore } from "@/stores/useToastStore";
import { useStateProfile } from "@/app/(auth)/auth/information/profile/_state/useStateProfile";
import apiGifts from "@/services/gifts/gifts.services";
import { useStatePageReveicedGift } from "@/app/(client)/reveiced-gift/_state/useStatePageReveicedGift";
import { useDialogStore } from "@/stores/useDialogStore";

type OtpGiftCodeProps = {
    initialFormValue: any
}

export const usePostGetOtpGiftCode = ({ initialFormValue }: OtpGiftCodeProps) => {
    const queryClient = useQueryClient();
    const { setToast } = useToastStore()
    const { setStatusDialog, setOpenDialogCustom } = useDialogStore()
    const { queryKeyIsStatePageReveicedGift } = useStatePageReveicedGift()

    const form = useForm<IChangeProfileFormSetup>({
        defaultValues: {
            ...initialFormValue,
        },
    });

    const setFormValues = (informationUser: IInformationUser) => {
        const setValueForm = [
            { name: "phone", value: informationUser?.phonenumber ?? "" },
        ];

        setValueForm.forEach((item: any) => {
            form.setValue(item.name, item.value);
        });
    };

    const updateFormMutate = useMutation({
        mutationFn: async (formData: FormData) => {
            return await apiGifts.postGetOtpGiftCode(formData);
        },
        onError: (error: any) => {
            throw error;
        },
    });

    const onSubmit = async (values: any, code: string) => {
        try {
            let formData = new FormData();
            if (values?.fullname) {
                formData.append("name", values?.fullname);
                formData.append("type_request", "addClients");
            } else {
                formData.append("type_request", "send_otp");
            }
            formData.append("phone", values?.phone);
            formData.append("code", code);

            const { data } = await updateFormMutate.mutateAsync(formData);

            if (data?.result) {
                queryClient.invalidateQueries({ queryKey: ["getInfoByToken"] });

                setToast(true, "success", data?.message, 2500);

                queryKeyIsStatePageReveicedGift({
                    otp_time: data?.data?.time,
                    form: {
                        phone: values?.phone
                    }
                })

                setOpenDialogCustom(true)
                setStatusDialog("otp_reveiced_gift")
                return data;
            }

            if (!data?.is_user) {
                queryKeyIsStatePageReveicedGift({
                    disablePhoneInput: true,
                    showFullNameField: true
                })
            }
            
            setToast(true, "error", data?.message, 2500);
            return data;
        } catch (error) {
            throw error;
        }
    };

    return {
        form,
        isLoading: updateFormMutate.isPending,
        data: updateFormMutate.data?.data,
        onSubmit,
        setFormValues,
    };
};
