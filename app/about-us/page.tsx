import React from 'react'
import SectionIntroAbout from './components/SectionIntroAbout'
import Sectionintroduce from './components/SectionIntroduce'
import SectionSteps from './components/SectionSteps'

const Page = () => {
    return (
        <div className='flex flex-col gap-[124px]'>
            <SectionIntroAbout />
            <Sectionintroduce />
            <SectionSteps />
        </div>
    )
}

export default Page