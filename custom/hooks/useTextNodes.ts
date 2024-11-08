import { useLanguage } from "@/context/LanguageProvider";
import useCookieStore from "@/stores/useCookieStore";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function getTextNodes(element: Element): Text[] {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);

    const textNodes: Text[] = [];
    let node;
    while ((node = walker.nextNode())) {
        if (node.textContent?.trim()) {
            textNodes.push(node as Text);
        }
    }

    return textNodes;
}

export function useTextNodes(ref: React.RefObject<HTMLElement>, isDataLoaded: boolean) {
    const pathname = usePathname();
    const { language } = useLanguage();
    const { loadingLang } = useLanguage();
    const { getCookie } = useCookieStore();
    const checkLanguage = getCookie("googletranslate");
    const [textNodes, setTextNodes] = useState<Text[]>([]);

    useEffect(() => {
        if (ref.current && (isDataLoaded || loadingLang)) {
            const nodes = getTextNodes(ref.current);
            setTextNodes(nodes);
        }
    }, [ref, pathname, language, loadingLang, isDataLoaded, checkLanguage]);

    return textNodes;
}
// import { useLanguage } from '@/context/LanguageProvider';
// import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';

// function getTextNodes(element: Element): Text[] {
//     const walker = document.createTreeWalker(
//         element,
//         NodeFilter.SHOW_TEXT,
//         null
//     );

//     const textNodes: Text[] = [];
//     let node;
//     while (node = walker.nextNode()) {
//         if (node.textContent?.trim()) {
//             textNodes.push(node as Text);
//         }
//     }

//     return textNodes;
// }

// export function useTextNodes(ref: React.RefObject<HTMLElement>) {
//     const pathname = usePathname()
//     const [textNodes, setTextNodes] = useState<Text[]>([]);
//     const { language, translate } = useLanguage();

//     useEffect(() => {
//         if (ref.current) {
//             const nodes = getTextNodes(ref.current);
//             setTextNodes(nodes);
//         }
//     }, [ref, pathname, language]);

//     return textNodes;
// }
