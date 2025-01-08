// import { createMetadata } from "@/managers/api-management/server/createMetadata";
import React from "react";

// export const generateMetadata = async () => createMetadata('auth-information-profile');


interface GiftHistoryLayoutProps {
    children: React.ReactNode
}

const GiftHistoryLayout = ({ children }: GiftHistoryLayoutProps) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default GiftHistoryLayout