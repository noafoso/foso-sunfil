import TitleDash from '@/components/title/TitleDash'
import TitleHighlight from '@/components/title/TitleHighlight'
import { uuidv4 } from '@/lib/uuid'
import Image from 'next/image'

const Sectionintroduce = () => {
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
    return (
        <div className='flex flex-col gap-12'>
            <div className="flex flex-col items-start gap-6 mx-[80px]">
                <TitleHighlight
                    title='Giới thiệu chung về VietHung Auto'
                    highlightClassName='w-[280px] right-0 bg-[#6AD6EEA6]/65'
                />
                <TitleDash dashClassName='md:max-w-[76px] md:min-w-[76px]' text='It’s short title here' />
            </div>
            <div className="grid grid-cols-2 gap-[80px] mr-[80px]">
                <div className="col-span-1 h-full bg-[#F8F9F9] flex justify-center items-center lg:p-[92px] md:p-10 p-[60px]">
                    {/* <Image src={data.image} width={1280} height={1024} alt='' className='size-full object-cover aspect-auto drop-shadow-xl' /> */}
                    {/* <Image src={data.image} width={1280} height={1024} alt='' className='size-full object-cover aspect-auto drop-shadow-xl' /> */}
                </div>
                <div className="col-span-1 flex flex-col gap-[62px]">
                    <div className="flex flex-col gap-[30px]">
                        <h2 className='text-[#1A1B20CC]/80 text-base font-normal'>
                            {data.content}
                        </h2>
                        <div className="uppercase text-[#1D1D1D] text-lg font-bold px-[14px] py-[12px] border-[2px] border-[#1D1D1D] rounded w-fit cursor-pointer">
                            Liên hệ ngay
                        </div>
                    </div>
                    <div className="flex items-center gap-12 justify-start">
                        {data.thumb.map(e => {
                            return (
                                <div key={e.id} className="flex flex-col gap-2.5 group overflow-hidden cursor-pointer">
                                    <Image src={e.image} width={1280} height={1024} alt='' className='size-full aspect-1/1 group-hover:scale-105 ease-in-out duration-300' />
                                    <h1 className='text-[#1A1B20CC]/80 text-sm text-center'>{e.name} <span className='border-b border-black'>{e.code}</span></h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectionintroduce