import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useHydrated } from "lib/useHydrated";

export default function Nav() {
  return (
    <nav className="absolute top-0 left-0 w-screen">
      <div className="flex justify-between items-center w-full max-w-[720px] mx-auto py-4">
        <div className="flex gap-x-4">
          <Link href="/">
            <a className="font-medium">Andy Stewart</a>
          </Link>
          <Link href="/posts">
            <a className="font-medium">Posts</a>
          </Link>
          <Link href="/">
            <a className="font-medium">About</a>
          </Link>
        </div>
        <ThemeSwitch />
      </div>
    </nav>
  );
}

const ThemeSwitch = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  if (!useHydrated()) return null;

  return (
    <div>
      {/* <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select> */}
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-800 flex items-center justify-center  hover:ring-2 ring-gray-300 dark:ring-gray-600 transition-all"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        O
      </button>
    </div>
  );
};
