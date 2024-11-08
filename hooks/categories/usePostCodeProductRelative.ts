import { useLanguage } from "@/context/LanguageProvider";
import apiCategories from "@/services/categories/categories.services";
import { useQuery } from "@tanstack/react-query";

export const usePostCodeProductRelative = (code: string, type: string) => {
    const { setLoadingLang } = useLanguage();

    const fetchCodeProductRelative = async () => {
        setLoadingLang(true);
        try {
            const dataSubmit = new FormData();
            dataSubmit.append("code", code);

            const { data } = await apiCategories.postCodeProductRelative(dataSubmit);
            setLoadingLang(false);
            if (data && data.success) {
                return data;
            } else {
                return undefined;
            }
        } catch (err) {
            throw err;
        }
    };

    return useQuery<any>({
        queryKey: ["postCodeProductRelative", code],
        queryFn: fetchCodeProductRelative,
        enabled: !!code && !!(type === "list"),
    });
};
