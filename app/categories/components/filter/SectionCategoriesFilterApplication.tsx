'use client'
import React, { FormEvent } from 'react'
import { useStateCategories } from '../../_state/useStateCategories'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { MdClear } from "react-icons/md";
import { toastCore } from '@/lib/toast'
import { SelectCustomSearch } from '@/components/select/SelectCustomSearch'

const SectionCategoriesFilterApplication = () => {

    const form = useForm({
        defaultValues: {
            brand: '',
            class: '',
            model: '',
            year: '',
            engine: '',
            body: ''
        }
    })

    const { queryKeyIsStateHome, isStateCategories } = useStateCategories()

    const onSubmit = (data: any) => {
        // queryKeyIsStateHome({
        //     filterProduct: {
        //         value: {
        //             text: data?.search
        //         }
        //     }
        // })
        toastCore.error('Tính năng đang phát triển!')
    }

    return (
        <div className='bg-white xxl:p-9 p-4'>
            <Form {...form}>
                <form className="grid xl:grid-cols-12 lg:grid-cols-6 grid-cols-1 xxl:gap-4 gap-2" onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                    form.handleSubmit((data) => onSubmit(data))()
                }}>
                    <FormField
                        control={form.control}
                        name="brand"
                        render={({ field, fieldState }) => {
                            return (
                                <FormItem className='lg:col-span-2'>
                                    <FormControl>
                                        <SelectCustomSearch
                                            onChange={field.onChange}
                                            onValueChange={() => { }}
                                            selected={field.value}
                                            options={[]}
                                            onOpen={(e: boolean) => queryKeyIsStateHome({
                                                filterAppication: {
                                                    branch: {
                                                        value: "",
                                                        selected: {},
                                                        open: e,
                                                    }
                                                }
                                            })}
                                            title='Brand'
                                            placeholder='Search'
                                            classNameContent="rounded-none p-0 lg:w-72 md:w-[705px] w-[365px]"
                                            classNameArrow={`w-[10%] max-w-[10%] ${isStateCategories.filterAppication.branch?.open ? 'rotate-180 text-[#07A6FF]' : ''}`}
                                            classNameButtonTrigger={`bg-white text-base rounded-none 3xl:py-4 py-3 h-auto w-full ${isStateCategories.filterAppication.branch?.open ? 'border-[#57A4FE]' : ''}`}
                                            classNameInputSearch='bg-white rounded-none border-t-0 border-x-0 border-b'
                                        />
                                    </FormControl>
                                    {fieldState?.invalid && fieldState?.error && <FormMessage>{fieldState?.error?.message}</FormMessage>}
                                </FormItem>
                            );
                        }}
                    />


                    <FormField
                        control={form.control}
                        name="class"
                        render={({ field, fieldState }) => {
                            return (
                                <FormItem className='lg:col-span-2'>
                                    <FormControl>
                                        <SelectCustomSearch
                                            onChange={field.onChange}
                                            onValueChange={() => { }}
                                            selected={field.value}
                                            options={[]}
                                            onOpen={(e: boolean) => queryKeyIsStateHome({
                                                filterAppication: {
                                                    class: {
                                                        value: "",
                                                        selected: {},
                                                        open: e,
                                                    }
                                                }
                                            })}
                                            title='Class'
                                            placeholder='Search'
                                            classNameContent="rounded-none p-0 lg:w-72 md:w-[705px] w-[365px]"
                                            classNameArrow={`w-[10%] max-w-[10%] ${isStateCategories.filterAppication.class?.open ? 'rotate-180 text-[#07A6FF]' : ''}`}
                                            classNameButtonTrigger={`bg-white text-base rounded-none 3xl:py-4 py-3 h-auto w-full ${isStateCategories.filterAppication.class?.open ? 'border-[#57A4FE]' : ''}`}
                                            classNameInputSearch='bg-white rounded-none border-t-0 border-x-0 border-b'
                                        />
                                    </FormControl>
                                    {fieldState?.invalid && fieldState?.error && <FormMessage>{fieldState?.error?.message}</FormMessage>}
                                </FormItem>
                            );
                        }}
                    />


                    <FormField
                        control={form.control}
                        name="model"
                        render={({ field, fieldState }) => {
                            return (
                                <FormItem className='lg:col-span-2'>
                                    <FormControl>
                                        <SelectCustomSearch
                                            onChange={field.onChange}
                                            onValueChange={() => { }}
                                            selected={field.value}
                                            options={[]}
                                            onOpen={(e: boolean) => queryKeyIsStateHome({
                                                filterAppication: {
                                                    model: {
                                                        value: "",
                                                        selected: {},
                                                        open: e,
                                                    }
                                                }
                                            })}
                                            title='Model'
                                            placeholder='Search'
                                            classNameContent="rounded-none p-0 lg:w-72 md:w-[705px] w-[365px]"
                                            classNameArrow={`w-[10%] max-w-[10%] ${isStateCategories.filterAppication.model?.open ? 'rotate-180 text-[#07A6FF]' : ''}`}
                                            classNameButtonTrigger={`bg-white text-base rounded-none 3xl:py-4 py-3 h-auto w-full ${isStateCategories.filterAppication.model?.open ? 'border-[#57A4FE]' : ''}`}
                                            classNameInputSearch='bg-white rounded-none border-t-0 border-x-0 border-b'
                                        />
                                    </FormControl>
                                    {fieldState?.invalid && fieldState?.error && <FormMessage>{fieldState?.error?.message}</FormMessage>}
                                </FormItem>
                            );
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="year"
                        render={({ field, fieldState }) => {
                            return (
                                <FormItem className='col-span-1'>
                                    <FormControl>
                                        <SelectCustomSearch
                                            onChange={field.onChange}
                                            onValueChange={() => { }}
                                            selected={field.value}
                                            options={[]}
                                            onOpen={(e: boolean) => queryKeyIsStateHome({
                                                filterAppication: {
                                                    year: {
                                                        value: "",
                                                        selected: {},
                                                        open: e,
                                                    }
                                                }
                                            })}
                                            title='Year'
                                            placeholder='Search'
                                            classNameContent="rounded-none p-0 lg:w-72 md:w-[705px] w-[365px]"
                                            classNameArrow={`lg:w-[30%] lg:min-w-[30%] lg:max-w-[30%] w-[10%] max-w-[10%] ${isStateCategories.filterAppication.year?.open ? 'rotate-180 text-[#07A6FF]' : ''}`}
                                            classNameButtonTrigger={`bg-white text-base rounded-none 3xl:py-4 py-3 h-auto w-full ${isStateCategories.filterAppication.year?.open ? 'border-[#57A4FE]' : ''}`}
                                            classNameInputSearch='bg-white rounded-none border-t-0 border-x-0 border-b'
                                        />
                                    </FormControl>
                                    {fieldState?.invalid && fieldState?.error && <FormMessage>{fieldState?.error?.message}</FormMessage>}
                                </FormItem>
                            );
                        }}
                    />


                    <FormField
                        control={form.control}
                        name="engine"
                        render={({ field, fieldState }) => {
                            return (
                                <FormItem className='lg:col-span-2'>
                                    <FormControl>
                                        <SelectCustomSearch
                                            onChange={field.onChange}
                                            onValueChange={() => { }}
                                            selected={field.value}
                                            options={[]}
                                            onOpen={(e: boolean) => queryKeyIsStateHome({
                                                filterAppication: {
                                                    engine: {
                                                        value: "",
                                                        selected: {},
                                                        open: e,
                                                    }
                                                }
                                            })}
                                            title='Engine'
                                            placeholder='Search'
                                            classNameContent="rounded-none p-0 lg:w-72 md:w-[705px] w-[365px]"
                                            classNameArrow={`w-[10%] max-w-[10%] ${isStateCategories.filterAppication.engine?.open ? 'rotate-180 text-[#07A6FF]' : ''}`}
                                            classNameButtonTrigger={`bg-white text-base rounded-none 3xl:py-4 py-3 h-auto w-full ${isStateCategories.filterAppication.engine?.open ? 'border-[#57A4FE]' : ''}`}
                                            classNameInputSearch='bg-white rounded-none border-t-0 border-x-0 border-b'
                                        />
                                    </FormControl>
                                    {fieldState?.invalid && fieldState?.error && <FormMessage>{fieldState?.error?.message}</FormMessage>}
                                </FormItem>
                            );
                        }}
                    />


                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field, fieldState }) => {
                            return (
                                <FormItem className='lg:col-span-2'>
                                    <FormControl>
                                        <SelectCustomSearch
                                            onChange={field.onChange}
                                            onValueChange={() => { }}
                                            selected={field.value}
                                            options={[]}
                                            onOpen={(e: boolean) => queryKeyIsStateHome({
                                                filterAppication: {
                                                    body: {
                                                        value: "",
                                                        selected: {},
                                                        open: e,
                                                    }
                                                }
                                            })}
                                            title='Body'
                                            placeholder='Search'
                                            classNameContent="rounded-none p-0 lg:w-72 md:w-[705px] w-[365px]"
                                            classNameArrow={`w-[10%] max-w-[10%] ${isStateCategories.filterAppication.body?.open ? 'rotate-180 text-[#07A6FF]' : ''}`}
                                            classNameButtonTrigger={`bg-white text-base rounded-none 3xl:py-4 py-3 h-auto w-full ${isStateCategories.filterAppication.body?.open ? 'border-[#57A4FE]' : ''}`}
                                            classNameInputSearch='bg-white rounded-none border-t-0 border-x-0 border-b'
                                        />
                                    </FormControl>
                                    {fieldState?.invalid && fieldState?.error && <FormMessage>{fieldState?.error?.message}</FormMessage>}
                                </FormItem>
                            );
                        }}
                    />

                    <Button
                        type='submit'
                        className="text-white col-span-1 capitalize rounded-none h-fit font-medium text-base bg-[#57A4FE] hover:bg-[#57A4FE]/80 px-8 py-3"
                    >
                        Tìm kiếm
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default SectionCategoriesFilterApplication