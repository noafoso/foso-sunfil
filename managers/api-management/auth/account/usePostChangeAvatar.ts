import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useToastStore } from "@/stores/useToastStore";
import apiAuth from "@/services/auth/auth.services";

export const usePostChangeAvatar = () => {
    const queryClient = useQueryClient();
    const { setToast } = useToastStore();

    const updateFormMutate = useMutation({
        mutationFn: async (formData: FormData) => {
            return await apiAuth.postUpdateAvatar(formData);
        },
        onError: (error: any) => {
            throw error;
        },
    });

    const onSubmit = async (values: any) => {
        try {
            let formData = new FormData();
            formData.append("profile_image", values);
            const { data } = await updateFormMutate.mutateAsync(formData);

            if (data?.result) {
                queryClient.invalidateQueries({ queryKey: ["getInfoByToken"] });
                setToast(true, "success", data?.message, 2500);

                return;
            } else {
                setToast(true, "error", data?.message, 2500);
            }
        } catch (error) {
            throw error;
        }
    };

    return {
        isLoading: updateFormMutate.isPending,
        onSubmit,
    };
};
