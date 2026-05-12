import type {
  ReactNode,
} from "react";

import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: Props) {

  return (
    <div className="flex min-h-screen bg-background text-foreground">

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">

        <DashboardSidebar />

      </div>

      {/* Main */}
      <div className="ml-[280px] flex flex-1 flex-col">

        {/* Header */}
        <DashboardHeader title="Dashboard" />

        {/* Page Content */}
        <main className="flex-1 p-6">

          {children}

        </main>

      </div>

    </div>
  );
}