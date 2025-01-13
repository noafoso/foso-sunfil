import { useLanguage } from "@/context/LanguageProvider";
import apiBlog from "@/services/blog/blog.services";
import { useQuery } from "@tanstack/react-query";

export const useBlogOutStanding = (params: any) => {
    const { setLoadingLang } = useLanguage();
    return useQuery({
        queryKey: ["getListBlogOutStanding", { ...params }],
        queryFn: async () => {
            setLoadingLang(true);
            const { data } = await apiBlog.getListBlog(params);
            setLoadingLang(false);
            return data;
        },
    });
};
