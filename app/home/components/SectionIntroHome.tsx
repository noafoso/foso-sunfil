import React, { useEffect } from 'react'
import Image from 'next/image'
import { uuidv4 } from '@/lib/uuid'
import { useStateHome } from '../_state/useStateHome';
import { montserrat_sans } from '@/utils/fonts/fonts';
import { TickCircle } from 'iconsax-react'
import { motion } from 'framer-motion'
import AnimateOnScroll from '@/components/animation/AnimateOnScroll';
import { variantSlideLeft, variantSlideRight, variantSlideZoomOut } from '@/utils/variants-animation/Variants-Animation';
import { useGetListCategories } from '@/hooks/categories/useGetListCategories';
import { useQueryClient } from '@tanstack/react-query';
import { IListCategories } from '@/types/categories/ICategoryes';

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
    const queryClient = useQueryClient()

    const { isStateHome, queryKeyIsStateHome } = useStateHome()

    const dataListCategory = queryClient.getQueryData(["getListCategories"]) as IListCategories[]

    return (
        <div className='grid grid-cols-12'>
            <div className='xl:col-span-6 md:col-span-8 col-span-12 flex flex-col 3xl:gap-6 gap-4'>
                <div className='grid grid-cols-6'>
                    <div className='md:col-span-1 col-span-6 flex md:flex-col flex-row items-center bg-white'>
                        {
                            dataListCategory && dataListCategory?.map((category, index) => {
                                console.log('category :', category);
                                console.log('isStateHome?.idTabActive?.id :', isStateHome?.idTabActive?.id);

                                return (
                                    <div
                                        key={`category-${category?.id}`}
                                        className={`${isStateHome?.idTabActive?.id == category?.id ? "border-[#ED1B24]" : "border-white hover:border-[#ED1B24]"} w-full cursor-pointer md:border-l-4 md:border-t-0 border-t-4 custom-transition group`}
                                        onClick={() => queryKeyIsStateHome({ idTabActive: category })}
                                    >
                                        <AnimateOnScroll
                                            index={index}
                                            variants={variantSlideLeft}
                                        >
                                            <div className='flex flex-col justify-center items-center xl:py-4 py-3 w-full'>
                                                <Image
                                                    src={category?.images}
                                                    alt={category?.name}
                                                    width={1080}
                                                    height={768}
                                                    className={`${isStateHome?.idTabActive?.id === category?.id ? "" : "filter grayscale-[1] brightness-[2] group-hover:filter-none group-hover:grayscale-[0] group-hover:brightness-[0]"} 
                                                3xl:size-12 size-8 object-contain custom-transition`}
                                                />

                                                <div className={`${isStateHome?.idTabActive?.id === category?.id ? "text-[#ED1B24]" : "text-[#000000]/60 group-hover:text-[#ED1B24]"} 3xl:text-base text-sm custom-transition`}>
                                                    {category?.name ?? ""}
                                                </div>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='md:col-span-5 col-span-6 flex flex-col justify-center 3xl:gap-8 gap-4 3xl:ml-20 xl:ml-16 md:ml-10 md:mr-0 mx-4'>
                        <div className='flex flex-col 3xl:gap-4 gap-2'>
                            <AnimateOnScroll index={0.8}>
                                <div className={`${montserrat_sans.className} 3xl:text-[88px] 2xl:text-[82px] xl:text-[76px] lg:text-[68px] text-[60px] 2xl:leading-[100px] xl:leading-[90px] lg:leading-[80px] leading-[70px] 3xl:max-w-[80%] 2xl:max-w-[90%] xl:max-w-full lg:max-w-[85%] max-w-full font-extrabold`}>
                                    {isStateHome?.idTabActive?.title ?? ""}
                                </div>
                            </AnimateOnScroll>
                            <AnimateOnScroll index={1}>
                                <div className='3xl:text-[26px] lg:text-[22px] text-[20px]'>
                                    Bộ lọc xe chất lượng cao
                                </div>
                            </AnimateOnScroll>
                        </div>

                        <div className="flex flex-col 3xl:gap-4 gap-2">
                            {
                                listStyleContent.map((content, index) => (
                                    <AnimateOnScroll key={`content-${content.id}`} index={index}>
                                        <div className='text-content-common flex items-center gap-2'>
                                            <div className='3xl:size-6 size-5'>
                                                <TickCircle
                                                    className='size-full text-[#57A4FE]'
                                                    variant="Bold"
                                                />
                                            </div>
                                            <div className='text-content-common text-[#1A1B20]'>
                                                {content.title}
                                            </div>
                                        </div>
                                    </AnimateOnScroll>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-6 md:col-span-4 col-span-12 relative'>
                <div className='absolute 3xl:-top-24 2xl:-top-16 lg:-top-[72px] md:-top-[40px] top-[20px] 3xl:-left-[60px] xl:-left-[40px] lg:-left-[180px] md:-left-[130px] -left-[40px] z-10 aspect-0.88/1 3xl:w-[580px] 2xl:w-[450px] xl:w-[460px] lg:w-[440px] md:w-[380px] w-[350px]'>
                    <Image
                        src={"/background/home/bg-splash-oil.png"}
                        alt='oil'
                        width={800}
                        height={800}
                        className='size-full object-contain'
                        unoptimized
                        priority
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
                    className='absolute 3xl:-top-8 2xl:-top-4 xl:-top-8 lg:-top-4 md:top-10 top-[60px] 2xl:left-0 xl:left-4 lg:-left-40 md:-left-24 left-0 z-20 aspect-1.1/1 3xl:w-[630px] 2xl:w-[500px] xl:w-[510px] lg:w-[470px] w-[360px] cursor-pointer'
                >
                    <AnimateOnScroll variants={variantSlideZoomOut}>
                        <Image
                            src={`${isStateHome?.idTabActive?.images_items}`}
                            alt='oil'
                            width={800}
                            height={800}
                            className='size-full object-contain'
                            unoptimized
                        />
                    </AnimateOnScroll>
                </motion.div>
            </div>
        </div >
    )
}

export default SectionIntroHome