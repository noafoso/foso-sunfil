import Image from 'next/image'
import React from 'react'

type Props = {}

const SystemDeveloping = (props: Props) => {
    return (
        <div className={`w-full h-screen flex flex-col gap-8 items-center justify-center`} >
            {/* <div className={`w-full h-[calc(100vh_-_96px)] flex flex-col gap-8 items-center justify-center`} > */}
            <div className="aspect-video md:h-[50%] h-[25%]">
                <Image
                    src={'/system/developing.svg'}
                    width={1280}
                    height={1024}
                    alt="error"
                    className="size-full object-contain"
                />
            </div>
            <div className="text-center flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-[#545454] leading-6">
                    Tính năng đang phát triển!
                </h1>
                <h5 className="italic text-sm leading-5 font-light">
                    The page feature in development!
                </h5>
            </div>
        </div>
    )
}

export default SystemDeveloping