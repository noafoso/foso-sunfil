'use client'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useMemo } from 'react'
import { useDebounce } from 'use-debounce'
import { useStateSearchHistory } from './_state/useStateSearchHistory'
import { RiCloseCircleFill } from 'react-icons/ri'
import { useSearchHistoryList } from '@/managers/api-management/auth/common-list/useSearchHistoryList'
import HeaderSearchHistory from './components/HeaderSearchHistory'
import ListSearchHistory from './components/ListSearchHistory'

type Props = {}



const SearchHistory = (props: Props) => {
    const { isStateSearchHistory, queryKeyIsStateSearchHistory } = useStateSearchHistory()

    // change input search
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        queryKeyIsStateSearchHistory({
            search: {
                ...isStateSearchHistory?.search,
                searchCode: e.target.value,
            }
        })
    }

    return (
        <div className={`3xl:p-8 md:p-6 px-2 py-6 flex flex-col 3xl:gap-6 gap-4 h-full w-full max-w-full`}>
            <HeaderSearchHistory handleValueChange={handleValueChange} />
            <ListSearchHistory />
        </div>
    )
}

export default SearchHistory