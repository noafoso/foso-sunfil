import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
type Props = {
    data: any[],
    tabActive: string,
    children?: React.ReactNode,
    setTabActive: (value: string) => void,
    classNameTabsList?: string,
    classNameTrigger?: string
}

export const TabsCustom = ({ data, children, tabActive, setTabActive, classNameTabsList, classNameTrigger }: Props) => {
    return (
        <Tabs
            defaultValue={tabActive}
            value={tabActive}
            onValueChange={(value) => {
                setTabActive(value)
            }}
            className="w-full"
        >
            <TabsList className={`${classNameTabsList ? classNameTabsList : "justify-center"} w-full flex items-center bg-transparent p-0`}>
                {
                    data && data?.length > 0 && data?.map((tab) => (
                        <TabsTrigger
                            value={tab.id}
                            className={`space-x-1 3xl:text-lg py-3 transition-all duration-150 ease-in-out text-base lg:px-9 px-3 md:w-fit w-full rounded-none font-semibold 
                                    hover:text-transparent/80 data-[state=active]:border-t-4 border-t-4 border-transparent bg-[#F2F2F2] data-[state=active]:border-[#ED1B24]  data-[state=active]:font-bold 
                                    data-[state=active]:text-[#000000] data-[state=active]:bg-[#FFFFFF] data-[state=active]:shadow-none text-[#000000A8]`}
                        >
                            {tab.name}
                        </TabsTrigger>
                    ))
                }
            </TabsList>
            {children}
        </Tabs >
    )
}
