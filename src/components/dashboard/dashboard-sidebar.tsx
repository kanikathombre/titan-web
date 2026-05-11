"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  History,
  GitCompare,
  Files,
  User,
  CreditCard,
  BookOpen,
  ChevronLeft,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { useSidebar } from "@/lib/store";

const sidebarItems = [
  {
    label: "Predict",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    label: "History",
    href: "/dashboard/history",
    icon: History,
  },

  {
    label: "Compare",
    href: "/dashboard/compare",
    icon: GitCompare,
  },

  {
    label: "Batch",
    href: "/dashboard/batch",
    icon: Files,
  },

  {
    label: "Account",
    href: "/dashboard/account",
    icon: User,
  },

  {
    label: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },

  {
    label: "Docs",
    href: "/dashboard/docs",
    icon: BookOpen,
  },
];

export function DashboardSidebar() {

  const pathname =
    usePathname();

  const {
    sidebarCollapsed,
    toggleSidebar,
  } = useSidebar();

  return (
    <aside
      className={`flex h-screen flex-col border-r border-white/10 bg-black/95 backdrop-blur-2xl transition-all duration-300 ${
        sidebarCollapsed
          ? "w-24"
          : "w-[280px]"
      }`}
    >

      {/* Logo */}
      <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">

        {!sidebarCollapsed && (

          <div>

            <h1 className="text-2xl font-black">

              Titan AI

            </h1>

            <p className="text-sm text-muted-foreground">

              Dashboard

            </p>

          </div>
        )}

        <Button
          variant="ghost"
          size="icon"

          onClick={
            toggleSidebar
          }
        >

          <ChevronLeft
            className={`h-5 w-5 transition-transform ${
              sidebarCollapsed
                ? "rotate-180"
                : ""
            }`}
          />

        </Button>

      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-2 p-4">

        {sidebarItems.map(
          (item) => {

            const Icon =
              item.icon;

            const active =
              pathname ===
              item.href;

            return (
              <Link
                key={item.href}

                href={
                  item.href
                }

                className={`flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300 ${
                  active
                    ? "bg-primary text-white shadow-lg"
                    : "text-muted-foreground hover:bg-white/5 hover:text-white"
                }`}
              >

                <Icon className="h-5 w-5 shrink-0" />

                {!sidebarCollapsed && (

                  <span className="font-medium">

                    {
                      item.label
                    }

                  </span>
                )}

              </Link>
            );
          }
        )}

      </nav>

    </aside>
  );
}