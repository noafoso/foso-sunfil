import { translateText } from '@/utils/translate/translateText';
import React, { createContext, useState, useContext, useEffect } from 'react';

interface LanguageContextType {
    language: string | string[] | any;
    setLanguage: (lang: string | string[] | any) => void;
    translate: (text: string | string[] | any) => Promise<string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState('vi');
    console.log('language', language);

    const translate = async (text: string) => {
        if (language === 'vi') return text;
        return await translateText(text, language);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translate }}>
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