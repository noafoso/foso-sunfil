
import React, { useMemo, useRef } from 'react'

import { useDebounce } from 'use-debounce'
import { useInView } from 'react-intersection-observer'
import { useStateGiftHistory } from '../_state/useStateGiftHistory'
import CommonTable from '@/components/table/commonTable/CommonTable'
import { HiChevronUpDown } from 'react-icons/hi2'
import useDataTable from '@/hooks/table/useDataTable'
import { ColumnDef } from '@tanstack/react-table'
import { useGetGiftHistoryList } from '@/managers/api-management/auth/gifts/useGetGiftHistoryList'
import Image from 'next/image'
import moment from 'moment'
import { FORMAT_DATE } from '@/constants/FormatDate'
import StatusTag from '@/components/tags/StatusTag'

type Props = {

}

let PERLIMIT = 14

const ListGiftHistory = ({ }: Props = {}) => {
    const { ref, inView } = useInView()
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const { isStateGiftHistory, queryKeyIsStateGiftHistory } = useStateGiftHistory()

    const [valueSearchDebounce] = useDebounce(isStateGiftHistory?.search?.searchCode, 500); // search báo giá

    const { data: dataGiftHistoryList, isFetching: isLoadingGiftHistoryList } = useGetGiftHistoryList({ pageIndex: isStateGiftHistory?.tableGiftList?.pageIndex, pageSize: isStateGiftHistory?.tableGiftList?.pageSize, search: valueSearchDebounce })

    const columnsData: ColumnDef<any>[] = useMemo(() => [
        {
            id: "index",
            accessorKey: "index",
            header: ({ column }) =>
                <div />,
            cell: ({ row }) => {
                const pageIndex = +isStateGiftHistory?.tableGiftList?.pageIndex || 1;
                const pageSize = +isStateGiftHistory?.tableGiftList?.pageSize || 10;
                const indexGift = (pageIndex - 1) * pageSize + row.index + 1;

                // let indexGift = row?.index + 1;

                if (indexGift) {
                    return (
                        <div className="3xl:text-base text-sm text-center text-[#5F656A] py-[14px]">
                            {indexGift}
                        </div>
                    );
                }

                return null;
            },
            size: 100,
            minSize: 100,
            maxSize: 100,
            enableResizing: false, // Disable resizing for this column
        },
        {
            id: "avatar",
            accessorKey: "avatar",
            header: ({ column }) =>
                <div
                    onClick={() => {
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }}
                    className='cursor-pointer select-none 3xl:text-base text-sm flex items-center justify-start w-full h-full text-[#5F656A] font-medium opacity-[74%]'
                >
                    <p>Image</p>
                </div>,
            cell: ({ row }) => {
                console.log('row', row);

                let image = row?.original?.avatar;
                return (
                    <div className='3xl:size-24 3xl:max-w-24 xxl:size-20 xxl:max-w-20 size-16 max-w-16'>
                        <Image
                            alt="gift"
                            src={image ?? "/default/default.png"}
                            width={300}
                            height={300}
                            className='size-full object-contain'
                            unoptimized
                            priority
                        />
                    </div>
                );
            },
            size: 200,
            minSize: 200,
            maxSize: 200,
        },
        {
            id: "name",
            accessorKey: "name",
            header: ({ column }) =>
                <div
                    onClick={() => {
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }}
                    className='cursor-pointer select-none 3xl:text-base text-sm flex items-center justify-start 3xl:max-w-full xl:min-w-[120px] md:min-w-[80px] w-full h-full text-start text-[#5F656A] font-medium opacity-[74%]'
                >
                    <p>Name Event</p>
                </div>,
            cell: ({ row }) => {
                let name = row?.original?.name

                if (name) {
                    return (
                        <div className="3xl:text-base text-sm w-full text-start text-[#5F656A] py-[14px]">
                            {name}
                        </div>
                    );
                }

                return null;
            },
            size: 200,
            minSize: 200,
            maxSize: 200,
        },
        {
            id: "name_gift",
            accessorKey: "name_gift",
            header: ({ column }) =>
                <div
                    onClick={() => { column.toggleSorting(column.getIsSorted() === "asc") }}
                    className='cursor-pointer select-none 3xl:text-base text-sm flex items-center justify-start 3xl:max-w-full xl:min-w-[120px] md:min-w-[80px] w-full h-full text-start text-[#5F656A] font-medium opacity-[74%]'
                >
                    <p>Name Gift</p>
                </div>,
            cell: ({ row }) => {
                let name_gift = row?.original?.name_gift
                if (name_gift) {
                    return (
                        <div className="3xl:text-base text-sm w-full text-start text-[#5F656A] py-[14px]">
                            {name_gift}
                        </div>
                    );
                }

                return null;
            },
            size: 200,
            minSize: 200,
            maxSize: 200,
        },
        {
            id: "content",
            accessorKey: "content",
            header: ({ column }) =>
                <div
                    onClick={() => { column.toggleSorting(column.getIsSorted() === "asc") }}
                    className='cursor-pointer select-none 3xl:text-base text-sm flex items-center justify-start w-full h-full text-start text-[#5F656A] font-medium opacity-[74%]'
                >
                    <p>Description</p>
                </div>,
            cell: ({ row }) => {
                let content = row?.original?.content
                if (content) {
                    return (
                        <div
                            className="3xl:text-base text-sm w-full text-start text-[#5F656A] py-[14px]"
                            dangerouslySetInnerHTML={{ __html: `${content ?? ''}` }}
                        />
                    );
                }

                return null;
            },
            size: 200,
            minSize: 200,
            maxSize: 200,
        },
        {
            id: "code",
            accessorKey: "code",
            header: ({ column }) =>
                <div
                    onClick={() => {
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }}
                    className='cursor-pointer select-none 3xl:text-base text-sm flex items-center justify-start w-full h-full text-start text-[#5F656A] font-medium opacity-[74%]'
                >
                    <p>Code</p>
                </div>,
            cell: ({ row }) => {
                let code = row?.original?.code;
                if (code) {
                    return (
                        <div className="3xl:text-base text-sm w-full text-start text-[#5F656A] py-[14px]">
                            {code}
                        </div>
                    );
                }

                return null;
            },
            size: 200,
            minSize: 200,
            maxSize: 200,
        },
        {
            id: "date_use",
            accessorKey: "date_use",
            header: ({ column }) =>
                <div
                    onClick={() => {
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }}
                    className='cursor-pointer select-none 3xl:text-base text-sm flex items-center justify-start w-full h-full text-start text-[#5F656A] font-medium opacity-[74%]'
                >
                    <p>Date Active</p>
                </div>,
            cell: ({ row }) => {
                let date_use = row?.original?.date_use;
                if (date_use) {
                    return (
                        <div className="3xl:text-base text-sm w-full text-start text-[#5F656A] py-[14px]">
                            {moment(date_use).format(FORMAT_DATE?.DATE_TIME_SLASH_SHORT)}
                        </div>
                    );
                }

                return null;
            },
            size: 200,
            minSize: 200,
            maxSize: 200,
        },
        {
            id: "status",
            accessorKey: "status",
            header: ({ column }) =>
                <div
                    onClick={() => {
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }}
                    className='cursor-pointer select-none 3xl:text-base text-sm flex items-center justify-center w-full h-full text-center text-[#5F656A] font-medium opacity-[74%]'
                >
                    <p>Status</p>
                </div>,
            cell: ({ row }) => {
                let status_receive = row?.original?.status_receive;

                return (
                    <div className='flex items-center justify-center'>
                        <StatusTag status={status_receive === "0" ? "not_received" : "received"} />
                    </div>
                    // <div
                    //     style={{
                    //         color: row?.original?.status?.color,
                    //         backgroundColor: `${row?.original?.status?.color}30`
                    //     }}
                    //     className="3xl:text-base text-sm w-fit text-start text-[#5F656A] py-1 px-2 rounded-md font-medium flex items-center gap-1.5"
                    // >
                    //     <div className="w-2 h-2 rounded-full" style={{ backgroundColor: row?.original?.status?.color }} />
                    //     <p className='text-nowrap whitespace-nowrap'>{status_receive}</p>
                    // </div >
                );
            },
            size: 140,
            minSize: 140,
            maxSize: 140,
        },
    ], [isStateGiftHistory?.tableGiftList, valueSearchDebounce])

    const tableInstance = useDataTable({
        data: dataGiftHistoryList?.gift || [],
        columns: columnsData,
        pageCount: +isStateGiftHistory?.tableGiftList?.pageCount,
        pageSizeState: +isStateGiftHistory?.tableGiftList?.pageSize,
        manualPagination: true,
        onPaginationChange: ({ pageIndex, pageSize }) => {
            if (pageSize != +isStateGiftHistory?.tableGiftList?.pageSize && +isStateGiftHistory?.tableGiftList?.pageSize != 0) {
                tableInstance.setPageIndex(0)
                queryKeyIsStateGiftHistory({
                    tableGiftList: {
                        ...isStateGiftHistory?.tableGiftList,
                        pageIndex: 1,
                        pageSize: pageSize
                    }
                })
                return
            }
            queryKeyIsStateGiftHistory({
                tableGiftList: {
                    ...isStateGiftHistory?.tableGiftList,
                    pageIndex: pageIndex + 1,
                    pageSize: pageSize
                }
            })
        },
    });

    const handlePaginationChange = (newPageIndex: number) => {
        tableInstance.setPageIndex(newPageIndex)
        queryKeyIsStateGiftHistory({
            tableGiftList: {
                ...isStateGiftHistory?.tableGiftList,
                pageIndex: newPageIndex + 1,
                pageSize: tableInstance.getState().pagination.pageSize
            }
        })
    }

    return (
        <CommonTable
            columns={columnsData}
            table={tableInstance}
            classNameTableHeader='bg-[#F4F4F5]'
            pageCount={+isStateGiftHistory?.tableGiftList?.pageCount}
            onPaginationChange={handlePaginationChange}
            type='gift-history'
            isLoading={isLoadingGiftHistoryList}
        />
    )
}

export default ListGiftHistory