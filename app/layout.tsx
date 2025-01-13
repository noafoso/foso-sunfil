import "@/styles/globals.scss";
import LayoutMain from "@/components/layout/layout/LayoutMain";
import { space_grotesk_sans } from "@/utils/fonts/fonts";
import { Suspense } from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${space_grotesk_sans.className} antialiased custom-tailwind text-responsive`}>
                <Suspense>
                    <LayoutMain>
                        {children}
                    </LayoutMain>
                </Suspense>
            </body>
        </html>
    );
}
