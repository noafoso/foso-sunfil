import AnimatedCountUp from '@/components/animation/AnimatedCountUp'
import { uuidv4 } from '@/lib/uuid'
import { montserrat_sans } from '@/utils/fonts/fonts'

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
const SectionIntroAbout = () => {
    return (
        <div className='
        lg:bg-[url("/background/about/intro.png")] bg-[url("/background/about/intro-mobi.png")] custom-padding-left-right bg-center bg-cover bg-no-repeat w-full 
        flex flex-col items-end lg:justify-center justify-end lg:pb-0 md:pb-[250px] pb-[80px]
        lg:h-screen h-[calc(100vh_+_112px)]'
        >
            <div className="flex flex-col gap-6 xl:w-1/2 lg:w-[70%] w-full">
                <h1 className={`${montserrat_sans.className} text-[#000000] font-extrabold lg:text-[60px] text-[40px]`}>Về chúng tôi</h1>
                <div className=" flex flex-col gap-8 ">
                    <h2 className='texxt-[#1A1B20CC]/80 font-normal text-content-common'>
                        Sunfil-filter đại diện cho nhiều loại sản phẩm lọc dành cho dịch vụ hậu mãi ô tô của hầu hết các thương hiệu trên thế giới. Bộ lọc JS kết hợp hiệu suất làm sạch cao, độ tin cậy, độ bền và dễ thay thế và sử dụng.
                    </h2>
                    <div className={`flex lg:flex-nowrap flex-wrap justify-between items-center lg:gap-11 md:gap-5`}>
                        {count.map((e, index: number) => {
                            return (
                                <div key={e.id} className="flex flex-col gap-1 lg:py-0 pt-2 lg:w-auto md:w-auto w-1/2">
                                    <div className="flex items-center gap-2">
                                        <span
                                            key={e.id}
                                            style={{
                                                color: color[index]
                                            }}
                                            className={` 3xl:text-6xl lg:text-[55px] text-[45px] font-bold`}
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
                                            className='3xl:text-5xl lg:text-[42px] text-[36px] font-bold'
                                        >
                                            +
                                        </span>
                                    </div>
                                    <h1 data-aos="fade-up" className='text-[#0000009E]/60 2xl:text-xl xl:text-lg lg:text-lg text-xl font-normal'>{e?.name}</h1>
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