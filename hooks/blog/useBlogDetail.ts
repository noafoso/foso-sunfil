import apiBlog from "@/services/blog/blog.services";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useBlogDetail = (id: string) => {
    const { push } = useRouter();
    return useQuery({
        queryKey: ["getDetailBlog", id],
        queryFn: async () => {
            const { data } = await apiBlog.getDetailBlog(id);
            if (!data?.result) {
                push("/blogs");
            }
            return data;
        },
        enabled: !!id,
    });
};
