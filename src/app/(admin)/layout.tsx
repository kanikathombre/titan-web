"use client";

import AdminRoute from "@/components/auth/admin-route";

import type {
  ReactNode,
} from "react";

import {
  ThemeProvider,
  useTheme,
} from "@/context/theme-context";

import { AdminSidebar } from "@/components/admin/admin-sidebar";

import { AdminHeader } from "@/components/admin/admin-header";

type Props = {
  children: ReactNode;
};

function DashboardLayout({
  children,
}: Props) {

  const { theme } =
    useTheme();

  return (

    <div
      className={`
        flex
        min-h-screen
        transition-all
        duration-300
        ${
          theme === "dark"
            ? "bg-[#020817] text-white"
            : "bg-[#F5F7FB] text-slate-900"
        }
      `}
    >

      {/* SIDEBAR */}
      <AdminSidebar />

      {/* MAIN */}
      <div className="ml-[280px] flex min-h-screen flex-1 flex-col">

        {/* HEADER */}
        <AdminHeader />

        {/* CONTENT */}
        <main className="flex-1 p-8">

          {children}

        </main>

      </div>

    </div>
  );
}

export default function AdminLayout({
  children,
}: Props) {

  return (

    <AdminRoute>

    <ThemeProvider>

      <DashboardLayout>

        {children}

      </DashboardLayout>

    </ThemeProvider>

    </AdminRoute>
  );
}