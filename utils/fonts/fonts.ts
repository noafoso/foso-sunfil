import {
    Space_Grotesk,
    Montserrat
} from "next/font/google";

// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

const space_grotesk_init = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "500", "600", "600", "700", "700"],
    variable: "--font-space-grotesk",
    display: "swap",
});

const montserrat_init = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-montserrat",
    display: "swap",
});

export const space_grotesk_sans = space_grotesk_init;
export const montserrat_sans = montserrat_init;
