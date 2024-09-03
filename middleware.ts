import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import acceptLanguage from "accept-language";
import { cookieName, fallbackLanguage, languages } from "./app/i18n/settings";

acceptLanguage.languages(languages);

export function middleware(request: NextRequest) {
  // const session = request.cookies.get("authjs.session-token");
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }
  // if (request.nextUrl.pathname === "/api/auth/signin" && session) {
  //   return NextResponse.redirect(new URL("/dashboard", request.url));
  // }
  // if (request.nextUrl.pathname.includes("/api/auth/signin")) {
  //   return NextResponse.redirect(new URL("/"))
  let language: string | undefined | null;
  if (request.cookies.has(cookieName))
    language = acceptLanguage.get(request.cookies.get(cookieName)?.value);
  if (!language) language = acceptLanguage.get(request.headers.get("Accept-Language"));
  if (!language) language = fallbackLanguage;

  // Redirect if lng in path is not supported
  if (
    !languages.some((locale) => request.nextUrl.pathname.startsWith(`/${locale}`)) &&
    !request.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${language}${request.nextUrl.pathname}`, request.url)
    );
  }

  if (request.headers.has("referer")) {
    const refererUrl = new URL(request.headers.get("referer") || "");
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/api/auth/signin",
  ],
};
