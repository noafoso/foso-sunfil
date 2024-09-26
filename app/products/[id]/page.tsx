'use client'

import SectionDetailCategory from './components/SectionDetailCategory'
import SectionDetailContent from './components/SectionDetailContent'


const DetailProduct = () => {
    return (
        <div
            className='pt-[162px] custom-padding-left-right 
        lg:bg-[url("/background/product/slug/bg.svg")] bg-[url("/background/product/slug/bg-mobi.svg")] 
        flex items-start lg:gap-12 gap-8 lg:bg-bottom bg-top bg-cover bg-no-repeat h-full lg:pb-[127px] pb-[61px]'
        >
            <div className="xl:w-[68%] lg:w-[60%] w-full">
                <SectionDetailContent />
            </div>
            <div className="xl:w-[32%] lg:w-[40%] lg:block hidden">
                <SectionDetailCategory />
            </div>
        </div>
    )
}

export default DetailProduct