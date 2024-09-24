'use client'

import React from 'react'
import SectionIntroHome from './components/SectionIntroHome'
import SectionSecondHome from './components/SectionSecondHome'
import { useResizeStore } from '@/stores/useResizeStore'

const Home = () => {
    const { isVisibleMobile } = useResizeStore()
    return (
        <div className='w-full relative lg:h-screen md:h-dvh'>
            <div className='pt-[112px] flex flex-col justify-between md:gap-0 gap-16 3xl:pb-8 2xl:pb-6 pb-3 h-full relative z-10'>
                <SectionIntroHome />
                {
                    isVisibleMobile &&
                    <div className='w-full h-[400px] grid grid-cols-12 bg-white'>
                        <div className="col-span-12 bg-[url('/background/home/bg-home.png')] bg-cover bg-center bg-no-repeat" />
                    </div>
                }
                <SectionSecondHome />
            </div>

            <div className='w-full h-screen md:grid grid-cols-12 bg-white md:absolute hidden top-0 left-0 z-0'>
                <div className='xl:col-span-7 col-span-8' />
                <div className="xl:col-span-5 col-span-4 bg-[url('/background/home/bg-home.png')] bg-cover bg-center bg-no-repeat" />
            </div>
        </div>
    )
}

export default Home