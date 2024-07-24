import { auth } from "@/auth";

export default auth((request) => {
  if (request.nextUrl.pathname === "/") {
    return Response.redirect(new URL("/home", request.nextUrl));
  } else if (
    !request.auth &&
    request.nextUrl.pathname !== "/home" &&
    request.nextUrl.pathname !== "/signin" &&
    !request.nextUrl.pathname.startsWith("/api/auth")
  ) {
    return Response.redirect(new URL("/signin", request.nextUrl));
  } else if (request.auth && request.nextUrl.pathname === "/signin") {
    return Response.redirect(new URL("/dashboard", request.nextUrl));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
