"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface UserMenuProps {
  name?: string | null;
  image?: string | null;
}

export function UserMenu({ name, image }: UserMenuProps) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      toast.success("Logged out successfully");
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error("Failed to log out");
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        {image ? (
          <img
            src={image}
            alt={name || "User"}
            className="h-8 w-8 rounded-full object-cover ring-2 ring-indigo-500/20"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold ring-2 ring-indigo-500/20">
            {name ? name.charAt(0).toUpperCase() : "U"}
          </div>
        )}
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden lg:block">
          {name || "User"}
        </span>
      </div>
      <button
        onClick={handleLogout}
        className="text-sm font-medium px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all shadow-md hover:shadow-lg"
      >
        Logout
      </button>
    </div>
  );
}
