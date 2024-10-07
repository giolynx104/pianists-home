import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import acceptLanguage from "accept-language";
import { cookieName, fallbackLanguage, languages } from "./app/i18n/settings";

acceptLanguage.languages(languages);

export function middleware(request: NextRequest) {
  let language = request.cookies.get(cookieName)?.value;
  if (!language) {
    language = acceptLanguage.get(request.headers.get("Accept-Language") || "") || fallbackLanguage;
  }

  // Redirect if language in path is not supported
  if (
    !languages.some((locale) => request.nextUrl.pathname.startsWith(`/${locale}`)) &&
    !request.nextUrl.pathname.startsWith("/_next") &&
    !request.nextUrl.pathname.startsWith("/api")
  ) {
    return NextResponse.redirect(
      new URL(`/${language}${request.nextUrl.pathname}`, request.url)
    );
  }

  // Update language cookie if needed
  if (request.headers.has("referer")) {
    const refererUrl = new URL(request.headers.get("referer") || "");
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
    if (lngInReferer) {
      const response = NextResponse.next();
      response.cookies.set(cookieName, lngInReferer);
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
