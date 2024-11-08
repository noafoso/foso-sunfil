import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { useLanguage } from '@/context/LanguageProvider';
import { useTextNodes } from '@/custom/hooks/useTextNodes';

type TranslationWrapperProps = {
    children: React.ReactNode;
    isDataLoaded: boolean;
};

export const TranslationWrapper: React.FC<TranslationWrapperProps> = ({ children, isDataLoaded }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const originalTextNodes = useTextNodes(wrapperRef);
    const { language, translate } = useLanguage();

    console.log('language', language);
    console.log('isDataLoaded', isDataLoaded);


    useEffect(() => {
        const translateNodes = async () => {
            if (isDataLoaded && originalTextNodes.length > 0) {
                const textsToTranslate = originalTextNodes.map(node => node.textContent || '');

                console.log('textsToTranslate', textsToTranslate);


                const translatedTexts = await translate(textsToTranslate);

                console.log('translatedTexts', translatedTexts);

                originalTextNodes.forEach((node, index) => {
                    if (node.textContent) {
                        node.textContent = translatedTexts[0][index];
                    }
                });
            }
        };

        if (isDataLoaded) {
            translateNodes();
        }
    }, [language, isDataLoaded, originalTextNodes, translate]);

    return (
        <div ref={wrapperRef}>
            {children}
        </div>
    );
};