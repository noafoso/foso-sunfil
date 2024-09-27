'use client'
import { useStateCategories } from '../../_state/useStateCategories'
import SectionCategoriesFilterProduct from '../filter/SectionCategoriesFilterProduct'

const SectionCategoriesTabProduct = () => {
    const { isStateCategories } = useStateCategories()
    return (
        <div className='flex flex-col xl:gap-[60px] gap-12 h-screen'>
            <SectionCategoriesFilterProduct />
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

export default SectionCategoriesTabProduct