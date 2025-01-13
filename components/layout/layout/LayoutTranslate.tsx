import { LanguageProvider } from '@/context/LanguageProvider'
import useCookieStore from '@/stores/useCookieStore'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { TranslationWrapper } from '../../translate/TranslationWrapper'
import { useGetInfoByToken } from '@/managers/api-management/auth/info/useGetInfoByToken'

type Props = {}

const LayoutTranslate = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()

    const [isDataLoaded, setIsDataLoaded] = useState(false);
    
    const { getCookie } = useCookieStore()
    
    const { isLoading } = useGetInfoByToken() // auto call
    
    const checkLanguage = getCookie('googletranslate');

    useEffect(() => {
        setIsDataLoaded(false);
        const fetchData = async () => {
            await new Promise<void>((resolve) => {
                setTimeout(() => {
                    setIsDataLoaded(true);
                    resolve();
                }, 1000);
            });
        };
        fetchData();
    }, [checkLanguage, pathname]);

    return (
        <LanguageProvider>
            <TranslationWrapper isDataLoaded={isDataLoaded}>
                {children}
            </TranslationWrapper>
        </LanguageProvider>
    )
}

export default LayoutTranslate