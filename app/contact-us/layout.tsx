import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "VIETHUNG-AUTO - Liên hệ",
    description: "VIETHUNG-AUTO liên hệ",
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL_WEBSITE}`),
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
    },
    openGraph: {
        title: "VIETHUNG-AUTO - Liên hệ",
        description: "VIETHUNG-AUTO liên hệ",
        type: "website",
        url: `${process.env.NEXT_PUBLIC_URL_WEBSITE}`,
        siteName: "VIETHUNG-AUTO",
        images: {
            url: '/opengraph-image.png',
            alt: "logo",
            width: 1200,
            height: 630,
        }
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
