import AnimateOnScroll from '@/components/animation/AnimateOnScroll';
import BlogCardVerticalBig from '@/components/card/blog/BlogCardVerticalBig ';
import { uuidv4 } from '@/lib/uuid';
import { FiLoader } from "react-icons/fi";

const data = [
    {
        id: uuidv4(),
        name: 'Đầu phun sprinkler là gì? Cấu tạo, ứng dụng và nguyên lý hoạt động',
        image: '/example/blogs/b1.png',
        tag: [
            {
                id: 1,
                name: 'car'
            },
            {
                id: 2,
                name: 'OIL'
            }
        ],
        avata: '/example/blogs/avt1.png',
        date: 'Feb 03, 2021',
        user: 'Porter Daniel'
    },
    {
        id: uuidv4(),
        name: 'Check Valve là gì? 4 loại Check Valve phổ biến nhất hiện nay',
        image: '/example/blogs/b2.png',
        tag: [
            {
                id: 2,
                name: 'OIL'
            },
            {
                id: 3,
                name: 'CABIN'
            },
        ],
        avata: '/example/blogs/avt2.png',
        date: 'Feb 03, 2021',
        user: 'Porter Daniel'
    },
    {
        id: uuidv4(),
        name: 'Bảng đơn vị đo áp suất thông dụng nhất hiện nay',
        image: '/example/blogs/b3.png',
        tag: [
            {
                id: 1,
                name: 'car'
            },
            {
                id: 2,
                name: 'OIL'
            }
        ],
        avata: '/example/blogs/avt3.png',
        date: 'Feb 03, 2021',
        user: 'Porter Daniel',
    },
    {
        id: uuidv4(),
        name: 'Bật mí các loại ống thủy lực phổ biến nhất hiện nay',
        image: '/example/blogs/b4.png',
        tag: [
            {
                id: 2,
                name: 'OIL'
            }
        ],
        avata: '/example/blogs/avt1.png',
        date: 'Feb 03, 2021',
        user: 'Porter Daniel'
    },
    {
        id: uuidv4(),
        name: 'Đầu phun sprinkler là gì? Cấu tạo, ứng dụng và nguyên lý hoạt động',
        image: '/example/blogs/b1.png',
        tag: [
            {
                id: 2,
                name: 'OIL'
            },
            {
                id: 3,
                name: 'CABIN'
            },
        ],
        avata: '/example/blogs/avt2.png',
        date: 'Feb 03, 2021',
        user: 'Porter Daniel'
    },
    {
        id: uuidv4(),
        name: 'Bảng đơn vị đo áp suất thông dụng nhất hiện nay',
        image: '/example/blogs/b5.png',
        tag: [
            {
                id: 1,
                name: 'fitness'
            },
            {
                id: 3,
                name: 'cabin'
            }
        ],
        avata: '/example/blogs/avt3.png',
        date: 'Feb 03, 2021',
        user: 'Porter Daniel',
    },
]
const SectionBlogRelated = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 col-span-1 gap-8">
                {data.map((e, index) => {
                    return (
                        <AnimateOnScroll index={index} key={e.id}>
                            <BlogCardVerticalBig {...e} />
                        </AnimateOnScroll>
                    )
                })}
            </div>
            <div className="flex justify-center items-center gap-3 w-fit mx-auto border-[#E6E8EC] border-2 py-2 lg:px-4 px-3 cursor-pointer">
                <FiLoader className='text-base text-[#23262F] ' />
                <h2 className='text-[#23262F] font-normal text-sm'>Load more</h2>
            </div>
        </div>
    )
}

export default SectionBlogRelated