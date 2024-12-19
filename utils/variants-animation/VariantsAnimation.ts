const variantSlideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const variantSlideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
};

const variantSlideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const variantSlideDown = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const variantSlideZoomOut = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        // transition: {
        //     duration: 0.5, // Tăng thời gian của transition
        //     delayChildren: 0.3, // Độ trễ trước khi con bắt đầu animation
        //     staggerChildren: 0.2, // Thời gian giữa các hoạt ảnh của con
        // },
    },
};

const variantButtonPressZoom = {
    rest: { scale: 1 },
    press: { scale: 0.98, transition: { duration: 0.2 } },
};

const variantButtonScaleZoom = {
    rest: { scale: 1 },
    press: { scale: 0.98, transition: { duration: 0.3 } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
};


// animation đóng mở collapsed
const variantsContent = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 },
};

export {
    variantSlideLeft,
    variantSlideRight,
    variantSlideUp,
    variantSlideDown,
    variantSlideZoomOut,
    variantButtonPressZoom,
    variantButtonScaleZoom,
    variantsContent,
};
