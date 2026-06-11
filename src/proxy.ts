import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const response = NextResponse.next();

  if (
    pathname.startsWith("/_next/static") ||
    pathname.startsWith("/images")
  ) {
    return response;
  }

  if (
    pathname === "/" ||
    pathname.startsWith("/products") ||
    pathname.startsWith("/services") ||
    pathname.startsWith("/about") ||
    pathname.startsWith("/team") ||
    pathname.startsWith("/roadmap") ||
    pathname.startsWith("/contact") ||
    pathname.startsWith("/careers") ||
    pathname.startsWith("/terms") ||
    pathname.startsWith("/privacy")
  ) {
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400",
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
