import apiCategories from "@/services/categories/categories.services";
import { IDetailCodeProduct } from "@/types/products/IProducts";
import { useQuery } from "@tanstack/react-query";

export const useGetCodeProductAbsolute = (code: string) => {
    const fetchCodeProductAbsolute = async () => {
        const { data } = await apiCategories.getCodeProductAbsolute(code);

        if (data && data.success) {
            return data.data as IDetailCodeProduct;
        } else {
            return undefined
        }
    };

    return useQuery<any>({
        queryKey: ["getCodeProductAbsolute", code],
        queryFn: fetchCodeProductAbsolute,
        enabled: !!code,
    });
};
