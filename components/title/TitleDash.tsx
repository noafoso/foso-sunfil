import React from 'react'
import { cn } from '@/lib/utils' // Đảm bảo đường dẫn này chính xác

interface TitleDashProps {
    text: string;
    className?: string;
    dashClassName?: string;
    textClassName?: string;
}

const TitleDash: React.FC<TitleDashProps> = ({
    text,
    className,
    dashClassName,
    textClassName,
}) => {
    return (
        <div className={cn("flex md:items-center items-start justify-center", className)}>
            <hr
                className={cn(
                    "flex-grow md:max-w-[85px] md:min-w-[78px] min-w-[40px] max-w-[40px]",
                    "border-black md:mt-0 mt-4",
                    dashClassName
                )}
            />
            <p className={cn("text-base font-normal mx-4", textClassName)}>{text}</p>
        </div>
    )
}

export default TitleDash