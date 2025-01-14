'use client'

import React from 'react'
import HeaderGiftHistory from './components/HeaderGiftHistory'
import ListGiftHistory from './components/ListGiftHistory'
import { useStateGiftHistory } from './_state/useStateGiftHistory'

type Props = {}

const SearchHistory = (props: Props) => {
    const { isStateGiftHistory, queryKeyIsStateGiftHistory } = useStateGiftHistory()

    // change input search
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        queryKeyIsStateGiftHistory({
            search: {
                ...isStateGiftHistory?.search,
                searchCode: e.target.value,
            }
        })
    }


    return (
        <div className={`3xl:p-8 md:p-6 px-2 py-6 flex flex-col 3xl:gap-6 gap-4 h-full w-full max-w-full`}>
            <HeaderGiftHistory handleValueChange={handleValueChange} />
            <ListGiftHistory />
        </div>
    )
}

export default SearchHistory