"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface MobileMenuProps {
  session: {
    user?: {
      name?: string | null;
      image?: string | null;
    } | null;
  } | null;
}

export function MobileMenu({ session }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      toast.success("Logged out successfully");
      router.push("/");
      router.refresh();
      setIsOpen(false);
    } catch (error) {
      toast.error("Failed to log out");
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg z-50 md:hidden">
            <div className="px-4 py-4 space-y-2">
              <Link href="/" onClick={() => setIsOpen(false)} className="block text-sm font-medium px-3 py-2 rounded-lg transition-all text-gray-700 hover:bg-white/50 dark:text-gray-300 dark:hover:bg-gray-800/50 hover:text-indigo-600 dark:hover:text-indigo-400">
                Home
              </Link>
              <Link href="/courses" onClick={() => setIsOpen(false)} className="block text-sm font-medium px-3 py-2 rounded-lg transition-all text-gray-700 hover:bg-white/50 dark:text-gray-300 dark:hover:bg-gray-800/50 hover:text-indigo-600 dark:hover:text-indigo-400">
                Courses
              </Link>
              {session ? (
                <>
                  <Link href="/add-course" onClick={() => setIsOpen(false)} className="block text-sm font-medium px-3 py-2 rounded-lg transition-all text-gray-700 hover:bg-white/50 dark:text-gray-300 dark:hover:bg-gray-800/50 hover:text-indigo-600 dark:hover:text-indigo-400">
                    Add Course
                  </Link>
                  <Link href="/add-teacher" onClick={() => setIsOpen(false)} className="block text-sm font-medium px-3 py-2 rounded-lg transition-all text-gray-700 hover:bg-white/50 dark:text-gray-300 dark:hover:bg-gray-800/50 hover:text-indigo-600 dark:hover:text-indigo-400">
                    Add Teacher
                  </Link>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        {session.user?.image ? (
                          <img
                            src={session.user.image}
                            alt={session.user.name || "User"}
                            className="h-10 w-10 rounded-full object-cover ring-2 ring-indigo-500/20"
                          />
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold ring-2 ring-indigo-500/20">
                            {session.user?.name
                              ? session.user.name.charAt(0).toUpperCase()
                              : "U"}
                          </div>
                        )}
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {session.user?.name || "User"}
                        </span>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-sm font-medium px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all shadow-md text-center"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/signup" onClick={() => setIsOpen(false)} className="block text-sm font-medium px-3 py-2 rounded-lg transition-all text-gray-700 hover:bg-white/50 dark:text-gray-300 dark:hover:bg-gray-800/50 hover:text-indigo-600 dark:hover:text-indigo-400">
                    Sign Up
                  </Link>
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md text-center"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
