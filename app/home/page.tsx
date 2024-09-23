import React from 'react'
import SectionIntroHome from './components/SectionIntroHome'

const Home = () => {
    return (
        <div className='w-full relative h-screen'>
            <SectionIntroHome />

            <div className='w-full h-screen grid grid-cols-12 bg-white absolute top-0 left-0 z-0'>
                <div className='col-span-8' />
                <div className="col-span-4 bg-[url('/background/home/bg-home.png')] bg-cover bg-center bg-no-repeat" />
            </div>
        </div>
    )
}

export default Home