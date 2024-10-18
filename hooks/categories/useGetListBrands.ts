import { useStateCategories } from "@/app/categories/_state/useStateCategories";
import apiCategories from "@/services/categories/categories.services";
import { IListCategories, IResponCategoriesHome } from "@/types/categories/ICategoryes";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetListBrands = (enebled: boolean = false) => {
    const fetchListBrands = async () => {
        try {
            const { data } = await apiCategories.postGetListBrands();

            if (data && data.success) {
                return data.data.map((e: any) => {

                    return {
                        value: e?.id,
                        label: e?.name,
                    }
                });
            }
        } catch (err) {
            throw err
        }
    }

    return useQuery<any, Error>({
        queryKey: ["postGetListBrands"],
        queryFn: fetchListBrands,
        placeholderData: keepPreviousData,
        enabled: enebled
    });
};
