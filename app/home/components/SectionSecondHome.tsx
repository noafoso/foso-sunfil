import React from 'react'

type Props = {}

import { uuidv4 } from '@/lib/uuid'
import Marquee from 'react-fast-marquee'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedCountUp from '@/components/animation/AnimatedCountUp'
import BlogCardHorizontalSmall from '@/components/card/home/BlogCardHorizontalSmall'

const dataDashboard = [
    {
        id: uuidv4(),
        quantity: 1287,
        name: "Sản phẩm"
    },
    {
        id: uuidv4(),
        quantity: 37,
        name: "Sản phẩm mới"
    },
]

const listBlogs = [
    {
        id: uuidv4(),
        type: "Lọc dầu",
        name: "Hướng dẫn thay bộ lọc không khí mới nhất 2024, Hướng dẫn thay bộ lọc không khí mới nhất 2024",
        date_created: "12/12/2024",
        image: "/example/blogs/blog1.png"
    },
    {
        id: uuidv4(),
        type: "Lọc khí",
        name: "Hướng dẫn thay bộ lọc không khí mới nhất 2025, Hướng dẫn thay bộ lọc không khí mới nhất 2024",
        date_created: "12/12/2024",
        image: "/example/blogs/blog2.png"
    },
    {
        id: uuidv4(),
        type: "Lọc dầu",
        name: "Hướng dẫn thay bộ lọc không khí mới nhất 2026, Hướng dẫn thay bộ lọc không khí mới nhất 2024",
        date_created: "12/12/2024",
        image: "/example/blogs/blog1.png"
    },
]

const SectionSecondHome = (props: Props) => {
    return (
        <div className="relative">
            <div className='custom-container-no-right grid grid-cols-8 justify-center 3xl:gap-8 gap-6 relative z-10'>
                <div className='col-span-2 grid grid-cols-2'>
                    {
                        dataDashboard && dataDashboard?.map((item: any) => (
                            <div
                                key={item?.id}
                                className='col-span-1 w-full flex flex-col justify-center items-center text-center'
                            >
                                <div className={` flex items-center gap-2 text-[#086ECC]`}>
                                    <span className={`3xl:text-5xl text-4xl font-bold`}>
                                        <AnimatedCountUp
                                            className=''
                                            end={item?.quantity}
                                        />
                                    </span>
                                    <span className='3xl:text-4xl text-3xl font-bold'>
                                        +
                                    </span>
                                </div>
                                <div className='3xl:text-xl text-lg text-[#000000]/[62%]'>
                                    {item?.name}
                                </div>
                            </div>
                        ))}
                </div>
                <div className='col-span-6 flex flex-col'>
                    <div className='3xl:text-[36px] text-[28px] text-[#000000] font-medium '>
                        Tin tức
                    </div>

                    <Marquee
                        speed={10}
                        pauseOnHover
                        autoFill={true}
                        gradient={false}
                        className='bg-transparent 3xl:py-6 py-4'
                    >
                        {
                            listBlogs && listBlogs.map((item, index) => (
                                <BlogCardHorizontalSmall
                                    key={item.id}
                                    item={item}
                                />
                            ))
                        }
                    </Marquee>
                </div>
            </div>

            <div className='absolute -top-0 -left-0 aspect-video 3xl:w-[400px] w-[320px]'>
                <Image
                    src={"/background/home/bg-viethung.png"}
                    alt='oil'
                    width={800}
                    height={800}
                    className='size-full object-cover'
                    unoptimized
                />
            </div>
        </div>
    )
}

export default SectionSecondHome