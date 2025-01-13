"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { vi, enUS } from "date-fns/locale"
import { ChevronLeft, ChevronRight } from "lucide-react"
import * as React from "react"
import { DayPicker, DropdownProps } from "react-day-picker"
import { Calendar } from "../ui/calendar"

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

// Mở rộng CalendarProps với thuộc tính form
export type DatePickerShowYearProps = React.ComponentProps<typeof DayPicker> & {
    onChangeMonth?: (month: Date) => void;
    onChangeYear?: (year: number) => void;
    form?: (e: any) => void;
};


function DatePickerShowYear({ className, classNames, showOutsideDays = true, form, ...props }: DatePickerShowYearProps) {

    return (
        <Calendar
            showOutsideDays={showOutsideDays}
            className={`${cn("p-3", className)}`}
            classNames={{
                vhidden: "w-full flex item-center justify-center",
                caption_label: "text-sm font-medium",
                caption_dropdowns: "flex flex-wrap justify-center gap-1 3xl:min-w-[380px] min-w-[300px]",
                cell: "w-full",
                day: "aspect-square 3xl:text-base text-sm 3xl:w-full w-[80%] rounded-md",
                head_cell: "text-sm w-full font-medium cursor-default",
            }}
            components={{
                Dropdown: ({ value, onChange, children, ...props }: DropdownProps) => {
                    const options = React.Children.toArray(children) as React.ReactElement<React.HTMLProps<HTMLOptionElement>>[]
                    const selected = options.find((child) => child.props.value === value)
                    const handleChange = (value: string) => {
                        const changeEvent = { target: { value } } as React.ChangeEvent<HTMLSelectElement>
                        onChange?.(changeEvent)
                    }

                    return (
                        <Select
                            value={value?.toString()}
                            onValueChange={(value) => {
                                handleChange(value)
                                form?.(value)
                            }}
                        >
                            <SelectTrigger className="pr-1.5 focus:ring-0 w-[40%]">
                                <SelectValue>{selected?.props?.children}</SelectValue>
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <ScrollArea className="h-80">
                                    {
                                        options.map((option, id: number) => (
                                            <SelectItem
                                                key={`${option.props.value}-${id}`}
                                                value={option.props.value?.toString() ?? ""}
                                            >
                                                {option.props.children}
                                            </SelectItem>
                                        ))
                                    }
                                </ScrollArea>
                            </SelectContent>
                        </Select>
                    )
                },
                IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
                IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
            }}
            locale={vi}
            {...props}
        />
    )
}
DatePickerShowYear.displayName = "Calendar"

export { DatePickerShowYear }
