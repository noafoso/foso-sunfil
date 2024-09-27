import { montserrat_sans } from '@/utils/fonts/fonts'
import React from 'react'

const SectionDetailBlogIntro = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 custom-padding-left-right'>
            <h2 className='text-[#1A1B20A3] font-normal text-base'>25 tháng ba 2022 </h2>
            <h1 className={`${montserrat_sans.className} text-center font-bold text-title-top`}>
                Quy chuẩn hình ảnh và những điều cần biết khi hoàn trả hàng
            </h1>
            <h2 className='text-[#1A1B20CC] text-sm font-normal'>Bài viết sẽ hướng dẫn chi tiết cụ thể nhất các bước cũng như thông tin khi thực hiện hoàn trả hàng</h2>
        </div>
    )
}

export default SectionDetailBlogIntro