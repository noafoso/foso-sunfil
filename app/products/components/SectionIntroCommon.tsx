import { montserrat_sans } from '@/utils/fonts/fonts'
import React from 'react'

type Props = {
    title: string,
    description: string
}

const SectionIntroCommon = ({ title, description }: Props) => {
    return (
        <div className="pt-[112px] min-h-[500px] grid grid-cols-12 bg-[url('/background/common/bg-intro-common.png')] bg-center bg-no-repeat bg-cover">
            <div className='col-span-1' />
            <div className='col-span-6 flex flex-col justify-center gap-4 h-full'>
                <div className={`${montserrat_sans.className} 3xl:text-[60px] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] text-[40px] leading-[70px] font-extrabold`}>
                    {title}
                </div>
                <div className='text-content-common text-[#1A1B20]/80 max-w-[80%]'>
                    {description}
                </div>
            </div>
            <div className='col-span-5' />
        </div>
    )
}

export default SectionIntroCommon