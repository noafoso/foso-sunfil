import React from 'react'
import Image from 'next/image'
import { uuidv4 } from '@/lib/uuid'

interface ICategory {
    id: string;
    name: string;
    icon: string;
    image: string;
}

const listCategory: ICategory[] = [
    {
        id: uuidv4(),
        name: "Dầu",
        icon: "/icon/home/oil.png",
        image: "/example/home/product.png"
    },
    {
        id: uuidv4(),
        name: "Điều hoà",
        icon: "/icon/home/oil.png",
        image: "/example/home/product1.png"
    },

]

const SectionIntroHome = () => {
    console.log(listCategory)

    return (
        <div className='pt-[110px] h-full relative z-10 grid grid-cols-12'>
            <div className='col-span-6 bg-red-500'>
                dsd
            </div>
            <div className='col-span-6 relative'>
                <div className='absolute -top-16 -left-0 z-10 aspect-square w-[700px]'>
                    <Image
                        src={"/background/home/bg-splash-oil.png"}
                        alt='oil'
                        width={800}
                        height={800}
                        className='size-full object-contain'
                        unoptimized
                    />
                </div>
                <div className='absolute -top-6 left-[120px] z-20 aspect-square w-[650px]'>
                    <Image
                        src={"/example/home/product2.png"}
                        alt='oil'
                        width={800}
                        height={800}
                        className='size-full object-contain'
                        unoptimized
                    />
                </div>
            </div>
        </div>
    )
}

export default SectionIntroHome