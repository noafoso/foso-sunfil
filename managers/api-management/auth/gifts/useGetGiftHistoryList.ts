import { useStateGiftHistory } from "@/app/(auth)/auth/information/gift-history/_state/useStateGiftHistory";
import { useCommonListQueryKeys } from "@/hooks/query-key/common-list/useCommonListQueryKeys";
import apiGifts from "@/services/gifts/gifts.services";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

type GiftHistoryListProps = {
    pageIndex: string | number
    pageSize: string | number
    search: string
}

export const useGetGiftHistoryList = ({ pageIndex, pageSize, search }: GiftHistoryListProps) => {
    const { isStateGiftHistory, queryKeyIsStateGiftHistory } = useStateGiftHistory();
    const dataSubmit = new FormData()

    const { keyGiftHistory } = useCommonListQueryKeys();

    const { key } = keyGiftHistory.list({ pageIndex: pageIndex, pageSize: pageSize, search: search });

    const fetchDataTransactionHistory = async () => {
        try {
            if (search) {
                dataSubmit.append("search", search)
            }

            const { data } = await apiGifts.getGiftsHistoryList(pageIndex, pageSize, dataSubmit);

            queryKeyIsStateGiftHistory({
                tableGiftList: {
                    ...isStateGiftHistory?.tableGiftList,
                    pageCount: data?.total_page,
                }
            });

            return data

            // return {
            //     ...data,
            //     data: data?.gift?.map((e: any, index: number) => {
            //         return {
            //             ...e,
            //             index: index + 1,
            //         };
            //     }),
            // };
        } catch (err) {
            throw err;
        }
    };

    return useQuery({
        queryKey: [...key],
        queryFn: fetchDataTransactionHistory,
        placeholderData: keepPreviousData,
        retry: 3,
        gcTime: 5000,
        retryDelay: 1000,
        // ...options,
    });
};
