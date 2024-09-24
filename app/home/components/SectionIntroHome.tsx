import React, { useEffect } from 'react'
import Image from 'next/image'
import { uuidv4 } from '@/lib/uuid'
import { useStateHome } from '../_state/useStateHome';
import { montserrat_sans } from '@/utils/fonts/fonts';
import { TickCircle } from 'iconsax-react'
import { motion } from 'framer-motion'
import AnimatedCountUp from '@/components/animation/AnimatedCountUp';

import Marquee from "react-fast-marquee";
import Link from 'next/link';

interface ICategory {
    id: string;
    name: string;
    icon: string;
    image: string;
}

const listCategory: ICategory[] = [
    {
        id: "1",
        name: "Dầu",
        icon: "/icons/home/icon1.svg",
        image: "/example/home/product2.png"
    },
    {
        id: "2",
        name: "Điều hoà",
        icon: "/icons/home/icon2.svg",
        image: "/example/home/product2.png"
    },
    {
        id: "3",
        name: "Không khí",
        icon: "/icons/home/icon3.svg",
        image: "/example/home/product.png"
    },
    {
        id: "4",
        name: "Nhiên liệu",
        icon: "/icons/home/icon4.svg",
        image: "/example/home/product.png"
    },
    {
        id: "5",
        name: "Khác",
        icon: "/icons/home/icon5.svg",
        image: "/example/home/product.png"
    },
]


const listStyleContent = [
    {
        id: uuidv4(),
        title: "Lọc hiệu quả cao"
    },
    {
        id: uuidv4(),
        title: "Bền bỉ, đáng tin cậy"
    },
    {
        id: uuidv4(),
        title: "Tốt cho sức khoẻ"
    },
    {
        id: uuidv4(),
        title: "Thân thiện với môi trường"
    },
]

const SectionIntroHome = () => {
    console.log(listCategory)
    const { isStateHome, queryKeyIsStateHome } = useStateHome()

    useEffect(() => {
        queryKeyIsStateHome({ idTabActive: listCategory[0] })
    }, [])

    console.log("isStateHome :", isStateHome)

    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-6 flex flex-col 3xl:gap-6 gap-4'>
                <div className='grid grid-cols-6'>
                    <div className='col-span-1 flex flex-col items-center bg-white'>
                        {
                            listCategory && listCategory.map((category) => (
                                <div
                                    key={category.id}
                                    className={`${isStateHome?.idTabActive?.id === category?.id ? "border-[#ED1B24]" : "border-white hover:border-[#ED1B24]"} w-full cursor-pointer border-l-4 custom-transition group`}
                                    onClick={() => queryKeyIsStateHome({ idTabActive: category })}
                                >
                                    <div className='flex flex-col justify-center items-center py-4 w-full'>
                                        <Image
                                            src={category.icon}
                                            alt={category.name}
                                            width={1080}
                                            height={768}
                                            className={`${isStateHome?.idTabActive?.id === category?.id ? "" : "filter grayscale-[1] brightness-[2] group-hover:filter-none group-hover:grayscale-[0] group-hover:brightness-[0]"} 
                                                3xl:size-12 size-8 object-contain custom-transition`}
                                        />

                                        <div className={`${isStateHome?.idTabActive?.id === category?.id ? "text-[#ED1B24]" : "text-[#000000]/60 group-hover:text-[#ED1B24]"} 3xl:text-base text-sm custom-transition`}>
                                            {category?.name ?? ""}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className='col-span-5 flex flex-col justify-center 3xl:gap-8 gap-4 3xl:ml-20 ml-16'>
                        <div className='flex flex-col 3xl:gap-4 gap-2'>
                            <div className={`${montserrat_sans.className} 3xl:text-[88px] 2xl:text-[82px] text-[68px] 3xl:leading-[100px] leading-[100px] 3xl:max-w-[70%] max-w-[80%] font-extrabold`}>
                                Bộ lọc dầu xe ôtô
                            </div>
                            <div className='3xl:text-[26px] text-[22px]'>
                                Bộ lọc xe chất lượng cao
                            </div>
                        </div>

                        <div className="flex flex-col 3xl:gap-4 gap-2">
                            {
                                listStyleContent.map((content) => (
                                    <div
                                        key={`content-${content.id}`}
                                        className='3xl:text-lg text-base flex items-center gap-2'
                                    >
                                        <div className='3xl:size-6 size-5'>
                                            <TickCircle
                                                className='size-full text-[#57A4FE]'
                                                variant="Bold"
                                            />
                                        </div>
                                        <div className='3xl:text-lg text-base text-[#1A1B20]'>
                                            {content.title}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-span-6 relative'>
                <div className='absolute 3xl:-top-24 -top-16 3xl:-left-[60px] -left-[40px] z-10 aspect-0.88/1 3xl:w-[580px] 2xl:w-[450px] w-[550px]'>
                    <Image
                        src={"/background/home/bg-splash-oil.png"}
                        alt='oil'
                        width={800}
                        height={800}
                        className='size-full object-contain'
                        unoptimized
                    />
                </div>

                <motion.div
                    initial={false}
                    animate="rest"
                    whileHover="hover"
                    variants={{
                        rest: { scale: 1, transition: { duration: 0.2 } },
                        hover: { scale: 1.04, transition: { duration: 0.2 } },
                    }}
                    className='absolute 3xl:-top-8 -top-4 left-0 z-20 aspect-1.1/1 3xl:w-[630px] 2xl:w-[500px] w-[650px] cursor-pointer'
                >
                    <Image
                        src={`${isStateHome?.idTabActive?.image}`}
                        alt='oil'
                        width={800}
                        height={800}
                        className='size-full object-contain'
                        unoptimized
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default SectionIntroHome