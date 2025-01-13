'use client'

// import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoCloseSharp } from "react-icons/io5"
// import { Button } from '../ui/button'
import { IMenuHeader } from '@/types/menu/IMenu'

import { motion } from 'framer-motion'
import { useStateHeader } from '@/states/Header/useStateHeader'

interface TabletHeaderProps {
    dataHeader: IMenuHeader[]
    handleToggleMenu: (action: string) => void
}

const TabletHeader: React.FC<TabletHeaderProps> = ({ dataHeader, handleToggleMenu }: TabletHeaderProps) => {
    const pathname = usePathname()
    const { isStateHeader, queryKeyIsStateHeader } = useStateHeader()

    return (
        <>
            <div className='grid grid-cols-7 items-center justify-center'>
                <div className='col-span-5 w-full'>
                    <Link
                        href="/"
                        className='flex items-center justify-start w-fit h-[72px] py-4'
                        prefetch={false}
                        onClick={() => handleToggleMenu("off")}
                    >
                        <Image
                            width={800}
                            height={800}
                            alt="logo"
                            src="/logo/logo.png"
                            className="w-fit h-[72px] object-contain cursor-pointer"
                            priority
                        />
                    </Link>
                </div>
                <div className="col-span-2 flex items-center justify-end gap-6">
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

            {
                isStateHeader?.isShowMenuScreen &&
                <div className={`${isStateHeader?.isShowMenuScreen ? "translate-x-0" : "translate-x-[100%] hidden"} z-[999] custom-transition absolute bg-white w-screen h-dvh top-0 left-0`}>
                    <div className='custom-container space-y-8 py-4'>
                        <div className='grid grid-cols-7 items-center justify-center w-full'>
                            <div className='col-span-5 w-full'>
                                <Link
                                    href="/"
                                    className='flex items-center justify-start h-[72px] w-fit text-[#081735]'
                                    prefetch={false}
                                    onClick={() => handleToggleMenu("off")}
                                >
                                    <Image
                                        width={800}
                                        height={800}
                                        alt="logo"
                                        src="/logo/logo.png"
                                        className="w-fit h-[72px] object-contain cursor-pointer"
                                        priority
                                    />
                                </Link>
                            </div>

                            <div className="col-span-2 flex items-center justify-end gap-6">
                                <motion.div
                                    initial={false}
                                    animate="rest"
                                    whileTap="press"
                                    variants={{
                                        rest: { scale: 1 },
                                        press: { scale: 1.03, transition: { duration: 0.2 } },
                                    }}
                                    className="w-fit bg-black p-3 rounded-[6px] cursor-pointer"
                                    onClick={() => handleToggleMenu('off')}
                                >
                                    <IoCloseSharp className='xl:size-6 size-5 scale-110 text-white' />
                                </motion.div>
                            </div>
                        </div>

                        <div className='relative flex flex-col h-[calc(100dvh_-_88px)] overflow-y-auto'>
                            {
                                dataHeader.map((data) => (
                                    data.children ?
                                        <div key={data.id} className={`${isStateHeader.isActiveService ? "mb-6" : ""}`}>
                                            <div className='flex justify-between'>
                                                <Link
                                                    href={data.link}
                                                    className={`${(data.link === '/' && pathname === '/') || (pathname.includes(data.link) && data.link !== '/') ? 'text-[#07A6FF] underline underline-offset-8 decoration-4 decoration-[#07A6FF]' : 'text-[#9D9FA6]'}
                                                                 mb-6 cursor-pointer text-base w-fit custom-transition flex items-center`}
                                                    onClick={() => handleToggleMenu("off")}
                                                >
                                                    {data.name}
                                                </Link>
                                                <div
                                                    onClick={() =>
                                                        queryKeyIsStateHeader({
                                                            isActiveService: !isStateHeader.isActiveService
                                                        })}
                                                    className=' md:w-[10%] w-[15%] flex justify-end'
                                                >
                                                    <IoIosArrowDown className={`${isStateHeader.isActiveService ? 'rotate-180 transform transition duration-700 ease-in-out text-[#07A6FF]' : ''}`} />
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <Link
                                            key={data.id}
                                            href={data.link}
                                            className={`${(data.link === '/' && pathname === '/') || (pathname.includes(data.link) && data.link !== '/') ? 'text-[#07A6FF] font-medium underline underline-offset-8 decoration-4 decoration-[#07A6FF]' : 'text-[#9D9FA6]'} mb-6 text-base w-fit duration-300 transition ease-in-out flex items-center`}
                                            onClick={() => {
                                                setTimeout(() => {
                                                    queryKeyIsStateHeader({
                                                        isActiveService: false
                                                    })
                                                }, 400);
                                                handleToggleMenu("off")
                                            }}
                                            prefetch={false}
                                        >
                                            {data.name}
                                        </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default TabletHeader