import Image from 'next/image'
import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Rating, RoundedStar, Star } from '@smastrom/react-rating';
type Props = {
    id: string,
    name: string,
    date: string,
    description: string,
    start: number,
    image: string
}
const AboutCardFeel = ({ date, description, id, image, name, start }: Props) => {
    return (
        <div className='bg-[#F9F9F9] flex lg:flex-row flex-col xxl:gap-8 gap-5 xxl:p-6 p-5 rounded-[5px] h-full'>
            <div className="xl:w-[35%] lg:w-[45%] w-full h-full">
                <Image src={image} width={1280} height={1024} alt='' className='size-full 3xl:aspect-3/1 xl:aspect-0.88/1 aspect-square object-cover rounded-[8px]' />
            </div>
            <div className="xl:w-[65%] lg:w-[55%] w-full h-full">
                <div className="flex flex-col h-full lg:gap-6 gap-4">
                    <div className="flex flex-col gap-1">
                        <h1 className='3xl:text-2xl text-xl font-bold text-[#000000]'>{name}</h1>
                        <h2 className='text-content-common font-normal text-[#1A1B2080]/50'>{date}</h2>
                    </div>
                    <div className="flex flex-col lg:gap-0 gap-4 justify-between h-full">
                        <h2 className='text-[#1A1B20CC]/80 font-normal 3xl:text-lg xl:text-base lg:text-sm text-base line-clamp-4'>{description}</h2>
                        <div className='lg:mb-2'>
                            <Rating
                                value={start}
                                readOnly
                                style={{ maxWidth: 150, gap: '8px' }}
                                itemStyles={{
                                    itemShapes: Star,
                                    activeFillColor: '#F6DE00',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCardFeel