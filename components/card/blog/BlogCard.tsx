import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

type Tag = {
    id: number;
    name: string;
};

type Blog = {
    id: ReturnType<typeof uuidv4>;
    name: string;
    image: string;
    tag: Tag[];
    avata: string;
    date: string;
    user: string;
};

const color = {
    1: '#FF592C',
    2: '#2E8FFA',
    3: '#FFAC05'
} as any
const BlogCard = ({ avata, name, image, tag, date, user }: Blog) => {
    return (
        <Link href={'#'} className='border group border-[#DCDFE4] rounded-2xl p-4 flex flex-col lg:gap-8 gap-6 h-full'>
            <div className="overflow-hidden rounded-xl">
                <Image alt='' src={image} width={1280} height={1024} className='rounded-xl aspect-1.3/1 group-hover:scale-110 ease-in-out duration-300' />
            </div>
            <div className="flex flex-col justify-between lg:h-[38%] gap-4">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        {tag.map(e => {
                            return (
                                <div
                                    key={e.id}
                                    style={{ backgroundColor: color[e.id] }}
                                    className="text-[#FCFCFD] font-medium p-1.5 px-2 uppercase text-xs">
                                    {e.name}
                                </div>
                            )
                        })
                        }
                    </div>
                    <h1 className='text-[#23262F] font-bold xxl:text-2xl text-xl line-clamp-3'>{name}</h1>
                </div>
                <div className="flex justify-start items-center">
                    {/* <div className="flex gap-3 items-center">
                    <Image alt='' src={avata} width={1280} height={1024} className='size-6 object-contain aspect-square rounded-full' />
                    <h2 className='text-[#1A1B20A3] font-normal text-base'>{user}</h2>
                </div> */}
                    <h2 className='text-[#1A1B20A3] font-normal text-base'>{date}</h2>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard