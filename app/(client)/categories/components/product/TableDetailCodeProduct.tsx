import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { useStateCategories } from '../../_state/useStateCategories';

import { IoIosArrowDown } from 'react-icons/io';
import { useResizeStore } from '@/stores/useResizeStore';
import { IDetailCodeApplication, IDetailCodeProduct } from '@/types/products/IProducts';
import LineVerticalLinear from '@/components/line/LineVerticalLinear';
import { Skeleton } from '@/components/ui/skeleton';

type Props = { data: any }

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
        id: "air_dryer",
        name: "Air Dryer",
        icon: "",
    },
    {
        id: "air_oil_separator",
        name: "Air Oil Separator",
        icon: "",
    },
    {
        id: "air_purifier",
        name: "Air Furifier",
        icon: "",
    },
    {
        id: "coolant_filter",
        name: "Coolant Filter",
        icon: "",
    },
    {
        id: "filter_bag",
        name: "Filter Bag",
        icon: "",
    },
    {
        id: "filter_cartridges",
        name: "Filter Cartridges",
        icon: "",
    },
    {
        id: "fuel_pump",
        name: "Fuel Pump",
        icon: "",
    },
    {
        id: "fuel_water",
        name: "Fuel/Water Seperator",
        icon: "",
    },
    {
        id: "gas_filter",
        name: "Gas Filter",
        icon: "",
    },
    {
        id: "hvac",
        name: "Hvac filter",
        icon: "",
    },
    {
        id: "hydraulic_oil",
        name: "Hydraulic oil filter",
        icon: "",
    },
    {
        id: "urea_filter",
        name: "Urea Filter",
        icon: "",
    },

    {
        id: "other",
        name: "Other",
        icon: "",
    },
]

const keysToCheck = [
    'air',
    'oil',
    'air_dryer', //
    'air_oil_separator', //
    'air_purifier',
    'cabin',
    'coolant_filter', //
    'diesel',
    'filter_bag', //
    'filter_cartridges', //
    'fuel_pump', //
    'fuel_water',
    'gas_filter', //
    'hvac',
    'hydraulic_oil',
    'transmission',
    'urea_filter', //
    'other',
];
// const keysToCheck = [
//     'air',
//     'air_purifier',
//     'cabin',
//     'diesel',
//     'fuel_water',
//     'gasoline',
//     'hvac',
//     'hydraulic_oil',
//     'oil',
//     'other',
//     'transmission',
// ];

// animation đóng mở collapsed
const contentVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: 'auto', opacity: 1 }
};

const TableDetailCodeProduct = ({ data }: Props) => {
    const { isStateCategories, queryKeyIsStateCategories } = useStateCategories()
    const { isVisibleMobile, isVisibleTablet } = useResizeStore()

    // state để kiểm tra các cột trong table
    const [stateColTable, setStateColTable] = useState({
        col_air: false,
        col_air_dryer: false,
        col_air_oil_separator: false,
        col_air_purifier: false,
        col_cabin: false,
        col_coolant_filter: false,
        col_diesel: false,
        col_filter_bag: false,
        col_filter_cartridges: false,
        col_fuel_pump: false,
        col_fuel_water: false,
        col_gas_filter: false,
        col_hvac: false,
        col_hydraulic_oil: false,
        col_oil: false,
        col_transmission: false,
        col_urea_filter: false,
        col_other: false
    });
    const [loadingTable, setLoadingTable] = useState(true);

    useEffect(() => {
        setLoadingTable(true); // Bắt đầu loadingTable
        if (data && data.parameter) {
            // Hàm kiểm tra nếu có bất kỳ giá trị nào của key là null
            const checkColumns = () => {
                let updatedState = { ...stateColTable };

                keysToCheck.forEach((key) => {
                    // Kiểm tra nếu tất cả giá trị của key trong mảng `detail` đều là null
                    const allNull = data.parameter.every((item: any) =>
                        item.detail.every((detail: any) => {
                            // kiểm tra trong mảng detail nếu trong key tổng bằng null thì trả về true để ẩn cột
                            const value = detail[key as keyof IDetailCodeApplication];

                            // kiểm tra trong mảng detail nếu id_product_lead bằng null thì trả về true để ẩn cột
                            const valueIdProductLead = Array.isArray(value) && value.every((detailIdProductLead: any) => {
                                return detailIdProductLead.id_product_lead === null;
                            });

                            return value === null || valueIdProductLead; // Nếu tất cả đều null, trả về true
                        })
                    );

                    // Cập nhật stateColTable thành true nếu toàn bộ giá trị là null
                    updatedState[`col_${key}` as keyof typeof stateColTable] = allNull;
                });

                // Cập nhật stateColTable
                setStateColTable(updatedState);
                setLoadingTable(false); // Kết thúc loadingTable
            };

            checkColumns();
        } else {
            setLoadingTable(false); // Nếu không có dữ liệu, tắt loadingTable
        }
    }, [data, isStateCategories.idTabActive]);

    // Hàm để xử lý khi accordion được mở hoặc đóng
    const handleToggle = (value: string[]) => {
        queryKeyIsStateCategories({ idOpenAccordion: value });
    };

    // nếu không có id_product_lead thì không cho chuyển trang
    const handleLinkCodeProduct = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, product: any) => {
        if (!product.id_product_lead) {
            event.preventDefault()
        }
    }

    const visibleHeaders = dataHeader.filter((item) => {
        const columnKey = `col_${item.id}` as keyof typeof stateColTable;
        // Chỉ hiển thị cột nếu stateColTable tương ứng không phải là true
        return !stateColTable[columnKey];
    });

    // Cập nhật số lượng cột trong grid dựa trên số lượng header thực tế hiển thị
    const gridHeaderColumns = `${visibleHeaders.length}`;

    return (
        <div className='bg-white min-w-screen max-w-screen overflow-x-auto gap-10'>
            {
                !isVisibleMobile &&
                (
                    loadingTable ?
                        (
                            <div
                                className={`grid xl:gap-4 gap-2 md:w-max w-full px-2`}
                                style={{
                                    gridTemplateColumns: `repeat(${15}, minmax(0, 1fr))`
                                }}
                            >
                                {
                                    [...Array(15)].map((_, index) => (
                                        <div
                                            key={`skeleton-${index}`}
                                            className='col-span-1 w-full xl:max-w-full md:max-w-[80px] flex xl:flex-row flex-col items-center justify-center text-center xl:gap-1 py-4'
                                        >
                                            <Skeleton className='h-10 w-full rounded-md' /> {/* Skeleton cho tên cột */}
                                        </div>
                                    ))
                                }
                            </div>
                        )
                        :
                        (
                            <div
                                className={`${+gridHeaderColumns > 13 ? "md:w-max" : "w-full"} grid xl:gap-4 gap-2`}
                                style={{
                                    gridTemplateColumns: `repeat(${gridHeaderColumns}, minmax(0, 1fr))`
                                }}
                            >
                                {
                                    visibleHeaders && visibleHeaders.map((item) => (
                                        <div
                                            key={`header-${item.id}`}
                                            className={`${+gridHeaderColumns > 13 ? "3xl:max-w-[111.31px] 2xl:max-w-[98.94px] xl:max-w-[86.58px]" : "xl:max-w-full lg:max-w-full md:max-w-[76px]"} col-span-1 w-full flex xl:flex-row flex-col items-center justify-center text-center xl:gap-1 py-4`}
                                        >
                                            {
                                                item.icon &&
                                                <div className='2xl:size-8 size-6 aspect-square'>
                                                    <Image
                                                        width={100}
                                                        height={100}
                                                        alt="icon"
                                                        className='size-full object-contain filter grayscale-[1] brightness-[2]'
                                                        src={item?.icon ?? "/default/default.png"}
                                                    />
                                                </div>
                                            }

                                            <div className='3xl:text-lg 2xl:text-base md:text-sm text-lg xl:w-fit w-full text-[#000000] font-bold capitalize text-center'>
                                                {item?.name ?? ""}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                )
            }

            {
                loadingTable ?
                    (
                        <div className='flex flex-col gap-1 px-2 pb-4'>
                            {
                                [...Array(5)].map((_, index) => (
                                    <Skeleton
                                        key={`body-skeleton-${index}`}
                                        className='w-full 3xl:h-14 h-12'
                                    />
                                ))
                            }
                        </div>
                    )
                    :
                    (
                        <Accordion
                            type="multiple"
                            onValueChange={(value: string[]) => handleToggle(value)}
                            className={`${+gridHeaderColumns > 13 ? "md:w-max" : "w-full"}`}
                        >
                            {
                                data && data?.parameter?.map((item: any, index: number) => {
                                    return (
                                        <AccordionItem
                                            key={`accordion-${item.id}`}
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
                                                className='overflow-hidden'
                                                initial="closed"
                                                animate={isStateCategories?.idOpenAccordion?.includes(item.id ?? "") ? "open" : "closed"}
                                                variants={contentVariants}
                                                transition={{ duration: 0.1, ease: "easeInOut" }} // Tùy chỉnh thời gian và hiệu ứng chuyển đổi
                                            >
                                                {
                                                    item.detail && item?.detail?.map((product: IDetailCodeApplication, i: number) => (
                                                        <div
                                                            key={`code-product-${product.id}`}
                                                            className={`${item?.detail?.length - 1 !== i ? "border-b" : ""} grid xl:gap-4 md:gap-2 md:py-4 text-[#1A1B20CC]/80 text-base font-normal`}
                                                            style={{
                                                                gridTemplateColumns: `repeat(${gridHeaderColumns}, minmax(0, 1fr))`
                                                            }}
                                                        >
                                                            <div
                                                                className='w-full max-w-full flex md:justify-center justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                style={{
                                                                    gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                }}
                                                            >
                                                                {
                                                                    isVisibleMobile &&
                                                                    <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Year</span>
                                                                }
                                                                <span className='text-content-common text-[#000000]/90 font-medium md:w-full w-[60%] md:text-center text-end'>
                                                                    {product?.year ?? ""}
                                                                </span>
                                                            </div>

                                                            <div
                                                                className='w-full max-w-full flex md:justify-center justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                style={{
                                                                    gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                }}
                                                            >
                                                                {
                                                                    isVisibleMobile &&
                                                                    <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Eng vol</span>
                                                                }
                                                                <span className='text-content-common text-[#000000]/90 font-medium md:w-full w-[60%] md:text-center text-end'>
                                                                    {product?.engine_vol ?? ""}
                                                                </span>
                                                            </div>

                                                            <div
                                                                className='w-full max-w-full flex md:justify-center justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                style={{
                                                                    gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                }}
                                                            >
                                                                {
                                                                    isVisibleMobile &&
                                                                    <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Eng no</span>
                                                                }
                                                                <span className='text-content-common text-[#000000]/90 font-medium md:w-full w-[60%] md:text-center text-end'>
                                                                    {product?.engine_no ?? ""}
                                                                </span>
                                                            </div>

                                                            <div
                                                                className='w-full max-w-full flex md:justify-center justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                style={{
                                                                    gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                }}
                                                            >
                                                                {
                                                                    isVisibleMobile &&
                                                                    <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Body no</span>
                                                                }
                                                                <span className='text-content-common text-[#000000]/90 font-medium md:w-full w-[60%] md:text-center text-end'>
                                                                    {product?.td_body ?? ""}
                                                                </span>
                                                            </div>

                                                            {
                                                                !stateColTable.col_oil &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Oil</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.oil && product?.oil?.map((oil, oil_index) => (
                                                                                <Link
                                                                                    key={`oil-${oil_index}`}
                                                                                    href={oil?.id_product_lead ? `/categories?code=${oil.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${oil?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, oil)}
                                                                                >
                                                                                    {oil?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_air &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Air</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.air && product?.air?.map((air, air_index) => (
                                                                                <Link
                                                                                    key={`air-${air_index}`}
                                                                                    href={air?.id_product_lead ? `/categories?code=${air.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${air?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, air)}
                                                                                >
                                                                                    {air?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_diesel &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Fuel</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.diesel && product?.diesel?.map((diesel, diesel_index) => (
                                                                                <Link
                                                                                    key={`diesel-${diesel_index}`}
                                                                                    href={diesel?.id_product_lead ? `/categories?code=${diesel.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${diesel?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, diesel)}
                                                                                >
                                                                                    {diesel?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_cabin &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Cabin</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.cabin && product?.cabin?.map((cabin, cabin_index) => (
                                                                                <Link
                                                                                    key={`cabin-${cabin_index}`}
                                                                                    href={cabin?.id_product_lead ? `/categories?code=${cabin.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${cabin?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, cabin)}
                                                                                >
                                                                                    {cabin?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_transmission &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Trans</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.transmission && product?.transmission?.map((transmission, transmission_index) => (
                                                                                <Link
                                                                                    key={`transmission-${transmission_index}`}
                                                                                    href={transmission?.id_product_lead ? `/categories?code=${transmission.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${transmission?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, transmission)}
                                                                                >
                                                                                    {transmission?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_air_dryer &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Air Dryer</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.air_dryer && product?.air_dryer?.map((air_dryer, air_dryer_index) => (
                                                                                <Link
                                                                                    key={`air_dryer-${air_dryer_index}`}
                                                                                    href={air_dryer?.id_product_lead ? `/categories?code=${air_dryer.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${air_dryer?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, air_dryer)}
                                                                                >
                                                                                    {air_dryer?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_air_oil_separator &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Air Oil Separator</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.air_oil_separator && product?.air_oil_separator?.map((air_oil_separator, air_oil_separator_index) => (
                                                                                <Link
                                                                                    key={`air_oil_separator-${air_oil_separator_index}`}
                                                                                    href={air_oil_separator?.id_product_lead ? `/categories?code=${air_oil_separator.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${air_oil_separator?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, air_oil_separator)}
                                                                                >
                                                                                    {air_oil_separator?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_air_purifier &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Air Furifier</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.air_purifier && product?.air_purifier?.map((air_purifier, air_purifier_index) => (
                                                                                <Link
                                                                                    key={`air_purifier-${air_purifier_index} `}
                                                                                    href={air_purifier?.id_product_lead ? `/categories?code=${air_purifier.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${air_purifier?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, air_purifier)}
                                                                                >
                                                                                    {air_purifier?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_coolant_filter &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Coolant Filter</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.coolant_filter && product?.coolant_filter?.map((coolant_filter, coolant_filter_index) => (
                                                                                <Link
                                                                                    key={`coolant_filter-${coolant_filter_index}`}
                                                                                    href={coolant_filter?.id_product_lead ? `/categories?code=${coolant_filter.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${coolant_filter?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, coolant_filter)}
                                                                                >
                                                                                    {coolant_filter?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_filter_bag &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Filter Bag</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.filter_bag && product?.filter_bag?.map((filter_bag, filter_bag_index) => (
                                                                                <Link
                                                                                    key={`filter_bag-${filter_bag_index}`}
                                                                                    href={filter_bag?.id_product_lead ? `/categories?code=${filter_bag.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${filter_bag?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, filter_bag)}
                                                                                >
                                                                                    {filter_bag?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_filter_cartridges &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Filter Cartridges</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.filter_cartridges && product?.filter_cartridges?.map((filter_cartridges, filter_cartridges_index) => (
                                                                                <Link
                                                                                    key={`filter_cartridges-${filter_cartridges_index}`}
                                                                                    href={filter_cartridges?.id_product_lead ? `/categories?code=${filter_cartridges.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${filter_cartridges?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, filter_cartridges)}
                                                                                >
                                                                                    {filter_cartridges?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_fuel_pump &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Fuel Pump</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.fuel_pump && product?.fuel_pump?.map((fuel_pump, fuel_pump_index) => (
                                                                                <Link
                                                                                    key={`fuel_pump-${fuel_pump_index}`}
                                                                                    href={fuel_pump?.id_product_lead ? `/categories?code=${fuel_pump.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${fuel_pump?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, fuel_pump)}
                                                                                >
                                                                                    {fuel_pump?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_fuel_water &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Fuel/Water Seperator</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.fuel_water && product?.fuel_water?.map((fuel_water, fuel_water_index) => (
                                                                                <Link
                                                                                    key={`fuel_water-${fuel_water_index}`}
                                                                                    href={fuel_water?.id_product_lead ? `/categories?code=${fuel_water.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${fuel_water?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, fuel_water)}
                                                                                >
                                                                                    {fuel_water?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_gas_filter &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Gas Filter</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.gas_filter && product?.gas_filter?.map((gas_filter, gas_filter_index) => (
                                                                                <Link
                                                                                    key={`gas_filter-${gas_filter_index}`}
                                                                                    href={gas_filter?.id_product_lead ? `/categories?code=${gas_filter.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${gas_filter?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, gas_filter)}
                                                                                >
                                                                                    {gas_filter?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_hvac &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Hvac Filter</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.hvac && product?.hvac?.map((hvac, hvac_index) => (
                                                                                <Link
                                                                                    key={`hvac-${hvac_index} `}
                                                                                    href={hvac?.id_product_lead ? `/categories?code=${hvac.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${hvac?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, hvac)}
                                                                                >
                                                                                    {hvac?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_hydraulic_oil &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Hydraulic Oil Filter</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.hydraulic_oil && product?.hydraulic_oil?.map((hydraulic_oil, hydraulic_oil_index) => (
                                                                                <Link
                                                                                    key={`hydraulic_oil-${hydraulic_oil_index} `}
                                                                                    href={hydraulic_oil?.id_product_lead ? `/categories?code=${hydraulic_oil.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${hydraulic_oil?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, hydraulic_oil)}
                                                                                >
                                                                                    {hydraulic_oil?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_urea_filter &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Urea Filter</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.urea_filter && product?.urea_filter?.map((urea_filter, urea_filter_index) => (
                                                                                <Link
                                                                                    key={`urea_filter-${urea_filter_index} `}
                                                                                    href={urea_filter?.id_product_lead ? `/categories?code=${urea_filter.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${urea_filter?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, urea_filter)}
                                                                                >
                                                                                    {urea_filter?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                !stateColTable.col_other &&
                                                                <div
                                                                    className='w-full max-w-full flex md:flex-col flex-row md:items-center md:justify-start justify-between gap-2 md:px-0 px-2 md:py-0 py-4'
                                                                    style={{
                                                                        gridColumn: !isVisibleMobile ? `span 1 / span 1` : `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    {
                                                                        isVisibleMobile &&
                                                                        <span className='text-content-common uppercase text-[#1A1B20]/[64%]'>Other</span>
                                                                    }
                                                                    <div className='flex flex-col'>
                                                                        {
                                                                            product?.other && product?.other?.map((other, transmission_index) => (
                                                                                <Link
                                                                                    key={`other-${transmission_index} `}
                                                                                    href={other?.id_product_lead ? `/categories?code=${other.code_lead}` : "#"}
                                                                                    target='_blank'
                                                                                    className={`${other?.id_product_lead ? "text-[#57A4FE] hover:text-[#57A4FE]/80" : "text-[#ED1D24] hover:text-[#ED1D24]/80 cursor-default hidden"} text-content-common font-medium md:text-center text-end md:w-full w-[60%] text-nowrap`}
                                                                                    onClick={(event) => handleLinkCodeProduct(event, other)}
                                                                                >
                                                                                    {other?.code_lead ?? ""}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                isVisibleMobile && item?.detail?.length > 1 && item?.detail?.length - 1 !== i &&
                                                                <div
                                                                    className='w-full'
                                                                    style={{
                                                                        gridColumn: `span ${gridHeaderColumns} / span ${gridHeaderColumns}`
                                                                    }}
                                                                >
                                                                    <LineVerticalLinear
                                                                        backgroundColorLinear="linear-gradient(90deg, #FFF2D1 0%, #F6DD00 50%, #FFF2D1 100%)"
                                                                        classNameLinear={"h-[3px]"}
                                                                    />
                                                                </div>
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </motion.div>
                                        </AccordionItem>
                                    )
                                })
                            }
                        </Accordion>
                    )
            }
        </div >
    )
}

export default TableDetailCodeProduct