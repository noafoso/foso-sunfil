'use client'

import { TabsCustom } from "@/components/tabs/TabsCustom"
import TitleDash from "@/components/title/TitleDash"
import { useStateCategories } from "./_state/useStateCategories"

import SectionInfoProduct from "./components/product/SectionInfoProduct"

import SectionCategoriesFilterProduct from "./components/tab/SectionCategoriesFilterProduct"
import SectionCategoriesFilterChassis from "./components/tab/SectionCategoriesFilterChassis"
import SectionCategoriesFilterApplication from "./components/tab/SectionCategoriesFilterApplication"
import { useGetCodeProductAbsolute } from "@/hooks/categories/useGetCodeProductAbsolute"
import { useSearchParams } from "next/navigation"
import ProductDetailCodeSkeleton from "@/components/skeleton/categories/ProductDetailCodeSkeleton"

const tabContent = [
    {
        id: '1',
        content: <SectionCategoriesFilterProduct />
    },
    {
        id: '2',
        content: <SectionCategoriesFilterApplication />
    },
    {
        id: '3',
        content: <SectionCategoriesFilterChassis />
    },
] as any

const tabList = [
    {
        id: "1",
        name: 'Product no',
    },
    {
        id: "2",
        name: 'Application',
    },
    {
        id: "3",
        name: 'VIN/Chassis',
    }
]

const Categories = () => {
    const codeParam = useSearchParams().get('code')

    const { isStateCategories, queryKeyIsStateCategories } = useStateCategories()

    const {
        data: dataCodeProduct,
        isFetching: isFetchingDataCodeProduct
    } = useGetCodeProductAbsolute(codeParam ?? "")

    console.log('codeParam', codeParam);
    console.log('dataCodeProduct', dataCodeProduct);

    return (
        <div
            id="categories"
            className='custom-px-responsive pt-[140px] lg:pb-[127px] pb-[61px] lg:bg-[url("/background/product/slug/bg.svg")] bg-[url("/background/product/slug/bg-mobi.svg")] bg-top bg-cover bg-no-repeat
            flex flex-col items-start 3xl:gap-12 gap-10 w-full h-full min-h-screen'
        >
            <div className='3xl:space-y-8 space-y-6 w-full'>
                <TitleDash
                    text='Danh mục'
                    className='justify-start'
                    textClassName='uppercase text-[#1A1B20CC]/80 font-normal'
                    dashClassName='border-b-2 border-[#15BCE0] md:mt-0 mt-2 md:max-w-[64px] md:min-w-[64px] min-w-[60px] max-w-[60px]'
                />

                <div className="w-full">
                    <TabsCustom
                        data={tabList || []}
                        tabActive={isStateCategories.idTabActive}
                        setTabActive={(value) => {
                            queryKeyIsStateCategories({ idTabActive: value })
                        }}
                        classNameTabsList='justify-start h-auto'
                        classNameTrigger='py-3 font-normal data-[state=active]:font-medium'
                    />

                    {tabContent.find((item: any) => item?.id === isStateCategories?.idTabActive)?.content ?? ""}
                </div>
            </div>
            {
                isFetchingDataCodeProduct ?
                    (
                        <ProductDetailCodeSkeleton />
                    )
                    :
                    (
                        dataCodeProduct && codeParam ?
                            (
                                <SectionInfoProduct />
                            )
                            :
                            (
                                <>
                                    {
                                        codeParam ?
                                            <div className='bg-white md:p-6 p-4 w-full'>
                                                <div className='text-content-common text-[#000000]/[66%] font-normal'>
                                                    No Product found for seach term <span className='font-bold'>{codeParam}</span>
                                                </div>
                                            </div>
                                            :
                                            <div className='' />
                                    }
                                </>
                            )
                    )
            }
        </div >
    )
}

export default Categories