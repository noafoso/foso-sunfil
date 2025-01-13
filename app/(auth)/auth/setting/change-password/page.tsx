'use client'

import ButtonAnimation from '@/components/button/ButtonAnimation'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useShowPasswordMulti } from '@/hooks/hooks/password/useShowPasswordMulti'
import { usePostChangePassword } from '@/managers/api-management/auth/account/usePostChangePassword'
import { IChangePassWordFormSetup } from '@/types/auth/IAuth'
import { variantButtonPressZoom } from '@/utils/variants-animation/VariantsAnimation'
import { Eye, EyeSlash, Lock1 } from 'iconsax-react'
import React, { FormEvent } from 'react'

type Props = {}

const initialFormValue: IChangePassWordFormSetup = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
}

const ChangePasswordComponent = (props: Props) => {
    const { showPassword, togglePasswordVisibility } = useShowPasswordMulti()

    const { form, newPassword, isLoading, onSubmit } = usePostChangePassword(initialFormValue)

    const IconEyes = ({ onClick, show }: any) => {
        const className = "3xl:size-6 size-5 absolute top-1/2 -translate-y-1/2 right-4 text-[#808990] cursor-pointer focus-visible"
        return (
            <React.Fragment>
                {show ? <Eye onClick={onClick} className={className} /> : <EyeSlash onClick={onClick} className={className} />}
            </React.Fragment>
        )
    }

    return (
        <div className='3xl:p-8 p-6 flex flex-col 3xl:gap-6 gap-4 h-full'>
            <div className='space-y-1'>
                <h1 className='text-title text-[#3E424E] font-bold'>
                    Change Password
                </h1>

                <p className='text-sm-default text-neutral-500 font-medium'>
                    Please enter your new password. We will email you an OTP (One Time Passcode) to verify your request
                </p>
            </div>


            <Form {...form}>
                <form
                    className={`grid grid-cols-2 3xl:gap-6 gap-4`}
                    onSubmit={(e: FormEvent<HTMLFormElement>) => {
                        e.preventDefault()
                        form.handleSubmit((data) => onSubmit(data))()
                    }}
                >
                    {/* <FormField
                        control={form.control}
                        name="oldPassword"
                        rules={{
                            required: dataLang?.h_auth_information_change_password_old_password_required ?? "h_auth_information_change_password_old_password_required",
                            minLength: {
                                value: 8,
                                message: dataLang?.h_auth_information_change_password_min_length ?? "h_auth_information_change_password_min_length",
                            },
                        }}
                        render={({ field, fieldState }) => (
                            <FormItem className='col-span-2 flex flex-col w-full'>
                                <FormLabel
                                    htmlFor="oldPassword"
                                    className="3xl:text-sm text-xs font-semibold text-[#505458] w-fit"
                                >
                                    {dataLang?.h_auth_information_change_password_old_password ?? "h_auth_information_change_password_old_password"} <span className="text-[#FA3434]">*</span>
                                </FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            id="oldPassword"
                                            className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A]" : "border border-[#EBEDEE]"} 
                                            text-[#272727] bg-transparent text-sm-default w-full rounded-[40px] 3xl:h-14 h-12 pl-12 shadow-none placeholder:text-[#B2BABD] placeholder:font-light focus:ring-none focus:outline-none`}
                                            placeholder={dataLang?.h_auth_information_change_password_old_password ?? "h_auth_information_change_password_old_password"}
                                            type={showPassword.showOldPassword ? "text" : "password"}
                                            {...field}
                                        />
                                        <Lock1 className="text-[#808990] 3xl:size-6 size-5 absolute left-4 top-1/2 -translate-y-1/2" />
                                        <IconEyes
                                            onClick={() => togglePasswordVisibility("showOldPassword")}
                                            show={showPassword.showOldPassword}
                                        />
                                    </div>
                                </FormControl>
                                {fieldState?.invalid && fieldState?.error && (
                                    <FormMessage>{fieldState?.error?.message}</FormMessage>
                                )}
                            </FormItem>
                        )}
                    /> */}

                    <FormField
                        control={form.control}
                        name="newPassword"
                        rules={{
                            required: "Please enter a new password!",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters!",
                            },
                        }}
                        render={({ field, fieldState }) => (
                            <FormItem className='lg:col-span-1 col-span-2 flex flex-col w-full'>
                                <FormLabel
                                    htmlFor="newPassword"
                                    className="3xl:text-sm text-xs font-semibold text-[#505458] w-fit"
                                >
                                    New Password
                                </FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            id="newPassword"
                                            className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A]" : "border border-[#EBEDEE] focus:border-[#07A6FF]"} 
                                            text-[#272727] bg-transparent text-sm-default w-full rounded-[40px] 3xl:h-14 h-12 pl-12 shadow-none placeholder:text-[#B2BABD] placeholder:font-light focus-visible:ring-0 focus-visible:outline-none`}
                                            placeholder={"Confirm New Password"}
                                            type={showPassword.showNewPassword ? "text" : "password"}
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
                            required: "Please enter a password!",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters!",
                            },
                            validate: (value) => value === newPassword || ("Passwords do not match"),
                        }}
                        render={({ field, fieldState }) => (
                            <FormItem className='lg:col-span-1 col-span-2 flex flex-col w-full'>
                                <FormLabel
                                    htmlFor="confirmPassword"
                                    className="3xl:text-sm text-xs font-semibold text-[#505458] w-fit"
                                >
                                    Confirm New Password
                                </FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            id="confirmPassword"
                                            className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A]" : "border border-[#EBEDEE] focus:border-[#07A6FF]"} 
                                            text-[#272727] bg-transparent text-sm-default w-full rounded-[40px] 3xl:h-14 h-12 pl-12 shadow-none placeholder:text-[#B2BABD] placeholder:font-light focus-visible:ring-0 focus-visible:outline-none`}
                                            placeholder={"Confirm New Password"}
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

                    <div className='col-span-2 flex items-center justify-end 3xl:space-y-6 space-y-4'>
                        <ButtonAnimation
                            disabled={isLoading}
                            isStateloading={isLoading}
                            type='submit'
                            title_button={"Update"}
                            variant={variantButtonPressZoom}
                            className='space-x-2 flex items-center bg-transparent text-[#272727] border-2 border-[#272727] hover:opacity-60 rounded-full 3xl:text-lg text-base font-medium w-fit px-6 py-2 h-auto transition-all duration-150 ease-linear disabled:hover:opacity-100 disabled:bg-[#333538]/40 disabled:text-white disabled:cursor-not-allowed disabled:pointer-events-auto'
                        />
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default ChangePasswordComponent