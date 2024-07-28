import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("authjs.session-token");
  if (request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/home", request.url));
  }

  if (!session && !(request.nextUrl.pathname === "/api/auth/signin")) {
    return Response.redirect(new URL("/api/auth/signin", request.url));
  }
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
  ],
};
