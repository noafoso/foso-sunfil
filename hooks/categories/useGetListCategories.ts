import apiCategories from "@/services/categories/categories.services";
import { IListCategories, IResponCategoriesHome } from "@/types/categories/ICategoryes";
import { useQuery } from "@tanstack/react-query";

export const useGetListCategories = () => {
    const fetchListCategories = async () => {
        const { data } = await apiCategories.getListCategories();

        if (data && data.result) {
            return data.data;
        }
    }

    return useQuery<IListCategories[], Error>({
        queryKey: ["getListCategories"],
        queryFn: fetchListCategories,
    });
};
