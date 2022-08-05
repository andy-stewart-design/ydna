import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useHydrated } from "lib/useHydrated";

export default function Nav() {
  return (
    <nav className="absolute top-0 left-0 w-screen">
      <div className="flex justify-between items-center w-full py-4 px-8">
        <Link href="/">
          {/* <a
            className="font-bold text-2xl"
            style={{ fontFeatureSettings: "'ss01'" }}
          >
            andy
          </a> */}
          <a className="w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              xmlSpace="preserve"
            >
              <path
                d="M20 1C9.507 1 1 9.507 1 20s8.507 19 19 19h5v-8H10c-.552 0-1-.448-1-1V10c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v29h8V20C39 9.507 30.493 1 20 1z"
                fill="currentColor"
              />
            </svg>
          </a>
        </Link>
        <div className="flex gap-x-6">
          <Link href="/">
            <a className="">Projects</a>
          </Link>
          <Link href="/posts">
            <a className="">Posts</a>
          </Link>
          <Link href="/snippets">
            <a className="">Snippets</a>
          </Link>
          <Link href="/">
            <a className="">About</a>
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
        className="w-10 h-10 bg-gray-200 rounded-lg dark:bg-gray-800 dark:bg-opacity-0 flex items-center justify-center hover:dark:bg-opacity-100 hover:ring-2 ring-gray-300 dark:ring-gray-600 transition-all"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="w-5"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10zm1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z"
          />
        </svg>
      </button>
    </div>
  );
};
