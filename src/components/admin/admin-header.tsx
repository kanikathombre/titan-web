"use client";

import {
  Bell,
  Search,
  Settings,
  Moon,
  Sun,
} from "lucide-react";

import {
  useTheme,
} from "@/context/theme-context";

export function AdminHeader() {

  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (

    <header
      className={`
        sticky
        top-0
        z-40
        flex
        h-24
        items-center
        justify-between
        border-b
        px-8
        backdrop-blur-xl
        transition-all
        duration-300
        ${
          theme === "dark"
            ? "border-white/10 bg-[#020817]/80"
            : "border-slate-200 bg-white/80"
        }
      `}
    >

      {/* LEFT */}
      <div className="flex items-center gap-6">

        {/* TITLE */}
        <div>

          <h1
            className={`
              text-4xl
              font-black
              transition-colors
              duration-300
              ${
                theme === "dark"
                  ? "text-white"
                  : "text-slate-900"
              }
            `}
          >

            Admin Dashboard

          </h1>

          <p
            className={`
              mt-1
              text-sm
              transition-colors
              duration-300
              ${
                theme === "dark"
                  ? "text-slate-400"
                  : "text-slate-500"
              }
            `}
          >

            NanoToxi AI monitoring and management

          </p>

        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* SEARCH */}
        <div
          className={`
            hidden
            items-center
            gap-3
            rounded-2xl
            border
            px-4
            py-3
            transition-all
            duration-300
            lg:flex
            ${
              theme === "dark"
                ? "border-white/10 bg-white/5"
                : "border-slate-200 bg-slate-50"
            }
          `}
        >

          <Search
            className={`
              h-4
              w-4
              ${
                theme === "dark"
                  ? "text-slate-400"
                  : "text-slate-400"
              }
            `}
          />

          <input
            placeholder="Search..."

            className={`
              bg-transparent
              text-sm
              outline-none
              transition-colors
              duration-300
              ${
                theme === "dark"
                  ? "text-white placeholder:text-slate-500"
                  : "text-slate-900 placeholder:text-slate-400"
              }
            `}
          />

        </div>

        {/* NOTIFICATIONS */}
        <button
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            transition-all
            duration-300
            ${
              theme === "dark"
                ? "border-white/10 bg-white/5 hover:bg-white/10"
                : "border-slate-200 bg-white hover:bg-slate-50"
            }
          `}
        >

          <Bell
            className={`
              h-5
              w-5
              ${
                theme === "dark"
                  ? "text-slate-300"
                  : "text-slate-600"
              }
            `}
          />

        </button>

        {/* SETTINGS */}
        <button
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            transition-all
            duration-300
            ${
              theme === "dark"
                ? "border-white/10 bg-white/5 hover:bg-white/10"
                : "border-slate-200 bg-white hover:bg-slate-50"
            }
          `}
        >

          <Settings
            className={`
              h-5
              w-5
              ${
                theme === "dark"
                  ? "text-slate-300"
                  : "text-slate-600"
              }
            `}
          />

        </button>

        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}

          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            transition-all
            duration-300
            ${
              theme === "dark"
                ? "border-white/10 bg-white/5 hover:bg-white/10"
                : "border-slate-200 bg-white hover:bg-slate-50"
            }
          `}
        >

          {theme === "dark" ? (

            <Sun className="h-5 w-5 text-yellow-400" />

          ) : (

            <Moon className="h-5 w-5 text-slate-700" />

          )}

        </button>

        {/* ADMIN BADGE */}
        <div
          className={`
            flex
            items-center
            gap-3
            rounded-2xl
            border
            px-4
            py-2
            shadow-sm
            transition-all
            duration-300
            ${
              theme === "dark"
                ? "border-white/10 bg-white/5"
                : "border-slate-200 bg-white"
            }
          `}
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">

            A

          </div>

          <div className="hidden sm:block">

            <p
              className={`
                text-sm
                font-semibold
                ${
                  theme === "dark"
                    ? "text-white"
                    : "text-slate-900"
                }
              `}
            >

              Admin

            </p>

            <p
              className={`
                text-xs
                ${
                  theme === "dark"
                    ? "text-slate-400"
                    : "text-slate-500"
                }
              `}
            >

              Super Administrator

            </p>

          </div>

        </div>

      </div>

    </header>
  );
}