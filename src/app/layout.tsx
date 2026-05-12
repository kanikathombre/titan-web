"use client";

import "./globals.css";

import { usePathname } from "next/navigation";

import { SiteFooter } from "@/components/marketing/site-footer";

import { ThemeProvider } from "@/components/theme-provider";

import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname =
    usePathname();

  const isDashboard =
  pathname === "/predict" ||
  pathname === "/compare" ||
  pathname.startsWith("/history") ||
  pathname.startsWith("/batch") ||
  pathname.startsWith("/account") ||
  pathname.startsWith("/billing") ||
  pathname.startsWith("/docs");

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >

      <body>

        <ThemeProvider>

          {children}

          {!isDashboard && (
            <SiteFooter />
          )}

          <Toaster richColors />

        </ThemeProvider>

      </body>

    </html>
  );
}