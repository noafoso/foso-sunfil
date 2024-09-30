import apiBlog from "@/services/blog/blog.services";
import { useQuery } from "@tanstack/react-query";

export const useBlogHot = (params: any) => {
    return useQuery({
        queryKey: ["getListBlogHot", { ...params }],
        queryFn: async () => {
            const { data } = await apiBlog.getListBlog(params);
            return data;
        },
    });
};
