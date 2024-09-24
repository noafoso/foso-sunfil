import React from 'react'
import SectionIntroAbout from './components/SectionIntroAbout'
import SectionIntroduceAbout from './components/SectionIntroduceAbout'
import SectionStepsAbout from './components/SectionStepsAbout'
import SectionProductAbout from './components/SectionProductAbout'
import SectionFeelAbout from './components/SectionFeelAbout'

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