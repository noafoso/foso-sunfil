'use client'
import AnimateOnScroll from '@/components/animation/AnimateOnScroll'
import TitleDash from '@/components/title/TitleDash'
import TitleHighlight from '@/components/title/TitleHighlight'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { GoDash } from 'react-icons/go'
import { IoMdAdd } from 'react-icons/io'

// Define the type for the questions array
interface Question {
    value: string;
    question: string;
    answer: string;
}

// Define the type for the state
interface IState {
    isLoading: boolean;
    idOpen: string | null; // Chỉnh sửa từ string[] thành string | null
    listData: Question[];
    isOpenPaymentGuide: string[];
}

const SectionQuestionContact = () => {
    const questions: Question[] = [
        {
            value: "item-1",
            question: "How big is your agency team?",
            answer: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
        },
        {
            value: "item-2",
            question: "Can I get a quote for a custom package?",
            answer: "Yes, you can get a custom quote by contacting our sales team."
        },
        {
            value: "item-3",
            question: "What's your typical cost for a campaign?",
            answer: "Our typical campaign costs vary depending on the scope and requirements."
        },
        {
            value: "item-4",
            question: "What is the typical timeline?",
            answer: "The typical timeline for a campaign is 3-6 months."
        },
        {
            value: "item-5",
            question: "What certifications does Agency has?",
            answer: "Our agency holds several industry certifications including Google Ads and Facebook Blueprint."
        },
        {
            value: "item-6",
            question: "Do you guarantee marketing results?",
            answer: "While we strive for the best results, we cannot guarantee specific outcomes as they depend on various factors."
        }
    ];

    const initialState: IState = {
        isLoading: false,
        idOpen: null,
        listData: [],
        isOpenPaymentGuide: []
    }

    const [isState, setIsState] = useState<IState>(initialState)

    const queryState = (key: Partial<IState>) => setIsState((prev: IState) => ({ ...prev, ...key }))

    return (
        <div className="xl:mx-[223px] lg:mx-[120px] md:mx-[36px] mx-4 flex flex-col xxl:gap-6 gap-4">
            <TitleHighlight title='Câu hỏi thường gặp' highlightClassName='md:-left-2 right-0  md:w-[164px] w-[100px] bg-[#6AD6EEA6]/65' />
            <div className="flex flex-col 2xl:gap-[64px] xxl:gap-[48px] gap-6">
                <TitleDash text='It is a long established fact that a reader will be distracted by the service.' />
                <div className="flex flex-col gap-8">
                    <Accordion onValueChange={(value: string) => queryState({ idOpen: value })} type="single" collapsible>
                        {questions.map((item, index) => (
                            <AccordionItem key={item.value as string} value={item.value}>
                                <AccordionTrigger className="focus-visible:outline-none w-full xxl:py-8 py-6 hover:no-underline">
                                    <AnimateOnScroll index={index} className='flex items-center gap-4 justify-between w-full group transition-all duration-150 ease-linear'>
                                        <div className={`2xl:text-xl text-base text-[#272727]   transition-all duration-150 ease-linear  font-bold text-start`}
                                        >
                                            {item.question}
                                        </div>
                                        <div className="3xl:min-w-[30px] min-w-[20px]">
                                            {
                                                isState.idOpen === item.value ?
                                                    <GoDash className={`3xl:text-3xl text-2xl accordionChevron text-[#06282D] shrink-0 transition-transform duration-200`} />
                                                    :
                                                    <IoMdAdd className={`3xl:text-3xl text-2xl accordionChevron text-[#06282D] shrink-0 transition-transform duration-200`} />
                                            }
                                        </div>
                                    </AnimateOnScroll>
                                </AccordionTrigger>
                                <AccordionContent className='xxl:pb-8 pb-6 text-[#1A1B20CC]/80 text-base font-normal xl:max-w-[65%] lg:max-w-[80%] max-w-full'>
                                    <p>{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <div className="flex items-center justify-center gap-2">
                        <p className="text-center text-[#8C8C8C] md:text-base text-base font-normal">For other questions visit our
                        </p>
                        <div className="flex items-center md:gap-4 gap-2">
                            <Link href="#" className="text-[#272727] md:text-base text-base border-b border-black">help center</Link>
                            <Image width={1280} height={1024} src={'/icons/contact/out.png'} alt='' className='size-6 object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionQuestionContact