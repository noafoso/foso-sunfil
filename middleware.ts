import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { KEY_COOKIES } from "@/constants/Cookie";

export async function middleware(request: NextRequest, event: any) {
    const { pathname } = request.nextUrl;
    const token: any = request.cookies.get(KEY_COOKIES.WEBSITE);

    if (pathname.startsWith("/auth")) {
        return token ? NextResponse.next() : NextResponse.redirect(process.env.NEXT_PUBLIC_URL_WEBSITE as string);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/auth", "/auth/:path*"],
};
