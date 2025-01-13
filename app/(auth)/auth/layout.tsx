import LayoutAuth from "@/components/layout/layout/LayoutAuth"
import React from "react"

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <LayoutAuth>
            {children}
        </LayoutAuth>
    )
}

export default AuthLayout