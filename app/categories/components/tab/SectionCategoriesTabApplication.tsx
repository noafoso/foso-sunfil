import SystemDeveloping from '@/components/system/SystemDeveloping'
import React from 'react'
import SectionCategoriesFilterApplication from '../filter/SectionCategoriesFilterApplication'

type Props = {}

const SectionCategoriesTabApplication = (props: Props) => {
    return (
        <div className='flex flex-col xl:gap-[60px] gap-12 h-screen'>
            <SectionCategoriesFilterApplication />
            {/* {isStateCategories.filterProduct.value.text !== '' &&
             <div className="bg-white w-full p-6">
                 <h1 className='text-[#000000A8] font-normal text-base'>
                     {`No Product found for seach term "${isStateCategories.filterProduct.value.text}"`}
                 </h1>
             </div>
         } */}
        </div>
    )
}

export default SectionCategoriesTabApplication