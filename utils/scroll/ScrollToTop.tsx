import { animate } from 'framer-motion';

export const ScrollToTop = () => {
    animate(window.scrollY, 0, {
        type: 'spring',
        stiffness: 100,
        damping: 30,
        onUpdate: (value: number) => window.scrollTo(0, value),
    });
};