'use client'
import ButtonAnimation from '@/components/button/ButtonAnimation';
import ButtonLoading from '@/components/button/ButtonLoading';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSlot, } from "@/components/ui/input-otp";
import { useStateAuth } from '@/managers/state-management/auth/useStateAuth';
// import { usePostLoginOtpRegister } from '@/managers/api-management/auth/normal/usePostLoginOtpRegister';
// import { useStateAuth } from '@/managers/state-management/auth/useStateAuth';
import { FormatPhoneNumber } from '@/utils/format/FormatNumber';
import { variantButtonPressZoom } from '@/utils/variants-animation/VariantsAnimation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


const AuthOtp = (props: any) => {
    const form = useForm({ defaultValues: { otp: '' } })
    // const { isLoading, onSubmit } = usePostLoginOtpRegister()
    const { isStateAuth, queryKeyIsStateAuth } = useStateAuth()

    const [isOtpValid, setIsOtpValid] = useState<boolean>(false);
    const [formattedTime, setFormattedTime] = useState<string>("03:00");

    // useEffect(() => {
    //     if (isStateAuth.otp_time <= 0) return;
    //     const timer = setInterval(() => {
    //         queryKeyIsStateAuth({ otp_time: isStateAuth.otp_time - 1 });
    //     }, 1000);
    //     return () => clearInterval(timer);
    // }, [isStateAuth.otp_time]);

    useEffect(() => {
        if (isStateAuth.otp_time < 0) return;
        const timer = setInterval(() => {
            queryKeyIsStateAuth({ otp_time: isStateAuth.otp_time - 1 });

            // Convert seconds to MM:SS format
            const minutes = Math.floor(isStateAuth.otp_time / 60);
            const seconds = isStateAuth.otp_time % 60;
            setFormattedTime(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
        }, 1000);
        return () => clearInterval(timer);
    }, [isStateAuth.otp_time, queryKeyIsStateAuth]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Chặn các phím không phải số
        if (!/^\d$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
            e.preventDefault();
        }
    };

    const handleOtpInput = (value: string) => {
        const numericValue = value.replace(/\D/g, ''); // Loại bỏ các ký tự không phải số
        form.setValue('otp', numericValue);
        setIsOtpValid(numericValue.length === 4); // Kiểm tra nếu đủ 4 số
    };

    const onSubmit = (data: any, type_dialog: string) => {

    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit((data) => onSubmit({ ...isStateAuth.form, ...data }, 'register'))}
                // onSubmit={form.handleSubmit((data) => onSubmit({ ...isStateAuth.form, ...data }, 'register'))}
                className='space-y-4'
            >
                <FormField
                    control={form.control}
                    name="otp"
                    rules={{
                        required: "Vui lòng nhập mã OTP",
                        minLength: {
                            value: 4,
                            message: "Mã OTP phải có 4 số",
                        },
                        maxLength: {
                            value: 4,
                            message: "Mã OTP chỉ được 4 số",
                        },
                    }}
                    render={({ field, fieldState }) => {
                        const num = isStateAuth.form?.phone ?? ''
                        return (
                            <FormItem>
                                <FormControl className="">
                                    <InputOTP
                                        maxLength={4}
                                        className="w-full"
                                        onInput={(e) => handleOtpInput(e.currentTarget.value)}
                                        onKeyDown={handleKeyDown} // Chặn nhập chữ
                                        {...field}
                                    >
                                        <InputOTPGroup className="mx-auto gap-2 w-fit">
                                            <InputOTPSlot className="size-16 3xl:text-lg text-base first:rounded-2xl rounded-2xl border ring-[#E9890C]" index={0} />
                                            <InputOTPSlot className="size-16 3xl:text-lg text-base rounded-2xl border ring-[#E9890C]" index={1} />
                                            <InputOTPSlot className="size-16 3xl:text-lg text-base rounded-2xl border ring-[#E9890C]" index={2} />
                                            <InputOTPSlot className="size-16 3xl:text-lg text-base last:rounded-2xl rounded-2xl border ring-[#E9890C]" index={3} />
                                        </InputOTPGroup>

                                    </InputOTP>
                                </FormControl>

                                {fieldState?.invalid && fieldState?.error && (
                                    <FormMessage>{fieldState?.error?.message}</FormMessage>
                                )}
                            </FormItem>
                        );
                    }}
                />

                <div className='flex flex-col justify-center items-center '>
                    <div className="text-[#FC0000] text-center">{formattedTime}</div>
                    <button
                        onClick={() => {
                            // onSubmit(isStateAuth.form, 'otp', 'forgot_otp')
                        }}
                        type="button"
                        className="text-small-default bg-transparent text-red-500 hover:bg-transparent w-fit py-1 rounded-base"
                    >
                        Gửi lại mã OTP
                    </button>
                </div>

                <ButtonAnimation
                    // isStateloading={isLoading}
                    // disabled={!isOtpValid || isLoading}
                    disabled={!isOtpValid}
                    type='submit'
                    title_button='Gửi'
                    variant={variantButtonPressZoom}
                    className='space-x-2 bg-[#333538] text-white rounded-full 3xl:text-lg text-base font-normal w-full md:py-3 py-2.5 h-auto hover:opacity-80 transition-all duration-150 ease-linear disabled:hover:opacity-100 disabled:bg-[#333538]/40 disabled:text-white disabled:cursor-not-allowed disabled:pointer-events-auto'
                />
            </form>
        </Form>
    )
}

export default AuthOtp