import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_TOKEN_COOKIE } from "@/lib/auth";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;
  const { pathname } = request.nextUrl;

  // 로그인 필요 페이지 → 미로그인 시 /login 리다이렉트
  if (pathname.startsWith("/mypage") && !token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 이미 로그인 상태에서 /login 접근 → /mypage 리다이렉트
  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/mypage", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/mypage(.*)", "/login"],
};
