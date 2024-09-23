import "@/styles/globals.scss";
import LayoutMain from "@/components/layout/LayoutMain";
import { space_grotesk_sans } from "@/utils/fonts/fonts";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${space_grotesk_sans.className} antialiased custom-tailwind`}>
                <LayoutMain>
                    {children}
                </LayoutMain>
            </body>
        </html>
    );
}
