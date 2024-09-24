import React from 'react'
import { cn } from '@/lib/utils'

type Props = {
    title: string
    titleClassName?: string
    highlightClassName?: string
    containerClassName?: string
}

const TitleHighlight: React.FC<Props> = ({
    title,
    titleClassName,
    highlightClassName,
    containerClassName,
}) => {
    return (
        <div className={cn("text-center", containerClassName)}>
            <h2 className={cn(
                "xxl:text-[40px] text-3xl font-bold text-center text-[#000000] relative z-[1] inline-block w-fit",
                titleClassName
            )}>
                {title}
                <div className={cn(
                    " h-5 absolute md:-bottom-1 -bottom-2 z-[-1]",
                    highlightClassName
                )}></div>
            </h2>
        </div>
    )
}

export default TitleHighlight