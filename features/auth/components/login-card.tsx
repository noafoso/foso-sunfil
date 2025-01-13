'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
// import { useLoginRegister } from '@/hooks/auth/useLoginRegister'
import Image from 'next/image'
import { FormEvent } from 'react'
import { useForm } from 'react-hook-form'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { useShowHiddenPassword } from '@/hooks/hooks/password/useShowPassword'
import ButtonLoading from '@/components/button/ButtonLoading'
import { regexPatterns } from '@/utils/regex/regex'

import { Call, Eye, EyeSlash, Lock1 } from 'iconsax-react'

import { FaApple, FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
// import { usePostLoginOtpRegister } from '@/managers/api-management/auth/normal/usePostLoginOtpRegister'
import ButtonAnimation from '@/components/button/ButtonAnimation'
import { variantButtonPressZoom } from '@/utils/variants-animation/VariantsAnimation'
import { NumericFormatCore } from '@/lib/numericFormat'
import { useDialogStore } from '@/stores/useDialogStore'
import { usePostLoginOtpRegister } from '@/managers/api-management/auth/normal/usePostLoginOtpRegister'

const LoginComponent = () => {
    const form = useForm({
        defaultValues: {
            phone: '',
            password: '',
        }
    })

    const { setStatusDialog } = useDialogStore()

    const { showPassword, togglePasswordVisibility } = useShowHiddenPassword()

    // const { isLoading, onSubmit } = usePostLoginOtpRegister()

    const { onSubmit: onSubmitLogin, isLoading:isLoadingLogin} = usePostLoginOtpRegister()

    return (
        <Form {...form}>
            <form className={`flex flex-col xl:gap-4 gap-4 p-0.5`} onSubmit={(e: FormEvent<HTMLFormElement>) => {
                e.preventDefault()

                // form.handleSubmit((data) => onSubmit(data))()
                form.handleSubmit((data) => onSubmitLogin(data, 'login'))()
            }}>
                <FormField
                    control={form.control}
                    name="phone"
                    rules={{
                        required: "Vui lòng nhập số điện thoại!",
                        pattern: {
                            value: regexPatterns.lengthPhone,
                            message: "Số điện thoại yêu cầu 10 số!",
                        },
                        validate: {
                            isValidPhone: (value) =>
                                regexPatterns.phone.test(value) || "Số điện thoại không hợp lệ!",
                        },
                    }}
                    render={({ field: { onChange, onBlur, ref }, fieldState }) => {
                        return (
                            <FormItem className='flex flex-col w-full'>
                                <FormLabel
                                    htmlFor="number_phone"
                                    className="text-sm-default font-semibold text-[#505458] w-fit"
                                >
                                    Số điện thoại <span className="text-[#FA3434]">*</span>
                                </FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <NumericFormatCore
                                            id="number_phone"
                                            name="phone"
                                            getInputRef={ref}
                                            className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A]" : "border border-[#EBEDEE] focus:border-[#07A6FF]"}
                                            text-[#272727] bg-transparent text-sm-default w-full rounded-[40px] 3xl:h-14 h-12 pl-12 placeholder:text-[#B2BABD] placeholder:font-light focus:ring-0 focus:outline-none`}
                                            placeholder="Số điện thoại"
                                            thousandSeparator={' '}
                                            maxLength={12}
                                            onValueChange={(values: any) => {
                                                const { value } = values;
                                                onChange(`${value}`); // Combine country code with phone number
                                            }}
                                            allowLeadingZeros={true}
                                            onBlur={onBlur} // Ensure onBlur is called for validation
                                        />
                                        <Call className="text-[#808990] 3xl:size-6 size-5 absolute left-4 top-1/2 -translate-y-1/2" />
                                    </div>
                                </FormControl>

                                {fieldState?.invalid && fieldState?.error && (
                                    <FormMessage>{fieldState?.error?.message}</FormMessage>
                                )}
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    control={form.control}
                    name="password"
                    rules={{
                        required: "Vui lòng nhập mật khẩu!",
                        minLength: {
                            value: 6,
                            message: "Mật khẩu phải có ít nhất 6 ký tự!",
                        },
                    }}
                    render={({ field, fieldState }) => (
                        <FormItem className='flex flex-col w-full'>
                            <FormLabel
                                htmlFor="password"
                                className="text-sm-default font-semibold text-[#505458] w-fit"
                            >
                                Mật khẩu <span className="text-[#FA3434]">*</span>
                            </FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A]" : "border border-[#EBEDEE] focus:border-[#07A6FF]"} 
                                            text-[#272727] bg-transparent text-sm-default w-full rounded-[40px] 3xl:h-14 h-12 pl-12 placeholder:text-[#B2BABD] placeholder:font-light focus-visible:ring-0 focus-visible:outline-none`}
                                        placeholder="Mật khẩu"
                                        type={showPassword ? "text" : "password"}
                                        {...field}
                                    />
                                    <Lock1 className="text-[#808990] 3xl:size-6 size-5 absolute left-4 top-1/2 -translate-y-1/2" />
                                    {
                                        showPassword ?
                                            (
                                                <Eye
                                                    onClick={() => togglePasswordVisibility('password')}
                                                    className="3xl:size-6 size-5 absolute top-1/2 -translate-y-1/2 right-4 text-[#808990] cursor-pointer focus-visible"
                                                />
                                            )
                                            :
                                            (
                                                <EyeSlash
                                                    onClick={() => togglePasswordVisibility('password')}
                                                    className="3xl:size-6 size-5 absolute top-1/2 -translate-y-1/2 right-4 text-[#808990] cursor-pointer focus-visible"
                                                />
                                            )
                                    }
                                </div>
                            </FormControl>
                            {fieldState?.invalid && fieldState?.error && (
                                <FormMessage>{fieldState?.error?.message}</FormMessage>
                            )}
                        </FormItem>
                    )}
                />

                <div className='flex items-center justify-end'>
                    <div
                        className="text-[#07A6FF] hover:text-[#07A6FF]/90 font-semibold text-sm-default w-fit custom-transition cursor-pointer"
                        onClick={() => setStatusDialog("forgot_password")}
                    >
                        Quên mật khẩu
                    </div>
                </div>

                <div className='3xl:space-y-6 space-y-4'>
                    <ButtonAnimation
                        isStateloading={isLoadingLogin}
                        disabled={isLoadingLogin}
                        type='submit'
                        title_button='Đăng nhập'
                        className='flex items-center justify-center gap-2 bg-[#333538] text-white rounded-full 2xl:text-lg text-base font-normal w-full md:py-3 py-2.5 h-auto hover:opacity-80 transition-all duration-150 ease-linear'
                    />

                    {/* <div className='flex items-center justify-between gap-5'>
                        <div className='ml-10 w-[40%] h-[1px] bg-[#EBEDEE]' />
                        <div className='w-[10%] text-sm-default text-[#919BA0] font-light'>Hoặc</div>
                        <div className='mr-10 w-[40%] h-[1px] bg-[#EBEDEE]' />
                    </div>

                    <div className="flex items-center gap-4">
                        <ButtonAnimation
                            // onClick={() => onSubmit({}, 'loginGoogle')}
                            title_button={"Google"}
                            icon={
                                <div className="3xl:max-w-7 max-w-6">
                                    <FcGoogle className='3xl:size-7 size-6 object-contain' />
                                </div>
                            }
                            type='button'
                            isStateloading={false}
                            disabled={false}
                            className='border-[#E6E8EC] border rounded-full bg-white cursor-pointer hover:bg-gray-100
                                md:py-3 py-2.5 w-full flex gap-x-1.5 justify-center items-center'
                            variant={variantButtonPressZoom}
                        />

                        <ButtonAnimation
                            // onClick={() => onSubmit({}, 'loginFacebook')}
                            title_button={"Facebook"}
                            icon={
                                <div className="3xl:max-w-7 max-w-6">
                                    <FaFacebook className='3xl:size-7 size-6 object-contain text-[#1877FE]' />
                                </div>
                            }
                            type='button'
                            isStateloading={false}
                            disabled={false}
                            className='border-[#E6E8EC] border rounded-full bg-white cursor-pointer hover:bg-gray-100
                                md:py-3 py-2.5 w-full flex gap-x-1.5 justify-center items-center'
                            variant={variantButtonPressZoom}
                        />
                    </div> */}

                    <div className="text-[#61666C] font-light text-base leading-5 text-center">
                        <h1>Bạn chưa là thành viên?
                            <span
                                onClick={() => setStatusDialog('register')}
                                className='font-semibold cursor-pointer pl-1 text-[#07A6FF] hover:text-[#07A6FF]/90 custom-transition'
                            >
                                Đăng Ký Ngay
                            </span>
                        </h1>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default LoginComponent