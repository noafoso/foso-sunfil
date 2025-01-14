
export const useCommonListQueryKeys = () => {
    return {
        // key danh sách lịch sử tìm kiếm mã sản phẩm (theo tài khoản)
        keySearchHistory: {
            list: (filter = {}) => ({
                key: ["getSearchHistoryList", ...Object.values(filter)],
            }),
        },
        keyGiftHistory: {
            list: (filter = {}) => ({
                key: ["getGiftsHistoryList", filter],
            }),
        }
    };
};
