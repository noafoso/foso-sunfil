'use client'

import { TabsCustom } from "@/components/tabs/TabsCustom"
import TitleDash from "@/components/title/TitleDash"
import { TabsContent } from "@/components/ui/tabs"
import { useStateCategories } from "./_state/useStateCategories"
import SectionCategoriesTabApplication from "./components/tab/SectionCategoriesTabApplication"
import SectionCategoriesTabChassis from "./components/tab/SectionCategoriesTabChassis"
import SectionCategoriesTabProduct from "./components/tab/SectionCategoriesTabProduct"


const TabContent = [
    {
        id: '1',
        content: <SectionCategoriesTabProduct />
    },
    {
        id: '2',
        content: <SectionCategoriesTabApplication />
    },
    {
        id: '3',
        content: <SectionCategoriesTabChassis />
    },
] as any

const TabList = [
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
    const { isStateCategories, queryKeyIsStateHome } = useStateCategories()

    return (
        <div
            id="categories"
            className='pt-[162px] lg:bg-[url("/background/product/slug/bg.svg")] bg-[url("/background/product/slug/bg-mobi.svg")] 
             flex flex-col items-start lg:gap-12 gap-8 bg-top bg-cover bg-no-repeat h-full lg:pb-[127px] pb-[61px] custom-padding-left-right'
        >
            <div className="">
                <TitleDash
                    text='Danh mục'
                    className='justify-start'
                    textClassName='uppercase text-[#1A1B20CC]/80 font-normal'
                    dashClassName='border-b-2 border-[#15BCE0]  md:mt-0 mt-2 md:max-w-[64px] md:min-w-[64px] min-w-[60px] max-w-[60px]'
                />
            </div>
            <div className="w-full">
                <TabsCustom
                    data={TabList || []}
                    tabActive={isStateCategories.idTabActive}
                    setTabActive={(value) => {
                        queryKeyIsStateHome({ idTabActive: value })
                    }}

                    classNameTabsList='justify-start h-auto '
                    classNameTrigger='py-3'
                />
                {/* {
                        TabContent.map((item, index) => (
                            <TabsContent key={index} value={item.id} className='mt-0'>
                                {item.content}
                            </TabsContent>
                        ))
                    } */}
                {TabContent.find((item: any) => item?.id === isStateCategories?.idTabActive)?.content ?? ""}
            </div>
        </div >
    )
}

export default Categories