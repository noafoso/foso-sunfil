import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/selectCustom"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

// Removed unused SelectValue interface

interface Data {
    id: string
    name: string
    value: string
    label?: string
    title?: string
    sub?: boolean
}

type SelectCustomProps = {
    handleSelectChange: (value: string) => void
    classNameTrigger?: string
    data: Data[]
    value: string,
    placeholder?: string
}

const SelectCustomNoSearch: React.FC<SelectCustomProps> = ({ classNameTrigger, data, placeholder, value, handleSelectChange }) => {
    const selectedItem = data.find(item => item.value === value);
    return (
        <Select
            value={value}
            onValueChange={(value: string) => { handleSelectChange(value) }} // Fixed type of value
        >
            <SelectTrigger className={`${classNameTrigger} ${selectedItem ? "py-4" : ""} h-auto text-responsive min-w-[200px] focus:ring-0 placeholder-[#000000]  focus:ring-offset-0`}>
                {
                    selectedItem?.label
                        ?
                        selectedItem?.label
                        :
                        <div className='text-[#000000] py-2 font-medium'>{placeholder} </div>
                }
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className='space-y-2'>
                    {
                        data?.map((item) => (
                            <SelectItem
                                key={item.id}
                                value={item?.value}
                                className="w-full block focus:bg-[#98E6F6]/30 px-2 3xl:text-base text-sm cursor-pointer"
                            >
                                <div className="flex justify-between w-full">
                                    <div className='font-normal'>
                                        {item?.label}
                                    </div>
                                    <div className={cn("flex items-center gap-2")}>
                                        {item?.sub &&
                                            <h1 className="text-wrap">
                                                {item?.title}
                                            </h1>
                                        }
                                        <Check className={cn("size-4 text-[#0D8B9E]", item.value === value ? "block" : "hidden")} />
                                    </div>
                                </div>
                            </SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select >
    )
}

export default SelectCustomNoSearch