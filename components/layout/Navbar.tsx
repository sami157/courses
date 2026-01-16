import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { UserMenu } from "./UserMenu";
import { NavLink } from "./NavLink";

export async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-purple-50/70 dark:bg-gray-900/70 border-b border-purple-200/30 dark:border-gray-700/30 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Coachify
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/courses">Courses</NavLink>
            {session ? (
              <>
                <NavLink href="/add-course">Add Course</NavLink>
                <NavLink href="/add-teacher">Add Teacher</NavLink>
                <UserMenu
                  name={session.user?.name || null}
                  image={session.user?.image || null}
                />
              </>
            ) : (
              <>
                <NavLink href="/signup">Sign Up</NavLink>
                <Link
                  href="/login"
                  className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                >
                  Login
                </Link>
              </>
            )}
          </div>
          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-2">
            {session ? (
              <UserMenu
                name={session.user?.name || null}
                image={session.user?.image || null}
              />
            ) : (
              <>
                <NavLink href="/signup">Sign Up</NavLink>
                <Link
                  href="/login"
                  className="text-sm font-medium px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
