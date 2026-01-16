"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`text-sm font-medium px-3 py-2 rounded-lg transition-all relative ${
        isActive
          ? "text-indigo-600 dark:text-indigo-400 font-semibold"
          : "text-gray-700 hover:bg-white/50 dark:text-gray-300 dark:hover:bg-gray-800/50 hover:text-indigo-600 dark:hover:text-indigo-400"
      } ${className}`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
      )}
    </Link>
  );
}
