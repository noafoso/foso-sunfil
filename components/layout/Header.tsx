'use client'

import React, { useEffect } from 'react'

import TabletHeader from '@/components/header/TabletHeader'
import DesktopHeader from '@/components/header/DesktopHeader'

import { useResizeStore } from '@/stores/useResizeStore'
import { useStateHeader } from '@/states/Header/useStateHeader'

import { uuidv4 } from '@/lib/uuid'
import { IMenuHeader } from '@/types/menu/IMenu'

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

const dataCountryOptions = [
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
    const { isVisibleTablet } = useResizeStore()
    const { isStateHeader, queryKeyIsStateHeader } = useStateHeader()

    useEffect(() => {
        const body = document.body;
        if (!isStateHeader?.isShowMenuScreen) {
            body.style.overflow = 'auto'; // Cho phép cuộn
        } else {
            body.style.overflow = 'hidden'; // Chặn cuộn
        }
    }, [isStateHeader?.isShowMenuScreen]);

    useEffect(() => {
        queryKeyIsStateHeader({
            selectedCodeCountry: dataCountryOptions[0].code
        })
    }, [])

    const handleToggleMenu = (action: string): void => {
        if (action === "on") {
            queryKeyIsStateHeader({
                isShowMenuScreen: true,
            })
        } else if (action === "off") {
            queryKeyIsStateHeader({
                isShowMenuScreen: false,
            })
        }
    }

    const handleCodeChange = (value: string) => {
        queryKeyIsStateHeader({
            selectedCodeCountry: value
        })
    };

    console.log('isStateHeader: ', isStateHeader);


    return (
        <header className='absolute top-0 md:bg-transparent bg-white w-full z-50 py-4'>
            <div className='custom-container'>
                {
                    isVisibleTablet ?
                        // màn hình mobile, tablet
                        <TabletHeader
                            dataHeader={dataHeader}
                            handleToggleMenu={handleToggleMenu}
                        />
                        :
                        // màn hình laptop
                        <DesktopHeader
                            dataHeader={dataHeader}
                            dataCountryOptions={dataCountryOptions}
                            handleToggleMenu={handleToggleMenu}
                            handleCodeChange={handleCodeChange}
                        />
                }
            </div>
        </header >
    )
}

export default Header
