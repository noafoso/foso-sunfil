import { useLanguage } from "@/context/LanguageProvider";
import apiCategories from "@/services/categories/categories.services";
import { IListCategories, IResponCategoriesHome } from "@/types/categories/ICategoryes";
import { useQuery } from "@tanstack/react-query";

export const useGetListCategories = () => {
    const { setLoadingLang } = useLanguage();

    const fetchListCategories = async () => {
        setLoadingLang(true);
        const { data } = await apiCategories.getListCategories();
        setLoadingLang(false);
        if (data && data.result) {
            return data.data;
        }
    };

    return useQuery<IListCategories[], Error>({
        queryKey: ["getListCategories"],
        queryFn: fetchListCategories,
    });
};
