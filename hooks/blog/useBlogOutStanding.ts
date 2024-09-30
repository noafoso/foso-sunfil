import apiBlog from "@/services/blog/blog.services";
import { useQuery } from "@tanstack/react-query";

export const useBlogOutStanding = (params: any) => {
    return useQuery({
        queryKey: ["getListBlogOutStanding", { ...params }],
        queryFn: async () => {
            const { data } = await apiBlog.getListBlog(params);
            return data;
        },
    });
};
