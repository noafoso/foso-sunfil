import SectionFeelAbout from './components/SectionFeelAbout'
import SectionIntroAbout from './components/SectionIntroAbout'
import SectionIntroduceAbout from './components/SectionIntroduceAbout'
import SectionProductAbout from './components/SectionProductAbout'
import SectionStepsAbout from './components/SectionStepsAbout'

const Page = () => {
    return (
        <div className='flex flex-col 2xl:gap-[124px] gap-[84px]'>
            <SectionIntroAbout />
            <SectionIntroduceAbout />
            <SectionStepsAbout />
            <SectionProductAbout />
            <SectionFeelAbout />
        </div>
    )
}

export default Page