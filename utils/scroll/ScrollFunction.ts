import { animate } from 'framer-motion';

const scrollToTop = () => {
    animate(window.scrollY, 0, {
        type: 'spring',
        stiffness: 100,
        damping: 30,
        onUpdate: (value: number) => window.scrollTo(0, value),
    });
};

const scrollToSection = (idSection: number | string) => {
    const element = document.getElementById(String(idSection));
    if (element) {
        const yOffset = 0; // Khoảng cách muốn trừ đi
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        // Sử dụng framer-motion để cuộn đến vị trí tính toán
        animate(window.scrollY, y, {
            type: 'spring',
            stiffness: 100,
            damping: 30,
            onUpdate: (value: number) => window.scrollTo(0, value),
        });
    }
};

export {
    scrollToTop,
    scrollToSection
}