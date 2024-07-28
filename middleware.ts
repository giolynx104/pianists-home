import { auth } from "@/auth";

export default auth((request) => {
  if (request.nextUrl.pathname === "/") {
    return Response.redirect(new URL("/home", request.nextUrl));
  } else if (!request.auth && request.nextUrl.pathname !== "/home") {
    console.log(request.auth);
    return Response.redirect(new URL("/api/auth/signin", request.nextUrl));
  } else if (request.auth && request.nextUrl.pathname === "/api/auth/signin") {
    return Response.redirect(new URL("/dashboard", request.nextUrl));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
