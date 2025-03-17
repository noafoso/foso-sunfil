import React from 'react'
import { cn } from '@/lib/utils'

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

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
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className={cn("text-center", containerClassName)}>
            <h2
                ref={ref}
                className={`${cn(
                    "font-bold text-center text-[#000000] relative z-[1] inline-block w-fit",
                    titleClassName
                )}
            text-title-section
            `}>
                {title}
                {/* <div className={cn(
                    " h-5 absolute md:-bottom-2 -bottom-2 z-[-1]",
                    highlightClassName
                )} /> */}
                <motion.div
                    className={cn(
                        "h-5 absolute md:-bottom-2 -bottom-2 z-[-1]",
                        highlightClassName
                    )}
                    initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }} // Ẩn ban đầu
                    animate={inView ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 } : {}} // Khi vào viewport thì trượt vào
                    transition={{
                        duration: 1.5, // Hiệu ứng mượt
                        delay: 0.3, // Tránh xuất hiện ngay lập tức
                        ease: [0.25, 1, 0.5, 1], // Bézier giúp hiệu ứng tự nhiên hơn
                    }}
                />
            </h2>
        </div>
    )
}

export default TitleHighlight