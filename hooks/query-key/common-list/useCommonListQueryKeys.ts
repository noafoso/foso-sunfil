
export const useCommonListQueryKeys = () => {
    return {
        // key danh sách lịch sử tìm kiếm mã sản phẩm
        keySearchHistory: {
            list: (filter = {}) => ({
                key: ["getSearchHistoryList", ...Object.values(filter)],
            }),
        },

        // key danh sách lịch sử quà tặng 
        keyGiftHistory: {
            list: (filter = {}) => ({
                key: ["getGiftsHistoryList", ...Object.values(filter)],
            }),
        }
    };
};
