// import { createMetadata } from "@/managers/api-management/server/createMetadata";
import React from "react";

// export const generateMetadata = async () => createMetadata('auth-information-profile');


interface ProfileLayoutProps {
    children: React.ReactNode
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default ProfileLayout