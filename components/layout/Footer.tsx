import { FormatPhoneNumber } from '@/utils/format/FormatNumber'
import React from 'react'
import PhoneLink from '../contact/PhoneLink'

const Footer = () => {
    return (
        <div className='bg-[url("/background/common/footer.jpg")] space-y-1 bg-cover bg-center bg-no-repeat lg:px-[60px] px-4 py-[24px]'>
            <h1 className='text-title-common font-bold'>CÔNG TY CỔ PHẦN SẢN XUẤT THƯƠNG MẠI Ô TÔ VIỆT HƯNG</h1>
            <div className="text-[#000000] font-normal text-content-common space-y-1">
                <div className='flex items-start gap-1'>
                    <span className='font-normal text-nowrap'>Mã số thuế:</span>
                    <span className='font-medium'>0305094228</span>
                </div>
                <div className='flex items-start gap-1'>
                    <span className='font-normal text-nowrap'>Địa Chỉ:</span>
                    <span className='font-medium'>13 Nghĩa Thục, Phường 05, Quận 5, Thành phố Hồ Chí Minh, VIỆT NAM</span>
                </div>
                <div className='flex items-start gap-1'>
                    <span className='font-normal text-nowrap'>Số điện thoại:</span>
                    <PhoneLink phoneNumber="0837607607" className='font-medium hover:text-[#07A6FF] custom-transition' >
                        {FormatPhoneNumber("0837607607")}
                    </PhoneLink>
                </div>
            </div>
        </div>
    )
}

export default Footer