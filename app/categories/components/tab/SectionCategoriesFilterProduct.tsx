'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toastCore } from '@/lib/toast'
import { FormEvent, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { MdClear } from "react-icons/md"
import { useStateCategories } from '../../_state/useStateCategories'

import { motion } from 'framer-motion'
import ButtonAnimation from '@/components/button/ButtonAnimation'
import { useRouter, useSearchParams } from 'next/navigation'
import { useGetCodeProductAbsolute } from '@/hooks/categories/useGetCodeProductAbsolute'

const SectionCategoriesFilterProduct = () => {
    const codeParam = useSearchParams().get('code')

    const router = useRouter()

    const form = useForm({
        defaultValues: {
            search: ''
        }
    })
    const { queryKeyIsStateCategories } = useStateCategories()

    useEffect(() => {
        if (codeParam) {
            form.setValue("search", codeParam)
        }
    }, [codeParam])


    const onSubmit = (data: any) => {
        if (data?.search) {
            queryKeyIsStateCategories({
                filterProduct: {
                    value: data?.search
                }
            })
            router.push(`/categories?code=${data?.search}`)
        } else {
            toastCore.error('Vui lòng điền mã sản phẩm!')
        }
    }

    const handleClearTextSearch = () => {
        queryKeyIsStateCategories({
            filterProduct: {
                value: ''
            }
        })
        form.reset()
        router.push(`/categories`)
    }

    return (
        <div className='bg-white xxl:p-9 p-6'>
            <Form {...form}>
                <form
                    className="flex md:flex-row flex-col gap-4"
                    onSubmit={(e: FormEvent<HTMLFormElement>) => {
                        e.preventDefault()
                        form.handleSubmit((data) => onSubmit(data))()
                    }}
                >
                    <FormField
                        control={form.control}
                        name="search"
                        render={({ field, fieldState }) => {
                            return (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                type="text"
                                                className={`${fieldState?.invalid && fieldState?.error ? "border rounded-md border-[#F15A5A]" : "border-b rounded-md border-[#1F1F1F33]"} 
                                                    bg-white text-base focus:border-[#57A4FE] placeholder:text-[#0000004D] rounded-none placeholder:text-base focus-visible:ring-0 text-black focus-visible:ring-offset-0 py-3 h-auto`}
                                                placeholder="OEM no or JS No"
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Backspace' && field.value.length === 1) {
                                                        console.log('Ký tự cuối cùng đã bị xoá');
                                                        // Thực hiện hành động khi ký tự cuối bị xoá
                                                        handleClearTextSearch()
                                                    }
                                                }}
                                                {...field}
                                            />
                                            {
                                                field.value && (
                                                    <MdClear
                                                        onClick={() => handleClearTextSearch()}
                                                        className="absolute top-[25%] right-4 bg-gray-200 p-1 rounded-full size-6 cursor-pointer"
                                                    />
                                                )
                                            }
                                        </div>
                                    </FormControl>
                                    {fieldState?.invalid && fieldState?.error && <FormMessage>{fieldState?.error?.message}</FormMessage>}
                                </FormItem>
                            );
                        }}
                    />

                    <ButtonAnimation
                        title_button="Tìm kiếm"
                        className="text-white capitalize rounded-none h-fit font-medium text-base border border-[#57A4FE] bg-[#57A4FE] hover:bg-[#57A4FE]/80 px-8 py-3"
                    />
                </form>
            </Form>
        </div>
    )
}

export default SectionCategoriesFilterProduct