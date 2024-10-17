'use client'
import { SelectCustomSearch } from '@/components/select/SelectCustomSearch'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { toastCore } from '@/lib/toast'
import { FormEvent } from 'react'
import { useForm } from 'react-hook-form'
import { useStateCategories } from '../../_state/useStateCategories'

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

    const { queryKeyIsStateCategories, isStateCategories } = useStateCategories()

    const onSubmit = (data: any) => {
        // queryKeyIsStateCategories({
        //     filterProduct: {
        //         value: {
        //             text: data?.search
        //         }
        //     }
        // })
        toastCore.error('Tính năng đang phát triển!')
    }

    return (
        <div className='bg-white xxl:p-9 p-6'>
            <Form {...form}>
                <form
                    className="grid xl:grid-cols-10 lg:grid-cols-6 grid-cols-1 xxl:gap-4 gap-2"
                    onSubmit={(e: FormEvent<HTMLFormElement>) => {
                        e.preventDefault()
                        form.handleSubmit((data) => onSubmit(data))()
                    }}
                >
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
                                            onOpen={(e: boolean) => queryKeyIsStateCategories({
                                                filterApplication: {
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
                                            classNameArrow={`lg:w-[30%] lg:min-w-[30%] lg:max-w-[30%] w-[10%] max-w-[10%] ${isStateCategories.filterApplication.branch?.open ? 'rotate-180 text-[#07A6FF]' : ''}`}
                                            classNameButtonTrigger={`bg-white text-base rounded-none 3xl:py-4 py-3 h-auto w-full ${isStateCategories.filterApplication.branch?.open ? 'border-[#57A4FE]' : ''}`}
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
                                            onOpen={(e: boolean) => queryKeyIsStateCategories({
                                                filterApplication: {
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
                                            classNameArrow={`lg:w-[30%] lg:min-w-[30%] lg:max-w-[30%] w-[10%] max-w-[10%] ${isStateCategories.filterApplication.model?.open ? 'rotate-180 text-[#07A6FF]' : ''}`}
                                            classNameButtonTrigger={`bg-white text-base rounded-none 3xl:py-4 py-3 h-auto w-full ${isStateCategories.filterApplication.model?.open ? 'border-[#57A4FE]' : ''}`}
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
                                            onOpen={(e: boolean) => queryKeyIsStateCategories({
                                                filterApplication: {
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
                                            classNameArrow={`lg:w-[35%] lg:min-w-[35%] lg:max-w-[30%] w-[10%] max-w-[10%] ${isStateCategories.filterApplication.year?.open ? 'rotate-180 text-[#07A6FF]' : ''}`}
                                            classNameButtonTrigger={`bg-white text-base rounded-none 3xl:py-4 py-3 h-auto w-full ${isStateCategories.filterApplication.year?.open ? 'border-[#57A4FE]' : ''}`}
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
                                            onOpen={(e: boolean) => queryKeyIsStateCategories({
                                                filterApplication: {
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
                                            classNameArrow={`lg:w-[30%] lg:min-w-[30%] lg:max-w-[30%] w-[10%] max-w-[10%] ${isStateCategories.filterApplication.engine?.open ? 'rotate-180 text-[#07A6FF]' : ''}`}
                                            classNameButtonTrigger={`bg-white text-base rounded-none 3xl:py-4 py-3 h-auto w-full ${isStateCategories.filterApplication.engine?.open ? 'border-[#57A4FE]' : ''}`}
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
                                            onOpen={(e: boolean) => queryKeyIsStateCategories({
                                                filterApplication: {
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
                                            classNameArrow={`lg:w-[30%] lg:min-w-[30%] lg:max-w-[30%] w-[10%] max-w-[10%] ${isStateCategories.filterApplication.body?.open ? 'rotate-180 text-[#07A6FF]' : ''}`}
                                            classNameButtonTrigger={`bg-white text-base rounded-none 3xl:py-4 py-3 h-auto w-full ${isStateCategories.filterApplication.body?.open ? 'border-[#57A4FE]' : ''}`}
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
                        className="text-white col-span-1 capitalize rounded-none h-fit font-medium text-base bg-[#57A4FE] hover:bg-[#57A4FE]/80 px-8 3xl:py-4 py-3"
                    >
                        Tìm kiếm
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default SectionCategoriesFilterApplication