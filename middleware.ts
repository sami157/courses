import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Middleware logic can be added here if needed
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname;

        // Public routes that don't require authentication
        const isPublicRoute =
          pathname === "/" ||
          pathname === "/courses" ||
          pathname === "/login" ||
          pathname === "/signup" ||
          pathname.startsWith("/courses/");

        if (isPublicRoute) {
          return true;
        }

        // Protect /add-course and /add-teacher - require authentication
        if (pathname === "/add-course" || pathname === "/add-teacher") {
          return !!token;
        }

        // Allow all other routes by default
        return true;
      },
    },
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
