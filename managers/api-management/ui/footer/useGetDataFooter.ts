import { useLanguage } from "@/context/LanguageProvider";
import apiAboutUs from "@/services/ui/about-us/aboutUs.services";
import apiFooter from "@/services/ui/footer/footer.services";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

type Props = {
    enebled: boolean
}

export const useGetDataFooter = ({
    enebled = false
}: Props) => {
    const { setLoadingLang } = useLanguage();

    const fetchDataFooter = async () => {
        setLoadingLang(true);
        try {
            const { data } = await apiFooter.getDataFooter();

            setLoadingLang(false);

            return data
        } catch (err) {
            throw err;
        }
    };

    return useQuery<any, Error>({
        queryKey: ["getDataFooter"],
        queryFn: fetchDataFooter,
        placeholderData: keepPreviousData,
        enabled: enebled,
        staleTime: 60000
    });
};
