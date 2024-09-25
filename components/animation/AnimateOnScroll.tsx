'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimateOnScrollProps {
    children: React.ReactNode
    className?: string
    index?: number
    style?: React.CSSProperties
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, className, index = 0, style }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <motion.div
            style={style}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default AnimateOnScroll