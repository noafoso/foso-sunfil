import { useStateCategories } from "@/app/categories/_state/useStateCategories";
import { useLanguage } from "@/context/LanguageProvider";
import apiCategories from "@/services/categories/categories.services";
import { IListCategories, IResponCategoriesHome } from "@/types/categories/ICategoryes";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetListModels = (enebled: boolean = false, id_manufacturer: string | number | any) => {
    const { setLoadingLang } = useLanguage();

    const fetchListModels = async () => {
        setLoadingLang(true);
        try {
            const { data } = await apiCategories.postGetListModels(id_manufacturer);
            setLoadingLang(false);

            if (data && data.success) {
                return data.data.map((e: any) => {
                    return {
                        value: e?.id,
                        label: e?.name,
                    };
                });
            }
        } catch (err) {
            throw err;
        }
    };

    return useQuery<any, Error>({
        queryKey: ["postGetListModels", id_manufacturer],
        queryFn: fetchListModels,
        placeholderData: keepPreviousData,
        enabled: enebled,
    });
};
