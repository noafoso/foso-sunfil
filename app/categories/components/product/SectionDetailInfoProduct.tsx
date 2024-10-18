import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion'

import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { useStateCategories } from '../../_state/useStateCategories';

import { IoIosArrowDown } from 'react-icons/io';
import { useResizeStore } from '@/stores/useResizeStore';
import { IDetailCodeProduct } from '@/types/products/IProducts';
import LineVerticalLinear from '@/components/line/LineVerticalLinear';
import TableDetailCodeProduct from './TableDetailCodeProduct';

type Props = {
    data: IDetailCodeProduct
}

const dataHeader = [
    {
        id: "year",
        name: "Year",
        icon: "",
    },
    {
        id: "engine_vol",
        name: "Eng Vol",
        icon: "",
    },
    {
        id: "engine_no",
        name: "Eng No",
        icon: "",
    },
    {
        id: "td_body",
        name: "Body No",
        icon: "",
    },
    {
        id: "oil",
        name: "Oil",
        icon: "/icons/home/icon1.svg",
    },
    {
        id: "air",
        name: "Air",
        icon: "/icons/home/icon2.svg",
    },
    {
        id: "diesel",
        name: "Fuel",
        icon: "/icons/home/icon4.svg",
    },
    {
        id: "cabin",
        name: "Cabin",
        icon: "/icons/home/icon3.svg",
    },
    {
        id: "transmission",
        name: "Trans",
        icon: "/icons/home/icon5.svg",
    },
    {
        id: "gasoline_filter",
        name: "Gasoline Filter",
        icon: "",
    },
    {
        id: "fuel_water_seperator",
        name: "Fuel/Water Seperator",
        icon: "",
    },
    {
        id: "hydraulic",
        name: "Hydraulic oil filter",
        icon: "",
    },
    {
        id: "air_purifier",
        name: "Air Furifier",
        icon: "",
    },
    {
        id: "hvac_filter",
        name: "Hvac filter",
        icon: "",
    },
    {
        id: "other",
        name: "Other",
        icon: "",
    },
]

const SectionDetailInfoProduct = ({ data }: Props) => {
    const { isStateCategories, queryKeyIsStateCategories } = useStateCategories()
    const { isVisibleMobile } = useResizeStore()

    // Hàm để xử lý khi accordion được mở hoặc đóng
    const handleToggle = (value: string[]) => {
        queryKeyIsStateCategories({ idOpenAccordion: value });
    };

    const contentVariants = {
        closed: { height: 0, opacity: 0 },
        open: { height: 'auto', opacity: 1 }
    };

    const handleLinkCodeProduct = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, product: any) => {
        if (!product.id_product_lead) {
            event.preventDefault()
        }
    }

    return (
        <div className='flex flex-col md:gap-6 gap-8 w-full'>
            <div className='text-title-detail-product font-bold w-fit'>
                {data?.name ?? ""}
            </div>

            <div className='bg-white 3xl:p-12 md:p-10 p-4 grid grid-cols-12 md:gap-0 gap-6'>
                <div className='md:col-span-3 col-span-12 w-full h-auto md:min-h-[200px] min-h-[230px] relative'>
                    <Image
                        src={data?.images ?? "/default/default.png"}
                        width={600}
                        height={400}
                        alt="image"
                        className='absolute size-full object-contain'
                    />
                </div>
                <div className='md:col-span-9 col-span-12 flex flex-col 3xl:gap-6 gap-4 md:pl-20 '>
                    <div className='flex flex-col gap-4'>
                        <div className='text-title-common-product font-bold'>
                            Thông số kỹ thuật
                        </div>

                        <div className='grid grid-cols-2 gap-y-4 gap-x-2'>
                            {
                                data && data?.specification?.map((item, index) => (
                                    <div
                                        key={`specification-${index}`}
                                        className='flex items-center md:justify-start justify-between gap-4 md:col-span-1 col-span-2'
                                        style={{
                                            order: item.order_by ?? "initial"
                                        }}
                                    >
                                        <div className='text-content-common text-[#1A1B20]/[64%] font-normal 3xl:w-[35%] 2xl:w-[40%] xl:w-[48%] lg:w-[45%] w-[50%]'>
                                            {item?.name ?? ""}
                                        </div>

                                        <div className='text-title-common text-[#272727] font-bold md:text-start text-end md:w-auto w-[50%]'>
                                            {item?.is_value ?? ""}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* <Separator />

                                <div className='flex flex-col gap-4'>
                                    <div className='text-title-common-product font-bold'>
                                        Couple filter
                                    </div>

                                    <div className='flex flex-wrap items-center gap-3'>
                                        {
                                            dataCodeProduct && data?.couple_filter?.map((item, index) => (
                                                <div
                                                    key={`couple-filter-${index}`}
                                                    className='text-content-common py-2 px-4 border border-[#57A4FE] text-[#57A4FE] font-medium cursor-default'
                                                >
                                                    {item.code}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div> */}
                </div>
            </div>

            <div className='bg-white 3xl:p-12 md:p-10 p-4 flex flex-col 3xl:gap-6 gap-4'>
                <div className='text-title-common-product font-bold'>
                    Cross reference
                </div>

                <div className='grid lg:grid-cols-3 grid-cols-2 w-full'>
                    {
                        data && data?.reference?.map((item, index) => (
                            <div
                                key={`reference-${index}`}
                                className={`flex items-center md:justify-start justify-between gap-4 py-2 md:col-span-1 col-span-2
                                    ${(index + 1) % 3 !== 0 && index !== data?.reference?.length - 1 ? 'lg:border-r lg:border-gray-300' : ''}
                                    ${(index + 1) % 3 !== 1 ? '2xl:px-10 xl:px-8 lg:px-6' : ''}`}
                            >
                                <div className='text-content-common text-[#1A1B20]/[64%] font-normal 3xl:w-[35%] 2xl:w-[40%] xl:w-[48%] lg:w-[45%] w-[50%]'>
                                    {item?.name ?? ""}
                                </div>

                                <div className='text-title-common text-[#272727] font-bold md:text-start text-end md:w-auto w-[50%]'>
                                    {item?.is_value ?? ""}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <TableDetailCodeProduct data={data} />
        </div >
    )
}

export default SectionDetailInfoProduct