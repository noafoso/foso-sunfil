import { useLanguage } from "@/context/LanguageProvider";
import apiCategories from "@/services/categories/categories.services";
import { useQuery } from "@tanstack/react-query";

export const useGetDetailCategories = (id: string) => {
    const { setLoadingLang } = useLanguage();

    const fetchDetailCategories = async () => {
        setLoadingLang(true);
        const { data } = await apiCategories.getDetailCategories(id);
        setLoadingLang(false);
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
