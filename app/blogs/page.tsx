'use client'

import SectionBlogIntro from './components/SectionBlogIntro'
import SectionBlogItem from './components/SectionBlogItem'
import SectionBlogRelated from './components/SectionBlogRelated'


const Blogs = () => {
    return (
        <div
            id='blogs'
            className='pt-[162px] lg:bg-[url("/background/product/slug/bg.svg")] bg-[url("/background/product/slug/bg-mobi.svg")] 
            flex flex-col items-center lg:gap-12 gap-8 lg:bg-bottom bg-top bg-cover bg-no-repeat h-full lg:pb-[127px] pb-[61px] custom-px-responsive'
        >
            <SectionBlogIntro />
            <SectionBlogItem />
            <SectionBlogRelated />
        </div>
    )
}

export default Blogs
