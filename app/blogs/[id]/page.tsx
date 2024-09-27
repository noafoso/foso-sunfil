import React from 'react'
import SectionIdBlogIntro from './components/SectionIdBlogIntro'
import SectionIdBlogContent from './components/SectionIdBlogContent'
import SectionIdBlogRelated from './components/SectionIdBlogRelated'

const Page = () => {
    return (
        <div className='pt-[162px] lg:bg-[url("/background/product/slug/bg.svg")] bg-[url("/background/product/slug/bg-mobi.svg")] 
        flex flex-col items-center lg:gap-12 gap-8 lg:bg-bottom bg-top bg-cover bg-no-repeat h-full lg:pb-[127px] pb-[61px]'
        >
            <SectionIdBlogIntro />
            <SectionIdBlogContent />
            <SectionIdBlogRelated />
        </div>
    )
}

export default Page