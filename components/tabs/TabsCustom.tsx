import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import React from "react";
type Props = {
    data: any[],
    tabActive: string,
    setTabActive: (value: string) => void,
    children?: React.ReactNode,
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
                            key={`tab-${tab.id}`}
                            value={tab.id}
                            className={`${cn(classNameTrigger)} space-x-1 3xl:text-lg text-base lg:px-9 px-3 py-3 md:w-fit w-full bg-[#F2F2F2] transition-all duration-300 ease-in-out border-t-4 border-transparent rounded-none hover:text-transparent/80 hover:border-[#ED1B24]
                                    data-[state=active]:border-t-4 data-[state=active]:border-[#ED1B24] data-[state=active]:text-[#000000] data-[state=active]:bg-[#FFFFFF] data-[state=active]:shadow-none text-[#000000A8]`}
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
