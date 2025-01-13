'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
// desktop
import AvatarCustom from '@/components/avatar/AvatarCustom'
import { DottedSeparator } from '@/components/dotted-separator/dotted-separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
// import { useTranslate } from '@/contexts/TranslateContext'
// import { usePostChangeAvatar } from '@/managers/api-management/auth/account/usePostChangeAvatar'
// import { useGetInfoByToken } from '@/managers/api-management/auth/info/useGetInfoByToken'
import { useAlertDialogStore } from '@/stores/useAlertDialogStore'
import { useResizeStore } from '@/stores/useResizeStore'
import { Camera, Gift, Heart, Location, Lock, Lock1, MessageQuestion, Note, SearchNormal, Tag, UserSquare } from 'iconsax-react'
import { Separator } from '@/components/ui/separator'
import { useAuthStore } from '@/stores/useAuthStores'

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()

    const pathname = usePathname()

    // const { dataLang } = useTranslate()

    // const { isLoading } = useGetInfoByToken()

    const { isVisibleTablet, isVisibleMobile } = useResizeStore()

    const { informationUser } = useAuthStore()

    const { setOpenAlertDialog } = useAlertDialogStore()

    // const { isLoading: isLoadingChangeAvatar, onSubmit } = usePostChangeAvatar()

    // sidebar desktop
    const listNavbar = [
        {
            id: 1,
            lable: "Thông tin chung",
            list: [
                {
                    id: 144324,
                    name: `Tài Khoản của tôi`,
                    icon: UserSquare,
                    link: "/auth/information/profile",
                },
                {
                    id: 54,
                    name: `Lịch sử tìm kiếm`,
                    icon: SearchNormal,
                    link: "/auth/information/search-history",
                },
                {
                    id: 542,
                    name: `Lịch sử quà tặng`,
                    icon: Gift,
                    link: "/auth/information/gift-history",
                },
            ]
        },
        {
            id: 2,
            lable: "Cài đặt tài khoản",
            list: [
                {
                    id: 323,
                    name: `Đổi mật khẩu`,
                    icon: Lock,
                    link: "/auth/setting/change-password",
                },
            ]
        },
    ]

    // sidebar tablet/mobile
    const listSidebar = [
        {
            id: 144324,
            name: `Tài Khoản của tôi`,
            icon: UserSquare,
            link: "/auth/information/profile",
        },
        {
            id: 54,
            name: `Lịch sử đặt lịch`,
            icon: SearchNormal,
            link: "/auth/information/search-history",
        },
        {
            id: 54,
            name: `Lịch sử quà tặng`,
            icon: Gift,
            link: "/auth/information/gift-history",
        },
        {
            id: 323,
            name: `Đổi mật khẩu`,
            icon: Lock,
            link: "/auth/setting/change-password",
        },
    ]

    const handleChangeSidebar = (value: any) => {
        if (value == '/profile/logout') {
            setOpenAlertDialog(true)
        } else {
            router.push(value)
        }
    }

    const handeNav = () => {
    }

    return (
        <div className='w-full bg-white'>
            <div className='custom-container 3xl:pt-[120px] pt-[110px] h-screen grid xl:grid-cols-12 lg:grid-cols-14 grid-cols-12 xxl:gap-6 xl:gap-4 gap-8'>
                <div className='xl:col-span-2 lg:col-span-3 col-span-12'>
                    <div className='sticky 3xl:top-[110px] top-[102px] flex flex-col 3xl:gap-4 gap-3'>
                        <div className='flex flex-col 3xl:gap-3 gap-2 justify-center items-center caret-transparent'>
                            <div className='3xl:w-24 3xl:h-24 w-20 h-20 rounded-full'>
                                <Input
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        if (event.target.files && event.target.files?.length > 0) {
                                            // onSubmit(event.target.files[0])
                                        }
                                    }}
                                    accept="image/*, application/pdf"
                                    id={"avatar"}
                                    type="file"
                                    multiple
                                    className="hidden"
                                />
                                <Label htmlFor='avatar' className='relative cursor-pointer group'>
                                    <AvatarCustom
                                        avatar={informationUser?.client_image ?? '/avatar/avatar_default.png'}
                                        classNameContainer='size-full'
                                    />
                                    <div className='absolute bottom-0 right-0 border-2 border-white 3xl:size-9 size-8 p-1.5 bg-[#07A6FF] rounded-full flex justify-center items-center'>
                                        <Camera
                                            variant="Bold"
                                            className='size-full text-white'
                                        />
                                    </div>
                                </Label>
                            </div>

                            {
                                // isLoading ?
                                //     <Skeleton className='w-[60%] 3xl:h-7 h-6' />
                                //     :
                                <div className='w-fit text-default text-[#333538] font-bold'>
                                    {informationUser?.company}
                                </div>
                            }

                            <div className='w-fit space-x-1 text-sm-default'>
                                <span className='text-[#61666C] font-normal'>
                                    {/* {dataLang?.h_auth_total_quotes ?? "h_auth_total_quotes"} */}
                                </span>
                                {/* <span className='text-[#333538] font-bold'>
                                    {informationUser?.count_quotes ?? 0}
                                </span> */}
                            </div>
                        </div>

                        {
                            isVisibleTablet ?
                                <Select
                                    value={pathname !== '/profile/logout' ? listSidebar.find(item => pathname.startsWith(item.link))?.link || "" : ""}
                                    onValueChange={(value) => {
                                        handleChangeSidebar(value)
                                    }}
                                >
                                    <SelectTrigger className="w-full focus:outline-none focus:ring-0 focus:ring-offset-0">
                                        <SelectValue placeholder="Chọn giờ nhận xe" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {
                                                listSidebar && listSidebar.map((item) => {
                                                    const checkActive = pathname.startsWith(item.link) || pathname === item.link
                                                    return (
                                                        <SelectItem
                                                            key={item.id}
                                                            value={`${item.link}`}
                                                            className='flex flex-row items-center'
                                                        >
                                                            {
                                                                item.link !== '/profile/logout' ?
                                                                    <div
                                                                        key={item.id}
                                                                        className='flex items-center gap-3 cursor-pointer w-fit hover:opacity-90 duration-200 transition group'
                                                                    >
                                                                        <div className={`size-6 max-w-6 
                                                                        ${checkActive ? "text-[#07A6FF]" : "text-[#505458]"} group-hover:text-[#07A6FF] transition-all duration-150 ease-linear`}
                                                                        >
                                                                            <item.icon
                                                                                variant={checkActive ? "Bold" : "Linear"}
                                                                                className="size-full"
                                                                            />
                                                                        </div>
                                                                        <div className={`${pathname.startsWith(item.link) || pathname === item.link ? "text-[#07A6FF]" : "text-[#383A43]"} group-hover:text-[#07A6FF] transition-all duration-150 ease-linear text-base font-semibold`}>
                                                                            {item.name}
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    <div className={`3xl:text-lg lg:text-base text-lg text-[#FA3434] font-semibold w-fit cursor-pointer hover:text-[#FA3434]/80 duration-200 transition`}>
                                                                        {/* {dataLang?.h_auth_logout ?? "h_auth_logout"} */}
                                                                        Đăng xuất
                                                                    </div>
                                                            }
                                                        </SelectItem>
                                                    )
                                                })
                                            }
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                :
                                <React.Fragment>
                                    {/* <DottedSeparator className='3xl:my-4 my-2' /> */}
                                    <Separator className='3xl:my-4 my-2' />
                                    {
                                        listNavbar && listNavbar.map((e) => {
                                            return (
                                                <div key={e.id} className='flex flex-col 3xl:gap-4 gap-3 caret-transparent'>
                                                    <div className='text-sm-default uppercase font-normal text-[#808990]'>
                                                        {e.lable}
                                                    </div>

                                                    <div className='flex flex-col 3xl:gap-4 gap-3'>
                                                        {
                                                            e.list?.map((item, index) => {
                                                                const checkActive = pathname.startsWith(item.link) || pathname === item.link
                                                                return (
                                                                    <Link
                                                                        key={item.id}
                                                                        href={item.link}
                                                                        onClick={() => handeNav()}
                                                                        className='flex items-center gap-2 cursor-pointer w-fit hover:opacity-90 duration-200 transition group'
                                                                    >
                                                                        <div className={`3xl:size-6 size-5 3xl:max-w-6 max-w-5 
                                                                            ${checkActive ? "text-[#07A6FF]" : "text-[#505458]"} group-hover:text-[#07A6FF] transition-all duration-150 ease-linear`}
                                                                        >
                                                                            <item.icon
                                                                                variant={checkActive ? "Bold" : "Linear"}
                                                                                className="size-full"
                                                                            />
                                                                        </div>
                                                                        <div className={`${pathname.startsWith(item.link) || pathname === item.link ? "text-[#07A6FF]" : "text-[#505458]"} transition-all duration-150 ease-linear group-hover:text-[#07A6FF] text-sm-default font-medium`}>
                                                                            {item.name}
                                                                        </div>
                                                                    </Link>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    {/* <DottedSeparator className='3xl:my-4 my-2' /> */}
                                                    <Separator className='3xl:my-4 my-2' />
                                                </div>
                                            )
                                        })
                                    }
                                    <div className='flex items-center justify-center caret-transparent'>
                                        <div
                                            onClick={() => setOpenAlertDialog(true, "logout")}
                                            className={`text-sm-default text-[#FA3434] hover:text-[#FA3434]/80 font-semibold w-fit cursor-pointer custom-transition`}
                                        >
                                            Đăng xuất
                                            {/* {dataLang?.h_auth_logout ?? "h_auth_logout"} */}
                                        </div>
                                    </div>
                                </React.Fragment>
                        }
                    </div>
                </div>

                <div className={`xl:col-span-10 lg:col-span-11 col-span-12 h-full 3xl:pb-8 pb-6`}>
                    <ScrollArea
                        type="hover"
                        className='max-w-full rounded-2xl bg-white 3xl:max-h-[calc(100vh_-_142px)] lg:max-h-[calc(100vh_-_134px)] lg:h-full h-fit'
                        style={{
                            boxShadow: "0px 0px 80px 0px #0000000A"
                        }}
                        classNameScrollBar='py-2 mr-2'
                    >
                        {children}
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}

export default LayoutAuth