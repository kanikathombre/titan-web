import type {
  ReactNode,
} from "react";

import { redirect } from "next/navigation";

import { AdminSidebar } from "@/components/admin/admin-sidebar";

import { AdminHeader } from "@/components/admin/admin-header";

type Props = {
  children: ReactNode;
};

export default function AdminLayout({
  children,
}: Props) {

  // MOCK ROLE CHECK
  const role = "admin";

  // Route protection
  if (role !== "admin") {

    redirect("/");

  }

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main */}
      <div className="ml-[280px] flex min-h-screen flex-col">

        {/* Header */}
        <AdminHeader />

        {/* Content */}
        <main className="flex-1 p-8">

          {children}

        </main>

      </div>

    </div>
  );
}