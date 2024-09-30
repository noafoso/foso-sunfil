import apiContact from "@/services/contact/contact.services";
import { IQuestionResponse } from "@/types/contact/IContact";
import { keepPreviousData, useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useGetListQuestion = () => {
    const fetchListQuestion = async ({ pageParam = "1" }: any) => {
        const { data } = await apiContact.getListQuestion(pageParam, "10");
        return data;
    };

    return useInfiniteQuery<IQuestionResponse, Error>({
        queryKey: ["getListQuestion"],
        queryFn: fetchListQuestion,
        getNextPageParam: (lastPage: any, pages: any) => {
            return lastPage?.next_page > 0 ? pages?.length + 1 : null;
        },
        staleTime: 10000,
        placeholderData: keepPreviousData,
        retry: 5,
        retryDelay: 5000,
        initialPageParam: 1,
    });
};
