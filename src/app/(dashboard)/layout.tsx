"use client";

import type {
  ReactNode,
} from "react";

import {
  DashboardSidebar,
} from "@/components/dashboard/dashboard-sidebar";

import {
  DashboardHeader,
} from "@/components/dashboard/dashboard-header";

import {
  useSidebar,
} from "@/lib/store";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: Props) {

  const {
    sidebarCollapsed,
  } = useSidebar();

  return (
    <div className="flex min-h-screen bg-background text-foreground">

      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main */}
      <div
        className={`flex flex-1 flex-col transition-all duration-300 ${
          sidebarCollapsed
            ? "ml-[90px]"
            : "ml-[280px]"
        }`}
      >

        {/* Header */}
        <DashboardHeader title="Dashboard" />

        {/* Content */}
        <main className="flex-1 p-6">

          {children}

        </main>

      </div>

    </div>
  );
}