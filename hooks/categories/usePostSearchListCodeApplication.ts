import apiCategories from "@/services/categories/categories.services";
import { useMutation } from "@tanstack/react-query";

export const usePostSearchListCodeApplication = () => {

    const searchListCodeApplication = useMutation({
        mutationFn: async (dataForm: FormData) => {
            const { data } = await apiCategories.postSearchCodeApplication(dataForm);
            console.log('data data:', data);


            if (data && data.success) {
                const newDataCustom = data.data.map((e: any, index: number) => {
                    return {
                        detail: e,
                        id: index + 1,
                        name: `${e[0].manufacturer} >> ${e[0].model}`,
                    }
                })

                return { parameter: newDataCustom };
            }
        },
        onSuccess: (data) => {
            console.log('data', data);
        },
        onError: (error: any) => {
            throw new Error(error);
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const dataSubmit = new FormData()
            dataSubmit.append("id_manufacturer", data?.brand?.value)

            if (data?.model?.length > 0) {
                data?.model?.forEach((idModel: any) => dataSubmit.append(`id_model[]`, idModel.value));
            }

            if (data?.year?.length > 0) {
                data?.year?.forEach((idModel: any) => dataSubmit.append(`year[]`, idModel.value));
            }

            if (data?.engine?.length > 0) {
                data?.engine?.forEach((idModel: any) => dataSubmit.append(`engine_vol[]`, idModel.value));
            }

            if (data?.body?.length > 0) {
                data?.body?.forEach((idModel: any) => dataSubmit.append(`td_body[]`, idModel.value));
            }

            searchListCodeApplication.mutate(dataSubmit);
        } catch (err) {
            throw err
        }
    };

    return {
        onSubmit,
        isLoading: searchListCodeApplication.isPending,
        dataListCodeApplication: searchListCodeApplication?.data,
    };
};
