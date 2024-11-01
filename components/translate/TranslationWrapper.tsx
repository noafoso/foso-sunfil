import React, { useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageProvider';
import { useTextNodes } from '@/custom/hooks/useTextNodes';

export const TranslationWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const textNodes = useTextNodes(wrapperRef);
    const { language, translate } = useLanguage();

    useEffect(() => {
        const translateNodes = async () => {
            if (textNodes.length > 0) {
                const textsToTranslate = textNodes.map(node => node.textContent || '');

                const translatedTexts = await translate(textsToTranslate);

                textNodes.forEach((node, index) => {
                    if (node.textContent) {
                        node.textContent = translatedTexts[index];
                    }
                });
            }
        };

        translateNodes();
    }, [language, textNodes, translate]);

    return <div ref={wrapperRef}>{children}</div>;
};