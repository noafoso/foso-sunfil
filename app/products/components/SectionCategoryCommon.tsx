import TitleHighlight from '@/components/title/TitleHighlight'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

type Props = {
    backgroundImage: string
    index: boolean
    title: string
    description: string
}

const SectionCategoryCommon = ({ backgroundImage, index, title, description }: Props) => {
    return (
        <div className='min-h-[500px] grid grid-cols-12 group'>
            <div className={`${index && "order-2"} col-span-6 overflow-hidden h-[500px]`}>
                <Image
                    width={1920}
                    height={1080}
                    alt="product"
                    className='size-full object-cover object-center group-hover:scale-105 custom-transition'
                    src={backgroundImage}
                />
            </div>

            <div className={`${index && "order-1"} col-span-6 flex flex-col justify-center items-center 3xl:gap-6 gap-4 ml-20 max-w-[75%] relative`}>
                <TitleHighlight
                    title={title}
                    containerClassName='text-start w-full'
                    titleClassName='text-start'
                    highlightClassName='w-[62%] top-7 -right-2 bg-[#6AD6EEA6]/65'
                />
                <div className='text-content-common text-[#1A1B20]/80'>
                    {description}
                </div>

                <div className='w-full text-start'>
                    <Button
                        type="button"
                        className='3xl:text-lg text-base h-full uppercase font-bold bg-white hover:bg-[#1D1D1D]/[5%] text-[#1D1D1D] border-2 border-[#1D1D1D] rounded-[4px] transition-all duration-300 ease-in-out'
                    >
                        Tìm Hiểu thêm
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SectionCategoryCommon