import TitleDash from '@/components/title/TitleDash'
import { montserrat_sans } from '@/utils/fonts/fonts'
import React from 'react'
import Image from 'next/image'
import { uuidv4 } from '@/lib/uuid'
import SectionSlugCategory from './SectionDetailCategory'

const products = [
    {
        id: uuidv4(),
        title: 'Bộ lọc không khí động cơ',
        description: 'Hiệu quả động cơ xe của bạn thật sự không thể trọn vẹn, nếu AGAKASHI Lab không sử dụng công nghệ lọc không khí hiệu quả để chặn lại bụi bẩn trong không khí và chất gây ô nhiễm động cơ như nước, dầu bẩn nhớt hay muối. Bộ lọc không khí có loại hàng phòng tuyến và lọc không khí nạp chính, để phù hợp với nhu cầu của bạn xe.',
        image: '/example/products/slug/pr1.svg'
    },
    {
        id: uuidv4(),
        title: 'Bộ lọc không khí bằng Panel',
        description: {
            1: 'Bộ lọc cho phép không khí truyền theo đường dẫn tuyến tính, đi qua xuyên suốt bộ lọc để hạn chế việc lưu lượng không khí bị thấp.',
            2: 'Quy trình tạo hình đặc biệt giúp hình thành nếp gấp túi độc quyền cho phương tiện lọc của chúng tôi',
            3: 'Các phát minh công nghệ sử dụng các loại bộ lọc có chất liệu KHÔNG DỆT, KHUNG NHỰA và KHUÔN POLYURETANE.'
        } as any,
        image: '/example/products/slug/pr2.svg'
    },
    {
        id: uuidv4(),
        title: 'Bộ lọc không khí bằng Panel',
        description: 'Bộ dụng màng chắn lọc trên đường khí thành bên trong để tăng cường độ tiếp xúc và khả năng lọc bụi và phương tiện lọc thải động cơ khác, ngược với các loại bộ lọc không khí ô dưỡng khí thường bên ngoài để tăng hiệu quả lọc.',
        image: {
            left: '/example/products/slug/pr3.svg',
            right: '/example/products/slug/pr4.svg'
        } as any
    }
]
const SectionDetailContent = () => {

    return (
        <div className='flex flex-col xxl:gap-14 gap-10'>
            <div className="flex flex-col gap-4">
                <TitleDash
                    text='Sản phẩm'
                    className='justify-start'
                    textClassName='uppercase text-[#1A1B20CC]/80 font-normal'
                    dashClassName='border-b-2 border-[#15BCE0]  md:mt-0 mt-2 md:max-w-[64px] md:min-w-[64px] min-w-[60px] max-w-[60px]'
                />
                <h1 className={`${montserrat_sans.className} text-[#000000] font-extrabold text-title-top`}>Bộ lọc khí</h1>
                <div className="lg:hidden flex flex-col gap-8">
                    <h2 className="text-sm text-[#1A1B20CC] font-normal">
                        Sunfil-filter đại diện cho nhiều loại sản phẩm lọc dành cho dịch vụ hậu mãi ô tô của hầu hết các thương hiệu trên thế giới. Bộ lọc JS kết hợp hiệu suất làm sạch cao, độ tin cậy, độ bền và dễ thay thế và sử dụng.
                    </h2>
                    <SectionSlugCategory />
                </div>
            </div>

            <div className="flex flex-col xxl:gap-8 gap-4">
                <div className="flex flex-col xxl:gap-8 gap-4">
                    <h1 className='text-title-section font-bold text-[#000000]'>{products[0].title}</h1>
                    <h2 className='2xl:text-lg xxl:text-base xl:text-sm lg:text-xs text-base font-normal text-[#1A1B20CC]/80'>{products[0].description}</h2>
                </div>
                <Image src={products[0].image} alt='' className='size-full lg:h-full md:h-[340px] h-[230px] object-cover aspect-auto' width={1280} height={1024} />
            </div>


            <div className="">
                <div className="flex flex-col xxl:gap-8 gap-4">
                    <h1 className='text-title-section font-bold text-[#000000]'>{products[1].title}</h1>
                    <div className="flex lg:flex-row flex-col xxl:gap-8 gap-4">
                        <div className="flex flex-col xxl:gap-3 xl:gap-5 lg:gap-2 gap-2 lg:w-1/2 w-full">
                            <h2 className='2xl:text-lg xxl:text-base xl:text-sm lg:text-xs text-base font-normal text-[#1A1B20CC]/80'>{products[1].description[1]}</h2>
                            <h2 className='2xl:text-lg xxl:text-base xl:text-sm lg:text-xs text-base font-normal text-[#1A1B20CC]/80'>{products[1].description[2]}</h2>
                            <h2 className='2xl:text-lg xxl:text-base xl:text-sm lg:text-xs text-base font-normal text-[#1A1B20CC]/80'>{products[1].description[3]}</h2>
                        </div>
                        <Image src={products[1].image} alt='' className='lg:w-1/2 w-full size-full lg:h-full md:h-[340px] h-[230px] object-cover aspect-auto' width={1280} height={1024} />
                    </div>
                </div>
            </div>


            <div className="flex flex-col xxl:gap-8 gap-4">
                <div className="flex flex-col xxl:gap-8 gap-4">
                    <h1 className='text-title-section font-bold text-[#000000]'>{products[2].title}</h1>
                    <h2 className='2xl:text-lg xxl:text-base xl:text-sm lg:text-xs text-base font-normal text-[#1A1B20CC]/80'>{products[2].description}</h2>
                </div>
                <div className="flex lg:flex-row flex-col items-center 2xl:gap-5 gap-5">
                    <div className="lg:w-[42%] w-full">
                        <Image src={products[2].image.left} alt='' className='lg:object-contain object-cover aspect-auto lg:h-[320px] md:h-[340px] size-full h-[210px]' width={1280} height={1024} />
                    </div>
                    <div className="lg:w-[58%] w-full">
                        <Image src={products[2].image.right} alt='' className='lg:object-contain object-contain aspect-auto md:h-[320px]  size-full h-[210px]' width={1280} height={1024} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SectionDetailContent