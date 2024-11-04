import { useStateCategories } from "@/app/categories/_state/useStateCategories";
import apiCategories from "@/services/categories/categories.services";
import { IListCategories, IResponCategoriesHome } from "@/types/categories/ICategoryes";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetListYears = (enebled: boolean = false, id_manufacturer: string | number | any, id_model: any | any[]) => {
    console.log('enebled', enebled);
    console.log('id_manufacturer', id_manufacturer);

    const fetchListYears = async () => {
        try {
            const dataSubmit = new FormData()
            console.log('dataSubmit', dataSubmit);
            dataSubmit.append("id_manufacturer", id_manufacturer)

            if (id_model && id_model.length > 0) {
                id_model.forEach((idModel: any) => dataSubmit.append(`id_model[]`, idModel.value));
            }
            console.log('id_model', id_model);


            const { data } = await apiCategories.postGetListYears(dataSubmit);

            if (data && data.success) {
                return data.data.map((e: any) => {

                    return {
                        value: e,
                        label: e,
                    }
                });
            }
        } catch (err) {
            throw err
        }
    }

    return useQuery<any, Error>({
        queryKey: ["postGetListYears", id_manufacturer, id_model],
        queryFn: fetchListYears,
        placeholderData: keepPreviousData,
        enabled: enebled
    });
};