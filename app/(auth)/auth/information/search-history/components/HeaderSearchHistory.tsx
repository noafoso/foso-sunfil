import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import { useStateSearchHistory } from '../_state/useStateSearchHistory'

type Props = {
    handleValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const HeaderSearchHistory = ({ handleValueChange }: Props) => {
    const { isStateSearchHistory, queryKeyIsStateSearchHistory } = useStateSearchHistory()

    return (
        <div className='flex lg:flex-row flex-col lg:items-center lg:justify-between lg:gap-0 gap-4 w-full'>
            <div className='flex items-center gap-2'>
                <span className="text-title text-[#3E424E] font-bold">
                    Search History
                </span>
                {/* <span className='text-xs-default px-1.5 min-w-5 min-h-5 bg-[#333538] text-white rounded-full font-semibold'>
                    0
                </span> */}
            </div>

            <div className="3xl:h-12 h-10 w-full lg:max-w-[40%] max-w-full relative">
                <Search className="3xl:w-6 w-5 3xl:h-6 h-5 absolute top-[25%] left-4 text-[#808990]" />
                <Input
                    type="text"
                    placeholder={"Search code..."}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleValueChange(e) }}
                    value={isStateSearchHistory?.search?.searchCode}
                    className="placeholder:text-[#B2BABD] text-black text-sm-default border-2 border-[#EBEDEE] bg-transparent focus-visible:border-[#07A6FF] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none rounded-3xl px-12 w-full 3xl:h-12 h-10"
                />
                {
                    isStateSearchHistory?.search?.searchCode &&
                    (
                        <RiCloseCircleFill
                            onClick={() => {
                                // setHasMore(false)
                                queryKeyIsStateSearchHistory({
                                    search: {
                                        ...isStateSearchHistory?.search,
                                        searchCode: "",
                                    }
                                })
                            }}
                            className="w-6 h-6 p-1 hover:scale-110 transition-all bg-gray-200 text-[#200E32] rounded-full duration-150 ease-linear absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer z-50"
                        />
                    )
                }
            </div>
        </div>
    )
}

export default HeaderSearchHistory