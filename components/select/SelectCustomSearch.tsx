import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, Search } from "lucide-react";
import * as React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";

export type OptionType = {
    label: string;
    value: string;
};

interface MultiSelectProps {
    options: any[];
    selected: any | string[];
    onChange: (e: any) => void;
    onOpen: (e: any) => void;
    onValueChange: (value: any) => void;
    title?: string;
    typeSearch?: string;
    placeholder?: string;
    classNameButtonTrigger?: string;
    classNameContent?: string;
    classNameArrow?: string;
    classNameInputSearch?: string,
    classNameMenuDown?: string,
    mutiValue?: boolean;
    disabled?: boolean;
    loading?: boolean;
}

function SelectCustomSearch({
    options = [],
    selected,
    onChange,
    onOpen,
    onValueChange,
    title,
    placeholder,
    typeSearch = "no-search",
    classNameButtonTrigger,
    classNameMenuDown,
    classNameArrow,
    classNameContent,
    classNameInputSearch,
    mutiValue = true,
    disabled = true,
    loading = false,
    ...props
}: MultiSelectProps) {
    const [open, setOpen] = React.useState(false);

    const isActive = (optionValue: string) => {
        // Tìm trong mảng selected phần tử có value trùng với option.value và active là true
        return selected.some((selectedItem: any) => selectedItem.value === optionValue && selectedItem.active);
    };

    return (
        <Popover
            open={open}
            onOpenChange={(open: any) => {
                onOpen(open);
                setOpen(open);
            }}
            modal
            {...props}
        >
            <PopoverTrigger asChild className="border w-full">
                <Button
                    variant="secondary"
                    role="combobox"
                    aria-expanded={open}
                    className={`${classNameButtonTrigger} 3xl:px-4 px-2 flex text-start justify-between gap-0 disabled:cursor-not-allowed`}
                    onClick={() => setOpen(!open)}
                    disabled={!disabled}
                >
                    <div className={`${selected ? "" : "text-gray-400"} overflow-hidden max-w-[90%]`}>
                        {
                            selected
                                ?
                                (
                                    mutiValue && selected?.length > 0 ?
                                        <div className='space-x-1 w-full overflow-hidden text-ellipsis whitespace-nowrap'>
                                            {
                                                selected.map((item: any, index: number) => (
                                                    <span
                                                        key={item}
                                                        className="3xl:text-base text-sm capitalize font-medium w-full"
                                                    >
                                                        {item.label}{selected?.length - 1 !== index && ","}
                                                    </span>
                                                ))}
                                        </div>
                                        :
                                        <div className={`3xl:text-base text-sm font-medium truncate`}>
                                            {selected?.label}
                                        </div>
                                )
                                :
                                (
                                    <span className='3xl:text-base text-sm font-normal'>
                                        {title}
                                    </span>
                                )
                        }
                    </div>
                    <div className='max-w-5 text-end'>
                        <MdKeyboardArrowDown className={`${classNameArrow} custom-transition size-5 max-w-5`} />
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className={classNameContent}>
                <Command className="">
                    {
                        typeSearch !== "no-search" &&
                        <div className="relative">
                            {
                                typeSearch === "search-client" ?
                                    <CommandInput
                                        className={`${classNameInputSearch} w-full border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 pl-8 placeholder:text-[#0000004D] text-sm`}
                                        onValueChange={(value) => onValueChange(value)}
                                        placeholder={placeholder}
                                    />
                                    :
                                    <Input
                                        className={`${classNameInputSearch} focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 pl-8 placeholder:text-[#0000004D] text-sm`}
                                        onChange={({ target: { value } }) => onValueChange(value)}
                                        placeholder={placeholder}
                                    />
                            }
                            <Search className="size-5 absolute top-1/2 -translate-y-1/2 left-2 text-[#0000004D]" />
                        </div>
                    }
                    <CommandList >
                        {(!loading) && <CommandEmpty>Không có dữ liệu</CommandEmpty>}
                        {
                            loading ?
                                (
                                    <div className='space-y-1 p-2'>
                                        {/* Hiển thị trạng thái loading ở đây nếu cần */}
                                        {
                                            [...Array(4)].map((_, index) => (
                                                <Skeleton
                                                    key={`skeleton-select-${index}`}
                                                    className="w-full h-10"
                                                />
                                            ))
                                        }
                                    </div>
                                )
                                :
                                (
                                    options?.length > 0 ?
                                        (
                                            <CommandGroup className={`${classNameMenuDown} max-h-64 custom-scroll-filter overflow-auto`}>
                                                {
                                                    options && options?.map((option: any, index: number) => {
                                                        return (
                                                            <CommandItem
                                                                key={`index-${index}-${option.value}`}
                                                                onSelect={() => {
                                                                    onChange({ ...option, active: true });
                                                                    if (mutiValue) {
                                                                        setOpen(true);
                                                                        return
                                                                    } else {
                                                                        setOpen(!open);
                                                                        return
                                                                    }
                                                                }}
                                                                className={`gap-0 cursor-pointer hover:scale-115 hover:bg-accent transition-all duration-300 ease-linear`}
                                                            >

                                                                {
                                                                    selected?.length > 0 ?
                                                                        // show active ra khi chọn nhiều (multi value)
                                                                        <div className={cn("flex items-center justify-between gap-2 w-full")}>
                                                                            <h1 className={`${isActive(option.value) ? "text-[#1677FF]" : ""} 3xl:text-base text-sm text-wrap font-medium space-x-1 max-w-[80%]`}>
                                                                                {option?.label}{option?.label === option?.label && <span className='hidden'>{index}</span>}
                                                                            </h1>
                                                                            <Check className={cn("size-4 text-[#1677FF]", isActive(option.value) ? "block" : "hidden")} />
                                                                        </div>
                                                                        :
                                                                        // show active ra khi chọn ít (single value)
                                                                        <div className={cn("flex items-center justify-between gap-2 w-full")}>
                                                                            <h1 className={`${option.value === selected?.value ? "text-[#1677FF]" : ""} 3xl:text-base text-sm text-wrap font-medium space-x-1 max-w-[80%]`}>
                                                                                {option?.label}
                                                                            </h1>
                                                                            <Check className={cn("size-4 text-[#1677FF]", option.value === selected?.value ? "block" : "hidden")} />
                                                                        </div>
                                                                }
                                                            </CommandItem>
                                                        )
                                                    })
                                                }
                                            </CommandGroup>
                                        )
                                        :
                                        (null)
                                )
                        }
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export { SelectCustomSearch };

