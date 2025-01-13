import moment from "moment";
import { useForm } from "react-hook-form";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { IChangeProfileFormSetup, IInformationUser } from "@/types/auth/IAuth";

import apiAuth from "@/services/auth/auth.services";

import { FORMAT_DATE } from "@/constants/FormatDate";
import { useToastStore } from "@/stores/useToastStore";
import { useStateProfile } from "@/app/(auth)/auth/information/profile/_state/useStateProfile";


export const usePostChangeProfile = (initialFormValue: IChangeProfileFormSetup) => {
    const queryClient = useQueryClient();
    const { queryKeyIsStateProfile } = useStateProfile()
    const { setToast } = useToastStore()

    const form = useForm<IChangeProfileFormSetup>({
        defaultValues: {
            ...initialFormValue,
        },
    });

    const setFormValues = (informationUser: IInformationUser) => {
        const setValueForm = [
            { name: "fullname", value: informationUser?.company },
            { name: "email", value: informationUser?.email_client },
            { name: "phone", value: informationUser?.phonenumber },
            { name: "dateOfBirth", value: informationUser?.birtday ?? null },
            { name: "gender", value: informationUser?.gender ?? null },
        ];

        setValueForm.forEach((item: any) => {
            form.setValue(item.name, item.value);
        });
    };

    const updateFormMutate = useMutation({
        mutationFn: async (formData: FormData) => {
            return await apiAuth.postUpdateProfile(formData);
        },
        onError: (error: any) => {
            throw error;
        },
    });

    const onSubmit = async (values: IChangeProfileFormSetup) => {
        try {
            let formData = new FormData();
            formData.append("company", values?.fullname);
            formData.append("email_client", values?.email);
            formData.append("phonenumber", values?.phone);
            formData.append("birtday", values?.dateOfBirth ? moment(values?.dateOfBirth).format(FORMAT_DATE.DATE_SLASH_LONG) : null as any);
            formData.append("gender", values?.gender);
            const { data } = await updateFormMutate.mutateAsync(formData);

            if (data?.result) {
                queryClient.invalidateQueries({ queryKey: ["getInfoByToken"] });

                setToast(true, "success", data?.message, 2500);

                queryKeyIsStateProfile({
                    flagEditInfo: false
                })
                return;
            }
            setToast(true, "error", data?.message, 2500);
        } catch (error) {
            throw error;
        }
    };

    return {
        form,
        isLoading: updateFormMutate.isPending,
        onSubmit,
        setFormValues,
    };
};
