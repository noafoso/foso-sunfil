'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React, { FormEvent } from 'react'
import { useForm } from 'react-hook-form'

import { useDialogStore } from '@/stores/useDialogStore'
import { useShowHiddenPassword } from '@/hooks/password/useShowPassword'
import ButtonLoading from '@/components/button/ButtonLoading'
import { regexPatterns } from '@/utils/regex/regex'

import { NumericFormatCore } from '@/lib/numericFormat'
import { Call, Eye, EyeSlash, Lock1, Sms, UserEdit } from 'iconsax-react'

import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import ButtonAnimation from '@/components/button/ButtonAnimation'
import { useShowPasswordMulti } from '@/hooks/password/useShowPasswordMulti'
import { usePostLoginOtpRegister } from '@/managers/api-management/auth/normal/usePostLoginOtpRegister'
// import { usePostLoginOtpRegister } from '@/managers/api-management/auth/normal/usePostLoginOtpRegister'

const RegisterComponent = () => {
    const { showPassword, togglePasswordVisibility } = useShowPasswordMulti()
    const form = useForm({
        defaultValues: {
            fullname: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
            policy: false,
        }
    })

    const { setStatusDialog } = useDialogStore()

    const { onSubmit: onSubmitLogin, isLoading: isLoadingLogin } = usePostLoginOtpRegister()
    const password = form.watch("password", "");

    const IconEyes = ({ onClick, show }: any) => {
        const className = "3xl:size-6 size-5 absolute top-1/2 -translate-y-1/2 right-4 text-[#808990] cursor-pointer focus-visible"
        return (
            <React.Fragment>
                {show ? <Eye onClick={onClick} className={className} /> : <EyeSlash onClick={onClick} className={className} />}
            </React.Fragment>
        )
    }

    return (
        <Form {...form}>
            <form
                className={`flex flex-col 3xl:gap-6 gap-4 p-0.5`}
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                    form.handleSubmit((data) => onSubmitLogin(data, 'register'))()
                }}
            >
                <FormField
                    control={form.control}
                    name="fullname"
                    rules={{
                        required: "Please enter your name!",
                    }}
                    render={({ field, fieldState }) => (
                        <FormItem className='xl:col-span-1 col-span-2 flex flex-col w-full'>
                            <FormLabel
                                htmlFor="fullname"
                                className="3xl:text-base text-sm font-semibold text-[#505458] w-fit"
                            >
                                Your Name <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        id="fullname"
                                        type="text"
                                        className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A]" : "border border-[#EBEDEE] focus:border-[#07A6FF]"} 
                                            text-[#272727] bg-transparent text-sm-default w-full rounded-[40px] 3xl:h-14 h-12 pl-12 shadow-none placeholder:text-[#B2BABD] placeholder:font-light focus-visible:ring-0 focus-visible:outline-none`}
                                        placeholder="Enter your name..."
                                        {...field}
                                    />
                                    <UserEdit className="text-[#808990] 3xl:size-6 size-5 absolute left-4 top-1/2 -translate-y-1/2" />
                                </div>
                            </FormControl>
                            {
                                fieldState?.invalid && fieldState?.error &&
                                (<FormMessage>{fieldState?.error?.message}</FormMessage>)
                            }
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone"
                    rules={{
                        required: "Please enter your phone number!",
                        pattern: {
                            value: regexPatterns.lengthPhone,
                            message: "The phone number must be 10 digits!",
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
                                    className="3xl:text-sm text-xs font-semibold text-[#505458] w-fit"
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
                                            text-[#272727] bg-transparent text-sm-default w-full rounded-[40px] 3xl:h-14 h-12 pl-12 placeholder:text-[#B2BABD] placeholder:font-light focus-visible:ring-0 focus-visible:outline-none`}
                                            placeholder="Enter phone number..."
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
                    name="email"
                    rules={{
                        required: false,
                        pattern: {
                            value: regexPatterns.email,
                            message: "Invalid email address!",
                        },
                    }}
                    render={({ field, fieldState }) => (
                        <FormItem className='flex flex-col w-full'>
                            <FormLabel
                                htmlFor="email"
                                className="3xl:text-sm text-xs font-semibold text-[#505458] w-fit"
                            >
                                Email
                            </FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        id="email"
                                        className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A]" : "border border-[#EBEDEE] focus:border-[#07A6FF]"} 
                                            text-[#272727] bg-transparent text-sm-default w-full rounded-[40px] 3xl:h-14 h-12 pl-12 shadow-none placeholder:text-[#B2BABD] placeholder:font-light focus-visible:ring-0 focus-visible:outline-none`}
                                        placeholder="Enter your email..."
                                        type="text"
                                        {...field}
                                    />
                                    <Sms className="text-[#808990] 3xl:size-6 size-5 absolute left-4 top-1/2 -translate-y-1/2" />
                                </div>
                            </FormControl>
                            {fieldState?.invalid && fieldState?.error && (
                                <FormMessage>{fieldState?.error?.message}</FormMessage>
                            )}
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    rules={{
                        required: "Please enter your password!",
                        minLength: {
                            value: 8,
                            message: "The password must be 8 digits!",
                        },
                    }}
                    render={({ field, fieldState }) => (
                        <FormItem className='flex flex-col w-full'>
                            <FormLabel
                                htmlFor="password"
                                className="3xl:text-sm text-xs font-semibold text-[#505458] w-fit"
                            >
                                Password <span className="text-[#FA3434]">*</span>
                            </FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A]" : "border border-[#EBEDEE] focus:border-[#07A6FF]"} 
                                            text-[#272727] bg-transparent text-sm-default w-full rounded-[40px] 3xl:h-14 h-12 pl-12 shadow-none placeholder:text-[#B2BABD] placeholder:font-light focus-visible:ring-0 focus-visible:outline-none`}
                                        placeholder="Enter password..."
                                        type={showPassword?.showNewPassword ? "text" : "password"}
                                        {...field}
                                    />
                                    <Lock1 className="text-[#808990] 3xl:size-6 size-5 absolute left-4 top-1/2 -translate-y-1/2" />
                                    <IconEyes
                                        onClick={() => togglePasswordVisibility("showNewPassword")}
                                        show={showPassword.showNewPassword}
                                    />
                                </div>
                            </FormControl>
                            {fieldState?.invalid && fieldState?.error && (
                                <FormMessage>{fieldState?.error?.message}</FormMessage>
                            )}
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    rules={{
                        required: "Vui lòng nhập mật khẩu!",
                        minLength: {
                            value: 8,
                            message: "The password must be 8 digits!",
                        },
                        validate: (value) => value === password || "Passwords do not match",
                    }}
                    render={({ field, fieldState }) => (
                        <FormItem className='lg:col-span-1 col-span-2 flex flex-col w-full'>
                            <FormLabel
                                htmlFor="confirmPassword"
                                className="3xl:text-sm text-xs font-semibold text-[#505458] w-fit"
                            >
                                Confirm Password <span className="text-[#FA3434]">*</span>
                            </FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        id="confirmPassword"
                                        className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A]" : "border border-[#EBEDEE] focus:border-[#07A6FF]"} 
                                            text-[#272727] bg-transparent text-sm-default w-full rounded-[40px] 3xl:h-14 h-12 pl-12 shadow-none placeholder:text-[#B2BABD] placeholder:font-light focus-visible:ring-0 focus-visible:outline-none`}
                                        placeholder="Enter confirm password..."
                                        type={showPassword.showConfirmPassword ? "text" : "password"}
                                        {...field}
                                    />
                                    <Lock1 className="text-[#808990] 3xl:size-6 size-5 absolute left-4 top-1/2 -translate-y-1/2" />
                                    <IconEyes
                                        onClick={() => togglePasswordVisibility("showConfirmPassword")}
                                        show={showPassword.showConfirmPassword}
                                    />
                                </div>
                            </FormControl>
                            {fieldState?.invalid && fieldState?.error && (
                                <FormMessage>{fieldState?.error?.message}</FormMessage>
                            )}
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="policy"
                    rules={{
                        required: {
                            value: true,
                            message: "Please agree to the terms and conditions!"
                        }
                    }}
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormControl>
                                <div className="relative">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="check"
                                            className="3xl:size-[18px] size-4 text-white border-[#9EA1AE] data-[state=checked]:bg-[#07A6FF]/10 data-[state=checked]:border-[#07A6FF] data-[state=checked]:text-[#07A6FF] data-[state=checked]:font-semibold"
                                            checked={field.value}
                                            onCheckedChange={(checked: boolean) => field.onChange(checked)}
                                        />
                                        <Label
                                            htmlFor="check"
                                            // onClick={() => field.onChange(checked)}
                                            className="text-[#090D20] text-sm-default cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 caret-transparent"
                                        >
                                            I agree to the terms and policies
                                            <span className="text-[#F15A5A]">*</span>
                                        </Label>
                                    </div>
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
                        disabled={!form.getValues("policy") || isLoadingLogin}
                        isStateloading={isLoadingLogin}
                        type='submit'
                        title_button='Register'
                        className='flex items-center justify-center gap-2 bg-[#333538] text-white rounded-full 3xl:text-lg text-base font-normal w-full md:py-3 py-2.5 h-auto hover:opacity-80 transition-all duration-150 ease-linear disabled:hover:opacity-100 disabled:bg-[#333538]/40 disabled:text-white disabled:cursor-not-allowed disabled:pointer-events-auto'
                    />

                    {/* <div className='flex items-center justify-between gap-5'>
                        <div className='ml-10 w-[40%] h-[1px] bg-[#EBEDEE]' />
                        <div className='w-[10%] text-sm-default text-[#919BA0] font-light'>Hoặc</div>
                        <div className='mr-10 w-[40%] h-[1px] bg-[#EBEDEE]' />
                    </div>

                    <div className="flex items-center gap-4">
                        <ButtonAnimation
                            // onClick={() => onSubmit({}, 'loginGoogle')}
                            title_button="Google"
                            icon={
                                <div className="3xl:max-w-7 max-w-6">
                                    <FcGoogle className='3xl:size-7 size-6 object-contain' />
                                </div>
                            }
                            type='button'
                            // isStateloading={isLoading}
                            // disabled={isLoading}
                            className='border-[#E6E8EC] border rounded-full bg-white cursor-pointer hover:bg-gray-100
                                md:py-3 py-2.5 w-full flex gap-x-1.5 justify-center items-center'
                            variant={variantButtonPressZoom}
                        />

                        <ButtonAnimation
                            // onClick={() => onSubmit({}, 'loginFacebook')}
                            title_button="Facebook"
                            icon={
                                <div className="3xl:max-w-7 max-w-6">
                                    <FaFacebook className='3xl:size-7 size-6 object-contain text-[#1877FE]' />
                                </div>
                            }
                            type='button'
                            // isStateloading={isLoading}
                            // disabled={isLoading}
                            className='border-[#E6E8EC] border rounded-full bg-white cursor-pointer hover:bg-gray-100
                                md:py-3 py-2.5 w-full flex gap-x-1.5 justify-center items-center'
                            variant={variantButtonPressZoom}
                        />
                    </div> */}

                    <div className="text-[#61666C] font-light text-base leading-5 text-center">
                        <h1>You already have an account?
                            <span
                                onClick={() => setStatusDialog('login')}
                                className='font-semibold cursor-pointer pl-1 text-[#07A6FF] hover:text-[#07A6FF]/90 custom-transition'
                            >
                                Login
                            </span>
                        </h1>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default RegisterComponent