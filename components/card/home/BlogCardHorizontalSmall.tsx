import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type BlogCardHorizontalProps = {
    key: string,
    item: any
}

const BlogCardHorizontalSmall = ({ key, item }: BlogCardHorizontalProps) => {
    return (
        <Link
            key={`blog-${key}`}
            className='flex items-center gap-4 rounded-[8px] w-[500px] lg:mr-10 mr-6 bg-white group pr-2'
            style={{
                boxShadow: "0px 0px 0.5px 0px #0D0F111A, 0px 0px 10px 0px #25385121"
            }}
            href="#"
        >
            <div className='w-full max-w-[40%] aspect-3/2 3xl:h-[130px] lg:h-[120px] h-[110px] rounded-tl-[8px] rounded-bl-[8px]'>
                <Image
                    alt='image'
                    src={`${item.image}`}
                    width={1920}
                    height={1024}
                    className='size-full object-cover rounded-tl-[8px] rounded-bl-[8px]'
                />
            </div>

            <div className='w-[60%] max-w-[60%] flex flex-col gap-2 '>
                <div className='space-y-1'>
                    <div className='3xl:text-sm text-xs text-[#2E8FFA] group-hover:text-[#2E8FFA]/80 custom-transition'>
                        {item?.type ?? ""}
                    </div>

                    <div className='text-content-common text-[#141619] group-hover:text-[#141618]/80 custom-transition font-medium line-clamp-2'>
                        {item?.name ?? ""}
                    </div>

                </div>

                <div className='3xl:text-xs text-[10px] text-[#8F9DAD] group-hover:text-[#8F9DAD]/80 custom-transition'>
                    {item.date_created}
                </div>
            </div>
        </Link>
    )
}

export default BlogCardHorizontalSmall