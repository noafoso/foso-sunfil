'use client'
import React, { FormEvent } from 'react'
import { useStateCategories } from '../../_state/useStateCategories'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { MdClear } from "react-icons/md";
import { toastCore } from '@/lib/toast'

const SectionCategoriesFilterProduct = () => {

    const form = useForm({
        defaultValues: {
            search: ''
        }
    })

    const { queryKeyIsStateHome } = useStateCategories()

    const onSubmit = (data: any) => {
        queryKeyIsStateHome({
            filterProduct: {
                value: {
                    text: data?.search
                }
            }
        })
        toastCore.error('Tính năng đang phát triển!')
    }

    return (
        <div className='bg-white xxl:p-9 p-4'>
            <Form {...form}>
                <form className="flex md:flex-row flex-col gap-4" onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                    form.handleSubmit((data) => onSubmit(data))()
                }}>
                    <FormField
                        control={form.control}
                        name="search"
                        // rules={{
                        //     required: {
                        //         message: "Vui lòng nhập dữ liệu",
                        //         value: true
                        //     },
                        // }}
                        render={({ field, fieldState }) => {
                            return (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                type="text"
                                                className={`${fieldState?.invalid && fieldState?.error
                                                    ? "border rounded-md border-[#F15A5A]" : "border-b rounded-md border-[#1F1F1F33]"
                                                    } bg-white text-base focus:border-[#57A4FE] placeholder:text-[#0000004D] rounded-none placeholder:text-base focus-visible:ring-0 text-black focus-visible:ring-offset-0 3xl:py-4 py-3 h-auto`}
                                                placeholder="OEM no or JS No"
                                                {...field}
                                            />
                                            {
                                                field.value && (
                                                    <MdClear
                                                        onClick={() => {
                                                            queryKeyIsStateHome({
                                                                filterProduct: {
                                                                    value: {
                                                                        text: ''
                                                                    }
                                                                }
                                                            })
                                                            form.reset()
                                                        }}
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
                    <Button
                        type='submit'
                        className="text-white capitalize rounded-none h-fit font-medium text-base bg-[#57A4FE] hover:bg-[#57A4FE]/80 px-8 py-3"
                    >
                        Tìm kiếm
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default SectionCategoriesFilterProduct