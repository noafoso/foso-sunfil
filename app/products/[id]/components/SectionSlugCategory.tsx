'use client'
import AnimateOnScroll from '@/components/animation/AnimateOnScroll'
import { uuidv4 } from '@/lib/uuid'
import Image from 'next/image'
import { useStateProductSlug } from '../../_state/useStateProductSlug'

const category = [
    {
        id: uuidv4(),
        name: 'Dầu',
        image: '/icons/product/slug/category1.svg'
    },
    {
        id: uuidv4(),
        name: 'Điều hòa',
        image: '/icons/product/slug/category2.svg'
    },
    {
        id: 3,
        name: 'Không khí',
        image: '/icons/product/slug/category3.svg'
    },
    {
        id: uuidv4(),
        name: 'Nhiên liệu',
        image: '/icons/product/slug/category4.svg'
    },
    {
        id: uuidv4(),
        name: 'Khác',
        image: '/icons/product/slug/category5.svg'
    }
]
const SectionSlugCategory = () => {
    const { isStateProductSlug, queryKeyIsStateProductSlug } = useStateProductSlug()
    return (
        <AnimateOnScroll className='border-t-[#ED1B24] border-t-4 flex flex-col gap-6 p-6 bg-white select-none'>
            <div className="">
                <h1 className='text-base text-center underline underline-offset-4 text-[#1A1B20CC]/80 uppercase'>Danh mục sản phẩm</h1>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-4 grid-cols-3 gap-2">
                {category.map(e => {
                    return (
                        <div
                            onClick={() => queryKeyIsStateProductSlug({ idTabActive: e.id })}
                            key={e.id}
                            className={`${isStateProductSlug.idTabActive === e.id ? "bg-[#FFF8B3]" : "bg-transparent hover:bg-[#C0D2E424]"} 
                            flex flex-col justify-center cursor-pointer gap-2.5 md:px-4 px-3 3xl:py-14 2xl:py-10 xxl:py-9 xl:py-8 lg:py-7 md:py-10 py-4 size-full transition-all duration-150 ease-linear`}
                        >
                            <div className="mx-auto">
                                <Image
                                    src={e.image}
                                    width={1280}
                                    height={1024}
                                    alt=''
                                    className='h-full w-[62px] aspect-3/2'
                                />
                            </div>
                            <h1 className='text-[#00000099]/60 font-normal text-content-common text-center'>{e.name}</h1>
                        </div>

                    )
                })}
            </div>
        </AnimateOnScroll>
    )
}

export default SectionSlugCategory