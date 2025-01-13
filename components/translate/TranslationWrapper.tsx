import { useLanguage } from '@/context/LanguageProvider';
import { useTextNodes } from '@/custom/hooks/useTextNodes';
import useCookieStore from '@/stores/useCookieStore';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

type TranslationWrapperProps = {
    children: React.ReactNode;
    isDataLoaded: boolean;
};

export const TranslationWrapper: React.FC<TranslationWrapperProps> = ({ children, isDataLoaded }) => {
    const pathname = usePathname()
    const { getCookie } = useCookieStore()
    const { language, translate, loadingLang } = useLanguage();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const originalTextNodes = useTextNodes(wrapperRef, isDataLoaded);
    const checkLanguage = getCookie('googletranslate');

    useEffect(() => {
        const translateNodes = async () => {
            if ((isDataLoaded || loadingLang) && originalTextNodes.length > 0) {
                const textsToTranslate = originalTextNodes.map(node => node.textContent || '');

                const translatedTexts = await translate(textsToTranslate);

                originalTextNodes.forEach((node, index) => {
                    if (node.textContent) {
                        node.textContent = translatedTexts[0][index];
                    }
                });
            }

            // Dịch placeholder cho các input
            const inputElements = document.querySelectorAll('input[placeholder], textarea[placeholder]');
            const placeholdersToTranslate = Array.from(inputElements).map(input => input.getAttribute('placeholder'));
            const translatedPlaceholders = await translate(placeholdersToTranslate);

            inputElements.forEach((input, index) => {
                input.setAttribute('placeholder', translatedPlaceholders[0][index]);
            });
        };

        translateNodes();
    }, [language, pathname, isDataLoaded, loadingLang, originalTextNodes, translate, checkLanguage]);

    return (
        <div ref={wrapperRef}>
            {children}
        </div>
    );
};
// import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
// import { useLanguage } from '@/context/LanguageProvider';
// import { useTextNodes } from '@/custom/hooks/useTextNodes';

// type TranslationWrapperProps = {
//     children: React.ReactNode;
//     isDataLoaded: boolean;
// };

// export const TranslationWrapper: React.FC<TranslationWrapperProps> = ({ children, isDataLoaded }) => {
//     const wrapperRef = useRef<HTMLDivElement>(null);
//     const originalTextNodes = useTextNodes(wrapperRef);
//     const { language, translate } = useLanguage();

//     console.log('language', language);
//     console.log('isDataLoaded', isDataLoaded);


//     useEffect(() => {
//         const translateNodes = async () => {
//             if (isDataLoaded && originalTextNodes.length > 0) {
//                 const textsToTranslate = originalTextNodes.map(node => node.textContent || '');

//                 console.log('textsToTranslate', textsToTranslate);


//                 const translatedTexts = await translate(textsToTranslate);

//                 console.log('translatedTexts', translatedTexts);

//                 originalTextNodes.forEach((node, index) => {
//                     if (node.textContent) {
//                         node.textContent = translatedTexts[0][index];
//                     }
//                 });
//             }
//         };

//         if (isDataLoaded) {
//             translateNodes();
//         }
//     }, [language, isDataLoaded, originalTextNodes, translate]);

//     return (
//         <div ref={wrapperRef}>
//             {children}
//         </div>
//     );
// };