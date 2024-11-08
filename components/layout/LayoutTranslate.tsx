import { LanguageProvider } from '@/context/LanguageProvider'
import useCookieStore from '@/stores/useCookieStore'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { TranslationWrapper } from '../translate/TranslationWrapper'

type Props = {}

const LayoutTranslate = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()

    const { getCookie } = useCookieStore()

    const [isDataLoaded, setIsDataLoaded] = useState(false);

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