import SectionFormContact from './components/SectionFormContact'
import SectionIntroContact from './components/SectionIntroContact'
import SectionQuestionContact from './components/SectionQuestionContact'

const Page = () => {
    return (
        <div className='flex flex-col'>
            <SectionIntroContact />
            <div className="flex flex-col xxl:gap-[104px] gap-[64px]">
                <SectionFormContact />
                <SectionQuestionContact />
            </div>
        </div>
    )
}

export default Page