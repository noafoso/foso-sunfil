'use client'

import React from 'react'
import SectionIntroHome from './components/SectionIntroHome'
import SectionSecondHome from './components/SectionSecondHome'

const Home = () => {
    return (
        <div className='w-full relative h-screen'>
            <div className='3xl:pt-[calc(96px_+_32px)] pt-[calc(96px_+_24px)] flex flex-col justify-between gap-2 3xl:pb-8 pb-6 h-full relative z-10'>
                <SectionIntroHome />

                <SectionSecondHome />
            </div>

            <div className='w-full h-screen grid grid-cols-12 bg-white absolute top-0 left-0 z-0'>
                <div className='col-span-7' />
                <div className="col-span-5 bg-[url('/background/home/bg-home.png')] bg-cover bg-center bg-no-repeat" />
            </div>
        </div>
    )
}

export default Home