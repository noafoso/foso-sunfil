'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
// import { useLoginRegister } from '@/hooks/auth/useLoginRegister'
import Image from 'next/image'
import { FormEvent } from 'react'
import { useForm } from 'react-hook-form'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { useShowHiddenPassword } from '@/hooks/password/useShowPassword'
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

    const { onSubmit: onSubmitLogin, isLoading: isLoadingLogin } = usePostLoginOtpRegister()

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
                        required: "Please enter your phone number!",
                        pattern: {
                            value: regexPatterns.lengthPhone,
                            message: "The phone number must contain 10 digits!",
                        },
                        validate: {
                            isValidPhone: (value) =>
                                regexPatterns.phone.test(value) || "Invalid phone number!",
                        },
                    }}
                    render={({ field: { onChange, onBlur, ref }, fieldState }) => {
                        return (
                            <FormItem className='flex flex-col w-full'>
                                <FormLabel
                                    htmlFor="number_phone"
                                    className="text-sm-default font-semibold text-[#505458] w-fit"
                                >
                                    Phone Number <span className="text-[#FA3434]">*</span>
                                </FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <NumericFormatCore
                                            id="number_phone"
                                            name="phone"
                                            getInputRef={ref}
                                            className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A]" : "border border-[#EBEDEE] focus:border-[#07A6FF]"}
                                            text-[#272727] bg-transparent text-sm-default w-full rounded-[40px] 3xl:h-14 h-12 pl-12 placeholder:text-[#B2BABD] placeholder:font-light focus:ring-0 focus:outline-none`}
                                            placeholder="Enter phonenumber..."
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
                        required: "Please enter your password!",
                        minLength: {
                            value: 8,
                            message: "The password must have at least 8 characters!",
                        },
                    }}
                    render={({ field, fieldState }) => (
                        <FormItem className='flex flex-col w-full'>
                            <FormLabel
                                htmlFor="password"
                                className="text-sm-default font-semibold text-[#505458] w-fit"
                            >
                                Password <span className="text-[#FA3434]">*</span>
                            </FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A]" : "border border-[#EBEDEE] focus:border-[#07A6FF]"} 
                                            text-[#272727] bg-transparent text-sm-default w-full rounded-[40px] 3xl:h-14 h-12 pl-12 placeholder:text-[#B2BABD] placeholder:font-light focus-visible:ring-0 focus-visible:outline-none`}
                                        placeholder="Enter password..."
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

                <div className='3xl:space-y-6 space-y-4'>
                    <ButtonAnimation
                        isStateloading={isLoadingLogin}
                        disabled={isLoadingLogin}
                        type='submit'
                        title_button='Login'
                        className='flex items-center justify-center gap-2 bg-[#333538] text-white rounded-full 2xl:text-lg text-base font-normal w-full md:py-3 py-2.5 h-auto hover:opacity-80 transition-all duration-150 ease-linear'
                    />

                    <div className="text-[#61666C] font-light text-base leading-5 text-center">
                        <h1>You are not a member yet?
                            <span
                                onClick={() => setStatusDialog('register')}
                                className='font-semibold cursor-pointer pl-1 text-[#07A6FF] hover:text-[#07A6FF]/90 custom-transition'
                            >
                                Register Now
                            </span>
                        </h1>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default LoginComponent