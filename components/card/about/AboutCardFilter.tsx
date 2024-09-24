import Image from 'next/image'
import React from 'react'
type Props = {
    name: string,
    id: string,
    description: string,
    icon: string,
    index: number
}
const color = ['rgba(21, 188, 224, 0.10)', 'rgba(115, 147, 210, 0.10)', 'rgba(255, 140, 5, 0.10)', 'rgba(248, 101, 154, 0.10)']
const AboutCardFilter = ({ description, icon, id, name, index }: Props) => {
    return (
        <div
            style={{
                boxShadow: `0px 4px 32px 0px #00000014`
            }}
            className='bg-white p-6 h-[260px] rounded-[8px] flex flex-col gap-4'
        >
            <div
                style={{
                    backgroundColor: color[index],
                }}
                className="size-[75px] p-4 rounded-[5px]">
                <Image src={icon} width={1280} height={1024} alt='' className='size-full object-contain' />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className='text-[#000000] font-bold 3xl:text-2xl text-xl'>{name}</h1>
                <h2 className='text-[#1A1B20CC]/80 text-content-common font-normal line-clamp-3'>{description}</h2>
            </div>
        </div>
    )
}

export default AboutCardFilter