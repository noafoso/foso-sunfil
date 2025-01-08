// import { createMetadata } from "@/managers/api-management/server/createMetadata";
import React from "react";

// export const generateMetadata = async () => createMetadata('auth-information-profile');


interface SearchHistoryLayoutProps {
    children: React.ReactNode
}

const SearchHistoryLayout = ({ children }: SearchHistoryLayoutProps) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default SearchHistoryLayout