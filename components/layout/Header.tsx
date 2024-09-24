'use client'
import { uuidv4 } from '@/lib/uuid'
import { useResizeStore } from '@/stores/useResizeStore'
import { IMenuHeader } from '@/types/menu/IMenu'
import React, { useEffect, useState } from 'react'
import TabletHeader from '@/components/header/TabletHeader'

import Link from 'next/link'
import Image from 'next/image'
import { ActionTooltip } from '../tooltip/ActionTooltip'
import { IoIosArrowDown } from 'react-icons/io'
import { usePathname } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select'
import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
// import { Button } from '@/components/ui/button'
// import { Skeleton } from '@/components/ui/skeleton'

const dataHeader: IMenuHeader[] = [
    {
        id: uuidv4(),
        name: 'Về chúng tôi',
        link: '/about-us',
        children: false,
        visible: true,
    },
    {
        id: uuidv4(),
        name: 'Sản phẩm',
        link: '/products',
        children: false,
        visible: true,
    },
    {
        id: uuidv4(),
        name: 'Danh mục',
        link: '/categories',
        children: false,
        visible: true,
    },
    {
        id: uuidv4(),
        name: 'Tin tức',
        link: '/blogs',
        children: false,
        visible: true,
    },
    {
        id: uuidv4(),
        name: 'Liên hệ',
        link: '/contact-us',
        children: false,
        visible: true,
    },
]

const contryCodeOptions = [
    {
        code: 'vi',
        country: 'Việt Nam',
        flag: '/flag/vi.png'
    },
    {
        code: 'en',
        country: 'English',
        flag: '/flag/en.png'
    }
]

const Header = () => {
    const pathname = usePathname()
    const { isVisibleTablet } = useResizeStore()
    const [showActive, setShowActive] = useState<boolean>(false);
    const [isScrollBlocked, setIsScrollBlocked] = useState<boolean>(false);
    const [selectedCode, setSelectedCode] = useState<string>(contryCodeOptions[0].code);

    useEffect(() => {
        const body = document.body;
        if (!isScrollBlocked) {
            body.style.overflow = 'auto'; // Cho phép cuộn
        } else {
            body.style.overflow = 'hidden'; // Chặn cuộn
        }
    }, [isScrollBlocked]);

    const handleToggleMenu = (action: string): void => {
        if (action === "on") {
            setIsScrollBlocked(true);
            setShowActive(true)
        } else if (action === "off") {
            setIsScrollBlocked(false);
            setShowActive(false)
        }
    }

    const handleCodeChange = (value: string) => {
        console.log('value change select: ', value);
        setSelectedCode(value);
    };

    const selectedOption = contryCodeOptions.find(option => option.code === selectedCode);

    return (
        <header className='fixed md:bg-transparent bg-white w-full z-50 md:pt-4 md:pb-0 py-4'>
            <div className='custom-container'>
                {
                    isVisibleTablet ?
                        // màn hình mobile, tablet
                        <TabletHeader
                            dataHeader={dataHeader}
                            showActive={showActive}
                            handleToggleMenu={handleToggleMenu}
                        />
                        :
                        // màn hình laptop
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
                                                                    {/* {
                                                        listCategoryProducts && listCategoryProducts?.map((item) => (
                                                            <motion.div
                                                                key={item.id}
                                                                onClick={() => handleSelectedCategory(item, "desktop")}
                                                                initial={false}
                                                                animate="rest"
                                                                whileTap="press"
                                                                variants={{
                                                                    rest: { scale: 1 },
                                                                    press: { scale: 1.03 },
                                                                }}
                                                            >
                                                                <Link
                                                                    href={`${item.link}`}
                                                                    prefetch={false}
                                                                    className={`${isStateProductCategory?.category?.selectedCategory?.id === item.id ? 'bg-[#FCFFF9] text-[#0E0E0E]' : ''} 
                                                                        flex flex-row items-center gap-3 group hover:bg-[#FCFFF9] hover:text-[#0E0E0E] py-2 px-8 rounded-xl cursor-pointer custom-transition`}
                                                                >
                                                                    <div className={`max-w-full font-medium 3xl:text-lg xxl:text-base xl:text-sm text-sm line-clamp-2`}>
                                                                        {item?.name ? item?.name : ''}
                                                                    </div>
                                                                </Link>
                                                            </motion.div>
                                                        ))
                                                    } */}
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
                                <div className="flex items-center">
                                    <Select onValueChange={handleCodeChange}>
                                        <SelectTrigger className="flex items-center gap-2 h-full border-none shadow-none focus:outline-none focus:ring-0 focus:ring-offset-0">
                                            {selectedOption && (
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
                                            )}
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                contryCodeOptions.map(option => (
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
                                    onClick={() => { }}
                                >
                                    <Menu className='xl:size-6 size-5 scale-110 text-white' />
                                </motion.div>
                            </div>

                            {/* <div className='flex items-center justify-end min-w-[16%] gap-6'>
                            <div className='flex items-center 3xl:gap-4 gap-2'>
                                {
                                    informationUser
                                        ?
                                        <>
                                            <motion.div
                                                initial={false}
                                                animate="rest"
                                                whileTap="press"
                                                variants={{
                                                    rest: { scale: 1 },
                                                    press: { scale: 1.03 }
                                                }}
                                                className={`${pathname === "/cart" ? "text-white bg-[#21A9C6] hover:bg-[#21A9C6]/80 border-[#21A9C6]" : " text-[#353536] border-[#E4E5E6] hover:bg-[#F5F6F7]"} p-3 border rounded-lg cursor-pointer relative custom-transition`}
                                                onClick={() => router.push("/cart")}
                                                ref={cartRef}
                                            >
                                                <BsCart3 className='3xl:size-5 size-4' />
                                                {
                                                    cart && cart?.length > 0 &&
                                                    <div className='size-[6px] bg-red-500 rounded-full absolute top-3 right-2.5' />
                                                }
                                            </motion.div>

                                            <DropdownHeaderNotification>
                                                <div className='cursor-pointer size-7 relative'>
                                                    <IoNotifications className='text-2xl text-[#00A5BD]' />
                                                    {
                                                        dataCountNotification?.count > 0 &&
                                                        <Badge variant="outline" className='absolute top-0 -right-1/2 -translate-x-1/3 -translate-y-1/2 bg-red-500 text-white rounded-full px-[7px] text-[10px] border-white'>
                                                            {dataCountNotification?.count}
                                                        </Badge>
                                                    }
                                                </div>
                                            </DropdownHeaderNotification>

                                            <Link
                                                href={'/profile/account'}
                                                className='3xl:size-10 3xl:min-w-10 3xl:min-h-10 size-8 min-w-8  min-h-8'
                                                prefetch={false}
                                            >
                                                <Avatar className='w-full h-full shadow'>
                                                    <AvatarImage
                                                        width={1920}
                                                        height={1080}
                                                        src={informationUser?.client_image ? informationUser?.client_image : '/avatar/avatar_default.png'}
                                                        alt="@kanow"
                                                    />
                                                    <AvatarFallback >
                                                        <Image
                                                            width={40}
                                                            height={40}
                                                            src='/avatar/avatar_default.png'
                                                            alt="@kanow"
                                                            className='w-full h-full'
                                                        />
                                                    </AvatarFallback>
                                                </Avatar>
                                            </Link>

                                            <Link
                                                href={'/profile/account'}
                                                className={`text-[#0E0E0E]/80 flex gap-2 items-center cursor-pointer font-medium col-span-1 3xl:text-[17px] xxl:text-base xl:text-sm text-sm hover:text-[#0E0E0E] transition-all`}
                                                prefetch={false}
                                            >
                                                <div className='capitalize truncate max-w-[130px] caret-transparent hover:opacity-65 transition-all duration-200 ease-linear'>
                                                    {informationUser?.fullname}
                                                </div>
                                                <IoIosArrowDown className='2xl:text-2xl text-xl text-[#00A5BD]' />
                                            </Link>
                                        </>
                                        :
                                        isLoading ?
                                            <div className='flex items-center gap-2'>
                                                <Skeleton className="size-9 rounded-full" />
                                                <Skeleton className="w-[100px] h-[30px] rounded-full" />
                                            </div>
                                            :
                                            <>
                                                <motion.div
                                                    initial={false}
                                                    animate="rest"
                                                    whileTap="press"
                                                    variants={{
                                                        rest: { scale: 1 },
                                                        press: { scale: 1.03 }
                                                    }}
                                                    className={`${pathname === "/cart" ? "text-white bg-[#21A9C6] hover:bg-[#21A9C6]/80 border-[#21A9C6]" : " text-[#353536] border-[#E4E5E6] hover:bg-[#F5F6F7]"} hidden p-3 border rounded-lg cursor-pointer relative custom-transition`}
                                                    onClick={() => router.push("/cart")}
                                                    ref={cartRef}
                                                >
                                                    <BsCart3 className='3xl:size-5 size-4' />
                                                    {
                                                        cart && cart?.length > 0 &&
                                                        <div className='size-[6px] bg-red-500 rounded-full absolute top-3 right-2.5' />
                                                    }
                                                </motion.div>

                                                <motion.div
                                                    initial={false}
                                                    animate="rest"
                                                    whileTap="press"
                                                    variants={{
                                                        rest: { scale: 1 },
                                                        press: { scale: 1.03, transition: { duration: 0.2 } },
                                                    }}
                                                >
                                                    <Button
                                                        onClick={() => handleRegister('register')}
                                                        type="button"
                                                        className='3xl:text-base text-sm 3xl:px-6 px-4 text-[#272727] bg-[#E7EEEF] hover:bg-[#E7EEEF]/80 rounded-xl font-medium custom-transition'
                                                    >
                                                        Đăng ký
                                                    </Button>
                                                </motion.div>

                                                <motion.div
                                                    initial={false}
                                                    animate="rest"
                                                    whileTap="press"
                                                    variants={{
                                                        rest: { scale: 1 },
                                                        press: { scale: 1.03, transition: { duration: 0.4 } },
                                                    }}
                                                >
                                                    <Button
                                                        onClick={() => handleRegister('login')}
                                                        type="button"
                                                        className='3xl:text-base text-sm 3xl:px-6 px-4 text-white bg-[#21A9C6] hover:bg-[#21A9C6]/80 rounded-xl font-medium custom-transition'
                                                    >
                                                        Đăng nhập
                                                    </Button>
                                                </motion.div>
                                            </>
                                }
                            </div>
                        </div> */}
                        </div>
                }
            </div>
        </header >
    )
}

export default Header
