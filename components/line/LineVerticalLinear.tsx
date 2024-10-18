import React from 'react'

type Props = {
    backgroundColorLinear: string
}

const LineVerticalLinear = ({ backgroundColorLinear }: Props) => {
    return (
        <div
            className={`w-full 2xl:h-[1px] h-[1px]`}
            style={{
                background: backgroundColorLinear
            }}
        />
    )
}

export default LineVerticalLinear