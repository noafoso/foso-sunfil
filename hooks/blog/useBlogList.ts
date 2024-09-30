import apiBlog from "@/services/blog/blog.services";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useBlogList = (params: any, enabled: boolean = true) => {
    return useInfiniteQuery({
        queryKey: ["getListBlog", { ...params }],
        queryFn: async ({ pageParam = 1 }) => {
            const { data } = await apiBlog.getListBlog({
                ...params,
                page: pageParam,
            });
            return data;
        },
        staleTime: 10000,
        getNextPageParam: (lastPage: any, pages: any) => {
            return lastPage?.next_page ? pages?.length + 1 : null;
        },
        retry: 5,
        retryDelay: 5000,
        initialPageParam: 1,
        enabled: enabled,
    });
};
