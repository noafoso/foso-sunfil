'use client'
import AnimateOnScroll from '@/components/animation/AnimateOnScroll'
import BlogCardVerticalBig from '@/components/card/blog/BlogCardVerticalBig '
import TitleHighlight from '@/components/title/TitleHighlight'
import { uuidv4 } from '@/lib/uuid'
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
]
const SectionIdBlogRelated = () => {
    return (
        <div className='flex flex-col lg:gap-12 gap-8 custom-padding-left-right'>
            <TitleHighlight
                title='Bài viết liên quan'
                highlightClassName='md:-right-2 right-0 lg:w-[57%]  md:w-[58%] 
                w-[55%] bg-[#6AD6EEA6]/65'
            />
            <div className="grid lg:grid-cols-3 grid-cols-1 xxl:gap-8 gap-6">
                {data.map((e, index: number) => {
                    return (
                        <AnimateOnScroll index={index} key={e.id}>
                            <BlogCardVerticalBig {...e} />
                        </AnimateOnScroll>
                    )
                })}
            </div>
        </div>
    )
}

export default SectionIdBlogRelated