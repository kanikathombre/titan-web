import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(
  request: NextRequest
) {

  const token =
    request.cookies.get(
      "auth-token"
    )?.value;

  const pathname =
    request.nextUrl.pathname;

  // Public routes
  const publicRoutes = [
    "/",
    "/features",
    "/pricing",
    "/sign-in",
    "/sign-up",
  ];

  if (
    publicRoutes.includes(
      pathname
    )
  ) {
    return NextResponse.next();
  }

  // Not logged in
  if (!token) {

    return NextResponse.redirect(
      new URL(
        "/sign-in",
        request.url
      )
    );
  }

  const user =
    JSON.parse(token);

  // Admin route protection
  if (
    pathname.startsWith(
      "/admin"
    )
  ) {

    if (
      user.role !== "admin"
    ) {

      return NextResponse.redirect(
        new URL(
          "/dashboard",
          request.url
        )
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
  ],
};