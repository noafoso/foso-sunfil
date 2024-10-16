import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion'

import { Separator } from '@/components/ui/separator';
import AnimateOnScroll from '@/components/animation/AnimateOnScroll';
import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { useStateCategories } from '../../_state/useStateCategories';

import { IoIosArrowDown } from 'react-icons/io';
import { useResizeStore } from '@/stores/useResizeStore';
import { useSearchParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { IDetailCodeProduct } from '@/types/products/IProducts';

type Props = {}

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
]

const SectionInfoProduct = (props: Props) => {
    const queryClient = useQueryClient()
    const codeParam = useSearchParams().get('code')


    const dataCodeProduct = queryClient.getQueryData(["getCodeProductAbsolute", codeParam]) as IDetailCodeProduct

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
                {dataCodeProduct?.name ?? ""}
            </div>

            <div className='bg-white 3xl:p-12 md:p-10 p-4 grid grid-cols-12 md:gap-0 gap-6'>
                <div className='md:col-span-3 col-span-12 w-full h-auto relative'>
                    <Image
                        // src={"/default/default.png"}
                        src={dataCodeProduct?.images ?? "/default/default.png"}
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
                                dataCodeProduct && dataCodeProduct?.specification?.map((item, index) => (
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

                    <Separator />

                    <div className='flex flex-col gap-4'>
                        <div className='text-title-common-product font-bold'>
                            Couple filter
                        </div>

                        <div className='flex flex-wrap items-center gap-3'>
                            {
                                dataCodeProduct && dataCodeProduct?.couple_filter?.map((item) => (
                                    <div
                                        key={`couple-filter-${item.id}`}
                                        className='text-content-common py-2 px-4 border border-[#57A4FE] text-[#57A4FE] font-medium cursor-default'
                                    >
                                        {item.code}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white 3xl:p-12 md:p-10 p-4 flex flex-col 3xl:gap-6 gap-4'>
                <div className='text-title-common-product font-bold'>
                    Cross reference
                </div>

                <div className='grid lg:grid-cols-3 grid-cols-2 w-full'>
                    {
                        dataCodeProduct && dataCodeProduct?.reference?.map((item, index) => (
                            <div
                                key={`reference-${index}`}
                                className={`flex items-center md:justify-start justify-between gap-4 py-2 md:col-span-1 col-span-2
                                    ${(index + 1) % 3 !== 0 && index !== dataCodeProduct.reference.length - 1 ? 'lg:border-r lg:border-gray-300' : ''}
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

            <div className='bg-white'>
                {
                    !isVisibleMobile &&
                    <div className='grid grid-cols-9'>
                        {
                            dataHeader && dataHeader.map((item) => (
                                <div
                                    key={`header-${item.id}`}
                                    className='col-span-1 flex items-center justify-center gap-2 w-full py-4'
                                >
                                    {
                                        item.icon &&
                                        <div className='size-6'>
                                            <Image
                                                width={100}
                                                height={100}
                                                alt="icon"
                                                className='size-full object-contain filter grayscale-[1] brightness-[2]'
                                                src={item?.icon ?? "/default/default.png"}
                                            />
                                        </div>
                                    }

                                    <div className='text-title-common text-[#000000] font-bold'>
                                        {item?.name ?? ""}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }

                <Accordion
                    type="multiple"
                    onValueChange={(value: string[]) => handleToggle(value)}
                >
                    {
                        dataCodeProduct && dataCodeProduct?.parameter?.map((item, index) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id ?? ""}
                            >
                                <AccordionTrigger className="focus-visible:outline-none w-full py-0 hover:no-underline group">
                                    <div className={`${isStateCategories?.idOpenAccordion?.includes(item.id ?? "") ? "bg-[#F6DD00]" : "bg-[#FFF2D1]"} p-4 flex items-center gap-4 justify-between w-full group transition-all duration-300 ease-linear`}>
                                        <div className={`${isStateCategories?.idOpenAccordion?.includes(item.id ?? "") ? "rotate-180 custom-transition" : "custom-transition rotate-0"} size-5`}>
                                            <IoIosArrowDown className='size-full text-[#ED1B24] group-hover:text-[#ED1B24]/80 custom-transition' />
                                        </div>

                                        <div className={`text-content-common text-[#272727] custom-transition font-normal text-start w-full`}>
                                            {item.name}
                                        </div>
                                    </div>
                                </AccordionTrigger>

                                <motion.div
                                    className="overflow-hidden"
                                    initial="closed"
                                    animate={isStateCategories?.idOpenAccordion?.includes(item.id ?? "") ? "open" : "closed"}
                                    variants={contentVariants}
                                    transition={{ duration: 0.1, ease: "easeInOut" }} // Tùy chỉnh thời gian và hiệu ứng chuyển đổi
                                >
                                    {
                                        item?.detail && item?.detail?.map((product, index) => (
                                            <div
                                                key={`detail-${product.id}`}
                                                className={`${item?.detail?.length - 1 !== index ? "border-b" : ""} grid grid-cols-9 md:py-4 text-[#1A1B20CC]/80 text-base font-normal max-w-full`}
                                            >
                                                <div className='md:col-span-1 col-span-9 flex md:justify-center justify-between gap-2 md:border-none border-b md:px-0 px-2 md:py-0 py-4'>
                                                    {
                                                        isVisibleMobile &&
                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Year</span>
                                                    }
                                                    <span className='text-content-common text-[#000000] font-bold md:w-full w-[60%] md:text-center text-end'>
                                                        {product?.year ?? ""}
                                                    </span>
                                                </div>

                                                <div className='md:col-span-1 col-span-9 flex md:justify-center justify-between gap-2 md:border-none border-b md:px-0 px-2 md:py-0 py-4'>
                                                    {
                                                        isVisibleMobile &&
                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Eng vol</span>
                                                    }
                                                    <span className='text-content-common text-[#000000] font-bold md:w-full w-[60%] md:text-center text-end'>
                                                        {product?.engine_vol ?? ""}
                                                    </span>
                                                </div>

                                                <div className='md:col-span-1 col-span-9 flex md:justify-center justify-between gap-2 md:border-none border-b md:px-0 px-2 md:py-0 py-4'>
                                                    {
                                                        isVisibleMobile &&
                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Eng no</span>
                                                    }
                                                    <span className='text-content-common text-[#000000] font-bold md:w-full w-[60%] md:text-center text-end'>
                                                        {product?.engine_no ?? ""}
                                                    </span>
                                                </div>

                                                <div className='md:col-span-1 col-span-9 flex md:justify-center justify-between gap-2 md:border-none border-b md:px-0 px-2 md:py-0 py-4'>
                                                    {
                                                        isVisibleMobile &&
                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Body no</span>
                                                    }
                                                    <span className='text-content-common text-[#000000] font-bold md:w-full w-[60%] md:text-center text-end'>
                                                        {product?.td_body ?? ""}
                                                    </span>
                                                </div>

                                                <div className='md:col-span-1 col-span-9 flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 w-full md:border-none border-b md:px-0 px-2 md:py-0 py-4'>
                                                    {
                                                        isVisibleMobile &&
                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Oil</span>
                                                    }
                                                    <div className='flex flex-col'>
                                                        {
                                                            product?.oil && product?.oil?.map((oil) => (
                                                                <Link
                                                                    href={oil?.id_product_lead ? `/categories?code=${oil.code_lead}` : "#"}
                                                                    target='_blank'
                                                                    className={`${oil?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default"} text-content-common font-medium md:text-center text-end md:w-full w-[60%]`}
                                                                    onClick={(event) => handleLinkCodeProduct(event, oil)}
                                                                >
                                                                    {oil?.code_lead ?? ""}
                                                                </Link>
                                                            ))
                                                        }
                                                    </div>
                                                </div>

                                                <div className='md:col-span-1 col-span-9 flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 w-full md:border-none border-b md:px-0 px-2 md:py-0 py-4'>
                                                    {
                                                        isVisibleMobile &&
                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Air</span>
                                                    }
                                                    <div className='flex flex-col'>
                                                        {
                                                            product?.air && product?.air?.map((air) => (
                                                                <Link
                                                                    href={air?.id_product_lead ? `/categories?code=${air.code_lead}` : "#"}
                                                                    target='_blank'
                                                                    className={`${air?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default"} text-content-common font-medium md:text-center text-end md:w-full w-[60%]`}
                                                                    onClick={(event) => handleLinkCodeProduct(event, air)}
                                                                >
                                                                    {air?.code_lead ?? ""}
                                                                </Link>
                                                            ))
                                                        }
                                                    </div>
                                                </div>

                                                <div className='md:col-span-1 col-span-9 flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 w-full md:border-none border-b md:px-0 px-2 md:py-0 py-4'>
                                                    {
                                                        isVisibleMobile &&
                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Fuel</span>
                                                    }
                                                    <div className='flex flex-col'>
                                                        {
                                                            product?.diesel && product?.diesel?.map((diesel) => (
                                                                <Link
                                                                    href={diesel?.id_product_lead ? `/categories?code=${diesel.code_lead}` : "#"}
                                                                    target='_blank'
                                                                    className={`${diesel?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default"} text-content-common font-medium md:text-center text-end md:w-full w-[60%]`}
                                                                    onClick={(event) => handleLinkCodeProduct(event, diesel)}
                                                                >
                                                                    {diesel?.code_lead ?? ""}
                                                                </Link>
                                                            ))
                                                        }
                                                    </div>
                                                </div>

                                                <div className='md:col-span-1 col-span-9 flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 w-full md:border-none border-b md:px-0 px-2 md:py-0 py-4'>
                                                    {
                                                        isVisibleMobile &&
                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Cabin</span>
                                                    }
                                                    <div className='flex flex-col'>
                                                        {
                                                            product?.cabin && product?.cabin?.map((cabin) => (
                                                                <Link
                                                                    href={cabin?.id_product_lead ? `/categories?code=${cabin.code_lead}` : "#"}
                                                                    target='_blank'
                                                                    className={`${cabin?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default"} text-content-common font-medium md:text-center text-end md:w-full w-[60%]`}
                                                                    onClick={(event) => handleLinkCodeProduct(event, cabin)}
                                                                >
                                                                    {cabin?.code_lead ?? ""}
                                                                </Link>
                                                            ))
                                                        }
                                                    </div>
                                                </div>

                                                <div className='md:col-span-1 col-span-9 flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 w-full border-none md:px-0 px-2 md:py-0 py-4'>
                                                    {
                                                        isVisibleMobile &&
                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Trans</span>
                                                    }
                                                    <div className='flex flex-col'>
                                                        {
                                                            product?.transmission && product?.transmission?.map((transmission) => (
                                                                <Link
                                                                    href={transmission?.id_product_lead ? `/categories?code=${transmission.code_lead}` : "#"}
                                                                    target='_blank'
                                                                    className={`${transmission?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default"} text-content-common font-medium md:text-center text-end md:w-full w-[60%]`}
                                                                    onClick={(event) => handleLinkCodeProduct(event, transmission)}
                                                                >
                                                                    {transmission?.code_lead ?? ""}
                                                                </Link>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </motion.div>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </div >
    )
}

export default SectionInfoProduct