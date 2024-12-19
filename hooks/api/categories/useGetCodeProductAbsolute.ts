import { useLanguage } from "@/context/LanguageProvider";
import apiCategories from "@/services/categories/categories.services";
import { IDetailCodeProduct } from "@/types/products/IProducts";
import { useQuery } from "@tanstack/react-query";

export const useGetCodeProductAbsolute = (code: string, type: string) => {
    const { setLoadingLang } = useLanguage();

    const fetchCodeProductAbsolute = async () => {
        setLoadingLang(true);
        const { data } = await apiCategories.getCodeProductAbsolute(code);

        setLoadingLang(false);
        if (data && data.success) {
            return data.data as IDetailCodeProduct;
        } else {
            return undefined;
        }
    };

    return useQuery<any>({
        queryKey: ["getCodeProductAbsolute", code],
        queryFn: fetchCodeProductAbsolute,
        enabled: !!code && !!(type !== "list"),
    });
};
