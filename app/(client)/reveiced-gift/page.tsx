'use client'

import { useResizeStore } from '@/stores/useResizeStore'

import { useStatePageReveicedGift } from './_state/useStatePageReveicedGift'
import { useSearchParams } from 'next/navigation'

const ReveicedGift = () => {
    const code = useSearchParams().get('code')

    const { isVisibleMobile } = useResizeStore()

    const { queryKeyIsStatePageReveicedGift } = useStatePageReveicedGift()

    console.log('code', code);

    return (
        <div className='w-full relative lg:h-screen md:h-dvh'>
            <div className='pt-[112px] flex flex-col justify-center items-center md:gap-0 gap-16 3xl:pb-8 2xl:pb-6 pb-3 h-full relative z-10'>
             hello
                {/* <SectionIntroHome />
                {
                    isVisibleMobile &&
                    <div className='w-full h-[400px] grid grid-cols-12 bg-white'>
                        <div className="col-span-12 bg-[url('/background/home/bg-home.png')] bg-cover bg-center bg-no-repeat" />
                    </div>
                }
                <SectionSecondHome /> */}
            </div>
        </div>
    )
}

export default ReveicedGift