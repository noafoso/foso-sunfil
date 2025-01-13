'use client'
import SelectCustomNoSearch from '@/components/select/SelectCustomNoSearch'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useGetListCategories } from '@/managers/api-management/categories/useGetListCategories'
import { usePostContact } from '@/managers/api-management/contact/usePostContact'
import { useResizeStore } from '@/stores/useResizeStore'
import { IValueFormContact } from '@/types/contact/IContact'
import { regexPatterns } from '@/utils/regex/regex'
import Image from 'next/image'
import { FormEvent } from 'react'
import { useForm } from 'react-hook-form'
import { GrLinkNext } from "react-icons/gr"

const valueForm: IValueFormContact = {
    name: '',
    email: "",
    phone: "",
    company: "",
    products: "",
    budget: "",
    note: "",
}

const SectionFormContact = () => {
    const { isVisibleMobile } = useResizeStore()

    const form = useForm({ defaultValues: valueForm })

    const { data: listCategories } = useGetListCategories()

    const { onSubmit: onSubmitPostContact } = usePostContact()

    return (
        <div className='grid md:grid-cols-15 col-span-1 w-full lg:h-screen h-full'>
            <div className="md:col-span-5 h-full bg-[#F8F9F9] flex justify-center items-center lg:p-[92px] md:p-10 p-[60px]">
                <div className="aspect-square">
                    <Image
                        src={'/example/contact/left-no.png'}
                        width={1280}
                        height={1024}
                        alt='contact'
                        className='size-full object-contain drop-shadow-xl'
                    />
                </div>
            </div>
            <div className="md:col-span-10 bg-[#9EDAF4] relative flex flex-col 
            3xl:py-[104px] 2xl:py-[74px] xxl:py-[64px] xl:py-[64px] lg:py-[48px] md:py-[48px] py-[80px]  2xl:px-[145px] xxl:px-[104px] xl:px-[94px] lg:px-[88px] md:px-[64px] px-4
            xxl:gap-[64px] xl:gap-[44px] gap-12">
                <h1 className='text-[#1D1D1D] 2xl:text-[40px] xxl:text-[40px] xl:text-4xl lg:text-4xl text-3xl font-bold text-center'>Thông tin <span className='text-[#007790]'>Liên hệ</span></h1>
                <Form {...form}>
                    <form
                        // autoComplete='off'
                        className="relative z-10 flex flex-col xl:gap-12 gap-10"
                        onSubmit={(e: FormEvent<HTMLFormElement>) => {
                            e.preventDefault()
                            form.handleSubmit((data) => onSubmitPostContact(data, form))()
                        }}
                    >
                        <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-8 gap-6">
                            <FormField
                                control={form.control}
                                name="name"
                                rules={{
                                    required: "Vui lòng nhập họ và tên!",
                                }}
                                render={({ field, fieldState }) => {
                                    return (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    className={`${fieldState?.invalid && fieldState?.error
                                                        ? "border-b border-b-[#F15A5A]" : "border-b border-b-[#555555]"
                                                        } autofill:bg-red-500 custom-input  text-responsive font-medium text-[#000000] rounded-none border-x-0 border-t-0 bg-transparent placeholder:text-[#000000] 3xl:placeholder:text-lg placeholder:text-base focus-visible:ring-0 focus-visible:ring-offset-0 3xl:py-4 py-3 h-auto`}
                                                    placeholder="Họ và tên"
                                                    {...field}
                                                />
                                            </FormControl>
                                            {fieldState?.invalid && fieldState?.error && <FormMessage>{fieldState?.error?.message}</FormMessage>}
                                        </FormItem>
                                    );
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                rules={{
                                    required: "Vui lòng nhập email!",
                                    pattern: {
                                        value: regexPatterns.email,
                                        message: "Email không hợp lệ",
                                    },
                                }}
                                render={({ field, fieldState }) => {
                                    return (
                                        <FormItem>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        type="text"
                                                        className={`${fieldState?.invalid && fieldState?.error
                                                            ? "border-b border-b-[#F15A5A]" : "border-b border-b-[#555555]"
                                                            } text-responsive font-medium text-[#000000] rounded-none border-x-0 border-t-0 bg-transparent placeholder:text-[#000000] 3xl:placeholder:text-lg placeholder:text-base focus-visible:ring-0 focus-visible:ring-offset-0 3xl:py-4 py-3 h-auto`}
                                                        placeholder="Email"
                                                        {...field}
                                                    />
                                                    <Image src={'/icons/contact/email.png'} width={24} height={24} alt='' className='absolute right-3 top-1/2 -translate-y-1/2' />
                                                </div>
                                            </FormControl>
                                            {fieldState?.invalid && fieldState?.error && <FormMessage>{fieldState?.error?.message}</FormMessage>}
                                        </FormItem>
                                    );
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                rules={{
                                    required: "Vui lòng nhập số điện thoại!",
                                    minLength: {
                                        value: 10,
                                        message: "Số điện thoại phải có ít nhất 10 số!"
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Số điện thoại không được dài hơn 10 số!"
                                    },
                                    pattern: {
                                        value: regexPatterns.phone,
                                        message: "Số điện thoại không hợp lệ",
                                    },
                                }}
                                render={({ field, fieldState }) => {
                                    return (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    className={`${fieldState?.invalid && fieldState?.error
                                                        ? "border-b border-b-[#F15A5A]" : "border-b border-b-[#555555]"
                                                        } text-responsive font-medium text-[#000000] rounded-none border-x-0 border-t-0 bg-transparent placeholder:text-[#000000] 3xl:placeholder:text-lg placeholder:text-base focus-visible:ring-0 focus-visible:ring-offset-0 3xl:py-4 py-3 h-auto`}
                                                    placeholder="Số điện thoại"
                                                    {...field}
                                                />
                                            </FormControl>
                                            {fieldState?.invalid && fieldState?.error && <FormMessage>{fieldState?.error?.message}</FormMessage>}
                                        </FormItem>
                                    );
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="company"
                                rules={{
                                    required: "Vui lòng nhập tên công ty!",
                                }}
                                render={({ field, fieldState }) => {
                                    return (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    className={`${fieldState?.invalid && fieldState?.error
                                                        ? "border-b border-b-[#F15A5A]" : "border-b border-b-[#555555]"
                                                        } text-responsive font-medium text-[#000000] rounded-none border-x-0 border-t-0 bg-transparent placeholder:text-[#000000] 3xl:placeholder:text-lg placeholder:text-base focus-visible:ring-0 focus-visible:ring-offset-0 3xl:py-4 py-3 h-auto`}
                                                    placeholder="Tên Công Ty"
                                                    {...field}
                                                />
                                            </FormControl>
                                            {fieldState?.invalid && fieldState?.error && <FormMessage>{fieldState?.error?.message}</FormMessage>}
                                        </FormItem>
                                    );
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="products"
                                rules={{
                                    required: "Vui lòng chọn sản phẩm!",
                                }}
                                render={({ field, fieldState }) => {
                                    return (
                                        <FormItem>
                                            <FormControl>
                                                <SelectCustomNoSearch
                                                    data={listCategories?.map((item) => ({
                                                        ...item,
                                                        label: item.name,
                                                        value: item.id,
                                                        sub: false
                                                    })) || []}
                                                    handleSelectChange={(e: string) => field.onChange(e)}
                                                    value={field.value}
                                                    placeholder="Chọn sản phẩm"
                                                    classNameTrigger={`${fieldState?.invalid && fieldState?.error
                                                        ? "border-b-[#F15A5A]"
                                                        : "border-b-[#555555]"}  text-[#000000] bg-transparent rounded-none border-t-0 border-x-0 rouded-0`}
                                                />
                                            </FormControl>
                                            {fieldState?.invalid && fieldState?.error && <FormMessage>{fieldState?.error?.message}</FormMessage>}
                                        </FormItem>
                                    );
                                }}
                            />


                            <FormField
                                control={form.control}
                                name="budget"
                                rules={{
                                    required: "Vui lòng nhập ngân sách!",
                                }}
                                render={({ field, fieldState }) => {
                                    return (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    className={`${fieldState?.invalid && fieldState?.error
                                                        ? "border-b border-b-[#F15A5A]" : "border-b border-b-[#555555]"
                                                        } text-responsive font-medium text-[#000000] rounded-none border-x-0 border-t-0 bg-transparent placeholder:text-[#000000] 3xl:placeholder:text-lg placeholder:text-base focus-visible:ring-0 focus-visible:ring-offset-0 py-[18px] h-auto`}
                                                    placeholder="Ngân sách"
                                                    {...field}
                                                    onChange={(e) => {
                                                        const value = e.target.value.replace(/[^0-9]/g, '');
                                                        field.onChange(value);
                                                    }}
                                                    onBlur={() => {
                                                        if (!field.value) return
                                                        const formattedValue = parseFloat(field.value.replace(/,/g, '')).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
                                                        field.onChange(formattedValue);
                                                    }}
                                                />
                                            </FormControl>
                                            {fieldState?.invalid && fieldState?.error && <FormMessage>{fieldState?.error?.message}</FormMessage>}
                                        </FormItem>
                                    );
                                }}
                            />


                            <FormField
                                control={form.control}
                                name="note"
                                rules={{
                                }}
                                render={({ field, fieldState }) => {
                                    return (
                                        <FormItem className='md:col-span-2'>
                                            <FormControl>
                                                <Textarea
                                                    {...field}
                                                    placeholder='Nội dung ghi chú'
                                                    className='border-[#555555] focus:outline-none focus:ring-offset-0 rounded-none resize-none xl:h-[150px] lg:h-[100px] h-[150px] w-full py-4 px-6  text-responsive font-normal text-[#000000]' />
                                            </FormControl>
                                            {fieldState?.invalid && fieldState?.error && <FormMessage>{fieldState?.error?.message}</FormMessage>}
                                        </FormItem>
                                    );
                                }}
                            />

                        </div>
                        <Button
                            type='submit'
                            className="flex items-center bg-transparent hover:bg-transparent shadow-none md:justify-start justify-center gap-3 cursor-pointer w-full group"
                        >
                            <div className="bg-[#00ADEF] p-[14px] rounded-full w-fit group-hover:scale-110 transition-all duration-150 ease-linear">
                                <GrLinkNext className='text-lg text-white font-medium' />
                            </div>
                            <h1 className='text-[#007790] font-medium text-lg'>Gửi đi</h1>
                        </Button>
                    </form>
                </Form>

                <div className="absolute left-0 top-1/2  xxl:-translate-y-[42%] lg:-translate-y-[40%] md:-translate-y-[35%] -translate-y-[11.5%] size-full z-0">
                    <Image
                        src={isVisibleMobile ? "/background/contact/elip-mobi.png" : '/background/contact/elip.png'}
                        width={1280}
                        height={1024}
                        alt=''
                        className='xl:aspect-3/2 lg:aspect-3/2' />
                </div>
            </div>
        </div>
    )
}

export default SectionFormContact