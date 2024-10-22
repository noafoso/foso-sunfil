import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ActionTooltip } from '../tooltip/ActionTooltip'
import { IMenuHeader } from '@/types/menu/IMenu'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { IoIosArrowDown } from 'react-icons/io'
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select'

import { Menu, X } from 'lucide-react'
import { animate, AnimatePresence, motion } from 'framer-motion'
import { useStateHeader } from '@/states/Header/useStateHeader'
import { scrollToSection } from '@/utils/scroll/ScrollFunction'
import PhoneLink from '../contact/PhoneLink'
import EmailLink from '../contact/EmailLink'

interface DesktopHeaderProps {
    dataCountryOptions: any[]
    dataHeader: IMenuHeader[]
    handleToggleMenu: (action: string) => void
    handleCodeChange: (value: string) => void
}

const dataAboutUs = [
    {
        id: "about-us",
        name: "Công ty",
        link: "/about-us",
    },
    {
        id: "intro-about-us",
        name: "Giới thiệu",
        link: "/about-us",
    },
    {
        id: "history-about-us",
        name: "Lịch sử",
        link: "/about-us",
    },
    {
        id: "service-about-us",
        name: "Dịch vụ",
        link: "/about-us",
    },
    {
        id: "feel-customer-about-us",
        name: "Cảm nhận khách hàng",
        link: "/about-us",
    },
]

const dataProduct = [
    {
        id: "page-product",
        name: "Sản phẩm",
        link: "/products",
    },
    {
        id: "page-product",
        name: "Không khí",
        link: "/products",
    },
    {
        id: "page-product",
        name: "Cabin",
        link: "/products",
    },
    {
        id: "page-product",
        name: "Dầu",
        link: "/products",
    },
    {
        id: "page-product",
        name: "Điều hoà",
        link: "/products",
    },
]

const dataOther = [
    {
        id: "categories",
        name: "Danh mục",
        link: "/categories",
    },
    {
        id: "blogs",
        name: "Tin tức",
        link: "/blogs",
    },
    {
        id: "contact-us",
        name: "Liên hệ",
        link: "/contact-us",
    },
]

const DesktopHeader = ({ dataHeader, handleToggleMenu, handleCodeChange, dataCountryOptions }: DesktopHeaderProps) => {
    const router = useRouter(); // Sử dụng useRouter từ 'next/navigation'
    const pathname = usePathname()

    const { isStateHeader } = useStateHeader()

    const selectedOption = dataCountryOptions.find(option => option.code === isStateHeader.selectedCodeCountry);

    // Hàm cuộn đến phần tử với hiệu ứng framer-motion
    const handleMoveSectionId = (sectionId: number | string, link: string) => {
        // Điều hướng đến đường dẫn mới nếu khác đường dẫn hiện tại
        if (pathname !== link) {
            router.push(`${link}?sectionId=${sectionId}`)

            // setTimeout(() => {
            //     scrollToSection(sectionId)
            // }, 10);
        } else {
            scrollToSection(sectionId)
        }

        handleToggleMenu("off")
    };

    return (
        <>
            <div className='flex items-center justify-between w-[100%]'>
                <div className='flex items-center gap-4 w-full max-w-[80%]'>
                    <div className='w-[12%] max-w-[12%] h-[80px]'>
                        <Link
                            href="/"
                            className='w-fit h-full flex justify-start items-center'
                            prefetch={false}
                        >
                            <Image
                                alt='logo'
                                src="/logo/logo.png"
                                width={1920}
                                height={1080}
                                priority
                                className='size-full object-contain'
                            />
                        </Link>
                    </div>
                    <div className="w-[88%] max-w-[88%] flex items-center justify-start 3xl:gap-9 2xl:gap-5 xl:gap-2 lg:gap-1">
                        {
                            dataHeader && dataHeader.map((item) => (
                                <React.Fragment key={item.id}>
                                    {
                                        item.children ?
                                            <ActionTooltip
                                                side="bottom"
                                                align="start"
                                                classNameContent={"bg-[#25A35A] hidden"}
                                                label={(
                                                    <div className='flex flex-col gap-2'>
                                                    </div>
                                                )}
                                            >
                                                <Link
                                                    href={item.link}
                                                    onClick={() => {

                                                    }}
                                                    className={`${(item.link === '/' && pathname === '/') || (pathname.includes(item.link) && item.link !== '/') ? 'text-[#00A5BD] hover:text-[#00A5BD]/80' : 'text-[#272727] hover:text-[#00A5BD]'}
                                flex gap-2 items-center col-span-1 font-medium hover:text-[#272727]/90 3xl:text-lg xl:text-base lg:text-sm xl:px-4 px-2 cursor-pointer custom-transition`}
                                                >
                                                    <span>{item.name}</span>
                                                    <IoIosArrowDown className='text-xl text-[#272727]' />
                                                </Link>
                                            </ActionTooltip>
                                            :
                                            <Link
                                                href={item.link}
                                                className={`${(item.link === '/' && pathname === '/') || (pathname.includes(item.link) && item.link !== '/') ?
                                                    "text-[#07A6FF] hover:text-[#07A6FF]/80"
                                                    :
                                                    "text-[#5C5C5C] hover:text-[#07A6FF]"}
                                             3xl:text-lg xl:text-base text-sm font-medium px-4 uppercase cursor-pointer custom-transition`}
                                                prefetch={false}
                                            >
                                                {item.name}
                                            </Link>
                                    }
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>

                <div className='flex items-center justify-end w-full gap-2 max-w-[20%] select-none'>
                    {/* <div className="flex items-center">
                        <Select onValueChange={handleCodeChange}>
                            <SelectTrigger className="flex items-center gap-2 h-full border-none shadow-none focus:outline-none focus:ring-0 focus:ring-offset-0">
                                {
                                    selectedOption && (
                                        <>
                                            <div className='size-8 rounded-full'>
                                                <Image
                                                    src={selectedOption.flag}
                                                    alt={`${selectedOption.country} flag`}
                                                    width={100}
                                                    height={100}
                                                    className="size-full object-cover rounded-full"
                                                />
                                            </div>
                                            <div className='text-base uppercase font-medium text-[#000000]'>
                                                {selectedOption.code}
                                            </div>

                                            <IoIosArrowDown className='size-5 text-[#000000]' />
                                        </>
                                    )
                                }
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    dataCountryOptions.map(option => (
                                        <SelectItem
                                            key={option.code}
                                            value={option.code}
                                        >
                                            {option.country} ({option.code})
                                        </SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </div> */}

                    <motion.div
                        initial={false}
                        animate="rest"
                        whileTap="press"
                        variants={{
                            rest: { scale: 1 },
                            press: { scale: 1.03, transition: { duration: 0.2 } },
                        }}
                        className="flex items-center justify-center bg-black p-3 rounded-[6px] cursor-pointer"
                        onClick={() => handleToggleMenu('on')}
                    >
                        <Menu className='xl:size-6 size-5 scale-110 text-white' />
                    </motion.div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {
                    isStateHeader?.isShowMenuScreen &&
                    <motion.div
                        initial={{ y: '-100%' }} // Bắt đầu từ ngoài bên phải
                        animate={{ y: 0 }}      // Trượt vào vị trí hiển thị
                        exit={{ y: '-100%' }}    // Trượt ra khi đóng
                        transition={{ duration: 0.5 }} // Tốc độ trượt
                        className="z-[999] absolute bg-[url(/background/menu/bg-menu.png)] bg-center bg-cover bg-no-repeat w-screen lg:h-screen md:h-dvh top-0 left-0"
                    >
                        <div className='custom-container py-4 relative h-full'>
                            <div className='relative 3xl:space-y-12 space-y-10 z-10'>
                                <div className='flex items-center justify-between'>
                                    <div className='w-[12%] max-w-[12%] h-[80px]'>
                                        <Link
                                            href="/"
                                            className='w-fit h-full flex justify-start items-center'
                                            prefetch={false}
                                        >
                                            <Image
                                                alt='logo'
                                                src="/logo/logo.png"
                                                width={1920}
                                                height={1080}
                                                priority
                                                className='size-full object-contain'
                                            />
                                        </Link>
                                    </div>

                                    <motion.div
                                        initial={false}
                                        animate="rest"
                                        whileTap="press"
                                        variants={{
                                            rest: { scale: 1 },
                                            press: { scale: 1.03, transition: { duration: 0.2 } },
                                        }}
                                        className="flex items-center justify-center bg-black p-3 rounded-[6px] cursor-pointer"
                                        onClick={() => handleToggleMenu('off')}
                                    >
                                        <X className='xl:size-6 size-5 scale-110 text-white' />
                                    </motion.div>
                                </div>

                                <div className='grid grid-cols-4 px-6 py-8 w-full border-t border-[#D2D9E0]'>
                                    <div className='col-span-1 flex flex-col 3xl:gap-8 gap-6'>
                                        {
                                            dataAboutUs && dataAboutUs.map((item, index) => (
                                                <div
                                                    key={item.id}
                                                    className={`${index === 0 ? "uppercase text-[#1F1F1F] hover:text-[#1F1F1F]/80 font-bold" : "capitalize text-[#5C5C5C] hover:text-[#5C5C5C]/80 font-medium"} text-title-common cursor-pointer custom-transition w-fit`}
                                                    onClick={() => handleMoveSectionId(item.id, item.link)}
                                                >
                                                    {item.name}
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className='col-span-1 flex flex-col 3xl:gap-8 gap-6'>
                                        {
                                            dataProduct && dataProduct.map((item, index) => (
                                                <div
                                                    key={`${item.id}-${index}`}
                                                    className={`${index === 0 ? "uppercase text-[#1F1F1F] hover:text-[#1F1F1F]/80 font-bold" : "capitalize text-[#5C5C5C] hover:text-[#5C5C5C]/80 font-medium"} text-title-common cursor-pointer custom-transition w-fit`}
                                                    onClick={() => handleMoveSectionId(item.id, item.link)}
                                                >
                                                    {item.name}
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className='col-span-1 flex flex-col 3xl:gap-8 gap-6'>
                                        {
                                            dataOther && dataOther.map((item, index) => (
                                                <div
                                                    key={`${item.id}-${index}`}
                                                    className={`uppercase text-[#1F1F1F] hover:text-[#1F1F1F]/80 font-bold text-title-common cursor-pointer custom-transition w-fit`}
                                                    onClick={() => handleMoveSectionId(item.id, item.link)}
                                                >
                                                    {item.name}
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className='col-span-1 flex flex-col 3xl:gap-8 gap-6'>
                                        <div className={`uppercase text-[#1F1F1F] hover:text-[#1F1F1F]/80 font-bold text-title-common cursor-default custom-transition w-fit`}>
                                            VIETHUNG AUTO
                                        </div>

                                        <div className='flex flex-col'>
                                            <div className={`text-[#000000]/[62%] font-normal text-content-common cursor-default w-fit`}>
                                                Tel
                                            </div>
                                            <PhoneLink phoneNumber={'1921029182'} className={`text-[#1F1F1F] hover:text-[#1F1F1F]/80 font-bold text-title-common cursor-pointer custom-transition w-fit`}>
                                                +192 102 9182
                                            </PhoneLink>
                                        </div>

                                        <div className='flex flex-col'>
                                            <div className={`text-[#000000]/[62%] font-normal text-content-common cursor-default w-fit`}>
                                                Fax
                                            </div>
                                            <PhoneLink phoneNumber={'1921029182'} className={`text-[#1F1F1F] hover:text-[#1F1F1F]/80 font-bold text-title-common cursor-pointer custom-transition w-fit`}>
                                                +192 102 9182
                                            </PhoneLink>
                                        </div>

                                        <div className='flex flex-col'>
                                            <div className={`text-[#000000]/[62%] font-normal text-content-common cursor-default w-fit`}>
                                                Mail
                                            </div>
                                            <EmailLink email="Viethung@gmai.com" className={`text-[#1F1F1F] hover:text-[#1F1F1F]/80 font-bold text-title-common cursor-pointer custom-transition w-fit`}>
                                                Viethung@gmai.com
                                            </EmailLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='absolute z-0 3xl:bottom-[15%] bottom-[10%]'>
                                <div className='aspect-3.83/1 3xl:w-[854px] xl:w-[620px] w-[620px] h-full'>
                                    <Image
                                        src={"/background/menu/bg-viethung-full.png"}
                                        alt='oil'
                                        width={1080}
                                        height={300}
                                        className='size-full object-cover'
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default DesktopHeader