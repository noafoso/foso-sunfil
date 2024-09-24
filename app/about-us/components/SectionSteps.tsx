import TitleDash from '@/components/title/TitleDash'
import TitleHighlight from '@/components/title/TitleHighlight'
import React from 'react'

const SectionSteps = () => {
    return (
        <div className='px-[54px] bg-[#FFFFFF] flex flex-col gap-[80px]'>
            {/* <div className="w-full">
                <TitleHighlight title='Lịch sử hình thành công ty' highlightClassName='bg-[#FFBC059E]60 w-[167px] left-0' />
            </div> */}
            <div className="flex flex-col items-center gap-6 mx-[80px]">
                <TitleHighlight
                    title='Lịch sử hình thành công ty'
                    highlightClassName='w-[160px] -left-4 bg-[#FFBC059E]/85'
                />
                <TitleDash dashClassName='md:max-w-[85px] md:min-w-[85px]' text='It is a long established fact that a reader will be distracted by the service.' />
            </div>
        </div>
    )
}

export default SectionSteps