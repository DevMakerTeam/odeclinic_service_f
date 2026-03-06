import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routing } from './i18n/routing';
import { ACCESS_TOKEN_COOKIE } from '@/lib/auth';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const token = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;
  const { pathname } = request.nextUrl;

  // locale 접두사 제거 후 실제 경로 추출
  const localePattern = /^\/(ko|en|sc|tc)(\/|$)/;
  const pathnameWithoutLocale = pathname.replace(localePattern, '/');

  // 비로그인 상태에서 마이페이지 접근 → /login 리다이렉트
  if (pathnameWithoutLocale.startsWith('/mypage') && !token) {
    const loginUrl = new URL(pathname.replace('/mypage', '/login'), request.url);
    loginUrl.searchParams.set('redirect', pathnameWithoutLocale);
    return NextResponse.redirect(loginUrl);
  }

  // 로그인 상태에서 /login 접근 → /mypage 리다이렉트
  if (pathnameWithoutLocale === '/login' && token) {
    return NextResponse.redirect(new URL(pathname.replace('/login', '/mypage'), request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
