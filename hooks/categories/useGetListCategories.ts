import apiCategories from "@/services/categories/categories.services";
import { IResponCategoriesHome } from "@/types/categories/ICategoryes";
import { useQuery } from "@tanstack/react-query";

export const useGetListCategories = () => {
    return useQuery<IResponCategoriesHome, Error>({
        queryKey: ["getCategory"],
        queryFn: async () => {
            const { data } = await apiCategories.getCategory();
            return data;
        },
    });
};
