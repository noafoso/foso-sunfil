import React from 'react'

type Props = {
    backgroundColorLinear: string,
    classNameLinear?: string
}

const LineVerticalLinear = ({ backgroundColorLinear, classNameLinear }: Props) => {
    return (
        <div
            className={`${classNameLinear} w-full h-[1px]`}
            style={{
                background: backgroundColorLinear
            }}
        />
    )
}

export default LineVerticalLinear