'use client'
import { SelectCustomSearch } from '@/components/select/SelectCustomSearch'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { toastCore } from '@/lib/toast'
import { FormEvent, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useStateCategories } from '../../_state/useStateCategories'
import { useGetListBrands } from '@/hooks/categories/useGetListBrands'
import { useGetListModels } from '@/hooks/categories/useGetListModels'
import { useGetListYears } from '@/hooks/categories/useGetListYears'
import { useGetListEngineAndBody } from '@/hooks/categories/useGetListEngineAndBody'
import { usePostSearchListCodeApplication } from '@/hooks/categories/usePostSearchListCodeApplication'
import TableDetailCodeProduct from '../product/TableDetailCodeProduct'
import { Skeleton } from '@/components/ui/skeleton'

interface ISelected {
    value: string; // hoặc kiểu dữ liệu phù hợp
    label: string; // ví dụ cho nhãn
    active: boolean;
}

const SectionCategoriesFilterApplication = () => {
    // Trong useForm
    const form = useForm<{
        brand?: ISelected; // Sử dụng kiểu Brand cho brand
        model?: ISelected[]; // Hoặc kiểu dữ liệu khác
        year?: ISelected[];
        engine?: ISelected[];
        body?: ISelected[];
    }>({
        defaultValues: {
            brand: undefined,
            model: undefined,
            year: undefined,
            engine: undefined,
            body: undefined,
        }
    });

    const { isStateCategories, queryKeyIsStateCategories } = useStateCategories()

    const brandValue = form.watch('brand')
    const modelValue = form.watch('model')
    const yearValue = form.watch('year')
    const engineValue = form.watch('engine')
    const bodyValue = form.watch('body')

    const enabledGetListBrands = isStateCategories?.filterApplication?.branch?.open
    const enabledGetListModels = isStateCategories?.filterApplication?.model?.open && !!brandValue
    const enabledGetListYears = isStateCategories?.filterApplication?.year?.open && !!brandValue && !!modelValue
    const enabledGetListEngineAndBody = (isStateCategories?.filterApplication?.engine?.open || isStateCategories?.filterApplication?.body?.open) && !!brandValue && !!modelValue && !!yearValue

    const { data: dataListBrands, isFetching: isFetchingListBrands } = useGetListBrands(enabledGetListBrands)
    const { data: dataListModels, isFetching: isFetchingListModels } = useGetListModels(enabledGetListModels, brandValue?.value)
    const { data: dataListYears, isFetching: isFetchingListYears } = useGetListYears(enabledGetListYears, brandValue?.value, modelValue)
    const { data: dataListEngineAndBody, isFetching: isFetchingListEngineAndBody } = useGetListEngineAndBody(enabledGetListEngineAndBody, brandValue?.value, modelValue, yearValue)

    const { onSubmit, isLoading, dataListCodeApplication } = usePostSearchListCodeApplication()

    // Hàm reset field dựa trên điều kiện
    const resetFields = (fields: Array<'model' | 'year' | 'engine' | 'body'>) => {
        fields.forEach(field => form.resetField(field));
    };

    useEffect(() => {
        resetFields(['model', 'year', 'engine', 'body']);
    }, [brandValue, form])

    useEffect(() => {
        resetFields(['year', 'engine', 'body']);
    }, [modelValue, form]);

    useEffect(() => {
        resetFields(['engine', 'body']);
    }, [yearValue, form]);

    const onSubmitSearch = async (data: any) => {
        if (data?.brand && data?.model) {
            await onSubmit(data)
        } else if (!data?.brand) {
            toastCore.error('Vui lòng chọn brand!')
        } else if (!data?.model) {
            toastCore.error('Vui lòng chọn model!')
        }
    }

    // Hàm Chọn nhiều item
    const handleMultiSelect = (selectedOptions: any[], option: any, onChange: (value: any) => void) => {
        const alreadySelected = selectedOptions.find((item) => item.value === option.value);

        let newSelected;
        if (alreadySelected) {
            // Nếu đã chọn, loại bỏ item khỏi danh sách
            newSelected = selectedOptions.filter((item) => item.value !== option.value);
        } else {
            // Nếu chưa chọn, thêm item vào danh sách
            newSelected = [...selectedOptions, option];
        }

        // Nếu không có lựa chọn nào, truyền undefined thay vì mảng rỗng
        onChange(newSelected.length > 0 ? newSelected : undefined);
    };

    // Hàm Chọn riêng lẻ từng item
    const handleSingleSelect = (value: any, field: any) => {
        const isSameValue = JSON.stringify(value) === JSON.stringify(field.value); // So sánh đối tượng

        // Nếu chọn lại chính nó, đặt thành undefined
        field.onChange(isSameValue ? undefined : value);
        queryKeyIsStateCategories({
            filterApplication: {
                ...isStateCategories?.filterApplication,
                branch: {
                    value: "",
                    selected: {},
                    open: false,
                }
            }
        })
    };

    return (
        <div className='3xl:space-y-12 space-y-10'>
            <div className='bg-white xxl:p-9 p-6'>
                <Form {...form}>
                    <form
                        className="grid xl:grid-cols-10 lg:grid-cols-6 grid-cols-1 xxl:gap-4 gap-2"
                        onSubmit={(e: FormEvent<HTMLFormElement>) => {
                            e.preventDefault()
                            form.handleSubmit((data) => onSubmitSearch(data))()
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
                                                onChange={(value) => handleSingleSelect(value, field)}
                                                onValueChange={() => { }}
                                                selected={field.value}
                                                options={dataListBrands || []}
                                                onOpen={(e: boolean) => queryKeyIsStateCategories({
                                                    filterApplication: {
                                                        ...isStateCategories?.filterApplication,
                                                        branch: {
                                                            value: "",
                                                            selected: {},
                                                            open: e,
                                                        }
                                                    }
                                                })}
                                                loading={isFetchingListBrands}
                                                typeSearch='search-client'
                                                mutiValue={false}
                                                title='Brand'
                                                placeholder='Search'
                                                classNameContent="rounded-none p-0 3xl:w-[312px] lg:w-[272px] md:w-[688px] w-[310px]"
                                                classNameArrow={`${isStateCategories.filterApplication.branch?.open ? 'rotate-180 text-[#07A6FF]' : ''}`}
                                                classNameButtonTrigger={`${isStateCategories.filterApplication.branch?.open ? 'border-[#57A4FE]' : ''} bg-white text-base rounded-none 3xl:h-14 h-12 w-full`}
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
                                    <FormItem className='lg:col-span-2 w-full'>
                                        <FormControl>
                                            <SelectCustomSearch
                                                onChange={(option) => handleMultiSelect(field.value || [], option, field.onChange)}
                                                handleSelectAll={(options) => {
                                                    field.onChange(options.map((option) => ({
                                                        ...option,
                                                        active: true
                                                    })))
                                                }}
                                                handleDeleteAll={() => { field.onChange(undefined) }}
                                                onValueChange={() => { }}
                                                selected={field.value}
                                                options={dataListModels || []}
                                                onOpen={(e: boolean) => queryKeyIsStateCategories({
                                                    filterApplication: {
                                                        ...isStateCategories?.filterApplication,
                                                        model: {
                                                            value: "",
                                                            selected: {},
                                                            open: e,
                                                        }
                                                    }
                                                })}
                                                loading={isFetchingListModels}
                                                typeSearch='search-client'
                                                title='Model'
                                                placeholder='Search'
                                                classNameContent="rounded-none p-0 3xl:w-[312px] lg:w-[272px] md:w-[688px] w-[310px]"
                                                classNameArrow={`${isStateCategories.filterApplication.model?.open ? 'rotate-180 text-[#07A6FF]' : ''}`}
                                                classNameButtonTrigger={`${isStateCategories.filterApplication.model?.open ? 'border-[#57A4FE]' : ''} bg-white text-base rounded-none 3xl:h-14 h-12 w-full`}
                                                classNameInputSearch='bg-white rounded-none border-t-0 border-x-0 border-b'
                                                disabled={!!brandValue}
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
                                    <FormItem className='xl:col-span-1 lg:col-span-2 col-span-1'>
                                        <FormControl>
                                            <SelectCustomSearch
                                                onChange={(option) => handleMultiSelect(field.value || [], option, field.onChange)}
                                                onValueChange={() => { }}
                                                selected={field.value}
                                                options={dataListYears || []}
                                                onOpen={(e: boolean) => queryKeyIsStateCategories({
                                                    filterApplication: {
                                                        ...isStateCategories?.filterApplication,
                                                        year: {
                                                            value: "",
                                                            selected: {},
                                                            open: e,
                                                        }
                                                    }
                                                })}
                                                loading={isFetchingListYears}
                                                typeSearch='search-client'
                                                title='Year'
                                                placeholder='Search'
                                                classNameContent="rounded-none p-0 3xl:w-[148px] lg:w-72 md:w-[688px] w-[310px]"
                                                classNameArrow={`${isStateCategories.filterApplication.year?.open ? 'rotate-180 text-[#07A6FF]' : ''}`}
                                                classNameButtonTrigger={`bg-white text-base rounded-none 3xl:h-14 h-12 w-full ${isStateCategories.filterApplication.year?.open ? 'border-[#57A4FE]' : ''}`}
                                                classNameInputSearch='bg-white rounded-none border-t-0 border-x-0 border-b'
                                                disabled={!!brandValue && !!modelValue}
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
                                                onChange={(option) => handleMultiSelect(field.value || [], option, field.onChange)}
                                                onValueChange={() => { }}
                                                selected={field.value}
                                                options={dataListEngineAndBody?.engine_vol || []}
                                                onOpen={(e: boolean) => queryKeyIsStateCategories({
                                                    filterApplication: {
                                                        ...isStateCategories?.filterApplication,
                                                        engine: {
                                                            value: "",
                                                            selected: {},
                                                            open: e,
                                                        }
                                                    }
                                                })}
                                                loading={isFetchingListEngineAndBody}
                                                typeSearch='search-client'
                                                title='Engine'
                                                placeholder='Search'
                                                classNameContent="rounded-none p-0 3xl:w-[312px] lg:w-[272px] md:w-[688px] w-[310px]"
                                                classNameArrow={`${isStateCategories.filterApplication.engine?.open ? 'rotate-180 text-[#07A6FF]' : ''}`}
                                                classNameButtonTrigger={`bg-white text-base rounded-none 3xl:h-14 h-12 w-full ${isStateCategories.filterApplication.engine?.open ? 'border-[#57A4FE]' : ''}`}
                                                classNameInputSearch='bg-white rounded-none border-t-0 border-x-0 border-b'
                                                disabled={!!brandValue && !!modelValue && !!yearValue}
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
                                    <FormItem className='lg:col-span-2 '>
                                        <FormControl>
                                            <SelectCustomSearch
                                                onChange={(option) => handleMultiSelect(field.value || [], option, field.onChange)}
                                                onValueChange={() => { }}
                                                selected={field.value}
                                                options={dataListEngineAndBody?.td_body || []}
                                                onOpen={(e: boolean) => queryKeyIsStateCategories({
                                                    filterApplication: {
                                                        ...isStateCategories?.filterApplication,
                                                        body: {
                                                            value: "",
                                                            selected: {},
                                                            open: e,
                                                        }
                                                    }
                                                })}
                                                loading={isFetchingListEngineAndBody}
                                                typeSearch='search-client'
                                                title='Body'
                                                placeholder='Search'
                                                classNameContent="rounded-none p-0 3xl:w-[312px] lg:w-[272px] md:w-[688px] w-[310px]"
                                                classNameArrow={`${isStateCategories.filterApplication.body?.open ? 'rotate-180 text-[#07A6FF]' : ''}`}
                                                classNameButtonTrigger={`bg-white text-base rounded-none 3xl:h-14 h-12 w-full ${isStateCategories.filterApplication.body?.open ? 'border-[#57A4FE]' : ''}`}
                                                classNameInputSearch='bg-white rounded-none border-t-0 border-x-0 border-b'
                                                disabled={!!brandValue && !!modelValue && !!yearValue}
                                            />
                                        </FormControl>
                                        {fieldState?.invalid && fieldState?.error && <FormMessage>{fieldState?.error?.message}</FormMessage>}
                                    </FormItem>
                                );
                            }}
                        />

                        <Button
                            type='submit'
                            className="text-white xl:col-span-1 lg:col-span-2 col-span-1 capitalize rounded-none 3xl:h-14 h-12 caret-transparent font-medium text-base bg-[#57A4FE] hover:bg-[#57A4FE]/80 px-8 py-0"
                        >
                            Tìm kiếm
                        </Button>
                    </form>
                </Form>
            </div>
            {
                (
                    dataListCodeApplication &&
                    <TableDetailCodeProduct data={dataListCodeApplication} />)
            }
        </div>
    )
}

export default SectionCategoriesFilterApplication