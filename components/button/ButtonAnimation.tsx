import React from 'react'

import { motion } from 'framer-motion'
import { variantButtonPressZoom } from '@/utils/variants-animation/VariantsAnimation'

type Props = {
    title_button: string | React.ReactNode
    className?: string
    classNameWithIcon?: string
    variant?: any
    onClick?: (e?: any) => void
    style?: React.CSSProperties | undefined
    icon?: React.ReactNode
    reverse?: boolean
    type?: 'submit' | 'button'
    title_hidden?: boolean

    disabled?: boolean
    isStateloading?: boolean,
    classLoading?: string,
}

const ButtonAnimation = ({
    title_button,
    className,
    classNameWithIcon,
    variant = variantButtonPressZoom,
    onClick = () => { },
    style,
    icon,
    reverse = false,
    type = 'submit',
    title_hidden = false,

    disabled = false,
    isStateloading = false,
    classLoading = 'border-current'
}: Props) => {

    return (
        <motion.button
            initial={false}
            animate="rest"
            whileTap="press"
            whileHover="hover"
            variants={disabled ? {} : variant}
            className={`${className} ${icon && `${classNameWithIcon}`} transform-gpu text-nowrap whitespace-nowrap disabled:hover:opacity-100 disabled:bg-[#333538]/20 disabled:text-white disabled:cursor-not-allowed disabled:pointer-events-auto`}
            type={type}
            onClick={onClick}
            style={style}
            disabled={disabled}
        >
            {
                isStateloading &&
                <span className={`${classLoading} inline-block min-h-4 min-w-4 h-4 w-4 animate-spin rounded-full border-[3px] border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`} />
            }

            {
                !reverse && icon && <span className={`${title_hidden ? "max-w-full" : "max-w-[20%]"} `}>{icon}</span>
            }

            {
                !title_hidden &&
                <span className='max-w-[80%]'>
                    {title_button}
                </span>
            }

            {
                reverse && icon && <span className={`${title_hidden ? "max-w-full" : "max-w-[20%]"}`}>{icon}</span>
            }
        </motion.button>
    )
}

export default ButtonAnimation