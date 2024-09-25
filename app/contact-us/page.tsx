import SectionIntroCommon from '../products/components/SectionIntroCommon'
import SectionFormContact from './components/SectionFormContact'
import SectionQuestionContact from './components/SectionQuestionContact'

const Page = () => {
    return (
        <div className='flex flex-col xl:pb-[104px] pb-[72px]'>
            <SectionIntroCommon
                classNameTitle='md:max-w-full max-w-[60%]'
                title='Liên hệ với chúng tôi'
                description='Sunfil-filter đại diện cho nhiều loại sản phẩm lọc dành cho dịch vụ hậu mãi ô tô của hầu hết các thương hiệu trên thế giới. Bộ lọc JS kết hợp hiệu suất làm sạch cao, độ tin cậy, độ bền và dễ thay thế và sử dụng.'
            />
            <div className="flex flex-col xxl:gap-[104px] gap-[64px]">
                <SectionFormContact />
                <SectionQuestionContact />
            </div>
        </div>
    )
}

export default Page