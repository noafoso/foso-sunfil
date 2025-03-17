import { useLanguage } from "@/context/LanguageProvider";
import apiAboutUs from "@/services/ui/about-us/aboutUs.services";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

type Props = {
    enebled: boolean
}

export const useGetDataPageAboutUs = ({
    enebled = false
}: Props) => {
    const { setLoadingLang } = useLanguage();

    const fetchDataPageAboutUs = async () => {
        setLoadingLang(true);
        try {
            const { data } = await apiAboutUs.getDataPageAboutUs();

            setLoadingLang(false);

            return data
        } catch (err) {
            throw err;
        }
    };

    return useQuery<any, Error>({
        queryKey: ["getDataPageAboutUs"],
        queryFn: fetchDataPageAboutUs,
        placeholderData: keepPreviousData,
        enabled: enebled,
        staleTime: 60000
    });
};
