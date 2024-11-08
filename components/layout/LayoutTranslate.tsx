import React, { useEffect, useState } from 'react'
import { LanguageProvider } from '@/context/LanguageProvider'
import { TranslationWrapper } from '../translate/TranslationWrapper'

type Props = {}

const LayoutTranslate = ({ children }: { children: React.ReactNode }) => {
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        // Giả sử bạn có một số hàm gọi API ở đây
        const fetchData = async () => {
            setIsDataLoaded(true);
        };

        fetchData();
    }, []);


    return (
        <LanguageProvider>
            <TranslationWrapper isDataLoaded={isDataLoaded}>
                {children}
            </TranslationWrapper>
        </LanguageProvider>
    )
}

export default LayoutTranslate