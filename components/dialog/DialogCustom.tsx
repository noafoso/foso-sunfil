import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from 'framer-motion'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

import { ScrollArea, ScrollBar } from "../ui/scroll-area";

import {
    TITLE_FORM_OTP,
    TITLE_FORM_LOGIN,
    TITLE_FORM_REGISTER,
    TITLE_FORM_FORGOT_PASSWORD,
    TITLE_FORM_PROMOTION,
    TITLE_FORM_FAKE_INFORMATION,
} from "@/constants/DialogContants";

// import { useStateAuth } from "@/managers/state-management/auth/useStateAuth";
import { useDialogStore } from "@/stores/useDialogStore";

import LoginComponent from "@/features/auth/components/login-card";
import RegisterComponent from "@/features/auth/components/register-card";
import RegisterOtp from "@/features/auth/components/otp-register";
import UpdatePasswordOtp from "@/features/auth/components/otp-update-password";
import ReveicedGiftCodeOtp from "@/features/auth/components/otp-reveiced-gift-code";
// import RegisterComponent from "@/features/auth/components/register-card";
// import ForgotPasswordComponent from "@/features/auth/components/forgot-password-card";
// import PromotionsComponent from "@/features/promotions/components/promotions";
// import FakeInformationComponent from "@/features/auth/components/fake-information-card";

type Props = {};

export function DialogCustom({ }: Props) {
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const { openDialogCustom, statusDialog, setOpenDialogCustom, setStatusDialog } = useDialogStore()
    // const { isStateAuth } = useStateAuth()

    const handleCloseDialog = (value: boolean, type: string) => {
        if (type === "overlay") {
            let otp = ['otp_register', 'otp_update_password', 'otp_reveiced_gift',].includes(statusDialog)
            console.log('otp', otp);


            if (!otp) {
                setOpenDialogCustom(value)
            }
        } else if (type === "close") {
            setOpenDialogCustom(value)
        }
    }

    if (!isMounted) {
        return null;
    }

    const isAuthTab = (statusDialog === "login" || statusDialog === "register")
    const isAuthStatusDialog = ['login', 'register', 'otp_register', 'otp_update_password', 'otp_reveiced_gift', 'update_account', 'forgot_password', 'promotions', 'fake_information'].includes(statusDialog)

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.5, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            }
        },
        exit: {
            opacity: 0,
            scale: 0.5,
            y: 20,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            }
        },
    }

    return (
        <AnimatePresence mode="wait">
            {
                openDialogCustom && (
                    <Dialog
                        open={openDialogCustom}
                        onOpenChange={(value: boolean) => handleCloseDialog(value, "overlay")}
                    >
                        <DialogPortal>
                            <DialogOverlay className="bg-[#09080D]/[48%]" />
                            {
                                isAuthStatusDialog &&
                                (
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={modalVariants}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                    >
                                        <DialogContent
                                            className={`${(statusDialog === "otp_register" || statusDialog === "otp_update_password" || statusDialog === "otp_reveiced_gift") ? 'lg:max-w-[420px]' : `lg:max-w-[520px]`} bg-white !text-black p-0 border-none max-w-[95%] max-h-[98vh] overflow-hidden
                                                    focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0
                                                    !rounded-2xl custom-size-text custom-tailwind
                                        `}
                                            style={{
                                                boxShadow: "0px 64px 64px -48px #0F0F0F14"
                                            }}
                                        >
                                            <div className="h-full md:p-6 p-4 md:pr-3 pr-1 rounded-2xl">
                                                <div className="3xl:mb-8 mb-6">
                                                    <DialogClose
                                                        onClick={() => handleCloseDialog(false, "close")}
                                                        className="3xl:size-6 size-5 z-20 flex items-center justify-center absolute right-4 top-4 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-0 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                                                    >
                                                        <X className="size-full text-[#505458]" />
                                                        <span className="sr-only">Close</span>
                                                    </DialogClose>


                                                    {
                                                        isAuthTab &&
                                                        <div className="flex flex-row items-center justify-center w-full gap-4">
                                                            <DialogTitle
                                                                className={`${statusDialog === "login" ? "!text-[#333538]" : "!text-[#C4CACC] hover:!text-[#333538]"} relative px-4 pb-2 capitalize 3xl:text-[22px] text-[20px] font-semibold cursor-pointer transition-all duration-300`}
                                                                onClick={() => setStatusDialog("login")}
                                                            >
                                                                {TITLE_FORM_LOGIN}
                                                                {statusDialog === "login" && <div className='absolute bottom-0 left-[40%] w-8 h-1 bg-[#07A6FF] rounded-[3px]' />}
                                                            </DialogTitle>
                                                            <DialogTitle
                                                                className={`${statusDialog === "register" ? "!text-[#333538]" : "!text-[#C4CACC] hover:!text-[#333538]"} relative px-4 pb-2 capitalize 3xl:text-[22px] text-[20px] font-semibold cursor-pointer transition-all duration-300`}
                                                                onClick={() => setStatusDialog("register")}
                                                            >
                                                                {TITLE_FORM_REGISTER}
                                                                {statusDialog === "register" && <div className='absolute bottom-0 left-[40%] w-8 h-1 bg-[#07A6FF] rounded-[3px]' />}
                                                            </DialogTitle>
                                                        </div>
                                                    }
                                                    {
                                                        !isAuthTab &&
                                                        <DialogHeader className="flex items-center justify-center gap-4 w-full">
                                                            <DialogTitle className={`text-[#333538] capitalize 3xl:text-[22px] text-[20px] font-semibold`}>
                                                                {statusDialog === "otp_register" && TITLE_FORM_OTP}
                                                                {statusDialog === "forgot_password" && TITLE_FORM_FORGOT_PASSWORD}
                                                                {statusDialog === "promotions" && TITLE_FORM_PROMOTION}
                                                                {statusDialog === "fake_information" && TITLE_FORM_FAKE_INFORMATION}
                                                            </DialogTitle>
                                                            {
                                                                (statusDialog === "otp_register" || statusDialog === "otp_update_password" || statusDialog === "otp_reveiced_gift") &&
                                                                <DialogDescription className='text-center text-[#808990] font-normal'>
                                                                    Please enter 4 digit verification code that have been sent to your email
                                                                    {/* Please enter 4 digit verification code that have been sent to your email: <span className='font-semibold'>{isStateAuth?.form?.email}</span> */}
                                                                </DialogDescription>
                                                            }
                                                            {
                                                                statusDialog === "forgot_password" &&
                                                                <DialogDescription className='text-center text-[#808990] font-normal'>
                                                                    Chúng tôi sẽ gửi mật khẩu tạm thời đến EMAIL của bạn đăng ký tài khoản. Vui lòng nhập thông tin đăng ký!
                                                                </DialogDescription>
                                                            }
                                                        </DialogHeader>
                                                    }
                                                </div>

                                                <ScrollArea
                                                    type="hover"
                                                    className={`max-h-[calc(90vh_-_50px)] overflow-y-auto pr-3 z-20`}
                                                >
                                                    {statusDialog === "login" && <LoginComponent />}
                                                    {statusDialog === "register" && <RegisterComponent />}
                                                    {statusDialog === "otp_register" && <RegisterOtp />}
                                                    {statusDialog === "otp_update_password" && <UpdatePasswordOtp />}
                                                    {statusDialog === "otp_reveiced_gift" && <ReveicedGiftCodeOtp />}
                                                    {/* {statusDialog === "forgot_password" && <ForgotPasswordComponent />}
                                                    {statusDialog === "promotions" && <PromotionsComponent />}
                                                    {statusDialog === "fake_information" && <FakeInformationComponent />} */}
                                                    <ScrollBar />
                                                </ScrollArea>
                                            </div>
                                        </DialogContent>
                                    </motion.div>
                                )
                            }
                        </DialogPortal>
                    </Dialog >
                )
            }
        </AnimatePresence>
    );
}
