import { montserrat_sans } from '@/utils/fonts/fonts'
import React from 'react'

type Props = {
    title: string,
    description: string
}

const SectionIntroCommon = ({ title, description }: Props) => {
    return (
        <div className="pt-[112px] pb-4 3xl:min-h-[500px] xxl:min-h-[400px] md:min-h-[365px] min-h-[300px] grid grid-cols-12 bg-[url('/background/common/bg-intro-common.png')] bg-center bg-no-repeat bg-cover">
            <div className='lg:col-span-1' />
            <div className='lg:col-span-6 col-span-12 lg:mx-0 mx-4 flex flex-col justify-center gap-4 h-full'>
                <div className={`${montserrat_sans.className} xl:text-[60px] lg:text-[50px] text-[40px] leading-[70px] font-extrabold`}>
                    {title}
                </div>
                <div className='text-content-common text-[#1A1B20]/80 2xl:max-w-[80%] md:max-w-[90%] max-w-full'>
                    {description}
                </div>
            </div>
            <div className='lg:col-span-5' />
        </div>
    )
}

export default SectionIntroCommon