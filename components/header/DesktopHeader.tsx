import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { ActionTooltip } from '../tooltip/ActionTooltip'
import { IMenuHeader } from '@/types/menu/IMenu'
import { usePathname } from 'next/navigation'
import { IoIosArrowDown } from 'react-icons/io'
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select'

import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { useStateHeader } from '@/states/Header/useStateHeader'

interface DesktopHeaderProps {
    dataCountryOptions: any[]
    dataHeader: IMenuHeader[]
    handleToggleMenu: (action: string) => void
    handleCodeChange: (value: string) => void
}

const DesktopHeader = ({ dataHeader, handleToggleMenu, handleCodeChange, dataCountryOptions }: DesktopHeaderProps) => {
    const pathname = usePathname()
    const { isStateHeader } = useStateHeader()

    const selectedOption = dataCountryOptions.find(option => option.code === isStateHeader.selectedCodeCountry);

    return (
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
                <div className="flex items-center">
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
        </div>
    )
}

export default DesktopHeader