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
  Menu,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { useSidebar } from "@/lib/store";

const sidebarItems = [
  {
    label: "Predict",
    href: "/predict",
    icon: LayoutDashboard,
  },

  {
    label: "History",
    href: "/history",
    icon: History,
  },

  {
    label: "Compare",
    href: "/compare",
    icon: GitCompare,
  },

  {
    label: "Batch",
    href: "/batch",
    icon: Files,
  },

  {
    label: "Account",
    href: "/account",
    icon: User,
  },

  {
    label: "Billing",
    href: "/billing",
    icon: CreditCard,
  },

  {
    label: "Docs",
    href: "/docs",
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
      className={`fixed left-0 top-0 flex h-screen flex-col border-r border-border bg-background transition-all duration-300 ${
        sidebarCollapsed
          ? "w-24"
          : "w-[280px]"
      }`}
    >

      {/* Logo */}
      <div className="flex h-20 items-center justify-between border-b border-border px-6">

        {!sidebarCollapsed && (

          <div>

            <h1 className="text-2xl font-black text-foreground">

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

          <Menu
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
                    : "text-foreground hover:bg-gray-500 dark:hover:bg-white/30 hover:shadow-md"
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