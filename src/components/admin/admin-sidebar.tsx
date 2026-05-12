"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  Activity,
  ShieldCheck,
  Database,
  Settings,
} from "lucide-react";

const sidebarItems = [
  {
    label: "Overview",
    href: "/overview",
    icon: LayoutDashboard,
  },

  {
    label: "Users",
    href: "/admin/users",
    icon: Users,
  },

  {
    label: "Predictions",
    href: "/admin/predictions",
    icon: Activity,
  },

  {
    label: "Moderation",
    href: "/admin/moderation",
    icon: ShieldCheck,
  },

  {
    label: "Datasets",
    href: "/admin/datasets",
    icon: Database,
  },

  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },

  {
  label: "Model",
  href: "/model",
  icon: Activity,
  },
];

export function AdminSidebar() {

  const pathname =
    usePathname();

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-[280px] flex-col border-r border-border bg-background">

      {/* Logo */}
      <div className="flex h-20 items-center border-b border-border px-6">

        <div>

          <h1 className="text-2xl font-black text-foreground">

            Titan AI

          </h1>

          <p className="text-sm text-muted-foreground">

            Admin Panel

          </p>

        </div>

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
                    ? "bg-red-500 text-white shadow-lg"
                    : "text-foreground hover:bg-gray-200 dark:hover:bg-white/10"
                }`}
              >

                <Icon className="h-5 w-5 shrink-0" />

                <span className="font-medium">

                  {item.label}

                </span>

              </Link>
            );
          }
        )}

      </nav>

    </aside>
  );
}