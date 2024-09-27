'use client'
import Image from 'next/image'
import Link from 'next/link'

const SectionBlogItem = () => {
    return (
        <Link
            href={'/blogs/1'}
            style={{
                boxShadow: `0px 64px 64px -48px #0F0F0F1A`
            }}
            className='w-full border border-[#E6E8EC] group flex md:flex-row flex-col bg-[#FCFCFD] md:rounded-bl-2xl md:rounded-tl-2xl  rounded-2xl'
        >
            <div className="lg:w-[65%] md:w-[60%] w-full overflow-hidden md:aspect-5/3 aspect-4/3 md:rounded-bl-2xl md:rounded-tl-2xl md:rounded-tr-none rounded-tr-2xl rounded-tl-2xl">
                <Image
                    src={'/example/blogs/blog-main.png'}
                    width={1280}
                    height={1024}
                    alt='blog-main.png'
                    className='size-full object-cover group-hover:scale-105 custom-transition md:rounded-bl-2xl md:rounded-tl-2xl md:rounded-tr-none rounded-tr-2xl rounded-tl-2xl'
                />
            </div>
            <div className="lg:w-[35%] md:w-[40%] w-full 3xl:px-[58px] xxl:px-[58px] xl:px-8 px-6 2xl:py-[64px] xxl:py-[48px] xl:py-[40px] lg:py-[32px] md:py-[24px] py-[32px]">
                <div className="flex flex-col gap-6 h-full">
                    <div className="text-[#FCFCFD] bg-[#57A4FE] rounded font-medium p-1.5 px-3 uppercase text-xs w-fit">
                        NEW
                    </div>
                    <h2 className='text-[#000000] font-bold 3xl:text-[68px] 2xl:text-[44px] xl:text-[40px] text-3xl 3xl:leading-[78px] 2xl:leading-[56px] xl:leading-[48px]'>
                        Bộ lọc dầu trong Cabin mới nhất 2024
                    </h2>
                    <h3 className='text-[#1A1B20CC] font-normal text-base'>
                        Track your workouts, get better results, and be the best version of you. Less thinking
                    </h3>
                    <div className="flex flex-col h-full justify-between 2xl:gap-14 xl:gap-8 md:gap-5 gap-8">
                        <Link href={'/blogs/1'} className="uppercase md:order-1 order-2 text-[#1D1D1D] 2xl:text-lg text-base font-bold px-[26px] 2xl:py-[12px] py-2 border-[2px] border-[#1D1D1D] rounded w-fit cursor-pointer">
                            Tìm hiểu thêm
                        </Link>
                        <h3 className='text-[#777E90] md:order-2 order-1 font-bold text-xs lg:my-0 md:my-6'>Jan 19, 2020</h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SectionBlogItem