import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, Search } from "lucide-react";
import * as React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Input } from "../ui/input";

export type OptionType = {
    label: string;
    value: string;
};

interface MultiSelectProps {
    options: any[];
    selected: any;
    onChange: (e: any) => void;
    title?: string;
    placeholder?: string;
    classNameButtonTrigger?: string;
    classNameContent?: string;
    classNameArrow?: string;
    classNameInputSearch?: string,
    classNameMenuDown?: string,
    onValueChange: (value: any) => void;
    onOpen: (e: any) => void;
    mutiValue?: boolean;
}

function SelectCustomSearch({
    options = [],
    selected,
    onChange,
    onOpen,
    onValueChange,
    title,
    placeholder,
    classNameButtonTrigger,
    classNameMenuDown,
    classNameArrow,
    classNameContent,
    classNameInputSearch,
    mutiValue = true,
    ...props
}: MultiSelectProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <Popover
            open={open}
            onOpenChange={(open: any) => {
                onOpen(open);
                setOpen(open);
            }}
            {...props}
            modal
        >
            <PopoverTrigger asChild className="border w-full">
                <Button
                    variant="secondary"
                    role="combobox"
                    aria-expanded={open}
                    className={`${classNameButtonTrigger} flex text-start justify-between `}
                    onClick={() => setOpen(!open)}
                >
                    <div className={`${selected ? "" : "text-gray-400"} text-wrap max-w-[95%] w-[95%] space-x-1`}>
                        {selected
                            ?
                            <>
                                <span className={`${selected?.address ? "font-bold" : ""} font-bold`}>
                                    {selected?.label}{selected?.address && ":"}
                                </span>
                                {
                                    selected?.address &&
                                    <span>{selected?.address}</span>
                                }
                            </>
                            :
                            title
                        }
                    </div>
                    <MdKeyboardArrowDown className={`${classNameArrow} custom-transition size-5 shrink-0 w-[5%] max-w-[5%] text-end`} />
                </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className={classNameContent}>
                <Command className="">
                    <div className="relative">
                        <Input
                            className={`${classNameInputSearch} focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 pl-8 placeholder:text-[#0000004D] text-sm`}
                            onChange={({ target: { value } }) => onValueChange(value)}
                            placeholder={placeholder}
                        />
                        <Search className="size-5 absolute top-1/2 -translate-y-1/2 left-2 text-[#0000004D]" />
                    </div>
                    <CommandList >
                        <CommandEmpty>Không có dữ liệu</CommandEmpty>
                        {
                            options?.length > 0 ?
                                (
                                    <CommandGroup className={`${classNameMenuDown} max-h-64 custom-scroll-filter overflow-auto`}>
                                        {
                                            options && options?.map((option: any, index: number) => {
                                                return (
                                                    <CommandItem
                                                        key={`index1-${option.value}`}
                                                        onSelect={() => {
                                                            onChange({ ...option, active: true });
                                                            if (mutiValue) {
                                                                setOpen(true);
                                                                return
                                                            }
                                                            setOpen(false);
                                                        }}
                                                        className="gap-0 cursor-pointer hover:scale-115 transition-all duration-150 ease-linear"
                                                    >

                                                        <div className={cn("flex items-center gap-2 ")}>
                                                            <h1 className="2xl:text-sm text-[13px] text-wrap space-x-1">
                                                                <span className={`${option?.address ? "font-bold" : ""} font-bold`}>
                                                                    {option?.label}{option?.address && ":"}
                                                                </span>
                                                                {
                                                                    option?.address &&
                                                                    <span>{option?.address}</span>
                                                                }
                                                            </h1>
                                                            <Check className={cn("size-4 text-[#1677FF]", option.value === selected?.value ? "block" : "hidden")} />
                                                        </div>
                                                    </CommandItem>
                                                )
                                            })
                                        }
                                    </CommandGroup>
                                )
                                :
                                (null)
                        }
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export { SelectCustomSearch };

