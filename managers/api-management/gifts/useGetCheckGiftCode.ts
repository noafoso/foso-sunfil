import { useStateGiftHistory } from "@/app/(auth)/auth/information/gift-history/_state/useStateGiftHistory";
import { useCommonListQueryKeys } from "@/hooks/query-key/common-list/useCommonListQueryKeys";
import { useGiftQueryKey } from "@/hooks/query-key/gift/useGiftQueryKey";
import apiGifts from "@/services/gifts/gifts.services";
import { useToastStore } from "@/stores/useToastStore";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type CheckCodeGiftListProps = {
    code: string
}

export const useGetCheckGiftCode = ({ code }: CheckCodeGiftListProps) => {
    const router = useRouter()
    const { setToast } = useToastStore()

    const { keyReveicedGift } = useGiftQueryKey();
    const { key, options } = keyReveicedGift.checkCode({ code });

    const fetchCheckGiftCode = async () => {
        try {
            const { data } = await apiGifts.getCheckGiftCode(code);

            if (data?.result) {
                return data
            }

            // router.push("/")
            setToast(true, "warning", data?.message, 2500);
            return data
        } catch (err) {
            throw err;
        }
    };

    return useQuery({
        queryKey: [...key],
        queryFn: fetchCheckGiftCode,
        placeholderData: keepPreviousData,
        retry: 3,
        gcTime: 5000,
        retryDelay: 1000,
        ...options,
    });
};
