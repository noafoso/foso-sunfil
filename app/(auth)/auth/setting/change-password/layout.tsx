// import { createMetadata } from "@/managers/api-management/server/createMetadata";
import React from "react";

// export const generateMetadata = async () => createMetadata('auth-information-profile');


interface ChangePasswordLayoutProps {
    children: React.ReactNode
}

const ChangePasswordLayout = ({ children }: ChangePasswordLayoutProps) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default ChangePasswordLayout