'use client'

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip";

import * as TooltipPrimitive from "@radix-ui/react-tooltip"

interface ActionTooltipProps {
    label: React.ReactNode;
    children: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left"
    align?: "start" | "center" | "end"
    classNameContent?: string;
}

export const ActionTooltip = ({
    label,
    children,
    side,
    align,
    classNameContent
}: ActionTooltipProps) => {
    const StyledArrow = TooltipPrimitive.Arrow
    return (
        <TooltipProvider >
            <Tooltip delayDuration={50} >
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    side={side}
                    align={align}
                    sideOffset={2}
                    className={`${classNameContent} w-fit py-4 px-4 rounded-2xl`}
                >
                    {label}
                    {/* <TooltipPrimitive.Arrow
                        width={20}
                        height={12}
                        className='drop-shadow-2xl shadow-2xl'
                    /> */}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}