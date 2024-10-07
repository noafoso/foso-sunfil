import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toastCore } from '@/lib/toast'
import { FormEvent } from 'react'
import { useForm } from 'react-hook-form'
import { MdClear } from "react-icons/md"
import { useStateCategories } from '../../_state/useStateCategories'

import ButtonAnimation from '@/components/button/ButtonAnimation'

const SectionCategoriesFilterChassis = () => {
    const form = useForm({
        defaultValues: {
            search: ''
        }
    })

    const { queryKeyIsStateCategories } = useStateCategories()

    const onSubmit = (data: any) => {
        queryKeyIsStateCategories({
            filterProduct: {
                value: {
                    text: data?.search
                }
            }
        })
        toastCore.error('Tính năng đang phát triển!')
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
                                                className={`${fieldState?.invalid && fieldState?.error
                                                    ? "border rounded-md border-[#F15A5A]" : "border-b rounded-md border-[#1F1F1F33]"
                                                    } bg-white text-base focus:border-[#57A4FE] placeholder:text-[#0000004D] rounded-none placeholder:text-base focus-visible:ring-0 text-black focus-visible:ring-offset-0 py-3 h-auto`}
                                                placeholder="VIN or Chassis"
                                                {...field}
                                            />
                                            {
                                                field.value && (
                                                    <MdClear
                                                        onClick={() => {
                                                            queryKeyIsStateCategories({
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

                    <ButtonAnimation
                        title_button="Tìm kiếm"
                        className="text-white capitalize rounded-none h-fit font-medium text-base border border-[#57A4FE] bg-[#57A4FE] hover:bg-[#57A4FE]/80 px-8 py-3"
                    />
                </form>
            </Form>
        </div>
    )
}

export default SectionCategoriesFilterChassis