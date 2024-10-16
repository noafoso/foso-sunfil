import apiCategories from "@/services/categories/categories.services";
import { IDetailCodeProduct } from "@/types/products/IProducts";
import { useQuery } from "@tanstack/react-query";

export const usePostCodeProductRelative = (code: string, type: string) => {
    console.log('type type', type);

    const fetchCodeProductRelative = async () => {
        try {
            const dataSubmit = new FormData()
            dataSubmit.append("code", code)

            const { data } = await apiCategories.postCodeProductRelative(dataSubmit);

            if (data && data.success) {
                return data
            } else {
                return undefined
            }
        } catch (err) {
            throw err
        }
    };

    return useQuery<any>({
        queryKey: ["postCodeProductRelative", code],
        queryFn: fetchCodeProductRelative,
        enabled: !!code && !!(type === "list"),
    });
};
