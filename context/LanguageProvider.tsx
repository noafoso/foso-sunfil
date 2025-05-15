import { translateText } from '@/services/translate/translateText';
import useCookieStore from '@/stores/useCookieStore';
import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
    language: string | string[] | any;
    setLanguage: (lang: string | string[] | any) => void;
    translate: (text: string | string[] | any) => Promise<string>;
    loadingLang: boolean;
    setLoadingLang: (loading: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { getCookie } = useCookieStore()

    const checkLanguage = getCookie('googletranslate');

    const [language, setLanguage] = useState(checkLanguage ?? 'vi');

    const [loadingLang, setLoadingLang] = useState(false);

    const translate = async (text: string) => {
        return await translateText(text, language);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translate, loadingLang, setLoadingLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};