'use client'

import SectionSlugCategory from './components/SectionSlugCategory'
import SectionSlugContent from './components/SectionSlugContent'


const Page = () => {
    return (
        <div className='pt-[162px] custom-padding-left-right 
        lg:bg-[url("/background/product/slug/bg.svg")]  bg-[url("/background/product/slug/bg-mobi.svg")] 
        flex items-start gap-12 bg-bottom bg-cover bg-no-repeat h-full lg:pb-[140px] pb-[61px]'
        >
            <div className="xl:w-[68%] lg:w-[60%] w-full">
                <SectionSlugContent />
            </div>
            <div className="xl:w-[32%] lg:w-[40%] lg:block hidden">
                <SectionSlugCategory />
            </div>
        </div>
    )
}

export default Page