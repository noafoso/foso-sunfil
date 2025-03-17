import { FormatPhoneNumber } from '@/utils/format/FormatNumber'
import React from 'react'
import PhoneLink from '../../contact/PhoneLink'
import { useGetDataFooter } from '@/managers/api-management/ui/footer/useGetDataFooter'

const FooterContainer = () => {
    const { data: dataFooter } = useGetDataFooter({ enebled: true })

    console.log('dataFooter', dataFooter);


    return (
        <div className='bg-[url("/background/common/footer.jpg")] space-y-1 bg-cover bg-center bg-no-repeat lg:px-[60px] px-4 py-[24px]'>
            <h1 className='text-title-common font-bold uppercase'>
                {dataFooter?.company ?? ""}
                {/* Viet Hung Auto Production Trading Joint Stock Company */}
            </h1>
            <div className="text-[#000000] font-normal text-content-common space-y-1">
                <div className='flex items-start gap-1'>
                    <span className='font-normal text-nowrap'>Tax code:</span>
                    <span className='font-medium'>{dataFooter?.tax ?? ""}</span>
                </div>
                <div className='flex items-start gap-1'>
                    <span className='font-normal text-nowrap'>Address:</span>
                    <span className='font-medium'> {dataFooter?.address ?? ""}</span>
                </div>
                <div className='flex items-start gap-1'>
                    <span className='font-normal text-nowrap'>Phone number:</span>
                    <PhoneLink phoneNumber={`${dataFooter?.phonenumber ?? ""}`} className='font-medium hover:text-[#07A6FF] custom-transition' >
                        {FormatPhoneNumber(`${dataFooter?.phonenumber ?? ""}`)}
                    </PhoneLink>
                </div>
            </div>
        </div>
    )
}

export default FooterContainer