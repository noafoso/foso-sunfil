import AnimateOnScroll from '@/components/animation/AnimateOnScroll'
import TitleDash from '@/components/title/TitleDash'
import TitleHighlight from '@/components/title/TitleHighlight'
import { uuidv4 } from '@/lib/uuid'
import Image from 'next/image'

const data = {
    image: '/example/about/left-no.png',
    content: ` Đối mặt với sự cạnh tranh ngày càng gay gắt trên thị trường quốc tế, chúng tôi đang tìm kiếm một bước đột phá cho khách hàng. Năm 2007, 
    chúng tôi thành lập trụ sở bán hàng của mình—CÔNG TY CỔ PHẦN SẢN XUẤT THƯƠNG MẠI Ô TÔ VIỆT HƯNG tại Việt Nam,  nơi nổi tiếng là cơ sở của ngành công nghiệp ô tô. Các sản phẩm của chúng tôi như sau: bộ lọc, cảm biến, 
    bộ tản nhiệt, má phanh từ ô tô đến xe tải hạng nặng. Để phát huy lợi thế về giá cả và chất lượng, chúng tôi đã thành lập nhà máy lọc khí.`,
    thumb: [
        {
            id: uuidv4(),
            name: 'Asaka',
            code: 'JX-0814C',
            image: '/example/about/thum1.png'
        },
        {
            id: uuidv4(),
            name: 'Asaka',
            code: 'JX-0814C',
            image: '/example/about/thum2.png'
        },
        {
            id: uuidv4(),
            name: 'Asaka',
            code: 'JX-0814C',
            image: '/example/about/thum3.png'
        },
        {
            id: uuidv4(),
            name: 'Asaka',
            code: 'JX-0814C',
            image: '/example/about/thum4.png'
        }
    ]
}
const Sectionintroduce = () => {
    return (
        <div className='flex flex-col gap-12'>
            <div className="flex flex-col items-start gap-6 custom-padding-left-right">
                <TitleHighlight
                    title='Giới thiệu chung về VietHung Auto'
                    titleClassName='text-start md:text-2xl text-3xl'
                    highlightClassName='xxl:w-[275px] xl:w-[210px] lg:w-[210px] md:w-[170px] w-[220px] lg:right-0 md:-right-1 bg-[#6AD6EEA6]/65'
                />
                <TitleDash
                    dashClassName='md:max-w-[76px] md:min-w-[76px]'
                    text='It’s short title here'
                />
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-[80px] xl:gap-16 lg:gap-5 gap-8 xxl:pr-[112px] xl:pr-[92px] lg:pr-[72px] lg:pl-0 px-4">
                <div className="col-span-1 h-full bg-[#F8F9F9] flex justify-center items-center lg:p-[92px] md:p-10 p-[60px] overflow-hidden group">
                    <Image
                        src={data.image}
                        width={1280}
                        height={1024}
                        alt=''
                        className='size-full cursor-pointer object-contain lg:aspect-3/1 aspect-3/2 drop-shadow-xl group-hover:scale-105 ease-in-out duration-300'
                    />
                </div>
                <div className="col-span-1 flex flex-col xxl:gap-[62px] lg:gap-12 gap-[58px]">
                    <AnimateOnScroll className="flex flex-col gap-[30px]">
                        <h2 className='text-[#1A1B20CC]/80 text-content-common font-normal'>
                            {data.content}
                        </h2>
                        <div className="uppercase text-[#1D1D1D] text-lg font-bold px-[14px] py-[12px] border-[2px] border-[#1D1D1D] rounded w-fit cursor-pointer">
                            Liên hệ ngay
                        </div>
                    </AnimateOnScroll>
                    <div className="flex lg:flex-nowrap flex-wrap items-center xxl:gap-12 xl:gap-8 lg:gap-4 gap-5 xl:justify-start lg:justify-start md:justify-between justify-start">
                        {data.thumb.map((e, index: number) => {
                            return (
                                <AnimateOnScroll index={index} key={e.id} className="flex flex-col gap-2.5 group overflow-hidden cursor-pointer">
                                    <Image
                                        src={e.image}
                                        width={1280}
                                        height={1024}
                                        alt=''
                                        className='size-full aspect-1/1 group-hover:scale-105 ease-in-out duration-300'
                                    />
                                    <h1 className='text-[#1A1B20CC]/80 3xl:text-base 2xl:text-sm xxl:text-sm xl:text-sm lg:text-xs text-lg text-center'>{e.name} <span className='border-b border-black'>{e.code}</span></h1>
                                </AnimateOnScroll>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectionintroduce