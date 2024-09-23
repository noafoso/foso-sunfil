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

interface TabletHeaderProps {
    dataHeader: IMenuHeader[]
    showActive: boolean
    handleToggleMenu: (action: string) => void
}

const TabletHeader: React.FC<TabletHeaderProps> = ({ dataHeader, showActive, handleToggleMenu }: TabletHeaderProps) => {
    const pathname = usePathname()

    // const { setStatusDialog, setOpenDialogCustom } = useDialogStore()

    const [activeService, setActiveService] = useState<boolean>(false)

    return (
        <>
            <div className={`h-full`}>
                <div className='custom-container grid grid-cols-7 items-center justify-center'>
                    <Link
                        href="/"
                        className='col-span-5 flex items-center justify-start w-full h-[80px] p-4'
                        prefetch={false}
                        onClick={() => handleToggleMenu("off")}
                    >
                        <Image
                            width={800}
                            height={800}
                            alt="logo"
                            src="/logo/logo.png"
                            className="w-fit h-[80px] object-contain cursor-pointer"
                            priority
                        />
                    </Link>
                    <div className="col-span-2 flex items-center justify-end gap-6">
                        <div className="col-span-1 flex items-center justify-center">
                            <button onClick={() => handleToggleMenu('on')} className='lg:hidden'>
                                {/* <button onClick={() => _ToogleIsShow()} className='lg:hidden'> */}
                                <Menu className='scale-110 text-white' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {
                showActive &&
                <div className={`${showActive ? "translate-x-0" : "translate-x-[100%] hidden"} z-[999] custom-transition absolute bg-[#161515] w-screen h-dvh top-0 left-0`}>
                    <div className='custom-container'>
                        <div className='h-[88px] grid grid-cols-5 items-center'>
                            <Link
                                href="/"
                                className='col-span-4 flex items-center justify-start h-[76px] w-full text-[#081735] p-4'
                                prefetch={false}
                                onClick={() => handleToggleMenu("off")}
                            >
                                <Image
                                    width={800}
                                    height={800}
                                    alt="logo"
                                    src="/logo/logo.svg"
                                    className="w-fit h-[46px] object-contain cursor-pointer"
                                    priority
                                />
                            </Link>

                            <button onClick={() => handleToggleMenu('off')} className='col-span-1 flex items-center justify-end'>
                                <IoCloseSharp className='text-xl text-white' />
                            </button>
                        </div>

                        <div className='custom-container relative flex flex-col h-[calc(100dvh_-_88px)] overflow-y-auto'>
                            {/* <div className='flex gap-2 mt-6'>
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
                                        onClick={() => {
                                            setStatusDialog("register")
                                            handleToggleMenu("off")
                                            setOpenDialogCustom(true)
                                        }}
                                        type="button"
                                        className='3xl:text-base text-sm 3xl:px-6 3xl:py-3 px-4 py-2 text-white bg-transparent hover:text-[#D50000]/80 hover:bg-transparent font-semibold custom-transition shadow-none'
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
                                        press: { scale: 1.03, transition: { duration: 0.2 } },
                                    }}
                                >
                                    <Button
                                        onClick={() => {
                                            setStatusDialog("login")
                                            handleToggleMenu("off")
                                            setOpenDialogCustom(true)
                                        }}
                                        type="button"
                                        className='3xl:text-base text-sm px-6 py-3 text-white hover:bg-red-500 rounded-lg font-semibold custom-transition'
                                        style={{
                                            background: "linear-gradient(92.73deg, #910000 6.78%, #D50000 83.55%)"
                                        }}
                                    >
                                        Đăng nhập
                                    </Button>
                                </motion.div>
                            </div> */}
                            {
                                dataHeader.map((data) => (
                                    data.children ?
                                        <div key={data.id} className={`${activeService ? "mb-6" : ""}`}>
                                            <div className='flex justify-between'>
                                                <Link
                                                    href={data.link}
                                                    className={`${(data.link === '/' && pathname === '/') || (pathname.includes(data.link) && data.link !== '/') ? 'text-white underline underline-offset-8 decoration-4 decoration-[#9A0000]' : 'text-[#9D9FA6]'}
                                                                 mb-6 cursor-pointer text-base w-fit custom-transition flex items-center`}
                                                    onClick={() => handleToggleMenu("off")}
                                                >
                                                    {data.name}
                                                </Link>
                                                <div onClick={() => setActiveService(!activeService)} className=' md:w-[10%] w-[15%] flex justify-end'>
                                                    <IoIosArrowDown className={`${activeService ? 'rotate-180 transform transition duration-700 ease-in-out text-[#25A35A]' : ''}`} />
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <Link
                                            key={data.id}
                                            href={data.link}
                                            className={`${(data.link === '/' && pathname === '/') || (pathname.includes(data.link) && data.link !== '/') ? 'text-white underline underline-offset-8 decoration-4 decoration-[#9A0000]' : 'text-[#9D9FA6]'} mb-6 text-base w-fit duration-300 transition ease-in-out flex items-center`}
                                            onClick={() => {
                                                setTimeout(() => {
                                                    setActiveService(false)
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