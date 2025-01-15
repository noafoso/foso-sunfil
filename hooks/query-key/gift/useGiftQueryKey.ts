
interface ListOptions {
    enabled?: boolean; // enabled là tùy chọn
    [key: string]: any; // Chấp nhận các thuộc tính khác
}

export const useGiftQueryKey = () => {
    return {
        // key api check code
        keyReveicedGift: {
            checkCode: (filter: Record<string, any> = {}, options: ListOptions = {}) => ({
                key: ["getCheckGiftCode", ...Object.values(filter)],
                options: {
                    enabled: options.enabled !== undefined ? options.enabled : true, // Truyền động enabled
                    ...options, // Kế thừa các option khác
                },
            })
        }
    };
};
