
import moment from 'moment'

import React, { useEffect, useMemo, useRef } from 'react'

import { useDebounce } from 'use-debounce'

import { useSearchHistoryList } from '@/managers/api-management/auth/common-list/useSearchHistoryList'
import { FORMAT_DATE } from '@/constants/FormatDate'

import SystemNodata from '@/components/system/SystemNodata'
import ButtonAnimation from '@/components/button/ButtonAnimation'

import { useStateSearchHistory } from '../_state/useStateSearchHistory'

import { Eye } from 'lucide-react'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import LoadingComponent from '@/components/loading/LoadingComponent'
import Image from 'next/image'

type Props = {

}

let PERLIMIT = 14

const ListSearchHistory = ({ }: Props = {}) => {
    const { ref, inView } = useInView()
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const { isStateSearchHistory, queryKeyIsStateSearchHistory } = useStateSearchHistory()

    const [valueSearchCode] = useDebounce(isStateSearchHistory?.search?.searchCode, 500); // search báo giá

    const { data: dataSearchHistoryList, isLoading: isLoadingSearchHistoryList, hasNextPage, fetchNextPage } = useSearchHistoryList({ valueSearchCode: valueSearchCode, limit: PERLIMIT })

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage()
        }
    }, [inView, fetchNextPage])

    const flatSearchHistoryList = useMemo(() =>
        dataSearchHistoryList ? dataSearchHistoryList?.pages?.flatMap(page => page?.data?.history_search_products) : [],
        [dataSearchHistoryList]
    );

    console.log('flatSearchHistoryList', flatSearchHistoryList);

    return (
        <React.Fragment>
            <div ref={scrollContainerRef} className='grid grid-cols-2 xl:gap-6 gap-4 w-full h-full'>
                {
                    flatSearchHistoryList && flatSearchHistoryList?.length > 0 ?
                        (
                            flatSearchHistoryList?.map((item, index) => (
                                <Link
                                    target='_blank'
                                    key={`code-${item.id}`}
                                    href={`/categories?code=${item.code}&type=list`}
                                    className='lg:col-span-1 col-span-2 flex items-center justify-between gap-2 p-4 bg-white hover:bg-slate-50 rounded-lg shadow group custom-transition cursor-pointer'
                                >
                                    <div className='flex items-center gap-2'>
                                        <div className='xl:size-16 size-14 aspect-square overflow-hidden'>
                                            <Image
                                                alt="prod"
                                                src={item?.images ?? "/default/default.png"}
                                                width={200}
                                                height={200}
                                                className='size-full object-contain group-hover:scale-105 custom-transition'
                                            />
                                        </div>

                                        <div className='flex flex-col'>
                                            <div className='3xl:!text-lg xl:!text-base lg:!text-sm md:!text-lg text-sm !tracking-[1%] font-semibold'>
                                                {item?.code ?? ""}
                                            </div>

                                            <div className='3xl:!text-base xl:!text-sm lg:!text-[11px] md:!text-base text-xs !tracking-[1%] text-gray-500'>
                                                {moment(item?.date_created).format(FORMAT_DATE?.DATE_TIME_SLASH_SHORT_FULL)}
                                            </div>
                                        </div>
                                    </div>

                                    <ButtonAnimation
                                        type="button"
                                        icon={
                                            <div className='size-5 max-w-5'>
                                                <Eye className="size-full" />
                                            </div>
                                        }
                                        title_button="Xem chi tiết"
                                        className='3xl:text-base text-sm flex items-center gap-2 border rounded-md px-3 py-1 group-hover:bg-[#07A6FF] group-hover:text-white group-hover:border-transparent duration-300'
                                    />
                                </Link>
                            ))
                        )
                        :
                        (
                            <SystemNodata type="search-history" className='col-span-2 flex justify-center items-center h-full' />
                        )
                }
            </div>

            {
                (hasNextPage) && <LoadingComponent ref={ref} />
            }
        </React.Fragment>
    )
}

export default ListSearchHistory