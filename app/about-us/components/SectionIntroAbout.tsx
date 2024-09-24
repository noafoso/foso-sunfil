import AnimatedCountUp from '@/components/animation/AnimatedCountUp'
import { uuidv4 } from '@/lib/uuid'
import { montserrat_sans } from '@/utils/fonts/fonts'
import React from 'react'

const SectionIntroAbout = () => {
    const color = ['#00ADEF', '#FF9B05', '#ED1B24']
    const count = [
        {
            id: uuidv4(),
            name: 'Danh mục',
            count: 10
        },
        {
            id: uuidv4(),
            name: 'Sản phẩm',
            count: 20000
        },
        {
            id: uuidv4(),
            name: 'Khách hàng',
            count: 5000
        }
    ]
    return (
        <div className='bg-[url("/background/about/intro.png")] pr-[144px] bg-cover bg-center bg-no-repeat w-full flex flex-col items-end justify-center h-[calc(100vh_-_112px)]'>
            <div className="flex flex-col gap-6 w-1/2">
                <h1 className={`${montserrat_sans.className} text-[#000000] font-extrabold text-[60px]`}>Về chúng tôi</h1>
                <div className="max-w-[90%] flex flex-col gap-8 ">
                    <h2 className='texxt-[#1A1B20CC]/80 font-normal 2xl:text-base text-sm'>
                        Sunfil-filter đại diện cho nhiều loại sản phẩm lọc dành cho dịch vụ hậu mãi ô tô của hầu hết các thương hiệu trên thế giới. Bộ lọc JS kết hợp hiệu suất làm sạch cao, độ tin cậy, độ bền và dễ thay thế và sử dụng.
                    </h2>
                    <div className={`flex justify-between items-center gap-11`}>
                        {count.map((e, index: number) => {
                            return (
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <span
                                            key={e.id}
                                            style={{
                                                color: color[index]
                                            }}
                                            className={` 3xl:text-6xl text-[55px] font-bold`}
                                        >
                                            <AnimatedCountUp
                                                className=''
                                                end={e?.count}
                                            />
                                        </span>
                                        <span
                                            style={{
                                                color: color[index]
                                            }}
                                            className='3xl:text-5xl text-[42px] font-bold'
                                        >
                                            +
                                        </span>
                                    </div>
                                    <h1 className='text-[#0000009E]/60 text-xl font-normal'>{e?.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionIntroAbout