import { useLanguage } from "@/context/LanguageProvider";
import apiBlog from "@/services/blog/blog.services";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useBlogDetail = (id: string) => {
    const { push } = useRouter();
    const { setLoadingLang } = useLanguage();

    return useQuery({
        queryKey: ["getDetailBlog", id],
        queryFn: async () => {
            setLoadingLang(true);
            const { data } = await apiBlog.getDetailBlog(id);
            if (!data?.result) {
                push("/blogs");
            }
            setLoadingLang(false);
            return data;
        },
        enabled: !!id,
    });
};
