import { useStateCategories } from "@/app/(client)/categories/_state/useStateCategories";
import { useLanguage } from "@/context/LanguageProvider";
import apiCategories from "@/services/categories/categories.services";
import { IListCategories, IResponCategoriesHome } from "@/types/categories/ICategoryes";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetListEngineAndBody = (
    enebled: boolean = false,
    id_manufacturer: string | number | any,
    id_model: any | any[],
    year: any | any[]
) => {
    const { setLoadingLang } = useLanguage();

    const fetchListEngineAndBody = async () => {
        setLoadingLang(true);
        try {
            const dataSubmit = new FormData();
            dataSubmit.append("id_manufacturer", id_manufacturer);

            if (id_model && id_model.length > 0) {
                id_model.forEach((idModel: any) => dataSubmit.append(`id_model[]`, idModel.value));
            }
            if (year && year.length > 0) {
                year.forEach((idModel: any) => dataSubmit.append(`year[]`, idModel.value));
            }

            const { data } = await apiCategories.postGetListEngineAndBody(dataSubmit);
            setLoadingLang(false);
            if (data && data.success) {
                return {
                    engine_vol: data.data.engine_vol.map((e: any) => {
                        return {
                            value: e,
                            label: e,
                        };
                    }),
                    td_body: data.data.td_body.map((e: any) => {
                        return {
                            value: e,
                            label: e,
                        };
                    }),
                };
            }
        } catch (err) {
            throw err;
        }
    };

    return useQuery<any, Error>({
        queryKey: ["postGetListEngineAndBody", id_manufacturer, id_model, year],
        queryFn: fetchListEngineAndBody,
        placeholderData: keepPreviousData,
        enabled: enebled,
    });
};
