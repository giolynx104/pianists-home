import { auth } from "@/auth";

export default auth((request) => {
  // Static assets
  if (request.nextUrl.pathname.startsWith("/_next")) {
    return;
  }

  if (
    !request.auth &&
    request.nextUrl.pathname !== "/" &&
    request.nextUrl.pathname !== "/signin" &&
    !request.nextUrl.pathname.startsWith("/api/auth")
  ) {
    return Response.redirect(new URL("/signin", request.nextUrl));
  } else if (request.auth && request.nextUrl.pathname === "/signin") {
    return Response.redirect(new URL("/dashboard", request.nextUrl));
  }
});
