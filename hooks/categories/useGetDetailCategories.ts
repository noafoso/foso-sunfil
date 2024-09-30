import apiCategories from "@/services/categories/categories.services";
import { useQuery } from "@tanstack/react-query";

export const useGetDetailCategories = (id: string) => {
    const fetchDetailCategories = async () => {
        const { data } = await apiCategories.getDetailCategories(id);

        if (data && data.result) {
            return data.data;
        }
    };

    return useQuery<any>({
        queryKey: ["getDetailCategories", id],
        queryFn: fetchDetailCategories,
        enabled: !!id,
    });
};
